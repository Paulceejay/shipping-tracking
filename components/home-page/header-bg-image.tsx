const HeaderBgImage = (props:any) => {
    return (
      <div className="w-full bg-header-bg-img h-full bg-no-repeat bg-cover bg-center">
        <div className="pt-24 pb-32 bg-gradient-to-r from-gradientTwo bg-blend-darken">
          <h1 className="lg:mt-24 xl:w-[80%] lg:w-[90%] md:w-[95%] mx-auto text-white font-bold xl:text-5xl sm:text-3xl w-11/12 text-3xl">
            We are Global
          </h1>
          <h1 className="mt-4 xl:w-[80%] lg:w-[90%] md:w-[95%] mx-auto text-white font-bold xl:text-5xl  sm:text-3xl w-11/12 text-3xl">
            Logistic provider
          </h1>
          <p className="text-white my-10 xl:w-[80%] lg:w-[90%] xl:text-lg text-base md:w-[95%] w-11/12 mx-auto">
            Universal parcel tracking to track your package from UPS, <br />{" "}
            FedEx, DHL, <span className="underline">USPS</span>, China Post and
            more!
          </p>
          <div className="xl:w-[80%] lg:w-[90%] md:w-[95%] w-11/12 mx-auto flex ">
            <p className="bg-transparent xs:px-6 p-3 border-[3px] text-white sm:text-base text-sm xs:mr-4 mr-3">
              LEARN MORE
            </p>
            <p className="bg-white xs:px-6 p-3 border-[3px] text-paragraph sm:text-base text-sm xs:ml-4 ml-3">
              ABOUT US
            </p>
          </div>
        </div>
      </div>
    ); 
}

export default HeaderBgImage