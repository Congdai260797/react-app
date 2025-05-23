"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface RulerVisualizationProps {
  rulerType: "522" | "429" | "388"
  measurement: number | null
  dimensions: { length: number; width: number; height: number } | null
}

export default function RulerVisualization({ rulerType, measurement, dimensions }: RulerVisualizationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [canvasWidth, setCanvasWidth] = useState(800)
  const [canvasHeight, setCanvasHeight] = useState(150)

  const rulerSizes = {
    "522": 52.2,
    "429": 42.9,
    "388": 38.8,
  }

  const rulerSize = rulerSizes[rulerType]

  // Các cung và màu sắc tương ứng
  const sections = [
    { name: "Tài", color: "#4ade80", isFavorable: true },
    { name: "Bệnh", color: "#f87171", isFavorable: false },
    { name: "Ly", color: "#f87171", isFavorable: false },
    { name: "Nghĩa", color: "#4ade80", isFavorable: true },
    { name: "Quan", color: "#4ade80", isFavorable: true },
    { name: "Kiếp", color: "#f87171", isFavorable: false },
    { name: "Hại", color: "#f87171", isFavorable: false },
    { name: "Bản", color: "#4ade80", isFavorable: true },
  ]

  useEffect(() => {
    const handleResize = () => {
      const container = canvasRef.current?.parentElement
      if (container) {
        setCanvasWidth(container.clientWidth)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Xóa canvas
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)

    // Vẽ thước
    const rulerWidth = canvasWidth - 40
    const rulerHeight = 60
    const startX = 20
    const startY = 40

    // Vẽ nền thước
    ctx.fillStyle = "#f8fafc"
    ctx.fillRect(startX, startY, rulerWidth, rulerHeight)
    ctx.strokeStyle = "#334155"
    ctx.lineWidth = 2
    ctx.strokeRect(startX, startY, rulerWidth, rulerHeight)

    // Vẽ các cung
    const sectionWidth = rulerWidth / 8
    for (let i = 0; i < 8; i++) {
      const sectionX = startX + i * sectionWidth

      // Vẽ nền cung
      ctx.fillStyle = sections[i].color
      ctx.globalAlpha = 0.2
      ctx.fillRect(sectionX, startY, sectionWidth, rulerHeight)
      ctx.globalAlpha = 1

      // Vẽ đường chia cung
      ctx.beginPath()
      ctx.moveTo(sectionX, startY)
      ctx.lineTo(sectionX, startY + rulerHeight)
      ctx.strokeStyle = "#64748b"
      ctx.lineWidth = 1
      ctx.stroke()

      // Vẽ tên cung
      ctx.fillStyle = sections[i].isFavorable ? "#15803d" : "#b91c1c"
      ctx.font = "bold 12px Arial"
      ctx.textAlign = "center"
      ctx.fillText(sections[i].name, sectionX + sectionWidth / 2, startY + rulerHeight / 2 + 5)
    }

    // Vẽ vạch chia cm
    const cmPerPixel = rulerSize / rulerWidth
    const pixelsPerCm = rulerWidth / rulerSize

    for (let cm = 0; cm <= rulerSize; cm++) {
      const x = startX + cm * pixelsPerCm

      // Vạch cm
      ctx.beginPath()
      ctx.moveTo(x, startY + rulerHeight)
      ctx.lineTo(x, startY + rulerHeight + 10)
      ctx.strokeStyle = "#334155"
      ctx.lineWidth = 1
      ctx.stroke()

      // Số cm
      if (cm % 5 === 0 || cm === rulerSize) {
        ctx.fillStyle = "#334155"
        ctx.font = "10px Arial"
        ctx.textAlign = "center"
        ctx.fillText(cm.toString(), x, startY + rulerHeight + 25)
      }
    }

    // Vẽ marker cho kích thước đã nhập
    if (measurement && measurement > 0) {
      const markerX = startX + measurement * pixelsPerCm

      // Vẽ mũi tên
      ctx.beginPath()
      ctx.moveTo(markerX, startY - 15)
      ctx.lineTo(markerX - 5, startY - 5)
      ctx.lineTo(markerX + 5, startY - 5)
      ctx.closePath()
      ctx.fillStyle = "#0ea5e9"
      ctx.fill()

      // Vẽ đường dẫn
      ctx.beginPath()
      ctx.moveTo(markerX, startY - 5)
      ctx.lineTo(markerX, startY)
      ctx.strokeStyle = "#0ea5e9"
      ctx.lineWidth = 2
      ctx.stroke()

      // Hiển thị kích thước
      ctx.fillStyle = "#0ea5e9"
      ctx.font = "bold 12px Arial"
      ctx.textAlign = "center"
      ctx.fillText(`${measurement.toFixed(1)}cm`, markerX, startY - 20)
    }

    // Vẽ marker cho kích thước đa chiều
    if (dimensions) {
      const colors = ["#0ea5e9", "#8b5cf6", "#ec4899"]
      const labels = ["Dài", "Rộng", "Cao"]
      const values = [dimensions.length, dimensions.width, dimensions.height]

      values.forEach((value, index) => {
        if (value > 0) {
          const markerX = startX + value * pixelsPerCm
          const offsetY = 15 * (index + 1)

          // Vẽ mũi tên
          ctx.beginPath()
          ctx.moveTo(markerX, startY - offsetY)
          ctx.lineTo(markerX - 5, startY - offsetY + 10)
          ctx.lineTo(markerX + 5, startY - offsetY + 10)
          ctx.closePath()
          ctx.fillStyle = colors[index]
          ctx.fill()

          // Vẽ đường dẫn
          ctx.beginPath()
          ctx.moveTo(markerX, startY - offsetY + 10)
          ctx.lineTo(markerX, startY)
          ctx.strokeStyle = colors[index]
          ctx.lineWidth = 2
          ctx.stroke()

          // Hiển thị kích thước
          ctx.fillStyle = colors[index]
          ctx.font = "bold 12px Arial"
          ctx.textAlign = "center"
          ctx.fillText(`${labels[index]}: ${value.toFixed(1)}cm`, markerX, startY - offsetY - 5)
        }
      })
    }
  }, [canvasWidth, canvasHeight, rulerType, rulerSize, measurement, dimensions])

  return (
    <Card>
      <CardContent className="p-4">
        <h3 className="text-lg font-medium mb-4">Thước Lỗ Ban {rulerSize}cm</h3>
        <div className="relative">
          <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} className="w-full" />
        </div>
        <div className="flex flex-wrap gap-3 mt-4 text-sm">
          <div className="flex items-center gap-1">
            <span className="inline-block w-3 h-3 bg-green-400 rounded-full opacity-20"></span>
            <span className="text-green-700 dark:text-green-400 font-medium">Cát (Tốt):</span>
            <span className="text-muted-foreground">Tài, Nghĩa, Quan, Bản</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="inline-block w-3 h-3 bg-red-400 rounded-full opacity-20"></span>
            <span className="text-red-700 dark:text-red-400 font-medium">Hung (Xấu):</span>
            <span className="text-muted-foreground">Bệnh, Ly, Kiếp, Hại</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
