"use client"

import { MapPin, Camera, Sparkles, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface HomeScreenProps {
  onNavigate: (screen: string) => void
  onSpiritSelect: (spirit: any) => void
}

export function HomeScreen({ onNavigate, onSpiritSelect }: HomeScreenProps) {
  const nearbySpirits = [
    { id: 1, name: "물의 정령", distance: "50m", type: "water" },
    { id: 2, name: "버드나무 수호자", distance: "120m", type: "tree" },
  ]

  const handleSpiritClick = (spirit: any) => {
    onSpiritSelect(spirit)
    onNavigate("ar-camera")
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-primary text-white p-6 pb-8 rounded-b-3xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold mb-1">탄천, 신들의 정원</h1>
            <p className="text-sm text-accent-light">수호자 레벨 5</p>
          </div>
          <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
            <Award className="w-5 h-5" />
            <span className="font-semibold">1,250P</span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3">
          <Card className="bg-white/10 border-white/20 p-3 text-center backdrop-blur">
            <div className="text-2xl font-bold">12</div>
            <div className="text-xs text-accent-light">만난 정령</div>
          </Card>
          <Card className="bg-white/10 border-white/20 p-3 text-center backdrop-blur">
            <div className="text-2xl font-bold">28</div>
            <div className="text-xs text-accent-light">완료 퀘스트</div>
          </Card>
          <Card className="bg-white/10 border-white/20 p-3 text-center backdrop-blur">
            <div className="text-2xl font-bold">5.2km</div>
            <div className="text-xs text-accent-light">탐험 거리</div>
          </Card>
        </div>
      </div>

      {/* Map Preview */}
      <div className="px-6 -mt-4">
        <Card className="overflow-hidden shadow-lg">
          <div className="relative h-64 bg-surface-secondary">
            <img src="/tancheon-stream-map-with-nature.jpg" alt="탄천 지도" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

            {/* Spirit Markers */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2">
              <div className="relative">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center animate-pulse shadow-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-white" />
              </div>
            </div>

            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
              <div className="bg-white/90 backdrop-blur px-3 py-2 rounded-full flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">현재 위치: 탄천 중앙공원</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* AR Camera Button */}
      <div className="px-6 mt-6">
        <Button
          onClick={() => onNavigate("ar-camera")}
          className="w-full h-16 bg-accent hover:bg-accent-light text-primary font-bold text-lg rounded-2xl shadow-lg"
        >
          <Camera className="w-6 h-6 mr-2" />
          AR 카메라 시작하기
        </Button>
      </div>

      {/* Nearby Spirits */}
      <div className="px-6 mt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-foreground">근처의 정령들</h2>
          <Sparkles className="w-5 h-5 text-accent" />
        </div>

        <div className="space-y-3">
          {nearbySpirits.map((spirit) => (
            <Card
              key={spirit.id}
              className="p-4 cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => handleSpiritClick(spirit)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{spirit.name}</h3>
                    <p className="text-sm text-muted-foreground">{spirit.distance} 거리</p>
                  </div>
                </div>
                <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Active Quests */}
      <div className="px-6 mt-8 mb-6">
        <h2 className="text-xl font-bold text-foreground mb-4">진행 중인 퀘스트</h2>
        <Card className="p-4 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="font-semibold text-foreground mb-1">탄천 정화 미션</h3>
              <p className="text-sm text-muted-foreground">쓰레기 10개 수거하기</p>
            </div>
            <span className="text-xs bg-accent text-white px-2 py-1 rounded-full">진행중</span>
          </div>
          <div className="w-full bg-surface-secondary rounded-full h-2">
            <div className="bg-accent h-2 rounded-full" style={{ width: "70%" }} />
          </div>
          <p className="text-xs text-muted-foreground mt-2">7/10 완료</p>
        </Card>
      </div>
    </div>
  )
}
