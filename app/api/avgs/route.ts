import connectToDB from "@/utils/databse";
import User from "@/models/user";

export const dynamic = 'force-dynamic';
export const GET = async () => {
    try {
        await connectToDB()
        const users = await User.find({}).populate('ip')
        const response = new Response(JSON.stringify(users), {status: 200})
        response.headers.set('Cache-Control', 'no-store')
        return response
    } catch (error) {
        return new Response("Failed to fetch all avgs", { status: 500 })
    }
}