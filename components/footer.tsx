import Link from "next/link"
import Image from "next/image"
import { Instagram, Download } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Image
                src="/images/logo-black.png"
                alt="Righteous Living Inc."
                width={40}
                height={40}
                className="dark:hidden"
              />
              <Image
                src="/images/logo-white.png"
                alt="Righteous Living Inc."
                width={40}
                height={40}
                className="hidden dark:block"
              />
              <span className="text-lg font-bold">Righteous Living Inc.</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Quality refurbished electronics and professional mobile detailing services.
            </p>
            <Link href="/install" className="text-sm text-primary flex items-center gap-1 mt-2 hover:underline">
              <Download className="h-3 w-3" /> Install our app
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium">Products</h3>
              <Link href="/products/airpods" className="text-sm text-muted-foreground hover:underline">
                AirPods Pro 2
              </Link>
              <Link href="/products/airpods-max" className="text-sm text-muted-foreground hover:underline">
                AirPods Max
              </Link>
              <Link href="/products/hellstar" className="text-sm text-muted-foreground hover:underline">
                Hellstar Shirts
              </Link>
              <Link href="/products/nike" className="text-sm text-muted-foreground hover:underline">
                Nike Products
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium">Services</h3>
              <Link href="/detailing/basic" className="text-sm text-muted-foreground hover:underline">
                Basic Wash
              </Link>
              <Link href="/detailing/interior-exterior" className="text-sm text-muted-foreground hover:underline">
                Interior & Exterior
              </Link>
              <Link href="/detailing/vip" className="text-sm text-muted-foreground hover:underline">
                VIP Wax & Ceramic
              </Link>
              <Link href="/detailing/truck" className="text-sm text-muted-foreground hover:underline">
                Truck Detailing
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">Connect With Us</h3>
            <a
              href="https://www.instagram.com/highdefenitionmobiledetailing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:underline"
            >
              <Instagram className="h-4 w-4" />
              @highdefenitionmobiledetailing
            </a>
            <p className="text-sm text-muted-foreground mt-2">Contact us for quotes and appointments.</p>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Righteous Living Inc. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
