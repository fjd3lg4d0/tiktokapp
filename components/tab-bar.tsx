import { IonTabBar, IonTabButton, IonIcon, IonLabel } from "@ionic/react"
import { home, add, person } from "ionicons/icons"
import { useLocation } from "react-router-dom"

export default function TabBar() {
  const location = useLocation()

  return (
    <IonTabBar slot="bottom">
      <IonTabButton tab="feed" href="/" selected={location.pathname === "/"}>
        <IonIcon icon={home} />
        <IonLabel>Feed</IonLabel>
      </IonTabButton>
      <IonTabButton tab="upload" href="/upload" selected={location.pathname === "/upload"}>
        <IonIcon icon={add} />
        <IonLabel>Sell</IonLabel>
      </IonTabButton>
      <IonTabButton tab="profile" href="/profile" selected={location.pathname === "/profile"}>
        <IonIcon icon={person} />
        <IonLabel>Profile</IonLabel>
      </IonTabButton>
    </IonTabBar>
  )
}

