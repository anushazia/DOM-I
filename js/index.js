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

//an effecient way to go through to change the element using .forEach()
const topNav = document.querySelectorAll('nav a')
topNav.forEach((element, index) => element.textContent = siteContent.nav[`nav-item-${index + 1}`])//for each can take 2 funcitons, an element and and index so you can go down to SiteContent nav and then loop over the nav item at an index and add 1 more each time.

//long way to do this is below!

// topNav[0].textContent = "Services"//not sure why .forEach is not working for the nav bar
// topNav[1].textContent = "Product"
// topNav[2].textContent = "Vision"
// topNav[3].textContent = "Features"
// topNav[4].textContent = "About"
// topNav[5].textContent = "Contact"

//cta section 
//image
const circleImage = document.getElementById("cta-img")
circleImage.setAttribute('src', siteContent["cta"]["img-src"])

//cta-title section
const title = document.querySelector("h1")
title.textContent = siteContent["cta"]["h1"]

//button
const button = document.querySelector("button")
button.textContent = siteContent["cta"]["button"]

//main-content section
//feature section
const featureTitle = document.querySelectorAll(".main-content h4")
featureTitle[0].textContent = siteContent["main-content"]["features-h4"]
const featureParagraph = document.querySelectorAll(".main-content p")
featureParagraph[0].textContent = siteContent["main-content"]["features-content"]

//about section
const aboutTitle = document.querySelectorAll(".main-content h4")
aboutTitle[1].textContent = siteContent["main-content"]["about-h4"]
const aboutParagraph = document.querySelectorAll(".main-content p")
aboutParagraph[1].textContent = siteContent["main-content"]["about-content"]
const middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//service section
const servicesTitle = document.querySelectorAll(".main-content h4")
servicesTitle[2].textContent = siteContent["main-content"]["services-h4"]
const servicesParagraph = document.querySelectorAll(".main-content p")
servicesParagraph[2].textContent = siteContent["main-content"]["services-content"]

//product section
const productTitle = document.querySelectorAll(".main-content h4")
productTitle[3].textContent = siteContent["main-content"]["product-h4"]
const productParagraph = document.querySelectorAll(".main-content p")
productParagraph[3].textContent = siteContent["main-content"]["product-content"]

//vision section
const visionTitle = document.querySelectorAll(".main-content h4")
visionTitle[4].textContent = siteContent["main-content"]["vision-h4"]
const visionParagraph = document.querySelectorAll(".main-content p")
visionParagraph[4].textContent = siteContent["main-content"]["vision-content"]

//contact section
//contact-h4
const contactHFour = document.querySelectorAll(".contact h4")
contactHFour[0].textContent = siteContent["contact"]["contact-h4"]

//address
const siteAddress = document.querySelector(".contact p:nth-child(2)")
siteAddress.textContent = siteContent["contact"]["address"]

//phone
const sitePhone = document.querySelector(".contact p:nth-child(3)")
sitePhone.textContent = siteContent["contact"]["phone"]

//email
const siteEmail = document.querySelector(".contact p:nth-child(4)")
siteEmail.textContent = siteContent["contact"]["email"]

//footer
const siteFooter = document.querySelectorAll("footer p")
siteFooter[0].textContent = siteContent["footer"]["copyright"]

//color change section
topNav.forEach(element => element.style.color = 'green')

//prepend Home Section
const homeLink = document.createElement('a')
homeLink.href = '#'
homeLink.textContent = "Home"
document.querySelector('nav').prepend(homeLink)
homeLink.style.color = 'green'

//append Blog Section
const blogLink = document.createElement('a')
blogLink.href = '#'
blogLink.textContent = "Blog"
document.querySelector('nav').append(blogLink)
blogLink.style.color = 'green'
