import { Card, CardContent } from "@/components/ui/card"

export default function IntroductionSection() {
  return (
    <section className="my-12">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h2 className="text-3xl font-bold">Thước Lỗ Ban là gì?</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-lg">
              Thước Lỗ Ban là công cụ đo lường truyền thống trong kiến trúc Trung Hoa, được sử dụng để xác định kích
              thước cát lợi theo nguyên tắc phong thủy. Thước được đặt theo tên của Lỗ Ban - bậc thầy kiến trúc và thợ
              mộc nổi tiếng thời cổ đại.
            </p>
            <p className="mt-4">
              Thước Lỗ Ban chia thành 8 cung, mỗi cung tượng trưng cho một yếu tố phong thủy khác nhau: Tài (Tài lộc),
              Bệnh (Bệnh tật), Ly (Chia ly), Nghĩa (Chính nghĩa), Quan (Quan lộc), Kiếp (Kiếp số), Hại (Tổn hại), và Bản
              (Gốc rễ).
            </p>
            <p className="mt-4">
              Khi đo lường, kích thước rơi vào các cung Tài, Nghĩa, Quan và Bản được xem là cát lợi, mang lại may mắn và
              thịnh vượng. Ngược lại, các cung Bệnh, Ly, Kiếp và Hại được xem là hung cung, nên tránh.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
