import { cn } from "@/utils";

const sizes = {
  container: {
    md: cn("p-6 sm:p-8"),
    sm: cn("p-6"),
  },
  heading: {
    md: cn("mb-2 text-2xl sm:mb-3 sm:text-3xl"),
    sm: cn("mb-2 text-xl"),
  },
  description: {
    md: cn("text-sm sm:text-base"),
    sm: cn("text-sm"),
  },
  fields: {
    md: cn("max-h-96"),
    sm: cn("max-h-96"),
  },
};

interface FormLayoutProps {
  size: "md" | "sm";
  heading: string;
  description: string;
  fields: React.ReactNode[];
  button: React.ReactNode;
  back?: React.ReactNode;
}

export default function FormLayout({ size, heading, description, fields, button, back }: FormLayoutProps) {
  return (
    <div className={cn("relative flex h-full w-full items-center justify-center", sizes.container[size])}>
      <div className="w-full max-w-md scale-75">
        <h1 className={cn("text-center font-medium text-white", sizes.heading[size])}>{heading}</h1>
        <p className={cn("mb-6 text-center text-neutral-500", sizes.description[size])}>{description}</p>
        <div className={cn("scrollbar-hide mb-4 overflow-auto", sizes.fields[size])}>
          <div className="space-y-4 pt-2">{fields}</div>
        </div>
        {button}
      </div>
      {back && <div className="absolute left-4 top-5 origin-top-left scale-75">{back}</div>}
    </div>
  );
}
