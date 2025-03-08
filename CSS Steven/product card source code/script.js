  // JavaScript to Handle Image Swapping
  const colorOptions = document.querySelectorAll('.color-option input');
  const productImages = document.querySelectorAll('.product-images img');

  colorOptions.forEach((option) => {
      option.addEventListener('change', (event) => {
          const selectedColor = event.target.value;

          // Hide all images
          productImages.forEach((image) => {
              image.classList.remove('active');
          });

          // Show the selected image
          const selectedImage = document.querySelector(`.product-images img.${selectedColor}`);
          selectedImage.classList.add('active');
      });
  });