import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Grid2X2,
  Grid2x2CheckIcon,
  Grid2X2Icon,
  MessageCircle,
  Workflow,
} from "lucide-react";
import React from "react";
import { BsBoxSeamFill } from "react-icons/bs";

function ManageEventsCard() {
  return (
    <div className=" w-full p-6 flex flex-col items-center">
      <div className=" flex items-center gap-x-4 w-fit mt-4">
        <BsBoxSeamFill className=" size-8" />
        <div>
          <h1 className=" font-bold text-xl text-neutral-700">
            Manage Events in 1 Place
          </h1>
          <p className=" tracking-tight -mt-1 text-muted-foreground">
            Manage all of your events in one place.
          </p>
        </div>
      </div>
      <Card className=" w-full mt-8">
        <CardHeader>
          <CardTitle>Events</CardTitle>
          <CardDescription>Upcoming events</CardDescription>
        </CardHeader>
        <CardContent className=" flex flex-col gap-y-2">
          <div className=" border py-2 px-1 rounded font-semibold pl-3">
            1. <span className=" ml-2">Event One</span>
            <Badge className=" ml-16">RSVP</Badge>
            <Badge className=" ml-4" variant={"destructive"}>
              Delete
            </Badge>
          </div>
          <div className=" border py-2 px-1 rounded font-semibold pl-2">
            2. <span className=" ml-2">Event Two</span>
            <Badge className=" ml-16">RSVP</Badge>
            <Badge className=" ml-4" variant={"destructive"}>
              Delete
            </Badge>
          </div>
          <div className=" border py-2 px-1 rounded font-semibold ">
            3. <span className=" ml-2">Event Three</span>
            <Badge className=" ml-14">RSVP</Badge>
            <Badge className=" ml-4" variant={"destructive"}>
              Delete
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default ManageEventsCard;
