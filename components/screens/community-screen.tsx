"use client"

import { Heart, MessageCircle, Share2, Sparkles } from "lucide-react"
import GlassCard from "@/components/glass-card"
import { Button } from "@/components/ui/button"

export default function CommunityScreen() {
  const posts = [
    {
      id: 1,
      user: "정령사_민지",
      avatar: "/diverse-user-avatars.png",
      content: "탄천에서 정령을 만났어요! 너무 신비로운 경험이었습니다 ✨",
      image: "/river-nature-scene.jpg",
      spirit: "탄천의 정령",
      tags: ["#소원의길", "#탄천정령", "#성남탐험"],
      likes: 42,
      comments: 8,
      time: "2시간 전",
    },
    {
      id: 2,
      user: "문화탐험가",
      avatar: "/diverse-user-avatar-set-2.png",
      content: "성남아트센터에서 소원을 빌었어요. 다 이루어질지니! 🌟",
      image: "/art-center-building.jpg",
      spirit: "아트센터의 정령",
      tags: ["#공연예술", "#소원"],
      likes: 28,
      comments: 5,
      time: "5시간 전",
    },
  ]

  return (
    <div className="min-h-screen relative">
      {/* Header */}
      <header className="px-6 pt-12 pb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">커뮤니티</h2>
        <p className="text-gray-600">시민들의 탐험 이야기</p>
      </header>

      {/* Posts feed */}
      <div className="px-6 space-y-4 pb-8">
        {posts.map((post) => (
          <GlassCard key={post.id} className="p-4">
            {/* User info */}
            <div className="flex items-center gap-3 mb-3">
              <img src={post.avatar || "/placeholder.svg"} alt={post.user} className="w-10 h-10 rounded-full" />
              <div className="flex-1">
                <p className="font-semibold text-gray-800">{post.user}</p>
                <p className="text-xs text-gray-500">{post.time}</p>
              </div>
              <div className="px-3 py-1 rounded-full bg-[rgb(52,168,130)]/20 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[rgb(52,168,130)]" />
                <span className="text-xs text-[rgb(52,168,130)] font-medium">{post.spirit}</span>
              </div>
            </div>

            {/* Content */}
            <p className="text-gray-700 mb-3">{post.content}</p>

            {/* Image */}
            <div className="rounded-xl overflow-hidden mb-3">
              <img src={post.image || "/placeholder.svg"} alt="Post" className="w-full h-48 object-cover" />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
              {post.tags.map((tag) => (
                <span key={tag} className="text-xs text-[rgb(52,168,130)] font-medium">
                  {tag}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-6 pt-3 border-t border-gray-200">
              <button className="flex items-center gap-2 text-gray-600 hover:text-[rgb(52,168,130)] transition-colors">
                <Heart className="w-5 h-5" />
                <span className="text-sm font-medium">{post.likes}</span>
              </button>
              <button className="flex items-center gap-2 text-gray-600 hover:text-[rgb(52,168,130)] transition-colors">
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm font-medium">{post.comments}</span>
              </button>
              <button className="flex items-center gap-2 text-gray-600 hover:text-[rgb(52,168,130)] transition-colors ml-auto">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Floating action button */}
      <Button className="fixed bottom-24 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-[rgb(52,168,130)] to-[rgb(135,206,235)] shadow-lg glow-emerald">
        <Sparkles className="w-6 h-6 text-white" />
      </Button>
    </div>
  )
}
