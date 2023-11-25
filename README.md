# LMS (Learing Mengement System )

1.  Clone the project

    - git clone https://github.com/Bishal2026/LMS-Project-Frontend.git

2.  Move into the directory

    - cd LMS-Project

3.  Install Depandences

    - npm i
      

4.  Run the server

- npm run dev

## ALl setup for project

### All Depandences

    npm i @reduxjs/toolkit react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp react-redux

### TailWinds Setup

    1.  install Depandenecs

    - npm install -D tailwindcss
    - npx tailwindcss init

    2. Create tailwind config file

    ... npx tailwindcss init Add extanstion =>
     "./src/**/*.{html,js,jsx,ts,tsx}" ...

    3. Add tailwind dir in index.js top of the file.

     ...

            @tailwind base;

            @tailwind components;

            @tailwind utilities;

    ...

    4. some more setup in tailwindcss

    ...
        add npx tailwindcss init Add extanstion = ./index.html

    npm install -D tailwindcss postcss autoprefixer

     npx taliwindcss init -p

5. To active in daisyui and line-clamp

    - plugins: [require('daisyui'),require('@tailwindcss/line-clamp')],