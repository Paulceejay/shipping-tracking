import Link from "next/link";
import Logo from "./logo";
import SmallScreenNav from "./small-screen-nav";

const Navlink = [
  { name: "Couriers Lists", href: "/courier-list", id: 1 },
  { name: "Contact Us", href: "/contact", id: 2 },
  { name: "Help", href: "/help", id: 3 },
];

const MainNavigation = () => {
  return (
    <>
      {/* NAV BAR FOR BIG SCREENS */}
      <div className="hidden lg:flex justify-between xl:w-[85%] lg:w-[95%] md:w-[95%] mx-auto xl:py-2 py-1">
        <Link className="pt-1" href="/">
          <Logo className="" />
        </Link>
        <nav className="flex justify-between xl:text-xl text-base text-paragraph font-semibold">
          <ul className="flex justify-between gap-14 mr-6 xl:py-3 py-2">
            {Navlink.map(nav => {
              return (
                <li key={nav.id} className="py-1">
                  <Link key={nav.id} href={nav.href}>{nav.name}</Link>
                </li>
              );
            })}
          </ul>

          <ul className="flex justify-between gap-6 xl:text-xl text-base xl:py-3 py-2 ml-4">
            <li className="py-1">
              <Link href="/auth/login">Login</Link>
            </li>
            <li className="bg-primary2 text-white py-2 md:px-5 ">
              <Link href="/auth/sign-up">Sign Up</Link>
            </li>
          </ul>
        </nav>
      </div>

      <SmallScreenNav />
    </>
  );
};

export default MainNavigation;
