const ContactForm = () => {
    return (
      <div className="bg-contact-form-bg-img bg-no-repeat my-14">
        <div className="xl:w-[80%] lg:w-[90%] md:w-[95%] w-11/12 mx-auto flex justify-between md:flex-row flex-col">
          <div className="md:w-[40%] lg:w-[45%]">
            <h1 className="text-xl lg:text-3xl xl:text-4xl font-bold lg:w-10/12 my-5">
              We are the Future of Cargo & <span className="text-primary2">Logistics</span>
            </h1>
            <p className="my-5 text-paragraph font-bold lg:text-xl text-lg">
              We deploy a dedicated start-up effectiveness team on day one that
              works with you to ensure your solution is up and running within 60
              days. And, through our focus on continuous improvement.
            </p>
          </div>

          <form action="" className="md:w-[50%] lg:w-1/2">
            <div className="grid gap-3 md:grid-cols-2 grid-cols-1">
              <div className="flex flex-col">
                <label
                  className="xl:text-lg text-base text-paragraph"
                  htmlFor="name"
                >
                  NAME
                </label>
                <input
                  className="bg-inputBg xl:h-14 lg:h-12 h-10 border-2 w-full"
                  disabled={true}
                  type="text"
                  id="name"
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="xl:text-lg text-base text-paragraph"
                  htmlFor="password"
                >
                  PASSWORD
                </label>
                <input
                  className="bg-inputBg xl:h-14 lg:h-12 h-10 border-2 w-full"
                  disabled={true}
                  type="text"
                  id="password"
                />
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
              <button disabled={true} className="bg-primary2 px-6 py-4 text-white font-bold md:col-span-2 mt-5">SEND MESSAGE</button>
            </div>
          </form>
        </div>
      </div>
    );
}

export default ContactForm