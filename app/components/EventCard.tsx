import React from "react";
import { Card } from "@/components/ui/card";
import { getEvents } from "../actions";
import CopyLinkButton from "./CopyLinkButton";

async function EventCard() {
  const events = await getEvents();
  return (
    <div className=" w-full p-4 ">
      <div className="flex flex-col gap-y-4">
        {events.map((event) => (
          <Card key={event.id} className="flex flex-col gap-y-1 p-3">
            <h1 className="font-bold text-lg">{event.title}</h1>
            <p className="text-muted-foreground">{event.description}</p>
            <p className="text-muted-foreground">{event.date}</p>
            <p className="text-muted-foreground">{event.location}</p>
            <p className="text-muted-foreground">{event.id}</p>

            <CopyLinkButton id={event.id} />
          </Card>
        ))}
      </div>
    </div>
  );
}

export default EventCard;
