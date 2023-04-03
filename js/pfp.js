fetch("https://api.hyplix.com/users/discord/419958345487745035/avatar", {
  method: "GET",
}).then((x) => {
  x.json().then((data) => {
    if (data.status === 200) {
      return document
        .getElementById("pfp")
        .setAttribute(
          "src",
          "https://cdn.discordapp.com/avatars/419958345487745035/a_e0ef8e3b64294cc21511574a2c7474c3.gif?size=1024"
        );
    }
    document.getElementById("pfp").setAttribute("src", data.url);
  });
});
