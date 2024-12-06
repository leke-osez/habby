import { cva } from "class-variance-authority";

export const buttonVariants = cva(`
inline-flex scale-100 items-center justify-center rounded-sm text-sm font-medium ring-offset-background transition-[transform,background-color] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50
`, {
    variants: {
        variant: {
            primary: ``,
        },
        size: {
            sm: "h-8 px-4 text-xs",
            md: "h-9 px-5",
            lg: "h-10 px-6",
            icon: "size-9",
        } 
    },
    defaultVariants: {
        variant: 'primary',
        size: 'md'
    }
});
