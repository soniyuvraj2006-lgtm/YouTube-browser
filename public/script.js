function searchYouTube() {
  const query = document.getElementById("searchInput").value.trim();
  if (!query) return alert("Enter something to search");
  window.open(
    `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`,
    "_blank"
  );
}

document.getElementById("searchInput").addEventListener("keydown", e => {
  if (e.key === "Enter") searchYouTube();
});

/* Create floating YouTube icons */
const bg = document.querySelector(".youtube-bg");

for (let i = 0; i < 25; i++) {
  const icon = document.createElement("span");
  icon.innerHTML = "▶";
  icon.style.left = Math.random() * 100 + "vw";
  icon.style.animationDuration = 10 + Math.random() * 10 + "s";
  icon.style.fontSize = 20 + Math.random() * 50 + "px";
  icon.style.animationDelay = Math.random() * 10 + "s";
  bg.appendChild(icon);
}
