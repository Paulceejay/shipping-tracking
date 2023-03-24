import Image from "next/image";

const Footer = () => {
    return (
      <footer className="bg-footer-bg-img bg-blend-darken bg-no-repeat bg-cover">
        <div className=" bg-gradient-to-r from-gradientThree">
          <div className="xl:w-[85%] lg:w-[95%] w-11/12 mx-auto md:py-20 py-14 grid md:flex md:justify-between grid-cols-1">
            <div className="md:w-1/2 xl:text-lg lg:text-base text-sm text-white col-span-12 ">
              <h2 className="mb-5 text-lg xl:text-2xl font-semibold text-white">
                ISLOM LOGISTICS
              </h2>
              <p className="md:w-[90%] w-full">
                Lorem ipsum dolor sit amet consectetur. Turpis lacus sed ut
                dolor amet risus facilisis cursus nisl. Vel lacus etiam nulla
                venenatis sed. Bibendum a eu dignissim sed ut. Ultricies cras
                leo condimentum amet nunc.
              </p>
            </div>

            <div className="xl:w-[15%] md:w-[20%] xl:text-xl lg:text-lg text-base text-white md:mt-0 mt-7 col-span-12 ">
              <h3 className="md:mb-5 text-base xl:text-lg font-semibold text-white">
                OUR COMPANY
              </h3>
              <p className="my-1">About ShippingDaily</p>
              <p className="my-1">Contact us</p>
              <p className="my-1">prising</p>
              <p className="my-1">Faq</p>
            </div>

            <div className="xl:w-[15%] md:w-[20%] xl:text-xl lg:text-lg text-base text-white col-span-12 col-start-2">
              <h3 className="mb-5 text-base xl:text-lg font-semibold text-white">
                LANGUAGE
              </h3>
              <p className="my-4">Location - Nigerian</p>
              <div className="md:w-[65%] w-full flex justify-between border-[2px] border-white py-2">
                <p className="ml-3">English</p>

                <Image
                  className="mr-3"
                  src="/svg/Stroke-down.svg"
                  alt=""
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-primary2">
          <div className="xl:w-[80%] lg:w-[90%] md:w-[95%] w-11/12 mx-auto flex md:justify-between md:flex-row justify-center items-center flex-col py-3">
            <p className="text-white text-base lg:text-lg mb-1 md:mb-0">
              All rights reserved © FedEx 1995-2022
            </p>
            <p className="text-white text-base lg:text-lg mt-1 md:mt-0">
              Terms of Use | Security and privacy
            </p>
          </div>
        </div>
      </footer>
    );
}

export default Footer