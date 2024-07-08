"use client";
import React from "react";
import { Calendar as UiCalendar } from "@/components/ui/calendar";
import { IoCalendarClear } from "react-icons/io5";
function CalendarCard() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className=" w-full flex justify-center flex-col items-center overflow-hidden p-1">
      <div className=" pt-6 ml-20 w-full">
        <IoCalendarClear className=" size-8 text-neutral-800" />
        <h1 className=" font-bold text-neutral-700 text-2xl mt-1 tracking-tight ">
          Create Events
        </h1>
        <p className=" tracking-tight text-muted-foreground">
          Create events effortlessly on the go.
        </p>
      </div>

      <div className="">
        <UiCalendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className=" rounded-md border-2 border-zinc-400 mt-4 ml-12  "
        />
      </div>
    </div>
  );
}

export default CalendarCard;
