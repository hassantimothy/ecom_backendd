# Ecommerce Backend

This project is a backend server for an online store, providing various API endpoints for managing categories, subcategories, brands, products, variants, coupon codes, users, orders, and more.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- Category and subcategory management
- Brand management
- Product management with variants
- User authentication and registration
- Order processing
- Coupon code system
- Payment integration (Stripe and Razorpay)
- Push notifications

## Prerequisites

- Node.js
- npm or yarn
- MongoDB

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/hassantimothy/ecom_backend.git
   ```

2. Navigate to the project directory:
   ```
   cd ecom_backend
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Set up environment variables (create a `.env` file in the root directory):
   ```
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   ```

## Usage

To start the server:

```
npm start
```

The server will start running on `http://localhost:3000`.

## API Endpoints

### Categories

- `GET /categories`: Get all categories
- `POST /categories`: Add a new category
- `PUT /categories/:id`: Update a category
- `DELETE /categories/:id`: Delete a category
- `GET /categories/:id`: Get a category by ID

### Subcategories

- `GET /subCategories`: Get all subcategories
- `POST /subCategories`: Add a new subcategory
- `PUT /subCategories/:id`: Update a subcategory
- `DELETE /subCategories/:id`: Delete a subcategory
- `GET /subCategories/:id`: Get a subcategory by ID

### Brands

- `GET /brands`: Get all brands
- `POST /brands`: Add a new brand
- `PUT /brands/:id`: Update a brand
- `DELETE /brands/:id`: Delete a brand
- `GET /brands/:id`: Get a brand by ID

### Variant Types

- `GET /variantTypes`: Get all variant types
- `POST /variantTypes`: Add a new variant type
- `PUT /variantTypes/:id`: Update a variant type
- `DELETE /variantTypes/:id`: Delete a variant type
- `GET /variantTypes/:id`: Get a variant type by ID

### Variants

- `GET /variants`: Get all variants
- `POST /variants`: Add a new variant
- `PUT /variants/:id`: Update a variant
- `DELETE /variants/:id`: Delete a variant
- `GET /variants/:id`: Get a variant by ID

### Products

- `GET /products`: Get all products
- `POST /products`: Add a new product
- `GET /products/:id`: Get a product by ID

### Coupon Codes

- `GET /couponCodes`: Get all coupon codes
- `POST /couponCodes`: Add a new coupon code
- `POST /couponCodes/check-coupon`: Check a coupon code

### Users

- `GET /users`: Get all users
- `POST /users/register`: Register a new user
- `POST /users/login`: User login

### Orders

- `GET /orders`: Get all orders
- `POST /orders`: Create a new order
- `PUT /orders/:id`: Update an order
- `GET /orders/orderByUserId/:userId`: Get orders by user ID

### Payments

- `GET /payment/stripe`: Stripe payment endpoint
- `POST /payment/razorpay`: Razorpay payment endpoint

### Notifications

- `POST /notification/send-notification`: Send a notification
- `GET /notification/track-notification/:id`: Track a notification
- `GET /notification/all-notification`: Get all notifications
- `DELETE /notification/delete-notification/:id`: Delete a notification

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the [MIT License](LICENSE).
