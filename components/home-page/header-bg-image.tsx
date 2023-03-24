const HeaderBgImage = (props:any) => {
    return (
      <div className="w-full bg-header-bg-img h-full bg-no-repeat bg-cover bg-center bg-blend-darken filter brightness-[80%]">
        <div className="pt-24 pb-32 bg-gradient-to-r from-gradientTwo">
          <div className="xl:w-[85%]  sm:w-[95%] w-11/12 mx-auto lg:mt-24">
            <h1 className="lg:w-[40%] md:w-[45%] sm:w-[55%] xs:w-9/12 text-white font-black fo xl:text-6xl sm:text-4xl text-3xl leading-relaxed font-mulish">
              We are Global Logistic provider
            </h1>

            <p className="text-white my-5 xl:text-xl lg:text-lg text-base leading-relaxed">
              Universal parcel tracking to track your package from UPS, <br />
              FedEx, DHL, <span className="underline">USPS</span>, China Post
              and more!
            </p>
            <div className="flex">
              <p className="bg-transparent xs:px-6 px-2 py-3 border-[1px] text-white sm:text-base text-sm xs:mr-4 mr-3">
                LEARN MORE
              </p>
              <p className="bg-white xs:px-6 px-2 py-3 border-[1px] text-paragraph sm:text-base text-sm xs:ml-4 ml-3">
                ABOUT US
              </p>
            </div>
          </div>
        </div>
      </div>
    ); 
}

export default HeaderBgImage