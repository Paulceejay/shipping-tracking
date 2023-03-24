const FaqHeader = () => {
    return (
      <div className="xl:w-[85%] lg:w-[95%] lg:max-w-none xs:max-w-[685px] w-11/12 mx-auto lg:my-20 my-14">
        <p className="lg:flex">
          <h2 className="text-secondaryColor lg:text-4xl md:text-3xl text-2xl font-bold lg:mr-4 mt-3">
            IOTEM lOGISTICS
          </h2>
          <h2 className="text-paragraph lg:text-4xl md:text-3xl text-2xl font-semibold lg:ml-4 mt-3">
            Equals best-in-class support
          </h2>
        </p>
        <p className="mt-5 xl:text-xl sm:text-base text-sm text-paragraph leading-relaxed xl:w-[68%] lg:w-9/12 md:w-10/12 font-semibold">
          Here at <span className="text-secondaryColor">ShippingDaily</span> ,
          we pride ourselves on our best-in-class customer support. That’s why
          we have built our website with thorough guides, quality FAQ content, a
          live chat feature and more, so all the information you need is right
          here.
        </p>
      </div>
    );
}

export default FaqHeader