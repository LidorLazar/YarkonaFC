import {NextRequest, NextResponse} from "next/server";
import {db} from "@/lib/db";

export async function GET(request: NextRequest) {
    const data:any = await db.user.findMany()

    return NextResponse.json(data)
}


