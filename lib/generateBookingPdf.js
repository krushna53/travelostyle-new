import PDFDocument from "pdfkit";

const NAVY = "#2C3078";
const MUTED = "#555555";

function line(doc, label, value) {
  if (value === undefined || value === null || value === "") return;
  doc
    .font("Helvetica-Bold")
    .fillColor(NAVY)
    .fontSize(10)
    .text(`${label}: `, { continued: true })
    .font("Helvetica")
    .fillColor(MUTED)
    .text(String(value));
}

function sectionHeader(doc, title) {
  doc.moveDown(0.6);
  doc.font("Helvetica-Bold").fillColor(NAVY).fontSize(13).text(title);
  doc
    .moveTo(doc.x, doc.y + 2)
    .lineTo(545, doc.y + 2)
    .strokeColor("#d9d6ea")
    .stroke();
  doc.moveDown(0.4);
}

/**
 * Builds a PDF summarizing a booking request and returns it as a Buffer.
 * Pure server-side generation (pdfkit), no headless browser needed —
 * safe to run inside a Netlify/Next.js serverless function.
 */
export function generateBookingPdf(payload) {
  const {
    journey = {},
    counts = {},
    travelers = [],
    lead = {},
    flexibleDates,
    flights = {},
    meal = {},
    transfers = {},
    visa,
    insurance,
    emergencyContacts = [],
    notes = {},
    declaration = {},
    payMode,
    amountDue,
    paymentStatus,
  } = payload;

  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({ size: "A4", margin: 50 });
      const chunks = [];
      doc.on("data", (chunk) => chunks.push(chunk));
      doc.on("end", () => resolve(Buffer.concat(chunks)));
      doc.on("error", reject);

      // Header
      doc.font("Helvetica-Bold").fillColor(NAVY).fontSize(20).text("TravelOStyle — Booking Confirmation");
      doc.font("Helvetica").fillColor(MUTED).fontSize(10).text(`Generated ${new Date().toLocaleString("en-US")}`);
      doc.moveDown(1);

      doc.font("Helvetica-Bold").fillColor(NAVY).fontSize(16).text(journey.title || "Land Journey");
      doc.moveDown(0.3);
      line(doc, "Destinations", journey.destinationsList || journey.location);
      line(doc, "Departure", journey.date);
      line(doc, "Duration", journey.duration);
      line(doc, "Price per person", journey.price ? `$${journey.price}` : undefined);
      line(doc, "Travelers", `${counts.adults || 0} Adult(s), ${counts.children || 0} Child(ren), ${counts.infants || 0} Infant(s)`);
      line(doc, "Flexible Dates", flexibleDates);

      sectionHeader(doc, "Lead Traveler Contact");
      line(doc, "Phone", lead.phone);
      line(doc, "Email", lead.email);
      line(doc, "City & Country of Residence", lead.city);

      sectionHeader(doc, "Travelers");
      travelers.forEach((t, i) => {
        doc.font("Helvetica-Bold").fillColor(NAVY).fontSize(11).text(`Traveler ${i + 1} (${t.type})`);
        doc.moveDown(0.15);
        line(doc, "Full Name", t.fullName);
        line(doc, "Date of Birth", t.dob);
        line(doc, "Gender", t.gender);
        line(doc, "Nationality", t.nationality);
        line(doc, "Passport Number", t.passportNumber);
        line(doc, "Passport Expiry", t.passportExpiry);
        line(doc, "Travel Type", "Escorted");
        doc.moveDown(0.4);
      });

      sectionHeader(doc, "Flights & Meal Preferences");
      line(doc, "Departure City", flights.departureCity);
      line(doc, "Preferred Airline", flights.airline);
      line(doc, "Cabin Class", flights.cabin);
      line(doc, "Frequent Flyer Details", flights.frequentFlyer);
      line(doc, "Meal Type", meal.type);
      line(doc, "Food Allergies / Restrictions", meal.allergies);
      line(doc, "Airport Transfers Required", transfers.airport);
      line(doc, "Guide Required", transfers.guide);
      line(doc, "Language Preference", transfers.language);

      sectionHeader(doc, "Visa & Travel Insurance");
      line(doc, "Visa Assistance Requested", visa);
      line(doc, "Travel Insurance Requested", insurance);

      sectionHeader(doc, "Emergency Contacts");
      emergencyContacts.forEach((c, i) => {
        line(doc, `Contact ${i + 1}`, `${c.name || "-"} (${c.relationship || "-"}) — ${c.phone || "-"}`);
      });

      sectionHeader(doc, "Additional Notes");
      line(doc, "Special Occasions", notes.occasion);
      line(doc, "Medical / Mobility Considerations", notes.medical);
      line(doc, "Other Remarks", notes.other);

      sectionHeader(doc, "Declaration & Payment");
      line(doc, "Declaration Confirmed By", declaration.name);
      line(doc, "Declaration Date", declaration.date);
      line(doc, "Payment Option", payMode === "deposit" ? "Deposit" : "Full Amount");
      line(doc, "Amount Paid", amountDue ? `$${amountDue}` : undefined);
      line(doc, "Payment Status", paymentStatus || "Paid");
      doc.moveDown(0.6);
      doc
        .font("Helvetica")
        .fillColor(MUTED)
        .fontSize(9)
        .text(
          "This document summarizes your booking request with TravelOStyle. It does not constitute a confirmed booking " +
            "until the required deposit is received and written confirmation is issued. See Terms & Conditions for full details."
        );

      doc.end();
    } catch (err) {
      reject(err);
    }
  });
}
