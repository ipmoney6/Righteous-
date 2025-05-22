import { InstagramGrid } from "@/components/instagram-grid"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Instagram } from "lucide-react"

export default function InstagramPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tight mb-4">Instagram Feed</h1>
        <p className="text-muted-foreground max-w-2xl">Check out our latest posts from all our Instagram accounts</p>
      </div>

      <Tabs defaultValue="all" className="w-full mb-8">
        <TabsList className="grid w-full grid-cols-3 md:grid-cols-4">
          <TabsTrigger value="all">All Accounts</TabsTrigger>
          <TabsTrigger value="detailing">@highdefinitionmobiledetailing</TabsTrigger>
          <TabsTrigger value="righteous">@righteouslivingincc</TabsTrigger>
          <TabsTrigger value="personal">@ipmoney6</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <InstagramGrid />
        </TabsContent>

        <TabsContent value="detailing" className="mt-6">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold mb-2">High Definition Mobile Detailing</h2>
            <p className="text-muted-foreground mb-4">Professional mobile detailing services</p>
            <Button asChild variant="outline" size="sm" className="mb-8">
              <a
                href="https://www.instagram.com/highdefinitionmobiledetailing/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Instagram className="h-4 w-4" />
                Follow @highdefinitionmobiledetailing
              </a>
            </Button>
          </div>
          <InstagramGrid />
        </TabsContent>

        <TabsContent value="righteous" className="mt-6">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold mb-2">Righteous Living Inc.</h2>
            <p className="text-muted-foreground mb-4">Quality refurbished products</p>
            <Button asChild variant="outline" size="sm" className="mb-8">
              <a
                href="https://www.instagram.com/righteouslivingincc/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Instagram className="h-4 w-4" />
                Follow @righteouslivingincc
              </a>
            </Button>
          </div>
          <InstagramGrid />
        </TabsContent>

        <TabsContent value="personal" className="mt-6">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold mb-2">Personal Account</h2>
            <p className="text-muted-foreground mb-4">Personal updates and content</p>
            <Button asChild variant="outline" size="sm" className="mb-8">
              <a
                href="https://www.instagram.com/ipmoney6/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Instagram className="h-4 w-4" />
                Follow @ipmoney6
              </a>
            </Button>
          </div>
          <InstagramGrid />
        </TabsContent>
      </Tabs>
    </div>
  )
}
