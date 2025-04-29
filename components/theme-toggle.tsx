"use client"

import * as React from 'react'
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
    const { setTheme, resolvedTheme } = useTheme()

    return (
        <Button
            size="sm"
            variant="ghost"
            onClick={() => {
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }}
            className="rounded-full w-7 h-7"
        >
            {resolvedTheme === "dark" ? (
                <Sun className="dark:text-white size-4" />
            ) : (
                <Moon className="dark:text-white size-4" />
            )}
        </Button>
    )
}