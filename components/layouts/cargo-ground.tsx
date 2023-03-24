import Image from "next/image";

const CargoGround = () => {
    return (
      <section className="bg-secondaryColor">
        <div className="xl:w-[85%] lg:w-[95%] md:w-[95%] w-11/12 mx-auto py-16 xl:flex justify-between grid lg:grid-cols-3 grid-cols-1 lg:gap-3 gap-0">
          <div className="relative grid justify-center items-center">
            <Image
              className="lg:h-auto h-52"
              src="/images/automobile.jpg"
              alt=""
              width={450}
              height={250}
            />
            <p className="lg:absolute relative left-5 bottom-20 lg:bottom-5 right-0">
              <h2 className="xl:text-xl text-lg text-primary2 font-extrabold">
                AUTOMOBILE
              </h2>
              <h1 className="xl:text-2xl md:text-xl text-lg text-white font-bold xl:my-3 my-2">
                Cargo Ground
              </h1>
            </p>
          </div>
          <div className="relative grid justify-center items-center">
            <Image
              className="lg:h-auto h-52"
              src="/images/shipping.jpg"
              alt=""
              width={450}
              height={250}
            />
            <p className="lg:absolute relative left-5 bottom-20 lg:bottom-5 right-0">
              <h2 className="xl:text-xl text-lg text-primary2 font-extrabold">
                SHIPPING
              </h2>
              <h1 className="xl:text-2xl md:text-xl text-lg text-white font-bold xl:my-3 my-2">
                Cargo Ground
              </h1>
            </p>
          </div>
          <div className="relative grid justify-center items-center">
            <Image
              className="lg:h-auto h-52"
              src="/images/airways.jpg"
              alt=""
              width={450}
              height={250}
            />
            <p className="lg:absolute relative left-5 bottom-20 lg:bottom-5 right-0">
              <h2 className="xl:text-xl text-lg text-primary2 font-extrabold">
                AIRWAYS
              </h2>
              <h1 className="xl:text-2xl md:text-xl text-lg text-white font-bold xl:my-3 my-2">
                Cargo Ground
              </h1>
            </p>
          </div>
        </div>
      </section>
    );
}
export default CargoGround