"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { useToast } from "@/components/ui/use-toast"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calculator, Save, Share2, RefreshCw, Check, X, AlertTriangle } from "lucide-react"
import RulerVisualization from "@/components/ruler-visualization"
import { calculateLubanResult } from "@/lib/luban-calculator"

interface RulerCalculatorProps {
  rulerType: "522" | "429" | "388"
}

export default function RulerCalculator({ rulerType }: RulerCalculatorProps) {
  const { toast } = useToast()
  const [measurement, setMeasurement] = useState<number>(0)
  const [result, setResult] = useState<any>(null)
  const [dimensions, setDimensions] = useState({
    length: 0,
    width: 0,
    height: 0,
  })
  const [activeTab, setActiveTab] = useState<string>("single")

  const rulerSizes = {
    "522": 52.2,
    "429": 42.9,
    "388": 38.8,
  }

  const rulerSize = rulerSizes[rulerType]

  const handleCalculate = () => {
    if (measurement <= 0) {
      toast({
        title: "Lỗi",
        description: "Vui lòng nhập kích thước hợp lệ",
        variant: "destructive",
      })
      return
    }

    const calculationResult = calculateLubanResult(measurement, rulerType)
    setResult(calculationResult)

    toast({
      title: "Đã tính toán",
      description: `Kết quả đo ${measurement}cm trên thước ${rulerSize}cm`,
    })
  }

  const handleMultiCalculate = () => {
    if (dimensions.length <= 0 || dimensions.width <= 0 || dimensions.height <= 0) {
      toast({
        title: "Lỗi",
        description: "Vui lòng nhập đầy đủ các kích thước hợp lệ",
        variant: "destructive",
      })
      return
    }

    const lengthResult = calculateLubanResult(dimensions.length, rulerType)
    const widthResult = calculateLubanResult(dimensions.width, rulerType)
    const heightResult = calculateLubanResult(dimensions.height, rulerType)

    setResult({
      length: lengthResult,
      width: widthResult,
      height: heightResult,
    })

    toast({
      title: "Đã tính toán",
      description: `Kết quả đo đa chiều trên thước ${rulerSize}cm`,
    })
  }

  const handleReset = () => {
    setMeasurement(0)
    setDimensions({
      length: 0,
      width: 0,
      height: 0,
    })
    setResult(null)
  }

  const handleSave = () => {
    // Lưu kết quả vào localStorage
    const savedResults = JSON.parse(localStorage.getItem("lubanResults") || "[]")
    const newResult = {
      id: Date.now(),
      rulerType,
      measurement: activeTab === "single" ? measurement : dimensions,
      result,
      date: new Date().toISOString(),
    }

    localStorage.setItem("lubanResults", JSON.stringify([...savedResults, newResult]))

    toast({
      title: "Đã lưu kết quả",
      description: "Kết quả đã được lưu vào danh sách của bạn",
    })
  }

  const handleShare = () => {
    // Tạo nội dung chia sẻ
    const shareText = `Kết quả đo Thước Lỗ Ban ${rulerSize}cm: ${JSON.stringify(result)}`

    if (navigator.share) {
      navigator.share({
        title: "Kết quả Thước Lỗ Ban",
        text: shareText,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(shareText)
      toast({
        title: "Đã sao chép",
        description: "Kết quả đã được sao chép vào clipboard",
      })
    }
  }

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="single">Đo đơn</TabsTrigger>
          <TabsTrigger value="multi">Đo đa chiều</TabsTrigger>
        </TabsList>

        <TabsContent value="single" className="space-y-4">
          <div className="grid gap-4">
            <div>
              <Label htmlFor="measurement">Kích thước (cm)</Label>
              <div className="flex gap-2 mt-1">
                <Input
                  id="measurement"
                  type="number"
                  min="0"
                  step="0.1"
                  value={measurement || ""}
                  onChange={(e) => setMeasurement(Number.parseFloat(e.target.value) || 0)}
                  placeholder="Nhập kích thước cần đo"
                />
                <Button onClick={handleCalculate}>
                  <Calculator className="mr-2 h-4 w-4" />
                  Tính
                </Button>
              </div>
            </div>

            <div>
              <Label>Điều chỉnh</Label>
              <Slider
                value={[measurement]}
                min={0}
                max={200}
                step={0.1}
                onValueChange={(value) => setMeasurement(value[0])}
                className="mt-2"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>0cm</span>
                <span>50cm</span>
                <span>100cm</span>
                <span>150cm</span>
                <span>200cm</span>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="multi" className="space-y-4">
          <div className="grid gap-4">
            <div>
              <Label htmlFor="length">Chiều dài (cm)</Label>
              <Input
                id="length"
                type="number"
                min="0"
                step="0.1"
                value={dimensions.length || ""}
                onChange={(e) => setDimensions({ ...dimensions, length: Number.parseFloat(e.target.value) || 0 })}
                placeholder="Nhập chiều dài"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="width">Chiều rộng (cm)</Label>
              <Input
                id="width"
                type="number"
                min="0"
                step="0.1"
                value={dimensions.width || ""}
                onChange={(e) => setDimensions({ ...dimensions, width: Number.parseFloat(e.target.value) || 0 })}
                placeholder="Nhập chiều rộng"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="height">Chiều cao (cm)</Label>
              <Input
                id="height"
                type="number"
                min="0"
                step="0.1"
                value={dimensions.height || ""}
                onChange={(e) => setDimensions({ ...dimensions, height: Number.parseFloat(e.target.value) || 0 })}
                placeholder="Nhập chiều cao"
                className="mt-1"
              />
            </div>

            <Button onClick={handleMultiCalculate}>
              <Calculator className="mr-2 h-4 w-4" />
              Tính toán đa chiều
            </Button>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-6">
        <RulerVisualization
          rulerType={rulerType}
          measurement={activeTab === "single" ? measurement : null}
          dimensions={activeTab === "multi" ? dimensions : null}
        />
      </div>

      {result && (
        <Card className="mt-6">
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold mb-4">Kết quả</h3>

            {activeTab === "single" ? (
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div
                    className={`p-2 rounded-full ${result.isFavorable ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300" : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"}`}
                  >
                    {result.isFavorable ? <Check className="h-5 w-5" /> : <X className="h-5 w-5" />}
                  </div>
                  <div>
                    <p className="font-medium">
                      {result.isFavorable ? "Kích thước cát lợi" : "Kích thước không cát lợi"}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Rơi vào cung {result.cung} - {result.meaning}
                    </p>
                  </div>
                </div>

                {!result.isFavorable && (
                  <div className="bg-amber-50 dark:bg-amber-950 p-4 rounded-lg flex gap-3">
                    <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-amber-800 dark:text-amber-300">Đề xuất điều chỉnh</p>
                      <p className="text-sm text-amber-700 dark:text-amber-400 mt-1">
                        Điều chỉnh kích thước thành {result.suggestedSize.toFixed(1)}cm để đạt cung{" "}
                        {result.suggestedCung} ({result.suggestedMeaning})
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Chiều dài</h4>
                    <div
                      className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-sm ${result.length.isFavorable ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300" : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"}`}
                    >
                      {result.length.isFavorable ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
                      Cung {result.length.cung}
                    </div>
                    <p className="text-sm mt-2">{result.length.meaning}</p>
                    {!result.length.isFavorable && (
                      <p className="text-xs text-amber-600 dark:text-amber-400 mt-1">
                        Đề xuất: {result.length.suggestedSize.toFixed(1)}cm
                      </p>
                    )}
                  </div>

                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Chiều rộng</h4>
                    <div
                      className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-sm ${result.width.isFavorable ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300" : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"}`}
                    >
                      {result.width.isFavorable ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
                      Cung {result.width.cung}
                    </div>
                    <p className="text-sm mt-2">{result.width.meaning}</p>
                    {!result.width.isFavorable && (
                      <p className="text-xs text-amber-600 dark:text-amber-400 mt-1">
                        Đề xuất: {result.width.suggestedSize.toFixed(1)}cm
                      </p>
                    )}
                  </div>

                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Chiều cao</h4>
                    <div
                      className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-sm ${result.height.isFavorable ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300" : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"}`}
                    >
                      {result.height.isFavorable ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
                      Cung {result.height.cung}
                    </div>
                    <p className="text-sm mt-2">{result.height.meaning}</p>
                    {!result.height.isFavorable && (
                      <p className="text-xs text-amber-600 dark:text-amber-400 mt-1">
                        Đề xuất: {result.height.suggestedSize.toFixed(1)}cm
                      </p>
                    )}
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Đánh giá tổng thể</h4>
                  <p className="text-sm">
                    {result.length.isFavorable && result.width.isFavorable && result.height.isFavorable
                      ? "Tất cả các kích thước đều cát lợi, rất tốt cho phong thủy."
                      : "Có một số kích thước chưa cát lợi, hãy xem xét điều chỉnh theo đề xuất."}
                  </p>
                </div>
              </div>
            )}

            <div className="flex gap-2 mt-6">
              <Button variant="outline" size="sm" onClick={handleReset}>
                <RefreshCw className="mr-2 h-4 w-4" />
                Đặt lại
              </Button>
              <Button variant="outline" size="sm" onClick={handleSave}>
                <Save className="mr-2 h-4 w-4" />
                Lưu kết quả
              </Button>
              <Button variant="outline" size="sm" onClick={handleShare}>
                <Share2 className="mr-2 h-4 w-4" />
                Chia sẻ
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
