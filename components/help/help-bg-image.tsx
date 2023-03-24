const HelpBgImage = () => {
    return (
      <div className="bg-faq-bg-img w-full h-full bg-no-repeat bg-cover bg-center bg-blend-darken filter brightness-[80%]">
        <div className="xl:pt-24 xl:pb-24 pt-14 pb-16 bg-gradient-to-r from-gradientTwo via-transparent to-gradientTwo bg-blend-darken">
          <div className="lg:pt-28 xl:w-[80%] lg:w-[90%] md:w-[95%] w-11/12 mx-auto">
            <h1 className="mb-7 text-white font-bold xl:text-6xl lg:text-3xl md:text-2xl text-xl md:w-[40%]">
              FAQ
            </h1>
            <p
              className="mt-7 text-white xl:text-xl lg:text-lg md:text-base
           text-sm font-semibold lg:w-[70%] md:w-[80%] leading-relaxed"
            >
              Here at ShippingDaily, we pride ourselves on our best-in-class
              customer support. That’s why we have built our website with
              thorough guides, quality FAQ content, a live chat feature and
              more, so all the information you need is right here.
            </p>
          </div>
        </div>
      </div>
    );
}

export default HelpBgImage