
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

const Badge = ({ children, className }: BadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-aurentia-card text-white shadow-sm animate-float",
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
