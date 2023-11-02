import {NextRequest, NextResponse} from "next/server";
import {db} from "@/lib/db";

export async function GET(req: NextRequest) {
    const data:{} = await db.user.findMany()

    return NextResponse.json(data)
}