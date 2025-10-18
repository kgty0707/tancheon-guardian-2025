"use client"

import { Home, Book, Trophy, Coins, User } from "lucide-react"

interface BottomNavProps {
  currentScreen: string
  onNavigate: (screen: string) => void
}

export function BottomNav({ currentScreen, onNavigate }: BottomNavProps) {
  const navItems = [
    { id: "home", icon: Home, label: "홈" },
    { id: "encyclopedia", icon: Book, label: "도감" },
    { id: "ranking", icon: Trophy, label: "랭킹" },
    { id: "points", icon: Coins, label: "포인트" },
    { id: "profile", icon: User, label: "프로필" },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border">
      <div className="flex items-center justify-around px-2 py-3">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = currentScreen === item.id
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
                isActive ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
