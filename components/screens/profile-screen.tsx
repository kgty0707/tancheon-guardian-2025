"use client"

import { useState } from "react"
import { Settings, Sparkles, Heart, TreePine, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import GlassCard from "@/components/glass-card"
import ParticleEffect from "@/components/particle-effect"

export default function ProfileScreen() {
  const [donationPoints, setDonationPoints] = useState(1250)

  const userStats = {
    nickname: "김정령",
    badge: "🌸",
    level: "공간의 수호자",
    totalExperiences: 28,
    totalWishes: 156,
    energyRank: "A",
    spiritsCollected: 12,
  }

  const categoryStats = [
    { category: "생태·과학", count: 8, color: "rgb(52,168,130)" },
    { category: "공연예술", count: 6, color: "rgb(135,206,235)" },
    { category: "문화산업", count: 5, color: "rgb(212,175,55)" },
    { category: "전통예술", count: 4, color: "rgb(168,85,247)" },
    { category: "문화유산", count: 5, color: "rgb(239,68,68)" },
  ]

  const recentWishes = [
    { id: 1, text: "탄천이 더 깨끗해지길...", location: "탄천", date: "2일 전" },
    { id: 2, text: "더 많은 공연이 열리길", location: "아트센터", date: "5일 전" },
    { id: 3, text: "판교가 조화로운 공간이 되길", location: "판교", date: "1주 전" },
  ]

  const treeGrowth = Math.min((donationPoints / 2000) * 100, 100)

  return (
    <div className="min-h-screen relative">
      <ParticleEffect />

      {/* Header */}
      <header className="px-6 pt-12 pb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">프로필</h2>
          <p className="text-gray-600">나의 정령 여정</p>
        </div>
        <button className="w-10 h-10 glass rounded-full flex items-center justify-center hover:glow-emerald transition-all">
          <Settings className="w-5 h-5 text-gray-600" />
        </button>
      </header>

      {/* User card */}
      <div className="px-6 mb-6">
        <GlassCard className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[rgb(52,168,130)] to-[rgb(135,206,235)] flex items-center justify-center text-3xl glow-emerald">
              {userStats.badge}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-800 mb-1">{userStats.nickname}</h3>
              <p className="text-sm text-gray-600 mb-2">{userStats.level}</p>
              <div className="flex items-center gap-2">
                <div className="px-3 py-1 rounded-full bg-[rgb(52,168,130)]/20 text-[rgb(52,168,130)] text-xs font-bold">
                  {userStats.energyRank}등급
                </div>
              </div>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/30">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800 mb-1">{userStats.totalExperiences}</div>
              <div className="text-xs text-gray-600">체험</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800 mb-1">{userStats.totalWishes}</div>
              <div className="text-xs text-gray-600">소원</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800 mb-1">{userStats.spiritsCollected}</div>
              <div className="text-xs text-gray-600">정령</div>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Category breakdown */}
      <div className="px-6 mb-6">
        <GlassCard className="p-6">
          <h3 className="font-semibold text-gray-800 mb-4">분야별 활동</h3>
          <div className="space-y-3">
            {categoryStats.map((stat) => (
              <div key={stat.category}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-700">{stat.category}</span>
                  <span className="text-sm font-semibold text-gray-800">{stat.count}</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${(stat.count / userStats.totalExperiences) * 100}%`,
                      backgroundColor: stat.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      {/* Donation tree */}
      <div className="px-6 mb-6">
        <GlassCard className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800">소원의 나무</h3>
            <TreePine className="w-5 h-5 text-[rgb(52,168,130)]" />
          </div>
          <div className="text-center mb-4">
            <div className="text-4xl mb-2">🌳</div>
            <p className="text-sm text-gray-600 mb-2">나무가 자라고 있어요</p>
            <div className="text-2xl font-bold text-[rgb(52,168,130)] mb-1">{donationPoints}P</div>
            <p className="text-xs text-gray-500">다음 단계까지 {2000 - donationPoints}P</p>
          </div>
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden mb-4">
            <div
              className="h-full bg-gradient-to-r from-[rgb(52,168,130)] to-[rgb(135,206,235)] rounded-full transition-all"
              style={{ width: `${treeGrowth}%` }}
            />
          </div>
          <Button className="w-full h-10 bg-gradient-to-r from-[rgb(52,168,130)] to-[rgb(135,206,235)] text-white font-semibold rounded-xl shimmer">
            <Heart className="w-4 h-4 mr-2" />
            기부하기
          </Button>
        </GlassCard>
      </div>

      {/* Recent wishes */}
      <div className="px-6 pb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-800">최근 소원</h3>
          <button className="text-sm text-[rgb(52,168,130)] hover:underline">전체보기</button>
        </div>
        <div className="space-y-3">
          {recentWishes.map((wish) => (
            <GlassCard key={wish.id} className="p-4 hover:glow-emerald transition-all cursor-pointer">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-gray-700 mb-2 leading-relaxed">{wish.text}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Sparkles className="w-3 h-3" />
                    <span>{wish.location}</span>
                    <span>·</span>
                    <span>{wish.date}</span>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  )
}
