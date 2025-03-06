"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { signOut } from "aws-amplify/auth"
import { Loader2, LogOut } from "lucide-react"

import { Button } from "@/components/ui/button"

export function LogoutButton() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleLogout = async () => {
    setLoading(true)

    try {
      await signOut()
      router.push("/auth/login")
    } catch (err) {
      console.error("Error during sign out:", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button
      onClick={handleLogout}
      disabled={loading}
      variant="ghost"
      size="icon"
    >
      {loading ? (
        <Loader2 className="text-destructive animate-spin" />
      ) : (
        <LogOut className="text-destructive" />
      )}
    </Button>
  )
}
