// Js for slick slider - Awesome Clients
$(document).ready(() => {
    $(".slick-list").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        autoplay: false,
        speed: 500,
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1
                }
            },

        ]
    });
    $(".prev-btn").click((event) => {
        event.preventDefault(); // Prevent default behavior
        // Navigate to the prev slide
        $(".slick-list").slick("slickPrev");
    });
    $(".next-btn").click((event) => {
        event.preventDefault(); // Prevent default behavior
        // Navigate to the next slide
        $(".slick-list").slick("slickNext");
    });
});


// js for showing controls after click to video

document.addEventListener('DOMContentLoaded', (event) => {
    let currentVideo = null;
    const videos = document.querySelectorAll('.work-video');
    videos.forEach(video => {
        video.addEventListener('click', () => {
            // If there's a currently playing video and it's not the clicked one, pause it
            if (currentVideo && currentVideo !== video && !currentVideo.paused) {
                currentVideo.pause();
            }
            // Toggle controls for the clicked video
            if (!video.hasAttribute('controls')) {
                video.setAttribute('controls', 'controls');
            }
            // Update the currentVideo variable to the clicked video
            currentVideo = video;
        });
    });
});

// js for testimonial slider
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});

//js to store the contact section data along with services
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('#Form__Address');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Retrieve the stored data
        let checkedValues = JSON.parse(sessionStorage.getItem('checkedServices') || '{}');
        // Filter and collect names of checked services
        let selectedServices = Object.keys(checkedValues).filter(key => checkedValues[key]);
        const formData = new FormData();
        // Append selectedServices first
        formData.append('selectedServices', selectedServices.join(', '));
        // Append other form fields
        formData.append('name', form.querySelector('[name="name"]').value);
        formData.append('email', form.querySelector('[name="email"]').value);
        formData.append('phone', form.querySelector('[name="phone"]').value);
        formData.append('message', form.querySelector('[name="message"]').value);

        // Send form data to server using Fetch API
        fetch(form.action, {
            method: 'POST',
            body: formData,
        }).then(response => {
            if (response.ok) {
                alert('Form submitted successfully.');
                sessionStorage.removeItem('checkedServices'); // Clear the session storage
                form.reset();
            } else {
                alert('Something went wrong');
            }
        }).catch(error => {
            console.error('Error:', error);
        });
    });
});

// Js for Form Validation
const validateAndSubmitForm = (event) => {
    // Prevent the default form submission
    event.preventDefault();
    // Check if at least one checkbox is checked
    let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    if (checkboxes.length === 0) {
        let servicesSection = document.getElementById('services');
        // Scroll to the services section
        window.scrollTo({
            top: servicesSection.offsetTop,
            behavior: 'smooth'
        });
        // After scrolling, open the validation popup
        setTimeout(() => {
            Swal.fire({
                text: "Please select at least one service.",
                icon: "error",
                confirmButtonText: "OK"
            });
        }, 1000); // Adjust delay as needed
    } else {
        // Submit the services form
        document.querySelector("#services form").submit();
        // Submit the address form
        document.querySelector("#Form__Address form").submit();
    }
}

// Function to store data when checkboxes are checked or unchecked
const storeData = () => {
    let checkedValues = {};
    document.querySelectorAll('.option-set input[type="checkbox"]').forEach((checkbox) => {
        checkedValues[checkbox.name] = checkbox.checked;
    });
    // Store the data in localStorage or sessionStorage
    localStorage.setItem('checkedServices', JSON.stringify(checkedValues));
}

// Attach event listeners to checkboxes
document.querySelectorAll('.option-set input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener('change', storeData);
});

// Call the storeData function initially to store the initial state of checkboxes
storeData();

//js for go back button feature
const FirstBtn = document.getElementById('navigateToContact');
const SecondBtn = document.getElementById('goBackButton');

FirstBtn.addEventListener('click', () => {
    SecondBtn.style.display = 'block';
})

SecondBtn.addEventListener('click', () => {
    setTimeout(()=>{
        SecondBtn.style.display = 'none';
    }, 1000)
})


function changeLanguage() {
    // Get the selected language value
    var selectedLanguage = document.getElementById("language-select").value;

    // Redirect the user to the corresponding language version of the page
    if (selectedLanguage === "en") {
      window.location.href = "index.html"; // English version
    } else if (selectedLanguage === "he") {
      window.location.href = "index_he.html"; // Hebrew version
    }
  }

  // Add event listener to the language selector
  document.getElementById("language-select").addEventListener("change", changeLanguage);


  //scroll button
  // Get the button:
  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  