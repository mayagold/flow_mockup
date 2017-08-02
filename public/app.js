console.log('js working');



$(() => {
  console.log('jquery is working');
  $('#contact-link').on('click', ()=>{
    $('#contact-modal').css('display', 'block');
  });
  $('#contact-modal').on('click', ()=>{
    $('#contact-modal').css('display', 'none');
  });
  $('#about-link').on('click', ()=>{
    $('#about-modal').css('display', 'block');
  });
  $('#about-modal').on('click', ()=>{
    $('#about-modal').css('display', 'none');
  });
})
