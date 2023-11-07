import { createElem } from "./helpers";

detailsHandler();

function detailsHandler() {
  const $details = document.querySelector(".product-details");
  if (!$details || $details.classList.contains("product-details--static")) {
    return;
  }

  const $items = $details.querySelectorAll(".product-details__item");
  const $main = $details.querySelector(".product-details__main");
  const $columns = createElem("div", "product-details__columns");

  if ($items.length <= 6) {
    const $column = createElem("div", "product-details__column");
    $items.forEach(($item) => $column.append($item));
    $columns.append($column);
  } else {
    const oneColumnCount = $items.length > 15 ? Math.ceil($items.length / 3) : 6;
    let columnsCount = Math.min(Math.floor(($items.length - 1) / oneColumnCount) + 1, 3);

    for (let i = 0; i < columnsCount; i++) {
      const $column = createElem("div", "product-details__column");
      [...$items].slice(i * oneColumnCount, (i + 1) * oneColumnCount).forEach(($item) => {
        $column.append($item);
      });

      $columns.append($column);
    }
  }

  $main.append($columns);

  const $itemsBox = $details.querySelector(".product-details__items");
  $itemsBox.remove();
}
