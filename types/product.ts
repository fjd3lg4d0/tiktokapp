export interface Product {
  id: string
  title: string
  description: string
  price: number
  condition: string
  videoUrl: string
  likes: number
  comments: number
  seller: {
    id: string
    name: string
    avatar: string
    rating: number
    memberSince: string
    totalSales: number
  }
}

