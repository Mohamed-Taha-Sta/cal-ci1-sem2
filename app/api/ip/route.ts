import type {NextRequest} from "next/server";

export const dynamic = 'force-dynamic';
export function GET(req: NextRequest) {
    // @ts-ignore
    const ip = req.ip
    return new Response(ip, {status: 200})
}