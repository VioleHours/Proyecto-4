/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'rick-and-morty-1': "url('/img/RickAndMorty-1.jpg')",
        'rick-and-morty-2': "url('/img/RickAndMorty-2.jpg')",
        'rick-and-morty-3': "url('/img/RickAndMorty-3.jpg')",
        'rick-and-morty-4': "url('/img/RickAndMorty-4.jpg')",
        'rick-and-morty-5': "url('/img/RickAndMorty-5.jpg')",
        'rick-and-morty-6': "url('/img/RickAndMorty-6.jpg')",
      }
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
    },
  },
  plugins: [],
};
