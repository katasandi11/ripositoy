interface Props {
  children: React.ReactNode;
}

export default function Section({ children }: Props) {
  return (
    <section className="container relative mx-auto bg-white font-poppins">
      {children}
    </section>
  );
}
