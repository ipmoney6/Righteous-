"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Instagram, ExternalLink, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

type SocialAccount = {
  username: string
  displayName: string
  description: string
  verified?: boolean
  image: string
  link: string
}

export function SocialLinks() {
  const [activeAccount, setActiveAccount] = useState<number>(0)

  const accounts: SocialAccount[] = [
    {
      username: "highdefinitionmobiledetailing",
      displayName: "High Definition Mobile Detailing",
      description: "Professional mobile detailing services for cars, trucks, and more.",
      verified: true,
      image: "/images/social/hd-mobile-detailing.png",
      link: "https://www.instagram.com/highdefinitionmobiledetailing/",
    },
    {
      username: "ipmoney6",
      displayName: "IP Money",
      description: "Personal account",
      image: "/images/social/ipmoney6.png",
      link: "https://www.instagram.com/ipmoney6/",
    },
    {
      username: "righteouslivingincc",
      displayName: "Righteous Living Inc.",
      description: "Quality refurbished products and professional services.",
      image: "/images/social/righteous-living.png",
      link: "https://www.instagram.com/righteouslivingincc/",
    },
  ]

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {accounts.map((account, index) => (
          <button
            key={account.username}
            onClick={() => setActiveAccount(index)}
            className={cn(
              "relative overflow-hidden rounded-xl p-1 transition-all duration-300",
              activeAccount === index
                ? "bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 scale-105 shadow-lg"
                : "bg-gray-100 dark:bg-gray-800 hover:scale-105",
            )}
          >
            <div className="bg-white dark:bg-gray-900 rounded-lg p-4 h-full">
              <div className="flex items-center gap-3 mb-2">
                <div className="relative h-10 w-10 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Instagram className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
                <div className="flex-1 text-left">
                  <p className="font-medium truncate text-sm">@{account.username}</p>
                  {account.verified && (
                    <span className="inline-flex items-center">
                      <CheckCircle className="h-3 w-3 text-blue-500 mr-1" />
                      <span className="text-xs text-blue-500">Verified</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      <motion.div
        key={activeAccount}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 p-1"
      >
        <div className="bg-white dark:bg-gray-900 rounded-lg p-6">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="relative h-24 w-24 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                <Instagram className="h-10 w-10 text-gray-400" />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                <h3 className="text-xl font-bold">{accounts[activeAccount].displayName}</h3>
                {accounts[activeAccount].verified && <CheckCircle className="h-5 w-5 text-blue-500" />}
              </div>
              <p className="text-sm text-muted-foreground mb-2">@{accounts[activeAccount].username}</p>
              <p className="mb-4">{accounts[activeAccount].description}</p>

              <a
                href={accounts[activeAccount].link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all"
              >
                <Instagram className="h-4 w-4" />
                Follow on Instagram
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
