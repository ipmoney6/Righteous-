"use client"

import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, Menu, Download, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo-black.png"
            alt="Righteous Living Inc."
            width={50}
            height={50}
            className="dark:hidden"
          />
          <Image
            src="/images/logo-white.png"
            alt="Righteous Living Inc."
            width={50}
            height={50}
            className="hidden dark:block"
          />
          <span className="text-xl font-bold">Righteous Living</span>
        </Link>

        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:underline">
            Home
          </Link>
          <Link href="/products" className="text-sm font-medium hover:underline">
            Refurbished Products
          </Link>
          <Link href="/detailing" className="text-sm font-medium hover:underline">
            Detailing Services
          </Link>
          <Link href="/social" className="text-sm font-medium hover:underline">
            Social
          </Link>
          <Link href="/about" className="text-sm font-medium hover:underline">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:underline">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/social">
            <Button variant="outline" size="icon" className="hidden md:flex" aria-label="Social Media">
              <Instagram className="h-5 w-5" />
            </Button>
          </Link>

          <Link href="/install">
            <Button variant="outline" size="sm" className="hidden md:flex items-center gap-2">
              <Download className="h-4 w-4" />
              Install App
            </Button>
          </Link>

          <Link href="/cart">
            <Button variant="outline" size="icon" aria-label="Shopping Cart">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </Link>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 mt-8">
                <Link href="/" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:underline">
                  Home
                </Link>
                <Link href="/products" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:underline">
                  Refurbished Products
                </Link>
                <Link
                  href="/detailing"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium hover:underline"
                >
                  Detailing Services
                </Link>
                <Link href="/social" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:underline">
                  Social
                </Link>
                <Link href="/about" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:underline">
                  About
                </Link>
                <Link href="/contact" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:underline">
                  Contact
                </Link>
                <Link href="/install" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:underline">
                  Install App
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
