import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/layouts/header'
import HeaderBgImage from '../components/home-page/header-bg-image'
import PinkLine from '../components/home-page/pink-line'
import TrackingProduct from '../components/home-page/tracking-product'
import Services from '../components/home-page/services'
import About from '../components/home-page/about'
import IconsMan from '../components/home-page/icons-man'
import Faq from '../components/layouts/faq'
import FaqHeader from '../components/layouts/faq-header'
import Footer from '../components/layouts/footer'
import CargoGround from '../components/layouts/cargo-ground'

export default function Home() {
  return (
    <>
      <Head>
        <title className="">Shipping Tracking</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderBgImage />
      <PinkLine />
      <TrackingProduct />
      <Services />
      <About />
      <IconsMan />
      <Faq faq="FAQ" faqHeader={<FaqHeader />} />
      <CargoGround />
      <Footer />
    </>
  );
}
