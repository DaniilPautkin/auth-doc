export type NewUserType = {
    fullName: string
    email: string
    password: string
    password2: string
}

export type ExistingUserType = {
    email: string
    password: string
}

export type LoggedUserType = {
    id: string
    name: string
    iat: number
    exp: number
}

export type CardType = {
    name: string
    description: string
}