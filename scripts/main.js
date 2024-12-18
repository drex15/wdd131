document.addEventListener('DOMContentLoaded', function () {
  // Gallery Filter Function
  const filterDropdown = document.getElementById('filter');
  if (filterDropdown) {
      filterDropdown.addEventListener('change', function () {
          const selectedCategory = filterDropdown.value;
          const galleryItems = document.querySelectorAll('.gallery-item');
          galleryItems.forEach(item => {
              item.style.display =
                  item.dataset.category === selectedCategory || selectedCategory === 'all'
                      ? 'block'
                      : 'none';
          });
      });
  }

  // Comment Form Submission
  const commentForm = document.getElementById('comment-form');
  if (commentForm) {
      commentForm.addEventListener('submit', function (event) {
          event.preventDefault();
          const commentText = document.getElementById('comment').value;
          alert(`Your comment: "${commentText}" has been submitted.`);
          commentForm.reset();
      });
  }

  // Feedback Form and Local Storage
  const feedbackForm = document.getElementById('feedback-form');
  if (feedbackForm) {
      feedbackForm.addEventListener('submit', function (event) {
          event.preventDefault();
          const name = document.getElementById('name').value;
          const comment = document.getElementById('comment').value;
          const feedback = JSON.parse(localStorage.getItem('feedback')) || [];
          feedback.push({ name, comment });
          localStorage.setItem('feedback', JSON.stringify(feedback));
          alert('Thank you for your feedback!');
          feedbackForm.reset();
      });
  }

  // Navigation Toggle
  const menuButton = document.getElementById('menu-button');
  const navMenu = document.getElementById('nav-menu');
  if (menuButton && navMenu) {
      menuButton.addEventListener('click', function () {
          navMenu.classList.toggle('active');
          menuButton.textContent = navMenu.classList.contains('active') ? 'X' : '☰';
      });
  }
});