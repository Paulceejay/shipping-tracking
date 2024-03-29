import InputUi from "../layouts/input-ui";

const ContactForm = () => {
    return (
      <div className="bg-contact-form-bg-img bg-no-repeat my-9 py-16">
        <div className="xl:w-[85%] lg:w-[95%] lg:max-w-none xs:max-w-screen-xs w-11/12 mx-auto flex justify-between lg:flex-row flex-col">
          <div className="w-full lg:w-[45%]">
            <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold lg:w-10/12 my-5 w-10/12">
              We are the Future of Cargo &{" "}
              <span className="text-primary2">Logistics</span>
            </h1>
            <p className="my-5 text-paragraph font-bold lg:text-xl text-lg">
              We deploy a dedicated start-up effectiveness team on day one that
              works with you to ensure your solution is up and running within 60
              days. And, through our focus on continuous improvement.
            </p>
          </div>

          <form action="" className="lg:w-1/2 w-full">
            <div className="grid gap-3 md:grid-cols-2 grid-cols-1">
              <div className="flex flex-col">
                <InputUi name="NAME" />
              </div>

              <div className="flex flex-col">
                <InputUi name="PASSWORD" />
              </div>

              <div className="flex flex-col w-full md:col-span-2">
                <label
                  className="xl:text-lg text-base text-paragraph"
                  htmlFor="message"
                >
                  MESSAGE
                </label>
                <input
                  className="bg-inputBg border-2 lg:h-32 h-24 w-full"
                  disabled={true}
                  type="text"
                  id="message"
                />
              </div>
              <button
                disabled={true}
                className="bg-primary2 px-6 py-4 text-white font-bold md:col-span-2 mt-5"
              >
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>
    );
}

export default ContactForm