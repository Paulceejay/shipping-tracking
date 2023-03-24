import TrackingSvg from "../icons/TrackingSvg";

const TrackingProduct = () => {
    return (
      <div className="bg-transparent rounded xl:w-[85%] lg:w-[95%] lg:max-w-none xs:max-w-screen-xs w-11/12 mx-auto py-2 relative left-0 right-0 lg:bottom-24 bottom-16">
        <div className="bg-white p-6 flex shadow-sm shadow-paragraph rounded-md">
          <div className="hidden lg:block bg-product-bg-img bg-no-repeat bg-center bg-cover bg-blend-darken filter brightness-[60%] w-1/2 mr-4">
            <p className="xl:w-[60%] pl-10 xl:pr-20 pr-10 xl:py-10 py-5 lg:text-4xl text-2xl text-white font-black">
              Track Your Product Way About
            </p>
          </div>
          <div className="lg:w-1/2 w-full ml-4 flex justify-between flex-col">
            <div className="border-2 text-paragraph xl:py-5 py-4 px-3 text-base w-full">
              <p>Enter tracking ID</p>
            </div>
            <div className="flex lg:mt-0 mt-4">
              <div className="lg:block hidden w-1/2"></div>
              <p className="lg:w-11/12 w-full bg-primary2 text-white font-bold sm:text-xl text-base flex lg:justify-center lg:px-0 xl:py-4 py-3 px-4">
                Track Package
                <span className="py-1 ml-3">
                  <TrackingSvg />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default TrackingProduct
