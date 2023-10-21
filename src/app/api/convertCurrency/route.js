import { NextResponse } from "next/server";
const API_KEY = process.env.API_KEY;
export async function GET(req) {
  const searchParams = req.nextUrl.searchParams;
  const from = searchParams.get("from");
  const amount = searchParams.get("amount");
  if (!from || !amount) {
    return NextResponse.json(
      { err: "Please provide necessary fields" },
      { status: 400 }
    );
  }
  try {
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${from}/MMK/${amount}`
    );
    const convertData = await response.json();
    if (convertData.result == "success") {
      return NextResponse.json({ data: convertData }, { status: 200 });
    } else {
      return NextResponse.json(
        { err: "Internal Server Error" },
        { status: 500 }
      );
    }
  } catch (err) {
    return NextResponse.json({ err: err }, { status: 500 });
  }
}
