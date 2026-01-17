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

/* BACKGROUND ICON ANIMATION FIX */
const bg = document.querySelector(".youtube-bg");

for (let i = 0; i < 25; i++) {
  const icon = document.createElement("span");
  icon.innerHTML = "▶";

  // Random horizontal position
  icon.style.left = Math.random() * 100 + "vw";

  // Random size
  icon.style.fontSize = 20 + Math.random() * 50 + "px";

  // Random speed
  icon.style.animationDuration = 8 + Math.random() * 6 + "s";

  // START AT RANDOM HEIGHT (KEY FIX)
  icon.style.top = Math.random() * 100 + "vh";

  bg.appendChild(icon);
}

