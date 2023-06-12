const lol_container = $(".listado");

function obtenerCampeones() {
  fetch("https://ddragon.leagueoflegends.com/cdn/13.10.1/data/es_ES/champion.json")
    .then((result) => result.json())
    .then((output) => {
      generarCard(output.data);
    })
    .catch((err) => console.error(err));
}

function generarCard(campeones) {
  Object.values(campeones).forEach((campeon) => {
    lol_container.append(`
      <a href="detalles.html?campeon=${campeon.id}">
        <div class="champ grow">
          <div class="img-container">
            <img src="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${
              campeon.id
            }_0.jpg" alt="${campeon.title}">
          </div>
          <div class="info">
            <h1>${campeon.id}</h1>
            <h2>${campeon.title}</h2>
            <h3>${campeon.tags[0]}${campeon.tags[1] ? ` - ${campeon.tags[1]}` : ""}</h3>
          </div>
        </div>
      </a>
    `);
  });
}

obtenerCampeones();
