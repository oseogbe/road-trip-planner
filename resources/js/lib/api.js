import axios from "axios";

const BASE_URL = 'https://maps.googleapis.com/maps/api/place';
const GOOGLE_API_KEY = process.env.VITE_APP_GOOGLE_API_KEY;

async function searchPlace(search, myLocation) {
    try {
        const response = await axios(BASE_URL +
            "/findplacefromtext/json" +
            "?fields=formatted_address,name,rating,opening_hours,geometry,photos" +
            "&input=" + search +
            "&inputtype=textquery" +
            "&locationbias=circle:20000@" + myLocation.lat + "," + myLocation.lng +
            "&key=" + GOOGLE_API_KEY);

        return response.data;
    } catch (error) {
        console.error(error);
    }
}

async function searchNearby(category, location) {
    try {
        const response = await axios(BASE_URL +
            '/nearbysearch/json?fields=formatted_address,name,rating,opening_hours,geometry,photos&type=' +
            category + '&location=' + location.lat + ',' + location.lng + '&radius=5000&key='
            + GOOGLE_API_KEY);

        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export {
    searchPlace,
    searchNearby
}
