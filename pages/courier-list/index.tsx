import Head from "next/head";
import CourierBgImage from "../../components/courier/courier-bg-image";
import GlobalCourier from "../../components/courier/global-courier";
import ParagraphText from "../../components/courier/paragraph-text";
import About from "../../components/home-page/about";
import PinkLine from "../../components/home-page/pink-line";
import TrackingProduct from "../../components/home-page/tracking-product";
import CargoGround from "../../components/layouts/cargo-ground";
import Footer from "../../components/layouts/footer";

const CourierList = () => {
    return (
      <>
        <Head>
          <title className="">Shipping Tracking-CourierList</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <CourierBgImage />
        <PinkLine />
        <TrackingProduct />
        <ParagraphText />
        <GlobalCourier />
        <About />
        <CargoGround />
        <Footer />
      </>
    );
}

export default CourierList