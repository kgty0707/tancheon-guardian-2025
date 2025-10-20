import type React from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps {
  children: React.ReactNode
  className?: string
}

export default function GlassCard({ children, className }: GlassCardProps) {
  return <div className={cn("glass rounded-2xl shadow-lg", className)}>{children}</div>
}
