setTimeout(() => {
    const tag = document.createElement("p");
    const text = document.createTextNode("work");
    tag.appendChild(text);
    document.getElementById("container").appendChild(tag);
}, 5000);