"use client"
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import React from "react";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button
          type="submit"
          variant="default"
          className="w-full mt-4"
          disabled
        >
          Please wait
          <Loader2 className=" size-4 animate-spin" />
        </Button>
      ) : (
        <Button type="submit" variant="default" className="w-full mt-4">
          Submit
        </Button>
      )}
    </>
  );
}

export default SubmitButton;
