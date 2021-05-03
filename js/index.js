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


const navBar = document.querySelectorAll('nav > a')
// console.log(navBar)

navBar[0].textContent = siteContent.nav['nav-item-1']
navBar[1].textContent = siteContent.nav['nav-item-2']
navBar[2].textContent = siteContent.nav['nav-item-3']
navBar[3].textContent = siteContent.nav['nav-item-4']
navBar[4].textContent = siteContent.nav['nav-item-5']
navBar[5].textContent = siteContent.nav['nav-item-6']


// const NavBar1 = document.querySelector('nav a:nth-of-type(1)');
// navBar1.textContent = 'Service';
// const NavBar2 = NavBar1.nextElementSibling;
// NavBar2.textContent = 'Product';
// const NavBar3 = NavBar2.nextElementSibling;
// NavBar3.textContent = 'Vision';
// const NavBar4 = NavBar3.nextElementSibling;
// NavBar4.textContent = 'Features';
// const NavBar5 = NavBar4.nextElementSibling;
// NavBar5.textContent = 'About';
// const NavBar6 = NavBar5.nextElementSibling;
// NavBar6.textContent = 'Contact';

// const logo = document.getElementById('logo-img');


const headerImg = siteContent.nav['img-src'];
// document.querySelector('#logo-img').src = "img/header-img.png";

const ctaText = document.querySelector('h1');
ctaText.innerText = siteContent.cta['h1'];

// document.querySelector('h1').innerText = 'DOM IS AWESOME'

document.querySelector('button').textContent = siteContent.cta['button']

const ctaImg = document.querySelector('#cta-img')
ctaImg.src = siteContent.cta['img-src'];
// document.querySelector('#cta-img').src = "img/header-img.png";

const features = document.querySelector('.top-content .text-content:nth-of-type(1)');
const about = features.nextElementSibling;

features.querySelector('h4').textContent = 'Features'
features.querySelector('p').textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
about.querySelector('h4').textContent = 'About'
about.querySelector('p').textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const middleImg = document.querySelector('#middle-img')
middleImg.src = siteContent['main-content']['middle-img-src'];

const services = document.querySelector('.bottom-content .text-content:nth-of-type(1)');
const product = services.nextElementSibling;
const vision = product.nextElementSibling;

services.querySelector('h4').textContent = 'Services'
services.querySelector('p').textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
product.querySelector('h4').textContent = 'Product'
product.querySelector('p').textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
vision.querySelector('h4').textContent = 'Vision'
vision.querySelector('p').textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'


const contact = document.querySelector('.contact');
const subtitle = contact.querySelector('h4')
const address = contact.querySelector('p:nth-of-type(1)');
const phone = address.nextElementSibling;
const email = phone.nextElementSibling;

subtitle.textContent=siteContent['contact']['contact-h4'];
address.textContent=siteContent['contact']['address'];
phone.textContent=siteContent['contact']['phone'];
email.textContent=siteContent['contact']['email'];


const footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];

// const contact = document.querySelector('.contact');
// const address = contact.querySelector('p:nth-of-type(1)')
// const phone = address.nextElementSibling;
// const email = phone.nextElementSibling;


// contact.h4.textContent = 'Contact';
// address.p.textContent = '123 Way 456 Street Somewhere, USA'
// phone.p.textContent = '1 (888) 888-8888'
// email.p.textContent = 'sales@greatidea.io'

// document.querySelector('footer').p.textContent= 'Copyright Great Idea! 2018';

const blogLink = document.createElement('a');
blogLink.textContent = 'Blog';
blogLink.href = '#';
document.querySelector('nav').prepend(blogLink);

const otherLink = document.createElement('a');
otherLink.textContent = 'Lawsuit?';
otherLink.href = '#';
document.querySelector('nav').appendChild(otherLink);

navBar.forEach(item => item.style.color = 'green');

blogLink.style.color = 'green';
otherLink.style.color = 'green'