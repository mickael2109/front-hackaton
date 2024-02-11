import Axios from "./Axios"


// Service Bus
let getBusAll = () => {
    return Axios.get(`/bus`)
}

let getBusId = (id) => {
    return Axios.get(`/arret/getTrajet/${id}`)
}



export const busService = {
    getBusAll, getBusId
}