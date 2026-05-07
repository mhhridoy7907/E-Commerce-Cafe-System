<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

<title>Luxury Cafe</title>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">

<link rel="icon" type="image/x-icon" href="https://i.pinimg.com/736x/4b/e4/f4/4be4f458c1bdda484a17fff3bb3035b8.jpg">
<style>

:root{
--main:#A78873;
--brown:#5E463A;
--dark:#372821;
--black:#171614;
--pure:#000000;
--white:#ffffff;
--glass:rgba(255,255,255,0.08);
--border:rgba(255,255,255,0.15);
}

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Poppins',sans-serif;
scroll-behavior:smooth;
}

body{
background:
linear-gradient(rgba(0,0,0,.75),rgba(0,0,0,.75)),
url('https://i.pinimg.com/736x/20/9c/82/209c82cdbd575c46460a1c952057f040.jpg');
background-size:cover;
background-position:center;
background-attachment:fixed;
color:var(--white);
overflow-x:hidden;
}

/* ================= NAVBAR ================= */

nav{
position:fixed;
top:0;
left:0;
width:100%;
padding:18px 8%;
display:flex;
justify-content:space-between;
align-items:center;
backdrop-filter:blur(15px);
background:rgba(0,0,0,0.35);
border-bottom:1px solid var(--border);
z-index:1000;
}

.logo{
font-size:30px;
font-weight:700;
color:var(--main);
}

.nav-links{
display:flex;
gap:28px;
}

.nav-links a{
text-decoration:none;
color:white;
font-size:15px;
transition:.3s;
}

.nav-links a:hover{
color:var(--main);
}

.nav-right{
display:flex;
align-items:center;
gap:15px;
}

.search-box{
background:var(--glass);
padding:10px 15px;
border-radius:30px;
display:flex;
align-items:center;
border:1px solid var(--border);
}

.search-box input{
background:transparent;
border:none;
outline:none;
color:white;
width:170px;
}

.cart-btn{
background:var(--main);
padding:10px 18px;
border-radius:30px;
border:none;
color:white;
cursor:pointer;
font-weight:600;
transition:.3s;
}

.cart-btn:hover{
background:var(--brown);
transform:translateY(-3px);
}

/* ================= HERO ================= */

.hero{
min-height:100vh;
display:flex;
justify-content:center;
align-items:center;
text-align:center;
padding:120px 8%;
}

.hero-content{
max-width:800px;
backdrop-filter:blur(14px);
background:rgba(255,255,255,0.06);
padding:60px;
border-radius:30px;
border:1px solid var(--border);
box-shadow:0 0 40px rgba(0,0,0,0.4);
}

.hero h1{
font-size:70px;
line-height:1.2;
margin-bottom:20px;
}

.hero h1 span{
color:var(--main);
}

.hero p{
font-size:18px;
color:#ddd;
margin-bottom:30px;
}

.hero-btn{
padding:15px 35px;
background:var(--main);
border:none;
border-radius:50px;
font-size:16px;
color:white;
cursor:pointer;
font-weight:600;
transition:.3s;
}

.hero-btn:hover{
background:var(--brown);
transform:scale(1.05);
}

/* ================= SECTION ================= */

section{
padding:100px 8%;
}

.section-title{
text-align:center;
font-size:45px;
margin-bottom:60px;
color:var(--main);
}

/* ================= CATEGORY ================= */

.categories{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:25px;
}

.category-card{
padding:40px 20px;
border-radius:25px;
text-align:center;
backdrop-filter:blur(12px);
background:rgba(255,255,255,0.06);
border:1px solid var(--border);
transition:.4s;
}

.category-card:hover{
transform:translateY(-10px);
background:rgba(255,255,255,0.09);
}

.category-card h3{
margin-top:15px;
font-size:24px;
}

/* ================= PRODUCTS ================= */

.products{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
gap:30px;
}

.product-card{
padding:20px;
border-radius:25px;
backdrop-filter:blur(14px);
background:rgba(255,255,255,0.07);
border:1px solid var(--border);
transition:.4s;
}

.product-card:hover{
transform:translateY(-10px);
}

.product-card img{
width:100%;
height:240px;
object-fit:cover;
border-radius:20px;
margin-bottom:20px;
}

.product-card h3{
font-size:24px;
margin-bottom:10px;
}

.product-card p{
font-size:14px;
color:#ddd;
margin-bottom:15px;
}

.price{
font-size:22px;
font-weight:700;
color:var(--main);
margin-bottom:15px;
}

.rating{
margin-bottom:15px;
color:gold;
}

.add-btn{
width:100%;
padding:13px;
border:none;
border-radius:40px;
background:var(--main);
color:white;
font-weight:600;
cursor:pointer;
transition:.3s;
}

.add-btn:hover{
background:var(--brown);
}

/* ================= ABOUT ================= */

.about{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
gap:40px;
align-items:center;
}

.about img{
width:100%;
border-radius:30px;
}

.about-content{
backdrop-filter:blur(15px);
background:rgba(255,255,255,0.07);
padding:40px;
border-radius:30px;
border:1px solid var(--border);
}

.about-content h2{
font-size:40px;
margin-bottom:20px;
color:var(--main);
}

.about-content p{
line-height:1.8;
color:#ddd;
}

/* ================= REVIEWS ================= */

.reviews{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
gap:30px;
}

.review-card{
padding:30px;
border-radius:25px;
backdrop-filter:blur(14px);
background:rgba(255,255,255,0.06);
border:1px solid var(--border);
}

.review-card h3{
margin-bottom:10px;
color:var(--main);
}

/* ================= CONTACT ================= */

.contact-container{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(320px,1fr));
gap:40px;
}

.contact-form{
padding:40px;
border-radius:30px;
backdrop-filter:blur(14px);
background:rgba(255,255,255,0.06);
border:1px solid var(--border);
}

.contact-form input,
.contact-form textarea{
width:100%;
padding:15px;
margin-bottom:20px;
border:none;
outline:none;
border-radius:15px;
background:rgba(255,255,255,0.08);
color:white;
}

.contact-form textarea{
height:140px;
resize:none;
}

.contact-form button{
padding:14px 30px;
border:none;
background:var(--main);
color:white;
border-radius:40px;
cursor:pointer;
font-weight:600;
}

/* ================= FOOTER ================= */

footer{
padding:40px 8%;
text-align:center;
background:rgba(0,0,0,.5);
backdrop-filter:blur(12px);
border-top:1px solid var(--border);
}

footer p{
margin:10px 0;
color:#ccc;
}

.socials{
margin-top:15px;
display:flex;
justify-content:center;
gap:20px;
}

.socials a{
color:white;
font-size:20px;
text-decoration:none;
transition:.3s;
}

.socials a:hover{
color:var(--main);
}

/* ================= RESPONSIVE ================= */

@media(max-width:900px){

.hero h1{
font-size:45px;
}

.nav-links{
display:none;
}

.search-box{
display:none;
}

}

</style>
</head>

<body>

<!-- ================= NAVBAR ================= -->

<nav>

<div class="logo"> Luxury Cafe</div>

<div class="nav-links">
<a href="#">Home</a>
<a href="page/menu.html">Menu</a>
<a href="#about">About</a>
<a href="#review">Reviews</a>
<a href="#contact">Contact</a>
</div>

<div class="nav-right">

<div class="search-box">
<input type="text" placeholder="Search coffee...">
</div>

<button class="cart-btn">🛒 Cart</button>

</div>

</nav>

<!-- ================= HERO ================= -->

<section class="hero">

<div class="hero-content">

<h1>Fresh Coffee <span>& Delicious Cafe Food</span></h1>

<p>
Premium Coffee, Milk Shake, Tea, Juice, Fast Food, Desserts & More.
Experience Luxury Glassmorphism Cafe Design.
</p>

<button class="hero-btn">Order Now</button>

</div>

</section>

<!-- ================= CATEGORY ================= -->

<section>

<h2 class="section-title">Cafe Categories</h2>

<div class="categories">

<div class="category-card">
<h3>☕ Hot Coffee</h3>
</div>

<div class="category-card">
<h3>🧊 Cold Coffee</h3>
</div>

<div class="category-card">
<h3>🥤 Milk Shake</h3>
</div>

<div class="category-card">
<h3>🍵 Tea</h3>
</div>

<div class="category-card">
<h3>🧃 Fresh Juice</h3>
</div>

<div class="category-card">
<h3>🍔 Fast Food</h3>
</div>

<div class="category-card">
<h3>🍰 Desserts</h3>
</div>

<div class="category-card">
<h3>🍕 Snacks</h3>
</div>

</div>

</section>

<!-- ================= PRODUCTS ================= -->

<section id="menu">

<h2 class="section-title">Featured Menu</h2>

<div class="products">

<!-- Product -->

<div class="product-card">
<img src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1931&auto=format&fit=crop">
<h3>Cappuccino</h3>
<p>Rich espresso with creamy milk foam.</p>
<div class="rating">★★★★★</div>
<div class="price">$12</div>
<button class="add-btn">Add To Cart</button>
</div>

<div class="product-card">
<img src="https://images.unsplash.com/photo-1577805947697-89e18249d767?q=80&w=1887&auto=format&fit=crop">
<h3>Chocolate Milk Shake</h3>
<p>Cold creamy chocolate shake with toppings.</p>
<div class="rating">★★★★★</div>
<div class="price">$15</div>
<button class="add-btn">Add To Cart</button>
</div>

<div class="product-card">
<img src="https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?q=80&w=1974&auto=format&fit=crop">
<h3>Espresso Coffee</h3>
<p>Strong premium roasted espresso coffee.</p>
<div class="rating">★★★★★</div>
<div class="price">$10</div>
<button class="add-btn">Add To Cart</button>
</div>

<div class="product-card">
<img src="https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1974&auto=format&fit=crop">
<h3>Fresh Orange Juice</h3>
<p>Natural healthy fresh orange juice.</p>
<div class="rating">★★★★☆</div>
<div class="price">$9</div>
<button class="add-btn">Add To Cart</button>
</div>

<div class="product-card">
<img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1998&auto=format&fit=crop">
<h3>Beef Burger</h3>
<p>Juicy grilled burger with cheese.</p>
<div class="rating">★★★★★</div>
<div class="price">$18</div>
<button class="add-btn">Add To Cart</button>
</div>

<div class="product-card">
<img src="https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?q=80&w=1887&auto=format&fit=crop">
<h3>Pizza</h3>
<p>Italian cheese pizza with extra toppings.</p>
<div class="rating">★★★★★</div>
<div class="price">$20</div>
<button class="add-btn">Add To Cart</button>
</div>

<div class="product-card">
<img src="https://images.unsplash.com/photo-1559620192-032c4bc4674e?q=80&w=1974&auto=format&fit=crop">
<h3>French Fries</h3>
<p>Crispy golden potato fries with sauce.</p>
<div class="rating">★★★★☆</div>
<div class="price">$8</div>
<button class="add-btn">Add To Cart</button>
</div>

<div class="product-card">
<img src="https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1935&auto=format&fit=crop">
<h3>Strawberry Shake</h3>
<p>Sweet strawberry creamy milkshake.</p>
<div class="rating">★★★★★</div>
<div class="price">$14</div>
<button class="add-btn">Add To Cart</button>
</div>

</div>

</section>

<!-- ================= ABOUT ================= -->

<section id="about">

<div class="about">

<img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop">

<div class="about-content">

<h2>About Our Cafe</h2>

<p>
We provide world-class coffee experience with premium beans,
fresh juices, delicious desserts, milk shakes, tea and fast food.
Our cafe combines luxury atmosphere with modern glassmorphism
UI design for the best customer experience.
</p>

</div>

</div>

</section>

<!-- ================= REVIEWS ================= -->

<section id="review">

<h2 class="section-title">Customer Reviews</h2>

<div class="reviews">

<div class="review-card">
<h3>⭐ Mahin</h3>
<p>
Best coffee shop experience ever. Beautiful environment and amazing taste.
</p>
</div>

<div class="review-card">
<h3>⭐ Hridoy</h3>
<p>
Luxury UI design and delicious burgers. Milk shake was awesome.
</p>
</div>

<div class="review-card">
<h3>⭐ Rahim</h3>
<p>
Fast service, quality coffee and premium food menu.
</p>
</div>

</div>

</section>

<!-- ================= CONTACT ================= -->

<section id="contact">

<h2 class="section-title">Contact Us</h2>

<div class="contact-container">

<div class="contact-form">

<input type="text" placeholder="Your Name">

<input type="email" placeholder="Your Email">

<input type="text" placeholder="Phone Number">

<textarea placeholder="Your Message"></textarea>

<button>Send Message</button>

</div>

<div class="about-content">

<h2>Visit Our Cafe</h2>

<p>
📍 Sylhet, Bangladesh <br><br>

📞 +880 123456789 <br><br>

📧 luxurycafe@gmail.com <br><br>

🕒 Open: 9AM - 11PM
</p>

</div>

</div>

</section>

<!-- ================= FOOTER ================= -->

<footer>

<h2> Luxury Cafe</h2>

<p>Premium Coffee & Fast Food Experience</p>

<p>Privacy Policy | Terms & Conditions</p>

<p>© 2026 Luxury Cafe. All Rights Reserved.</p>

<div class="socials">
<a href="#">Facebook</a>
<a href="#">Instagram</a>
<a href="#">YouTube</a>
<a href="#">Twitter</a>
</div>

</footer>

</body>
</html>
