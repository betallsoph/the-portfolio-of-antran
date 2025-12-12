import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-[6px] whitespace-nowrap text-sm font-base ring-offset-white transition-all gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "text-black bg-blue-300 border-2 border-black shadow-primary hover:translate-x-[5px] hover:translate-y-[5px] hover:shadow-none",
        oppositeDefault:
          "text-black bg-white border-2 border-black shadow-primary hover:translate-x-[5px] hover:translate-y-[5px] hover:shadow-none",
        oppositeNoShadow:
          "text-blue-400 bg-white border-2 border-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-500",
        noShadow:
          "text-black bg-blue-300 border-2 border-black hover:bg-blue-400 transition-all duration-500",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
