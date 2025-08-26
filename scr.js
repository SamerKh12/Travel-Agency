// Handle form submissions for booking and comments
document.addEventListener('DOMContentLoaded', () => {
    // Booking form submission
    const bookingForm = document.querySelector('.booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your booking! We will contact you shortly.');
            bookingForm.reset();
        });
    }

    // Comment form submission
    const commentForm = document.querySelector('.comment-section form');
    if (commentForm) {
        commentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.querySelector('#comment-name').value;
            const comment = document.querySelector('#comment-text').value;

            const newComment = document.createElement('div');
            newComment.classList.add('comment');
            newComment.innerHTML = `<strong>${name}:</strong><p>${comment}</p>`;

            const commentsContainer = document.querySelector('.comment-section');
            commentsContainer.appendChild(newComment);

            alert('Thank you for your comment!');
            commentForm.reset();
        });
    }
});

// FAQ toggle functionality
const faqItems = document.querySelectorAll('.faq-item h2');
faqItems.forEach(item => {
    item.addEventListener('click', () => {
        const content = item.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});
