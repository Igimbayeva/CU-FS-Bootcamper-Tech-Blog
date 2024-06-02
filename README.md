# CU-FS-Bootcamper-Tech-Blog

## Overview
This project is a full-stack blog application built using Node.js, Express.js, Sequelize, and Handlebars.js. <br>
Users can sign up, log in, create posts, comment on posts, and view a feed of posts. <br>
It follows the Model-View-Controller (MVC) architectural pattern and includes authentication and authorization features.

<<<<<<< HEAD
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Installation
1. **Clone the Repository**:
    ```sh
    git clone https://github.com/Igimbayeva/CU-FS-Bootcamper-Tech-Blog.git
    cd CU-FS-Bootcamper-Tech-Blog
    ```

2. **Install Dependencies**:
    ```sh
    npm install
    ```

3. **Configure Environment Variables**:
    Create a `.env` file in the root directory and add the following content:
    ```
    DB_NAME=your_database_name
    DB_USER=your_database_user
    DB_PASSWORD=your_database_password
    ```

4. **Initialize the Database**:
    ```sh
    npm run seed
    ```

5. **Start the Application**:
    ```sh
    npm start
    ```
    The application will be running on `http://localhost:3000`.

## Usage
1. **Sign Up**: Navigate to the signup page to create a new account.
2. **Log In**: Log in with your credentials.
3. **Create Posts**: Once logged in, you can create new posts from the dashboard.
4. **View Posts**: View posts on the homepage and individual post pages.
5. **Comment on Posts**: Add comments to posts.
6. **Edit and Delete Posts**: Edit or delete your posts from the dashboard.

## File Structure
```
.
├── config
│   └── connection.js         # Database connection configuration
│
├── controllers
│   ├── api
│   │   ├── commentRoutes.js  # API routes for comments
│   │   ├── postRoutes.js     # API routes for posts
│   │   ├── userRoutes.js     # API routes for users
│   │   └── index.js          # Index file for API routes
│   ├── homeRoutes.js         # Routes for rendering pages
│   └── index.js              # Index file for controllers
│
├── models
│   ├── Comment.js            # Comment model
│   ├── Post.js               # Post model
│   ├── User.js               # User model
│   └── index.js              # Index file for models
│
├── public
│   ├── css
│   │   ├── jass.css          # Additional CSS file (example)
│   │   └── style.css         # Main CSS styles
│   ├── js
│   │   ├── comment.js        # JavaScript for comments
│   │   ├── deletePost.js     # JavaScript for deleting posts
│   │   ├── editPost.js       # JavaScript for editing posts
│   │   ├── login.js          # JavaScript for login
│   │   ├── logout.js         # JavaScript for logout
│   │   └── newPost.js        # JavaScript for creating new posts
│
├── seeds
│   ├── commentData.js        # Seed data for comments
│   ├── index.js              # Index file for seeding
│   ├── postData.js           # Seed data for posts
│   └── userData.js           # Seed data for users
│
├── utils
│   ├── authGuard.js          # Middleware for guarding routes
│   └── helpers.js            # Utility functions and helpers
│
├── views
│   ├── layouts
│   │   └── main.handlebars   # Main layout template
│   ├── partials
│   │   └── comments.handlebars# Partial template for comments
│   ├── dashboard.handlebars  # Dashboard page template
│   ├── editPost.handlebars   # Template for editing a post
│   ├── homepage.handlebars   # Homepage template
│   ├── login.handlebars      # Login page template
│   ├── newPost.handlebars    # Template for creating new posts
│   ├── post.handlebars       # Template for displaying a single post
│   └── signup.handlebars     # Signup page template
│
├── config
│   └── connection.js         # Database connection configuration
│
├── .env                      # Environment variables
├── .eslintignore             # ESLint ignore file
├── .eslintrc.json            # ESLint configuration file
├── .gitignore                # Git ignore file
├── .prettierignore           # Prettier ignore file
├── .prettierrc.json          # Prettier configuration file
├── package.json              # Node package file
├── README.md                 # Readme file
└── server.js                 # Main server file

```


## Features
- **User Authentication**: Secure sign up and login functionality.
- **User Authorization**: Only authenticated users can create, edit, and delete their own posts.
- **Create, Read, Update, Delete (CRUD) Operations**: Full CRUD functionality for posts and comments.
- **Responsive Design**: Front-end styled with CSS for a responsive user experience.
- **MVC Architecture**: Organized codebase following MVC principles.
- **Database Seeding**: Predefined seed data for users, posts, and comments.

## Technologies Used
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL, Sequelize ORM
- **Frontend**: Handlebars.js, CSS
- **Authentication**: Express-session, bcrypt
- **Environment Variables**: dotenv
- **Deployment**: [Render](https://render.com)
- Live URL: [https://your-app-url.render.com](https://your-app-url.render.com)

## Contributing
Contributions are welcome! Please fork the repository and create a pull request.

## License
This project is licensed under the MIT License.

---



=======
>>>>>>> bac75ad6217b7c51a739a44ab4e35da9566a7896
