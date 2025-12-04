import { NextResponse } from "next/server";

const DIRECTUS_URL = process.env.NEXT_PUBLIC_DIRECTUS_API_ENDPOINT;

export const GET = async () => {
  const res = await fetch(`${DIRECTUS_URL}/items/final_account_public_info`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json(); // Directus GET 一定返回 JSON

  return NextResponse.json({
    fetched: true,
    count: data.data?.length || 0,
    items: data.data,
  });
};
