import Image from "next/image";

const CargoGround = () => {
    return (
      <section className="bg-secondaryColor">
        <div className="xl:w-[80%] lg:w-[90%] md:w-[95%] w-11/12 mx-auto py-16 xl:flex justify-between grid lg:grid-cols-2 grid-cols-1">
          <div className="relative mx-3 lg:mx-0 xl:my-0 my-3 lg:grid flex justify-center items-center">
            <Image
              className="lg:block hidden"
              src="/images/automobile.jpg"
              alt=""
              width={350}
              height={200}
            />
            <Image
              className="block lg:hidden"
              src="/images/automobile.jpg"
              alt=""
              width={250}
              height={100}
              />
            <p className="absolute left-5 md:bottom-10 bottom-5 right-0 lg:grid flex justify-center items-center flex-col">
              <h2 className="xl:text-lg text-base text-primary2 font-extrabold">
                AUTOMOBILE
              </h2>
              <h1 className="xl:text-2xl md:text-xl text-lg text-white font-bold xl:my-3 my-2">
                Cargo Ground
              </h1>
            </p>
          </div>
          <div className="relative mx-3 lg:mx-0 xl:my-0 my-3 lg:grid flex justify-center items-center">
            <Image
              className="lg:block hidden"
              src="/images/shipping.jpg"
              alt=""
              width={350}
              height={200}
            />
            <Image
              className="block lg:hidden"
              src="/images/shipping.jpg"
              alt=""
              width={250}
              height={100}
            />
            <p className="absolute left-5 md:bottom-10 bottom-5 right-0 lg:grid flex justify-center items-center flex-col">
              <h2 className="xl:text-lg text-base text-primary2 font-extrabold">
                SHIPPING
              </h2>
              <h1 className="xl:text-2xl md:text-xl text-lg text-white font-bold xl:my-3 my-2">
                Cargo Ground
              </h1>
            </p>
          </div>
          <div className="relative mx-3 lg:mx-0 xl:my-0 my-3 lg:grid flex justify-center items-center">
            <Image
              className="lg:block hidden"
              src="/images/airways.jpg"
              alt=""
              width={350}
              height={200}
            />
            <Image
              className="block lg:hidden"
              src="/images/airways.jpg"
              alt=""
              width={250}
              height={100}
            />
            <p className="absolute left-5 md:bottom-10 bottom-5 right-0 lg:grid flex justify-center items-center flex-col">
              <h2 className="xl:text-lg text-base text-primary2 font-extrabold">
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