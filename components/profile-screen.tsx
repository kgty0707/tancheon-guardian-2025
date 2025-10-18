"use client"

import { Settings, LogOut, ChevronRight, User, Bell, Shield, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function ProfileScreen() {
  const activities = [
    { date: "2025.01.18", activity: "물의 정령 퀘스트 완료", points: "+150P" },
    { date: "2025.01.17", activity: "플로깅 미션 완료", points: "+100P" },
    { date: "2025.01.16", activity: "생태 도감 3종 추가", points: "+75P" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-white p-6 pb-8 rounded-b-3xl">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">프로필</h1>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
            <Settings className="w-6 h-6" />
          </Button>
        </div>

        {/* Profile Card */}
        <Card className="bg-white/10 backdrop-blur border-white/20 p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-4xl">🌱</div>
            <div className="flex-1">
              <h2 className="text-xl font-bold mb-1">자연사랑</h2>
              <p className="text-sm text-accent-light">초보 수호자</p>
              <div className="mt-2 flex items-center gap-2">
                <div className="flex-1 bg-white/20 rounded-full h-2">
                  <div className="bg-accent h-2 rounded-full" style={{ width: "60%" }} />
                </div>
                <span className="text-xs">레벨 5</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/20">
            <div className="text-center">
              <div className="text-xl font-bold">12</div>
              <div className="text-xs text-accent-light">정령</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold">28</div>
              <div className="text-xs text-accent-light">퀘스트</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold">1,250</div>
              <div className="text-xs text-accent-light">포인트</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Settings Menu */}
      <div className="px-6 mt-6">
        <h2 className="text-lg font-bold text-foreground mb-4">설정</h2>
        <Card className="divide-y divide-border">
          <button className="w-full p-4 flex items-center justify-between hover:bg-surface-secondary transition-colors">
            <div className="flex items-center gap-3">
              <User className="w-5 h-5 text-muted-foreground" />
              <span className="font-medium text-foreground">계정 정보</span>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>
          <button className="w-full p-4 flex items-center justify-between hover:bg-surface-secondary transition-colors">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-muted-foreground" />
              <span className="font-medium text-foreground">알림 설정</span>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>
          <button className="w-full p-4 flex items-center justify-between hover:bg-surface-secondary transition-colors">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-muted-foreground" />
              <span className="font-medium text-foreground">개인정보 보호</span>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>
          <button className="w-full p-4 flex items-center justify-between hover:bg-surface-secondary transition-colors">
            <div className="flex items-center gap-3">
              <HelpCircle className="w-5 h-5 text-muted-foreground" />
              <span className="font-medium text-foreground">도움말</span>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>
        </Card>
      </div>

      {/* Activity History */}
      <div className="px-6 mt-6">
        <h2 className="text-lg font-bold text-foreground mb-4">최근 활동</h2>
        <div className="space-y-3">
          {activities.map((item, idx) => (
            <Card key={idx} className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-foreground">{item.activity}</div>
                  <div className="text-xs text-muted-foreground mt-1">{item.date}</div>
                </div>
                <div className="font-bold text-primary">{item.points}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Logout Button */}
      <div className="px-6 mt-6 mb-6">
        <Button variant="outline" className="w-full h-12 border-error text-error hover:bg-error/10 bg-transparent">
          <LogOut className="w-5 h-5 mr-2" />
          로그아웃
        </Button>
      </div>
    </div>
  )
}
