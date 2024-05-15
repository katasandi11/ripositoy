interface Props {
  children: React.ReactNode;
}

export default function Banner({ children }: Props) {
  return (
    <div className="w-full bg-blue-datatech py-4 text-center text-4xl font-semibold text-white">
      {children}
    </div>
  );
}
