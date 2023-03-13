import Image from "next/image";
import Link from "next/link";

const Navlink = [
  { name: "Couriers Lists", href: "/courier-list", id: 1 },
  { name: "Contact Us", href: "/contact", id: 2 },
  { name: "Help", href: "/help", id: 3 },
  { name: "Login", href: "/auth/login", id: 4 },
];

const contact = [
  { name: "Phone +012 345 6789", src: "/svg/call.svg", id: 1, },
  { name: "Mail@demo.com", src: "/svg/mail.svg", id: 2, },
  { name: "Cargo Hub, NY 10012, USA", src: "/svg/location.svg", id: 3, },
];

const NavContainers = (props:any) => {
    return (
      <>
        {/* nav containers */}
        <div className="overflow-auto">
          <nav>
            <ul className="flex text-center flex-col text-lg text-paragraph">
            {Navlink.map(nav => {
              return (
                <>
                  <li className="py-[13px]">
                    <Link onClick={props.onClick} key={nav.id} href={nav.href}>
                      {nav.name}
                    </Link>
                  </li>
                  <hr className="h-[1px] bg-paragraph" />
                </>
              );
            })}
 
              <hr className="h-[1px] bg-paragraph" />
              <li className="my-4 text-white py-3 bg-primary2 w-11/12 xs:w-1/2 mx-auto">
                <Link onClick={props.onClick} href="/auth/sign-up">
                  Sign Up
                </Link>
              </li>
            </ul>
          </nav>

          {/* SOCIAL ICONS AND CONTACT CONTAINER */}
          <div>
            <div className="flex justify-between sm:w-[20%] xs:w-3/12 w-1/2 mx-auto py-2">
              <Image
                src="/svg/twitter.svg"
                alt="twitter icon"
                width={20}
                height={20}
                className=""
              />
              <Image
                src="/svg/facebook.svg"
                alt="facebook icon"
                width={20}
                height={20}
                className=""
              />
              <Image
                src="/svg/instagram.svg"
                alt="instagram icon"
                width={20}
                height={20}
                className=""
              />
            </div>

            <div className="bg-secondaryColor w-full">
              <div className="w-11/12 mx-auto flex flex-wrap py-4 text-sm text-white">
                {contact.map(con => {
                  return (
                    <div className="flex mr-5 py-2">
                      <Image
                        src={con.src}
                        alt="icon"
                        width={20}
                        height={15}
                      />
                      <p className="pl-2">{con.name}</p>
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