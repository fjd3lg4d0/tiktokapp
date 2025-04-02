"use client"

import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonAvatar,
  IonButton,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonIcon,
} from "@ionic/react"
import { useState } from "react"
import { settings, videocam, cart } from "ionicons/icons"
import { sampleProducts } from "@/data/sample-data"

export default function Profile() {
  const [segment, setSegment] = useState("selling")

  // Filter products to show only those from the current user
  // In a real app, you would have a user ID and filter by that
  const userProducts = sampleProducts.slice(0, 4)

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
          <IonButton slot="end" fill="clear">
            <IonIcon slot="icon-only" icon={settings} />
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="profile-header ion-padding text-center">
          <IonAvatar className="mx-auto mb-2" style={{ width: "80px", height: "80px" }}>
            <img src="/placeholder.svg?height=80&width=80" alt="Profile" />
          </IonAvatar>
          <h2 className="text-xl font-bold">John Doe</h2>
          <p className="text-gray-500">@johndoe</p>

          <div className="flex justify-center space-x-4 my-4">
            <div className="text-center">
              <div className="font-bold">42</div>
              <div className="text-xs text-gray-500">Following</div>
            </div>
            <div className="text-center">
              <div className="font-bold">1.2k</div>
              <div className="text-xs text-gray-500">Followers</div>
            </div>
            <div className="text-center">
              <div className="font-bold">38</div>
              <div className="text-xs text-gray-500">Sold</div>
            </div>
          </div>

          <p className="text-sm my-2">Selling vintage items and tech gadgets. Fast shipping!</p>

          <IonButton size="small" fill="outline">
            Edit Profile
          </IonButton>
        </div>

        <IonSegment value={segment} onIonChange={(e) => setSegment(e.detail.value!)}>
          <IonSegmentButton value="selling">
            <IonIcon icon={videocam} />
            <IonLabel>Selling</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="sold">
            <IonIcon icon={cart} />
            <IonLabel>Sold</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        <div className="ion-padding">
          {segment === "selling" ? (
            <IonGrid>
              <IonRow>
                {userProducts.map((product) => (
                  <IonCol size="6" key={product.id}>
                    <IonCard>
                      <video src={product.videoUrl} className="w-full h-32 object-cover" muted playsInline />
                      <IonCardContent>
                        <h3 className="text-sm font-medium truncate">{product.title}</h3>
                        <p className="text-green-600 font-bold">${product.price.toFixed(2)}</p>
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
                ))}
              </IonRow>
            </IonGrid>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">No sold items yet</p>
              <IonButton size="small" className="mt-2">
                Start Selling
              </IonButton>
            </div>
          )}
        </div>
      </IonContent>
    </IonPage>
  )
}

