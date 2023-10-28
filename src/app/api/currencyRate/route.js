import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
const API_KEY = process.env.API_KEY;
export async function GET(req) {
  try {
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/MMK`
    );
    const currencyData = await response.json();

    if (currencyData.result == "success") {
      return NextResponse.json({ data: currencyData }, { status: 200 });
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
