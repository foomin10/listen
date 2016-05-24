jQuery(function ($) {
  'use strict';
  
  function listen(aUrl) {
    const time = Date.now();
    
    const $bc = $('<div>').addClass('bc').attr('id', time);
    const $url = $('<div>').addClass('url').text(aUrl)
      .appendTo($bc);
    const $audio = $('<audio>')
      .attr({ src: aUrl, controls: true, autoplay: true })
      .on('error', function (event) {
        console.log(event.type, event);
        const url = event.target.src;
        
        $url.addClass('del').text(url);
      })
      .on('loadeddata', function (event) {
        console.log(event.type, event);
        const url = event.target.src;
        
        this.play();
        $url.removeClass('del').text(url);
      })
      .on('loadstart canplay play playing', function (event) {
        console.log(event.type, event);
      })
      .appendTo($bc);
    
    $bc.appendTo('#output');
  }
  
  function main(aInput) {
    listen(aInput.value);
    aInput.value = '';
  }
  
  window.main = main;
  
});
