import Image from "next/image";

const Services = () => {
    return (
      <div className="xl:w-[85%] lg:w-[95%] lg:max-w-none xs:max-w-screen-xs w-11/12 mx-auto flex lg:flex-row flex-col justify-between bg-services-bg-img gap-3">
        <div className="lg:w-[66%] w-full">
          <h2 className="text-primary2 text-base mb-5 font-bold">
            WELCOME TO OUR TRANPORATION SERVICES AGENCY
          </h2>
          <h1 className="text-headerColor font-bold xl:text-2xl md:text-xl text-lg lg:mb-6 md:mb-3">
            WE ARE THE BEST AT OUR TRANS-PORTATION SERVICE EVER
          </h1>
          <p className="text-paragraph xl:text-xl lg:text-lg text-base py-3">
            Our decisions about transportation determine much more than where
            roads or bridges or tunnels or rail lines will be built. They
            determine the connections and barriers that people will encounter in
            their daily lives - and thus how hard or easy it will be for people
            to get where they need and want to go.Our decisions about
            transportation determine much more than where roads or bridges or
            tunnels.
          </p>
          <p className="bg-secondaryColor text-white p-3 xs:w-[45%] lg:w-[38%] w-[70%] text-center my-6 md:text-base text-xs">
            LEARN MORE
          </p>
        </div>
        <div className="md:ml-4 md:w-auto w-full lg:block hidden">
          <Image src="/images/ship.jpg" alt="" width={400} height={100} />
        </div>
        <div className="w-full lg:hidden">
          <Image
            className="w-full h-52"
            src="/images/ship.jpg"
            alt=""
            width={300}
            height={50}
          />
        </div>
      </div>
    );
}

export default Services