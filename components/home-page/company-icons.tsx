import Image from "next/image";

const icons = [
  { name: "DOORDASH", src: "/icons/doordash.png", width: 80, height: 80 },
  { name: "UBER", src: "/icons/uber.png", width: 80, height: 80 },
  { name: "LYFT", src: "/icons/lyft.png", width: 80, height: 80 },
  { name: "RELAY", src: "/icons/relay.png", width: 80, height: 80 },
  { name: "RELAY", src: "/icons/fedex.png", width: 80, height: 80 },
  { name: "RELAY", src: "/icons/ups.png", width: 50, height: 50 },
  { name: "CANADA POST", src: "/icons/canada-post.png", width: 50, height: 50 },
  { name: "CANADA POST", src: "/icons/canada-post.png", width: 50, height: 50 },
];

const CompanyIcons = () => {
    return (
      <>
        {icons.map(icon => {
          return (
            <div key={icon.src} className="bg-lightBlue lg:m-2 m-2 flex justify-center items-center flex-col py-2 md:px-9 px-5">
              <Image
                src={icon.src}
                alt=""
                width={icon.width}
                height={icon.height}
              />
              <p className="text-white mt-4 font-light text-xs">{icon.name}</p>
            </div>
          );
        })}
        <div className="bg-lightBlue lg:m-2 m-2 md:flex justify-center items-center flex-col py-2  md:px-9 px-5 hidden">
          <Image src="/icons/canada-post.png" alt="" width={50} height={50} />
          <p className="text-white mt-4 font-light text-xs">CANADA POST</p>
        </div>
      </>
    );
}

export default CompanyIcons