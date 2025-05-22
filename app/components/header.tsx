import Image from "next/image"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between py-4">
        <Link href="/">
          <Image src="/store-logo.png" alt="Store Logo" width={120} height={36} priority />
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:underline">
            Home
          </Link>
          <Link href="/products" className="text-sm font-medium hover:underline">
            Products
          </Link>
          <Link href="/categories" className="text-sm font-medium hover:underline">
            Categories
          </Link>
          <Link href="/about" className="text-sm font-medium hover:underline">
            About
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon">
            <ShoppingCart className="h-4 w-4" />
            <span className="sr-only">Shopping Cart</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
