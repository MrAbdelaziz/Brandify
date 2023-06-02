const logoUrl = 'path/to/logo.png';

const images = document.querySelectorAll('img');

// Iterate through each image and add the logo
images.forEach((image) => {

  const imageWidth = image.clientWidth;
  const imageHeight = image.clientHeight;

  const container = document.createElement('div');
  container.style.position = 'relative';
  container.style.display = 'inline-block';

  const logo = document.createElement('img');
  logo.src = logoUrl;
  logo.style.position = 'absolute';
  logo.style.top = '0';
  logo.style.left = '0';
  logo.style.width = `${imageWidth * 0.2}px`; // Adjust the factor (0.2) as needed
  logo.style.height = 'auto';
  logo.style.zIndex = '9999';

  container.appendChild(logo);
  container.appendChild(image.cloneNode(true));

  image.parentNode.replaceChild(container, image);
});
