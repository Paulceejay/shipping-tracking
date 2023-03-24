import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavBarSvg from "../icons/NavBarSvg";
import Logo from "./logo";
import NavContainers from "./nav-containers";

const SmallScreenNav = () => {
    const [navBar, setNavBar] = useState(false)

    const navBarHandler = () => {
       return setNavBar((prev) => !prev);
    }

    const cancelNavBar = () => {
        return setNavBar(false)
    }
    return (
      <>
        {/* NAV BAR FOR SMALL SCREENS */}
        <div className="lg:hidden block bg-white w-full">
          <div className="flex justify-between sm:w-[95%] w-11/12 mx-auto py-2">
            <Link href="/" onClick={cancelNavBar}>
              <Logo className="w-24" />
            </Link>
            <div className="py-2" onClick={navBarHandler}>
             <NavBarSvg />
            </div>
          </div>
          <hr className="h-[2px] bg-paragraph" />

          {navBar && <NavContainers onClick={cancelNavBar} />}
        </div>
      </>
    );
}

export default SmallScreenNav