'use strict';

function main(input) {
  listen(input.value);
  input.value = '';
}

function listen(url) {
  const output = document.querySelector('#output');
  const time = Date.now();
  
  const text = `
    <div class="bc bc_${time}">
      <div class="url">${url}</div>
      <audio src="${url}" controls autoplay>
    </div>`;
  
  output.insertAdjacentHTML('beforeend', text);
  
  const bc = output.querySelector(`.bc_${id}`);
  const audio = bc.querySelector('audio');
  const url_s = bc.querySelector('.url');
  
  audio.addEventListener('error', (event)=>{
    url_s.classList.add('del');
  });
}
