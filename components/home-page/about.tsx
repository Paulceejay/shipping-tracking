import Image from "next/image";

const About = () => {
  return (
    <div className="xl:w-[80%] lg:w-[90%] md:w-[95%] w-11/12 mx-auto lg:my-40 my-16">
      <div className="flex md:flex-row flex-col-reverse">
        <div className="md:w-1/2 w-full">
          <Image src="/images/plain.jpg" alt="" width={500} height={100} />
        </div>
        <div className="xl:w-[70%] lg:w-[50%] md:w-1/2 md:ml-7">
          <h1 className="text-primary2 text-xl font-semibold mb-6">
            WE ARE OLTEM LOGISTICS
          </h1>
          <h2 className="text-headerColor font-bold xl:text-5xl md:text-3xl text-xl lg:mb-6 md:mb-3">
            1300+ CARRIERS SUPPORTED FOR MILLIONS OF USERS
          </h2>
          <p className="my-3 text-paragraph xl:text-3xl md:text-lg text-base">
            To be travel management leaders in regions in which we operate,
            innovative technology to improve the customer experience.
          </p>
          <p className="my-3 text-paragraph xl:text-3xl md:text-lg text-base">
            We are extremely proud that 25% of our workforce has over 20 years’
            service as employees. Fastrans Transport recognises the need to
            provide training.
          </p>
        </div>
      </div>

      <div className="md:flex flex-nowrap grid md:mt-0 mt-4">
        <p className="bg-secondaryColor opacity-40 xl:text-2xl md:text-lg text-xl text-white xl:w-1/2 md:w-[55%] w-full xl:py-12 py-5 md:px-3 px-2 md:mr-5 shadow-sm shadow-paragraph col-span-12">
          We have long standing business relationshipswith some of the world’s
          largest agency.
        </p>
        <div className="bg-secondaryColor xl:py-12 py-6 xl:px-14 lg:px-8 md:px-5 px-2 text-white md:w-auto md:mx-5 shadow-md shadow-paragraph col-span-6 md:m-0 my-4 mr-2">
          <p className="text-center font-bold xl:text-3xl md:text-2xl text-xl">
            1300+
          </p>
          <p className="text-center">Clients Worldwide</p>
        </div>
        <div className="bg-white xl:py-12 py-6 xl:px-14 lg:px-8 md:px-5 px-2 md:w-auto md:mx-5 shadow-lg shadow-paragraph col-span-6 md:m-0 my-4 ml-2">
          <p className="text-secondaryColor text-center font-bold xl:text-3xl md:text-2xl text-xl">
            400+
          </p>
          <p className="text-paragraph text-center">Projects Done</p>
        </div>
      </div>
    </div>
  );
};

export default About;