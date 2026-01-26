import { Hero } from "./components/Hero"
import {  Services } from "./components/Features"
import {  WhyUs } from "./components/Productivity"
import { Engagement } from "./components/Pricing"
import { Contact } from "./components/Testimonials"
import { Footer } from "./components/FinalCTA"
import { Navbar } from "./components/Navbar"
import { FAQs } from "./components/Faq"

function App() {
  return (
    <div className="bg-[#07090f] text-white">
      <Navbar/>
      <Hero />
      <Services />
      <WhyUs/>
      <Engagement />
      <FAQs/>
      <Contact />
      <Footer />
    </div>
  )
}

export default App
