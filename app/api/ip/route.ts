import type {NextRequest} from "next/server";

export const dynamic = 'force-dynamic';
export function GET(req: NextRequest) {
    // @ts-ignore
    const ip = req.headers['x-forwarded-for'] || '';
    return new Response(JSON.stringify(ip), {status: 200});
}