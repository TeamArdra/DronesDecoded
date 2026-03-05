export default function SectionWrapper({
  id,
  children,
}: {
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="relative max-w-7xl mx-auto px-6 py-28"
    >
      {children}
    </section>
  );
}