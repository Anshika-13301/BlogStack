# BlogStack 📝

BlogStack is a full-stack blog website where users can read and explore blogs based on different categories.

I built this project to practice frontend and backend development and to understand how a React application communicates with a backend and database.

## About the Project

The website has a simple and clean interface where users can:

- View available blogs
- Search for blogs
- Filter blogs by category
- Open and read individual blogs
- Subscribe to the newsletter
- Access the admin login

There is also an admin section for managing the blog content.

## Features

### User Side

- Home page
- Blogs page
- Search blogs
- Category filtering
- Blog details page
- Newsletter subscription
- About page
- Responsive design

### Categories

Blogs can be filtered using categories such as:

- Technology
- Web Development
- Programming
- Backend
- Frontend
- Database

### Admin Side

The admin panel is used to manage the blogs.

It includes:

- Admin Login
- Dashboard
- View all blogs
- Create a new blog
- Edit blogs
- Delete blogs
- Manage comments

Admin login is handled using JWT authentication and passwords are protected using bcrypt.

## Technologies Used

### Frontend

- React.js
- JavaScript
- Tailwind CSS
- React Router
- HTML
- CSS

### Backend

- Node.js
- Express.js
- REST API
- CORS
- dotenv

### Database

- MongoDB
- Mongoose

### Authentication

- JSON Web Token (JWT)
- bcryptjs

## Project Structure

```text
BlogStack
│
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── pages
│   │   │   ├── Home.jsx
│   │   │   ├── Blogs.jsx
│   │   │   ├── BlogDetail.jsx
│   │   │   └── About.jsx
│   │   │
│   │   ├── admin
│   │   │   ├── AdminLogin.jsx
│   │   │   ├── AdminLayout.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── AllBlogs.jsx
│   │   │   ├── CreateBlog.jsx
│   │   │   └── Comments.jsx
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md
