// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'

import Available from "./components/Available";
import Cards from "./components/Cards";
import Extra from "./components/Extra";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Other from "./components/Other";


export default function App() {
  return (
    <>
    <div class="bg-[#fcfeff] font-sans text-ink sm: max-w-full max-w-auto lg:max-w-7xl mx-auto over">
    <Header />
    <Hero />
    <Available />
    <Other />
    <Cards />
    <Extra />
    <Footer />
    </div>
    </>
  );
}