"use client"

import { useState } from "react"
import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonButton,
  IonIcon,
  IonCard,
  IonCardContent,
  IonItem,
  IonLabel,
  IonAvatar,
  IonBadge,
  IonActionSheet,
} from "@ionic/react"
import { useParams } from "react-router-dom"
import { heart, chatbubble, share, cart, ellipsisHorizontal, flag } from "ionicons/icons"
import { sampleProducts } from "@/data/sample-data"

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>()
  const [showActions, setShowActions] = useState(false)
  const [liked, setLiked] = useState(false)

  // Find the product by ID
  const product = sampleProducts.find((p) => p.id === id)

  if (!product) {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/" />
            </IonButtons>
            <IonTitle>Product Not Found</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <p>Sorry, this product could not be found.</p>
        </IonContent>
      </IonPage>
    )
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Product Details</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => setShowActions(true)}>
              <IonIcon slot="icon-only" icon={ellipsisHorizontal} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="product-video-container">
          <video src={product.videoUrl} className="w-full h-64 object-cover" controls autoPlay loop />
        </div>

        <div className="ion-padding">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <div className="flex items-center justify-between my-2">
            <span className="text-2xl font-bold text-green-600">${product.price.toFixed(2)}</span>
            <IonBadge color="medium">{product.condition}</IonBadge>
          </div>

          <p className="my-4">{product.description}</p>

          <div className="flex justify-between my-4">
            <IonButton fill="clear" onClick={() => setLiked(!liked)}>
              <IonIcon slot="start" icon={heart} color={liked ? "danger" : "medium"} />
              {product.likes + (liked ? 1 : 0)}
            </IonButton>
            <IonButton fill="clear">
              <IonIcon slot="start" icon={chatbubble} />
              {product.comments}
            </IonButton>
            <IonButton fill="clear">
              <IonIcon slot="start" icon={share} />
              Share
            </IonButton>
          </div>

          <IonCard>
            <IonItem lines="none">
              <IonAvatar slot="start">
                <img src={product.seller.avatar || "/placeholder.svg"} alt={product.seller.name} />
              </IonAvatar>
              <IonLabel>
                <h2>{product.seller.name}</h2>
                <p>Seller • {product.seller.rating} ⭐</p>
              </IonLabel>
              <IonButton slot="end" fill="clear" size="small">
                View Profile
              </IonButton>
            </IonItem>
            <IonCardContent>
              <p className="text-sm text-gray-500">Member since {product.seller.memberSince}</p>
              <p className="text-sm text-gray-500">{product.seller.totalSales} items sold</p>
            </IonCardContent>
          </IonCard>

          <IonButton expand="block" className="my-4">
            <IonIcon slot="start" icon={cart} />
            Buy Now
          </IonButton>
          <IonButton expand="block" fill="outline">
            <IonIcon slot="start" icon={chatbubble} />
            Message Seller
          </IonButton>
        </div>

        <IonActionSheet
          isOpen={showActions}
          onDidDismiss={() => setShowActions(false)}
          buttons={[
            {
              text: "Report Item",
              role: "destructive",
              icon: flag,
              handler: () => {
                console.log("Report clicked")
              },
            },
            {
              text: "Share",
              icon: share,
              handler: () => {
                console.log("Share clicked")
              },
            },
            {
              text: "Cancel",
              role: "cancel",
            },
          ]}
        />
      </IonContent>
    </IonPage>
  )
}

