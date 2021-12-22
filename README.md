# Blush Store

# 	<img src="/Users/maha/Final Project - T1000/Blush logo.png" alt="Blush logo" style="zoom:50%;" />

## Description

* ### **Blush Store**  is an e-commerce website specializing in makeup products. 

  

## User Stories

- **Signup:** As a user I can sign up in the platform so that I can complate payment.
- **Login:** As a user I can login to the platform so that I can complate payment.
- **Logout:** As a user I can logout from the platform.
- **See all Products** As a user I can see all the products in Products page.
- **See Categories** As a user I can Select on of the categories in the app.
- **Filter** As a user I can filtering the products in the app.
- **Sorting** As a user I can Sorting  the products in the app.
- **See single product page** As a user I can see all information for selected product
- **Add product to the cart** As a user I can add products to my cart page
- **Add product to the wishlist** As a user I can add products to my wishlist page
- **Control cart page** As a user I can control cart page => delete, update, add product
- **Checkout** As a user i can checkout and payment.

## User features

- Full featured shopping cart
- Filtering (Brand, category)
- Sorting (Newest, Asc, Desc)
- Token based authentication
- Product search feature
- Supporting live chate
- Save Cart
- Delete Cart
- Choose quantity (No of items to be order)
- Checkout process (payment)
- Order summary
- Database Scema (Product, User, Cart, Order,Wishlist)

## Admin features

- Product management
- User management
- Order management



## Tech Stack

- React.js
- Node.js
- Express.js
- MongoDB Atlas
- Stripe - payment
- Redux
- tawk.to - Live Chat
- Tailwind - Css
- CryptoJS (AES) - Encrypt Passoword

# Client / Frontend

## React Router Routes (React App)

| Path                      | Component         | Permissions                 | Behavior                                                     |
| ------------------------- | ----------------- | --------------------------- | ------------------------------------------------------------ |
| `/`                       | HomePage          | public `<Route>`            | Home page                                                    |
| `/register`               | SignupPage        | anon only `<AnonRoute>`     | Signup form, link to login, navigate to homepage after signup |
| `/login`                  | LoginPage         | anon only `<AnonRoute>`     | Login form, link to signup, navigate to homepage after login |
| `/account`                | Account Page      | user only `<PrivateRoute>`  |                                                              |
| `/products`               | ProductsList      | public `<Route>`            |                                                              |
| `/products/:category`     | ProductsList Page | public `<Route>`            | Shows all products in a list                                 |
| `/product/:id`            | Product Page      | public `<Route>`            | Details the product                                          |
| `/cart`                   | Cart Page         | user only `<PrivateRoute>`  | Shows the products in the cart and the total amount          |
| `/wishlist`               | Wshlist Page      | user Only                   |                                                              |
| `/search/:searchTerm`     | Search Page       | public `<Route>`            |                                                              |
| `/dashboard`              | ProfileInfo       | Admin Only `<PrivateRoute>` |                                                              |
| `/dashboard/products`     | ProductsAdmin     | Admin Only `<PrivateRoute>` |                                                              |
| `/dashboard/products/add` | AddProductAdmin   | Admin Only `<PrivateRoute>` |                                                              |
| `/dashboard/products/:id` | Editproduct       | Admin Only `<PrivateRoute>` |                                                              |

## Components

- Navbar
- Header
- CategoryItem
- NewArrival
- NewsLetter
- BrandImages
- UserDropdown
- Pay
- Success
- AdSection
- Footer



## Pages

- Account

- Cart

- Home

- Login

- Register

- Product

- ProductsList

- Wishlist

  

# Server / Backend

## Models

User model

```
  {
        username: {type:String , required: true , unique: true},
        email: {type:String , required: true, unique: true},
        password: {type:String , required: true},
        isAdmin: {type:Boolean , default: false}

    },
    { timestamps: true }
```

Product model

```
{
        brand: { type: Array, required: true },
        image_key: { type: String, required: true },
        name: { type: String, required: true, unique: true},
        price: { type: Number, default: false },
        desc: { type: String},
        categories: { type: Array, required: true },
        inStock:{type:Boolean, default:true},
        color: { type: String },
        review: { type: String, trim: true },
        rating: { type: Number, default: 0 },
},
{timestamp: true }
```

Cart model

```
 {
        userId: { type: String, required: true },
        products: [
            {
                productId: { type: String},
                quantity: { type: Number, default: 1}
            }
        ]
      
},{ timestamps: true }
```

Order model

```
 {     userId: { type: String, required: true },
        products: [
            {
                productId: { type: String},
                quantity: { type: Number, default: 1}
            }
        ],
        amount: { type: Number, required: true},
        address: { type: Object, required: true}, // type object to store all address info. from user
        status: { type: String, default: 'Panding'} //panding , onway ,....
},{ timestamps: true }
```

Wishlist model

```
{       userId: { type: String, required: true },
        products: [
        {
                productId: { type: String},
        }
        ],
        isLiked: { type: Boolean, default: false }
}
```



## Backend routes

| HTTP Method | URL                       | Request Body            | Success status | Error Status | Description                                                  |
| ----------- | ------------------------- | ----------------------- | -------------- | ------------ | ------------------------------------------------------------ |
| POST        | `/auth/login`             | {username,password}     | 200            | 404          | Check if user is logged in and return profile page           |
| POST        | `/auth/register`          | {name, email, password} | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/logout`            | (Empty)                 | 204            | 400          | Logs out the user                                            |
| POST        | `/api/products`           |                         |                |              |                                                              |
| PUT         | `/api/products/:id`       |                         |                |              |                                                              |
| DELETE      | `/api/products/:id`       |                         |                |              |                                                              |
| GET         | `/api/products/find/:id`  |                         |                |              |                                                              |
| GET         | `/api/users/find/:id`     |                         |                |              |                                                              |
| PUT         | `/api/users/:id`          |                         |                |              |                                                              |
| DELETE      | `/api/users/:id`          |                         |                |              |                                                              |
| GET         | `/api/users `             |                         |                |              |                                                              |
| POST        | `/api/cart `              |                         |                |              |                                                              |
| PUT         | `/api/cart/:id`           |                         |                |              |                                                              |
| DELETE      | `/api/cart/:id`           |                         |                |              |                                                              |
| GET         | `/api/cart/find/:userId`  |                         |                |              |                                                              |
| GET         | `/api/cart`               |                         |                |              |                                                              |
| POST        | `/api/order`              |                         |                |              |                                                              |
| PUT         | `/api/order/:id`          |                         |                |              |                                                              |
| DELETE      | `/api/order/:id`          |                         |                |              |                                                              |
| GET         | `/api/order/find/:userId` |                         |                |              |                                                              |
| GET         | `/api/order`              |                         |                |              |                                                              |
| POST        | `/api/stripe/payment`     |                         |                |              |                                                              |



## Links

### Trello/Kanban

[Link to your trello board](https://trello.com/b/dDLdRkIG/blush-app) 

### Git

[Client repository Link](https://github.com/mahaatechcampus/Final-Project-T1000/tree/main/blush-app/frontend)

[Server repository Link](https://github.com/mahaatechcampus/Final-Project-T1000/tree/main/blush-app/backend)

[Deployed App Link](http://heroku.com/)

### Slides

[Slides Link](http://slides.com/)

### Wireframe

[Figma Link](https://www.figma.com/file/N3BbSY8P5ZtCmOcmnkjvO4/Blush-Store?node-id=0%3A1)

