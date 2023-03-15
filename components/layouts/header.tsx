import Image from "next/image";

const Header = (props: any) => {
  return (
    <div className="hidden md:block bg-secondaryColor md:w-full relative">
      <div className="flex justify-between max-w-[1300] xl:w-[80%] lg:w-[90%] md:w-[95%] mx-auto py-2">
        <div className="flex justify-between">
          <div className="flex justify-between xl:ml-3.5 xl:mr-5 lg:mr-6">
            <Image src="/svg/call.svg" alt="call icon" width={20} height={15} />
            <p className="ml-3 xl:text-lg lg:text-base md:text-sm text-white">
              Phone +012 345 6789
            </p>
          </div>
          <div className="flex justify-between xl:ml-3.5 xl:mr-5 lg:mr-6 md:mx-6">
            <Image
              src="/svg/location.svg"
              alt="location icon"
              width={20}
              height={15}
            />
            <p className="ml-3 xl:text-lg lg:text-base md:text-sm text-white">
              Cargo Hub, NY 10012, USA
            </p>
          </div>
          <div className="flex justify-between xl:ml-3.5 xl:mr-5">
            <Image
              src="/svg/mail.svg"
              alt="message icon"
              width={20}
              height={15}
            />
            <p className="ml-3 xl:text-lg lg:text-base md:text-sm text-white">
              Mail@demo.com
            </p>
          </div>
        </div>
        <div className="flex">
          <Image
            src="/svg/twitter.svg"
            alt="twitter icon"
            width={22}
            height={20}
            className="mx-4 lg:mx-3"
          />
          <Image
            src="/svg/facebook.svg"
            alt="facebook icon"
            width={22}
            height={20}
            className="mx-4 lg:mx-3"
          />
          <Image
            src="/svg/instagram.svg"
            alt="instagram icon"
            width={22}
            height={20}
            className="mx-4 lg:mx-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
