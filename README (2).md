
<h1 align="center"> Mini Shop – E-Commerce Store (React + Tailwind CSS)</h1>


A **simple, modern, and interactive React-based e-commerce website** featuring product listing, smart search, and a dynamic shopping cart.  
Perfect for **learning, demos, and showcasing frontend skills** 

---


---

##  Project Preview

![Mini Shop Preview](preview.png)

<img width="1494" height="2048" alt="preview image" src="https://github.com/user-attachments/assets/44f7f136-ef20-4d39-ae0f-72896d5334eb" />



##  Features

###  Product Listing
- Fetches products from **dummyjson.com API**
- Displays:
  - Product image
  - Title
  - Price
  - Stock status
  - **Add to Cart** button

---

###  Search & Filters
- Search products by **title**
- Filter products by **category**
- Sort products by **price**
  - Low → High
  - High → Low
- **Clear Filters** option to reset the view

---

###  Shopping Cart
- Add products to cart
- Increase / decrease product quantity
- Remove products from cart
- Cart data **persists using localStorage**

---

###  Responsive Design
- Fully responsive on:
  -  Mobile
  -  Tablet
  -  Desktop
- Sticky header for better navigation
- Adaptive grid layout based on screen size

---

###  UI / UX
- Clean & modern layout using **Tailwind CSS**
- Smooth hover effects
- Interactive buttons
- Clean transitions & animations
 

---

##  Technologies Used

| Technology | Description |
|---------|------------|
| React | Frontend library |
| React Hooks | State management |
| CSS Grid & Flexbox | Responsive layout |
| localStorage | Cart persistence |
| Fetch API | API calls |
| DummyJSON API | Product data |

---

##  Project Structure

```
Ecommerce-Website/
│
├── public/
│   └── vite.svg
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Cart.jsx
│   │   ├── Filters.jsx
│   │   └── ProductList.jsx
│   │
│   ├── hooks/
│   │   └── useDebounce.js
│   │
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md

```

---

##  How to Run Locally

```bash
git clone https://github.com/your-username/mini-shop.git
cd mini-shop
npm install
npm start
```

---

##  Future Enhancements

- Checkout page  
- User authentication  
- Payment gateway  
- Product filters & sorting  
- Wishlist feature  

---

