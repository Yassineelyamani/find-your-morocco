(function () {
  "use strict";

  var WHATSAPP = "212673628871";
  var header = document.getElementById("header");
  var nav = document.getElementById("nav");
  var navToggle = document.getElementById("navToggle");
  var contactForm = document.getElementById("contactForm");
  var yearEl = document.getElementById("year");
  var navLinks = document.querySelectorAll(".nav__link");

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  function onScroll() {
    if (!header || document.body.classList.contains("page-seo")) return;
    var scrolled = window.scrollY > 80;
    header.classList.toggle("header--scrolled", scrolled);
    header.classList.toggle("header--transparent", !scrolled);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if ("IntersectionObserver" in window && navLinks.length) {
    var sections = document.querySelectorAll("section[id]");
    var sectionObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var id = entry.target.getAttribute("id");
          navLinks.forEach(function (link) {
            link.classList.toggle("is-active", link.getAttribute("href") === "#" + id);
          });
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach(function (section) {
      sectionObserver.observe(section);
    });
  }

  if (navToggle && nav) {
    var scrollY = 0;

    function setNavOpen(open) {
      navToggle.setAttribute("aria-expanded", String(open));
      navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      nav.classList.toggle("nav--open", open);
      document.body.classList.toggle("nav-open", open);

      if (open) {
        scrollY = window.scrollY;
        document.body.style.top = "-" + scrollY + "px";
        document.body.style.position = "fixed";
        document.body.style.width = "100%";
      } else {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        window.scrollTo(0, scrollY);
      }
    }

    navToggle.addEventListener("click", function () {
      setNavOpen(navToggle.getAttribute("aria-expanded") !== "true");
    });

    nav.querySelectorAll(".nav__link").forEach(function (link) {
      link.addEventListener("click", function () {
        setNavOpen(false);
      });
    });
  }

  var revealElements = document.querySelectorAll(".reveal");
  if (revealElements.length && "IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.08 }
    );
    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    revealElements.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  var heroReveals = document.querySelectorAll(".hero .reveal");
  heroReveals.forEach(function (el) {
    el.classList.add("is-visible");
  });

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var text = [
        "Hello, I'd like to plan a luxury Morocco tour.",
        "",
        "Name: " + document.getElementById("name").value.trim(),
        "Email: " + document.getElementById("email").value.trim(),
        "Travelers: " + document.getElementById("travelers").value,
        "Duration: " + document.getElementById("duration").value + " days",
        "",
        "Message:",
        document.getElementById("message").value.trim()
      ].join("\n");
      window.open(
        "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(text),
        "_blank",
        "noopener,noreferrer"
      );
    });
  }

  if (window.FYM_CONFIG && window.FYM_CONFIG.tripAdvisorUrl) {
    var taUrl = window.FYM_CONFIG.tripAdvisorUrl;
    document.querySelectorAll("[data-tripadvisor]").forEach(function (el) {
      el.setAttribute("href", taUrl);
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var id = this.getAttribute("href");
      if (!id || id === "#" || id.length < 2) return;
      var target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
})();
