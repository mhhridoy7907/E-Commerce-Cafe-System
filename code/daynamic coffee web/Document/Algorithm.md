
🔹 1. Product Load Algorithm
START
→ Send GET request to Apps Script API
→ Fetch Products Sheet data from Google Sheets
→ Convert data to JSON format
→ Return product list to frontend
→ Display products in UI grid
END



🔹 2. Add to Cart Algorithm
START
→ User clicks "Add to Cart"
→ Check product already exists in cart?
   → YES: increase quantity
   → NO: add new item to cart array
→ Update total price
→ Update cart UI
END



🔹 3. Checkout & Order Placement Algorithm
START
→ User fills checkout form
→ Validate input (name, phone, address)
→ Create order object (items + total + user info)
→ Send POST request to Apps Script API
→ Save order into Google Sheets (Orders Sheet)
→ Update product stock (Products Sheet)
→ Return success response
→ Show confirmation message
END


🔹 4. Stock Update Algorithm
START
→ Get ordered items
→ For each product:
   → Find product in Products Sheet
   → stock = stock - ordered_quantity
   → Update sheet row
END


🔹 5. Data Sync Algorithm
START
→ Frontend sends request
→ Apps Script receives request
→ Read/Write Google Sheets data
→ Convert response to JSON
→ Send response back to frontend
END




🔁 FLOW CHART (System Workflow)
[User Opens Website]
          ↓
[Fetch Products API Request]
          ↓
[Google Apps Script Backend]
          ↓
[Google Sheets Database]
          ↓
[Return Products Data]
          ↓
[Display Products UI]
          ↓
[Add to Cart Action]
          ↓
[Update Cart State]
          ↓
[Checkout Form Submit]
          ↓
[POST API Request]
          ↓
[Apps Script Order Processing]
          ↓
[Update Google Sheets (Orders + Stock)]
          ↓
[Send Confirmation Response]
          ↓
[Show Success Message in UI]
