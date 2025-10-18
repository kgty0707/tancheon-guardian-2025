"use client"

import { Heart, MessageCircle, Share2, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function CommunityScreen() {
  const posts = [
    {
      id: 1,
      user: "자연지킴이",
      avatar: "🌟",
      time: "2시간 전",
      content: "오늘 탄천에서 플로깅하며 만난 왜가리! 정말 아름다웠어요 🦢",
      image: "/heron-bird-at-tancheon-stream.jpg",
      likes: 42,
      comments: 8,
    },
    {
      id: 2,
      user: "탄천러버",
      avatar: "🌊",
      time: "5시간 전",
      content: "물의 정령 퀘스트 완료! 탄천이 점점 깨끗해지는 게 느껴져요 💧",
      image: "/clean-stream-water-nature.jpg",
      likes: 38,
      comments: 5,
    },
    {
      id: 3,
      user: "에코워리어",
      avatar: "🌿",
      time: "1일 전",
      content: "버드나무 수호자를 만났어요! 탄천의 역사를 배울 수 있어서 좋았습니다",
      image: "/willow-tree-by-stream.jpg",
      likes: 56,
      comments: 12,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-white p-6 pb-6 rounded-b-3xl">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">커뮤니티</h1>
          <Button size="icon" className="bg-accent hover:bg-accent-light text-primary">
            <Camera className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Posts */}
      <div className="px-6 mt-6 space-y-6 mb-6">
        {posts.map((post) => (
          <Card key={post.id} className="overflow-hidden">
            {/* Post Header */}
            <div className="p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-xl">
                {post.avatar}
              </div>
              <div className="flex-1">
                <div className="font-semibold text-foreground">{post.user}</div>
                <div className="text-xs text-muted-foreground">{post.time}</div>
              </div>
            </div>

            {/* Post Content */}
            <div className="px-4 pb-3">
              <p className="text-sm text-foreground leading-relaxed">{post.content}</p>
            </div>

            {/* Post Image */}
            <img src={post.image || "/placeholder.svg"} alt="Post" className="w-full h-64 object-cover" />

            {/* Post Actions */}
            <div className="p-4 flex items-center justify-between border-t border-border">
              <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Heart className="w-5 h-5" />
                <span className="text-sm font-medium">{post.likes}</span>
              </button>
              <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm font-medium">{post.comments}</span>
              </button>
              <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
