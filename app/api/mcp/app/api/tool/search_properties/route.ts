import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const properties = [
    {
      title: "Kingston Apartment",
      parish: "Kingston",
      price: 12000000
    },
    {
      title: "Montego Bay Villa",
      parish: "St James",
      price: 18000000
    }
  ];

  const filtered = properties.filter(
    (p) =>
      (!body.parish || p.parish === body.parish) &&
      (!body.budget || p.price <= body.budget)
  );

  return NextResponse.json({
    results: filtered
  });
}