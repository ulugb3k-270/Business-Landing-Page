// Navbar && Sidebar
const menuBtn = document.querySelectorAll(".menu-btn");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".menu li");

// Toggle Sidebar open/close
menuBtn.forEach((btn) => {
  btn.addEventListener("click", sideNavToggle);
});

function sideNavToggle() {
  // Animation delay
  let delay = 100;

  // Toggle open class
  menu.classList.toggle("menu-open");

  //Sidenav Link Slide Animations
  setTimeout(() => {
    resetAnimations();
  }, delay * (links.length + 1));

  // Add animation to links
  links.forEach((link) => {
    // opacity
    link.style.opacity = "0";

    // Animation
    link.style.animation = "slideIn 400ms ease-in-out forwards";

    // Delay
    link.style.animationDelay = delay + "ms";

    // Increase delay for each line
    delay += 100;
  });

  function resetAnimations() {
    // Select all links
    links.forEach((link) => {
      // Remove animations
      link.style.animation = "none";

      // Set opacity back to default
      link.style.opacity = "1";
    });
  }
}

// ======= Slider ======= //

const cntrl = document.querySelectorAll(".slider-cntrl");
const cntrlMob = document.querySelectorAll(".pagination-mobile > li");
const title = document.querySelector(".title");
const subTitle = document.querySelectorAll(".sub-tutle");
const img = document.querySelector(".thumbnail");
const count = document.querySelector(".slider-count");
const progress = document.querySelector(".progress div");

let id = 0;

// Data
// Array with image paths for the slider
const images = ["./img/img1.jpg", "./img/img2.jpg", "./img/img3.jpg"];

// Progress widths for the slider
const progressWidth = ["33%", "66%", "100%"];

// Text variations for the slider
const text = ["Work", "Active", "Travel"];

// Pagination control
for (let i = 0; i < cntrl.length; i++) {
  //Add click event for all paginations
  cntrl[i].addEventListener("click", () => {
    // Run the slider function
    slider(i);

    // select id to clicked pagination index
    id = i;

    // Stop auto slide
    stopAutoSlide();
  });

  // Add click event for all pagination on mobile
  cntrlMob[i].addEventListener("click", () => {
    // Run the slider function
    slider(i);

    // Set id to clicked pagination index
    id = i;

    // Stop Auto Slide
    stopAutoSlide();
  });
}

function slider(i) {
  // Change thumbnail image
  img.src = images[i];

  // Progress progression
  progress.style.width = progressWidth[i];

  // Change Title
  title.innerText = text[i] + " Collection";

  // Change Sub Title
  subTitle.forEach((sub) => {
    sub.innerText = text[i] + " Collection";
  });

  // Change slide number
  count.innerText = "/0" + (i + 1);

  // Remove active class from all
  for (let i = 0; i < cntrl.length; i++) {
    cntrl[i].classList.remove("active");
    cntrl[i].classList.remove("pag-active");
  }

  // Reset active class to clicked element
  cntrl[i].classList.add("active");
  cntrlMob[i].classList.add("pag-active");
}

// Slider Automation

function nextSlide() {
  // Increment img id
  id++;

  // Check if id is greater than the number of aviable slides
  if (id > cntrl.length - 1) {
    id = 0;
  }

  slider(id);
}

// Automate Slider
let autoSlide = setInterval(nextSlide, 10000);

// Stop Automatic Slide
function stopAutoSlide() {
  clearInterval(autoSlide);

  // Restart Auto Slider
  autoSlide = setInterval(nextSlide, 10000);
}
