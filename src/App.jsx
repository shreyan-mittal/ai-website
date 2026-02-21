import { Routes, Route } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { NotFound } from "./components/NotFound"

import { Hero } from "./components/Hero"
import { WhyUs } from "./components/WhyUs"
import { Engagement } from "./components/Engagement"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { TestimonialsStacked } from "./components/testimonials-with-image"
import { FAQs } from "./components/Faq"
import { ServicesBento } from "./components/ServicesBento"

function Home() {
  return (
    <>
      <Hero />
      <ServicesBento />
      <WhyUs />
      <Engagement />
      <TestimonialsStacked />
      <FAQs />
      <Contact />
      <Footer />
    </>
  )
}

function App() {
  return (
    <div className="bg-[#07090f] text-white min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
