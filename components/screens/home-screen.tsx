"use client"

import { useState } from "react"
import { MapPin, Sparkles, Eye, ChevronRight } from "lucide-react"
import GlassCard from "@/components/glass-card"
import CategoryFilter from "@/components/category-filter"
import ParticleEffect from "@/components/particle-effect"
import SpaceDetailModal from "@/components/space-detail-modal"

interface HomeScreenProps {
  onNavigate?: (tab: "explore" | "wish-community", spaceId?: number, view?: "wishes" | "reviews") => void
}

export default function HomeScreen({ onNavigate }: HomeScreenProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedSpace, setSelectedSpace] = useState<number | null>(null)

  const locations = [
    {
      id: 1,
      name: "판교테크노밸리",
      category: "문화산업",
      lat: 37.4,
      lng: 127.1,
      description: "첨단 기술과 문화가 만나는 혁신의 공간",
      spirits: ["기술의 정령", "혁신의 정령", "???"],
      wishCount: 127,
    },
    {
      id: 2,
      name: "탄천",
      category: "생태·과학",
      lat: 37.39,
      lng: 127.11,
      description: "자연과 도시가 공존하는 생명의 물길",
      spirits: ["물의 정령", "자연의 정령"],
      wishCount: 89,
    },
    {
      id: 3,
      name: "성남아트센터",
      category: "공연예술",
      lat: 37.38,
      lng: 127.12,
      description: "예술과 감동이 살아 숨쉬는 문화의 전당",
      spirits: ["음악의 정령", "???", "???"],
      wishCount: 203,
    },
  ]

  const handleSpaceClick = (spaceId: number) => {
    console.log("Space clicked:", spaceId)
    setSelectedSpace(spaceId)
  }

  const selectedSpaceData = selectedSpace ? locations.find((l) => l.id === selectedSpace) : null
  console.log("Selected space data:", selectedSpaceData)

  return (
    <div className="min-h-screen relative">
      <ParticleEffect />

      {/* Header */}
      <header className="px-6 pt-12 pb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 text-balance">다 이루어질지니</h1>
        <p className="text-lg text-gray-600">정령과의 약속</p>
      </header>

      {/* Map area */}
      <div className="px-6 mb-6">
        <GlassCard className="h-[300px] relative overflow-hidden">
          {/* Simplified map visualization */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-sky-50">
            {locations.map((location) => (
              <div
                key={location.id}
                className="absolute w-12 h-12 rounded-full bg-[rgb(52,168,130)] glow-emerald flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
                style={{
                  left: `${(location.lng - 127) * 500}%`,
                  top: `${(37.4 - location.lat) * 500}%`,
                }}
                onClick={() => handleSpaceClick(location.id)}
              >
                <MapPin className="w-6 h-6 text-white" />
              </div>
            ))}
          </div>

          {/* Map overlay text */}
          <div className="absolute top-4 left-4 glass-dark px-4 py-2 rounded-full">
            <p className="text-white text-sm font-medium">성남시 문화 공간</p>
          </div>
        </GlassCard>
      </div>

      {/* Category filters */}
      <div className="px-6 mb-6">
        <CategoryFilter selected={selectedCategory} onSelect={setSelectedCategory} />
      </div>

      {/* Location list */}
      <div className="px-6 space-y-3 mb-6">
        {locations.map((location) => (
          <GlassCard
            key={location.id}
            className="p-4 hover:glow-emerald hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            onClick={() => handleSpaceClick(location.id)}
          >
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">{location.name}</h3>
                <p className="text-sm text-gray-600">{location.category}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                {location.spirits.length}개 정령
              </span>
              <span className="flex items-center gap-1">
                <Eye className="w-3 h-3" />
                {location.wishCount}개 소원
              </span>
            </div>
          </GlassCard>
        ))}
      </div>

      {selectedSpaceData && (
        <SpaceDetailModal
          space={selectedSpaceData}
          onClose={() => {
            console.log("Closing modal")
            setSelectedSpace(null)
          }}
          onExplore={() => {
            console.log("Explore button clicked")
            setSelectedSpace(null)
            onNavigate?.("explore", selectedSpace!)
          }}
          onViewWishes={() => {
            console.log("View wishes button clicked")
            setSelectedSpace(null)
            onNavigate?.("wish-community", selectedSpace!, "wishes")
          }}
          onViewReviews={() => {
            console.log("View reviews button clicked")
            setSelectedSpace(null)
            onNavigate?.("wish-community", selectedSpace!, "reviews")
          }}
        />
      )}
    </div>
  )
}
