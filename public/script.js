function searchYouTube() {
  const query = document.getElementById("searchInput").value.trim();

  if (query === "") {
    alert("Please enter something to search");
    return;
  }

  const youtubeURL = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
  window.open(youtubeURL, "_blank");
}

// Enter key support
document.getElementById("searchInput").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    searchYouTube();
  }
});

