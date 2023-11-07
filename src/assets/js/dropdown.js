const $dropdowns = document.querySelectorAll(".dropdown");
$dropdowns.forEach(($dropdown) => {
  const $selectBtn = $dropdown.querySelector(".dropdown__select-btn");
  $selectBtn?.addEventListener("click", () => $dropdown.classList.toggle("dropdown--active"));
});

window.addEventListener("click", (e) => {
  const $activeDropdowns = document.querySelectorAll(".dropdown--active");
  const isInner = e.target.closest(".dropdown") && !e.target.classList.contains("dropdown");
  if (!$activeDropdowns[0] || isInner) {
    return;
  }

  $activeDropdowns.forEach(($dropdown) => $dropdown.classList.remove("dropdown--active"));
});
