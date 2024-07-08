
import React from "react";
import { Card } from "@/components/ui/card";
import { getEvents } from "../actions";
import { redirect } from "next/navigation";
import { Button } from "react-day-picker";
import Link from "next/link";

async function EventCardRSVP() {
  const events = await getEvents();
  return (
    <div className=" w-1/2 p-4">
      <div className="flex flex-col gap-y-4">
        {events.map((event) => (
          <div key={event.id}>
            <Card
              key={event.id}
              className=" cursor-pointer flex flex-col justify-between p-3"
            >
              <h1 className="font-semibold text-lg">{event.title}</h1>
              <h1 className="font-semibold text-lg">{event.date}</h1>
              <Link href={`/rsvp/${event.id}`}>See RSVPs</Link>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventCardRSVP;
