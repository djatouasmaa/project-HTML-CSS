///////////////////////////////////////////////////////////
// Set  current year
const yearEL = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEL.textContent = currentYear;

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

//Make mobile navigation work
const btnNav = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const iconInner = document.querySelector(".menu");
const close = document.querySelector(".close");
const navLink = document.querySelector(".nav-link");
const InputBox = document.querySelector(".input-box");

btnNav.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

iconInner.addEventListener("click", function () {
  InputBox.classList.add("index");
});

close.addEventListener("click", function () {
  InputBox.classList.remove("index");
});

navLink.addEventListener("click", function () {
  InputBox.classList.remove("index");
});

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
// Sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    /* in the viewport */
    root: null,
    threshold: 0,
    rootMargin: "-80px", //  use px  obliger height header = 8rem
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

// Smooth scrolling animation

const linkAll = document.querySelectorAll("a:link");

linkAll.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault(); /* stop */
    const href = link.getAttribute("href");

    //scroll tag in  top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
