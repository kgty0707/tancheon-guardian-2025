"use client"

import { useState } from "react"
import { HomeScreen } from "@/components/home-screen"
import { ARCameraScreen } from "@/components/ar-camera-screen"
import { QuestScreen } from "@/components/quest-screen"
import { EncyclopediaScreen } from "@/components/encyclopedia-screen"
import { RankingScreen } from "@/components/ranking-screen"
import { PointsScreen } from "@/components/points-screen"
import { CommunityScreen } from "@/components/community-screen"
import { ProfileScreen } from "@/components/profile-screen"
import { BottomNav } from "@/components/bottom-nav"

export default function TancheonApp() {
  const [currentScreen, setCurrentScreen] = useState<string>("home")
  const [selectedSpirit, setSelectedSpirit] = useState<any>(null)

  const renderScreen = () => {
    switch (currentScreen) {
      case "home":
        return <HomeScreen onNavigate={setCurrentScreen} onSpiritSelect={setSelectedSpirit} />
      case "ar-camera":
        return (
          <ARCameraScreen
            spirit={selectedSpirit}
            onBack={() => setCurrentScreen("home")}
            onQuestAccept={() => setCurrentScreen("quest")}
          />
        )
      case "quest":
        return <QuestScreen onBack={() => setCurrentScreen("home")} />
      case "encyclopedia":
        return <EncyclopediaScreen />
      case "ranking":
        return <RankingScreen />
      case "points":
        return <PointsScreen />
      case "community":
        return <CommunityScreen />
      case "profile":
        return <ProfileScreen />
      default:
        return <HomeScreen onNavigate={setCurrentScreen} onSpiritSelect={setSelectedSpirit} />
    }
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {renderScreen()}
      <BottomNav currentScreen={currentScreen} onNavigate={setCurrentScreen} />
    </div>
  )
}
