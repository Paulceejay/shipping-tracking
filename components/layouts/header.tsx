import CallSvg from "../icons/CallSvg";
import FacebookSvg from "../icons/FacebookSvg";
import InstagramSvg from "../icons/InstagramSvg";
import LocationSvg from "../icons/LocationSvg";
import MailSvg from "../icons/MailSvg";
import TwitterSvg from "../icons/TwitterSvg";

const Header = (props: any) => {
  return (
    <div className="hidden lg:block bg-secondaryColor md:w-full relative">
      <div className="flex justify-between xl:w-[85%] lg:w-[95%] mx-auto py-3">
        <div className="flex justify-between xl:gap-10 gap-6">
          <div className="flex justify-between xl:gap-3 gap-2">
            <div className="py-1">
              <CallSvg />
            </div>
            <p className="text-sm xl:text-lg text-white font-semibold">
              +012 345 6789
            </p>
          </div>
          <div className="flex justify-between xl:gap-3 gap-2">
            <div className="py-1">
              <LocationSvg />
            </div>
            <p className="text-sm xl:text-lg text-white font-semibold">
              Cargo Hub, NY 10012, USA
            </p>
          </div>
          <div className="flex justify-between xl:gap-3 gap-2">
            <div className="py-1">
              <MailSvg />
            </div>
            <p className="text-sm xl:text-lg text-white font-semibold">
              Mail@demo.com
            </p>
          </div>
        </div>
        <div className="flex justify-between gap-9">
          <TwitterSvg />
          <FacebookSvg />
          <InstagramSvg />
        </div>
      </div>
    </div>
  );
};

export default Header;
