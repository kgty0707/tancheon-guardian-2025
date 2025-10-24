"use client"

import { useState } from "react"
import { Camera, MapPin, Sparkles, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import GlassCard from "@/components/glass-card"
import ParticleEffect from "@/components/particle-effect"

export default function ExploreScreen() {
  const [step, setStep] = useState<"ar" | "photo" | "wish" | "complete">("ar")
  const [wish, setWish] = useState("")

  const handlePhotoCapture = () => {
    setStep("wish")
  }

  const handleWishSubmit = () => {
    setStep("complete")
    setTimeout(() => {
      setStep("ar")
      setWish("")
    }, 3000)
  }

  return (
    <div className="min-h-screen relative">
      <ParticleEffect />

      {/* AR Encounter View */}
      {step === "ar" && (
        <div className="relative h-screen">
          {/* Camera overlay simulation */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-transparent">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                {/* Spirit visualization */}
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[rgb(52,168,130)]/30 to-[rgb(135,206,235)]/30 glow-emerald animate-pulse-slow flex items-center justify-center">
                  <Sparkles className="w-24 h-24 text-white" />
                </div>
                {/* Particle effects around spirit */}
                <div className="absolute inset-0 animate-spin-slow">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 rounded-full bg-[rgb(52,168,130)] glow-emerald"
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: `rotate(${i * 45}deg) translateY(-120px)`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Spirit message */}
          <div className="absolute top-24 left-6 right-6">
            <GlassCard className="p-4">
              <p className="text-center leading-relaxed">
                이곳의 생명은 당신의 눈으로 느껴질 때 깨어납니다.
              </p>
            </GlassCard>
          </div>

          {/* Location info */}
          <div className="absolute top-40 left-6 glass-dark px-4 py-2 rounded-full">
            <div className="flex items-center gap-2 text-white text-sm">
              <MapPin className="w-4 h-4" />
              <span>탄천 · 자연의 정령</span>
            </div>
          </div>

          {/* Capture button */}
          <div className="absolute bottom-32 left-0 right-0 px-6">
            <Button
              onClick={() => setStep("photo")}
              className="w-full h-14 bg-gradient-to-r from-[rgb(52,168,130)] to-[rgb(135,206,235)] text-white text-lg font-semibold rounded-2xl shimmer"
            >
              <Camera className="w-5 h-5 mr-2" />
              체험 인증하기
            </Button>
          </div>
        </div>
      )}

      {/* Photo Capture Step */}
      {step === "photo" && (
        <div className="min-h-screen flex flex-col items-center justify-center px-6">
          <ParticleEffect />
          <GlassCard className="w-full max-w-md p-6 text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[rgb(52,168,130)] to-[rgb(135,206,235)] flex items-center justify-center glow-emerald">
              <Check className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">체험이 인증되었어요</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              당신의 발자취가 이곳에 새겨졌어요.
              <br />
              이제 마음을 전해볼까요?
            </p>
            <Button
              onClick={handlePhotoCapture}
              className="w-full h-12 bg-gradient-to-r from-[rgb(52,168,130)] to-[rgb(135,206,235)] text-white font-semibold rounded-xl shimmer"
            >
              소원 빌기
            </Button>
          </GlassCard>
        </div>
      )}

      {/* Wish Input Step */}
      {step === "wish" && (
        <div className="min-h-screen flex flex-col items-center justify-center px-6">
          <ParticleEffect />
          <GlassCard className="w-full max-w-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">소원 제안하기</h2>
            <p className="text-gray-600 mb-6 text-center text-sm">이곳에서 이루어지길 바라는 일은?</p>
            <Textarea
              value={wish}
              onChange={(e) => setWish(e.target.value)}
              placeholder="당신의 소원을 적어주세요..."
              className="min-h-[120px] mb-4 glass border-white/30 rounded-xl resize-none"
            />
            <Button
              onClick={handleWishSubmit}
              disabled={!wish.trim()}
              className="w-full h-12 text-black bg-gradient-to-r from-[rgb(52,168,130)] to-[rgb(135,206,235)] font-semibold rounded-xl shimmer disabled:opacity-50"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              소원을 전하기
            </Button>
          </GlassCard>
        </div>
      )}

      {/* Complete Animation */}
      {step === "complete" && (
        <div className="min-h-screen flex flex-col items-center justify-center px-6">
          <ParticleEffect />
          <div className="text-center animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[rgb(52,168,130)] to-[rgb(135,206,235)] flex items-center justify-center glow-emerald animate-pulse-slow">
              <Sparkles className="w-16 h-16 text-white animate-spin-slow" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">꿈꾸면 이루어질지니</h2>
            <p className="text-gray-600">당신의 소원이 별이 되었습니다</p>
          </div>
        </div>
      )}
    </div>
  )
}
