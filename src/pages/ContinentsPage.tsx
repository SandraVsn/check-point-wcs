import { useQuery } from "@apollo/client";
import { GET_ALL_CONTINENTS } from "../graphQL/queries";

export default function ContinentsPage(){
const {data: continentsList } = useQuery(GET_ALL_CONTINENTS)

console.log(continentsList)

return(
    <div>
        <h1>Test Query Continents in console.log </h1>
    </div>
)
}