import {NextRequest, NextResponse} from "next/server";
import {db} from "@/lib/db";

// export async function GET(request: NextRequest) {
//     const data: any = await db.user.findMany()
//     return NextResponse.json(data)
// }
//
//
export async function GET(request: NextRequest) {
    try {
        const data: any = await db.user.findMany();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}