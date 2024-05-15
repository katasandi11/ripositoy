import Section from "../layout/Section";

export default function NotFound() {
  return (
    <Section>
      <div className="fixed left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-center text-8xl font-bold text-blue-datatech">
        <h1>404</h1>
        <p>PAGE NOT FOUND</p>
      </div>
    </Section>
  );
}
