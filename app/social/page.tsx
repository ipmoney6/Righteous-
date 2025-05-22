import { SocialLinks } from "@/components/social-links"
import { InstagramHighlights } from "@/components/instagram-highlights"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Instagram } from "lucide-react"
import Link from "next/link"

export default function SocialPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tight mb-4">Connect With Us</h1>
        <p className="text-muted-foreground max-w-2xl">
          Follow our Instagram accounts to stay updated with our latest products, services, and promotions
        </p>
      </div>

      <div className="mb-16">
        <SocialLinks />
      </div>

      <div className="mb-16">
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Instagram Highlights</h2>
          <p className="text-muted-foreground max-w-2xl mb-8">
            Check out our story highlights to see more of our products and services
          </p>
        </div>
        <Card>
          <CardHeader className="pb-0">
            <CardTitle className="flex items-center gap-2">
              <Instagram className="h-5 w-5" />
              Story Highlights
            </CardTitle>
            <CardDescription>Tap on a highlight to view stories</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <InstagramHighlights />
          </CardContent>
        </Card>
      </div>

      <div className="mt-16 max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Why Follow Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
            <h3 className="font-bold mb-2">Exclusive Deals</h3>
            <p className="text-sm text-muted-foreground">
              Be the first to know about special promotions and discounts on our products and services
            </p>
          </div>
          <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
            <h3 className="font-bold mb-2">Behind the Scenes</h3>
            <p className="text-sm text-muted-foreground">
              Get a look at our detailing process and product refurbishment techniques
            </p>
          </div>
          <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
            <h3 className="font-bold mb-2">Community</h3>
            <p className="text-sm text-muted-foreground">
              Join our growing community of satisfied customers and enthusiasts
            </p>
          </div>
        </div>

        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="/social/instagram" className="flex items-center gap-2">
              <Instagram className="h-5 w-5" />
              View Instagram Feed
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
