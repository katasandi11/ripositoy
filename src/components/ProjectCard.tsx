import { Link } from "react-router-dom";

interface CardTitleProps {
  children: React.ReactNode;
}

interface CardDescriptionProps {
  children: React.ReactNode;
}

interface CardButtonProps {
  children: React.ReactNode;
  to: string;
}

interface CardProps {
  image: string;
  children: React.ReactNode;
}

function CardTitle({ children }: CardTitleProps) {
  return (
    <h2 className="text-center text-xl font-semibold text-blue-datatech">
      {children}
    </h2>
  );
}

function CardDescription({ children }: CardDescriptionProps) {
  return (
    <p className="mt-2 line-clamp-6 px-8 text-justify text-sm">{children}</p>
  );
}

function CardButton({ children, to }: CardButtonProps) {
  return (
    <Link to={to}>
      <button className="mx-24 rounded-full bg-blue-datatech px-16 py-4 text-xl font-medium text-white">
        {children}
      </button>
    </Link>
  );
}

function Card({ image, children }: CardProps) {
  return (
    <div className="flex flex-col justify-center gap-4 bg-gray-datatech pb-8 shadow-md">
      <img
        src={image}
        alt="Card"
        className="aspect-[4/2] w-full object-cover"
      />
      {children}
    </div>
  );
}

export { Card, CardButton, CardTitle, CardDescription };
