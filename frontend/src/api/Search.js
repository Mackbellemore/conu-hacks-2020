import axios from "axios";

export async function getSongs(song) {

    try {
        return await axios.get(`/song/search/${song}`);
    } catch (error) {
        console.error(error);
    }
}