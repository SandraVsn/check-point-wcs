export interface Continent {
    name: string
    code: string
    countries: Country []
}

export interface Country{
    code: string
    name: string
    emoji: string
    currency: string
}