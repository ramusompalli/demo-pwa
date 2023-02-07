import axios from "axios";

const API_KEY = "YmYzZGQ0MWUtNGRlMC00NzNhLWJiODUtNDYyZjIwY2ZiN2Nl";
const ONESIGNAL_APP_ID = "102bdd57-2a9e-4d85-bfde-f14a51e0bb6f";
const BASE_URL = "https://onesignal.com/api/v1";

const body = {
    app_id: ONESIGNAL_APP_ID,
    included_segments: ['Subscribed Users'],
    data: {
    	foo: 'bar',
    },
    contents: {
    	en: 'Sample Push Message',
    },
};

const optionsBuilder = (method, path, body) => {
    return {
            method,
            'url': `${BASE_URL}/${path}`,
            'headers': {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${API_KEY}`,
        },
        body: body ? JSON.stringify(body) : null
    };
}


const createNotification = async () => {
    const options = optionsBuilder("post", "notifications", body);
    console.log(options);
    try {
        const response = await axios(options);
        return response.data;
    } catch (error) {
        console.error(error);
        return error;
    }
}

export default createNotification;