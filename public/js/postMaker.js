
const postMaker = async (event) => {
    console.log("hewwo");
    event.preventDefault();

    const content = document.querySelector('#post-content').value.trim();
    const title = document.querySelector('#post-title').value.trim();

    if (content && title) {
        console.log("hi");
        const response = await fetch("/api/posts", {
            method: "POST",
            body: JSON.stringify({ 
                title: title, 
                username: "chad", 
                content: content 
            }),
            headers: { "Content-Type ": "application/json" },
        });

        if (response.ok) {
            console.log(response);
            document.location.replace("/");
        }
        else {
            alert('Error in post creation');
        }
    }
};

const commentMaker = async (event) => {
    event.preventDefault();

    const comment = document.querySelector('#comment-content').value.trim();
    const post_id = document.querySelector('#post_id').textContent;

    if (comment) {
        const response = await fetch("/api/comment", {
            method: "POST",
            body: JSON.stringify({ comment: comment, post_id: post_id, username: "chad",}),
            headers: { "Content-Type ": "application/json" },
        });

        if (response.ok) {
            document.location.replace('/');
        }
        else {
            alert('Error in comment creation');
        }
    }
};

document.querySelector(".post-maker").addEventListener("submit", postMaker);
document.querySelector(".comment-maker").addEventListener("submit", commentMaker);