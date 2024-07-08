"use server";
import prisma from "@/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";


export async function getUserData() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    throw new Error("User not found");
  }
  const dbUser = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
  });
  return dbUser;
}

export async function createEvent(formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    redirect("/api/auth/login");
  }
  const name = formData.get("name") as string;
  const desc = formData.get("desc") as string;
  const date = formData.get("date") as string;
  const location = formData.get("location") as string;

  try {
    await prisma.event.create({
      data: {
        title: name,
        description: desc,
        date,
        location,
        userId: user.id,
      },
    });
  } catch (error) {
    console.log(error);
  }
  return redirect("/events");
}

export async function getEvents() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    redirect("/api/auth/login");
  }

  const events = await prisma.event.findMany({
    where: {
      userId: user.id,
    },
  });
  return events;
}


export async function addRsvp(formData: FormData) {
  const eventId = formData.get("eventId") as string;
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const email = formData.get("email") as string;

  await prisma.rSVP.create({
    data: {
      name,
      phone,
      eventId,
      email
    },
  });
  return redirect("/success");
}

export async function getRsvp(id: string) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    redirect("/api/auth/login");
  }
  const data = await prisma.rSVP.findMany({
    where: {
      eventId: id,
    },
  });
  return data;
}
