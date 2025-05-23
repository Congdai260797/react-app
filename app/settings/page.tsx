"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trash2, RefreshCw, Save } from "lucide-react"

export default function SettingsPage() {
  const { toast } = useToast()
  const [settings, setSettings] = useState({
    theme: "light",
    language: "vi",
    saveHistory: true,
    showTutorial: true,
    defaultRuler: "522",
    measurementUnit: "cm",
  })

  const [savedResults, setSavedResults] = useState([])

  useEffect(() => {
    // Tải cài đặt từ localStorage
    const savedSettings = localStorage.getItem("lubanSettings")
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings))
    }

    // Tải kết quả đã lưu từ localStorage
    const results = localStorage.getItem("lubanResults")
    if (results) {
      setSavedResults(JSON.parse(results))
    }
  }, [])

  const saveSettings = () => {
    localStorage.setItem("lubanSettings", JSON.stringify(settings))
    toast({
      title: "Đã lưu cài đặt",
      description: "Cài đặt của bạn đã được lưu thành công",
    })
  }

  const resetSettings = () => {
    const defaultSettings = {
      theme: "light",
      language: "vi",
      saveHistory: true,
      showTutorial: true,
      defaultRuler: "522",
      measurementUnit: "cm",
    }

    setSettings(defaultSettings)
    localStorage.setItem("lubanSettings", JSON.stringify(defaultSettings))

    toast({
      title: "Đã đặt lại cài đặt",
      description: "Cài đặt đã được khôi phục về mặc định",
    })
  }

  const clearHistory = () => {
    localStorage.removeItem("lubanResults")
    setSavedResults([])

    toast({
      title: "Đã xóa lịch sử",
      description: "Tất cả kết quả đã lưu đã được xóa",
    })
  }

  const deleteResult = (id) => {
    const updatedResults = savedResults.filter((result) => result.id !== id)
    setSavedResults(updatedResults)
    localStorage.setItem("lubanResults", JSON.stringify(updatedResults))

    toast({
      title: "Đã xóa kết quả",
      description: "Kết quả đã được xóa khỏi danh sách",
    })
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Cài đặt</h1>

        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="general">Cài đặt chung</TabsTrigger>
            <TabsTrigger value="history">Lịch sử đo lường</TabsTrigger>
          </TabsList>

          <TabsContent value="general">
            <Card>
              <CardHeader>
                <CardTitle>Cài đặt chung</CardTitle>
                <CardDescription>Tùy chỉnh giao diện và chức năng của ứng dụng</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium">Giao diện</h3>
                    <div className="grid gap-4 mt-3">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="theme" className="flex-1">
                          Chế độ giao diện
                        </Label>
                        <RadioGroup
                          id="theme"
                          value={settings.theme}
                          onValueChange={(value) => setSettings({ ...settings, theme: value })}
                          className="flex gap-4"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="light" id="light" />
                            <Label htmlFor="light">Sáng</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="dark" id="dark" />
                            <Label htmlFor="dark">Tối</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="system" id="system" />
                            <Label htmlFor="system">Hệ thống</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="flex items-center justify-between">
                        <Label htmlFor="language" className="flex-1">
                          Ngôn ngữ
                        </Label>
                        <Select
                          value={settings.language}
                          onValueChange={(value) => setSettings({ ...settings, language: value })}
                        >
                          <SelectTrigger className="w-40">
                            <SelectValue placeholder="Chọn ngôn ngữ" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="vi">Tiếng Việt</SelectItem>
                            <SelectItem value="en">English</SelectItem>
                            <SelectItem value="zh">中文</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium">Đo lường</h3>
                    <div className="grid gap-4 mt-3">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="defaultRuler" className="flex-1">
                          Thước mặc định
                        </Label>
                        <Select
                          value={settings.defaultRuler}
                          onValueChange={(value) => setSettings({ ...settings, defaultRuler: value })}
                        >
                          <SelectTrigger className="w-40">
                            <SelectValue placeholder="Chọn thước" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="522">Thước 52.2cm</SelectItem>
                            <SelectItem value="429">Thước 42.9cm</SelectItem>
                            <SelectItem value="388">Thước 38.8cm</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex items-center justify-between">
                        <Label htmlFor="measurementUnit" className="flex-1">
                          Đơn vị đo lường
                        </Label>
                        <Select
                          value={settings.measurementUnit}
                          onValueChange={(value) => setSettings({ ...settings, measurementUnit: value })}
                        >
                          <SelectTrigger className="w-40">
                            <SelectValue placeholder="Chọn đơn vị" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cm">Centimeter (cm)</SelectItem>
                            <SelectItem value="mm">Millimeter (mm)</SelectItem>
                            <SelectItem value="inch">Inch (in)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium">Tùy chọn khác</h3>
                    <div className="grid gap-4 mt-3">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="saveHistory" className="flex-1">
                          Lưu lịch sử đo lường
                        </Label>
                        <Switch
                          id="saveHistory"
                          checked={settings.saveHistory}
                          onCheckedChange={(checked) => setSettings({ ...settings, saveHistory: checked })}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <Label htmlFor="showTutorial" className="flex-1">
                          Hiển thị hướng dẫn cho người mới
                        </Label>
                        <Switch
                          id="showTutorial"
                          checked={settings.showTutorial}
                          onCheckedChange={(checked) => setSettings({ ...settings, showTutorial: checked })}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={resetSettings}>
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Đặt lại
                  </Button>
                  <Button onClick={saveSettings}>
                    <Save className="mr-2 h-4 w-4" />
                    Lưu cài đặt
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Lịch sử đo lường</CardTitle>
                <CardDescription>Xem và quản lý các kết quả đo lường đã lưu</CardDescription>
              </CardHeader>
              <CardContent>
                {savedResults.length > 0 ? (
                  <div className="space-y-4">
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2 px-4">Thời gian</th>
                            <th className="text-left py-2 px-4">Loại thước</th>
                            <th className="text-left py-2 px-4">Kích thước</th>
                            <th className="text-left py-2 px-4">Kết quả</th>
                            <th className="text-left py-2 px-4">Thao tác</th>
                          </tr>
                        </thead>
                        <tbody>
                          {savedResults.map((result) => (
                            <tr key={result.id} className="border-b hover:bg-muted/50">
                              <td className="py-2 px-4">{formatDate(result.date)}</td>
                              <td className="py-2 px-4">
                                Thước{" "}
                                {result.rulerType === "522"
                                  ? "52.2cm"
                                  : result.rulerType === "429"
                                    ? "42.9cm"
                                    : "38.8cm"}
                              </td>
                              <td className="py-2 px-4">
                                {typeof result.measurement === "object"
                                  ? `D: ${result.measurement.length}cm, R: ${result.measurement.width}cm, C: ${result.measurement.height}cm`
                                  : `${result.measurement}cm`}
                              </td>
                              <td className="py-2 px-4">
                                {typeof result.result === "object" && result.result.length
                                  ? `${result.result.length.cung}, ${result.result.width.cung}, ${result.result.height.cung}`
                                  : result.result?.cung || "N/A"}
                              </td>
                              <td className="py-2 px-4">
                                <Button variant="ghost" size="icon" onClick={() => deleteResult(result.id)}>
                                  <Trash2 className="h-4 w-4 text-red-500" />
                                  <span className="sr-only">Xóa</span>
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="flex justify-end">
                      <Button variant="destructive" onClick={clearHistory}>
                        <Trash2 className="mr-2 h-4 w-4" />
                        Xóa tất cả
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">Chưa có kết quả đo lường nào được lưu</p>
                    <Button asChild className="mt-4">
                      <a href="/ruler">Bắt đầu đo lường</a>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
