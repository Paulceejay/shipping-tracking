import Image from "next/image";

const CargoGround = () => {
    return (
      <section className="bg-secondaryColor">
        <div className="xl:w-[80%] lg:w-[90%] md:w-[95%] w-11/12 mx-auto py-16 xl:flex justify-between grid md:grid-cols-2 grid-cols-1">
          <div className="relative mx-3 lg:mx-0 xl:my-0 my-3">
            <Image
              src="/images/automobile.jpg"
              alt=""
              width={400}
              height={200}
            />
            <p className="absolute left-9 md:bottom-10 bottom-5 right-0">
              <h2 className="xl:text-xl text-base text-primary2 font-medium xl:my-3 my-2">
                AUTOMOBILE
              </h2>
              <h1 className="xl:text-4xl md:text-3xl text-xl text-white font-bold xl:my-3 my-2">
                Cargo Ground
              </h1>
            </p>
          </div>
          <div className="relative mx-3 lg:mx-0 xl:my-0 my-3">
            <Image src="/images/shipping.jpg" alt="" width={400} height={200} />
            <p className="absolute left-9 md:bottom-10 bottom-5  right-0">
              <h2 className="xl:text-xl text-base text-primary2 font-medium xl:my-3 my-2">
                SHIPPING
              </h2>
              <h1 className="xl:text-4xl md:text-3xl text-xl text-white font-bold xl:my-3 my-2">
                Cargo Ground
              </h1>
            </p>
          </div>
          <div className="relative mx-3 lg:mx-0 xl:my-0 my-3">
            <Image src="/images/airways.jpg" alt="" width={400} height={200} />
            <p className="absolute left-9 md:bottom-10 bottom-5  right-0">
              <h2 className="xl:text-xl text-base text-primary2 font-medium xl:my-3 my-2">
                AIRWAYS
              </h2>
              <h1 className="xl:text-4xl md:text-3xl text-xl text-white font-bold xl:my-3 my-2">
                Cargo Ground
              </h1>
            </p>
          </div>
        </div>
      </section>
    );
}
export default CargoGround