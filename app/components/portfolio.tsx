"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = ["all", "team", "personal", "favorites"]

  const works = [
    {
      id: 1,
      title: "Night Chat - Messaging App Demo",
      category: "team",
      image:"https://raw.githubusercontent.com/rparker122/images/main/demo%20night%20chat%20FINAL600x400%20(1).jpg",
      year: "2024",
      url: "https://messaging-app-theta-seven.vercel.app/",
    },
   
    {
      id: 4,
      title: "Arcade Hub",
      category: "team",
      image: "https://raw.githubusercontent.com/rparker122/images/main/demo%20arcade.png",
      year: "2025",
      url: "https://game-site-tau.vercel.app/",
    },
    {
      id: 5,
      title: "Calendar Website Demo",
      category: "personal",
      image: "https://raw.githubusercontent.com/rparker122/images/main/mail.google.jpg",
      year: "2025",
      url: "https://calender-vert.vercel.app/",
    },
    {
      id: 6,
      title: "Daily Quote Generator",
      category: "favorites",
      image: "https://raw.githubusercontent.com/rparker122/images/main/demo%20quote%20generator.jpg",
      year: "2025",
      url: "https://quote-generator-or.vercel.app/",
    },
  ]

  const filteredWorks = works.filter((work) => (selectedCategory === "all" ? true : work.category === selectedCategory))

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="text-sm capitalize"
            >
              {category}
            </Button>
          ))}
        </div>
        <motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredWorks.map((work) => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <a href={work.url} target="_blank" rel="noopener noreferrer">
                  <Card className="overflow-hidden bg-zinc-900">
                    <CardContent className="p-0">
                      <div className="group relative">
                        <img
                          src={work.image || "/placeholder.svg"}
                          alt={work.title}
                          className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <h3 className="text-xl font-semibold text-white">{work.title}</h3>
                          <p className="mt-2 text-sm text-gray-300">{work.year}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}   
