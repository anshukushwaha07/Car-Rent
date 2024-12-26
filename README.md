# Car Rental Web Application

A web application for car rentals where users can browse, book, and manage car rentals for their travel needs. This application allows users to view available cars, make reservations, process payments, and manage bookings. The system also provides an admin interface to manage cars, bookings, and customer information.

## Features

- **User Features:**
  - View available cars with detailed information (make, model, price, availability).
  - Search and filter cars based on criteria such as location, price, and car type.
  - Make a booking by selecting a car, rental dates, and payment method.
  - Secure payment processing via Stripe.
  - View and manage past and upcoming bookings.
  
- **Admin Features:**
  - Add, update, and remove cars from the fleet.
  - View and manage all bookings made by customers.
  - View customer details and their booking history.

## Technologies Used

- **Frontend:**
  - ReactJS
  - Redux for state management
  - Ant Design for UI components
  - React Router for page navigation
  - Axios for making HTTP requests

- **Backend:**
  - Node.js with Express.js
  - MongoDB for storing car and booking data
  - Stripe for payment processing

- **Others:**
  - Git for version control
  - Google Cloud for hosting (if applicable)

## Installation

To set up this project locally, follow these steps:

### 1. Clone the repository:
```bash
git clone https://github.com/anshukushwaha07/Car-Rent.git
cd Car-Rent

/Car-Rent
├── /frontend               # Frontend code (React)
│   ├── /src
│   │   ├── /components     # React components
│   │   ├── /redux          # Redux store and actions
│   │   └── /pages          # React pages (Home, Booking, Admin, etc.)
│   └── package.json        # Frontend dependencies and scripts
│
├── /backend                # Backend code (Node.js with Express)
│   ├── /controllers        # Controllers for handling requests
│   ├── /models             # MongoDB models
│   ├── /routes             # Express route definitions
│   ├── /utils              # Utility functions (e.g., for payment handling)
│   └── package.json        # Backend dependencies and scripts
└── README.md               # This file

```
## Install frontend dependencies
```bash
cd client
npm install
```
## Install backend dependencies
```bash
npm install
```


