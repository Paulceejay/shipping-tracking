import Image from "next/image";

const CompanyIcons = () => {
    return (
      <>
        <div className="bg-lightBlue lg:m-4 m-2 flex justify-center items-center flex-col md:py-5 py-2 md:px-12 px-7">
          <Image src="/icons/doordash.png" alt="" width={120} height={100} />
          <p className="text-white mt-4 font-light sm:text-sm text-[10px]">
            DOORDASH
          </p>
        </div>
        <div className="bg-lightBlue lg:m-4 m-2 flex justify-center items-center flex-col md:py-5 py-2  md:px-12 px-7">
          <Image
            className="mt-4"
            src="/icons/uber.png"
            alt=""
            width={120}
            height={100}
          />
          <p className="text-white mt-4 font-light text-sm">UBER</p>
        </div>
        <div className="bg-lightBlue lg:m-4 m-2 flex justify-center items-center flex-col md:py-5 py-2  md:px-12 px-7">
          <Image src="/icons/lyft.png" alt="" width={120} height={100} />
          <p className="text-white mt-4 font-light text-sm">LYFT</p>
        </div>
        <div className="bg-lightBlue lg:m-4 m-2 flex justify-center items-center flex-col md:py-5 py-2  md:px-12 px-7">
          <Image src="/icons/relay.png" alt="" width={120} height={100} />
          <p className="text-white mt-5 font-light text-sm">RELAY</p>
        </div>
        <div className="bg-lightBlue lg:m-4 m-2 flex justify-center items-center flex-col md:py-5 py-2  md:px-12 px-7">
          <Image src="/icons/fedex.png" alt="" width={120} height={100} />
          <p className="text-white mt-5 font-light text-sm">RELAY</p>
        </div>
        <div className="bg-lightBlue lg:m-4 m-2 flex justify-center items-center flex-col md:py-5 py-2  md:px-12 px-7">
          <Image src="/icons/ups.png" alt="" width={70} height={50} />
          <p className="text-white mt-5 font-light text-sm">RELAY</p>
        </div>
        <div className="bg-lightBlue lg:m-4 m-2 flex justify-center items-center flex-col md:py-5 py-2  md:px-12 px-7">
          <Image src="/icons/canada-post.png" alt="" width={70} height={50} />
          <p className="text-white mt-4 font-light text-xs">CANADA POST</p>
        </div>
        <div className="bg-lightBlue lg:m-4 m-2 flex justify-center items-center flex-col md:py-5 py-2  md:px-12 px-7">
          <Image src="/icons/canada-post.png" alt="" width={70} height={50} />
          <p className="text-white mt-4 font-light text-xs">CANADA POST</p>
        </div>
        <div className="bg-lightBlue lg:m-4 m-2 md:flex justify-center items-center flex-col md:py-5 py-2  md:px-12 px-7 hidden">
          <Image src="/icons/canada-post.png" alt="" width={70} height={50} />
          <p className="text-white mt-4 font-light text-xs">CANADA POST</p>
        </div>
      </>
    );
}

export default CompanyIcons