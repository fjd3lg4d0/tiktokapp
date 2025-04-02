"use client"

import { useEffect, useRef } from "react"
import { IonIcon, IonButton } from "@ionic/react"
import { heart, chatbubble, share, pricetag } from "ionicons/icons"
import type { Product } from "@/types/product"

interface VideoCardProps {
  product: Product
  active: boolean
  onVideoRef: (element: HTMLVideoElement | null) => void
  onClick: () => void
}

export default function VideoCard({ product, active, onVideoRef, onClick }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      onVideoRef(videoRef.current)

      if (active) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
      }
    }
  }, [active, onVideoRef])

  return (
    <div className="video-card h-screen w-full relative">
      <video
        ref={videoRef}
        src={product.videoUrl}
        className="h-full w-full object-cover"
        loop
        muted
        playsInline
        onClick={onClick}
      />

      <div className="absolute bottom-0 left-0 p-4 w-full bg-gradient-to-t from-black/70 to-transparent text-white">
        <h3 className="text-xl font-bold mb-1">{product.title}</h3>
        <p className="text-sm mb-2">{product.description}</p>
        <div className="flex items-center">
          <span className="text-xl font-bold text-green-400">${product.price.toFixed(2)}</span>
          <IonButton
            size="small"
            color="light"
            className="ml-auto"
            onClick={(e) => {
              e.stopPropagation()
              onClick()
            }}
          >
            Buy Now
          </IonButton>
        </div>
      </div>

      <div className="absolute right-4 bottom-24 flex flex-col items-center space-y-4">
        <div className="action-button">
          <IonIcon icon={heart} className="text-2xl" />
          <span className="text-xs">{product.likes}</span>
        </div>
        <div className="action-button">
          <IonIcon icon={chatbubble} className="text-2xl" />
          <span className="text-xs">{product.comments}</span>
        </div>
        <div className="action-button">
          <IonIcon icon={share} className="text-2xl" />
          <span className="text-xs">Share</span>
        </div>
        <div className="action-button">
          <IonIcon icon={pricetag} className="text-2xl" />
          <span className="text-xs">${product.price}</span>
        </div>
      </div>

      <div className="absolute top-4 right-4 bg-black/50 px-2 py-1 rounded-full text-white text-xs">
        {product.condition}
      </div>
    </div>
  )
}

