$(() => {
  console.log("hello");

  // load nav
  const navTemp = Handlebars.compile($('#navTemp').html());
  $('#main').append(navTemp({'nav': navs}));

  // load landing
  const landingTemp = Handlebars.compile($('#landingTemp').html());
  $('#main').append(landingTemp());

  // load aboutme
  const aboutmeTemp = Handlebars.compile($('#aboutmeTemp').html());
  Handlebars.registerPartial('contact', $('#contactTemp').html());
  $('#main').append(aboutmeTemp());

  // load services
  const servicesTemp = Handlebars.compile($('#servicesTemp').html());
  $('#main').append(servicesTemp({'services': services}));


  // load portfolio
  const portfolioTemp = Handlebars.compile($('#portfolioTemp').html());
  $('#main').append(portfolioTemp({'projects': projects}));

  // load contact
  const contactTemp = Handlebars.compile($('#contactTemp').html());
  $('#main').append(contactTemp()); 
});