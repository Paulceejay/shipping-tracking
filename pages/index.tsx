import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Header from '../components/layouts/header'
import HeaderBgImage from '../components/home-page/header-bg-image'
import PinkLine from '../components/home-page/pink-line'
import TrackingProduct from '../components/home-page/tracking-product'
import Services from '../components/home-page/services'
import About from '../components/home-page/about'
import IconsMan from '../components/home-page/icons-man'

const inter = Inter({ subsets: ['latin'] })

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
    </>  
  );
}
