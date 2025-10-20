"use client"

import { ScrollArea } from "@/components/ui/scroll-area"

interface CategoryFilterProps {
  selected: string | null
  onSelect: (category: string | null) => void
}

export default function CategoryFilter({ selected, onSelect }: CategoryFilterProps) {
  const categories = [
    "전체",
    "인문정신",
    "시각예술",
    "공연예술",
    "전통예술",
    "문화유산",
    "생활문화",
    "축제·행사",
    "문화산업",
    "여가·레저",
    "생태·과학",
  ]

  return (
    <ScrollArea className="w-full whitespace-nowrap">
      <div className="flex gap-2 pb-2">
        {categories.map((category) => {
          const isSelected = selected === category || (category === "전체" && !selected)
          return (
            <button
              key={category}
              onClick={() => onSelect(category === "전체" ? null : category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                isSelected ? "bg-[rgb(52,168,130)] text-white glow-emerald" : "glass text-gray-700 hover:bg-white/80"
              }`}
            >
              {category}
            </button>
          )
        })}
      </div>
    </ScrollArea>
  )
}
