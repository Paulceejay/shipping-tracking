const CourierBgImage = () => {
    return (
      <div className="w-full bg-courier-bg-img h-full bg-no-repeat bg-cover bg-center">
        <div className="pt-16 pb-28 bg-gradient-to-r from-gradientTwo bg-blend-darken">
          <h1 className="lg:mt-20 text-white font-bold xl:text-5xl sm:text-4xl xs:text-3xl text-2xl text-center md:block hidden">
            We are Global Logistic provider
          </h1>
          <h1 className="lg:mt-20 text-white font-bold xl:text-6xl sm:text-4xl xs:text-3xl text-2xl flex justify-center items-center md:hidden px-4">
            Track with all your couriers
          </h1>
          <p className="text-white my-10 xl:text-xl text-base text-center font-extrabold">
            Universal parcel tracking to track your package from UPS, <br />
            FedEx, DHL, <span className="underline">USPS</span>, China Post and
            more!
          </p>
        </div>
      </div>
    );
}

export default CourierBgImage