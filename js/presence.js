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

    if (res.presence.activities) {
      var activity = res.presence.activities[0].name;
      var type = res.presence.activities[0].type;
      var typeString;
      switch (type) {
        case 0:
          typeString = "playing";
          break;
        case 1:
          typeString = "streaming";
          break;
        case 2:
          typeString = "listening to";
          break;
        case 3:
          typeString = "watching";
          break;
        case 4:
          typeString = "playing";
          break;
        case 5:
          typeString = "competing";
          break;
        default: {
          typeString = "not playing anything";
        }
      }
      document.getElementById("activity").innerHTML =
        typeString + " " + activity;
    } else {
      document.getElementById("activity").innerHTML = "not playing anything";
      return;
    }
  } catch (error) {
    console.error(error);
  }
}

getPresence();
