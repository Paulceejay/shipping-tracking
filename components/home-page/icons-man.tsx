import Image from "next/image";
import CompanyIcons from "./company-icons";

const IconsMan = () => {
  return (
    <div className="bg-secondaryColor">
      <div className="xl:w-[80%] lg:w-[90%] md:w-[95%] w-11/12 mx-auto md:py-14 py-7">
        <h1 className="mt-7 mb-2 mx-2 text-lg sm:text-2xl lg:text-5xl font-bold text-white">International Package</h1>
        <h1 className="mb-7 mt-2 mx-2 text-lg sm:text-2xl lg:text-5xl font-bold text-white">Tracking Couriers</h1>
        <div className="md:flex justify-between my-10">
          <div className="grid md:grid-cols-3 grid-cols-2">
           <CompanyIcons />
          </div>

          <Image className="md:block hidden" src="/images/man.png" alt="" width={400} height={250} />
        </div>
        <div className="flex sm:w-1/2 w-10/12">
          <small className="mr-5 text-white md:text-base sm:text-sm text-xs">VIEW ALL CARRIERS</small>
          <Image src="/svg/Stroke.svg" alt="" width={10} height={10} />
        </div>
      </div>
    </div>
  );
};

export default IconsMan;
