document.addEventListener('DOMContentLoaded', () => {
  // Temple Array
  const temples = [
    {
      name: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      name: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      name: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      name: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      name: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      name: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      name: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
  ];

  // Function to create temple cards
  function createTempleCards(templeArray) {
      const gallery = document.querySelector('.temples-gallery');
      gallery.innerHTML = ''; // Clear previous content

      templeArray.forEach(temple => {
          const figure = document.createElement('figure');

          figure.innerHTML = `
              <img src="${temple.imageUrl}" alt="${temple.name}" loading="lazy">
              <figcaption>
                  <h3>${temple.name}</h3>
                  <p><strong>Location:</strong> ${temple.location}</p>
                  <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                  <p><strong>Total Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
              </figcaption>
          `;

          gallery.appendChild(figure);
      });
  }

  // Initial Render
  createTempleCards(temples);

  // Filtering Function
  function filterTemples(criteria) {
      let filteredTemples;
      switch (criteria) {
          case 'Old':
              filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
              break;
          case 'New':
              filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
              break;
          case 'Large':
              filteredTemples = temples.filter(t => t.area > 90000);
              break;
          case 'Small':
              filteredTemples = temples.filter(t => t.area < 10000);
              break;
          default:
              filteredTemples = temples;
      }
      createTempleCards(filteredTemples);
  }

  // Navigation Event Listeners
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          const filterType = link.textContent;
          filterTemples(filterType);
      });
  });

  // Footer: Current Year and Last Modified
  const currentYear = new Date().getFullYear();
  document.getElementById("currentYear").textContent = currentYear;

  const lastModified = document.lastModified;
  document.getElementById("lastModified").textContent = lastModified;

  // Hamburger Menu
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector("nav");

  hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      hamburger.textContent = navMenu.classList.contains("active") ? "X" : "☰";
  });
});
