var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("result").innerHTML = `${JSON.parse(xhr.responseText).result}`;
    };
};

document.getElementById("submit").addEventListener("click", (e) => {
    e.preventDefault();

    xhr.open("POST", "http://localhost:8080/calculate", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(
        JSON.stringify({
            n1: document.getElementById("n1").value,
            n2: document.getElementById("n2").value,
            operation: document.getElementById("operation").value
        })
    );
});