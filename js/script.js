document.addEventListener('DOMContentLoaded', () => {
    const forumContainer = document.getElementById('forum-container');

    const posts = [
        {
            user: 'JohnDoe',
            content: 'Lost 5 lbs this week! Feeling great!',
            type: 'public',
            media: ''
        },
        {
            user: 'JaneSmith',
            content: 'Started a new workout plan today!',
            type: 'private',
            media: ''
        }
    ];

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        
        postElement.innerHTML = `
            <h3>${post.user}</h3>
            <p>${post.content}</p>
        `;
        
        if (post.media) {
            const mediaElement = document.createElement('img');
            mediaElement.src = post.media;
            postElement.appendChild(mediaElement);
        }
        
        forumContainer.appendChild(postElement);
    });

    const accountForm = document.getElementById('account-form');
    accountForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Account information saved!');
    });
});
