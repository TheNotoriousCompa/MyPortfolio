import React from "react";
import { cn } from "@/lib/utils";

export const CardSpotlight = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "relative rounded-lg border border-white/10 bg-[#0c0e0d]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
