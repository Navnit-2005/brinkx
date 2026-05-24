const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const contactForm = document.querySelector("#contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = contactForm.querySelector(".form-status");
    const formData = new FormData(contactForm);
    const name = formData.get("name");
    const service = formData.get("service");

    if (status) {
      status.textContent = `Thanks, ${name}. Your ${service} brief is ready to send. Connect this form to your email or form service for live submissions.`;
    }

    contactForm.reset();
  });
}

const hoverVideos = document.querySelectorAll(".hover-video");

hoverVideos.forEach((video) => {
  const iframe = video.querySelector("iframe");
  const videoId = video.dataset.videoId;

  if (!iframe || !videoId) {
    return;
  }

  const playVideo = () => {
    const origin = window.location.origin && window.location.origin !== "null"
      ? `&origin=${encodeURIComponent(window.location.origin)}`
      : "";

    iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&playsinline=1&controls=1&rel=0&modestbranding=1${origin}`;
    video.classList.add("is-playing");
  };

  const stopVideo = () => {
    iframe.src = "";
    video.classList.remove("is-playing");
  };

  video.addEventListener("mouseenter", playVideo);
  video.addEventListener("mouseleave", stopVideo);
  video.addEventListener("focusin", playVideo);
  video.addEventListener("focusout", stopVideo);
});
