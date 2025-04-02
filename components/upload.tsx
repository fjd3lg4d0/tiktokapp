"use client"

import type React from "react"

import { useState, useRef } from "react"
import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonSelect,
  IonSelectOption,
  IonLoading,
  IonToast,
} from "@ionic/react"
import { useHistory } from "react-router-dom"

export default function Upload() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [condition, setCondition] = useState("Used - Good")
  const [videoFile, setVideoFile] = useState<File | null>(null)
  const [videoPreview, setVideoPreview] = useState<string | null>(null)
  const [showLoading, setShowLoading] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState("")

  const fileInputRef = useRef<HTMLInputElement>(null)
  const history = useHistory()

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files && files.length > 0) {
      const file = files[0]
      if (file.type.includes("video/")) {
        setVideoFile(file)
        setVideoPreview(URL.createObjectURL(file))
      } else {
        setToastMessage("Please select a video file")
        setShowToast(true)
      }
    }
  }

  const handleCapture = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!videoFile) {
      setToastMessage("Please upload a video of your product")
      setShowToast(true)
      return
    }

    if (!title || !description || !price) {
      setToastMessage("Please fill in all required fields")
      setShowToast(true)
      return
    }

    setShowLoading(true)

    // Simulate upload delay
    setTimeout(() => {
      setShowLoading(false)
      setToastMessage("Product uploaded successfully!")
      setShowToast(true)

      // Reset form
      setTitle("")
      setDescription("")
      setPrice("")
      setCondition("Used - Good")
      setVideoFile(null)
      setVideoPreview(null)

      // Navigate back to feed
      history.push("/")
    }, 2000)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sell Your Item</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <form onSubmit={handleSubmit}>
          <div className="video-upload-container mb-4">
            {videoPreview ? (
              <video src={videoPreview} className="w-full h-64 object-cover rounded-lg" controls />
            ) : (
              <div
                className="w-full h-64 bg-gray-100 rounded-lg flex flex-col items-center justify-center"
                onClick={handleCapture}
              >
                <IonButton fill="clear">
                  <videocam slot="start" />
                  Upload Product Video
                </IonButton>
                <p className="text-sm text-gray-500 mt-2">Tap to record or upload a video</p>
              </div>
            )}
            <input type="file" accept="video/*" hidden ref={fileInputRef} onChange={handleFileChange} />
          </div>

          <IonItem>
            <IonLabel position="floating">Title*</IonLabel>
            <IonInput value={title} onIonChange={(e) => setTitle(e.detail.value!)} required />
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Description*</IonLabel>
            <IonTextarea value={description} onIonChange={(e) => setDescription(e.detail.value!)} rows={3} required />
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Price ($)*</IonLabel>
            <IonInput type="number" value={price} onIonChange={(e) => setPrice(e.detail.value!)} required />
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Condition</IonLabel>
            <IonSelect value={condition} onIonChange={(e) => setCondition(e.detail.value)}>
              <IonSelectOption value="New">New</IonSelectOption>
              <IonSelectOption value="Used - Like New">Used - Like New</IonSelectOption>
              <IonSelectOption value="Used - Good">Used - Good</IonSelectOption>
              <IonSelectOption value="Used - Fair">Used - Fair</IonSelectOption>
            </IonSelect>
          </IonItem>

          <div className="ion-padding">
            <IonButton expand="block" type="submit">
              Post For Sale
            </IonButton>
          </div>
        </form>

        <IonLoading isOpen={showLoading} message="Uploading your product..." />

        <IonToast isOpen={showToast} onDidDismiss={() => setShowToast(false)} message={toastMessage} duration={2000} />
      </IonContent>
    </IonPage>
  )
}

