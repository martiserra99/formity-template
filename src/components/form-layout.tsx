interface FormLayoutProps {
  back?: React.ReactNode;
  label?: string;
  heading: string;
  description?: string;
  fields: React.ReactNode[];
  button: React.ReactNode;
}

export default function FormLayout({
  back,
  label,
  heading,
  description,
  fields,
  button,
}: FormLayoutProps) {
  return (
    <div className="flex h-full w-full items-center justify-center p-8">
      <div className="h-80 w-full max-w-md">
        {back && <div className="mb-6">{back}</div>}
        {label && (
          <p className="mb-1 text-sm font-medium text-indigo-400">{label}</p>
        )}
        <h1 className="text-2xl font-medium text-white">{heading}</h1>
        {description && (
          <p className="mt-1 text-base text-neutral-500">{description}</p>
        )}
        <div className="mb-4 mt-4 space-y-4">{fields}</div>
        {button}
      </div>
    </div>
  );
}
