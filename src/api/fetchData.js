import axios from "axios"

export const fetchMoviesData = async () => {
    const response = await axios.get("http://localhost:3000/docs");

    return response;
}