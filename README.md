# Deshgory Frontend

A modern React-based frontend application for the Deshgory learning platform, built with Vite. Deshgory is an educational platform offering a wide range of courses taught by expert instructors, designed to help users acquire essential skills and advance their careers.

## Features

- **User Authentication**: Secure login, signup, and password recovery functionality
- **Course Browsing**: Explore and search through a comprehensive catalog of courses
- **Course Details**: View detailed information about courses including descriptions, pricing, and ratings
- **Shopping Cart**: Add courses to cart and manage selections
- **Responsive Design**: Optimized for desktop and mobile devices
- **Instructor Profiles**: Learn from top instructors across various fields
- **Testimonials**: Read reviews from satisfied users and organizations
- **Partner Integrations**: Featuring partnerships with leading organizations

## Technologies Used

- **React**: Frontend framework for building user interfaces
- **Vite**: Fast build tool and development server
- **Axios**: HTTP client for API requests
- **React Router**: Client-side routing
- **Swiper**: Modern touch slider for testimonials
- **Tailwind CSS**: Utility-first CSS framework for styling
- **ESLint**: Code linting and formatting

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd deshgory-frontend-jsx
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Configuration**:
   Create a `.env` file in the root directory and add your API base URL:
   ```
   VITE_API_BASE=http://localhost:3000/api/v1
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Build for production**:
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── assets/          # Images, icons, and static files
├── components/      # Reusable React components
├── icons/           # Custom icon components
├── pages/           # Page-level components
└── main.jsx         # Application entry point
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

