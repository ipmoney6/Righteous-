import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">About Us</h1>
          <p className="text-muted-foreground">Learn more about Righteous Living Inc. and our mission</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <Image
            src="/images/logo-black.png"
            alt="Righteous Living Inc."
            width={300}
            height={300}
            className="mx-auto dark:hidden"
          />
          <Image
            src="/images/logo-white.png"
            alt="Righteous Living Inc."
            width={300}
            height={300}
            className="mx-auto hidden dark:block"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Our Story</h2>
          <p>
            Righteous Living Inc. was founded with a vision to provide high-quality refurbished products and exceptional
            detailing services to our community. We believe in giving products a second life through our refurbishment
            process, reducing waste while offering premium items at affordable prices.
          </p>
          <p>
            Our mobile detailing service, High Definition Mobile Detailing, brings professional car care directly to
            you. We take pride in our attention to detail and commitment to customer satisfaction.
          </p>
          <p>
            At Righteous Living Inc., we're committed to excellence in everything we do, from our product selection to
            our service delivery.
          </p>
        </div>
      </div>

      <div className="space-y-12 mb-16">
        <h2 className="text-2xl font-bold text-center">What We Offer</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Refurbished Products</h3>
            <ul className="space-y-2 mb-6">
              <li>• Premium AirPods Pro 2</li>
              <li>• High-quality AirPods Max</li>
              <li>• Hellstar apparel</li>
              <li>• Nike footwear and apparel</li>
              <li>• And more...</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              All our refurbished products undergo thorough inspection and restoration to ensure they meet our quality
              standards.
            </p>
            <Button asChild>
              <Link href="/products">Browse Products</Link>
            </Button>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Mobile Detailing Services</h3>
            <ul className="space-y-2 mb-6">
              <li>• Basic Wash ($30)</li>
              <li>• Interior & Exterior Detailing ($50)</li>
              <li>• VIP Package with Wax & Ceramic ($100)</li>
              <li>• Truck Detailing ($100)</li>
              <li>• Custom packages available</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              Our mobile detailing service comes to your location, providing convenience and professional results.
            </p>
            <Button asChild>
              <Link href="/detailing">View Services</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="text-center space-y-6">
        <h2 className="text-2xl font-bold">Connect With Us</h2>
        <p className="max-w-2xl mx-auto">
          Follow us on Instagram to see our latest work, special offers, and more. We're always happy to answer any
          questions about our products or services.
        </p>
        <Button asChild size="lg">
          <a href="https://www.instagram.com/highdefenitionmobiledetailing" target="_blank" rel="noopener noreferrer">
            Follow @highdefenitionmobiledetailing
          </a>
        </Button>
      </div>
    </div>
  )
}
