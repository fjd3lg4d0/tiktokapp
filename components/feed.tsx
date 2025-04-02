"use client"

import type React from "react"

import { useState, useRef } from "react"
import { IonContent, IonPage, IonRefresher, IonRefresherContent } from "@ionic/react"
import type { RefresherEventDetail } from "@ionic/core"
import { useHistory } from "react-router-dom"
import VideoCard from "./video-card"
import { sampleProducts } from "@/data/sample-data"

export default function Feed() {
  const [products, setProducts] = useState(sampleProducts)
  const [activeIndex, setActiveIndex] = useState(0)
  const history = useHistory()
  const videoRefs = useRef<HTMLVideoElement[]>([])

  const handleRefresh = (event: CustomEvent<RefresherEventDetail>) => {
    setTimeout(() => {
      // In a real app, you would fetch new data here
      event.detail.complete()
    }, 1500)
  }

  const handleScroll = (e: React.UIEvent<HTMLIonContentElement>) => {
    const content = e.target as HTMLElement
    const scrollTop = content.scrollTop
    const height = window.innerHeight
    const newIndex = Math.floor(scrollTop / height)

    if (newIndex !== activeIndex) {
      // Pause all videos
      videoRefs.current.forEach((video) => {
        if (video) video.pause()
      })

      // Play the active video
      if (videoRefs.current[newIndex]) {
        videoRefs.current[newIndex].play()
      }

      setActiveIndex(newIndex)
    }
  }

  const handleVideoRef = (element: HTMLVideoElement | null, index: number) => {
    if (element) {
      videoRefs.current[index] = element
      if (index === activeIndex) {
        element.play()
      }
    }
  }

  const handleProductClick = (id: string) => {
    history.push(`/product/${id}`)
  }

  return (
    <IonPage>
      <IonContent fullscreen scrollEvents={true} onIonScroll={handleScroll}>
        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <div className="video-feed">
          {products.map((product, index) => (
            <VideoCard
              key={product.id}
              product={product}
              active={index === activeIndex}
              onVideoRef={(el) => handleVideoRef(el, index)}
              onClick={() => handleProductClick(product.id)}
            />
          ))}
        </div>
      </IonContent>
    </IonPage>
  )
}

