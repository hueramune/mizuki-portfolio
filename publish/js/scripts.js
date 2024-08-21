document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

$(function() {
 
    // 一旦hide()で隠してフェードインさせる
    $('.frame').hide().fadeIn('slow');
   
  });