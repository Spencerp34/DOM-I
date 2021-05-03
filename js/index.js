const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Nav Bar

const NavBar1 = document.querySelector('nav a:nth-of-type(1)');
NavBar1.textContent = NavBar1.textContent = siteContent.nav['nav-item-1'];
const NavBar2 = NavBar1.nextElementSibling;
NavBar2.textContent = NavBar1.textContent = siteContent.nav['nav-item-2'];
const NavBar3 = NavBar2.nextElementSibling;
NavBar3.textContent = NavBar1.textContent = siteContent.nav['nav-item-3'];
const NavBar4 = NavBar3.nextElementSibling;
NavBar4.textContent = NavBar1.textContent = siteContent.nav['nav-item-4'];
const NavBar5 = NavBar4.nextElementSibling;
NavBar5.textContent = NavBar1.textContent = siteContent.nav['nav-item-5'];
const NavBar6 = NavBar5.nextElementSibling;
NavBar6.textContent = NavBar1.textContent = siteContent.nav['nav-item-6'];

// Top Content

const cta = siteContent["cta"]["h1"].split(' ');
const title = document.getElementsByTagName('h1')[0];
title.innerHTML = cta.join('<br>');

const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent.cta['button'];

const ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent.cta['img-src']

// Main content

const features = document.querySelector('.text-content h4:nth-of-type(1)');
const featuresText = document.querySelector('.text-content p:nth-of-type(1)');


const about = features.nextElementSibling;
const services = about.nextElementSibling;
const product = services.nextElementSibling;
const vision = product.nextElementSibling;

const aboutText = featuresText.nextElementSibling;
const servicesText = aboutText.nextElementSibling;
const productText = servicesText.nextElementSibling;
const visionText = productText.nextElementSibling;


contentTitles.textContent = siteContent["main-content"]['features-h4'];
contentTitles2.textContent = 'Yolo';
 siteContent["main-content"]['about-h4'];


contentText.textContent = siteContent['main-content']['features-content']

