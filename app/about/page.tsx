import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Giới thiệu về Thước Lỗ Ban</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Ứng dụng Thước Lỗ Ban hiện đại</h2>
            <p>
              Ứng dụng Thước Lỗ Ban là công cụ hiện đại hóa phương pháp đo lường phong thủy truyền thống, giúp người
              dùng dễ dàng áp dụng nguyên tắc Thước Lỗ Ban vào cuộc sống hàng ngày.
            </p>
            <p>
              Với giao diện trực quan và tính năng đa dạng, ứng dụng giúp bạn xác định kích thước cát lợi cho không gian
              sống và làm việc, mang lại sự hài hòa và may mắn theo quan niệm phong thủy truyền thống.
            </p>
            <Button asChild className="mt-2">
              <Link href="/ruler">
                Bắt đầu sử dụng
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="relative h-60 md:h-auto rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="Ứng dụng Thước Lỗ Ban"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Tính năng nổi bật</CardTitle>
            <CardDescription>Khám phá những tính năng độc đáo của ứng dụng Thước Lỗ Ban</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Ba loại thước tích hợp</h3>
                <p className="text-muted-foreground">
                  Ứng dụng tích hợp đầy đủ ba loại thước Lỗ Ban truyền thống: 52.2cm, 42.9cm và 38.8cm, phù hợp với mọi
                  nhu cầu đo lường.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Tính toán chính xác</h3>
                <p className="text-muted-foreground">
                  Thuật toán tính toán chính xác giúp xác định cung và đề xuất kích thước cát lợi một cách nhanh chóng
                  và đáng tin cậy.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Trực quan hóa kết quả</h3>
                <p className="text-muted-foreground">
                  Hiển thị kết quả trực quan với màu sắc và biểu đồ, giúp người dùng dễ dàng hiểu và áp dụng nguyên tắc
                  Thước Lỗ Ban.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Lưu trữ và chia sẻ</h3>
                <p className="text-muted-foreground">
                  Lưu trữ kết quả đo lường và chia sẻ với người thân, bạn bè hoặc thợ mộc để áp dụng vào thực tế.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Kiến thức phong phú</h3>
                <p className="text-muted-foreground">
                  Cung cấp kiến thức đầy đủ về lịch sử, ý nghĩa và cách sử dụng Thước Lỗ Ban trong phong thủy truyền
                  thống.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Giao diện thân thiện</h3>
                <p className="text-muted-foreground">
                  Giao diện người dùng trực quan, dễ sử dụng với chế độ sáng/tối và hỗ trợ đa ngôn ngữ.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6 mb-12">
          <h2 className="text-2xl font-bold text-center">Đội ngũ phát triển</h2>
          <p className="text-center max-w-2xl mx-auto">
            Ứng dụng Thước Lỗ Ban được phát triển bởi đội ngũ chuyên gia về phong thủy và công nghệ, với mục tiêu kết
            hợp kiến thức truyền thống với công nghệ hiện đại.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto relative w-24 h-24 rounded-full overflow-hidden mb-2">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Chuyên gia phong thủy"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardTitle>TS. Nguyễn Văn A</CardTitle>
                <CardDescription>Chuyên gia phong thủy</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">
                  Với hơn 20 năm kinh nghiệm nghiên cứu và ứng dụng phong thủy, TS. Nguyễn Văn A đóng góp kiến thức
                  chuyên môn về Thước Lỗ Ban và các nguyên tắc phong thủy.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto relative w-24 h-24 rounded-full overflow-hidden mb-2">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Kỹ sư phần mềm"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardTitle>KS. Trần Thị B</CardTitle>
                <CardDescription>Kỹ sư phần mềm</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">
                  Chuyên gia công nghệ với nhiều năm kinh nghiệm phát triển ứng dụng web và di động, KS. Trần Thị B chịu
                  trách nhiệm phát triển và tối ưu hóa ứng dụng.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto relative w-24 h-24 rounded-full overflow-hidden mb-2">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Nhà thiết kế UX/UI"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardTitle>ThS. Lê Văn C</CardTitle>
                <CardDescription>Nhà thiết kế UX/UI</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">
                  Với kinh nghiệm thiết kế giao diện người dùng và trải nghiệm người dùng, ThS. Lê Văn C tạo ra giao
                  diện trực quan và thân thiện cho ứng dụng.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Liên hệ với chúng tôi</CardTitle>
            <CardDescription>
              Nếu bạn có bất kỳ câu hỏi hoặc góp ý nào, đừng ngần ngại liên hệ với chúng tôi
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Thông tin liên hệ</h3>
                <p className="text-muted-foreground">Email: info@thuocloban.vn</p>
                <p className="text-muted-foreground">Điện thoại: (84) 123 456 789</p>
                <p className="text-muted-foreground">Địa chỉ: 123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Theo dõi chúng tôi</h3>
                <p className="text-muted-foreground">Facebook: facebook.com/thuocloban</p>
                <p className="text-muted-foreground">Instagram: instagram.com/thuocloban</p>
                <p className="text-muted-foreground">YouTube: youtube.com/thuocloban</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
