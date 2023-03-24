import Image from "next/image";

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
      <section className="bg-services-bg-img bg-no-repeat">
        <div className="xl:mt-20 mt-10 xl:w-[85%] lg:w-[95%] lg:max-w-none xs:max-w-screen-xs w-11/12 mx-auto">
          <h1 className="text-black font-bold xl:text-4xl lg:text-3xl text-xl mb-14 mt-16 xl:my-20">
            Global - Couriers
          </h1>
          <div className="grid lg:grid-cols-3 grid-cols-2 lg:gap-8 gap-5">
            {company.map((com) => {
              return (
                <div
                  key={com.src}
                  className="flex shadow-sm drop-shadow-xl shadow-paragraph lg:py-6 py-4 px-5"
                >
                  <Image className="md:w-auto w-10" src={com.src} alt="" width={150} height={70} />
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