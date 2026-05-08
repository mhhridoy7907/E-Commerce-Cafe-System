# ☕ E-Commerce Coffee Web Application (Google Sheets Backend)

---

# Problem
Build an e-commerce coffee web application where users can browse coffee products, place orders, and manage a basic checkout flow.  
The system must store and sync product, order, and customer data using Google Sheets as a lightweight database instead of a traditional backend database.

---

# Planning

- Define product scope: coffee types, pricing, stock
- Decide architecture: Frontend + Google Sheets API backend layer

## Choose Stack
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Google Apps Script (bridge to Google Sheets)

## Development Steps
- Setup Google Sheets structure (acts as database tables)
- Create API endpoints using Apps Script Web App
- Deploy backend (Apps Script as REST API)
- Connect frontend with Google Sheets API
- Test full ordering flow

---

# Requirement Analysis

## Functional Requirements
- Display coffee products (name, price, image, description)
- Add to cart functionality
- Checkout form (name, address, phone, order details)
- Save orders into Google Sheets
- Admin sheet view for orders and inventory
- Basic product update capability via sheet

## Non-Functional Requirements
- Fast page load (<3 seconds)
- Mobile responsive UI
- Simple scalability (sheet-based expansion)
- Secure API access (basic token validation in Apps Script)
- Data consistency between UI and Google Sheets

## Data Requirements (Google Sheets Structure)

### Products Sheet
- id
- name
- price
- stock
- image_url

### Orders Sheet
- order_id
- customer_name
- items
- total_price
- status
- timestamp

### Users Sheet (Optional)
- user_id
- name
- contact

---

# Design

## System Architecture


Frontend (Web UI)
↓
REST API (HTTP requests)
↓
Google Apps Script (Backend Layer)
↓
Google Sheets (Database)


---

## Frontend Design

- **Home Page:** Product listing grid
- **Product Card:** Image, name, price, Add to Cart button
- **Cart Page:** Selected items, quantity, total calculation
- **Checkout Page:** Customer form submission
- **Admin View (Optional):** Orders & inventory table

---

## Backend Design (Google Apps Script)

### API Endpoints
- `doGet(e)` → Fetch products / orders
- `doPost(e)` → Create order / update data

### Core Functions
- `getProducts()` → Return product list
- `createOrder()` → Save order to Google Sheets
- `updateStock()` → Update product stock

### Response Format
- JSON-based communication between frontend and backend

---

## Data Flow

1. User loads website → products fetched from Apps Script → Google Sheets
2. User adds products to cart → stored in frontend state
3. User submits order → POST request to Apps Script
4. Apps Script saves order → Google Sheets
5. Response returned → order confirmation shown in UI

---

## Security Design

- API key validation in request header
- Input sanitization in Google Apps Script
- Sheet-level protection for admin data
- Restrict direct unauthorized access to Google Sheets

---

# End of Design