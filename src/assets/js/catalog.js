const $sidebar = document.querySelector('.catalog-sidebar');
if ($sidebar) {
  $sidebar.classList.add('catalog-sidebar--show');

  const $sidebarItems = document.querySelectorAll('.catalog-sidebar__item');
  $sidebarItems.forEach($item => {
    const $btn = $item.querySelector('.catalog-sidebar__btn');
    $btn.addEventListener('click', () => $item.classList.toggle('catalog-sidebar__item--active'));
  });

  const $openSidebarBtns = document.querySelectorAll('.js-open-catalog-sidebar');
  $openSidebarBtns.forEach($btn => {
    $btn.addEventListener('click', () => $sidebar.classList.add('catalog-sidebar--active'));
  });

  const $closeSidebarBtns = document.querySelectorAll('.js-close-catalog-sidebar');
  $closeSidebarBtns.forEach($btn => {
    $btn.addEventListener('click', () => $sidebar.classList.remove('catalog-sidebar--active'));
  });

  $sidebar.addEventListener('click', (e) => {
    if ($sidebar === e.target && $sidebar.classList.contains('catalog-sidebar--active')) {
      $sidebar.classList.remove('catalog-sidebar--active');
      document.body.classList.remove('body--lock');
    }
  });
}