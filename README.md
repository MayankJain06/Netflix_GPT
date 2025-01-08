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


#  Netflix GPT 

    - Create React App 
    - Configured Tailwind CSS
    - Header
    - Routing of App
    - Login Form 
    - Sign Up Form 
    - Form Validation
    - useRef Hook 
    - Firebase Setup
    - Deploying our app to production 
    - Create SignUp User Account
    - Implement Sign In user Api
    - Created Redux Store with userSlice
    - Implemented Sign out
    - Update Profile
    - BugFix: Sign up user display name and profile picture update
    - BugFix: if the user is not logged in Redirect/ browse to Login Page and vice-versa
    - Unsubscribed to the onAuthStateChanged callback
    - Add hardcoded values to the constants file
    - Register for TMDB API and create an app & get access token 
    - Get Data from TMDB now playing movies list API 
    - Custom Hook for Now Playing Movies
    - Create movieSlice
    - Update Store with the movies Data
    - Planning for Main Container & Secondary Container
    - Fetch Data for Trailer Video
    - Update Store with Trailer Video Data
    - Embedded the youtube Video and make it autoplay and mute 
    - Tailwind classes to make Main Container Look awesome
    - Build Secondary Component 
    - Build Movie List
    - Build Movie Card
    - TMDB Image CDN URL
    - Made the browse Page amazing with the Tailwind CSS
    - Created the Custom hooks for :
        - Popular Movies
        - TopRated Movies
        - Upcoming Movies 




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
    
