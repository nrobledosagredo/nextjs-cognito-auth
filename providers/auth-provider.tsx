"use client"

import { createContext, useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { getCurrentUser } from "aws-amplify/auth"

interface AuthContextProps {
  isAuthenticated: boolean
  isLoading: boolean
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await getCurrentUser()
        setIsAuthenticated(true)

        if (pathname.startsWith("/auth/")) {
          router.replace("/")
        }
      } catch (err) {
        if (
          err instanceof Error &&
          err.name !== "UserUnAuthenticatedException"
        ) {
          console.error(err)
        }

        if (!pathname.startsWith("/auth/")) {
          router.replace("/auth/login")
        }
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [router, pathname])

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}
