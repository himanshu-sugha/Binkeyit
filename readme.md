## 🚀 **Project Overview**

This is a full-stack e-commerce application that replicates the core functionality of BlinkIt (quick commerce platform), built with React.js frontend and Node.js backend. The project demonstrates advanced web development skills including state management, API integration, payment processing, and responsive UI/UX design.

## 🛠️ **Tech Stack**

### **Frontend Technologies**
- **React 18** - Modern React with hooks and functional components
- **Redux Toolkit** - State management with RTK Query patterns
- **React Router v6** - Client-side routing with nested routes
- **Tailwind CSS** - Utility-first CSS framework for responsive design
- **Vite** - Fast build tool and development server
- **React Hook Form** - Form handling and validation
- **Axios** - HTTP client for API communication

### **Backend Technologies**
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database with Mongoose ODM
- **JWT** - JSON Web Token authentication
- **bcryptjs** - Password hashing and security
- **Multer** - File upload handling
- **Cloudinary** - Cloud image storage and optimization

### **Payment & External Services**
- **Stripe** - Payment gateway integration
- **Resend** - Email service for notifications
 

## 🎯 **Key Features Implemented**

### **User Management System**
- User registration with email verification
- Secure login with JWT tokens
- Password reset functionality with OTP
- Role-based access control (Admin/User)
- User profile management with avatar upload

### **Product Management**
- Hierarchical category and subcategory system
- Product CRUD operations with image uploads
- Advanced search with text indexing
- Stock management and pricing with discounts
- Product publishing/unpublishing controls

### **Shopping Experience**
- Shopping cart with persistent storage
- Address management system
- Order placement and tracking
- Multiple payment options (Stripe + Cash on Delivery)
- Order history and status tracking

### **Admin Dashboard**
- Product upload and management interface
- Category and subcategory management
- Order management and status updates
- User management and role assignment

### **Advanced Features**
- Responsive design for mobile and desktop
- Real-time cart updates
- Image optimization with Cloudinary
- Search functionality with MongoDB text indexing
- Infinite scroll for product listings
- Toast notifications and error handling

## 🏗️ **Architecture & Design Patterns**

### **Frontend Architecture**
- **Component-Based Architecture** - Reusable, modular components
- **Redux Store Structure** - Organized state management with slices
- **Custom Hooks** - Reusable logic (useMobile, useGlobalContext)
- **Route Protection** - Admin permission middleware
- **Responsive Design** - Mobile-first approach with Tailwind CSS

### **Backend Architecture**
- **MVC Pattern** - Models, Views (Routes), Controllers
- **Middleware Stack** - Authentication, admin verification, file upload
- **RESTful API Design** - Standardized API endpoints
- **Database Schema Design** - Optimized MongoDB collections with relationships
- **Security Implementation** - CORS, Helmet, JWT validation

### **Database Design**
- **User Model** - Authentication, roles, relationships
- **Product Model** - Categories, pricing, stock management
- **Order Model** - Order tracking, payment status
- **Cart Model** - Shopping cart persistence
- **Address Model** - User address management

## 🔒 **Security Features**

- **JWT Authentication** - Secure token-based authentication
- **Password Hashing** - bcryptjs for password security
- **CORS Protection** - Cross-origin resource sharing security
- **Input Validation** - Server-side validation and sanitization
- **Role-Based Access** - Admin permission middleware
- **Secure File Uploads** - File type and size validation

## 📱 **Responsive Design**

- **Mobile-First Approach** - Optimized for mobile devices
- **Tailwind CSS** - Utility classes for responsive layouts
- **Custom Hooks** - Mobile detection and responsive behavior
- **Touch-Friendly UI** - Mobile-optimized interactions
- **Progressive Web App** - Fast loading and offline capabilities

## 🚀 **Performance Optimizations**

- **Vite Build Tool** - Fast development and optimized builds
- **Image Optimization** - Cloudinary integration for responsive images
- **Lazy Loading** - Component and route-based code splitting
- **MongoDB Indexing** - Text search optimization
- **Efficient State Management** - Redux Toolkit for optimized updates

## 📊 **API Endpoints**

### **Authentication**
- `POST /api/user/register` - User registration
- `POST /api/user/login` - User authentication
- `POST /api/user/verify-email` - Email verification
- `POST /api/user/forgot-password` - Password reset

### **Products**
- `GET /api/product` - Product listing with filters
- `POST /api/product` - Product creation (Admin)
- `PUT /api/product/:id` - Product updates (Admin)
- `DELETE /api/product/:id` - Product deletion (Admin)

### **Orders & Cart**
- `POST /api/cart/add` - Add to cart
- `GET /api/cart` - Cart items
- `POST /api/order` - Place order
- `GET /api/order` - Order history

## 🎨 **UI/UX Features**

- **Modern Design** - Clean, professional e-commerce interface
- **Interactive Components** - Hover effects, animations, transitions
- **Loading States** - Skeleton loaders and progress indicators
- **Error Handling** - User-friendly error messages and validation
- **Accessibility** - Semantic HTML and keyboard navigation

## 📁 **Project Structure**

```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Route components
│   │   ├── store/         # Redux store and slices
│   │   ├── hooks/         # Custom React hooks
│   │   ├── utils/         # Utility functions
│   │   └── provider/      # Context providers
├── server/                 # Node.js backend
│   ├── controllers/       # Business logic
│   ├── models/           # Database schemas
│   ├── routes/           # API endpoints
│   ├── middleware/       # Custom middleware
│   └── config/           # Configuration files
```

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js (v16+)
- MongoDB database
- Stripe account
- Cloudinary account
- Resend account

### **Installation**
1. Clone the repository
2. Install dependencies: `npm install` (both client and server)
3. Set up environment variables
4. Start development servers



