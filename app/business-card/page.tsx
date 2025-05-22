import { BusinessCard } from "@/components/business-card"

export default function BusinessCardPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tight mb-4">Business Card</h1>
        <p className="text-muted-foreground max-w-2xl">Download our business card with QR code for easy sharing</p>
      </div>

      <BusinessCard />
    </div>
  )
}
