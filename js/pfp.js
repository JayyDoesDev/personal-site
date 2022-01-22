
fetch("https://api.hyplix.com/users/discord/419958345487745035/avatar", {
    method: "GET"
}).then((x) => {
    x.json().then(data => {
        document.getElementById("pfp").setAttribute("src", data.url)
    })
})
