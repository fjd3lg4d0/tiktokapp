import type { Product } from "@/types/product"

export const sampleProducts: Product[] = [
  {
    id: "1",
    title: "Vintage Leather Jacket",
    description: "Genuine leather jacket from the 90s. Great condition with minimal wear. Size M.",
    price: 89.99,
    condition: "Used - Good",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-man-wearing-a-leather-jacket-in-a-clothing-store-40075-large.mp4",
    likes: 124,
    comments: 18,
    seller: {
      id: "user1",
      name: "VintageFinds",
      avatar: "/placeholder.svg?height=50&width=50",
      rating: 4.8,
      memberSince: "Jan 2022",
      totalSales: 47,
    },
  },
  {
    id: "2",
    title: "iPhone 12 Pro - 128GB",
    description:
      "iPhone 12 Pro in Pacific Blue. 128GB storage. Battery health at 89%. Comes with original charger and box.",
    price: 499.99,
    condition: "Used - Like New",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-young-woman-taking-a-selfie-with-a-smartphone-39886-large.mp4",
    likes: 87,
    comments: 12,
    seller: {
      id: "user2",
      name: "TechDeals",
      avatar: "/placeholder.svg?height=50&width=50",
      rating: 4.9,
      memberSince: "Mar 2021",
      totalSales: 156,
    },
  },
  {
    id: "3",
    title: "Vintage Polaroid Camera",
    description: "Working Polaroid camera from the 1980s. Tested and working perfectly. Comes with carrying case.",
    price: 65.0,
    condition: "Used - Good",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-camera-taking-a-picture-of-a-landscape-34472-large.mp4",
    likes: 56,
    comments: 7,
    seller: {
      id: "user3",
      name: "RetroCollector",
      avatar: "/placeholder.svg?height=50&width=50",
      rating: 4.7,
      memberSince: "Nov 2022",
      totalSales: 23,
    },
  },
  {
    id: "4",
    title: "Nike Air Jordan 1 - Size 10",
    description: "Air Jordan 1 Mid in Chicago colorway. Worn only a few times, excellent condition. Size 10 US Men's.",
    price: 180.0,
    condition: "Used - Like New",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-young-man-tying-shoelaces-of-sneakers-44127-large.mp4",
    likes: 210,
    comments: 24,
    seller: {
      id: "user4",
      name: "SneakerHead",
      avatar: "/placeholder.svg?height=50&width=50",
      rating: 4.9,
      memberSince: "Feb 2021",
      totalSales: 89,
    },
  },
  {
    id: "5",
    title: "Vintage Vinyl Records Collection",
    description:
      "Collection of 20 classic rock vinyl records from the 70s and 80s. All in good playing condition with minimal scratches.",
    price: 120.0,
    condition: "Used - Good",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-putting-a-vinyl-record-on-a-turntable-and-playing-it-42922-large.mp4",
    likes: 67,
    comments: 9,
    seller: {
      id: "user5",
      name: "MusicLover",
      avatar: "/placeholder.svg?height=50&width=50",
      rating: 4.6,
      memberSince: "Apr 2022",
      totalSales: 31,
    },
  },
]

