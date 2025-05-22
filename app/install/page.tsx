import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, QrCode } from "lucide-react"

export default function InstallPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tight mb-4">Install Our App</h1>
        <p className="text-muted-foreground max-w-2xl">
          Get quick access to our products and services by installing our app on your device
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card className="flex flex-col h-full">
          <CardHeader className="text-center">
            <CardTitle>Scan QR Code</CardTitle>
            <CardDescription>Scan this QR code with your phone camera</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow flex flex-col items-center justify-center">
            <div className="bg-white p-4 rounded-lg mb-6">
              <Image
                src="/qr-code.png"
                alt="QR Code for Righteous Living App"
                width={200}
                height={200}
                className="mx-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground text-center max-w-xs">
              This QR code will take you to our website where you can install the app
            </p>
          </CardContent>
        </Card>

        <Card className="flex flex-col h-full">
          <CardHeader className="text-center">
            <CardTitle>Business Card</CardTitle>
            <CardDescription>Download our business card with QR code</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow flex flex-col items-center justify-center">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6 w-full max-w-xs aspect-[1.75/1] relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <QrCode className="h-12 w-12 text-gray-400" />
              </div>
            </div>
            <p className="text-sm text-muted-foreground text-center max-w-xs mb-6">
              Our business card includes our contact information, QR code, and Instagram handle
            </p>
            <Button className="w-full max-w-xs">
              <Download className="mr-2 h-4 w-4" /> Download Business Card PDF
            </Button>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="ios" className="w-full max-w-3xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="ios">iOS Installation</TabsTrigger>
          <TabsTrigger value="android">Android Installation</TabsTrigger>
        </TabsList>

        <TabsContent value="ios" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Install on iPhone or iPad</CardTitle>
              <CardDescription>Follow these steps to add our app to your home screen</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <span className="font-bold text-primary">1</span>
                </div>
                <div>
                  <h3 className="font-medium">Open Safari</h3>
                  <p className="text-sm text-muted-foreground">
                    Our app must be installed from the Safari browser on iOS
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <span className="font-bold text-primary">2</span>
                </div>
                <div>
                  <h3 className="font-medium">Tap the Share button</h3>
                  <p className="text-sm text-muted-foreground">
                    Look for the share icon (square with an arrow) at the bottom of the screen
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <span className="font-bold text-primary">3</span>
                </div>
                <div>
                  <h3 className="font-medium">Select "Add to Home Screen"</h3>
                  <p className="text-sm text-muted-foreground">
                    Scroll down in the share menu if needed to find this option
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <span className="font-bold text-primary">4</span>
                </div>
                <div>
                  <h3 className="font-medium">Tap "Add"</h3>
                  <p className="text-sm text-muted-foreground">
                    The app will now be installed on your home screen for easy access
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="android" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Install on Android</CardTitle>
              <CardDescription>Follow these steps to add our app to your home screen</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <span className="font-bold text-primary">1</span>
                </div>
                <div>
                  <h3 className="font-medium">Open Chrome</h3>
                  <p className="text-sm text-muted-foreground">
                    Our app works best when installed from the Chrome browser
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <span className="font-bold text-primary">2</span>
                </div>
                <div>
                  <h3 className="font-medium">Tap the Menu button</h3>
                  <p className="text-sm text-muted-foreground">
                    Look for the three dots in the top-right corner of the browser
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <span className="font-bold text-primary">3</span>
                </div>
                <div>
                  <h3 className="font-medium">Select "Install App" or "Add to Home Screen"</h3>
                  <p className="text-sm text-muted-foreground">The exact wording may vary depending on your device</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <span className="font-bold text-primary">4</span>
                </div>
                <div>
                  <h3 className="font-medium">Tap "Install"</h3>
                  <p className="text-sm text-muted-foreground">
                    The app will now be installed on your home screen for easy access
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
