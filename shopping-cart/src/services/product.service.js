import http from "../common/http";
import store from "../store";

class ProductService {
    constructor() {
        http.interceptors.request.use(config => {
            const user = store.getters.loggedInUser;
            if (user && user.accessToken) {
                config.headers.authorization = `Bearer ${user.accessToken}`;
            }
            return config;
        });
        this.items = {
            "iPhone 13":{
                "id": 1,
                "title": "iPhone 13",
                "description": "All-screnn OLED display, Superfast 5G, A15 Bionic chip, Advanced dual-camera system, Up to 19 hours video playback, Compatible with MagSafe accessories.",
            },
            "iPhone 12":{
                "id": 2,
                "title": "iPhone 12",
                "description": "All-screnn OLED display, Superfast 5G, A14 Bionic chip, Dual-camera system, Up to 17 hours video playback, Compatible with MagSafe accessories.",
            },
            "iPad Air":{
                "id": 3,
                "title": "iPad Air",
                "description": "An all-screen design with a stunning 10.9-inch Liquid Retina display, featuring fast, easy, and secure Touch ID, powered by our most advanced chip ever A14 Bionic.",
            },
            "iPad Pro":{
                "id": 4,
                "title": "iPad Pro",
                "description": "Supercharged by the Apple M1 chip, Mind-blowing perormance, XDR.Liquid Retina to the extreme, Superfast cellular speeds, 5G and Wi-Fi Fast friends, Cameras.You/ll want to turn your video on for this.",
            },
            "AirPods Max":{
                "id": 5,
                "title": "AirPods Max",
                "description": "Introducing AirPods Max — a perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods. The ultimate personal listening experience is here.",
            },
            "AirPods Pro":{
                "id": 6,
                "title": "AirPods Pro",
                "description": "Active Noise Cancellation for immersive sound. Transparency mode for hearing what's happening around you. A customizable fit for all- day comfort. Magic like you've never heard.",
            },
            "Apple Watch Series 7":{
                "id": 7,
                "title": "Apple Watch Series 7",
                "description": "Full screen ahead. Largest, most advanced display yet.Most durable Apple Watch ever.Breakthrough health innovations.Up to 33% faster charging.",
            },
        };
    }

    get(id) {
        return this.items[id];
    }
}

export default new ProductService();