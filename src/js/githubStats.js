async function getFollowers() {
  try {
    var fetched = await fetch(
      "https://api.github.com/users/JayyDoesDev/followers"
    );
    var res = await fetched.json();
    var r = res;
    document.getElementById("followers").innerHTML = r.length;
  } catch (error) {
    console.error(error);
  }
}

async function getFollowing() {
  try {
    var fetched = await fetch(
      "https://api.github.com/users/JayyDoesDev/following"
    );
    var res = await fetched.json();
    var r = res;
    document.getElementById("following").innerHTML = r.length;
  } catch (error) {
    console.error(error);
  }
}

getFollowers();
getFollowing();
