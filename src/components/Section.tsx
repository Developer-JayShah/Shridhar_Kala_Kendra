type Props = {
  id?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
};

export default function Section({ id, title, subtitle, children }: Props) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 md:px-6 py-20">
      <h2 className="font-serif text-3xl md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-2 text-neutral-300">{subtitle}</p>}
      <div className="mt-6">{children}</div>
    </section>
  );
}
