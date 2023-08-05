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
        statusIcon.style.backgroundColor = "#57f287";
        break;
      case "idle":
        statusIcon.style.backgroundColor = "#fee75c";
        break;
      case "dnd":
        statusIcon.style.backgroundColor = "#ed4245";
        break;
      default:
        statusIcon.style.backgroundColor = "#23272a";
    }
  } catch (error) {
    console.error(err);
  }
}

getPresence();
