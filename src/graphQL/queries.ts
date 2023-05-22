import { gql } from "@apollo/client";

export const GET_ALL_CONTINENTS = gql`
query Continents {
    continents {
        name
        code
    }
} 
`

export const GET_COUNTRIES_BY_CONTINENT_CODE = gql`
query countries($filter: CountryFilterInput) {
  countries(filter: $filter){
    name
    code
    emoji
  }
}
`