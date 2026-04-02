const container = document.getElementById("games");

games.forEach((game, index) => {
  container.innerHTML += `
    <div class="card" onclick="openGame(${index})">
      <img src="${game.image}">
      <h3>${game.name}</h3>
    </div>
  `;
});

function openGame(i){
  localStorage.setItem("game", JSON.stringify(games[i]));
  window.location = "game.html";
}
