import {db} from "@/lib/db";
import {NextResponse} from "next/server";


export async function GET(){

    const player = await db.user.findMany()
    return NextResponse.json(player)

}