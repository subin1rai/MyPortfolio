import React from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export function TextHover() {
  return (
    <div className="h-[20rem] flex items-center justify-center lg:flex">
      <TextHoverEffect text="SUBIN" />
    </div>
  );
}