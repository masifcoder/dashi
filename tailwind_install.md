Tailwindcss 4 in React 19

1. npm install tailwindcss @tailwindcss/vite


2. setup vite config file

// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import tailwindcss from '@tailwindcss/vite';


export default defineConfig({
  plugins: [react(), tailwindcss()],
});


3. import index.css file

/* src/index.css */
@import "tailwindcss";



///////////////  Tailwindcss 3 for React 18 ////////////////////
1. npm install tailwindcss@3 postcss autoprefixer
2. npx tailwindcss init -p
3. tailwindcss.config.js put this code

// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

4. index.css put this
 @tailwind base;
@tailwind components;
@tailwind utilities;



