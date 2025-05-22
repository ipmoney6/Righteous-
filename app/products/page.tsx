import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Headphones, Shirt, ShoppingBag } from "lucide-react"

export default function ProductsPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Refurbished Products</h1>
          <p className="text-muted-foreground">Browse our selection of quality refurbished electronics and apparel</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* AirPods Pro 2 */}
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
            <Button className="w-full">Add to Cart</Button>
          </CardFooter>
        </Card>

        {/* AirPods Max */}
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
            <Button className="w-full">Add to Cart</Button>
          </CardFooter>
        </Card>

        {/* Hellstar Shirt */}
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
            <Button className="w-full">Add to Cart</Button>
          </CardFooter>
        </Card>

        {/* Nike Air Max */}
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
            <Button className="w-full">Add to Cart</Button>
          </CardFooter>
        </Card>

        {/* Nike Running Shoes */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle>Nike Running Shoes</CardTitle>
              <Badge>Refurbished</Badge>
            </div>
            <CardDescription>Refurbished running shoes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-square relative bg-gray-100 rounded-md mb-4">
              <div className="flex items-center justify-center h-full">
                <ShoppingBag className="h-24 w-24 text-gray-400" />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-2xl font-bold">$79.99</p>
              <p className="text-sm text-muted-foreground line-through">$119.99</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Add to Cart</Button>
          </CardFooter>
        </Card>

        {/* Hellstar Polo */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle>Hellstar Polo</CardTitle>
              <Badge>Refurbished</Badge>
            </div>
            <CardDescription>Premium refurbished polo shirt</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-square relative bg-gray-100 rounded-md mb-4">
              <div className="flex items-center justify-center h-full">
                <Shirt className="h-24 w-24 text-gray-400" />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-2xl font-bold">$34.99</p>
              <p className="text-sm text-muted-foreground line-through">$59.99</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Add to Cart</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
