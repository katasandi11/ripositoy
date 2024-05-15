import { Link, NavLink } from "react-router-dom";
import { Datatech } from "../assets/images/company-logo";

interface NavLinkProps {
  isActive: boolean;
}

export default function NavigationBar() {
  const activeClassName = "bg-blue-datatech text-white lg:rounded-md lg:p-2";
  const inactiveClassName =
    "bg-gray-400 text-white hover:bg-blue-datatech lg:rounded-md lg:p-2";

  const getClassNames = ({ isActive }: NavLinkProps) =>
    isActive ? activeClassName : inactiveClassName;

  return (
    <nav className="container sticky left-0 right-0 top-0 z-50 mx-auto flex w-full items-center justify-between bg-white px-16 pb-4 pt-8 font-poppins">
      <Link to="/">
        <img
          src={Datatech}
          alt="Logo Datatech"
          className="h-[32px] sm:h-[32px] md:h-[32px] lg:h-[40px] xl:h-[60px]"
        />
      </Link>
      <ul className="hidden text-xs font-semibold sm:flex lg:gap-2 lg:text-base">
        {menus.map((menu, i) => (
          <NavLink key={i} to={menu.link} className={getClassNames}>
            {menu.name}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}

const menus = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Partnership",
    link: "/partnership",
  },
  {
    name: "Service",
    link: "/service",
  },
];
