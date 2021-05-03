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
const ctaText = document.getElementsByTagName('h1')[0];
ctaText.innerHTML = cta.join('<br>');

const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent.cta['button'];

const ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent.cta['img-src']

// Main content

const contentSection = document.querySelector('.main-content');
const title = contentSection.querySelectorAll('h4');
const contentText = contentSection.querySelectorAll('p');

const features = title[0];
const about = title[1];
const services = title[2];
const product = title[3];
const vision = title[4];

features.textContent = siteContent["main-content"]["features-h4"];
about.textContent = siteContent["main-content"]["about-h4"];
services.textContent = siteContent["main-content"]["services-h4"];
product.textContent = siteContent["main-content"]["product-h4"];
vision.textContent = siteContent["main-content"]["vision-h4"];

const featuresText = contentText[0]
const aboutText = contentText[1]
const servicesText = contentText[2]
const productText = contentText[3]
const visionText = contentText[4]

featuresText.textContent = siteContent["main-content"]["features-content"];
aboutText.textContent = siteContent["main-content"]["about-content"];
servicesText.textContent = siteContent["main-content"]["services-content"];
productText.textContent = siteContent["main-content"]["product-content"];
visionText.textContent = siteContent["main-content"]["vision-content"];

document.querySelector('#middle-img').src = siteContent["main-content"]["middle-img-src"]

// Footer 

const contact = document.querySelector('.contact h4');
const contactInfo = document.querySelectorAll('.contact p');

const address = contactInfo[0];
const phone = contactInfo[1];
const email = contactInfo[2];

contact.textContent = siteContent['contact']["contact-h4"]
address.textContent = siteContent['contact']['address']
phone.textContent = siteContent['contact']['phone']
email.textContent = siteContent['contact']['email']

document.querySelector('footer p').textContent = siteContent['footer']['copyright']
