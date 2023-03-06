import Image from "next/image"

const Logo = (props:any) => {
    return (
      <Image
        className={props.className}
        src="/icons/logo.png"
        alt="logo image"
        width={150}
        height={130}
      />
    );
}

export default Logo