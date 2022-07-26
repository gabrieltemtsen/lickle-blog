export interface LoginUser {
  email: string;
  password: string;
}

export interface PasswordReset {
  email?: string;
  otp?: string;
}

export interface Post {
  _id?: string;
  user_id?: string;
  image_url?: string;
  cloudinary_id?: string;
  title: string;
  description: string;
  category: string;
  body: string;
  date?: Date;
}

export interface Comment1 {
  _id?: string;
  user_id?: string;
  post_id?: string;
  comment?: string;
}

export interface Like {
  user_id: string;
  post_id: string;
}
