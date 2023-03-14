const AuthImage = () => {
    return (
      <div className="lg:block hidden h-screen relative w-[50%] mr-5">
        <img className="" src="/images/ship-auth.jpg" alt="" />
        <p className="absolute right-10 left-10 bottom-3 xl:text-5xl text-3xl text-white w-1/2 font-bold leading-relaxed">
          Welcome to <span className="text-primary2">OLTEM</span> Logistics.
          Let’s get started.
        </p>
      </div>
    );
}

export default AuthImage