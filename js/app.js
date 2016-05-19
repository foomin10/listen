'use strict';

function main(input) {
  listen(input.value);
  input.value = '';
}

function listen(url) {
  const output = document.querySelector('#output');
  
  const text = `
    <div class="bc">
      <div>${url}</div>
      <audio src="${url}" controls autoplay>
    </div>`;
  output.insertAdjacentHTML('beforeend', text);
}
