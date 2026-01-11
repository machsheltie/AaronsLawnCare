import * as React from "react"
import { cn } from "../../lib/utils"

// Note: Radix UI Slot allows us to merge props onto a child element (polymorphism)
// Since we didn't install @radix-ui/react-slot yet, I will use a simplified version or assume the user accepts the dep. 
// Actually, I'll skip the Slot for now to keep it simple unless I install it. 
// I'll stick to a standard button for now, but keep the cva structure.

// Wait, I didn't install class-variance-authority either. 
// I should install `class-variance-authority` and `@radix-ui/react-slot` to do this properly 'shadcn' style.
// Or I can just write standard Tailwind classes. 
// Given the prompt "Beautify", I want it to be maintainable. 
// I will just use `cn` and standard props for now to avoid installing 10 more packages.
// but `cva` is really nice.
// Let's install `class-variance-authority` quickly. It's tiny.

// Actually, I'll just write the classes manually in the component for now to save time/complexity.

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'link' | 'gold';
    size?: 'default' | 'sm' | 'lg' | 'icon';
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {

        const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transition-all duration-300 active:scale-95";

        const variants = {
            default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
            gold: "bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20",
        };

        const sizes = {
            default: "h-11 px-6 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-14 rounded-md px-8 text-base",
            icon: "h-10 w-10",
        };

        return (
            <button
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
