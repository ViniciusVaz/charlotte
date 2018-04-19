import Axios from "axios"

export default new class RoomsService {
    
    constructor() {}

    getRooms (data = '') {
        return Axios({
            url: `https://rif2ibxnjk.execute-api.sa-east-1.amazonaws.com/prod/hotels?${data}`,
            method: "get"
        })
    }
}