import { ForkLeft } from "@mui/icons-material";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

 const DIRECTUS_URL = process.env.NEXT_PUBLIC_DIRECTUS_API_ENDPOINT;
  //const TOKEN = "your_token_here";

  const res = await fetch(`${DIRECTUS_URL}/items/final_account_public_info`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
     // Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({      
      project_name: body.project_name,
      project_code: body.project_code,
      left1: body.left1 || null,
      left2: body.left2 || null,
      left3: body.left3 || null,
      left4: body.left4 || null,
      left5: body.left5 || null,  
      left6: body.left6 || null,
      left7: body.left7 || null,
      left8: body.left8 || null,
      left9: body.left9 || null,
      left10: body.left10 || null,
      left11: body.left11 || null,
      left12: body.left12 || null,
      left13: body.left13 || null,
      left14: body.left14 || null,
      left15: body.left15 || null,
      riht1: body.right1 || null,
      riht2: body.right2 || null,
      riht3: body.right3 || null,
      riht4: body.right4 || null,
      riht5: body.right5 || null,
      right6: body.right6 || null,
      right7: body.right7 || null,
      right8: body.right8 || null,
      right9: body.right9 || null,
      right10: body.right10 || null,
      right11: body.right11 || null,
      right12: body.right12 || null,
      right13: body.right13 || null,
      right14: body.right14 || null,
      right15: body.right15 || null,
    }),
  });

  const data = await res.json();
  return NextResponse.json(data);
}
