"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center rounded-2xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 disabled:pointer-events-none disabled:opacity-50 overflow-hidden",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-lg hover:shadow-cyan-500/30",
        secondary:
          "glass text-white border border-white/10 hover:border-cyan-400/40",
        ghost:
          "bg-transparent text-slate-300 hover:bg-white/5 hover:text-white",
      },
      size: {
        sm: "h-10 px-4 text-sm",
        md: "h-12 px-6",
        lg: "h-14 px-8 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const MotionButton = motion.button;

export function Button({
  className,
  variant,
  size,
  children,
  ...props
}: ButtonProps) {
  return (
    <MotionButton
      whileHover={{
        y: -3,
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 20,
      }}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      <span className="relative z-10">{children}</span>

      {variant === "primary" && (
        <motion.div
          className="absolute inset-0 opacity-0"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,.15), transparent)",
          }}
        />
      )}
    </MotionButton>
  );
}