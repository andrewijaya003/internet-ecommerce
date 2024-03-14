import type { Config } from "tailwindcss";
import daisyui from 'daisyui';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        'cmyk': {
           'primary' : '#44adee',
           'primary-focus' : '#3999d5',
           'primary-content' : '#000000',

           'secondary' : '#e74689',
           'secondary-focus' : '#cd3c79',
           'secondary-content' : '#000000',

           'accent' : '#fff12e',
           'accent-focus' : '#ddd12c',
           'accent-content' : '#000000',

           'neutral' : '#1a1a1a',
           'neutral-focus' : '#000000',
           'neutral-content' : '#ffffff',

           'base-100' : '#ffffff',
           'base-200' : '#f5f5f5',
           'base-300' : '#ebebeb',
           'base-content' : '#000000',

           'info' : '#4aa8bf',
           'success' : '#81328f',
           'warning' : '#ed7f31',
           'error' : '#e83d30',

          '--rounded-box': '1rem',          
          '--rounded-btn': '.5rem',        
          '--rounded-badge': '1.9rem',      

          '--animation-btn': '.25s',       
          '--animation-input': '.2s',       

          '--btn-text-case': 'uppercase',   
          '--navbar-padding': '.5rem',      
          '--border-btn': '1px',            
        },
      },
    ],
  },
};
export default config;
