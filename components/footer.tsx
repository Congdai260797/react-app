import Link from "next/link"
import { RulerIcon } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-2 font-bold">
              <RulerIcon className="h-6 w-6" />
              <span>Thước Lỗ Ban</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Công cụ tính toán kích thước phong thủy theo nguyên tắc truyền thống
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-3">Thước Lỗ Ban</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/ruler/522" className="text-muted-foreground hover:text-foreground">
                  Thước 52.2cm
                </Link>
              </li>
              <li>
                <Link href="/ruler/429" className="text-muted-foreground hover:text-foreground">
                  Thước 42.9cm
                </Link>
              </li>
              <li>
                <Link href="/ruler/388" className="text-muted-foreground hover:text-foreground">
                  Thước 38.8cm
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-3">Kiến thức</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/education" className="text-muted-foreground hover:text-foreground">
                  Lịch sử Thước Lỗ Ban
                </Link>
              </li>
              <li>
                <Link href="/education/usage" className="text-muted-foreground hover:text-foreground">
                  Cách sử dụng
                </Link>
              </li>
              <li>
                <Link href="/education/faq" className="text-muted-foreground hover:text-foreground">
                  Câu hỏi thường gặp
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-3">Liên kết</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link href="/settings" className="text-muted-foreground hover:text-foreground">
                  Cài đặt
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  Chính sách bảo mật
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Thước Lỗ Ban. Đã đăng ký bản quyền.</p>
        </div>
      </div>
    </footer>
  )
}
