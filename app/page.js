"use client"
import HomePage from "@/app/components/HomePage";
import Navigation from "@/app/components/Navigation";
import { useEffect } from "react";
import AOS from "aos"
import "aos/dist/aos.css"

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false
    })
  }, [])
  return (
    <div>
      <Navigation />
      <HomePage />
    </div>
  );
}
