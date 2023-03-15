const company = [
  { src: "/icons/fedex2.png", name: "FedEx" },
  { src: "/icons/asos.png", name: "FedEx" },
  { src: "/icons/w.png", name: "Wish" },
  { src: "/icons/zalando.png", name: "Zalando" },
  { src: "/icons/romwe.png", name: "Remwe" },
  { src: "/icons/amazon.png", name: "Amazon" },
  { src: "/icons/z.png", name: "FedEx" },
  { src: "/icons/laz.png", name: "FedEx" },
  { src: "/icons/vova.png", name: "FedEx" },
  { src: "/icons/wiggle.png", name: "FedEx" },
  { src: "/icons/dhgate.png", name: "FedEx" },
  { src: "/icons/i.png", name: "FedEx" },
];

const GlobalCourier = () => {
    return (
      <section className="bg-services-bg-img">
        <div className="xl:mt-20 mt-10 xl:w-[80%] lg:w-[90%] md:w-[95%] w-11/12 mx-auto">
          <h1 className="text-black font-medium xl:text-4xl lg:text-3xl text-xl mb-14 mt-16 xl:my-20">Global - Couriers</h1>
          <div className="grid md:grid-cols-3 grid-cols-2 xl:gap-20 lg:gap-14 sm:gap-10 gap-5">
            {company.map(com => {
                return (
                  <div key={com.src} className="flex shadow-md shadow-paragraph py-3 px-3">
                    <img className="md:w-auto w-10" src={com.src} alt="" />
                    <p className="text-secondaryColor xl:text-2xl lg:text-lg xs:text-base text-xs font-mulish font-bold flex justify-center items-center xl:ml-10 lg:ml-8 md:ml-6 ml-2">
                      {com.name}
                    </p>
                  </div>
                );
            })}
          </div>
        </div>
      </section>
    );
}

export default GlobalCourier