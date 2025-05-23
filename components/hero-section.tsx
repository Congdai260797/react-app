import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Thước Lỗ Ban <span className="text-primary">Hiện Đại</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Công cụ tính toán kích thước phong thủy theo nguyên tắc truyền thống, giúp bạn tối ưu hóa không gian sống và
            làm việc.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/ruler">Bắt đầu sử dụng</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/education">Tìm hiểu thêm</Link>
            </Button>
          </div>
        </div>
        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
          <Image src="/placeholder.svg?height=400&width=600" alt="Thước Lỗ Ban" fill className="object-cover" />
        </div>
      </div>
    </section>
  )
}
