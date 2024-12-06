import { VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { buttonVariants } from "../variants/button";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../libs/namespaces/style";

type ButtonProps = {
  asChild: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, asChild = false, className, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

export default Button;
