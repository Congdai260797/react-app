import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function EducationPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Kiến thức về Thước Lỗ Ban</h1>

        <Tabs defaultValue="history" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="history">Lịch sử</TabsTrigger>
            <TabsTrigger value="usage">Cách sử dụng</TabsTrigger>
            <TabsTrigger value="faq">Câu hỏi thường gặp</TabsTrigger>
          </TabsList>

          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Lịch sử Thước Lỗ Ban</CardTitle>
                <CardDescription>Nguồn gốc và ý nghĩa của Thước Lỗ Ban trong văn hóa phương Đông</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative h-60 w-full rounded-lg overflow-hidden mb-6">
                  <Image
                    src="/placeholder.svg?height=300&width=800"
                    alt="Lỗ Ban - Bậc thầy kiến trúc cổ đại"
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="text-xl font-medium">Nguồn gốc</h3>
                <p>
                  Thước Lỗ Ban được đặt theo tên của Lỗ Ban (鲁班) - một bậc thầy kiến trúc và thợ mộc nổi tiếng thời
                  Xuân Thu Chiến Quốc của Trung Quốc (khoảng thế kỷ thứ 5 trước Công nguyên). Ông được xem là người sáng
                  tạo ra nhiều công cụ và kỹ thuật xây dựng, trong đó có thước đo mang tên ông.
                </p>

                <h3 className="text-xl font-medium">Ý nghĩa văn hóa</h3>
                <p>
                  Thước Lỗ Ban không chỉ là công cụ đo lường thông thường mà còn mang ý nghĩa văn hóa và phong thủy sâu
                  sắc. Trong văn hóa Trung Hoa và các nước chịu ảnh hưởng như Việt Nam, thước Lỗ Ban được xem là công cụ
                  quan trọng để xác định kích thước cát lợi cho các công trình xây dựng, đồ nội thất và vật dụng trong
                  nhà.
                </p>

                <h3 className="text-xl font-medium">Ba loại thước</h3>
                <p>Theo truyền thống, có ba loại thước Lỗ Ban chính được sử dụng cho các mục đích khác nhau:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Thước 52.2cm:</strong> Dùng để đo không gian mở, không có khung viền như chiều cao trần nhà,
                    chiều rộng phòng, kích thước cửa ra vào, cửa sổ.
                  </li>
                  <li>
                    <strong>Thước 42.9cm:</strong> Dùng để đo đồ nội thất như bàn, ghế, tủ, giường, kệ sách và các vật
                    dụng trong nhà.
                  </li>
                  <li>
                    <strong>Thước 38.8cm:</strong> Dùng để đo đồ thờ cúng như bàn thờ, tượng, bát hương và các vật dụng
                    liên quan đến tâm linh.
                  </li>
                </ul>

                <h3 className="text-xl font-medium">Tám cung</h3>
                <p>Mỗi thước Lỗ Ban được chia thành 8 cung, mỗi cung tượng trưng cho một yếu tố phong thủy:</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                  <div className="p-3 border rounded-lg bg-green-50 dark:bg-green-950">
                    <p className="font-medium text-green-700 dark:text-green-400">Tài (Cát)</p>
                    <p className="text-sm text-muted-foreground">Tài lộc, thịnh vượng</p>
                  </div>
                  <div className="p-3 border rounded-lg bg-red-50 dark:bg-red-950">
                    <p className="font-medium text-red-700 dark:text-red-400">Bệnh (Hung)</p>
                    <p className="text-sm text-muted-foreground">Bệnh tật, sức khỏe kém</p>
                  </div>
                  <div className="p-3 border rounded-lg bg-red-50 dark:bg-red-950">
                    <p className="font-medium text-red-700 dark:text-red-400">Ly (Hung)</p>
                    <p className="text-sm text-muted-foreground">Chia ly, xung đột</p>
                  </div>
                  <div className="p-3 border rounded-lg bg-green-50 dark:bg-green-950">
                    <p className="font-medium text-green-700 dark:text-green-400">Nghĩa (Cát)</p>
                    <p className="text-sm text-muted-foreground">Chính nghĩa, đạo đức</p>
                  </div>
                  <div className="p-3 border rounded-lg bg-green-50 dark:bg-green-950">
                    <p className="font-medium text-green-700 dark:text-green-400">Quan (Cát)</p>
                    <p className="text-sm text-muted-foreground">Quan lộc, sự nghiệp</p>
                  </div>
                  <div className="p-3 border rounded-lg bg-red-50 dark:bg-red-950">
                    <p className="font-medium text-red-700 dark:text-red-400">Kiếp (Hung)</p>
                    <p className="text-sm text-muted-foreground">Kiếp số, vận hạn</p>
                  </div>
                  <div className="p-3 border rounded-lg bg-red-50 dark:bg-red-950">
                    <p className="font-medium text-red-700 dark:text-red-400">Hại (Hung)</p>
                    <p className="text-sm text-muted-foreground">Tổn hại, nguy hiểm</p>
                  </div>
                  <div className="p-3 border rounded-lg bg-green-50 dark:bg-green-950">
                    <p className="font-medium text-green-700 dark:text-green-400">Bản (Cát)</p>
                    <p className="text-sm text-muted-foreground">Gốc rễ, nền tảng</p>
                  </div>
                </div>

                <div className="flex justify-center mt-6">
                  <Button asChild>
                    <Link href="/ruler">
                      Sử dụng thước ngay
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="usage">
            <Card>
              <CardHeader>
                <CardTitle>Cách sử dụng Thước Lỗ Ban</CardTitle>
                <CardDescription>Hướng dẫn chi tiết cách đo lường và áp dụng nguyên tắc Thước Lỗ Ban</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative h-60 rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Cách sử dụng Thước Lỗ Ban"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium">Nguyên tắc cơ bản</h3>
                    <p>
                      Khi sử dụng Thước Lỗ Ban, mục tiêu chính là xác định xem kích thước của vật thể rơi vào cung nào
                      trên thước. Các cung Tài, Nghĩa, Quan và Bản được xem là cát lợi, trong khi các cung Bệnh, Ly,
                      Kiếp và Hại được xem là hung cung.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-medium">Các bước đo lường</h3>
                <ol className="list-decimal pl-6 space-y-3">
                  <li>
                    <strong>Chọn loại thước phù hợp:</strong> Tùy vào đối tượng cần đo, chọn một trong ba loại thước
                    52.2cm, 42.9cm hoặc 38.8cm.
                  </li>
                  <li>
                    <strong>Đo kích thước chính xác:</strong> Sử dụng thước dây hoặc thước kẻ để đo kích thước thực tế
                    của vật thể (đơn vị cm).
                  </li>
                  <li>
                    <strong>Quy đổi về thước Lỗ Ban:</strong> Nếu kích thước lớn hơn chiều dài của thước Lỗ Ban, chia
                    kích thước cho chiều dài thước và lấy phần dư.
                  </li>
                  <li>
                    <strong>Xác định cung:</strong> Dựa vào phần dư, xác định cung tương ứng trên thước Lỗ Ban.
                  </li>
                  <li>
                    <strong>Đánh giá và điều chỉnh:</strong> Nếu kích thước rơi vào hung cung, điều chỉnh kích thước để
                    rơi vào cát cung gần nhất.
                  </li>
                </ol>

                <h3 className="text-xl font-medium">Ứng dụng thực tế</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Đo cửa ra vào</h4>
                    <p className="text-sm text-muted-foreground">
                      Sử dụng thước 52.2cm để đo chiều cao và chiều rộng của cửa ra vào. Kích thước cát lợi sẽ giúp mang
                      lại may mắn và tài lộc cho gia chủ.
                    </p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Đo bàn làm việc</h4>
                    <p className="text-sm text-muted-foreground">
                      Sử dụng thước 42.9cm để đo chiều dài, rộng và cao của bàn làm việc. Kích thước cát lợi sẽ giúp
                      thúc đẩy sự nghiệp và tài lộc.
                    </p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Đo bàn thờ</h4>
                    <p className="text-sm text-muted-foreground">
                      Sử dụng thước 38.8cm để đo kích thước bàn thờ và các vật dụng thờ cúng. Kích thước cát lợi sẽ giúp
                      mang lại sự bình an và may mắn.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-medium">Lưu ý quan trọng</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Đo lường chính xác từ cạnh này đến cạnh kia của vật thể.</li>
                  <li>
                    Đối với đồ nội thất, nên đo cả ba chiều (dài, rộng, cao) để đảm bảo tất cả đều rơi vào cát cung.
                  </li>
                  <li>
                    Nếu không thể điều chỉnh kích thước chính xác theo thước Lỗ Ban, ưu tiên chiều dài và chiều rộng hơn
                    chiều cao.
                  </li>
                  <li>
                    Thước Lỗ Ban chỉ là một phần trong hệ thống phong thủy, nên kết hợp với các nguyên tắc phong thủy
                    khác để đạt hiệu quả tốt nhất.
                  </li>
                </ul>

                <div className="flex justify-center mt-6">
                  <Button asChild>
                    <Link href="/ruler">
                      Thực hành đo lường
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="faq">
            <Card>
              <CardHeader>
                <CardTitle>Câu hỏi thường gặp</CardTitle>
                <CardDescription>Giải đáp những thắc mắc phổ biến về Thước Lỗ Ban</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium">Tại sao có ba loại thước Lỗ Ban khác nhau?</h3>
                    <p className="mt-2 text-muted-foreground">
                      Ba loại thước Lỗ Ban (52.2cm, 42.9cm và 38.8cm) được thiết kế cho các mục đích đo lường khác nhau.
                      Thước 52.2cm dùng cho không gian mở, thước 42.9cm dùng cho đồ nội thất, và thước 38.8cm dùng cho
                      đồ thờ cúng. Mỗi loại thước có tỷ lệ riêng phù hợp với đối tượng cần đo.
                    </p>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium">Làm thế nào để đo kích thước lớn hơn chiều dài của thước Lỗ Ban?</h3>
                    <p className="mt-2 text-muted-foreground">
                      Đối với kích thước lớn hơn chiều dài của thước Lỗ Ban, bạn cần chia kích thước thực tế cho chiều
                      dài của thước và lấy phần dư. Ví dụ, nếu bạn đo được 150cm và sử dụng thước 52.2cm, thì 150 ÷ 52.2
                      = 2 dư 45.6cm. Bạn sẽ sử dụng 45.6cm để xác định cung trên thước.
                    </p>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium">Nếu kích thước rơi vào hung cung, tôi nên điều chỉnh như thế nào?</h3>
                    <p className="mt-2 text-muted-foreground">
                      Nếu kích thước rơi vào hung cung, bạn nên điều chỉnh tăng hoặc giảm kích thước để rơi vào cát cung
                      gần nhất. Ứng dụng Thước Lỗ Ban sẽ tự động đề xuất kích thước cát lợi gần nhất để bạn tham khảo.
                      Thông thường, việc điều chỉnh chỉ cần thay đổi vài cm là đủ.
                    </p>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium">Thước Lỗ Ban có thực sự hiệu quả không?</h3>
                    <p className="mt-2 text-muted-foreground">
                      Thước Lỗ Ban là một phần của hệ thống phong thủy truyền thống đã tồn tại hàng nghìn năm. Nhiều
                      người tin rằng việc áp dụng nguyên tắc Thước Lỗ Ban giúp tạo ra sự hài hòa và cân bằng trong không
                      gian sống. Tuy nhiên, hiệu quả của nó phụ thuộc vào niềm tin cá nhân và việc kết hợp với các
                      nguyên tắc phong thủy khác.
                    </p>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium">Có cần đo tất cả các kích thước của một vật thể không?</h3>
                    <p className="mt-2 text-muted-foreground">
                      Lý tưởng nhất là đo cả ba chiều (dài, rộng, cao) của vật thể để đảm bảo tất cả đều rơi vào cát
                      cung. Tuy nhiên, nếu không thể điều chỉnh tất cả các kích thước, nên ưu tiên chiều dài và chiều
                      rộng hơn chiều cao, vì đây là những kích thước thường xuyên tiếp xúc với người sử dụng.
                    </p>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium">
                      Thước Lỗ Ban có thể áp dụng cho mọi loại công trình và vật dụng không?
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      Thước Lỗ Ban có thể áp dụng cho hầu hết các công trình và vật dụng trong nhà. Tuy nhiên, đối với
                      một số công trình hiện đại hoặc vật dụng có kích thước và hình dáng đặc biệt, việc áp dụng có thể
                      linh hoạt hơn. Quan trọng là hiểu rõ nguyên tắc cơ bản và áp dụng một cách hợp lý.
                    </p>
                  </div>
                </div>

                <div className="flex justify-center mt-6">
                  <Button asChild>
                    <Link href="/ruler">
                      Thử nghiệm với Thước Lỗ Ban
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
