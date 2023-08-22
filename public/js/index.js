const postMaker = async (event) => {
    event.preventDefault();

    const content = document.querySelector('#post-content'.value.trim());
    const title = document.querySelector('#post-title'.value.trim());

    if (content && title) {
        const response = await fetch('/api/post', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type ': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        }
        else {
            alert('Error in post creation');
        }
    }
};

const commentMaker = async (event) => {
    event.preventDefault();

    const comment = document.querySelector('#comment-content'.value.trim());
    const postID = document.querySelector('#post_id').textContent;

    if (comment) {
        const response = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({ comment, postID }),
            headers: { 'Content-Type ': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        }
        else {
            alert('Error in comment creation');
        }
    }
};