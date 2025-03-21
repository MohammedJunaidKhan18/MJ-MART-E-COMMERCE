#  MJ-MART E-COMMERCE

*MJ-MART* is a *React-based* e-commerce web application built using *Vite*.  
It allows users to *browse books, filter by category, view details, and add new books* to the library.  

## Installation & Setup  

### 1️⃣ Create Project using Vite  
Vite is used as the project bundler.  

sh
npm create vite@latest
# Select framework and variant: React + JavaScript
cd MJ-MART


### 2️⃣ Install Dependencies  

sh
npm install react-router-dom         # React Router for navigation
npm install @reduxjs/toolkit         # Redux Toolkit for state management
npm install react-redux              # React Redux for integration
npm install tailwindcss @tailwindcss/vite  # Tailwind CSS for styling
npm install                           # Install additional dependencies


### 3️⃣ Start the Development Server  

sh
npm run dev

After running the above command, a local development link will be provided, redirecting you to *MJ-MART*.

---

##  Project Overview  

###  Components  

- *Header* – Contains the logo and navigation links.  
- *Home* – Displays a welcome message, product categories, and top-rated books.  
- *ProductItem* – Shows metadata of a single item.  
- *ProductList* – Displays all products.  
- *ProductCategory* – Filters and displays products by category.  
- *TopRated* – Highlights the most popular books.  
- *ProductDetail* – Shows detailed information about a book.  
- *Cart* – Displays items added to the cart.  
- *CartItem* – Represents a single item in the cart.  
- *Checkout* – Displays order summary and checkout details.  
- *NotFound* – Handles undefined routes with an error message.  
- *Hooks (useProduct)* – Fetches product data.  

---

##  State Management  
The project uses *Redux Toolkit* to efficiently manage the state of the E-COMMERCE .  

---

##  GitHub Repository  
Find the complete project code here: 
https://github.com/MohammedJunaidKhan18/MJ-MART-E-COMMERCE.git
