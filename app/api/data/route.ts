import { NextResponse} from "next/server";
import {db} from "@/lib/db";

export async function GET() {
    const data:any = await db.user.findMany()
    return NextResponse.json(data)
}


