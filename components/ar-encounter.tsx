"use client"

import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import GlassCard from "@/components/glass-card"
import ParticleEffect from "@/components/particle-effect"

interface AREncounterProps {
  onNext: () => void
}

export default function AREncounter({ onNext }: AREncounterProps) {
  return (
    <div className="min-h-screen relative flex items-center justify-center px-6">
      <ParticleEffect />

      {/* Camera overlay simulation */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />

      {/* Spirit character */}
      <div className="relative z-10 text-center">
        <div className="w-48 h-48 mx-auto mb-8 relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[rgb(52,168,130)] to-[rgb(135,206,235)] glow-emerald animate-pulse" />
          <img
            src="/mystical-spirit-guardian-glowing.jpg"
            alt="Guardian Spirit"
            className="relative z-10 w-full h-full rounded-full object-cover"
          />
        </div>

        {/* Spirit message */}
        <GlassCard className="p-6 mb-8">
          <p className="text-gray-800 text-lg leading-relaxed text-balance">
            이곳의 생명은 당신의 눈으로
            <br />
            느껴질 때 깨어납니다.
          </p>
        </GlassCard>

        {/* Action button */}
        <Button
          onClick={onNext}
          className="w-full h-14 bg-gradient-to-r from-[rgb(52,168,130)] to-[rgb(135,206,235)] text-white text-lg font-semibold rounded-2xl shimmer"
        >
          <Sparkles className="w-5 h-5 mr-2" />
          체험 인증하기
        </Button>
      </div>
    </div>
  )
}
