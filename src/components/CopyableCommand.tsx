"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CopyableCommandProps {
  command: string;
  className?: string;
  inline?: boolean;
}

export default function CopyableCommand({ command, className = "" }: CopyableCommandProps) {
  return (
    <u className={`text-white font-bold underline decoration-[#04AA6D] font-mono ${className}`}>
      {command}
    </u>
  );
}
