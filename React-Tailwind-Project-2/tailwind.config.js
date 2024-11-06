/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-bg": "url('./assets/images/background-image.jpg')",
        "custom-bg1": "url('./assets/images/blog-1.jpg')",
        "custom-bg2": "url('./assets/images/blog-2.jpg')",
        "custom-bg3": "url('./assets/images/blog-3.jpg')",
        "custom-bg4": "url('./assets/images/blog-5.jpg')",
        "custom-bg5": "url('./assets/images/blog-6.jpg')",
        "custom-bg6": "url('./assets/images/blog-7.jpg')",
        "custom-bg7": "url('./assets/images/blog-8.jpg')",
      },
    },
  },
  plugins: [],
};
