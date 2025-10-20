"use client"

import { X, Sparkles, Eye, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import GlassCard from "@/components/glass-card"
import Image from "next/image"

interface SpaceDetailModalProps {
  space: {
    id: number
    name: string
    category: string
    description: string
    spirits: string[]
    wishCount: number
  }
  onClose: () => void
  onExplore?: () => void
  onViewWishes?: () => void
  onViewReviews?: () => void
}

export default function SpaceDetailModal({
  space,
  onClose,
  onExplore,
  onViewWishes,
  onViewReviews,
}: SpaceDetailModalProps) {
  console.log("Modal rendered for space:", space.name)

  const collectedSpirits = space.spirits.filter((s) => s !== "???")
  const totalSpirits = space.spirits.length

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div className="w-full max-w-lg animate-slide-up" onClick={(e) => e.stopPropagation()}>
        <GlassCard className="rounded-t-3xl rounded-b-none p-6 max-h-[85vh] overflow-y-auto">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-1">{space.name}</h2>
              <p className="text-sm text-gray-600">{space.category}</p>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full glass flex items-center justify-center hover:bg-white/50 transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Space Image */}
          <div className="mb-6">
            <div className="relative h-48 rounded-2xl overflow-hidden">
              <Image
                src={space.id === 1 ? "/art-center-performance-hall.jpg" : "/nature-river-path.jpg"}
                alt={space.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-700 mb-6 leading-relaxed">{space.description}</p>

          {/* Spirits Section */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-gray-700">이곳의 정령들</h3>
              <span className="text-xs text-gray-500">
                {collectedSpirits.length}/{totalSpirits} 수집됨
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {space.spirits.map((spirit, index) => {
                const isCollected = spirit !== "???"
                return (
                  <div
                    key={index}
                    className={`glass p-3 rounded-xl text-center transition-all ${
                      isCollected ? "glow-emerald-subtle" : "opacity-50 grayscale"
                    }`}
                  >
                    <div
                      className={`w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center ${
                        isCollected ? "bg-gradient-to-br from-[rgb(52,168,130)] to-[rgb(135,206,235)]" : "bg-gray-300"
                      }`}
                    >
                      {isCollected ? (
                        <Sparkles className="w-6 h-6 text-white" />
                      ) : (
                        <span className="text-2xl text-gray-500">?</span>
                      )}
                    </div>
                    <p className={`text-xs font-medium ${isCollected ? "text-gray-700" : "text-gray-400"}`}>{spirit}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button
              onClick={onExplore}
              className="w-full h-12 bg-gradient-to-r from-[rgb(52,168,130)] to-[rgb(135,206,235)] text-white font-semibold rounded-xl shimmer hover:scale-105 transition-transform"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              탐험하기
            </Button>
            <div className="grid grid-cols-2 gap-3">
              <Button
                onClick={onViewWishes}
                variant="outline"
                className="h-12 glass border-white/30 rounded-xl bg-transparent hover:glow-sky transition-all"
              >
                <Eye className="w-4 h-4 mr-2" />
                소원 보기
              </Button>
              <Button
                onClick={onViewReviews}
                variant="outline"
                className="h-12 glass border-white/30 rounded-xl bg-transparent hover:glow-sky transition-all"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                리뷰 보기
              </Button>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  )
}
