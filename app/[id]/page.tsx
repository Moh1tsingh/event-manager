import { Card } from "@/components/ui/card";
import prisma from "@/lib/prisma";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addRsvp } from "../actions";
import SubmitButton from "../components/SubmitButton";

import { unstable_noStore as noStore } from "next/cache";

async function page({ params }: { params: { id: string } }) {
  noStore();
  const data = await prisma.event.findUnique({
    where: {
      id: params.id.toString(),
    },
  });
  if (!data) {
    return <div>No Event Found.</div>;
  }
  return (
    <div className=" w-[600px] mx-auto mt-20">
      <Card className=" w-full flex justify-between items-center px-4 gap-x-2 ">
        <div key={data.id} className="flex flex-col gap-y-1 p-3">
          <h1 className="font-bold text-lg">{data.title}</h1>
          <p className="text-muted-foreground">{data.description}</p>
          <p className="text-muted-foreground">{data.date}</p>
          <p className="text-muted-foreground">{data.location}</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="default">RSVP Now</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add your details</DialogTitle>
              <DialogDescription>
                Enter your details to RSVP to this event.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <form
                action={addRsvp}
                className="flex flex-col items-center gap-4 pl-5"
              >
                <Input type="hidden" name="eventId" value={data.id} />
                <div className=" w-full flex flex-col gap-2 items-start">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Rick Roll"
                    className="col-span-3"
                  />
                </div>
                <div className=" w-full flex flex-col gap-1 justify-start items-start">
                  <Label htmlFor="phone" className="text-right">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="9999 9999 99"
                    className="col-span-3"
                  />
                </div>
                <div className=" w-full flex flex-col gap-1 justify-start items-start">
                  <Label htmlFor="email" className="text-right">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="xyz@gamil.com"
                    className="col-span-3"
                  />
                </div>
                <SubmitButton />
              </form>
            </div>
          </DialogContent>
        </Dialog>
      </Card>
    </div>
  );
}

export default page;
