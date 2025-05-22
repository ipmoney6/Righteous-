import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Car, CheckCircle } from "lucide-react"

export default function DetailingPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Mobile Detailing Services</h1>
          <p className="text-muted-foreground">
            Professional mobile detailing services by High Definition Mobile Detailing
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Basic Wash */}
        <Card className="flex flex-col h-full">
          <CardHeader>
            <CardTitle>Basic Wash</CardTitle>
            <CardDescription>Professional exterior cleaning</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="aspect-square relative bg-gray-100 rounded-md mb-4">
              <div className="flex items-center justify-center h-full">
                <Car className="h-24 w-24 text-gray-400" />
              </div>
            </div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" /> Exterior wash
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" /> Tire cleaning
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" /> Window cleaning
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" /> Basic wipe down
              </li>
            </ul>
            <p className="text-3xl font-bold">$30</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Book Now</Button>
          </CardFooter>
        </Card>

        {/* Interior & Exterior */}
        <Card className="flex flex-col h-full">
          <CardHeader>
            <CardTitle>Interior & Exterior</CardTitle>
            <CardDescription>Complete inside and out cleaning</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="aspect-square relative bg-gray-100 rounded-md mb-4">
              <div className="flex items-center justify-center h-full">
                <Car className="h-24 w-24 text-gray-400" />
              </div>
            </div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" /> Basic wash included
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" /> Interior vacuum
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" /> Dashboard cleaning
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" /> Ceramic treatment
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" /> Door jambs
              </li>
            </ul>
            <p className="text-3xl font-bold">$50</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Book Now</Button>
          </CardFooter>
        </Card>

        {/* VIP Package */}
        <Card className="flex flex-col h-full">
          <CardHeader>
            <CardTitle>VIP Package</CardTitle>
            <CardDescription>Premium wax and ceramic treatment</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="aspect-square relative bg-gray-100 rounded-md mb-4">
              <div className="flex items-center justify-center h-full">
                <Car className="h-24 w-24 text-gray-400" />
              </div>
            </div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" /> Interior & exterior included
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" /> Premium wax
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" /> Full ceramic coating
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" /> Leather conditioning
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" /> Trim restoration
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" /> Premium interior detailing
              </li>
            </ul>
            <p className="text-3xl font-bold">$100</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Book Now</Button>
          </CardFooter>
        </Card>

        {/* Truck Detailing */}
        <Card className="flex flex-col h-full">
          <CardHeader>
            <CardTitle>Truck Detailing</CardTitle>
            <CardDescription>Specialized service for trucks</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="aspect-square relative bg-gray-100 rounded-md mb-4">
              <div className="flex items-center justify-center h-full">
                <Car className="h-24 w-24 text-gray-400" />
              </div>
            </div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" /> Truck-sized cleaning
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" /> Bed cleaning
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" /> Interior & exterior
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" /> Ceramic treatment
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" /> Wheel wells
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" /> Undercarriage rinse
              </li>
            </ul>
            <p className="text-3xl font-bold">$100</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Book Now</Button>
          </CardFooter>
        </Card>
      </div>

      {/* Booking Information */}
      <div className="mt-12 p-6 border rounded-lg bg-gray-50 dark:bg-gray-900">
        <h2 className="text-2xl font-bold mb-4">How to Book</h2>
        <p className="mb-4">
          Contact us through Instagram or by phone to schedule your detailing appointment. We offer mobile services and
          will come to your location.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg">
            <a
              href="https://www.instagram.com/highdefenitionmobiledetailing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Contact on Instagram
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="tel:+1234567890" className="flex items-center gap-2">
              Call for Booking
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
