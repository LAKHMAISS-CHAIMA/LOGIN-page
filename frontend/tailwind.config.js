/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff5f6d", // Dégradé rouge/rose
        secondary: "#ffc371", // Jaune orangé
        dark: "#1E1E2E", // Fond sombre élégant
        textLight: "#EAEAEA", // Texte clair
        buttonHover: "#ff9966", // Effet hover bouton
      },
    },
  },
  plugins: [],
};
