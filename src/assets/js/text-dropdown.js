const $texts = document.querySelectorAll('.text-dropdown');
$texts.forEach($text => {
  const dropTextWidth = +$text.dataset.droptextWidth;
  if (window.innerWidth > dropTextWidth) {
    return;
  }

  const $moreBtn = document.createElement('button');
  $moreBtn.classList.add('text-dropdown__more');
  $moreBtn.innerText = 'Далее';

  const initialText = $text.innerHTML;
  const maxLength = +$text.dataset.droptextLength;

  $text.innerText = cutText($text.innerText, maxLength);
  $text.append($moreBtn);

  $moreBtn.addEventListener('click', () =>  $text.innerHTML = initialText, { once: true });
});

function cutText(text, limit) {
  text = text.trim();
  if (text.length <= limit){
    return text;
  }

  text = text.slice(0, limit).replace(/\n/gi, ' ');

  const lastSpace = text.lastIndexOf(' ');
  if (lastSpace > 0) {
    text = text.substr(0, lastSpace);
  }

  return `${text}... `;
}