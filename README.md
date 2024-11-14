#  Netflix GPT 

- Create React App
    Command for Creating your React App : npx create-react-app <Your App Name>

- Configure TailwindCSS
    # Steps to Configure : 
    1. npm install -D tailwindcss
    2. npx tailwindcss init

    Once we run the above two commands the tailwind.config.js file will be created in our project folder.

    3. Add the below config in the tailwind.config.js file 


        /** @type {import('tailwindcss').Config} */
            module.exports = {
        content: [
            "./src/**/*.{js,jsx,ts,tsx}",
            ],
        theme: {
            extend: {},
            },
        plugins: [],
            }
    4. Add the below things in your index.css file and start your project again by running the command npm run start.

        @tailwind base;
        @tailwind components;
        @tailwind utilities;

    5. Start using Tailwind’s utility classes to style your content


# Features 
 - Login/ Sing Up Page 
    - Sign In/ Sign Up Form 
    - Redirect to Browse Page 
 - Browse  ( after authenitcation )
    - Header
    - Main Movie 
        - Trailer in Background
        - Title & Description 
        - MovieSuggestions
            - MovieLists*n
 - NetflixGPT 
    - Search Bar
    - Movie Suggestions 
    
