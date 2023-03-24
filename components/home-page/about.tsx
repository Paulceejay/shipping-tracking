import Image from "next/image";

const About = () => {
  return (
    <div className="xl:w-[85%] lg:w-[95%] lg:max-w-none xs:max-w-screen-xs w-11/12 mx-auto lg:my-40 my-20">
      <div className="flex lg:flex-row flex-col-reverse">
        <div className="lg:w-1/2 w-full lg:block hidden">
          <Image src="/images/plain.jpg" alt="" width={500} height={100} />
        </div>
        <div className="lg:w-1/2 w-full lg:hidden my-7">
          <Image className="w-full h-52" src="/images/plain.jpg" alt="" width={300} height={100} />
        </div>
        <div className="xl:w-[70%] lg:w-[50%]">
          <h1 className="text-primary2 text-lg font-semibold mb-6">
            WE ARE OLTEM LOGISTICS
          </h1>
          <h2 className="text-headerColor font-bold md:text-xl text-lg lg:mb-6 md:mb-3">
            1300+ CARRIERS SUPPORTED FOR MILLIONS OF USERS
          </h2>
          <p className="my-3 text-paragraph xl:text-xl text-base">
            To be travel management leaders in regions in which we operate,
            innovative technology to improve the customer experience.
          </p>
          <p className="my-3 text-paragraph xl:text-xl text-base">
            We are extremely proud that 25% of our workforce has over 20 years’
            service as employees. Fastrans Transport recognises the need to
            provide training.
          </p>
        </div>
      </div>

      <div className="lg:flex flex-nowrap grid md:mt-0 mt-4 gap-2">
        <p className="bg-secondaryColor opacity-40 xl:text-xl md:text-lg text-lg text-white xl:w-1/2 lg:w-[50%] w-full py-3 md:px-4 px-2 md:mr-5 shadow-sm shadow-paragraph col-span-12">
          We have long standing business relationshipswith some of the world’s
          largest agency.
        </p>
        <div className="bg-secondaryColor xl:py-5 py-3 xl:px-10 lg:px-5 md:px-4 px-2 text-white md:w-auto lg:mx-5 shadow-md shadow-paragraph col-span-6 md:m-0 my-4 mr-2">
          <p className="text-center font-bold xl:text-2xl md:text-xl text-lg">
            1300+
          </p>
          <p className="flex justify-center items-center text-center">
            Clients Worldwide
          </p>
        </div>
        <div className="bg-white xl:py-5 py-3 xl:px-10 lg:px-5 md:px-4 px-2 md:w-auto lg:mx-5 shadow-lg shadow-paragraph col-span-6 md:m-0 my-4 ml-2">
          <p className="text-secondaryColor text-center font-bold xl:text-2xl md:text-xl text-lg">
            400+
          </p>
          <p className="text-paragraph flex justify-center items-center text-center">
            Projects Done
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;