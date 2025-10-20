"use client"

import { Home, Compass, BookOpen, Sparkles, User } from "lucide-react"

interface BottomNavProps {
  activeTab: "home" | "explore" | "codex" | "wish-community" | "profile"
  onTabChange: (tab: "home" | "explore" | "codex" | "wish-community" | "profile") => void
}

export default function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const tabs = [
    { id: "home" as const, icon: Home, label: "홈" },
    { id: "explore" as const, icon: Compass, label: "탐험" },
    { id: "codex" as const, icon: BookOpen, label: "도감" },
    { id: "wish-community" as const, icon: Sparkles, label: "소원" },
    { id: "profile" as const, icon: User, label: "프로필" },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 glass border-t border-white/30 pb-safe">
      <div className="flex items-center justify-around px-2 py-3">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
                isActive ? "text-[rgb(52,168,130)] glow-emerald" : "text-gray-600 hover:text-[rgb(52,168,130)]"
              }`}
            >
              <Icon className={`w-6 h-6 ${isActive ? "animate-bounce-in" : ""}`} />
              <span className="text-xs font-medium">{tab.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
