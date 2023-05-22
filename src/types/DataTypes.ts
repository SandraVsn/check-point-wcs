export interface Continent {
    name: string
    code: string
    countries: Country []
}

export interface Country{
    id: string
    name: string
}