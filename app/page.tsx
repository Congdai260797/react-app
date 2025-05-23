import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import HeroSection from "@/components/hero-section"
import RulerFeatures from "@/components/ruler-features"
import IntroductionSection from "@/components/introduction-section"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-6">
      <HeroSection />

      <IntroductionSection />

      <section className="my-12">
        <h2 className="text-3xl font-bold text-center mb-8">Các loại thước Lỗ Ban</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <CardTitle>Thước 52.2cm</CardTitle>
              <CardDescription>Dùng để đo không gian mở, không có khung viền</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="relative h-24 w-full">
                <Image src="/placeholder.svg?height=100&width=300" alt="Thước 52.2cm" fill className="object-contain" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button asChild>
                <Link href="/ruler/522">Sử dụng thước</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <CardTitle>Thước 42.9cm</CardTitle>
              <CardDescription>Dùng để đo đồ nội thất và vật dụng</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="relative h-24 w-full">
                <Image src="/placeholder.svg?height=100&width=300" alt="Thước 42.9cm" fill className="object-contain" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button asChild>
                <Link href="/ruler/429">Sử dụng thước</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <CardTitle>Thước 38.8cm</CardTitle>
              <CardDescription>Dùng để đo đồ thờ cúng và vật dụng nội thất</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="relative h-24 w-full">
                <Image src="/placeholder.svg?height=100&width=300" alt="Thước 38.8cm" fill className="object-contain" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button asChild>
                <Link href="/ruler/388">Sử dụng thước</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <RulerFeatures />

      <section className="my-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Bắt đầu sử dụng ngay</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Khám phá ứng dụng Thước Lỗ Ban và tối ưu hóa không gian sống theo nguyên tắc phong thủy truyền thống
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/ruler">Sử dụng thước</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/education">Tìm hiểu thêm</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
