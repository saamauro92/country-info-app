# ExpressJS and Next.js Country Info App

### Live Link

The backend app is deployed on Heroku and can be accessed at [https://country-app.herokuapp.com/](https://country-app.herokuapp.com/).

The frontend app is deployed on Vercel and can be accessed at [https://internship-project-nu.vercel.app/](https://internship-project-nu.vercel.app/).

## Backend

This is an ExpressJS application that has two routes:

-   `GET /`: Sends the message "App running".
-   `GET /country/:countryname`: Sends information about the specified country.

### Prerequisites

-   Node.js installed on your machine.

### Installation

1.  Clone the repository.
2.  Navigate to the `backend` directory.
3.  Run `npm install` to install the required dependencies.

### Starting the Server

1.  Navigate to the `backend` directory.
2.  Run `node server` to start the server.
3.  The server should now be running at `http://localhost:8080`.


## Frontend

This is a Next.js application that communicates with the backend API to display country information.

### Prerequisites

-   Node.js installed on your machine.
-   An API URL for the backend server.

### Installation

1.  Clone the repository.
2.  Navigate to the `frontend` directory.
3.  Run `npm install` to install the required dependencies.
4.  Create an `.env` file in the `frontend` directory with the following contents:
    
`NEXT_PUBLIC_API_URL=<backend API URL>

NEXT_PUBLIC_GOOGLE_MAP_API_KEY=<Google Maps API Key>` 
    

### Starting the App

-   Run `npm run dev` to start the development server.
-   The app should now be running at `http://localhost:3000`.

### Building and Starting the App

-   Run `npm run build` to build the app.
-   Run `npm run start` to start the production server.
-   The app should now be running at `http://localhost:3000`.


