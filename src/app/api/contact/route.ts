import { NextResponse } from "next/server";
import { saveLead } from "@/lib/storage";
import { ContactEnquiry } from "@/types";

export async function POST(request: Request) {
  try {
    const body: ContactEnquiry = await request.json();

    // Spam Honeypot check: If the hidden honeypot field is filled, silently reject or accept without storing
    if (body.honeypot && body.honeypot.trim() !== "") {
      return NextResponse.json(
        { success: true, message: "Enquiry submitted successfully." },
        { status: 200 }
      );
    }

    // Required field validation
    if (!body.fullName || body.fullName.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide your full name." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!body.email || !emailRegex.test(body.email)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid business email address." },
        { status: 400 }
      );
    }

    if (!body.phone || body.phone.trim().length < 5) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid phone number with country code." },
        { status: 400 }
      );
    }

    if (!body.service) {
      return NextResponse.json(
        { success: false, error: "Please select the service you require." },
        { status: 400 }
      );
    }

    if (!body.projectDescription || body.projectDescription.trim().length < 15) {
      return NextResponse.json(
        {
          success: false,
          error: "Please provide a brief description of your project (at least 15 characters).",
        },
        { status: 400 }
      );
    }

    // Persist enquiry into persistent lead storage
    const storedLead = saveLead(body);

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for reaching out to ALBERTECH. Your enquiry has been securely received by our solutions team.",
        leadId: storedLead.id,
        createdAt: storedLead.createdAt,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error processing contact enquiry:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while processing your enquiry. Please try again or reach out via WhatsApp.",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: "healthy",
    endpoint: "/api/contact",
    method: "POST",
    supportedServices: [
      "Website Design & Development",
      "E-commerce Solutions",
      "Digital Marketing",
      "Search Engine Optimization (SEO)",
      "Business Automation",
    ],
  });
}

