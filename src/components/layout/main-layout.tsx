import Label from "../typography/label";
import Heading from "../typography/heading";
import Description from "../typography/description";

interface MainLayoutProps {
  back?: React.ReactNode;
  label: string;
  heading: string;
  description: string;
  fields: React.ReactNode[];
  button: React.ReactNode;
}

export default function MainLayout({
  back,
  label,
  heading,
  description,
  fields,
  button,
}: MainLayoutProps) {
  return (
    <div className="flex h-full w-full items-center justify-center p-8">
      <div className="h-80 w-full max-w-md">
        {back && <div className="mb-6">{back}</div>}
        <Label className="mb-1">{label}</Label>
        <Heading className="mb-1">{heading}</Heading>
        <Description className="mb-4">{description}</Description>
        <div className="mb-4 space-y-4">{fields}</div>
        {button}
      </div>
    </div>
  );
}
