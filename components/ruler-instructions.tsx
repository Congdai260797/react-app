import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

export default function RulerInstructions() {
  return (
    <div className="space-y-4">
      <p>
        Thước Lỗ Ban được chia thành 8 cung, mỗi cung tượng trưng cho một yếu tố phong thủy khác nhau. Khi đo lường,
        kích thước rơi vào các cung Tài, Nghĩa, Quan và Bản được xem là cát lợi.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
        <div className="border rounded-lg p-4">
          <h3 className="font-medium mb-2">Thước 52.2cm</h3>
          <p className="text-sm text-muted-foreground">
            Sử dụng cho việc đo không gian mở như chiều cao trần nhà, chiều rộng phòng, kích thước cửa ra vào, cửa sổ.
          </p>
        </div>

        <div className="border rounded-lg p-4">
          <h3 className="font-medium mb-2">Thước 42.9cm</h3>
          <p className="text-sm text-muted-foreground">
            Sử dụng cho việc đo đồ nội thất như bàn, ghế, tủ, giường, kệ sách và các vật dụng trong nhà.
          </p>
        </div>

        <div className="border rounded-lg p-4">
          <h3 className="font-medium mb-2">Thước 38.8cm</h3>
          <p className="text-sm text-muted-foreground">
            Sử dụng cho việc đo đồ thờ cúng như bàn thờ, tượng, bát hương và các vật dụng liên quan đến tâm linh.
          </p>
        </div>
      </div>

      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Lưu ý quan trọng</AlertTitle>
        <AlertDescription>
          Khi đo lường, hãy đảm bảo đo chính xác từ cạnh này đến cạnh kia của vật thể. Đối với các kích thước lớn, hãy
          quy đổi về đơn vị thước Lỗ Ban tương ứng.
        </AlertDescription>
      </Alert>
    </div>
  )
}
