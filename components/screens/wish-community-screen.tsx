"use client"

import { useState, useEffect } from "react"
import { Heart, MessageSquare, Share2, Filter, X } from "lucide-react"
import GlassCard from "@/components/glass-card"
import ParticleEffect from "@/components/particle-effect"

interface WishCommunityScreenProps {
  selectedSpaceId?: number | null
  initialView?: "wishes" | "reviews"
  onClearFilter?: () => void
}

export default function WishCommunityScreen({
  selectedSpaceId,
  initialView = "wishes",
  onClearFilter,
}: WishCommunityScreenProps) {
  const [likedWishes, setLikedWishes] = useState<Set<number>>(new Set())
  const [view, setView] = useState<"wishes" | "reviews">(initialView)

  useEffect(() => {
    setView(initialView)
  }, [initialView])

  const locations = [
    { id: 1, name: "판교테크노밸리" },
    { id: 2, name: "탄천" },
    { id: 3, name: "성남아트센터" },
  ]

  const wishes = [
    {
      id: 1,
      text: "탄천이 더 깨끗해지고 많은 사람들이 찾는 곳이 되길...",
      spirit: "탄천의 정령",
      location: "탄천",
      locationId: 2,
      user: "김소원",
      likes: 42,
      comments: 8,
      emoji: "🌿",
      x: 30,
      y: 40,
    },
    {
      id: 2,
      text: "성남에서 더 많은 문화 공연이 열리길 바랍니다",
      spirit: "아트센터의 정령",
      location: "성남아트센터",
      locationId: 3,
      user: "이문화",
      likes: 38,
      comments: 5,
      emoji: "🎭",
      x: 60,
      y: 25,
    },
    {
      id: 3,
      text: "판교가 기술과 자연이 조화로운 공간이 되길",
      spirit: "판교의 정령",
      location: "판교테크노밸리",
      locationId: 1,
      user: "박미래",
      likes: 51,
      comments: 12,
      emoji: "💡",
      x: 75,
      y: 60,
    },
  ]

  const posts = [
    {
      id: 1,
      user: "김탐험",
      location: "탄천",
      locationId: 2,
      image: "/nature-river-path.jpg",
      caption: "오늘 탄천에서 자연의 정령을 만났어요! 정말 평화로운 순간이었습니다 🌿",
      likes: 89,
      comments: 15,
      time: "2시간 전",
    },
    {
      id: 2,
      user: "이예술",
      location: "성남아트센터",
      locationId: 3,
      image: "/art-center-performance-hall.jpg",
      caption: "아트센터의 정령과 함께한 특별한 체험 ✨",
      likes: 67,
      comments: 9,
      time: "5시간 전",
    },
  ]

  const filteredWishes = selectedSpaceId ? wishes.filter((w) => w.locationId === selectedSpaceId) : wishes

  const filteredPosts = selectedSpaceId ? posts.filter((p) => p.locationId === selectedSpaceId) : posts

  const selectedLocation = selectedSpaceId ? locations.find((l) => l.id === selectedSpaceId)?.name : null

  const handleLike = (wishId: number) => {
    setLikedWishes((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(wishId)) {
        newSet.delete(wishId)
      } else {
        newSet.add(wishId)
      }
      return newSet
    })
  }

  return (
    <div className="min-h-screen relative">
      <ParticleEffect />

      {/* Header */}
      <header className="px-6 pt-12 pb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">소원과 커뮤니티</h2>
        <p className="text-gray-600">함께 만드는 문화 공간</p>
      </header>

      {selectedLocation && (
        <div className="px-6 mb-4">
          <div className="glass px-4 py-2 rounded-full inline-flex items-center gap-2">
            <span className="text-sm text-gray-700">{selectedLocation} 필터링 중</span>
            <button
              onClick={onClearFilter}
              className="w-5 h-5 rounded-full bg-white/50 flex items-center justify-center hover:bg-white/80 transition-colors"
            >
              <X className="w-3 h-3 text-gray-600" />
            </button>
          </div>
        </div>
      )}

      {/* Wish Map */}
      <div className="px-6 mb-6">
        <GlassCard className="p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-800">소원 지도</h3>
            <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-[rgb(52,168,130)] transition-colors">
              <Filter className="w-4 h-4" />
              필터
            </button>
          </div>
          {/* Night sky map */}
          <div className="relative h-[200px] rounded-xl overflow-hidden bg-gradient-to-b from-indigo-900 via-purple-900 to-indigo-950">
            {filteredWishes.map((wish) => (
              <button key={wish.id} className="absolute group" style={{ left: `${wish.x}%`, top: `${wish.y}%` }}>
                <div
                  className={`w-3 h-3 rounded-full transition-all ${
                    likedWishes.has(wish.id) ? "bg-[rgb(212,175,55)] glow-gold scale-125" : "bg-white/80 glow-white"
                  }`}
                />
                {/* Tooltip on hover */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                  <div className="glass-dark px-3 py-2 rounded-lg whitespace-nowrap">
                    <p className="text-white text-xs mb-1">
                      {wish.emoji} {wish.spirit}
                    </p>
                    <p className="text-white/80 text-xs max-w-[150px] truncate">{wish.text}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </GlassCard>
      </div>

      <div className="px-6 mb-4">
        <div className="glass rounded-full p-1 inline-flex gap-1">
          <button
            onClick={() => setView("wishes")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              view === "wishes"
                ? "bg-gradient-to-r from-[rgb(52,168,130)] to-[rgb(135,206,235)] text-white"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            소원 보기
          </button>
          <button
            onClick={() => setView("reviews")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              view === "reviews"
                ? "bg-gradient-to-r from-[rgb(52,168,130)] to-[rgb(135,206,235)] text-white"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            리뷰 보기
          </button>
        </div>
      </div>

      {/* Community Feed */}
      <div className="px-6 pb-8">
        <h3 className="font-semibold text-gray-800 mb-4">{view === "wishes" ? "소원 피드" : "리뷰 피드"}</h3>
        <div className="space-y-4">
          {view === "wishes"
            ? // Wish cards
              filteredWishes.map((wish) => (
                <GlassCard key={wish.id} className="p-4">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[rgb(52,168,130)] to-[rgb(135,206,235)] flex items-center justify-center text-white font-semibold">
                      {wish.user[0]}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-gray-800">{wish.user}</span>
                        <span className="text-xs text-gray-500">· {wish.location}</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-2">{wish.text}</p>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <span className="text-lg">{wish.emoji}</span>
                        <span>{wish.spirit}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 pt-3 border-t border-white/30">
                    <button
                      onClick={() => handleLike(wish.id)}
                      className="flex items-center gap-1 text-sm text-gray-600 hover:text-red-500 transition-colors"
                    >
                      <Heart className={`w-4 h-4 ${likedWishes.has(wish.id) ? "fill-red-500 text-red-500" : ""}`} />
                      <span>{wish.likes + (likedWishes.has(wish.id) ? 1 : 0)}</span>
                    </button>
                    <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-[rgb(52,168,130)] transition-colors">
                      <MessageSquare className="w-4 h-4" />
                      <span>{wish.comments}</span>
                    </button>
                    <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-[rgb(52,168,130)] transition-colors ml-auto">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </GlassCard>
              ))
            : // Photo posts (reviews)
              filteredPosts.map((post) => (
                <GlassCard key={post.id} className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[rgb(52,168,130)] to-[rgb(135,206,235)] flex items-center justify-center text-white font-semibold">
                      {post.user[0]}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-800">{post.user}</span>
                        <span className="text-xs text-gray-500">· {post.time}</span>
                      </div>
                      <p className="text-xs text-gray-600">{post.location}</p>
                    </div>
                  </div>
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.caption}
                    className="w-full aspect-square object-cover rounded-xl mb-3"
                  />
                  <p className="text-gray-700 leading-relaxed mb-3">{post.caption}</p>
                  <div className="flex items-center gap-4 pt-3 border-t border-white/30">
                    <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-red-500 transition-colors">
                      <Heart className="w-4 h-4" />
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-[rgb(52,168,130)] transition-colors">
                      <MessageSquare className="w-4 h-4" />
                      <span>{post.comments}</span>
                    </button>
                    <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-[rgb(52,168,130)] transition-colors ml-auto">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </GlassCard>
              ))}
        </div>
      </div>
    </div>
  )
}
