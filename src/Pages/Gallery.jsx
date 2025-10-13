"use client"

import { useState } from "react"
import { FaSearchPlus } from "react-icons/fa"

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Office", "Team", "Events", "Projects", "Awards"]

  const galleryItems = [
    {
      id: 1,
      title: "Modern Office Space",
      category: "Office",
      image: "https://images.pexels.com/photos/3807682/pexels-photo-3807682.jpeg",
      description: "Our state-of-the-art headquarters with collaborative workspaces",
    },
    {
      id: 2,
      title: "Team Meeting",
      category: "Team",
      image: "https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg",
      description: "Daily standup meeting with our development team",
    },
    {
      id: 3,
      title: "Annual Company Retreat",
      category: "Events",
      image: "https://images.pexels.com/photos/3184395/pexels-photo-3184395.jpeg",
      description: "Team building activities at our annual company retreat",
    },
    {
      id: 4,
      title: "E-commerce Platform",
      category: "Projects",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      description: "Custom e-commerce platform built for a major retail client",
    },
    {
      id: 5,
      title: "Innovation Award 2024",
      category: "Awards",
      image: "https://images.pexels.com/photos/3183187/pexels-photo-3183187.jpeg",
      description: "Receiving the Innovation Excellence Award for our AI solutions",
    },
    {
      id: 6,
      title: "Development Team",
      category: "Team",
      image: "https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg",
      description: "Our talented development team working on cutting-edge projects",
    },
  ]

  const filteredItems =
    selectedCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Our <span className="text-red-600">Gallery</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Take a look behind the scenes at Squad Systems. From our modern office spaces to successful project
              deliveries and team celebrations.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors mb-2 ${
                  selectedCategory === category
                    ? "bg-red-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                onClick={() => setSelectedImage(item.image)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <FaSearchPlus className="text-white opacity-0 group-hover:opacity-100 text-3xl transition-opacity duration-300" />
                  </div>
                  <span className="absolute top-3 left-3 px-2 py-1 bg-red-600 text-white text-xs rounded">
                    {item.category}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              className="absolute -top-12 right-0 text-white hover:text-gray-300 text-2xl"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey in Numbers</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Milestones and achievements that showcase our growth and success
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Delivered", description: "Successful project completions" },
              { number: "150+", label: "Happy Clients", description: "Satisfied customers worldwide" },
              { number: "50+", label: "Team Members", description: "Talented professionals" },
              { number: "8+", label: "Years Experience", description: "In the technology industry" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">{stat.number}</div>
                <div className="font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery
