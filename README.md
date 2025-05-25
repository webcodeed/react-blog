# The Dojo Blog

A full-featured blog application built with React and Appwrite, featuring user authentication, CRUD operations for blog posts, and a responsive UI.

## Features

- 🔐 User authentication (register, login, logout)
- 📝 Create, read, update, and delete blog posts
- 👤 User-specific permissions for content management
- 🎨 Clean and responsive design
- 🔔 Toast notifications for user feedback

## Technologies Used

- **Frontend**:
  - React 18
  - React Router v6 (for routing)
  - CSS (for styling)
  - React Toastify (for notifications)
- **Backend**:

  - Appwrite (Backend as a Service)
  - Appwrite Authentication
  - Appwrite Database

- **Development Tools**:
  - Vite (for fast development and building)
  - ESLint (for code quality)

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Appwrite account

### Installation

1. Clone the repository:

2. Install dependencies:

```bash
npm install
```

3. Create an Appwrite project and set up:

- Create a project in Appwrite
- Set up a database with a collection for blogs
- Configure authentication methods
- Update the Appwrite configuration in `src/appwrite/config.js`

4. Start the development server:

```bash
npm run dev
```

## Project Structure

- `/src` - Application source code
  - `/appwrite` - Appwrite configuration
  - Components:
- `App.jsx` - Main application component
- `Home.jsx` - Home page showing all blogs
- `BlogList.jsx` - Component to display list of blogs
- `BlogDetails.jsx` - Component for single blog view
- `Create.jsx` - Form to create new blogs
- `Navbar.jsx` - Navigation component
- `NotFound.jsx` - 404 page
- `Register.jsx` - User registration form
- `Login.jsx` - User login form
- `main.jsx` - Entry point with router configuration
- `index.css` - Global styles

## Usage

- **Home Page**: View all blog posts
- **Blog Details**: Click on a blog to view details
- **New Blog**: Create a new blog post (requires authentication)
- **Register/Login**: Access user-specific features
- **Delete Blog**: Remove your own blog posts

## License

[MIT License](LICENSE)
