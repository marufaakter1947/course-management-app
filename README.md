Project Name: Course Management App

Project Description:
Course Management App is a responsive web application that allows instructors to create, manage, and showcase courses, and students to browse and enroll. It includes authentication, protected pages, dynamic course cards, and a user-friendly interface.

Key Features:

User authentication (login/register) with protected routes

Instructor dashboard: Add, manage, and delete courses

Popular courses section on the homepage, sorted by capacity

Student enrollment system

Fully responsive UI for all devices

Smooth animations using Framer Motion and interactive UI components

Setup & Installation
1. Clone the Repository of client side
git clone https://github.com/marufaakter1947/course-management-app
cd course-management-app

and for server side
git clone https://github.com/marufaakter1947/course-management-app-server
cd course-management-app-server

2. Install Dependencies
npm install

3. Environment Variables

Create a .env.local file in the root directory:

NEXTAUTH_SECRET=oGZo4tIJ/9JKsxUMVTXhzbp5DqPXbwN7+gogxDinaYg=
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=1022279330932-ekku8gd8vcb1dp69hilmseiat72nsnr1.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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

NEXT_PUBLIC_API_BASE=http://localhost:5000




4. Run the Application
# For backend
nodemon index.js

# For Next.js frontend
npm run dev

Routes Summary
Authentication
Route	Method	Description
/auth/register	POST	Register a new user
/auth/login	POST	Login user
Courses
Route	Method	Description
/courses	GET	Get all courses
/courses/:id	GET	Get a course by ID
/courses	POST	Create a new course
/courses/:id	DELETE	Delete a course
/popular-courses	GET	Get top 6 popular courses
/my-courses	GET	Get all courses created by logged-in instructor


Frontend: Next.js, React, Tailwind CSS, Framer Motion

Backend: Node.js, Express.js

Database: MongoDB

Authentication: NextAuth.js

Others: Axios, react-hot-toast, SweetAlert2

