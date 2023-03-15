const ContactBgImage = () => {
  return (
    <div className="w-full bg-contact-bg-img h-full bg-no-repeat bg-cover bg-center">
      <div className="xl:pt-24 xl:pb-32 pt-16 pb-28 bg-gradient-to-r from-gradientTwo bg-blend-darken">
        <div className="lg:pt-28 xl:w-[80%] lg:w-[90%] md:w-[95%] w-11/12 mx-auto flex justify-between md:flex-row flex-col">
          <h1 className="md:my-0 my-5 text-white font-bold lg:text-4xl md:text-3xl text-2xl md:w-[40%] leading-5 flex justify-center items-center">
            Get in contact with us for any inquiry
          </h1>
          <p
            className="md:my-0 my-5 text-white xl:text-2xl lg:text-xl md:text-lg
           text-sm font-bold md:w-[40%] leading-relaxed flex justify-center items-center"
          >
            ith thorough guides, quality FAQ content, a live chat feature and
            more, so all the inf
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactBgImage;
