/** @type {import('tailwindcss').Config} */

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                lato: ["lato", "serif"],
                youngSerif: ["Young Serif", "serif"],
            },
            colors: {
                custom: {
                    500: "#5a6f08", // カスタムカラー
                    501: "#E4E7D7",
                    502: "#8B9A52",
                },
            },
        },
    },
    plugins: [],
};
