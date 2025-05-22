"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

type HighlightStory = {
  id: string
  image: string
  date: string
}

type HighlightCategory = {
  id: string
  title: string
  cover: string
  account: string
  stories: HighlightStory[]
}

export function InstagramHighlights() {
  const [activeHighlight, setActiveHighlight] = useState<string | null>(null)
  const [activeStoryIndex, setActiveStoryIndex] = useState(0)
  const [storyProgress, setStoryProgress] = useState(0)

  const highlights: HighlightCategory[] = [
    {
      id: "detailing",
      title: "Detailing",
      cover: "/placeholder.svg?height=150&width=150",
      account: "highdefinitionmobiledetailing",
      stories: [
        {
          id: "detail1",
          image: "/placeholder.svg?height=800&width=450",
          date: "2 days ago",
        },
        {
          id: "detail2",
          image: "/placeholder.svg?height=800&width=450",
          date: "3 days ago",
        },
        {
          id: "detail3",
          image: "/placeholder.svg?height=800&width=450",
          date: "5 days ago",
        },
      ],
    },
    {
      id: "products",
      title: "Products",
      cover: "/placeholder.svg?height=150&width=150",
      account: "righteouslivingincc",
      stories: [
        {
          id: "product1",
          image: "/placeholder.svg?height=800&width=450",
          date: "1 day ago",
        },
        {
          id: "product2",
          image: "/placeholder.svg?height=800&width=450",
          date: "4 days ago",
        },
      ],
    },
    {
      id: "before-after",
      title: "Before/After",
      cover: "/placeholder.svg?height=150&width=150",
      account: "highdefinitionmobiledetailing",
      stories: [
        {
          id: "ba1",
          image: "/placeholder.svg?height=800&width=450",
          date: "1 week ago",
        },
        {
          id: "ba2",
          image: "/placeholder.svg?height=800&width=450",
          date: "1 week ago",
        },
        {
          id: "ba3",
          image: "/placeholder.svg?height=800&width=450",
          date: "1 week ago",
        },
        {
          id: "ba4",
          image: "/placeholder.svg?height=800&width=450",
          date: "2 weeks ago",
        },
      ],
    },
    {
      id: "reviews",
      title: "Reviews",
      cover: "/placeholder.svg?height=150&width=150",
      account: "righteouslivingincc",
      stories: [
        {
          id: "review1",
          image: "/placeholder.svg?height=800&width=450",
          date: "3 days ago",
        },
        {
          id: "review2",
          image: "/placeholder.svg?height=800&width=450",
          date: "1 week ago",
        },
      ],
    },
    {
      id: "specials",
      title: "Specials",
      cover: "/placeholder.svg?height=150&width=150",
      account: "highdefinitionmobiledetailing",
      stories: [
        {
          id: "special1",
          image: "/placeholder.svg?height=800&width=450",
          date: "2 days ago",
        },
      ],
    },
    {
      id: "lifestyle",
      title: "Lifestyle",
      cover: "/placeholder.svg?height=150&width=150",
      account: "ipmoney6",
      stories: [
        {
          id: "lifestyle1",
          image: "/placeholder.svg?height=800&width=450",
          date: "3 days ago",
        },
        {
          id: "lifestyle2",
          image: "/placeholder.svg?height=800&width=450",
          date: "5 days ago",
        },
      ],
    },
  ]

  const openHighlight = (id: string) => {
    setActiveHighlight(id)
    setActiveStoryIndex(0)
    setStoryProgress(0)
  }

  const closeHighlight = () => {
    setActiveHighlight(null)
    setActiveStoryIndex(0)
    setStoryProgress(0)
  }

  const nextStory = () => {
    const currentHighlight = highlights.find((h) => h.id === activeHighlight)
    if (!currentHighlight) return

    if (activeStoryIndex < currentHighlight.stories.length - 1) {
      setActiveStoryIndex(activeStoryIndex + 1)
      setStoryProgress(0)
    } else {
      // Move to next highlight or close if it's the last one
      const currentIndex = highlights.findIndex((h) => h.id === activeHighlight)
      if (currentIndex < highlights.length - 1) {
        setActiveHighlight(highlights[currentIndex + 1].id)
        setActiveStoryIndex(0)
        setStoryProgress(0)
      } else {
        closeHighlight()
      }
    }
  }

  const prevStory = () => {
    if (activeStoryIndex > 0) {
      setActiveStoryIndex(activeStoryIndex - 1)
      setStoryProgress(0)
    } else {
      // Move to previous highlight or stay at the first story
      const currentIndex = highlights.findIndex((h) => h.id === activeHighlight)
      if (currentIndex > 0) {
        const prevHighlight = highlights[currentIndex - 1]
        setActiveHighlight(prevHighlight.id)
        setActiveStoryIndex(prevHighlight.stories.length - 1)
        setStoryProgress(0)
      }
    }
  }

  const getHighlightLink = (account: string) => {
    return `https://www.instagram.com/${account}/`
  }

  const activeHighlightData = highlights.find((h) => h.id === activeHighlight)

  return (
    <div className="w-full">
      <div className="flex overflow-x-auto gap-4 pb-4 px-2 scrollbar-hide">
        {highlights.map((highlight) => (
          <button
            key={highlight.id}
            onClick={() => openHighlight(highlight.id)}
            className="flex flex-col items-center gap-2 min-w-[80px]"
          >
            <div className="relative w-[80px] h-[80px] rounded-full p-[3px] bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400">
              <div className="absolute inset-0 rounded-full bg-white dark:bg-gray-900 m-[2px]"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white dark:border-gray-900">
                <Image
                  src={highlight.cover || "/placeholder.svg"}
                  alt={highlight.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <span className="text-xs text-center truncate w-full">{highlight.title}</span>
          </button>
        ))}
      </div>

      {/* Story Viewer Modal */}
      <AnimatePresence>
        {activeHighlight && activeHighlightData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            onClick={closeHighlight}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-md mx-auto h-[80vh] max-h-[800px]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Story Header */}
              <div className="absolute top-0 left-0 right-0 z-10 p-4">
                {/* Progress Bar */}
                <div className="flex gap-1 mb-4">
                  {activeHighlightData.stories.map((_, index) => (
                    <div key={index} className="h-1 bg-white/30 flex-1 rounded-full overflow-hidden">
                      <div
                        className={cn(
                          "h-full bg-white",
                          index === activeStoryIndex ? "animate-progress" : index < activeStoryIndex ? "w-full" : "w-0",
                        )}
                        style={{
                          animationPlayState: index === activeStoryIndex ? "running" : "paused",
                        }}
                        onAnimationEnd={() => {
                          if (index === activeStoryIndex) {
                            nextStory()
                          }
                        }}
                      ></div>
                    </div>
                  ))}
                </div>

                {/* Account Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 p-[2px]">
                      <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-900">
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-xs">@</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-white">
                      <p className="text-sm font-medium">@{activeHighlightData.account}</p>
                      <p className="text-xs opacity-70">{activeHighlightData.stories[activeStoryIndex]?.date || ""}</p>
                    </div>
                  </div>
                  <button onClick={closeHighlight} className="text-white">
                    <X className="h-6 w-6" />
                  </button>
                </div>
              </div>

              {/* Story Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={activeHighlightData.stories[activeStoryIndex]?.image || "/placeholder.svg"}
                  alt="Story"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Navigation Controls */}
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white opacity-70 hover:opacity-100"
                onClick={(e) => {
                  e.stopPropagation()
                  prevStory()
                }}
              >
                <ChevronLeft className="h-8 w-8" />
              </button>

              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white opacity-70 hover:opacity-100"
                onClick={(e) => {
                  e.stopPropagation()
                  nextStory()
                }}
              >
                <ChevronRight className="h-8 w-8" />
              </button>

              {/* View on Instagram Link */}
              <div className="absolute bottom-6 left-0 right-0 flex justify-center">
                <a
                  href={getHighlightLink(activeHighlightData.account)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 text-white text-sm py-2 px-4 rounded-full flex items-center gap-2 backdrop-blur-sm transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  View on Instagram
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
