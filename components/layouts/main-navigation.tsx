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
      <div className="hidden md:flex justify-between max-w-[1300] xl:w-[80%] lg:w-[90%] md:w-[95%] mx-auto py-2">
        <Link className="pt-1" href="/">
          <Logo className="" />
        </Link>
        <nav className="flex justify-between xl:text-lg md:text-base text-paragraph">
          <ul className="flex justify-between xl:mr-14 lg:mr-16 md:mr-12">
            {Navlink.map(nav => {
              return (
                <li key={nav.id} className="xl:mx-8 lg:mx-9 md:mr-8 py-3">
                  <Link key={nav.id} href={nav.href}>{nav.name}</Link>
                </li>
              );
            })}
          </ul>

          <ul className="flex justify-between lg:mr-2 md:mr-3 py-2">
            <li className="xl:mr-8 lg:mr-9 md:mr-8 py-1">
              <Link href="/auth/login">Login</Link>
            </li>
            <li className="bg-primary2 text-white px-6 py-3 md:px-4 ">
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
