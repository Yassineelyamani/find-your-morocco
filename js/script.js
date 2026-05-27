(function () {
  "use strict";

  var WHATSAPP = "212673628871";
  var header = document.getElementById("header");
  var nav = document.getElementById("nav");
  var navToggle = document.getElementById("navToggle");
  var tripForm = document.getElementById("tripForm");
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

  // Multi-step form functionality
  if (tripForm) {
    var currentStep = 1;
    var totalSteps = 4;
    var progressFill = document.getElementById("progressFill");
    var progressSteps = document.querySelectorAll(".form-progress__step");
    var formSteps = document.querySelectorAll(".form-step");
    var formReview = document.getElementById("formReview");

    function updateProgress() {
      var progress = (currentStep / totalSteps) * 100;
      progressFill.style.width = progress + "%";

      progressSteps.forEach(function (step) {
        var stepNum = parseInt(step.getAttribute("data-step"));
        step.classList.remove("is-active", "is-completed");
        if (stepNum === currentStep) {
          step.classList.add("is-active");
        } else if (stepNum < currentStep) {
          step.classList.add("is-completed");
        }
      });
    }

    function showStep(stepNum) {
      formSteps.forEach(function (step) {
        step.classList.remove("is-active");
        if (parseInt(step.getAttribute("data-step")) === stepNum) {
          step.classList.add("is-active");
        }
      });
      currentStep = stepNum;
      updateProgress();

      if (stepNum === 4) {
        generateReview();
      }
    }

    function validateStep(stepNum) {
      var stepEl = document.querySelector('.form-step[data-step="' + stepNum + '"]');
      var requiredFields = stepEl.querySelectorAll("[required]");
      var isValid = true;

      requiredFields.forEach(function (field) {
        if (!field.value.trim()) {
          isValid = false;
          field.style.borderColor = "var(--color-gold)";
          field.addEventListener("input", function () {
            field.style.borderColor = "";
          }, { once: true });
        }
      });

      return isValid;
    }

    function generateReview() {
      var formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        guests: document.getElementById("guests").value,
        startDate: document.getElementById("startDate").value,
        endDate: document.getElementById("endDate").value,
        duration: document.getElementById("duration").value,
        destinations: Array.from(document.getElementById("destinations").selectedOptions).map(function (opt) { return opt.value; }).join(", "),
        interests: document.getElementById("interests").value,
        budget: document.getElementById("budget").value
      };

      var reviewHTML = "";
      for (var key in formData) {
        if (formData[key]) {
          var label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1");
          reviewHTML += '<div class="form-review__item"><span class="form-review__label">' + label + '</span><span class="form-review__value">' + formData[key] + '</span></div>';
        }
      }
      formReview.innerHTML = reviewHTML;
    }

    function formatWhatsAppMessage() {
      var formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        guests: document.getElementById("guests").value,
        startDate: document.getElementById("startDate").value,
        endDate: document.getElementById("endDate").value,
        duration: document.getElementById("duration").value,
        destinations: Array.from(document.getElementById("destinations").selectedOptions).map(function (opt) { return opt.value; }).join(", "),
        interests: document.getElementById("interests").value,
        budget: document.getElementById("budget").value,
        additionalMessage: document.getElementById("additionalMessage").value
      };

      var message = [
        "*Luxury Morocco Trip Request*",
        "",
        "*Personal Details*",
        "Name: " + formData.name,
        "Email: " + formData.email,
        "",
        "*Trip Details*",
        "Guests: " + formData.guests,
        "Start Date: " + formData.startDate,
        "End Date: " + formData.endDate,
        "Duration: " + formData.duration,
        "",
        "*Preferences*",
        "Destinations: " + formData.destinations,
        "Interests: " + formData.interests,
        "Budget: " + formData.budget,
        "",
        "*Additional Message*",
        formData.additionalMessage || "None"
      ].join("\n");

      return message;
    }

    function sendViaWhatsApp() {
      var message = formatWhatsAppMessage();
      var whatsappUrl = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(message);
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }

    function sendViaEmail() {
      var formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        guests: document.getElementById("guests").value,
        startDate: document.getElementById("startDate").value,
        endDate: document.getElementById("endDate").value,
        duration: document.getElementById("duration").value,
        destinations: Array.from(document.getElementById("destinations").selectedOptions).map(function (opt) { return opt.value; }).join(", "),
        interests: document.getElementById("interests").value,
        budget: document.getElementById("budget").value,
        additionalMessage: document.getElementById("additionalMessage").value
      };

      var subject = "Luxury Morocco Trip Request - " + formData.name;
      var body = [
        "Personal Details:",
        "Name: " + formData.name,
        "Email: " + formData.email,
        "",
        "Trip Details:",
        "Guests: " + formData.guests,
        "Start Date: " + formData.startDate,
        "End Date: " + formData.endDate,
        "Duration: " + formData.duration,
        "",
        "Preferences:",
        "Destinations: " + formData.destinations,
        "Interests: " + formData.interests,
        "Budget: " + formData.budget,
        "",
        "Additional Message:",
        formData.additionalMessage || "None"
      ].join("\n");

      var mailtoUrl = "mailto:info@findyourmorocco.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
      window.location.href = mailtoUrl;
    }

    // Next button handlers
    document.querySelectorAll(".form-step__next").forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (validateStep(currentStep)) {
          showStep(currentStep + 1);
        }
      });
    });

    // Previous button handlers
    document.querySelectorAll(".form-step__prev").forEach(function (btn) {
      btn.addEventListener("click", function () {
        showStep(currentStep - 1);
      });
    });

    // WhatsApp submit handler
    var whatsappSubmit = document.querySelector(".whatsapp-submit");
    if (whatsappSubmit) {
      whatsappSubmit.addEventListener("click", function (e) {
        e.preventDefault();
        sendViaWhatsApp();
      });
    }

    // Email submit handler
    var emailSubmit = document.querySelector(".email-submit");
    if (emailSubmit) {
      emailSubmit.addEventListener("click", function (e) {
        e.preventDefault();
        sendViaEmail();
      });
    }
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
