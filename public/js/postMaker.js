
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
            headers: { "Content-Type": "application/json" },
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

document.querySelector(".post-maker").addEventListener("submit", postMaker);
