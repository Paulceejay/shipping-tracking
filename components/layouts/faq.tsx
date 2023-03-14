import Image from "next/image";

const faqHow = [
  { name: "How to track a package", minus: "-", id:1 },
  { name: "How to track a package", minus: "-", id: 2 },
  { name: "How to track a package", minus: "-", id: 3 },
];

export const howToTrack = faqHow.map((how) => {
  return (
    <div key={how.id} className="mt-5 lg:pl-10 pl-7 flex justify-between bg-grayBg">
      <h2 className="xl:text-2xl lg:text-xl sx:text-lg text-sm font-medium text-secondaryColor flex justify-center items-center">
        {how.name}
      </h2>
      <p className="bg-secondaryColor text-white xl:px-10 p-7 text-2xl lg:py-5 py-3">
        {how.minus}
      </p>
    </div>
  );
});

const Faq = (props:any) => {
    return (
      <section className="bg-car-bg-img bg-no-repeat lg:my-28 my-20">
        {props.faqHeader}

        <div className="xl:w-[80%] lg:w-[90%] md:w-[95%] w-11/12 mx-auto flex justify-between">
          <div className="xl:w-7/12">
            <h1 className="text-secondaryColor font-bold lg:text-4xl text-2xl">
              {props.faq}
            </h1>
            <div className="mt-16 lg:pl-10 pl-7 flex justify-between bg-grayBg">
              <h2 className="xl:text-3xl lg:text-xl sx:text-lg text-sm font-medium text-secondaryColor flex justify-center items-center">
                How does it work
              </h2>
              <p className="bg-secondaryColor text-white xl:px-10 p-7 text-2xl lg:py-5 py-3">
                +
              </p>
            </div>
            <p className="my-10 xl:text-xl lg:text-lg md:text-base text-sm text-paragraph">
              Once you type your parcels’ tracking numbers in our search bar,
              our system searches for them on the websites of hundreds of
              shipping companies worldwide. The search takes at most a few
              seconds. Our system presents the results to you in a way that’s
              clear and easy to understand, so you can know at once the status
              of each package.
            </p>
            
            {howToTrack}
            {props.how}
          </div>
          <Image
            className="lg:block hidden"
            src="/images/cars.jpg"
            alt=""
            width={450}
            height={250}
          />
        </div>
      </section>
    );
}

export default Faq