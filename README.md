# React Router Presentation

A complete React 19 presentation about React Router and multi-page navigation, built as an interactive slideshow.

## 🎯 Overview

This project is a 16-slide presentation covering:
- React Router fundamentals
- Single Page Application (SPA) concepts  
- Dynamic routing with parameters
- Navigation hooks and components
- Nested routes and layouts
- Best practices and common patterns

## 🚀 Quick Start

```bash
# Clone or download the project
cd react-router-presentation

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## 📖 Slide Contents

1. **Title Slide** - Introduction to React Router
2. **What is React Router?** - Core concepts and benefits
3. **SPA with Multiple Routes** - Understanding single-page apps
4. **Why Not Traditional Reloads?** - Performance comparison
5. **Installing react-router-dom** - Setup instructions
6. **Basic Routing Setup** - BrowserRouter, Routes, Route
7. **Creating Pages** - Home, About, Contact examples
8. **Navigation with Link & NavLink** - Interactive navigation
9. **Dynamic Routing** - URL parameters and patterns
10. **useParams() Example** - User profile implementation
11. **Programmatic Navigation** - useNavigate() hook
12. **Go Back/Forward** - History navigation
13. **Route Placement & Structure** - Organization best practices
14. **Nested Routes & Layouts** - Shared layouts with Outlet
15. **Summary** - Key concepts recap
16. **Q&A / Practice** - Questions and coding challenge

## 🎮 Navigation

- **Arrow Keys**: Previous/Next slides
- **Spacebar**: Next slide
- **Number Keys** (1-9): Jump to specific slides
- **Navigation Dots**: Click to jump to any slide
- **Buttons**: Previous/Next buttons in footer

## 🏗️ Project Structure

```
src/
├── slides/           # All 16 slide components
│   ├── Slide1.jsx   
│   ├── Slide2.jsx   
│   └── ...
├── components/
│   └── Layout.jsx    # Main layout with navigation
├── App.jsx          # Route definitions
├── main.jsx         # React 19 root setup
└── index.css        # Tailwind CSS imports
```

## 🎨 Features

- **React 19** compatibility
- **Tailwind CSS** styling
- **Responsive design** - works on mobile and desktop
- **Keyboard navigation** - arrow keys, spacebar, numbers
- **Smooth transitions** - modern presentation feel
- **Code syntax highlighting** - readable code examples
- **Interactive elements** - buttons and navigation dots

## 🛠️ Built With

- **React 19** - Latest React with modern features
- **React Router DOM 6.28** - Client-side routing
- **Vite** - Fast development and build tool
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS & Autoprefixer** - CSS processing

## 👨‍🏫 For Instructors

This presentation is designed for:
- **Beginner frontend students**
- **Session 10** of a React course
- **90-minute class** including practice time
- **Interactive learning** with hands-on examples

Each slide includes:
- Clear explanations with bullet points
- Practical code examples
- Visual diagrams and comparisons
- Progressive complexity building

## 🎯 Practice Challenge

The final slide includes a practice challenge to build a personal blog app with:
- Home page with post list
- Individual post pages with dynamic routing
- About and Contact pages  
- Navigation bar with active states
- 404 error handling
- Bonus features for advanced students

## 📝 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🤝 Contributing

This presentation is designed to be easily customizable:
- Edit slide content in `src/slides/`
- Modify styling in `src/index.css` or components
- Add more slides by updating `App.jsx` and creating new components
- Adjust navigation in `src/components/Layout.jsx`

## 📄 License

Free to use for educational purposes. Perfect for React workshops, bootcamps, and computer science courses.