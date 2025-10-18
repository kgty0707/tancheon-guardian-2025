"use client"

import { Coins, Heart, TrendingUp, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function PointsScreen() {
  const donationHistory = [
    { date: "2025.01.15", amount: 500, cause: "탄천 정화 사업" },
    { date: "2025.01.08", amount: 300, cause: "생태 복원 프로젝트" },
    { date: "2024.12.28", amount: 200, cause: "야생동물 보호" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-white p-6 pb-8 rounded-b-3xl">
        <h1 className="text-2xl font-bold mb-6">포인트 & 기부</h1>

        {/* Points Card */}
        <Card className="bg-white/10 backdrop-blur border-white/20 p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-sm text-accent-light mb-1">보유 포인트</div>
              <div className="text-4xl font-bold">1,250</div>
            </div>
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
              <Coins className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-accent-light">
            <TrendingUp className="w-4 h-4" />
            <span>이번 주 +320 포인트 획득</span>
          </div>
        </Card>
      </div>

      {/* Donation Section */}
      <div className="px-6 mt-6">
        <Card className="p-6 bg-gradient-to-br from-accent/10 to-primary/10 border-primary/20">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-foreground mb-1">환경 기금 기부하기</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                모은 포인트를 탄천 환경 개선 기금으로 기부하세요
              </p>
            </div>
          </div>

          <div className="space-y-3 mb-4">
            <button className="w-full p-4 bg-white rounded-xl text-left hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground">100 포인트 기부</span>
                <span className="text-sm text-muted-foreground">≈ 1,000원</span>
              </div>
            </button>
            <button className="w-full p-4 bg-white rounded-xl text-left hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground">500 포인트 기부</span>
                <span className="text-sm text-muted-foreground">≈ 5,000원</span>
              </div>
            </button>
            <button className="w-full p-4 bg-white rounded-xl text-left hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground">1,000 포인트 기부</span>
                <span className="text-sm text-muted-foreground">≈ 10,000원</span>
              </div>
            </button>
          </div>

          <Button className="w-full h-12 bg-primary hover:bg-primary-hover text-white font-semibold">
            <Gift className="w-5 h-5 mr-2" />
            기부하기
          </Button>
        </Card>
      </div>

      {/* Donation Impact */}
      <div className="px-6 mt-6">
        <Card className="p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">나의 기부 영향</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-surface-secondary rounded-xl">
              <div className="text-2xl font-bold text-primary">1,000P</div>
              <div className="text-xs text-muted-foreground mt-1">총 기부 포인트</div>
            </div>
            <div className="text-center p-4 bg-surface-secondary rounded-xl">
              <div className="text-2xl font-bold text-accent">3회</div>
              <div className="text-xs text-muted-foreground mt-1">기부 횟수</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Donation History */}
      <div className="px-6 mt-6 mb-6">
        <h2 className="text-lg font-bold text-foreground mb-4">기부 내역</h2>
        <div className="space-y-3">
          {donationHistory.map((donation, idx) => (
            <Card key={idx} className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-foreground">{donation.cause}</div>
                  <div className="text-xs text-muted-foreground mt-1">{donation.date}</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-primary">{donation.amount}P</div>
                  <div className="text-xs text-muted-foreground">≈ {(donation.amount * 10).toLocaleString()}원</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
