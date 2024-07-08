"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { RiMapPin2Fill } from "react-icons/ri";
function DatePickerCard() {

  return (
    <div className="flex flex-col items-center py-4  h-full ">
      <div className="flex items-center gap-x-4 w-fit mt-4">
        <RiMapPin2Fill className="size-8" />
        <div>
          <h1 className="font-bold text-xl text-neutral-700">RSVP an Event</h1>
          <p className="tracking-tight -mt-1 text-muted-foreground">
            Let users rsvp your events.
          </p>
        </div>
      </div>
      <div className="mt-4 ">
        <Button className=" w-60">RSVP NOW!</Button>
      </div>
      <p className=" w-60 mt-3 text-lg font-semibold tracking-tight text-muted-foreground">
        Get an instant email as you rsvp the events with every details.
      </p>
    </div>
  );
}

export default DatePickerCard;
