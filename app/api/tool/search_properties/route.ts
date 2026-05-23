import { NextResponse } from "next/server";

interface SearchRequest {
  parish?: string;
  budget?: number;
}

const PROPERTIES = [
  { title: "Kingston Apartment", parish: "Kingston", price: 12000000 },
  { title: "Montego Bay Villa", parish: "St James", price: 18000000 }
];

export async function POST(req: Request) {
  try {
    const body: SearchRequest = await req.json();

    const searchParish = body.parish?.toLowerCase().trim();
    const searchBudget = body.budget;

    const filtered = PROPERTIES.filter(p => {
      const matchesParish = !searchParish || 
        p.parish.toLowerCase().includes(searchParish);
      const matchesBudget = !searchBudget || 
        p.price <= searchBudget;
        
      return matchesParish && matchesBudget;
    });

    return NextResponse.json({ results: filtered });
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}