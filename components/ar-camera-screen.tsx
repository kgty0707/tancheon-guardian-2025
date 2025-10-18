"use client"

import { X, Sparkles, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface ARCameraScreenProps {
  spirit: any
  onBack: () => void
  onQuestAccept: () => void
}

export function ARCameraScreen({ spirit, onBack, onQuestAccept }: ARCameraScreenProps) {
  return (
    <div className="fixed inset-0 bg-black z-50">
      {/* Camera View */}
      <div className="relative h-full w-full">
        <img src="/tancheon-stream-nature-view.jpg" alt="AR Camera View" className="w-full h-full object-cover" />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

        {/* Top Bar */}
        <div className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            className="bg-black/40 backdrop-blur text-white hover:bg-black/60"
          >
            <X className="w-6 h-6" />
          </Button>
          <div className="bg-black/40 backdrop-blur px-4 py-2 rounded-full text-white text-sm">AR 모드</div>
          <Button variant="ghost" size="icon" className="bg-black/40 backdrop-blur text-white hover:bg-black/60">
            <Info className="w-6 h-6" />
          </Button>
        </div>

        {/* Spirit Character (Center) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="w-48 h-48 bg-accent/20 rounded-full flex items-center justify-center backdrop-blur-sm border-4 border-accent/40 animate-pulse">
              <Sparkles className="w-24 h-24 text-accent" />
            </div>
            {/* Floating particles effect */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent-light rounded-full animate-bounce" />
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-accent rounded-full animate-bounce delay-100" />
          </div>
        </div>

        {/* Spirit Info Card */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <Card className="bg-white/95 backdrop-blur p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-foreground mb-1">{spirit?.name || "물의 정령"}</h2>
                <p className="text-sm text-muted-foreground mb-3">탄천의 맑은 물을 지키는 수호자</p>
                <div className="flex gap-2">
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">물 속성</span>
                  <span className="text-xs bg-accent/10 text-secondary px-3 py-1 rounded-full">레벨 3</span>
                </div>
              </div>
            </div>

            <div className="bg-surface-secondary p-4 rounded-xl mb-4">
              <p className="text-sm text-foreground leading-relaxed">
                "안녕하세요, 수호자님. 탄천의 물이 오염되고 있어요. 함께 강을 깨끗하게 만들어주시겠어요?"
              </p>
            </div>

            <Button
              onClick={onQuestAccept}
              className="w-full h-14 bg-primary hover:bg-primary-hover text-white font-bold text-lg rounded-xl"
            >
              퀘스트 수락하기
            </Button>
          </Card>
        </div>

        {/* Scan indicator */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-64 h-64 border-2 border-accent/50 rounded-lg">
          <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-accent" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-accent" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-accent" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-accent" />
        </div>
      </div>
    </div>
  )
}
