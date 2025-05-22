import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Download } from "lucide-react"

export default function QRCodesPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tight mb-4">QR Codes</h1>
        <p className="text-muted-foreground max-w-2xl">
          Download QR codes for your business cards and marketing materials
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>App QR Code</CardTitle>
            <CardDescription>Scan to install our app on Android and iOS devices</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="bg-white p-6 rounded-lg mb-6">
              <Image src="/qr-code.png" alt="App QR Code" width={200} height={200} className="mx-auto" />
            </div>
            <p className="text-sm text-muted-foreground text-center max-w-xs mb-4">
              This QR code will take users to our website where they can install the app on their device
            </p>
          </CardContent>
          <CardFooter>
            <Button className="w-full flex items-center gap-2">
              <Download className="h-4 w-4" /> Download QR Code
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Instagram QR Code</CardTitle>
            <CardDescription>Scan to follow us on Instagram</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="bg-white p-6 rounded-lg mb-6">
              <Image src="/qr-code.png" alt="Instagram QR Code" width={200} height={200} className="mx-auto" />
            </div>
            <p className="text-sm text-muted-foreground text-center max-w-xs mb-4">
              This QR code will take users directly to our Instagram profile @highdefenitionmobiledetailing
            </p>
          </CardContent>
          <CardFooter>
            <Button className="w-full flex items-center gap-2">
              <Download className="h-4 w-4" /> Download QR Code
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-12 p-6 border rounded-lg bg-gray-50 dark:bg-gray-900">
        <h2 className="text-2xl font-bold mb-4">How to Use QR Codes</h2>
        <ul className="space-y-4">
          <li className="flex items-start gap-2">
            <span className="font-bold">1.</span>
            <p>
              <span className="font-medium">Business Cards:</span> Include the App QR code on your business cards so
              clients can easily access your services.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold">2.</span>
            <p>
              <span className="font-medium">Marketing Materials:</span> Add QR codes to flyers, brochures, and other
              promotional materials.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold">3.</span>
            <p>
              <span className="font-medium">Vehicle Signage:</span> Display the QR code on your detailing vehicle for
              easy access to your services.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold">4.</span>
            <p>
              <span className="font-medium">Social Media:</span> Share the QR codes in your social media posts and
              stories to increase app installations.
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}
