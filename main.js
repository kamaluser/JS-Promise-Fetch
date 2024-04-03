fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        const select = document.getElementById("userSelect");

        data.forEach(user => {
            let option = document.createElement("option");
            option.value = user.id;
            option.textContent = user.name;
            select.appendChild(option);
        });
    });

document.getElementById("searchButton").addEventListener("click", function () {
    const userId = document.getElementById("userSelect").value;

    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(response => response.json())
        .then(posts => {
            const postsContainer = document.getElementById("postsContainer");
            postsContainer.innerHTML = "";

            posts.forEach(post => {
                let li = document.createElement("li");
                li.textContent = post.title;

                let link = document.createElement("a");
                link.href = `post_details.html?postData=${JSON.stringify(post)}`;
                link.textContent = "Go to details";
                link.style.marginLeft = "10px";

                li.appendChild(link);

                postsContainer.appendChild(li);
            });
        });
});
