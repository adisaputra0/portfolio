const loading = document.querySelector("#loading");
document.onreadystatechange = () => {
    if (document.readyState == "complete") {
        loading.style.display = "none";
    }
}