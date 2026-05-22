import { NextResponse } from "next/server";

const properties = [
  {
    title: "Kingston Apartment",
    parish: "Kingston",
    price: 12000000,
    bedrooms: 2,
    bathrooms: 1,
  },
  {
    title: "Montego Bay Villa",
    parish: "St James",
    price: 18000000,
    bedrooms: 4,
    bathrooms: 3,
  },
  {
    title: "Portmore House",
    parish: "St Catherine",
    price: 8500000,
    bedrooms: 3,
    bathrooms: 2,
  },
];

export async function POST(req: Request) {
  const body = await req.json();

  const filtered = properties.filter(
    (p) =>
      (!body.parish || p.parish === body.parish) &&
      (!body.budget || p.price <= body.budget)
  );

  return NextResponse.json({
    results: filtered,
  });
}
