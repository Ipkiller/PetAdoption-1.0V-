const sidebar = document.getElementById("mobile-menu");
const openButton = document.querySelectorAll(".menu-btn");

const sidebarHandler = (event) => {
  // Toggle the sidebar open/close
  sidebar.classList.toggle("-right-full");
  sidebar.classList.toggle("right-0");

  // Stop propagation to prevent triggering window click event
  event.stopPropagation();

  // Function to handle closing the sidebar when clicked outside
  const closeSidebarHandler = (e) => {
    const condition = Array.from(openButton).some((button) =>
      button.contains(e.target)
    );
    if (!sidebar.contains(e.target) && !condition) {
      sidebar.classList.add("-right-full");
      sidebar.classList.remove("right-0");
      // Remove the event listener after the sidebar is closed
      window.removeEventListener("click", closeSidebarHandler);
    }
  };

  // Add the event listener to the window to detect clicks outside
  window.addEventListener("click", closeSidebarHandler);
};
// Toggle mobile menu sidebar
openButton.forEach((button) =>
  button.addEventListener("click", sidebarHandler)
);

const imageUrls = [
  "https://thumb.photo-ac.com/49/49c175790caa583def32724943af32d8_t.jpeg",
  "https://w0.peakpx.com/wallpaper/499/284/HD-wallpaper-dog-cat-kitten-puppy-grass-widescreen-16-9-background-2560x1440-dog.jpg",
  "https://media.istockphoto.com/id/1186973591/photo/homeless-row-of-dogs-to-adopt.jpg?s=612x612&w=0&k=20&c=YLPEHFI2xVGexYDhPBQmpN1d1zulN7WvRCguGAxspdc=",
  "https://images.contentstack.io/v3/assets/blt6f84e20c72a89efa/bltd3894bd280c131a6/6261d197787c0839e4c667c5/zpc_og_article_benefits-adopting-pet.jpg",
  "https://www.petfinder.com/static/045d5a3baad5bcd164a7729d23f21d90/20474/shelter-dog-cropped.webp",
];

const imageSlider = document.getElementById("img-slider");
let index = 0;

// Create Image Elements
imageUrls.forEach((url) => {
  const img = document.createElement("img");
  img.src = url;
  img.classList.add("w-full", "h-96", "object-fill", "flex-shrink-0");
  imageSlider.appendChild(img);
});

const totalSlides = imageUrls.length;

// Auto-slide function
function autoSlide() {
  index = (index + 1) % totalSlides;
  imageSlider.style.transform = `translateX(-${index * 100}%)`;
}

// Start auto-sliding every 3 seconds
setInterval(autoSlide, 3000);
