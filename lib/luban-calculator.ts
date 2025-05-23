interface LubanResult {
  cung: string
  meaning: string
  isFavorable: boolean
  suggestedSize: number
  suggestedCung: string
  suggestedMeaning: string
}

// Thông tin về các cung
const cungInfo = {
  Tài: {
    meaning: "Tài lộc, thịnh vượng",
    isFavorable: true,
  },
  Bệnh: {
    meaning: "Bệnh tật, sức khỏe kém",
    isFavorable: false,
  },
  Ly: {
    meaning: "Chia ly, xung đột",
    isFavorable: false,
  },
  Nghĩa: {
    meaning: "Chính nghĩa, đạo đức",
    isFavorable: true,
  },
  Quan: {
    meaning: "Quan lộc, sự nghiệp",
    isFavorable: true,
  },
  Kiếp: {
    meaning: "Kiếp số, vận hạn",
    isFavorable: false,
  },
  Hại: {
    meaning: "Tổn hại, nguy hiểm",
    isFavorable: false,
  },
  Bản: {
    meaning: "Gốc rễ, nền tảng",
    isFavorable: true,
  },
}

// Danh sách các cung theo thứ tự
const cungList = ["Tài", "Bệnh", "Ly", "Nghĩa", "Quan", "Kiếp", "Hại", "Bản"]

// Hàm tính toán kết quả Thước Lỗ Ban
export function calculateLubanResult(measurement: number, rulerType: "522" | "429" | "388"): LubanResult {
  const rulerSizes = {
    "522": 52.2,
    "429": 42.9,
    "388": 38.8,
  }

  const rulerSize = rulerSizes[rulerType]

  // Tính toán số lần lặp lại của thước
  const repetitions = Math.floor(measurement / rulerSize)

  // Tính phần dư
  const remainder = measurement % rulerSize

  // Xác định cung dựa trên phần dư
  const sectionSize = rulerSize / 8
  const sectionIndex = Math.floor(remainder / sectionSize)
  const cung = cungList[sectionIndex]

  // Xác định cung tốt gần nhất
  let nearestGoodSection = -1
  let minDistance = rulerSize

  for (let i = 0; i < cungList.length; i++) {
    if (cungInfo[cungList[i]].isFavorable) {
      const sectionMiddle = i * sectionSize + sectionSize / 2
      const distance = Math.abs(remainder - sectionMiddle)

      if (distance < minDistance) {
        minDistance = distance
        nearestGoodSection = i
      }
    }
  }

  // Tính kích thước đề xuất
  const suggestedSectionMiddle = nearestGoodSection * sectionSize + sectionSize / 2
  const suggestedSize = repetitions * rulerSize + suggestedSectionMiddle

  return {
    cung,
    meaning: cungInfo[cung].meaning,
    isFavorable: cungInfo[cung].isFavorable,
    suggestedSize,
    suggestedCung: cungList[nearestGoodSection],
    suggestedMeaning: cungInfo[cungList[nearestGoodSection]].meaning,
  }
}
