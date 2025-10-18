"use client"
import { Card } from "@/components/ui/card"

export function RankingScreen() {
  const rankings = [
    { rank: 1, name: "자연지킴이", points: 5420, badge: "전설의 수호자", avatar: "🌟" },
    { rank: 2, name: "탄천러버", points: 4890, badge: "마스터 수호자", avatar: "🌊" },
    { rank: 3, name: "에코워리어", points: 4320, badge: "마스터 수호자", avatar: "🌿" },
    { rank: 4, name: "그린히어로", points: 3850, badge: "엘리트 수호자", avatar: "🍃" },
    { rank: 5, name: "당신", points: 1250, badge: "초보 수호자", avatar: "🌱", isCurrentUser: true },
  ]

  const badges = [
    { name: "플로깅 마스터", icon: "🏆", unlocked: true },
    { name: "생태 박사", icon: "🔬", unlocked: true },
    { name: "역사 전문가", icon: "📚", unlocked: false },
    { name: "환경 수호자", icon: "🛡️", unlocked: true },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-white p-6 pb-8 rounded-b-3xl">
        <h1 className="text-2xl font-bold mb-6">랭킹 & 뱃지</h1>

        {/* Current User Rank Card */}
        <Card className="bg-white/10 backdrop-blur border-white/20 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-2xl">🌱</div>
              <div>
                <div className="font-bold text-lg">5위</div>
                <div className="text-sm text-accent-light">초보 수호자</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">1,250</div>
              <div className="text-xs text-accent-light">포인트</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Ranking List */}
      <div className="px-6 mt-6">
        <h2 className="text-lg font-bold text-foreground mb-4">전체 랭킹</h2>
        <div className="space-y-3">
          {rankings.map((user) => (
            <Card
              key={user.rank}
              className={`p-4 ${
                user.isCurrentUser ? "bg-gradient-to-br from-accent/10 to-primary/10 border-accent" : ""
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-8 text-center">
                  {user.rank <= 3 ? (
                    <div className="text-2xl">{user.rank === 1 ? "🥇" : user.rank === 2 ? "🥈" : "🥉"}</div>
                  ) : (
                    <div className="text-lg font-bold text-muted-foreground">{user.rank}</div>
                  )}
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-2xl">
                  {user.avatar}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-foreground">{user.name}</div>
                  <div className="text-xs text-muted-foreground">{user.badge}</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-primary">{user.points.toLocaleString()}</div>
                  <div className="text-xs text-muted-foreground">포인트</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Badges Section */}
      <div className="px-6 mt-8 mb-6">
        <h2 className="text-lg font-bold text-foreground mb-4">획득한 뱃지</h2>
        <div className="grid grid-cols-2 gap-3">
          {badges.map((badge, idx) => (
            <Card
              key={idx}
              className={`p-4 text-center ${
                badge.unlocked ? "bg-gradient-to-br from-accent/10 to-primary/10" : "bg-surface-secondary opacity-50"
              }`}
            >
              <div className="text-4xl mb-2">{badge.icon}</div>
              <div className="text-sm font-medium text-foreground">{badge.name}</div>
              {!badge.unlocked && <div className="text-xs text-muted-foreground mt-1">잠김</div>}
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
