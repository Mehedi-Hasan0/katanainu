"use client";

import * as React from "react";
import * as ModalPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const Modal = ModalPrimitive.Root;

const ModalTrigger = ModalPrimitive.Trigger;

const ModalPortal = ModalPrimitive.Portal;

const ModalClose = ModalPrimitive.Close;

const ModalOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <ModalPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
));
ModalOverlay.displayName = ModalPrimitive.Overlay.displayName;

const ModalContent = React.forwardRef(
  ({ className, children, videoUrl, ...props }, ref) => (
    <ModalPortal>
      <ModalOverlay />
      <ModalPrimitive.Content
        ref={ref}
        className={cn(
          "fixed left-[50%] top-[50%] z-50 grid w-full h-[300px] sm:h-[400px] md:w-[85vw] md:h-[500px] xl:h-[80vh] translate-x-[-50%] translate-y-[-50%] gap-4 p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          className
        )}
        {...props}
      >
        {/* {children} */}
        <iframe
          src={`https://www.youtube.com/embed/${children}`}
          width={"100%"}
          height={"100%"}
          frameborder="0"
        />
        <ModalPrimitive.Close className="absolute right-0 -top-2 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-8 w-8 " color="#fff" />
          <span className="sr-only">Close</span>
        </ModalPrimitive.Close>
      </ModalPrimitive.Content>
    </ModalPortal>
  )
);
ModalContent.displayName = ModalPrimitive.Content.displayName;

const ModalHeader = ({ className, ...props }) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
);
ModalHeader.displayName = "DialogHeader";

const ModalFooter = ({ className, ...props }) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);
ModalFooter.displayName = "DialogFooter";

const ModalTitle = React.forwardRef(({ className, ...props }, ref) => (
  <ModalPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
ModalTitle.displayName = ModalPrimitive.Title.displayName;

const ModalDescription = React.forwardRef(({ className, ...props }, ref) => (
  <ModalPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
ModalDescription.displayName = ModalPrimitive.Description.displayName;

export {
  Modal,
  ModalPortal,
  ModalOverlay,
  ModalClose,
  ModalTrigger,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalTitle,
  ModalDescription,
};
