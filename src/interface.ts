export interface LoginUser {
  email: string;
  password: string;
}

export interface Post {
  image_url: string;
  cloudinary_id: string;
  title: string;
  description: string;
  category: string;
  body: string;

}
