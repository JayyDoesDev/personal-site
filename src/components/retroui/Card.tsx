import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

const Card = ({ className, children, ...props }: ICardProps) => {
  return (
    <div
      className={cn(
        "inline-block border-2 rounded shadow-md transition-all hover:shadow-none bg-card",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const CardHeader = ({ className, children, ...props }: ICardProps) => {
  return (
    <div
      className={cn("flex flex-col justify-start p-4", className)}
      {...props}
    >
      {children}
    </div>
  );
};

const CardTitle = ({ className, children, ...props }: ICardProps) => {
  return (
    <h3 className={cn("mb-2", className)} {...props}>
      {children}
    </h3>
  );
};

const CardDescription = ({ className, children, ...props }: ICardProps) => (
  <p className={cn("text-muted-foreground", className)} {...props}>
    {children}
  </p>
);

const CardContent = ({ className, children, ...props }: ICardProps) => {
  return (
    <div className={cn("p-4", className)} {...props}>
      {children}
    </div>
  );
};

const CardComponent = Object.assign(Card, {
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Content: CardContent,
});

export { CardComponent as Card };
