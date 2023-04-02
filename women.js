document.querySelector("#original").addEventListener("click", function() {
    console.log("I am in original")
    bd = document.querySelector("main")
    bd.style.fontSize = "1em"
});

document.querySelector("#larger").addEventListener("click", function() {
    console.log("I am in large")
    bd = document.querySelector("main")
    bd.style.fontSize = "1.5em"
});