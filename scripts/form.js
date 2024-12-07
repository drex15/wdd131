// Product Array
const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// Populate Product Name Options
const productSelect = document.getElementById("productName");
products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.name; // Set value as product name
  option.textContent = product.name; // Display only the product name
  productSelect.appendChild(option);
});

// Increment Review Counter on Submission Page
if (window.location.pathname.includes("review.html")) {
  const reviewCount = localStorage.getItem("reviewCount") || 0;
  localStorage.setItem("reviewCount", Number(reviewCount) + 1);
  document.body.insertAdjacentHTML(
      "beforeend", 
      `<p>You have submitted ${Number(reviewCount) + 1} reviews.</p>`
  );
}
