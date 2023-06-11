$(() => {

  // load nav
  const navTemp = Handlebars.compile($('#navTemp').html());
  $('#main').append(navTemp({ 'nav': navs }));

  // load landing
  const landingTemp = Handlebars.compile($('#landingTemp').html());
  $('#main').append(landingTemp());

  // load aboutme
  const aboutmeTemp = Handlebars.compile($('#aboutmeTemp').html());
  Handlebars.registerPartial('contact', $('#contactTemp').html());
  $('#main').append(aboutmeTemp());

  // load services
  const servicesTemp = Handlebars.compile($('#servicesTemp').html());
  $('#main').append(servicesTemp({ 'services': services }));

  // load portfolio
  const portfolioTemp = Handlebars.compile($('#workTemp').html());
  $('#main').append(portfolioTemp({ 'projects': projects }));

  // load footer
  const footerTemp = Handlebars.compile($('#footerTemp').html());
  $('#main').append(footerTemp());

  // load contact into footer
  const contactTemp = Handlebars.compile($('#contactTemp').html());
  // $('footer').append(contactTemp());

  console.log("hello");

  changeNavOnScroll();

  $('.popup-btn').click(openPopupHandler);
});


function changeNavOnScroll() {
  // const nav = document.querySelector("#nav")
  const nav = $('#nav');
  const navElement = document.querySelectorAll(".nav-element")
  const landingSection = document.querySelector('.landing');

  // window.addEventListener("scroll", () => {
  window.onwheel = (e) => {
    if (landingSection.getBoundingClientRect().top == 0) {
      nav.removeClass('scrolled-navbar')
      navElement.forEach(element => {
        element.classList.remove('scrolled-nav-element')
      });
    } else {
      nav.addClass('scrolled-navbar')
      navElement.forEach(element => {
        element.classList.add('scrolled-nav-element')
      });
    }
  };
}

function openPopupHandler(e) {
  const details = pdetails.filter(p => p.id == this.id)[0];
  const popupDetailsTemp = Handlebars.compile($('#popupDetailsTemp').html());
  $('.popup-box').append(popupDetailsTemp(details));
  $('.popup-wrap').fadeIn(500);
  $('.popup-box').removeClass('transform-out').addClass('transform-in');
  $('.popup-close').click(closePopupHandler);
  $('.popup-wrap').click(closePopupHandler);
  e.preventDefault();
}

function closePopupHandler(e) {
  $('.popup-box').empty();
  $('.popup-wrap').fadeOut(500);
  $('.popup-box').removeClass('transform-in').addClass('transform-out');
  e.preventDefault();
}