import AirDatepicker from 'air-datepicker';

window.addEventListener('load', () => {
  const $dateInputs = document.querySelectorAll('.form-field__input--date');
  $dateInputs.forEach($input => {
    new AirDatepicker($input, {
      autoClose: true,
    });
  });
});