const $intersectionLinks = document.querySelectorAll(".js-link-intersection");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        $intersectionLinks.forEach(($link) => {
          const href = $link.getAttribute("href").replace("#", "");

          if (href === entry.target.id) {
            $link.classList.add("link-intersection-active");
          } else {
            $link.classList.remove("link-intersection-active");
          }
        });
      }
    });
  },
  {
    threshold: 0.8,
  }
);
const $sections = document.querySelectorAll(".js-intersection");
$sections.forEach(($section) => {
  observer.observe($section);
});
