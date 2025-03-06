"use client"

import { LogoutButton } from "@/components/logout-button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {

  return (
    <div className="flex h-screen flex-col">
      <header className="absolute flex w-full justify-end p-2">
        <ThemeToggle />
        <LogoutButton />
      </header>

      <div className="flex flex-grow items-center justify-center">
        <h1 className="text-2xl">Welcome back</h1>
      </div>
    </div>
  )
}