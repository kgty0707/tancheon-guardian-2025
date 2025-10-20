"use client"

import { ArrowLeft, Sparkles, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import GlassCard from "@/components/glass-card"

interface Spirit {
  id: number
  name: string
  location: string
  category: string
  wishes: number
  energy: string
  unlocked: boolean
  image: string
  story: string
}

interface SpiritDetailProps {
  spirit: Spirit
  onBack: () => void
}

export default function SpiritDetail({ spirit, onBack }: SpiritDetailProps) {
  const userPhotos = ["/cultural-space-photo-1.jpg", "/cultural-space-photo-2.jpg", "/cultural-space-photo-3.jpg"]

  return (
    <div className="min-h-screen relative">
      {/* Header */}
      <header className="px-6 pt-12 pb-6 flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={onBack} className="rounded-full">
          <ArrowLeft className="w-6 h-6" />
        </Button>
        <h2 className="text-2xl font-bold text-gray-800">정령 상세</h2>
      </header>

      {/* Spirit image */}
      <div className="px-6 mb-6">
        <GlassCard className="aspect-square relative overflow-hidden">
          <img src={spirit.image || "/placeholder.svg"} alt={spirit.name} className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
            <h3 className="text-2xl font-bold text-white mb-2">{spirit.name}</h3>
            <p className="text-white/90">{spirit.location}</p>
          </div>
        </GlassCard>
      </div>

      {/* Stats */}
      <div className="px-6 mb-6">
        <GlassCard className="p-6">
          <div className="flex items-center justify-around">
            <div className="text-center">
              <div className="text-2xl font-bold text-[rgb(52,168,130)] mb-1">{spirit.wishes}</div>
              <div className="text-sm text-gray-600">소원 수</div>
            </div>
            <div className="w-px h-12 bg-gray-300" />
            <div className="text-center">
              <div className="text-2xl font-bold text-[rgb(212,175,55)] mb-1">{spirit.energy}</div>
              <div className="text-sm text-gray-600">에너지 등급</div>
            </div>
            <div className="w-px h-12 bg-gray-300" />
            <div className="text-center">
              <div className="text-2xl font-bold text-[rgb(135,206,235)] mb-1">{userPhotos.length}</div>
              <div className="text-sm text-gray-600">내 사진</div>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Story */}
      <div className="px-6 mb-6">
        <GlassCard className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-[rgb(52,168,130)]" />
            <h4 className="font-semibold text-gray-800">정령의 이야기</h4>
          </div>
          <p className="text-gray-700 leading-relaxed">{spirit.story}</p>
        </GlassCard>
      </div>

      {/* User photos */}
      <div className="px-6 pb-8">
        <GlassCard className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Camera className="w-5 h-5 text-[rgb(52,168,130)]" />
            <h4 className="font-semibold text-gray-800">나의 체험 사진</h4>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {userPhotos.map((photo, index) => (
              <div key={index} className="aspect-square rounded-xl overflow-hidden">
                <img
                  src={photo || "/placeholder.svg"}
                  alt={`Photo ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  )
}
