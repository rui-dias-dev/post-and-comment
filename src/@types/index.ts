export interface PostI {
  id: number
  title: string
  body: string
  userId: number
}

export interface CommentI {
  id: number
  name: string
  email: string
  body: string
  postId: number
}

export interface CommentBodyI {
  name: string
  body: string
  email: string
  postId: number
}

export interface UserI {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}
