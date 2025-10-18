"use client"

import { useState } from "react"
import { ArrowLeft, Camera, MapPin, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface QuestScreenProps {
  onBack: () => void
}

export function QuestScreen({ onBack }: QuestScreenProps) {
  const [selectedTab, setSelectedTab] = useState<"environment" | "ecology" | "history">("environment")

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-white p-6 pb-8 rounded-b-3xl">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="icon" onClick={onBack} className="text-white hover:bg-white/20">
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold">퀘스트 수행</h1>
            <p className="text-sm text-accent-light">물의 정령 미션</p>
          </div>
        </div>

        {/* Quest Tabs */}
        <div className="flex gap-2">
          <button
            onClick={() => setSelectedTab("environment")}
            className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all ${
              selectedTab === "environment" ? "bg-white text-primary" : "bg-white/20 text-white"
            }`}
          >
            환경 정화
          </button>
          <button
            onClick={() => setSelectedTab("ecology")}
            className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all ${
              selectedTab === "ecology" ? "bg-white text-primary" : "bg-white/20 text-white"
            }`}
          >
            생태 탐험
          </button>
          <button
            onClick={() => setSelectedTab("history")}
            className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all ${
              selectedTab === "history" ? "bg-white text-primary" : "bg-white/20 text-white"
            }`}
          >
            역사 퀴즈
          </button>
        </div>
      </div>

      <div className="px-6 mt-6">
        {selectedTab === "environment" && (
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-bold text-foreground mb-2">플로깅 미션</h3>
              <p className="text-sm text-muted-foreground mb-4">탄천 주변의 쓰레기를 주우며 환경을 보호하세요</p>

              <div className="bg-surface-secondary p-4 rounded-xl mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">진행 상황</span>
                  <span className="text-sm text-primary font-bold">7/10</span>
                </div>
                <div className="w-full bg-white rounded-full h-3">
                  <div className="bg-primary h-3 rounded-full transition-all" style={{ width: "70%" }} />
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 p-3 bg-success/10 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                  <span className="text-sm">플라스틱 병 수거 완료</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-success/10 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                  <span className="text-sm">비닐봉지 수거 완료</span>
                </div>
              </div>

              <Button className="w-full h-12 bg-accent hover:bg-accent-light text-primary font-semibold">
                <Camera className="w-5 h-5 mr-2" />
                사진 인증하기
              </Button>
            </Card>

            <Card className="p-4 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">GPS 기록 중</h4>
                  <p className="text-sm text-muted-foreground">이동 거리: 1.2km | 수거 지점: 7곳</p>
                </div>
              </div>
            </Card>
          </div>
        )}

        {selectedTab === "ecology" && (
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-bold text-foreground mb-2">생태 도감 채우기</h3>
              <p className="text-sm text-muted-foreground mb-4">탄천의 식물과 동물을 발견하고 기록하세요</p>

              <div className="bg-surface-secondary p-4 rounded-xl mb-4">
                <img
                  src="/plant-identification-camera-view.jpg"
                  alt="식물 인식"
                  className="w-full h-48 object-cover rounded-lg mb-3"
                />
                <p className="text-sm text-center text-muted-foreground">카메라로 식물을 비추면 자동으로 인식됩니다</p>
              </div>

              <Button className="w-full h-12 bg-primary hover:bg-primary-hover text-white font-semibold">
                <Camera className="w-5 h-5 mr-2" />
                식물 인식 시작
              </Button>
            </Card>

            <Card className="p-4">
              <h4 className="font-semibold text-foreground mb-3">최근 발견한 생물</h4>
              <div className="space-y-2">
                {["버드나무", "갈대", "왜가리"].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-2 bg-surface-secondary rounded-lg">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-lg">🌿</span>
                    </div>
                    <span className="text-sm font-medium">{item}</span>
                    <CheckCircle2 className="w-4 h-4 text-success ml-auto" />
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {selectedTab === "history" && (
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-bold text-foreground mb-2">탄천 역사 퀴즈</h3>
              <p className="text-sm text-muted-foreground mb-6">탄천의 역사와 문화를 배우며 포인트를 획득하세요</p>

              <div className="bg-surface-secondary p-6 rounded-xl mb-6">
                <p className="text-base font-medium text-foreground mb-4 leading-relaxed">
                  Q. 탄천의 총 길이는 얼마일까요?
                </p>
                <div className="space-y-3">
                  {["약 25km", "약 35km", "약 45km", "약 55km"].map((option, idx) => (
                    <button
                      key={idx}
                      className="w-full p-4 text-left bg-white rounded-lg hover:bg-primary/5 transition-colors border border-border"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <Button className="w-full h-12 bg-accent hover:bg-accent-light text-primary font-semibold">
                답변 제출하기
              </Button>
            </Card>

            <Card className="p-4 bg-gradient-to-br from-accent/10 to-primary/10">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">5/10</div>
                <p className="text-sm text-muted-foreground">정답 맞춘 문제</p>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
