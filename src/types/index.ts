export interface ILoginData {
  username: string
  password: string
}

export interface ISignupData {
  email: string
  fullname?: string
  password: string
  confirmPassword?: string
  user_id?: string
}