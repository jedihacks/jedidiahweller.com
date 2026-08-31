import { NextResponse } from "next/server";

/** Reserved transport seam. The form presently uses a transparent mailto fallback. */
export async function POST() { return NextResponse.json({ error: "Inquiry transport is not connected. Email hello@openforge.io instead.", fallback: "mailto:hello@openforge.io" }, { status: 501 }); }
