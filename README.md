## Reiseziel-Städteauswahl (rsw-app)

- The core concept of the rsw-app application is to streamline users' search for the most suitable city or cities for their travel needs. It achieves this by presenting a curated selection of sections, offering a range of options tailored to individual preferences and desired destination experiences. Furthermore, users can calculate an estimated trip cost once they have identified their ideal destination. Presently, the application exclusively features destinations within Germany.

## Usage

- RSW-app offers a user-friendly experience, making it effortless to navigate. On the homepage, a single click on the 'START QUIZ' button initiates the journey. From there, users progress through sections, selecting answers that align with their preferences. At the culmination of the quiz, the app presents the most suitable city based on their selections. Users may also discover multiple city options, each tailored to their tastes. Additionally, they have the option to calculate the trip cost for the chosen city, enhancing the overall experience.

## Project Architecture  

Architecture of project is based on MVC Architecture.

- `model`: contains data.
- `controller`: makes changes to the model based on user input.
- `view`: represents frontend part of application and it is responsible for retrieving and presenting data to the user.

## Technologies Used

- Node.js: JavaScript runtime environment
- Express.js: Backend server framework
- MongoDB, (mongoose): MongoDB, implemented through Mongoose framework, non-relational database.
- React.js: Frontend framework
- Sass: CSS preprocessor for styling
- npm: Package manager for JavaScript

## Getting Started

- To run the application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/Mehmed-Tarik/RSW-App.git`
2. Install dependencies for the backend: `cd rsw/backend && npm install`
3. Install dependencies for the frontend: `cd rsw/frontend && npm install`
4. Start the backend server: `cd rsw/backend && npm run dev`
5. Start the frontend development server: `cd rsw/frontend && npm run dev`
6. Open your browser and visit `http://localhost:5173/` to see the application.

## Contribution

- Needed improvements:
    - Adding more cities
    - Adding more Quiz options
    - Creating Admin Panel


