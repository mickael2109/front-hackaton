import Axios from "./Axios"


// Service Bus
let getBusAll = () => {
    return Axios.get(`/bus`)
}

let getBusId = (id) => {
    return Axios.get(`/arret/getTrajet/${id}`)
}

let getArretAll = () => {
    return Axios.get(`/arret/getAllArret`)
}

let getAllBus = () => {
    return Axios.get(`/bus/getAllBus`)
}

export const busService = {
    getBusAll, getBusId, getArretAll, getAllBus
}