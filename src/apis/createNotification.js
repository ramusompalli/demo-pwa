import axios from "axios";

const API_KEY = "YmYzZGQ0MWUtNGRlMC00NzNhLWJiODUtNDYyZjIwY2ZiN2Nl";
const ONESIGNAL_APP_ID = "102bdd57-2a9e-4d85-bfde-f14a51e0bb6f";
const BASE_URL = "https://onesignal.com/api/v1";


const createNotification = async () => {
    const res = await axios.post(
        `${BASE_URL}/notifications`,
        {
            app_id: ONESIGNAL_APP_ID,
            included_segments: ['Subscribed Users'],
            contents: {
                en: 'Thanks for Web check In',
            },
        },
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${API_KEY}`,
            }
        },
    )
}

export default createNotification;