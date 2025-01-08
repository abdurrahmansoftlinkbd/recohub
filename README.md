# RecoHub

A community-driven product recommendation platform where users can share, discover, and discuss alternative products.

## Live URL

Check out the live project: [RecoHub](https://b10-a11-product-recommendation.web.app)

## Key Features

- User authentication (Email/Password & Google Sign-in)
- Create, update, and delete product queries
- Add and manage product recommendations
- Real-time updates and notifications
- Responsive design for all devices
- Search functionality

## Technologies Used

- React
- Node.js
- Express.js
- MongoDB
- Firebase Authentication
- Tailwind CSS
- DaisyUI

## Dependencies

The following dependencies were used in this project:

```json
"dependencies": {
    "@emotion/react": "^11.14.0",
    "axios": "^1.7.9",
    "date-fns": "^4.1.0",
    "firebase": "^11.1.0",
    "localforage": "^1.10.0",
    "lucide": "^0.469.0",
    "lucide-react": "^0.469.0",
    "match-sorter": "^8.0.0",
    "prop-types": "^15.8.1",
    "react": "^18.3.1",
    "react-awesome-reveal": "^4.3.1",
    "react-dom": "^18.3.1",
    "react-hot-toast": "^2.4.1",
    "react-icons": "^5.4.0",
    "react-router-dom": "^7.1.0",
    "sweetalert2": "^11.15.3",
    "swiper": "^11.1.15"
}
```

---

## How to Run the Project Locally

Follow the steps below to set up and run the project on your local machine:

### Step 1: Clone the Repository

```bash
git clone https://github.com/abdurrahmansoftlinkbd/recohub.git
cd recohub
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Set Up Environment Variables

Create a .env.local file in the root directory and add the following environment variables:

```bash
VITE_apiKey=Your Firebase API Key
VITE_authDomain=Your Firebase Auth Domain
VITE_projectId=Your Firebase Project ID
VITE_storageBucket=Your Firebase Storage Bucket
VITE_messagingSenderId=Your Firebase Messaging Sender ID
VITE_appId=Your Firebase App ID
```

### Step 4: Run the Project

```bash
npm run dev
```
