interface FormLayoutProps {
  heading: string;
  description: string;
  fields: React.ReactNode[];
  button: React.ReactNode;
  back?: React.ReactNode;
}

export default function FormLayout({
  heading,
  description,
  fields,
  button,
  back,
}: FormLayoutProps) {
  return (
    <div className="relative flex h-screen w-full items-center justify-center p-8">
      <div className="w-full max-w-md">
        <h1 className="mb-3 text-center text-3xl font-medium text-white">
          {heading}
        </h1>
        <p className="mb-6 text-center text-base text-neutral-500">
          {description}
        </p>
        <div className="mb-4 space-y-4">{fields}</div>
        {button}
      </div>
      {back && <div className="absolute left-3 top-3">{back}</div>}
    </div>
  );
}
