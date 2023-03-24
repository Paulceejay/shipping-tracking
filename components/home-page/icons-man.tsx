import Image from "next/image";
import StrokeSvg from "../icons/StrokeSvg";
import CompanyIcons from "./company-icons";

const IconsMan = () => {
  return (
    <div className="bg-secondaryColor">
      <div className="xl:w-[85%] lg:w-[95%] md:w-[95%] w-11/12 mx-auto md:py-14 py-7">
        <h1 className="mt-7 mb-2 mx-2 text-lg sm:text-xl lg:text-3xl font-black text-white">
          International Package
        </h1>
        <h1 className="mb-7 mt-2 mx-2 text-lg sm:text-xl lg:text-3xl font-black text-white">
          Tracking Couriers
        </h1>
        <div className="md:flex justify-between my-10 relative">
          <div className="grid lg:grid-cols-3 grid-cols-2 gap-2 relative z-10">
            <CompanyIcons />
          </div>

          <Image
            className="md:block hidden lg:relative md:absolute md:left-52 lg:left-20"
            src="/images/man.png"
            alt=""
            width={550}
            height={250}
          />
          <Image
            className="md:hidden absolute bottom-0 left-20"
            src="/images/man.png"
            alt=""
            width={150}
            height={100}
          />
        </div>
        <div className="flex sm:w-1/2 w-10/12">
          <small className="mr-5 text-white sm:text-sm text-xs">
            VIEW ALL CARRIERS
          </small>
          <small className="py-1">
            <StrokeSvg />
          </small>
        </div>
      </div>
    </div>
  );
};

export default IconsMan;
