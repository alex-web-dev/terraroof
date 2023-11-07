const $items = document.querySelectorAll(".doc-item");
$items.forEach(($item) => {
  const $checkboxesInputs = $item.querySelectorAll(".doc-item__file-checkbox .checkbox__input");
  const $btn = $item.querySelector(".doc-item__btn");
  let isBtnActive = false;

  if ($checkboxesInputs.length === 0) {
    isBtnActive = true;
  }

  $checkboxesInputs.forEach(($input) => {
    if ($input.checked) {
      isBtnActive = true;
    }

    $input.addEventListener("change", () => {
      const $otherActiveCheckboxes = $item.querySelectorAll(
        ".doc-item__file-checkbox .checkbox__input:checked"
      );

      if ($input.checked) {
        isBtnActive = true;
      } else if ($otherActiveCheckboxes.length === 0) {
        isBtnActive = false;
      }

      if (isBtnActive) {
        $btn.classList.remove("doc-item__btn--inactive");
      } else {
        $btn.classList.add("doc-item__btn--inactive");
      }
    });
  });

  if (!isBtnActive) {
    $btn.classList.add("doc-item__btn--inactive");
  }
});
