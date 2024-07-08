"use client"
import { Button } from '@/components/ui/button'
import { Copy } from 'lucide-react';
import React from 'react'

function CopyLinkButton({id}: {id: string}) {
  return (
    <div>
      <Button
        variant={"default"}
        onClick={() =>
          navigator.clipboard.writeText(`http://localhost:3000/${id}`)
        }
        className="w-10 p-0 hover:bg-gray-100 hover:text-gray-800 duration-200 ease-linear"
      >
        <Copy className="size-6" />
      </Button>
    </div>
  );
}

export default CopyLinkButton