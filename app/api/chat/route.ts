import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const lowerMsg = message.toLowerCase();

    // Simulated delay for "thinking"
    await new Promise((resolve) => setTimeout(resolve, 1500));

    let response = "I'm not sure about that. Try asking for 'properties in Lekki' or 'cheap apartments in Ikeja'.";

    // Basic Keyword Matching Logic
    if (lowerMsg.includes('hello') || lowerMsg.includes('hi')) {
      response = "Hello! I'm Chinedu. How can I help you find your next home today? You can ask me to find specific properties or check rental trends.";
    } else if (lowerMsg.includes('lekki')) {
      response = "I found 3 great properties in Lekki for you:\n\n1. Luxury 3-Bed Apartment (₦8.5m/yr) - Serviced, Pool.\n2. 4-Bed Duplex (₦150m Sale) - Gated Estate.\n\nWould you like to schedule a viewing for any of these?";
    } else if (lowerMsg.includes('rent') || lowerMsg.includes('lease')) {
      response = "For rentals, we have options ranging from ₦2m to ₦15m per annum depending on the location. \n\nAre you looking for the Island (Lekki, Ikoyi, VI) or Mainland (Ikeja, Surulere)?";
    } else if (lowerMsg.includes('buy') || lowerMsg.includes('sale')) {
      response = "Buying is a great investment! We check all titles (C of O, Governor's Consent) before listing.\n\nWhat is your budget range for a purchase?";
    } else if (lowerMsg.includes('short-let') || lowerMsg.includes('airbnb')) {
      response = "I have a cozy 2-Bedroom flat in Victoria Island available for ₦85,000 per night. It has Sea View and 24/7 Power. Want to see photos?";
    } else if (lowerMsg.includes('agent') || lowerMsg.includes('contact')) {
      response = "You can contact the agent directly via the 'Chat' button on any property page. All our agents are verified with NIN/BVN checks.";
    } else if (lowerMsg.includes('scam') || lowerMsg.includes('fake')) {
      response = "We take safety seriously. All listings on EstateMind are 'TrueVerify™ Checked' with mandatory video tours. Never pay inspection fees before viewing.";
    }

    return NextResponse.json({ response });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { response: "I'm having a bit of trouble connecting right now. Please try again." }, 
      { status: 500 }
    );
  }
}
