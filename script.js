// Initialize GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// DOM Ready
document.addEventListener("DOMContentLoaded", function () {
  // Initialize components
  initNavbar();
  initCountdown();
  initEventCards();
  initModal();
  initAnimations();
  initRegisterButtons();
  initMobileMenu();
  initBrochureDownload();

  console.log("INNOVARE 2026 - Redefining Possibilities");
});

// Navbar Scroll Effect - REMOVED transparency effect
function initNavbar() {
  // Update active nav link on scroll
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (scrollY >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}

// Countdown Timer
function initCountdown() {
  const countdownDate = new Date("February 20, 2026 8:59:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = countdownDate - now;

    if (timeLeft < 0) {
      document.getElementById("days").textContent = "00";
      document.getElementById("hours").textContent = "00";
      document.getElementById("minutes").textContent = "00";
      document.getElementById("seconds").textContent = "00";
      return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Animate digit changes
    animateDigit("days", days.toString().padStart(2, "0"));
    animateDigit("hours", hours.toString().padStart(2, "0"));
    animateDigit("minutes", minutes.toString().padStart(2, "0"));
    animateDigit("seconds", seconds.toString().padStart(2, "0"));
  }

  function animateDigit(elementId, newValue) {
    const element = document.getElementById(elementId);
    const currentValue = element.textContent;

    if (currentValue !== newValue) {
      // Add animation class
      element.classList.add("changing");

      // Update value after a short delay for animation
      setTimeout(() => {
        element.textContent = newValue;
        element.classList.remove("changing");
      }, 150);
    }
  }

  // Update countdown every second
  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// Event Cards Data
const eventsData = [
  {
    id: 1,
    title: "Code Arena",
    desc: "Test your coding skills in this competitive programming challenge with multiple problem statements.",
    icon: "fas fa-code",
    type: "Coding & DSA",
    fee: "₹100",
    rules: [
      "Individual participation only",
      "Duration: 3 hours",
      "Languages: C, C++, Java, Python",
      "Internet access not allowed",
      "Judging based on correctness and efficiency",
    ],
    regType: "Online + Offline",
    contact: "Aryan Sharma - 9876543210",
  },
  {
    id: 2,
    title: "Web Forge",
    desc: "Design and develop a responsive website based on the given theme within the time limit.",
    icon: "fas fa-laptop-code",
    type: "Web Designing",
    fee: "₹150 (team of 2)",
    rules: [
      "Team size: 2 members",
      "Duration: 4 hours",
      "Theme will be revealed on spot",
      "Use of frameworks allowed",
      "Judging based on design, functionality and creativity",
    ],
    regType: "Online Registration Only",
    contact: "Priya Patel - 9876543211",
  },
  {
    id: 3,
    title: "Vision Talks",
    desc: "Present your innovative tech ideas to a panel of judges in a TED-talk style presentation.",
    icon: "fas fa-microphone",
    type: "Tech Talks",
    fee: "Free",
    rules: [
      "Individual or team of 2",
      "Presentation: 10 minutes + 5 min Q&A",
      "Topics: Emerging technologies",
      "PPT slides required",
      "Originality and feasibility are key criteria",
    ],
    regType: "Online Registration Only",
    contact: "Rahul Verma - 9876543212",
  },
  {
    id: 4,
    title: "FrameCraft",
    desc: "Capture and edit photos/videos based on given themes. Showcase your photography skills.",
    icon: "fas fa-camera",
    type: "Photography & Videography",
    fee: "₹50",
    rules: [
      "Individual participation",
      "Theme will be announced on spot",
      "Bring your own equipment",
      "Editing time: 2 hours",
      "Original content only, no stock images",
    ],
    regType: "On-site Registration",
    contact: "Neha Singh - 9876543213",
  },
  {
    id: 5,
    title: "HuntX",
    desc: "Solve puzzles, crack codes, and find clues in this exciting campus-wide treasure hunt.",
    icon: "fas fa-search",
    type: "Treasure Hunt",
    fee: "₹200 (team of 4)",
    rules: [
      "Team size: 3-4 members",
      "Duration: 3 hours",
      "No electronic devices except smartphones",
      "No running or causing disturbances",
      "First team to finish wins",
    ],
    regType: "Online + Offline",
    contact: "Karan Mehta - 9876543214",
  },
  {
    id: 6,
    title: "BattleZone",
    desc: "Compete in the ultimate BGMI tournament. Show your gaming skills and strategic thinking.",
    icon: "fas fa-gamepad",
    type: "BGMI Tournament",
    fee: "₹300 (team of 4)",
    rules: [
      "Team size: 4 members (1 substitute allowed)",
      "Tournament format: Knockout",
      "Devices will be provided",
      "Standard tournament rules apply",
      "Fair play is mandatory",
    ],
    regType: "Online Registration Only",
    contact: "Vikram Reddy - 9876543215",
  },
  {
    id: 7,
    title: "ArtVerse",
    desc: "Express your creativity through painting and drawing on the given theme and canvas.",
    icon: "fas fa-palette",
    type: "Painting & Drawing",
    fee: "₹80",
    rules: [
      "Individual participation",
      "Duration: 4 hours",
      "Theme will be given on spot",
      "Materials will be provided",
      "Judging based on creativity and technique",
    ],
    regType: "On-site Registration",
    contact: "Ananya Das - 9876543216",
  },
  {
    id: 8,
    title: "Canva Clash",
    desc: "Design eye-catching posters and digital graphics using Canva based on given prompts.",
    icon: "fas fa-paint-brush",
    type: "Poster Design",
    fee: "₹100",
    rules: [
      "Individual participation",
      "Duration: 2 hours",
      "Use of Canva only",
      "Theme revealed at start",
      "Judging based on design, message, and creativity",
    ],
    regType: "Online Registration Only",
    contact: "Siddharth Joshi - 9876543217",
  },
];

// Initialize Event Cards
function initEventCards() {
  const eventsGrid = document.querySelector(".events-grid");

  eventsData.forEach((event) => {
    const eventCard = document.createElement("div");
    eventCard.className = "event-card";
    eventCard.setAttribute("data-id", event.id);

    eventCard.innerHTML = `
            <div class="event-icon">
                <i class="${event.icon}"></i>
            </div>
            <h3 class="event-title">${event.title}</h3>
            <p class="event-desc">${event.desc}</p>
            <div class="event-footer">
                <span class="event-type">${event.type}</span>
                <span class="event-cta">
                    Learn More <i class="fas fa-chevron-right"></i>
                </span>
            </div>
        `;

    eventsGrid.appendChild(eventCard);
  });

  // Add click event to each card
  document.querySelectorAll(".event-card").forEach((card) => {
    card.addEventListener("click", function () {
      const eventId = parseInt(this.getAttribute("data-id"));
      const eventData = eventsData.find((e) => e.id === eventId);
      openModal(eventData);
    });
  });
}

// Modal Functions
function initModal() {
  const modalOverlay = document.getElementById("modalOverlay");
  const modalClose = document.getElementById("modalClose");

  // Close modal when clicking X or outside
  modalClose.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", function (e) {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  // Close modal with Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
      closeModal();
    }
  });
}

function openModal(eventData) {
  const modalOverlay = document.getElementById("modalOverlay");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");
  const modalRules = document.getElementById("modalRules");
  const modalFee = document.getElementById("modalFee");
  const modalRegType = document.getElementById("modalRegType");
  const modalContact = document.getElementById("modalContact");

  // Populate modal with event data
  modalTitle.textContent = eventData.title;
  modalDesc.textContent = eventData.desc;
  modalFee.textContent = eventData.fee;
  modalRegType.textContent = eventData.regType;
  modalContact.textContent = eventData.contact;

  // Clear and populate rules
  modalRules.innerHTML = "";
  eventData.rules.forEach((rule) => {
    const li = document.createElement("li");
    li.textContent = rule;
    modalRules.appendChild(li);
  });

  // Show modal with animation
  modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modalOverlay = document.getElementById("modalOverlay");
  modalOverlay.classList.remove("active");
  document.body.style.overflow = "auto";
}

// GSAP Animations
function initAnimations() {
  // Animate hero elements on load
  gsap.from(".hero-tagline", {
    duration: 1,
    y: 30,
    opacity: 0,
    delay: 0.5,
  });

  gsap.from(".hero-title", {
    duration: 1.2,
    y: 50,
    opacity: 0,
    delay: 0.8,
  });

  gsap.from(".hero-description", {
    duration: 1,
    y: 30,
    opacity: 0,
    delay: 1.2,
  });

  gsap.from(".hero-buttons", {
    duration: 1,
    y: 30,
    opacity: 0,
    delay: 1.4,
  });

  gsap.from(".countdown-container", {
    duration: 1,
    y: 50,
    opacity: 0,
    delay: 1.6,
    ease: "back.out(1.7)",
  });

  // Animate sections on scroll
  const sections = document.querySelectorAll(".section");

  sections.forEach((section) => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
      y: 50,
      opacity: 0,
      duration: 1,
    });
  });

  // // Animate event cards
  // gsap.from('.event-card', {
  //     scrollTrigger: {
  //         trigger: '.events-grid',
  //         start: "top 70%",
  //         toggleActions: "play none none none"
  //     },
  //     y: 50,
  //     opacity: 0,
  //     stagger: 0.1,
  //     duration: 0.8
  // });

  // // Animate benefit cards
  // gsap.from('.benefit-card', {
  //     scrollTrigger: {
  //         trigger: '.benefits-grid',
  //         start: "top 70%",
  //         toggleActions: "play none none none"
  //     },
  //     y: 50,
  //     opacity: 0,
  //     stagger: 0.2,
  //     duration: 0.8
  // });

  // Animate timeline items
  gsap.from(".timeline-item", {
    scrollTrigger: {
      trigger: ".timeline-items",
      start: "top 70%",
      toggleActions: "play none none none",
    },
    x: -100,
    opacity: 0,
    stagger: 0.3,
    duration: 0.8,
  });

  // Floating blob animations
  gsap.to(".blob-1", {
    duration: 20,
    x: "random(-100, 100)",
    y: "random(-50, 50)",
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
  });

  gsap.to(".blob-2", {
    duration: 25,
    x: "random(-80, 80)",
    y: "random(-40, 40)",
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
    delay: 5,
  });

  gsap.to(".blob-3", {
    duration: 30,
    x: "random(-120, 120)",
    y: "random(-60, 60)",
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
    delay: 10,
  });

  gsap.to(".blob-4", {
    duration: 35,
    x: "random(-150, 150)",
    y: "random(-70, 70)",
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
    delay: 15,
  });
}

// Register Button Handlers
function initRegisterButtons() {
  const registerButtons = document.querySelectorAll(
    ".register-btn, .modal-register-btn",
  );

  registerButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();

      // Add click animation
      gsap.to(this, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
      });

      // Simulate registration process
      setTimeout(() => {
        // In a real implementation, this would open a registration form
        // For now, show a notification
        showNotification(
          "Registration will open soon! Stay tuned for updates.",
        );
      }, 300);
    });
  });
}

// Brochure Download Handler
function initBrochureDownload() {
  const brochureButton = document.querySelector(".brochure-btn");

  brochureButton.addEventListener("click", function (e) {
    e.preventDefault();

    // Add click animation
    gsap.to(this, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
    });

    // Simulate download
    setTimeout(() => {
      // In real, download PDF
      showNotification("Brochure download starting...");
      // Open placeholder link
      window.open("https://example.com/innovare2026-brochure.pdf", "_blank");
    }, 300);
  });
}

// Mobile Menu Toggle
function initMobileMenu() {
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navMenu = document.querySelector(".nav-menu");

  mobileMenuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    this.innerHTML = navMenu.classList.contains("active")
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>';
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
  });
}

// Notification System
function showNotification(message) {
  // Remove existing notification
  const existingNotification = document.querySelector(".notification");
  if (existingNotification) {
    existingNotification.remove();
  }

  // Create notification
  const notification = document.createElement("div");
  notification.className = "notification";
  notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-info-circle"></i>
            <span>${message}</span>
        </div>
    `;

  // Add styles for notification
  notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: rgba(255, 77, 0, 0.9);
        backdrop-filter: blur(10px);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        z-index: 3000;
        transform: translateY(100px);
        opacity: 0;
        transition: transform 0.3s, opacity 0.3s;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        border: 1px solid rgba(255, 255, 255, 0.1);
        max-width: 350px;
    `;

  // Style notification content
  const notificationContent = notification.querySelector(
    ".notification-content",
  );
  notificationContent.style.cssText = `
        display: flex;
        align-items: center;
        gap: 0.8rem;
        font-family: 'Inter', sans-serif;
        font-weight: 500;
    `;

  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateY(0)";
    notification.style.opacity = "1";
  }, 10);

  // Remove after 4 seconds
  setTimeout(() => {
    notification.style.transform = "translateY(100px)";
    notification.style.opacity = "0";

    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove();
      }
    }, 300);
  }, 4000);
}

// Add CSS for countdown animation
const style = document.createElement("style");
style.textContent = `
    .countdown-value.changing {
        animation: digitChange 0.3s ease;
    }
    
    @keyframes digitChange {
        0% { transform: translateY(0); opacity: 1; }
        50% { transform: translateY(-10px); opacity: 0; }
        51% { transform: translateY(10px); opacity: 0; }
        100% { transform: translateY(0); opacity: 1; }
    }
`;
document.head.appendChild(style);
