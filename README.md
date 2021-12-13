# Blush Store 'e-commerce'	
​

​
# Quick Compo
​
<img src="https://ibb.co/jZp3DJY" alt="Blushlogo" style="zoom:75%;" />
​
## Description
​
*** Blush Store *** Blush is a website that sells makeup products.

## User features

- Full featured shopping cart
- Product reviews and ratings
- Filtering (Brand, category)
- Sorting (Newest, Asc, Desc)
- Token based authentication
- Product search feature
- Supporting live chate
- Save Cart
- Delete Cart
- Choose quantity (No of items to be order)
- Checkout process (shipping, payment)
- Order summary
- Database Scema (Product, User, Cart, Order,Wishlist)

## Admin features

- Product management
- User management
- Order management
- Order details page

## Tech Stack 💻
React.js
Node.js
Express.js
MongoDB Atlas
Stripe - payment
React TailwindCss
Redux

​
# Client / Frontend
​
## React Router Routes (React App)
​
| Path                      | Component            | Permissions                | Behavior                                                     |
| ---------------------     | -------------------- | -------------------------- | ------------------------------------------------------------ |
| `/`                       | HomePage             | public `<Route>`           | Home page                                                    |
| `/register`               | SignupPage           | anon only `<AnonRoute>`    | Signup form, link to login, navigate to homepage after signup|
| `/login`                  | LoginPage            | anon only `<AnonRoute>`    | Login form, link to signup, navigate to homepage after login |
| `/products/:category`     | ProductsList Page    | public `<Route>`           | Shows all products in a list                                 |
| `/product/:id`            | Product Page         | public `<Route>`           | Details the product                                          |
| `/cart`                   | Cart Page            | user only `<PrivateRoute>` | Shows the products in the cart and the total amount          |
| `/pay`                    | Pay page             | user only `<PrivateRoute>` | Payment Form                                                 |
| `/success`                | Success Page         | user only `<PrivateRoute>` | Success page if paied                                        |                                                              |
|                           |                      |                            |                                                              |

## Components
​
- LoginPage
- RegisterPage
- Cart
- Pay
- Success
- Header
- Footer
- CategoryItem
- Navbar
- NewArrival
- NewsLetter
- BrandImages
​

​
​
# Server / Backend
​
## Models
​
User model
​
```
{
  user: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  favorites: [{type: Schema.Types.ObjectId,ref:'Exit'}]
  userAgreement: {type: boolean, required: true, default: false}
}
```
​
Product model
​
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
        rating: { type: Number, default: 0 }
 }
```
​
Cart model
​
```
 {
   userId: { type: String, required: true },
        products: [
            {
                productId: { type: String},
                quantity: { type: Number, default: 1}
            }
        ]
 }
 ```
​
Order model
​
```
 {
          userId: { type: String, required: true },
        products: [
            {
                productId: { type: String},
                quantity: { type: Number, default: 1}
            }
        ],
        amount: { type: Number, required: true},
        address: { type: Object, required: true}, // type object to store all address info. from user
        status: { type: String, default: 'Panding'} //panding , onway ,....
 }
 ```
​
Wishlist model
​
```
 {
        userId: { type: String, required: true },
         products: [
            {
                productId: { type: String},
            }
        ],
        isLiked: { type: Boolean, default: false }
 }
​
​
​
## Backend routes
​
| HTTP Method | URL                     | Request Body                                                                                                                    
| ----------- | ------------------------| -----------------------------------------
| POST        | `/auth/register`        | {username, email, password}                                                                  
| POST        | `/auth/login`           | {username, password}                                                                         
| POST        | `/auth/logout`          | (empty)                                                                                   
| POST        | /api/products           | const newProduct = new Product(req.body)|
| PUT         | /api/products/:id       |                                                        
| DELETE      | /api/products/:id       |                                                          
| GET         | /api/products/find/:id  |                                                                                           
| GET         | /api/products           |                                                                                                   
| PUT         | /api/users/:id          |                                                                    
​| DELETE      | /api/users/:id          |                                           
| GET         | /api/users/find/:id     |                                        
| GET         | /api/users              |                                  
| POST        | /api/cart               |                                  
| PUT         | /api/cart/:id           |                                  
| DELETE      | /api/cart/:id           |                                 
| GET         | /api/cart/find/:userId  |                               
| GET         | /api/cart               |                     
| POST        | /api/order              |                                
| PUT         | /api/order/:id          |                                         
| DELETE      | /api/order/:id          |                               
| GET         | /api/order/find/:userId |                              
| GET         | /api/order              |                               
| POST        | /api/stripe/payment     |                                  

## Links
​
### Trello 
​
[Link to your trello board](hhttps://trello.com/b/dDLdRkIG/blush-app)
​
### Git
​
The url to your repository and to your deployed project
​
[FrontEnd repository Link](https://github.com/mahaatechcampus/Final-Project-T1000/tree/main/blush-app/frontend)
​
[BackEnd repository Link](https://github.com/mahaatechcampus/Final-Project-T1000/tree/main/blush-app/backend)
​
[Deployed App Link] (http://heroku.com/)
​
### Slides
​
The url to your presentation slides
​
[Slides Link](http://slides.com/)
​
Wireframe
​
The url to your presentation slides
​
[Figma Link](https://www.figma.com/proto/N3BbSY8P5ZtCmOcmnkjvO4/Blush-Store?node-id=2%3A3&scaling=min-zoom&page-id=0%3A1)
​
Blush's Palette: https://ibb.co/prhDFMG

Blush's Fonts:   poppins: "'poppins',sans-serif",
                 roboto: "'Roboto', sans-serif"
      
     
