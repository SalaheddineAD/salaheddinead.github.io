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

  changeNavOnScroll();

  modalHandler();
});


function changeNavOnScroll(){
  const nav= document.querySelector("#nav")
  const navElement = document.querySelectorAll(".nav-element")
   
  window.addEventListener("scroll",()=>{
    if(window.scrollY>56){
      nav.classList.add('scrolled-navbar')
      navElement.forEach(element => {
        element.classList.add('scrolled-nav-element')
      });
    }
    else{
      nav.classList.remove('scrolled-navbar')
      navElement.array.forEach(element => {
        element.classList.remove('scrolled-nav-element')
      });
    }
  });
}
function modalHandler(){
  var myModal = new bootstrap.Modal(document.getElementById('project-modal'), {
    keyboard: false
  });

  // Handle the modal show event
  $('#project-modal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    var title = button.siblings('.card-title').text(); // Extract the project title
    var body = button.siblings('.card-txt').text(); // Extract the project details
    var modalTitle = myModal._element.querySelector('.modal-title'); // Get the modal title element
    var modalBody = myModal._element.querySelector('.modal-body'); // Get the modal body element

    // Set the modal title and body
    modalTitle.textContent = title;
    modalBody.innerHTML = body;
  });
}