document.addEventListener('DOMContentLoaded', function () {
    // Gallery Filter Function
    const filterDropdown = document.getElementById('filter');
    filterDropdown.addEventListener('change', function () {
      const selectedCategory = filterDropdown.value;
      filterGallery(selectedCategory);
    });
  
    function filterGallery(category) {
      const galleryItems = document.querySelectorAll('.gallery-item');
      galleryItems.forEach(item => {
        if (item.dataset.category === category || category === 'all') {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
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
  });
  