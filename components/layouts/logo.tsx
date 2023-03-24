import Image from "next/image"

const Logo = (props:any) => {
    return (
      <Image
        className={props.className}
        src="/icons/logo.png"
        alt="logo image"
        width={130}
        height={100}
      />
    );
}

export default Logo