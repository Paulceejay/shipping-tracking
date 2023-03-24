import Link from "next/link";
import { useRouter } from "next/router";
import CallSvg from "../icons/CallSvg";
import FacebookSvg from "../icons/FacebookSvg";
import InstagramSvg from "../icons/InstagramSvg";
import LocationSvg from "../icons/LocationSvg";
import MailSvg from "../icons/MailSvg";
import TwitterSvg from "../icons/TwitterSvg";

const Navlink = [
  { name: "Couriers Lists", href: "/courier-list", id: 1 },
  { name: "Contact Us", href: "/contact", id: 2 },
  { name: "Help", href: "/help", id: 3 },
  { name: "Login", href: "/auth/login", id: 4 },
];

const contact = [
  { name: "+012 345 6789", src: <CallSvg />, id: 1, },
  { name: "Mail@demo.com", src: <MailSvg />, id: 2, },
  { name: "Cargo Hub, NY 10012, USA", src: <LocationSvg />, id: 3, },
];

const NavContainers = (props:any) => {
  const router = useRouter()

  const click = (href:string) => {
   router.push(href)

   props.onClick()
  }
    return (
      <>
        {/* nav containers */}
        <div className="overflow-auto">
          <nav>
            <ul className="flex text-center flex-col text-lg text-paragraph">
            {Navlink.map(nav => {
              return (
                <>
                  <li onClick={click.bind(true, nav.href)} key={nav.id} className="py-[15px] font-semibold">
                    <Link onClick={props.onClick} key={nav.id} href={nav.href}>
                      {nav.name}
                    </Link>
                  </li>
                  <hr className="h-[1px] bg-paragraph" />
                </>
              );
            })}
 
              <hr className="h-[1px] bg-paragraph font-semibold" />
              <li className="my-4 text-white py-2 bg-primary2 sm:w-3/12 xs:w-4/12 w-1/2 mx-auto">
                <Link onClick={props.onClick} href="/auth/sign-up">
                  Sign Up
                </Link>
              </li>
            </ul>
          </nav>

          {/* SOCIAL ICONS AND CONTACT CONTAINER */}
          <div>
            <div className="flex justify-between sm:w-[20%] xs:w-3/12 w-1/2 mx-auto py-2">
             <TwitterSvg />
              <FacebookSvg />
              <InstagramSvg />
            </div>

            <div className="bg-secondaryColor w-full">
              <div className="w-11/12 mx-auto flex flex-wrap py-4 text-sm text-white gap-10">
                {contact.map(con => {
                  return (
                    <div key={con.id} className="flex justify-between xl:gap-3 gap-2">
                      <div className="xl:py-2 py-1">
                        {con.src}
                      </div>
                      <p className="text-sm xl:text-lg text-white font-semibold">
                        {con.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default NavContainers