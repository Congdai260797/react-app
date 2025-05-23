import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import RulerCalculator from "@/components/ruler-calculator"
import RulerInstructions from "@/components/ruler-instructions"

export default function RulerPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Thước Lỗ Ban</h1>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Hướng dẫn sử dụng</CardTitle>
            <CardDescription>Chọn loại thước phù hợp với mục đích đo lường của bạn</CardDescription>
          </CardHeader>
          <CardContent>
            <RulerInstructions />
          </CardContent>
        </Card>

        <Tabs defaultValue="522" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="522">Thước 52.2cm</TabsTrigger>
            <TabsTrigger value="429">Thước 42.9cm</TabsTrigger>
            <TabsTrigger value="388">Thước 38.8cm</TabsTrigger>
          </TabsList>
          <TabsContent value="522">
            <Card>
              <CardHeader>
                <CardTitle>Thước 52.2cm</CardTitle>
                <CardDescription>Dùng để đo không gian mở, không có khung viền</CardDescription>
              </CardHeader>
              <CardContent>
                <RulerCalculator rulerType="522" />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="429">
            <Card>
              <CardHeader>
                <CardTitle>Thước 42.9cm</CardTitle>
                <CardDescription>Dùng để đo đồ nội thất và vật dụng</CardDescription>
              </CardHeader>
              <CardContent>
                <RulerCalculator rulerType="429" />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="388">
            <Card>
              <CardHeader>
                <CardTitle>Thước 38.8cm</CardTitle>
                <CardDescription>Dùng để đo đồ thờ cúng và vật dụng nội thất</CardDescription>
              </CardHeader>
              <CardContent>
                <RulerCalculator rulerType="388" />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
