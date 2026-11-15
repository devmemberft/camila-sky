import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return{
        id: "/",
        name: "Souri",
        short_name: "souri",
        description: "",
        start_url: "",
        scope: "/",
        display: "standalone",
        orientation: "portrait",
        background_color: "#183D32",
        theme_color: "#183D32",
        categories: [""],
        icons: [
            { src: '/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png' },
            { src: '/web-app-manifest-512x512.png', sizes: '192x192', type: 'image/png' },
            { src: '/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png', purpose: 'maskable' },
        
        ],
    };
}