"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { createEvent } from "../actions";
import SubmitButton from "./SubmitButton";

function CreateEventCard() {
  const [date, setDate] = React.useState<Date>();
  return (
    <Card className=" min-w-1/2">
      <CardHeader>
        <CardTitle>Create Event</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={createEvent} className=" flex flex-col gap-y-3">
          <Input name="name" placeholder="Event name" required />
          <Input name="desc" placeholder="Event description" required />
          <Input name="location" placeholder="Event location" required />
          <Input type="hidden" value={date?.toDateString()} name="date" />
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[280px] justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <SubmitButton />
        </form>
      </CardContent>
      <CardFooter>
        <p className=" text-sm text-muted-foreground">
          Created events can be seen in 'My Events' tab
        </p>
      </CardFooter>
    </Card>
  );
}

export default CreateEventCard;
