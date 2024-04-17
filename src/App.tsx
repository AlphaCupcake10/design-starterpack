import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export default function App()
{
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}