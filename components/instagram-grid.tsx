"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Instagram, Heart, MessageCircle, ExternalLink } from "lucide-react"

type InstagramPost = {
  id: string
  image: string
  caption: string
  likes: number
  comments: number
  account: string
  link: string
}

export function InstagramGrid() {
  const [hoveredPost, setHoveredPost] = useState<string | null>(null)

  const posts: InstagramPost[] = [
    {
      id: "post1",
      image: "/placeholder.svg?height=400&width=400",
      caption: "Check out this amazing detail work! #detailing #cars",
      likes: 124,
      comments: 18,
      account: "highdefinitionmobiledetailing",
      link: "https://www.instagram.com/highdefinitionmobiledetailing/",
    },
    {
      id: "post2",
      image: "/placeholder.svg?height=400&width=400",
      caption: "New refurbished AirPods Pro 2 in stock! #tech #apple",
      likes: 87,
      comments: 9,
      account: "righteouslivingincc",
      link: "https://www.instagram.com/righteouslivingincc/",
    },
    {
      id: "post3",
      image: "/placeholder.svg?height=400&width=400",
      caption: "VIP detailing package results! #detailing #luxury",
      likes: 156,
      comments: 24,
      account: "highdefinitionmobiledetailing",
      link: "https://www.instagram.com/highdefinitionmobiledetailing/",
    },
    {
      id: "post4",
      image: "/placeholder.svg?height=400&width=400",
      caption: "Just restocked these Hellstar shirts! #fashion",
      likes: 92,
      comments: 11,
      account: "righteouslivingincc",
      link: "https://www.instagram.com/righteouslivingincc/",
    },
    {
      id: "post5",
      image: "/placeholder.svg?height=400&width=400",
      caption: "Weekend vibes #lifestyle",
      likes: 78,
      comments: 7,
      account: "ipmoney6",
      link: "https://www.instagram.com/ipmoney6/",
    },
    {
      id: "post6",
      image: "/placeholder.svg?height=400&width=400",
      caption: "Truck detail complete! #detailing #trucks",
      likes: 143,
      comments: 16,
      account: "highdefinitionmobiledetailing",
      link: "https://www.instagram.com/highdefinitionmobiledetailing/",
    },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2">
      {posts.map((post) => (
        <motion.div
          key={post.id}
          className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-800"
          onMouseEnter={() => setHoveredPost(post.id)}
          onMouseLeave={() => setHoveredPost(null)}
          whileHover={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          <Image src={post.image || "/placeholder.svg"} alt={post.caption} fill className="object-cover" />

          {/* Account badge */}
          <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
            <Instagram className="h-3 w-3" />@
            {post.account.length > 12 ? `${post.account.substring(0, 12)}...` : post.account}
          </div>

          {/* Overlay on hover */}
          {hoveredPost === post.id && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-black/70 flex flex-col justify-between p-4"
            >
              <p className="text-white text-sm line-clamp-3">{post.caption}</p>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Heart className="h-4 w-4 text-white" />
                    <span className="text-white text-xs">{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="h-4 w-4 text-white" />
                    <span className="text-white text-xs">{post.comments}</span>
                  </div>
                </div>

                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1 bg-white/20 hover:bg-white/30 text-white text-xs py-1 px-2 rounded-md transition-colors"
                >
                  View on Instagram
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  )
}
