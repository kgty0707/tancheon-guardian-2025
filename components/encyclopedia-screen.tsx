"use client"

import { Search, MapPin, Sparkles, Lock } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function EncyclopediaScreen() {
  const spirits = [
    { id: 1, name: "물의 정령", location: "탄천 중앙공원", unlocked: true, level: 3 },
    { id: 2, name: "버드나무 수호자", location: "탄천 산책로", unlocked: true, level: 2 },
    { id: 3, name: "바람의 정령", location: "탄천 습지", unlocked: true, level: 4 },
    { id: 4, name: "대지의 수호자", location: "???", unlocked: false, level: 0 },
    { id: 5, name: "하늘의 정령", location: "???", unlocked: false, level: 0 },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-white p-6 pb-8 rounded-b-3xl">
        <h1 className="text-2xl font-bold mb-4">정령 도감</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
          <Input
            placeholder="정령 이름 검색..."
            className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/60"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="px-6 -mt-4 mb-6">
        <Card className="p-4 shadow-lg">
          <div className="flex items-center justify-around">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">3</div>
              <div className="text-xs text-muted-foreground">만난 정령</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">12</div>
              <div className="text-xs text-muted-foreground">전체 정령</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">25%</div>
              <div className="text-xs text-muted-foreground">수집률</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Spirit List */}
      <div className="px-6 space-y-4">
        {spirits.map((spirit) => (
          <Card
            key={spirit.id}
            className={`p-4 ${
              spirit.unlocked ? "bg-gradient-to-br from-white to-primary/5" : "bg-surface-secondary opacity-60"
            }`}
          >
            <div className="flex items-center gap-4">
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center ${
                  spirit.unlocked ? "bg-primary/10" : "bg-muted/20"
                }`}
              >
                {spirit.unlocked ? (
                  <Sparkles className="w-8 h-8 text-primary" />
                ) : (
                  <Lock className="w-8 h-8 text-muted" />
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-foreground mb-1">{spirit.name}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{spirit.location}</span>
                </div>
                {spirit.unlocked && (
                  <div className="mt-2">
                    <span className="text-xs bg-accent/20 text-secondary px-2 py-1 rounded-full">
                      레벨 {spirit.level}
                    </span>
                  </div>
                )}
              </div>
              {spirit.unlocked && (
                <div className="text-right">
                  <div className="text-xs text-muted-foreground mb-1">친밀도</div>
                  <div className="w-20 bg-surface-secondary rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full" style={{ width: `${spirit.level * 25}%` }} />
                  </div>
                </div>
              )}
            </div>

            {spirit.unlocked && (
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  탄천의 {spirit.name.includes("물") ? "맑은 물" : "자연"}을 지키는 수호자입니다.
                </p>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  )
}
