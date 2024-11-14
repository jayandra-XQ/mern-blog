📝 MERN Stack Blog Web App
A feature-rich, responsive blog web application built with the MERN Stack (MongoDB, Express, React, Node.js). This app includes robust authentication, advanced search functionality,
and an admin dashboard, providing a seamless and interactive experience across all devices.

🚀 Project Overview
This MERN Blog Web App enables users to:

Sign up and log in securely (via JWT and Google OAuth integration)
Create, edit, delete, and view posts with full CRUD functionality
Interact with the community by commenting on posts
Search posts with advanced filtering and sorting options
Enjoy a responsive, device-friendly design with dark mode for enhanced readability


Built With
Frontend: React, Tailwind CSS, React Router Dom, Redux Toolkit
Backend: Node.js, Express.js, MongoDB
Deployment: Render platform (for free hosting)


🛠️ Tech Stack and Key Features
Frontend
React.js and Tailwind CSS for a responsive and visually appealing UI
React Router Dom for smooth page transitions and navigation
Redux Toolkit for efficient and centralized state management
Dark Mode to enhance user experience and cater to different preferences

Backend
Node.js and Express.js for a scalable REST API architecture
MongoDB for data persistence, with a focus on efficient search and retrieval
JSON Web Tokens (JWT) and Google OAuth for secure authentication
Role-based access control with special permissions for admin features

Key Features
Authentication & Authorization: Secure login and registration with JWT and Google OAuth, protecting specific pages like the admin dashboard.
Admin Dashboard: Full access for admins to manage posts, comments, and users, including CRUD operations for enhanced control.
Advanced Search: Users can search by post title, filter results, and sort using a modern sidebar interface, making it easy to find specific content.
Comments: Users can interact by leaving, editing, and deleting comments on post pages, fostering a community experience.
Responsive Design: Designed to work flawlessly across all devices, with dark mode for better accessibility.

🏗️ Installation and Setup
Backend Setup

Navigate to the api folder:
cd api
npm install

Create a .env file in the server folder and add:
env
MONGODB_URI=<Your MongoDB URI>
JWT_SECRET=<Your JWT Secret>
GOOGLE_CLIENT_ID=<Your Google Client ID>
GOOGLE_CLIENT_SECRET=<Your Google Client Secret>
PORT=5000

Start the backend server:
npm start

Frontend Setup
Navigate to the client folder:
cd client
npm install

Start the frontend server:
npm start

Visit https://blog-5aqz.onrender.com/ in your browser to explore the application!

🔒 Authentication and Security
This application employs JWT and Google OAuth for secure authentication and authorization. Access to specific features like the admin dashboard is restricted based on roles, enhancing both security and user experience.

🚀 Deployment
This app is deployed on the Render platform, offering free hosting for easy sharing and showcasing of your project.

🤝 Contributing
Contributions are welcome! If you find a bug or would like to add a feature, feel free to open an issue or submit a pull request.

📧 Contact
If you have any questions or want to connect, reach out at jayandrahamal203@gmail.com.

📜 License
This project is licensed under the MIT License.

