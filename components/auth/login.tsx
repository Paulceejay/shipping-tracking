import Link from "next/link";
import InputUi from "../layouts/input-ui";
import AuthImage from "./auth-img";

const Login = () => {
    return (
      <div className="xl:pt-24 xl:pb-32 pt-16 pb-28 xl:w-[90%] lg:w-[95%] md:w-[95%] w-11/12 mx-auto flex justify-between">
        <AuthImage />
        <div className="w-full lg:w-1/2 mt-10">
          <p className="text-center xl:text-2xl text-xl lg:w-10/12 mx-auto">
            Enter your user Email and password to log in
          </p>
          <Link
            className="xl:text-xl text-lg flex justify-center items-center text-secondaryColor py-10 font-bold underline"
            href="/auth/sign-up"
          >
            Create Account
          </Link>
          <form action="" className="w-full lg:w-10/12 mx-auto">
            <div className="w-full">
              <div className="flex flex-col my-5 w-full">
                <InputUi name="NAME" />
              </div>

              <div className="flex flex-col my-5">
                <InputUi name="PASSWORD" />
              </div>

              <button
                disabled={true}
                className="bg-primary2 px-6 py-4 text-white font-bold mt-5 w-full"
              >
                LOGIN
              </button>
              <Link
                className="xl:text-xl text-lg flex justify-center items-center text-secondaryColor py-10 font-bold underline"
                href="/auth/reset-password"
              >
                Forget Password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
}

export default Login