import popup from "./popup.js";

const $forms = document.querySelectorAll('.js-form');
$forms.forEach($form => {
  $form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isError = false;
    const $items = $form.querySelectorAll('.form-field');
    $items.forEach($item => {
      const $input = $item.querySelector('.form-field__input');
      const $error = $item.querySelector('.form-field__error');
      const label = $input.dataset.label;
      const validateType = $input.dataset.validate;

      if (validateType && !validateEmpty($input)) {
        $item.classList.add('form-field--error');
        $error.innerText = `Поле ${label ? label + ' ' : ''}не может быть пустым`;
        isError = true;
        return;
      }

      if (validateType === 'phone' && !validatePhone($input)) {
        $item.classList.add('form-field--error');
        $error.innerText = `Некорректный номер телефона`;
        isError = true;
      }
    });

    if (isError) {
      const errorPopup = popup.createError(`
        <div class="text popup__text">
          В одном или нескольких полях есть ошибка. Пожалуйста, проверьте и попробуйте снова.
        </div>`);
      errorPopup.show();
    } else {
      const successPopup = popup.createSuccess(`
        <div class="text popup__text">
          Спасибо! Ваша заявка успешно отправлена!
        </div>`);
      successPopup.show();

      $items.forEach(($item) => {
        const $input = $item.querySelector('.form-field__input');
        $input.value = '';
      });
    }
  });

  const $formItems = $form.querySelectorAll('.form-field');
  $formItems.forEach($item => {
    const $input = $item.querySelector('.form-field__input');
    $input.addEventListener('focus', () => {
      $item.classList.remove('form-field--error');
    });
  });
});

function validateEmpty($input) {
  if ($input.value.length < 1) {
    return false;
  }

  return true;
}

function validatePhone($input) {
  if (!/(?:\+|\d)[\d\-\(\) ]{14,}\d/g.test($input.value)) {
    return false;
  }

  return true;
}