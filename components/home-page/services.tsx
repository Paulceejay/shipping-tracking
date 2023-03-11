import Image from "next/image";

const Services = () => {
    return (
      <div className="xl:w-[80%] lg:w-[90%] md:w-[95%] w-11/12 mx-auto flex md:flex-row flex-col justify-between bg-services-bg-img">
        <div className="md:w-[66%] w-full">
          <h2 className="text-primary2 lg:text-xl text-lg mb-5">
            WELCOME TO OUR TRANPORATION SERVICES AGENCY
          </h2>
          <h1 className="text-headerColor font-bold xl:text-5xl md:text-3xl text-xl lg:mb-6 md:mb-3">
            WE ARE THE BEST AT OUR TRANS-PORTATION SERVICE EVER
          </h1>
          <p className="text-paragraph xl:text-3xl lg:text-lg text-base py-3">
            Our decisions about transportation determine much more than where
            roads or bridges or tunnels or rail lines will be built. They
            determine the connections and barriers that people will encounter in
            their daily lives - and thus how hard or easy it will be for people
            to get where they need and want to go.Our decisions about
            transportation determine much more than where roads or bridges or
            tunnels.
          </p>
          <p className="bg-secondaryColor text-white px-6 py-5 xs:w-[45%] lg:w-[38%] w-[70%] text-center my-6 md:text-base text-xs">
            LEARN MORE
          </p>
        </div>
        <div className="md:ml-4 md:w-auto w-full">
          <Image src="/images/ship.jpg" alt="" width={400} height={100} />
        </div>
      </div>
    );
}

export default Services