"use client"

import { useState } from "react"
import { toast } from "sonner"
import { Check, ClipboardCopy, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ResultActionButtonsProps {
  link: string,
  size: "small" | "big"
}

export function ResultActionButtons({ link, size = "small" }: ResultActionButtonsProps) {
  const [copied, setCopied] = useState(false)
  const base = size == "small" ? "text-xs gap-1" : "text-sm gap-2"
  const iconSize = size == "small" ? "w-3 h-3" : "w-4 h-4"

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

    <div className="flex flex-start gap-2 my-1">
        <Button asChild>
          <Link href={link} target="_blank" >
            <ExternalLink className={base} size={16}/>
          店舗ページへ
          </Link>
      </Button>
      <Button
        onClick={handleCopy}
        variant="outline"
        className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition"
      >
        {copied ? (
          <>
            <Check className={iconSize + " text-green-500"}/>
            コピー済み
          </>
        ) : (
          <>
            <ClipboardCopy className={iconSize} />
            リンクをコピー
          </>
        )}
      </Button>
    </div>
  )
}
