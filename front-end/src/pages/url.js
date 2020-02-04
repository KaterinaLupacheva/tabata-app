const API_URL = () => {
    if(process.env.NODE_ENV === "production") {
        return 'https://tabata-backend.herokuapp.com';
    } else {
        return 'http://localhost:9997'
    }
}

export const path = API_URL();