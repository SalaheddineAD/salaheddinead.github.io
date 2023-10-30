$(() => {
  console.log("js working")
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

  $('#submit-button').click(submitContactForm);

});


function changeNavOnScroll() {
  const nav = $('#nav');
  const navElement = document.querySelectorAll(".nav-element")
  const landingSection = document.querySelector('.landing');

  window.onwheel = (e) => {
    if (landingSection.getBoundingClientRect().top == 0 || document.body.scrollTop > window.innerHeight ) {
      nav.removeClass('scrolled-navbar')
      console.log( document.body.scrollTop)
      console.log("hello")
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

async function submitContactForm(e) {
  e.preventDefault()
  console.log(e)
  // Define the URL of the API endpoint
  const apiUrl = 'https://fjyd6irm61.execute-api.us-east-1.amazonaws.com/v1/awscourse'; 

  const subjectField = document.getElementById('subject').value;
  const nameField = document.getElementById('name').value;
  const emailField = document.getElementById('email').value;
  const messageField = document.getElementById('message').value;

  // Define the data you want to send in the POST request (as a JavaScript object)
  const postData = {
      subjectField : subjectField,
      nameField : nameField,
      emailField : emailField,
      messageField : messageField
  };
  
  console.log(postData)
  // Configure the fetch request
  await fetch(apiUrl, {
      method: 'POST',
      mode: "no-cors", // no-cors, *cors, same-origin
      headers: {
          'Content-Type': 'application/json', // Adjust this content type as needed
      },
      body: JSON.stringify(postData), // Convert the data to JSON format
  })
  .then(response => {
      console.log(response)
      if (response.ok) {
          return response.json(); // If the response is successful, parse the JSON response
      } else {
          throw new Error('POST request failed');
      }
  })
  .then(data => {
      console.log('Response from API:', data); // Handle the API response data here
  })
  .catch(error => {
      console.error('Error:', error); // Handle errors here
  });
}