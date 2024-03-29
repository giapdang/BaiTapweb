const textElement = document.getElementById('hh2');
const words = ['Programming', 'Development', 'Coding', 'Software'];

let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    const currentText = currentWord.slice(0, letterIndex);

    textElement.textContent = currentText;

    if (!isDeleting) {
        if (letterIndex < currentWord.length) {
            letterIndex++;
        } else {
            isDeleting = true;
        }
    } else {
        if (letterIndex > 0) {
            letterIndex--;
        } else {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, 200);
}

typeEffect();



 // Get the slideshow container
 var slideshowContainer = document.querySelector('.anh');

 // Get all the images inside the slideshow container
 var images = slideshowContainer.getElementsByTagName('img');

 // Set the initial index and display the first image
 var currentIndex = 0;
 images[currentIndex].style.display = 'block';

 // Function to change the displayed image
 function changeImage() {
     // Hide the current image
     images[currentIndex].style.display = 'none';

     // Increment the index
     currentIndex++;

     // Reset the index if it exceeds the number of images
     if (currentIndex >= images.length) {
         currentIndex = 0;
     }

     // Display the new image
     images[currentIndex].style.display = 'block';
 }

 // Start the slideshow
 setInterval(changeImage, 4000); // Change image every 2 seconds

 document.getElementById("button1").addEventListener("click", function() {
    this.style.animation = "rotate 1s linear";
    setTimeout(() => {
        this.style.animation = "";
    }, 1000);
});

document.addEventListener("DOMContentLoaded", function () {
    var menu = document.querySelector('.menu1');
    var icon = document.querySelector('.icon');

    // Hàm để chuyển đổi lớp 'active' trên menu
    function toggleMenu() {
        menu.classList.toggle('active');
    }

    // Bộ lắng nghe sự kiện cho biểu tượng
    icon.addEventListener('click', toggleMenu);
});

function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

function toggleMenu() {
    var menu1 = document.querySelector('.menu');
    menu1.style.display = (menu1.style.display === 'none' || menu1.style.display === '') ? 'block' : 'none';
}