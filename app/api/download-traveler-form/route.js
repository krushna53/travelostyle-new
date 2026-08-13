import { generateBlankTravelerFormPdf } from "@/lib/generateBookingPdf";

export async function POST(req) {
  try {
    const body = await req.json();
    const journeyTitle = body?.journey?.title || "Land-Journey";
    const pdfBuffer = await generateBlankTravelerFormPdf(body);
    const fileName = `TravelOStyle-Traveler-Form-${journeyTitle.replace(/[^a-z0-9]+/gi, "-")}.pdf`;

    return new Response(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${fileName}"`,
      },
    });
  } catch (error) {
    console.error("download-traveler-form error:", error);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
