let fileName = prompt("name");

document.getElementById("btn").onclick = function() {
    let fileContent = document.getElementById("input").value;
    let file = new Blob([fileContent], {type: "text"})

    let link = document.createElement("a");
    link.href = URL.createObjectURL(file);
    link.download = fileName;

    link.click();
}
