import { getServerSession } from "next-auth";
import UserModel from "@/model/User";
import dbConnect from "@/lib/dbConect";
import { User } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/option";
import mongoose from "mongoose";

export async function GET(request: Request) {
    await dbConnect();
    const session = await getServerSession(authOptions)
        const user: User = session?.user as User;
    
        if(!session || !session.user) {
            return Response.json({
                    success: false,
                    message: "Not authenticated"
                }, { status: 401 });
        }
        const userId = new mongoose.Types.ObjectId(user._id);

        try {
            const user = await 
        } catch (error) {
            
        }

}