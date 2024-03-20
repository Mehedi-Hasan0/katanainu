"use client";

import * as React from "react";
import * as MobileMenuListPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const MobileMenuList = MobileMenuListPrimitive.Root;

const MobileMenuListItem = React.forwardRef(({ className, ...props }, ref) => (
  <MobileMenuListPrimitive.Item
    ref={ref}
    className={cn("", className)}
    {...props}
  />
));
MobileMenuListItem.displayName = "MobileMenuListItem";

const MobileMenuListTrigger = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <MobileMenuListPrimitive.Header className="flex">
      <MobileMenuListPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex flex-1 items-center justify-between font-medium transition-all [&[data-state=open]>svg]:rotate-90 rounded-sm",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDown className="h-8 w-8 shrink-0 transition-transform duration-200 text-black p-1 bg-[#efefef]" />
      </MobileMenuListPrimitive.Trigger>
    </MobileMenuListPrimitive.Header>
  )
);
MobileMenuListTrigger.displayName = MobileMenuListPrimitive.Trigger.displayName;

const MobileMenuListContent = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <MobileMenuListPrimitive.Content
      ref={ref}
      className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn("pb-4 pt-0", className)}>{children}</div>
    </MobileMenuListPrimitive.Content>
  )
);

MobileMenuListContent.displayName = MobileMenuListPrimitive.Content.displayName;

export {
  MobileMenuList,
  MobileMenuListItem,
  MobileMenuListTrigger,
  MobileMenuListContent,
};
