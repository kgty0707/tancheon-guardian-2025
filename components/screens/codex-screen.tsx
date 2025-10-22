"use client"

import { useState } from "react"
import { Sparkles, Lock, Award } from "lucide-react"
import GlassCard from "@/components/glass-card"
import SpiritDetail from "@/components/spirit-detail"

export default function CodexScreen() {
  const [activeTab, setActiveTab] = useState<"codex" | "ranking">("codex")
  const [selectedSpirit, setSelectedSpirit] = useState<number | null>(null)

  const spirits = [
    {
      id: 1,
      name: "박물관의 정령",
      location: "탄천시 박물관",
      category: "인문·역사",
      wishes: 234,
      energy: "S",
      unlocked: true,
      image: "/nature-spirit-guardian-green.jpg",
      story: "역사를 따라 흐르는 나라를 지키는 정령입니다.",
    },
    {
      id: 2,
      name: "아트센터의 정령",
      location: "성남아트센터",
      category: "공연예술",
      wishes: 189,
      energy: "A",
      unlocked: true,
      image: "/art-spirit-guardian-blue.jpg",
      story: "예술과 창조의 영감을 불어넣는 정령입니다.",
    },
    {
      id: 3,
      name: "판교의 정령",
      location: "판교테크노밸리",
      category: "문화산업",
      wishes: 156,
      energy: "A",
      unlocked: true,
      image: "/tech-spirit-guardian-gold.jpg",
      story: "혁신과 미래를 향한 꿈을 응원하는 정령입니다.",
    },
    {
      id: 4,
      name: "???",
      location: "???",
      category: "???",
      wishes: 0,
      energy: "?",
      unlocked: false,
      image: "/mysterious-silhouette.png",
      story: "아직 만나지 못한 정령입니다.",
    },
  ]

  const rankings = [
    { rank: 1, name: "김정령", badge: "🌕", level: "성남의 현자", wishes: 342, experiences: 45 },
    { rank: 2, name: "이수호", badge: "🌸", level: "공간의 수호자", wishes: 289, experiences: 38 },
    { rank: 3, name: "박탐험", badge: "🌸", level: "공간의 수호자", wishes: 256, experiences: 32 },
    { rank: 4, name: "최소원", badge: "🌱", level: "초심자 정령사", wishes: 198, experiences: 24 },
    { rank: 5, name: "정문화", badge: "🌱", level: "초심자 정령사", wishes: 167, experiences: 19 },
  ]

  if (selectedSpirit) {
    const spirit = spirits.find((s) => s.id === selectedSpirit)
    if (spirit) {
      return <SpiritDetail spirit={spirit} onBack={() => setSelectedSpirit(null)} />
    }
  }

  return (
    <div className="min-h-screen relative">
      {/* Header */}
      <header className="px-6 pt-12 pb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">정령 도감</h2>
        <p className="text-gray-600">만난 정령들의 기록</p>
      </header>

      <div className="px-6 mb-6">
        <div className="glass rounded-2xl p-1 flex gap-1">
          <button
            onClick={() => setActiveTab("codex")}
            className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
              activeTab === "codex"
                ? "bg-gradient-to-r from-[rgb(52,168,130)] to-[rgb(135,206,235)] text-white"
                : "text-gray-600"
            }`}
          >
            정령 도감
          </button>
          <button
            onClick={() => setActiveTab("ranking")}
            className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
              activeTab === "ranking"
                ? "bg-gradient-to-r from-[rgb(52,168,130)] to-[rgb(135,206,235)] text-white"
                : "text-gray-600"
            }`}
          >
            정령사 랭킹
          </button>
        </div>
      </div>

      {activeTab === "codex" && (
        <>
          {/* Progress */}
          <div className="px-6 mb-6">
            <GlassCard className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-gray-700 font-medium">수집 진행도</span>
                <span className="text-[rgb(52,168,130)] font-bold">3 / 23</span>
              </div>
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[rgb(52,168,130)] to-[rgb(135,206,235)] rounded-full transition-all"
                  style={{ width: "13%" }}
                />
              </div>
            </GlassCard>
          </div>

          {/* Spirit grid */}
          <div className="px-6 pb-8">
            <div className="grid grid-cols-3 gap-3">
              {spirits.map((spirit) => (
                <button
                  key={spirit.id}
                  onClick={() => spirit.unlocked && setSelectedSpirit(spirit.id)}
                  className="text-left"
                >
                  <GlassCard
                    className={`p-3 hover:glow-emerald transition-all ${!spirit.unlocked ? "opacity-60" : ""}`}
                  >
                    <div className="aspect-square rounded-xl overflow-hidden mb-2 relative">
                      <img
                        src={spirit.image || "/placeholder.svg"}
                        alt={spirit.name}
                        className={`w-full h-full object-cover ${!spirit.unlocked ? "blur-sm" : ""}`}
                      />
                      {!spirit.unlocked && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                          <Lock className="w-6 h-6 text-white" />
                        </div>
                      )}
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-1 text-sm">{spirit.name}</h3>
                    <p className="text-xs text-gray-600 mb-2 truncate">{spirit.location}</p>
                    {spirit.unlocked && (
                      <div className="space-y-1">
                        <div className="flex items-center gap-1 text-xs text-gray-600">
                          <Sparkles className="w-3 h-3" />
                          <span>{spirit.wishes}</span>
                        </div>
                        <div
                          className={`px-2 py-0.5 rounded-full text-xs font-bold text-center ${
                            spirit.energy === "S"
                              ? "bg-[rgb(212,175,55)]/20 text-[rgb(212,175,55)]"
                              : "bg-[rgb(52,168,130)]/20 text-[rgb(52,168,130)]"
                          }`}
                        >
                          {spirit.energy}등급
                        </div>
                      </div>
                    )}
                  </GlassCard>
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      {activeTab === "ranking" && (
        <div className="px-6 pb-8">
          {/* Badge progression */}
          <GlassCard className="p-6 mb-6">
            <h3 className="text-sm font-semibold text-gray-700 mb-4">정령사 등급</h3>
            <div className="flex items-center justify-between">
              <div className="text-center flex-1">
                <div className="text-3xl mb-1">🌱</div>
                <p className="text-xs text-gray-600">초심자</p>
              </div>
              <div className="text-gray-400">→</div>
              <div className="text-center flex-1">
                <div className="text-3xl mb-1">🌸</div>
                <p className="text-xs text-gray-600">수호자</p>
              </div>
              <div className="text-gray-400">→</div>
              <div className="text-center flex-1">
                <div className="text-3xl mb-1">🌕</div>
                <p className="text-xs text-gray-600">현자</p>
              </div>
            </div>
          </GlassCard>

          {/* Leaderboard */}
          <div className="space-y-3">
            {rankings.map((user) => (
              <GlassCard key={user.rank} className="p-4">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      user.rank === 1
                        ? "bg-[rgb(212,175,55)]/20 text-[rgb(212,175,55)]"
                        : user.rank === 2
                          ? "bg-gray-300 text-gray-700"
                          : user.rank === 3
                            ? "bg-amber-700/20 text-amber-700"
                            : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {user.rank}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">{user.badge}</span>
                      <span className="font-semibold text-gray-800">{user.name}</span>
                    </div>
                    <p className="text-xs text-gray-600">{user.level}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-sm text-gray-700 mb-1">
                      <Sparkles className="w-3 h-3" />
                      <span>{user.wishes}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Award className="w-3 h-3" />
                      <span>{user.experiences}</span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
