"use client"

import { useState } from "react"
import { Camera, MapPin, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import GlassCard from "@/components/glass-card"
import ParticleEffect from "@/components/particle-effect"
import AREncounter from "@/components/ar-encounter"
import WishInput from "@/components/wish-input"

type ExperienceStep = "ar" | "photo" | "wish" | "complete"

export default function ExperienceScreen() {
  const [step, setStep] = useState<ExperienceStep>("ar")
  const [photo, setPhoto] = useState<string | null>(null)

  const handlePhotoCapture = () => {
    // Simulate photo capture
    setPhoto("/cultural-space-photo.jpg")
    setTimeout(() => setStep("wish"), 1000)
  }

  const handleWishSubmit = () => {
    setStep("complete")
  }

  if (step === "ar") {
    return <AREncounter onNext={() => setStep("photo")} />
  }

  if (step === "wish") {
    return <WishInput onSubmit={handleWishSubmit} />
  }

  if (step === "complete") {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 relative">
        <ParticleEffect />
        <GlassCard className="p-8 text-center">
          <div className="w-20 h-20 rounded-full bg-[rgb(52,168,130)] glow-emerald flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">꿈꾸면 이루어질지니</h2>
          <p className="text-gray-600 mb-8">당신의 소원이 전해졌습니다</p>
          <Button onClick={() => setStep("ar")} className="w-full bg-[rgb(52,168,130)] hover:bg-[rgb(52,168,130)]/90">
            새로운 탐험 시작
          </Button>
        </GlassCard>
      </div>
    )
  }

  // Photo capture step
  return (
    <div className="min-h-screen relative">
      <ParticleEffect />

      {/* Header */}
      <header className="px-6 pt-12 pb-6">
        <h2 className="text-2xl font-bold text-gray-300 mb-2">체험 인증하기</h2>
        <p className="text-gray-600">이 순간을 기록해주세요</p>
      </header>

      {/* Camera preview */}
      <div className="px-6 mb-6">
        <GlassCard className="aspect-[3/4] relative overflow-hidden">
          {photo ? (
            <img src={photo || "/placeholder.svg"} alt="Captured" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <Camera className="w-16 h-16 text-gray-400" />
            </div>
          )}

          {/* GPS indicator */}
          <div className="absolute top-4 right-4 glass-dark px-3 py-2 rounded-full flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[rgb(52,168,130)]" />
            <span className="text-white text-sm">GPS 확인됨</span>
          </div>
        </GlassCard>
      </div>

      {/* Capture button */}
      <div className="px-6">
        <Button
          onClick={handlePhotoCapture}
          className="w-full h-14 bg-gradient-to-r from-[rgb(52,168,130)] to-[rgb(135,206,235)] text-white text-lg font-semibold rounded-2xl"
        >
          <Camera className="w-5 h-5 mr-2" />
          {photo ? "다음 단계로" : "사진 촬영"}
        </Button>
      </div>

      {photo && (
        <div className="px-6 mt-6">
          <GlassCard className="p-4">
            <p className="text-center text-gray-700">
              당신의 발자취가 이곳에 새겨졌어요.
              <br />
              이제 마음을 전해볼까요?
            </p>
          </GlassCard>
        </div>
      )}
    </div>
  )
}
