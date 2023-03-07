const HeaderBgImage = (props:any) => {
    return (
      <div className="w-full bg-header-bg-img h-full bg-no-repeat bg-cover bg-center">
        <div className="pt-24 pb-32 bg-gradient-to-r from-gradientTwo bg-blend-darken">
          <h1 className="lg:mt-24 xl:pl-64 lg:pl-[70px] md:w-[95%] mx-auto text-white font-bold xl:text-6xl sm:text-5xl w-11/12 xs:text-4xl text-3xl">
            We are Global
          </h1>
          <h1 className="mt-4 xl:pl-64 lg:pl-[70px] md:w-[95%] mx-auto text-white font-bold xl:text-6xl  sm:text-5xl xs:text-4xl w-11/12 text-[33px]">
            Logistic provider
          </h1>
          <p className="text-white my-10 xl:pl-64 xl:text-xl text-base lg:pl-[70px] md:w-[95%] w-11/12 mx-auto">
            Universal parcel tracking to track your package from UPS, <br />{" "}
            FedEx, DHL, <span className="underline">USPS</span>, China Post and
            more!
          </p>
          <div className="xl:pl-64 lg:pl-[70px] md:w-[95%] w-11/12 mx-auto flex ">
            <p className="bg-transparent xs:px-10 px-4 py-4 border-[3px] text-white sm:text-lg text-sm xs:mr-4 mr-3">
              LEARN MORE
            </p>
            <p className="bg-white xs:px-10 px-4 py-4 border-[3px] text-paragraph sm:text-lg text-sm xs:ml-4 ml-3">
              ABOUT US
            </p>
          </div>
        </div>
      </div>
    ); 
}

export default HeaderBgImage