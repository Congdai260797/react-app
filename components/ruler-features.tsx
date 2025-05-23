import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RulerIcon, Smartphone, Save, Share2, BookOpen, Palette } from "lucide-react"

export default function RulerFeatures() {
  const features = [
    {
      icon: RulerIcon,
      title: "Ba loại thước tích hợp",
      description: "Đầy đủ ba loại thước 52.2cm, 42.9cm và 38.8cm cho mọi nhu cầu đo lường",
    },
    {
      icon: Smartphone,
      title: "Thiết kế đáp ứng",
      description: "Sử dụng trên mọi thiết bị từ điện thoại di động đến máy tính để bàn",
    },
    {
      icon: Save,
      title: "Lưu kết quả",
      description: "Lưu trữ các kích thước đã đo để tham khảo sau này",
    },
    {
      icon: Share2,
      title: "Chia sẻ dễ dàng",
      description: "Chia sẻ kết quả đo với người thân, bạn bè hoặc thợ mộc",
    },
    {
      icon: BookOpen,
      title: "Kiến thức phong phú",
      description: "Tìm hiểu về lịch sử và cách sử dụng Thước Lỗ Ban hiệu quả",
    },
    {
      icon: Palette,
      title: "Giao diện thân thiện",
      description: "Thiết kế trực quan với chế độ sáng/tối tùy chỉnh",
    },
  ]

  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold text-center mb-8">Tính năng nổi bật</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <feature.icon className="h-8 w-8 text-primary mb-2" />
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
