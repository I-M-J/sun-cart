"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";



const slides = [
  {
    id: 1,
    title: "Summer Sale 50% Off",
    subtitle: "Discover the latest trends for your perfect summer getaway.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
    button: "Shop Now",
  },
  {
    id: 2,
    title: "Stay Cool & Protected",
    subtitle: "Premium sunglasses and skincare for ultimate sun protection.",
    image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=1920",
    button: "Explore Essentials",
  },
  {
    id: 3,
    title: "Beach Ready Accessories",
    subtitle: "Everything you need for a day in the sand and surf.",
    image: "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?auto=format&fit=crop&w=1920&q=80",
    button: "View Accessories",
  },
];

const HeroBanner = () => {
  const [current, setCurrent] = useState(0);

  const getNextSlide = (current, length) => {
    return (current + 1) % length;
  }

  const goToNextSlide = () => {
    setCurrent((prev) => getNextSlide(prev, slides.length))
  }

  const startTimer = () => {
    return setInterval(goToNextSlide, 5000);
  }

  const stopTimer = (timer) => {
    clearInterval(timer);
  }

  useEffect(() => {
    const timer = startTimer();
    return () => stopTimer(timer);
  }, [])

  const slide = slides[current]

  return (
    <section className="relative h-150 w-full overflow-hidden">
      {/* overflow-hidden is necessary if scale up on hover effect was added, or added rounded corner to the parent which the image inside should also follow */}
      <Image
        key={current}
        src={slide.image}
        alt={slide.title}
        fill
        className="object-cover animate__animated animate__fadeIn transition-transform duration-300 hover:scale-110"
        priority
      />
      <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

      <div key={current + 3} className="animate__animated animate__fadeInUp relative z-10 flex h-full flex-col items-center justify-center gap-4 px-4 text-center">
        <h1 className="text-5xl font-bold text-white md:text-7xl">{slide.title}</h1>

        <p className="text-lg text-stone-200 md:text-xl">{slide.subtitle}</p>

        <Link href="/products" className="btn bg-blue-500/90 text-white border border-transparent rounded-full shadow-none px-6 py-6 text-base md:text-lg">{slide.button}</Link>
      </div>

      <div className="absolute bottom-6 left-0 right-0 z-10 flex justify-center gap-2">
        {
          slides.map((slide, index) => <div key={index === current ? `active-${current}` : index} className={`h-3 rounded-full animate__animated animate__bounceIn ${index === current ? "w-8 bg-primary" : "w-3 bg-white/50"}`}></div>)
        }
      </div>
    </section>
  )
}

export default HeroBanner
