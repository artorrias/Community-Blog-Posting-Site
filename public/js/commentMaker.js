const commentMaker = async (event) => {
    event.preventDefault();

    const comment = document.querySelector('#comment-content').value.trim();
    const post_id = document.querySelector('#post_id').textContent;

    if (comment) {
        const response = await fetch("/api/comments", {
            method: "POST",
            body: JSON.stringify({ 
                comment: comment, 
                post_id: post_id, 
                username: "chad",}),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace('/');
        }
        else {
            console.log(response);
            alert('Error in comment creation');
        }
    }
};

document.querySelector(".comment-maker").addEventListener("submit", commentMaker);