import Image from "next/image";
import Link from "next/link";

const NavContainers = (props:any) => {
    return (
      <>
        {/* nav containers */}
        <div className="overflow-auto">
          <nav>
            <ul className="flex text-center flex-col text-lg text-paragraph">
              <li className="py-[13px]">
                <Link onClick={props.onClick} href="/courier">
                  Couriers Lists
                </Link>
              </li>
              <hr className="h-[1px] bg-paragraph" />
              <li className="py-[13px]">
                <Link onClick={props.onClick} href="/contact">
                  Contact Us
                </Link>
              </li>
              <hr className="h-[1px] bg-paragraph" />
              <li className="py-[13px]">
                <Link onClick={props.onClick} href="/help">
                  Help
                </Link>
              </li>
              <hr className="h-[1px] bg-paragraph" />

              <li className="py-[13px]">
                <Link onClick={props.onClick} href="/auth/login">
                  Login
                </Link>
              </li>
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
                <div className="flex mr-5 py-2">
                  <Image
                    src="/svg/call.svg"
                    alt="call icon"
                    width={20}
                    height={15}
                  />
                  <p className="pl-2">Phone +012 345 6789</p>
                </div>
                <div className="flex mr-5 py-2">
                  <Image
                    src="/svg/mail.svg"
                    alt="message icon"
                    width={20}
                    height={15}
                  />
                  <p className="pl-2">Mail@demo.com</p>
                </div>
                <div className="flex mr-5 py-2">
                  <Image
                    src="/svg/location.svg"
                    alt="location icon"
                    width={20}
                    height={15}
                  />
                  <p className="pl-2">Cargo Hub, NY 10012, USA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default NavContainers