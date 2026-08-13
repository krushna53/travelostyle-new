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
    paymentMethod,
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
      line(doc, "Travel Type", "Escorted");

      sectionHeader(doc, "Lead Traveler Contact");
      line(doc, "Phone", lead.phone);
      line(doc, "Email", lead.email);
      line(doc, "Address Line 1", lead.address1);
      line(doc, "Address Line 2", lead.address2);
      line(doc, "City", lead.city);
      line(doc, "State", lead.state);
      line(doc, "Zip Code", lead.zip);
      line(doc, "Country", lead.country);

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
        if (t.sameAsLead === false) {
          line(doc, "Phone", t.phone);
          line(doc, "Email", t.email);
          line(doc, "Address Line 1", t.address1);
          line(doc, "Address Line 2", t.address2);
          line(doc, "City", t.city);
          line(doc, "State", t.state);
          line(doc, "Zip Code", t.zip);
          line(doc, "Country", t.country);
        } else {
          line(doc, "Contact Info", "Same as lead traveler");
        }
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
      line(doc, "Language Preference", Array.isArray(transfers.language) ? transfers.language.join(", ") : transfers.language);

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
      line(doc, "Payment Method", paymentMethod);
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

const FIELD_BOX_HEIGHT = 20;
const FIELD_ROW_HEIGHT = 9 + 3 + FIELD_BOX_HEIGHT + 10; // label + gap + box + spacing after

// Draws one labeled, boxed input field (like a real form field: label on
// top, an empty bordered rectangle to write in below it) at a fixed x/y so
// it can be placed precisely inside a multi-column grid.
function blankField(doc, x, y, label, width = 235) {
  doc.font("Helvetica-Bold").fillColor(NAVY).fontSize(9).text(label, x, y, { width });
  const boxY = y + 9 + 3;
  doc.rect(x, boxY, width, FIELD_BOX_HEIGHT).strokeColor("#c9c6e0").stroke();
}

// Lays out a list of field labels as boxed inputs in two columns, each row
// advancing both columns together so labels/boxes stay aligned across the
// page instead of drifting when one column's text wraps to two lines.
function blankFieldGrid(doc, labels, colWidth = 235, gap = 30) {
  const leftX = doc.page.margins.left;
  const rightX = leftX + colWidth + gap;
  const mid = Math.ceil(labels.length / 2);
  const leftLabels = labels.slice(0, mid);
  const rightLabels = labels.slice(mid);
  const rows = Math.max(leftLabels.length, rightLabels.length);

  for (let i = 0; i < rows; i++) {
    if (doc.y + FIELD_ROW_HEIGHT > 780) doc.addPage();
    const rowY = doc.y;
    if (leftLabels[i]) blankField(doc, leftX, rowY, leftLabels[i], colWidth);
    if (rightLabels[i]) blankField(doc, rightX, rowY, rightLabels[i], colWidth);
    doc.y = rowY + FIELD_ROW_HEIGHT;
  }
  doc.x = leftX;
}

function blankCheckboxRow(doc, label, options) {
  if (doc.y > 760) doc.addPage();
  doc.font("Helvetica-Bold").fillColor(NAVY).fontSize(9).text(label, { continued: false });
  doc.moveDown(0.2);
  const startX = doc.x;
  let x = startX;
  options.forEach((opt) => {
    doc.rect(x, doc.y + 1, 9, 9).strokeColor("#8b86b8").stroke();
    doc.font("Helvetica").fillColor(MUTED).fontSize(9).text(opt, x + 13, doc.y);
    x += 13 + doc.widthOfString(opt) + 20;
  });
  doc.x = startX;
  doc.moveDown(1.2);
}

/**
 * Builds a blank, printable version of the full 8-step booking form (minus
 * Review/Payment, which have no offline-fillable inputs of their own),
 * sized to the traveler counts picked on Step 1 — one Traveler Details
 * section per Adult/Child/Infant, plus every other step's fields, so a
 * customer can fill it out offline before typing it into the online flow.
 */
export function generateBlankTravelerFormPdf({ journey = {}, counts = {} }) {
  const adults = Number(counts.adults) || 0;
  const children = Number(counts.children) || 0;
  const infants = Number(counts.infants) || 0;

  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({ size: "A4", margin: 50 });
      const chunks = [];
      doc.on("data", (chunk) => chunks.push(chunk));
      doc.on("end", () => resolve(Buffer.concat(chunks)));
      doc.on("error", reject);

      doc.font("Helvetica-Bold").fillColor(NAVY).fontSize(20).text("TravelOStyle — Booking Form");
      doc.font("Helvetica").fillColor(MUTED).fontSize(10).text(`Generated ${new Date().toLocaleString("en-US")}`);
      doc.moveDown(1);

      doc.font("Helvetica-Bold").fillColor(NAVY).fontSize(16).text(journey.title || "Land Journey");
      doc.moveDown(0.3);
      line(doc, "Destinations", journey.destinationsList || journey.location);
      line(doc, "Departure", journey.date);
      line(doc, "Duration", journey.duration);
      line(doc, "Travelers", `${adults} Adult(s), ${children} Child(ren), ${infants} Infant(s)`);
      line(doc, "Travel Type", "Escorted");

      // ---- Step 2: Traveler & Passport Details ----
      const types = [
        ...Array(adults).fill("Adult"),
        ...Array(children).fill("Child"),
        ...Array(infants).fill("Infant"),
      ];

      types.forEach((type, i) => {
        sectionHeader(doc, `Traveler ${i + 1} (${type})`);
        blankFieldGrid(doc, [
          "Full Name (as per passport)",
          "Passport Number",
          "Passport Expiry Date",
          "Nationality",
          "Date of Birth",
          "Gender",
          "Phone (if different from lead)",
          "Email (if different from lead)",
        ]);
      });

      sectionHeader(doc, "Lead Traveler Contact");
      blankFieldGrid(doc, [
        "Contact Number (WhatsApp preferred)",
        "Email Address",
        "Address Line 1",
        "Address Line 2",
        "City",
        "State",
        "Zip Code",
        "Country",
      ]);

      sectionHeader(doc, "Trip Travel Details");
      line(doc, "Destination(s)", journey.destinationsList || journey.location);
      line(doc, "Date of Departure", journey.date);
      line(doc, "Duration", journey.duration);
      line(doc, "Flexible Dates", "No");
      line(doc, "Travel Type", "Escorted");

      // ---- Step 3: Flights & Meal Preferences ----
      sectionHeader(doc, "Flights");
      blankFieldGrid(doc, ["Departure City", "Preferred Airline", "Cabin Class", "Frequent Flyer Details"]);

      sectionHeader(doc, "Meal Preferences");
      blankFieldGrid(doc, ["Meal Type", "Food Allergies / Restrictions"]);

      sectionHeader(doc, "Transfers & Services");
      blankFieldGrid(doc, ["Airport Transfers Required (Yes/No)", "Guide Required (Yes/No)", "Language Preference"]);

      // ---- Step 4: Visa & Travel Insurance ----
      sectionHeader(doc, "Visa & Travel Insurance");
      blankCheckboxRow(doc, "Visa Assistance Requested", ["Yes", "No"]);
      blankCheckboxRow(doc, "Travel Insurance Requested", ["Yes", "No"]);

      // ---- Step 5: Emergency Contact ----
      sectionHeader(doc, "Emergency Contact");
      blankFieldGrid(doc, ["Name", "Relationship", "Contact Number"]);

      // ---- Step 6: Additional Notes & Declaration ----
      sectionHeader(doc, "Additional Notes");
      blankFieldGrid(doc, ["Special Occasions", "Medical / Mobility Considerations", "Other Remarks"]);

      sectionHeader(doc, "Declaration");
      doc
        .font("Helvetica")
        .fillColor(MUTED)
        .fontSize(9)
        .text(
          "I confirm that the above details are accurate and authorize TravelOStyle to use this information for " +
            "travel planning and bookings. I have read and agree to the Terms and Conditions."
        );
      doc.moveDown(0.6);
      blankFieldGrid(doc, ["Date", "Name"]);

      doc.moveDown(0.6);
      doc
        .font("Helvetica")
        .fillColor(MUTED)
        .fontSize(9)
        .text(
          "Fill this out and bring it with you, or use it as a reference while completing the online booking form. " +
            "This form is not a confirmed booking."
        );

      doc.end();
    } catch (err) {
      reject(err);
    }
  });
}
