"use client"

import { useState } from "react"
import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import GlassCard from "@/components/glass-card"
import ParticleEffect from "@/components/particle-effect"

interface WishInputProps {
  onSubmit: () => void
}

export default function WishInput({ onSubmit }: WishInputProps) {
  const [wish, setWish] = useState("")

  const handleSubmit = () => {
    if (wish.trim()) {
      // Sparkle animation would trigger here
      setTimeout(onSubmit, 1500)
    }
  }

  return (
    <div className="min-h-screen relative flex items-center justify-center px-6">
      <ParticleEffect />

      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[rgb(52,168,130)] to-[rgb(135,206,235)] glow-emerald flex items-center justify-center">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">소원 제안하기</h2>
          <p className="text-gray-600">이곳에서 이루어지길 바라는 일은?</p>
        </div>

        <GlassCard className="p-6 mb-6">
          <Textarea
            value={wish}
            onChange={(e) => setWish(e.target.value)}
            placeholder="당신의 소원을 적어주세요..."
            className="min-h-[150px] bg-transparent border-none resize-none text-gray-800 placeholder:text-gray-400 focus-visible:ring-0"
          />
        </GlassCard>

        <Button
          onClick={handleSubmit}
          disabled={!wish.trim()}
          className="w-full h-14 bg-gradient-to-r from-[rgb(52,168,130)] to-[rgb(135,206,235)] text-gray-800 text-lg font-semibold rounded-2xl shimmer disabled:opacity-50"
        >
          <Sparkles className="w-5 h-5 mr-2" />
          소원을 전하기
        </Button>
      </div>
    </div>
  )
}
