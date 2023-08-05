async function getPresence() {
  try {
    var fetched = await fetch(
      "https://japi.rest/discord/v1/user/419958345487745035"
    );
    var res = await fetched.json();
    var status = res.presence.status;
    var statusIcon = document.getElementById("status");

    switch (status) {
      case "online":
        statusIcon.src = "../../img/statuses/online.png";
        break;
      case "idle":
        statusIcon.src = "../../img/statuses/idle.png";
        break;
      case "dnd":
        statusIcon.src = "../../img/statuses/dnd.png";
        break;
      case "streaming":
        statusIcon.src = "../../img/statuses/streaming.png";
        break;
      default:
        statusIcon.src = "../../img/statuses/offline.png";
    }
  } catch (error) {
    console.error(error);
  }
}

getPresence();
