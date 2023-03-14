const ParagraphText = () => {
    return (
      <div className="xl:w-[80%] lg:w-[90%] md:w-[95%] w-11/12 mx-auto text-center">
        <p className="text-black mb-7 xl:text-5xl lg:text-3xl md:text-2xl text-xl md:w-[75%] w-11/12 mx-auto font-normal">
          ShippingDaily supports shipment tracking for the following postal and
          courier services.{" "}
          <span className="underline">
            China Post, DHL, UPS, Royal Mail, FedEx
          </span>
          ...
        </p>
      </div>
    );
}

export default ParagraphText