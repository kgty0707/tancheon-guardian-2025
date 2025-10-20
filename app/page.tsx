"use client"

import { useState } from "react"
import HomeScreen from "@/components/screens/home-screen"
import ExploreScreen from "@/components/screens/explore-screen"
import CodexScreen from "@/components/screens/codex-screen"
import WishCommunityScreen from "@/components/screens/wish-community-screen"
import ProfileScreen from "@/components/screens/profile-screen"
import BottomNav from "@/components/bottom-nav"

export default function Page() {
  const [activeTab, setActiveTab] = useState<"home" | "explore" | "codex" | "wish-community" | "profile">("home")
  const [selectedSpaceId, setSelectedSpaceId] = useState<number | null>(null)
  const [wishCommunityView, setWishCommunityView] = useState<"wishes" | "reviews">("wishes")

  return (
    <div className="min-h-screen bg-[#f5f2ee] relative overflow-hidden">
      {/* Background gradient */}
      <div className="fixed inset-0 gradient-magical pointer-events-none" />

      {/* Main content */}
      <main className="relative z-10 pb-20">
        {activeTab === "home" && (
          <HomeScreen
            onNavigate={(tab, spaceId, view) => {
              setActiveTab(tab)
              if (spaceId) setSelectedSpaceId(spaceId)
              if (view) setWishCommunityView(view)
            }}
          />
        )}
        {activeTab === "explore" && <ExploreScreen />}
        {activeTab === "codex" && <CodexScreen />}
        {activeTab === "wish-community" && (
          <WishCommunityScreen
            selectedSpaceId={selectedSpaceId}
            initialView={wishCommunityView}
            onClearFilter={() => setSelectedSpaceId(null)}
          />
        )}
        {activeTab === "profile" && <ProfileScreen />}
      </main>

      {/* Bottom navigation */}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}
