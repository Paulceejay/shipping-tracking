import Image from "next/image"

const address = [
  { name: "Location", content: "27 Division Street, New York,NY 10002, USA" },
  { name: "Phone", content: "+123 -(3233) 32333" },
  { name: "Emai", content: "www.example@gmail.com" },
];

const ContactLocation = () => {
    return (
      <div className="xl:w-[80%] lg:w-[90%] md:w-[95%] w-11/12 mx-auto flex justify-between lg:my-32 my-20">
        <Image
          className="lg:block hidden"
          src="/images/box.jpg"
          alt=""
          width={500}
          height={200}
        />
        <div className="h-auto">
          <h1 className="xl:text-6xl lg:text-4xl sm:text-2xl text-xl text-black font-semibold">Office in New York</h1>
          {address.map((addr) => {
            return (
              <div key={addr.content} className="xl:my-14 my-10">
                <h2 className="text-secondaryColor md:text-xl font-bold">{addr.name}</h2>
                <p className="text-paragraph md:text-xl text-base my-5">{addr.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
} 

export default ContactLocation