import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Car, Headphones, ShoppingBag, Shirt, Download, QrCode } from "lucide-react"
import { SocialLinks } from "@/components/social-links"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-black text-white py-16 md:py-24">
        <div className="container flex flex-col items-center text-center">
          <Image src="/images/logo-white.png" alt="Righteous Living Inc." width={120} height={120} className="mb-6" />
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Righteous Living Inc.</h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8">
            Premium refurbished electronics and professional mobile detailing services
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200">
              <Link href="/products">Shop Refurbished Products</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/detailing">View Detailing Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* App Install Banner */}
      <section className="py-8 bg-gray-100 dark:bg-gray-900">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="bg-black p-3 rounded-full">
                <QrCode className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="font-bold">Get Our Mobile App</h3>
                <p className="text-sm text-muted-foreground">Install our app on your phone for easy access</p>
              </div>
            </div>
            <Button asChild>
              <Link href="/install" className="flex items-center gap-2">
                <Download className="h-4 w-4" /> Install App
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>

          <Tabs defaultValue="electronics" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="electronics">Electronics</TabsTrigger>
              <TabsTrigger value="apparel">Apparel</TabsTrigger>
              <TabsTrigger value="footwear">Footwear</TabsTrigger>
              <TabsTrigger value="detailing">Detailing</TabsTrigger>
            </TabsList>

            <TabsContent value="electronics">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle>AirPods Pro 2</CardTitle>
                      <Badge>Refurbished</Badge>
                    </div>
                    <CardDescription>Premium wireless earbuds with noise cancellation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-square relative bg-gray-100 rounded-md mb-4">
                      <div className="flex items-center justify-center h-full">
                        <Headphones className="h-24 w-24 text-gray-400" />
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-2xl font-bold">$179.99</p>
                      <p className="text-sm text-muted-foreground line-through">$249.99</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">View Details</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle>AirPods Max</CardTitle>
                      <Badge>Refurbished</Badge>
                    </div>
                    <CardDescription>High-fidelity over-ear headphones</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-square relative bg-gray-100 rounded-md mb-4">
                      <div className="flex items-center justify-center h-full">
                        <Headphones className="h-24 w-24 text-gray-400" />
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-2xl font-bold">$399.99</p>
                      <p className="text-sm text-muted-foreground line-through">$549.99</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">View Details</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="apparel">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle>Hellstar Shirt</CardTitle>
                      <Badge>Refurbished</Badge>
                    </div>
                    <CardDescription>Premium quality refurbished shirt</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-square relative bg-gray-100 rounded-md mb-4">
                      <div className="flex items-center justify-center h-full">
                        <Shirt className="h-24 w-24 text-gray-400" />
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-2xl font-bold">$39.99</p>
                      <p className="text-sm text-muted-foreground line-through">$69.99</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">View Details</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="footwear">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle>Nike Air Max</CardTitle>
                      <Badge>Refurbished</Badge>
                    </div>
                    <CardDescription>Refurbished premium athletic shoes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-square relative bg-gray-100 rounded-md mb-4">
                      <div className="flex items-center justify-center h-full">
                        <ShoppingBag className="h-24 w-24 text-gray-400" />
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-2xl font-bold">$89.99</p>
                      <p className="text-sm text-muted-foreground line-through">$129.99</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">View Details</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="detailing">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Basic Wash</CardTitle>
                    <CardDescription>Professional exterior car wash</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-square relative bg-gray-100 rounded-md mb-4">
                      <div className="flex items-center justify-center h-full">
                        <Car className="h-24 w-24 text-gray-400" />
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-2xl font-bold">$30</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Book Service</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Interior & Exterior</CardTitle>
                    <CardDescription>Complete inside and out cleaning with ceramic treatment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-square relative bg-gray-100 rounded-md mb-4">
                      <div className="flex items-center justify-center h-full">
                        <Car className="h-24 w-24 text-gray-400" />
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-2xl font-bold">$50</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Book Service</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>VIP Package</CardTitle>
                    <CardDescription>Premium wax and ceramic treatment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-square relative bg-gray-100 rounded-md mb-4">
                      <div className="flex items-center justify-center h-full">
                        <Car className="h-24 w-24 text-gray-400" />
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-2xl font-bold">$100</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Book Service</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Mobile Detailing Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Basic Wash</CardTitle>
                <CardDescription>Professional exterior cleaning</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Exterior wash
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Tire cleaning
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Window cleaning
                  </li>
                </ul>
                <p className="text-3xl font-bold">$30</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Book Now</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Interior & Exterior</CardTitle>
                <CardDescription>Complete inside and out cleaning</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Basic wash included
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Interior vacuum
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Dashboard cleaning
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Ceramic treatment
                  </li>
                </ul>
                <p className="text-3xl font-bold">$50</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Book Now</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>VIP Package</CardTitle>
                <CardDescription>Premium wax and ceramic treatment</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Interior & exterior included
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Premium wax
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Full ceramic coating
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Leather conditioning
                  </li>
                </ul>
                <p className="text-3xl font-bold">$100</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Book Now</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Truck Detailing</CardTitle>
                <CardDescription>Specialized service for trucks</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Truck-sized cleaning
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Bed cleaning
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Interior & exterior
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Ceramic treatment
                  </li>
                </ul>
                <p className="text-3xl font-bold">$100</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Book Now</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4">Follow Us on Social Media</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Connect with us on Instagram to see our latest work, products, and promotions
          </p>

          <SocialLinks />

          <div className="mt-8 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/social" className="flex items-center gap-2">
                View All Social Profiles
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
