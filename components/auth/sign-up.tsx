import Link from "next/link";
import InputUi from "../layouts/input-ui";
import AuthImage from "./auth-img";

const SignUp = () => {
  return (
    <div className="xl:pt-24 xl:pb-32 pt-16 pb-28 xl:w-[90%] lg:w-[95%] md:w-[95%] w-11/12 mx-auto flex justify-between">
      <AuthImage />
      <div className="w-full lg:w-1/2">
        <h1 className="xl:text-4xl text-lg flex justify-center items-center my-5 font-bold">
          Create Your Account
        </h1>
        <p className="text-center lg:text-2xl text-base lg:w-10/12 mx-auto my-5">
          Enter your contact information, or 
          <Link className="text-secondaryColor underline mx-2" href="/auth/login">
            log in,
          </Link>
           if you already have a user ID and password.
        </p>

        <form action="" className="w-full lg:w-10/12 mx-auto">
          <div className="w-full grid gap-3 md:grid-cols-2 grid-cols-1">
            <div className="flex flex-col my-5 md:col-span-1 col-span-2">
              <InputUi name="FIRST NAME" />
            </div>

            <div className="flex flex-col my-5 md:col-span-1 col-span-2">
              <InputUi name="LAST NAME" />
            </div>

            <div className="flex flex-col my-5 md:col-span-1 col-span-2">
              <InputUi name="EMAIL" />
            </div>

            <div className="flex flex-col my-5 md:col-span-1 col-span-2">
              <label className="xl:text-lg text-base text-paragraph">
                Country
              </label>
              <div className="flex justify-between bg-inputBg xl:h-14 lg:h-12 h-10 border-2 w-full lg:p-4 p-2">
                <img src="/icons/nigeria.png" alt="" width={30} />
                <img
                  className=" bg-paragraph"
                  src="/svg/Stroke-down.svg"
                  alt=""
                  width={20}
                />
              </div>
            </div>

            <div className="flex flex-col my-5 w-full col-span-2">
              <InputUi name="PASSWORD" />
            </div>

            <button
              disabled={true}
              className="bg-primary2 px-6 py-4 text-white font-bold mt-5 w-full col-span-2"
            >
              CREATE ACCOUNT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp
