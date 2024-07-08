"use client";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import React from "react";
import { useToast } from "@/components/ui/use-toast";

function CopyLinkButton({ id }: { id: string }) {
  const { toast } = useToast();
  return (
    <div>
      <Button
        variant={"default"}
        onClick={() => {
          navigator.clipboard.writeText(
            `https://event-manager-liard-one.vercel.app/${id}`
          );
          toast({
            title: "Link Copied to Clipboard!",
          });
        }}
        className="w-10 p-0 hover:bg-gray-100 hover:text-gray-800 duration-200 ease-linear"
      >
        <Copy className="size-6" />
      </Button>
    </div>
  );
}

export default CopyLinkButton;
