"use client"

import { useState } from "react"
import { toast } from "sonner"
import { Check, ClipboardCopy, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ResultActionButtonsProps {
  link: string,
  size?: "default" | "sm" | "lg" | "icon"
}

export function ResultActionButtons({ link, size = "default" }: ResultActionButtonsProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(link)
      setCopied(true)
      toast.success("リンクをコピーしました")

      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Clipboard error:", err)
      toast.error("コピーに失敗しました。")
    }
  }

  return (
    <div className="flex items-center gap-2">
        <Button asChild size={size}>
          <Link href={link} target="_blank" className="flex items-center gap-2">
            <ExternalLink className="w-4 h-4"/>
            <span>店舗ページへ</span>
          </Link>
      </Button>
      <Button
        onClick={handleCopy}
        variant="outline"
        size={size}
        className="flex items-center gap-2"
      >
        {copied ? (
          <>
            <Check className="w-4 h-4 text-green-500"/>
            <span>コピー済み</span>
          </>
        ) : (
          <>
            <ClipboardCopy className="w-4 h-4" />
            <span>リンクをコピー</span>
          </>
        )}
      </Button>
    </div>
  )
}
