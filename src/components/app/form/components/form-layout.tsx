interface FormLayoutProps {
  heading: string;
  description: string;
  fields: React.ReactNode[];
  button: React.ReactNode;
  back?: React.ReactNode;
}

export default function FormLayout({ heading, description, fields, button, back }: FormLayoutProps) {
  return (
    <div className="relative flex h-full w-full items-center justify-center p-6 sm:p-8">
      <div className="w-full max-w-md">
        <h1 className="mb-2 text-center text-2xl font-medium text-white sm:mb-3 sm:text-3xl">{heading}</h1>
        <p className="mb-6 text-center text-sm text-neutral-500 sm:text-base">{description}</p>
        <div className="scrollbar-hide mb-4 max-h-96 overflow-auto">
          <div className="space-y-4 pt-2">{fields}</div>
        </div>
        {button}
      </div>
      {back && <div className="absolute left-4 top-5">{back}</div>}
    </div>
  );
}
