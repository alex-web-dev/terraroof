const $textsMore = document.querySelectorAll(".text-more");
$textsMore.forEach(($textMore) => {
  const $btn = $textMore.querySelector(".text-more__btn");
  const $main = $textMore.querySelector(".text-more__main");
  let croppedHeight = $main.offsetHeight;
  $main.style.height = `${croppedHeight}px`;
  let isActive = false;

  $btn.addEventListener("click", () => {
    if (!$textMore.classList.contains("text-more--active")) {
      $btn.classList.add("text-more__btn--active");
      $textMore.classList.add("text-more--activating");
      $main.style.height = `${$main.scrollHeight}px`;
    } else {
      $btn.classList.remove("text-more__btn--active");
      $main.style.height = `${$main.scrollHeight}px`;
      $textMore.classList.add("text-more--activating");
      setTimeout(() => ($main.style.height = `${croppedHeight}px`));
    }

    toggleBtnText($btn);

    isActive = !isActive;
  });

  $main.addEventListener("transitionend", () => {
    $textMore.classList.remove("text-more--activating");

    if (!$textMore.classList.contains("text-more--active")) {
      $main.setAttribute("style", "");
      $textMore.classList.add("text-more--active");
    } else {
      $textMore.classList.remove("text-more--active");
    }
  });

  window.addEventListener("resize", () => {
    $textMore.classList.remove("text-more--active");
    $btn.classList.remove("text-more__btn--active");

    $main.style.removeProperty("height");
    croppedHeight = $main.offsetHeight;
    $main.style.height = `${croppedHeight}px`;

    if (isActive) {
      isActive = false;
      toggleBtnText($btn);
    }
  });
});

function toggleBtnText($btn) {
  const toggleText = $btn.dataset.toggleText;
  if (toggleText) {
    const innerText = $btn.innerText;
    $btn.innerText = toggleText;
    $btn.dataset.toggleText = innerText;
  }
}
