import axios from "axios";

const API_KEY = "YmYzZGQ0MWUtNGRlMC00NzNhLWJiODUtNDYyZjIwY2ZiN2Nl";
const ONESIGNAL_APP_ID = "102bdd57-2a9e-4d85-bfde-f14a51e0bb6f";
const BASE_URL = "https://onesignal.com/api/v1";


const notificationCreator = async (text, minutes) => {

    const res = await axios.post(
        `${BASE_URL}/notifications`,
        {
            app_id: ONESIGNAL_APP_ID,
            included_segments: ['Subscribed Users'],
            contents: {
                en: text,
            },
            send_after: new Date(new Date().getTime() + minutes * 60000),
            chrome_web_image: 'https://demo-pwa-six.vercel.app/LTIMindtree192.jpg',
            chrome_web_badge: 'https://demo-pwa-six.vercel.app/LTIMindtree192.jpg',
            chrome_web_icon: 'https://demo-pwa-six.vercel.app/LTIMindtree192.jpg',
        },
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${API_KEY}`,
            }
        },
    )
}

const createNotification = async () => {
    console.log("Sending Notification");
    notificationCreator('Thanks for Web check In', 0);
    notificationCreator('You have succesfully checked in, Please follow checkin guidelines', 3);
}

export default createNotification;