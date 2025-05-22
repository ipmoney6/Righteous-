"use client"

import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download, Instagram, Phone, Mail } from "lucide-react"

export function BusinessCard() {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleDownload = () => {
    // In a real implementation, this would generate a PDF
    // For now, we'll just alert the user
    alert("In a production environment, this would download a PDF of the business card.")
  }

  return (
    <div className="space-y-6">
      <Card
        ref={cardRef}
        className="w-full max-w-md mx-auto p-6 bg-white text-black relative overflow-hidden"
        style={{ aspectRatio: "1.75/1" }}
      >
        <div className="flex">
          <div className="w-2/3 pr-4">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/images/logo-black.png" alt="Righteous Living Inc." width={40} height={40} />
              <div>
                <h2 className="font-bold text-lg">Righteous Living Inc.</h2>
                <p className="text-xs text-gray-600">Refurbished Products & Detailing Services</p>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-3 w-3" />
                <span>(123) 456-7890</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3 w-3" />
                <span>info@righteouslivinginc.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="h-3 w-3" />
                <span>@highdefenitionmobiledetailing</span>
              </div>
            </div>
          </div>

          <div className="w-1/3 flex flex-col items-center justify-center">
            <div className="bg-gray-100 p-2 rounded-md mb-2">
              <div className="w-20 h-20 bg-gray-200 flex items-center justify-center">
                <span className="text-xs text-gray-500">QR Code</span>
              </div>
            </div>
            <p className="text-xs text-center">Scan to download our app</p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-black"></div>
      </Card>

      <Button onClick={handleDownload} className="w-full max-w-md mx-auto flex items-center gap-2">
        <Download className="h-4 w-4" /> Download Business Card PDF
      </Button>
    </div>
  )
}
