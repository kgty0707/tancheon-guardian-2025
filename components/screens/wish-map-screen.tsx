"use client"

import { useState } from "react"
import { Heart, MessageCircle } from "lucide-react"
import GlassCard from "@/components/glass-card"
import CategoryFilter from "@/components/category-filter"

export default function WishMapScreen() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedWish, setSelectedWish] = useState<number | null>(null)

  const wishes = [
    {
      id: 1,
      text: "이곳에서 좋은 사람들과 만나고 싶어요",
      spirit: "탄천의 정령",
      category: "생태·과학",
      emoji: "💚",
      x: 30,
      y: 40,
    },
    {
      id: 2,
      text: "우리 가족이 건강하기를",
      spirit: "성남아트센터의 정령",
      category: "공연예술",
      emoji: "🌟",
      x: 60,
      y: 30,
    },
    {
      id: 3,
      text: "새로운 시작이 잘 되길",
      spirit: "판교의 정령",
      category: "문화산업",
      emoji: "✨",
      x: 45,
      y: 60,
    },
  ]

  return (
    <div className="min-h-screen relative">
      {/* Header */}
      <header className="px-6 pt-12 pb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">소원 지도</h2>
        <p className="text-gray-600">성남의 모든 소원이 모이는 곳</p>
      </header>

      {/* Category filter */}
      <div className="px-6 mb-6">
        <CategoryFilter selected={selectedCategory} onSelect={setSelectedCategory} />
      </div>

      {/* Night sky wish map */}
      <div className="px-6 mb-6">
        <GlassCard className="h-[400px] relative overflow-hidden gradient-night">
          {/* Stars background */}
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full opacity-60"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `pulse-glow ${2 + Math.random() * 3}s ease-in-out infinite`,
                }}
              />
            ))}
          </div>

          {/* Wish orbs */}
          {wishes.map((wish) => (
            <button
              key={wish.id}
              onClick={() => setSelectedWish(wish.id)}
              className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-[rgb(52,168,130)] to-[rgb(135,206,235)] glow-emerald flex items-center justify-center text-2xl cursor-pointer hover:scale-125 transition-transform pulse-glow"
              style={{ left: `${wish.x}%`, top: `${wish.y}%` }}
            >
              {wish.emoji}
            </button>
          ))}
        </GlassCard>
      </div>

      {/* Selected wish detail */}
      {selectedWish && (
        <div className="px-6 mb-6">
          {wishes
            .filter((w) => w.id === selectedWish)
            .map((wish) => (
              <GlassCard key={wish.id} className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="text-3xl">{wish.emoji}</div>
                  <div className="flex-1">
                    <p className="text-gray-800 font-medium mb-2">{wish.text}</p>
                    <p className="text-sm text-gray-600">by {wish.spirit}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                  <button className="flex items-center gap-2 text-gray-600 hover:text-[rgb(52,168,130)]">
                    <Heart className="w-5 h-5" />
                    <span className="text-sm">응원하기</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-[rgb(52,168,130)]">
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-sm">댓글</span>
                  </button>
                </div>
              </GlassCard>
            ))}
        </div>
      )}

      {/* Stats */}
      <div className="px-6 pb-8">
        <GlassCard className="p-6">
          <div className="flex items-center justify-around">
            <div className="text-center">
              <div className="text-2xl font-bold text-[rgb(52,168,130)] mb-1">1,247</div>
              <div className="text-sm text-gray-600">총 소원</div>
            </div>
            <div className="w-px h-12 bg-gray-300" />
            <div className="text-center">
              <div className="text-2xl font-bold text-[rgb(212,175,55)] mb-1">89</div>
              <div className="text-sm text-gray-600">이루어진 소원</div>
            </div>
            <div className="w-px h-12 bg-gray-300" />
            <div className="text-center">
              <div className="text-2xl font-bold text-[rgb(135,206,235)] mb-1">23</div>
              <div className="text-sm text-gray-600">정령 수</div>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  )
}
