"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const images = [
    {
      src: "https://raw.githubusercontent.com/rparker122/images/main/demo%20fitness%20tracker.jpg",
      alt: "Art piece 1",
      title: "Fitness App",
      link: "https://rparker-fitnessapp.vercel.app/",
    },
    {
      src: "https://raw.githubusercontent.com/rparker122/images/main/demo%20weather%20app%20240x350.jpg", 
      alt: "Art piece 2",
      title: "Weather App",
      link: "https://rparker-weatherapp.vercel.app/",
    },
    {
      src: "https://raw.githubusercontent.com/rparker122/images/main/demo%20calculator%20240x350.jpg",
      alt: "Art piece 3",
      title: "Calculator",
      link: "https://rparker-calcapp.vercel.app/",
    },
    {
      src: "https://raw.githubusercontent.com/rparker122/images/main/demo%20piano.jpg",
      alt: "Art piece 4",
      title: "Piano",
      link: "https://rparker-pianoapp.vercel.app/",
    },
  ]

  return (
    <section className="relative py-20">
      <div ref={ref} className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          Featured Works
        </motion.h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((image, index) => (
            <motion.a
              key={index}
              href={image.link}
              target="_blank"
              className="group relative overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="aspect-[2/3] overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-xl font-semibold text-white">{image.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
