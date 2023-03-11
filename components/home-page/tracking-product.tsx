import Image from "next/image";

const TrackingProduct = () => {
    return (
      <div className="bg-transparent rounded max-w-[1300] xl:w-[80%] lg:w-[90%] w-[95%] mx-auto py-3 relative left-0 right-0 bottom-24">
        <div className="bg-white p-6 flex shadow-sm shadow-paragraph">
          <div className="hidden md:block bg-product-bg-img bg-no-repeat bg-center bg-cover bg-blend-darken w-1/2 mr-4">
            <p className="pl-10 xl:pr-20 pr-10 py-10 xl:text-5xl lg:text-4xl text-2xl font-bold text-white">
              Track Your Product Way About
            </p>
          </div>
          <div className="md:w-1/2 w-full ml-4 flex justify-between flex-col">
            <div className="border-4 text-paragraph py-5 px-3 sm:text-xl text-base w-full">
              <p>Enter tracking ID</p>
            </div>
            <div className="flex">
              <div className="lg:block hidden w-1/12"></div>
              <p className="lg:w-11/12 w-full bg-primary2 text-white font-bold sm:text-2xl text-base flex justify-center py-4">
                Track Package
                <Image
                  className="sm:mx-6 mx-2 md:block hidden"
                  src="/svg/track.svg"
                  alt=""
                  width={25}
                  height={20}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default TrackingProduct

// xl:w-[80%] lg:w-[90%] md:w-[95%] w-11/12 mx-auto