import prisma from "@/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

import { unstable_noStore as noStore } from "next/cache";
export async function GET(){
    noStore();
    const {getUser} = getKindeServerSession()
    const user = await getUser()

    if (!user) throw new Error("User not found");

    let dbUser = await prisma.user.findUnique({
        where:{
            id:user?.id
        }
    })

    if(!dbUser){
        dbUser = await prisma.user.create({
            data:{
                id:user?.id,
                email:user?.email as string,
                profileImg:user.picture as string,
                first_name:user.given_name as string,
                last_name:user.family_name as string,

            }
        })
    }
    return NextResponse.redirect(
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/dashboard"
        : "https://reddit-clone-deployment.vercel.app/"
    );
}   