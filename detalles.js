document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const campeonId = params.get("campeon");
    
    if (campeonId) {
      obtenerDetallesCampeon(campeonId);
    }
  });
  
  function obtenerDetallesCampeon(campeonId) {
    fetch(`https://ddragon.leagueoflegends.com/cdn/13.10.1/data/es_ES/champion/${campeonId}.json`)
      .then((result) => result.json())
      .then((output) => {
        const campeon = output.data[campeonId];
        mostrarDetalles(campeon);
      })
      .catch((err) => console.error(err));
  }
  
  function mostrarDetalles(campeon) {
    console.log(campeon);
    const championImage = document.getElementById("champion-image");
    const championName = document.getElementById("champion-name");
    const championTitle = document.getElementById("champion-title");
    const championTags = document.getElementById("champion-tags");
    const championDescription = document.getElementById("champion-description");
    const championAbilities = document.getElementById("champion-abilities");
  
    championImage.src = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${campeon.id}_0.jpg`;
    championImage.alt = campeon.title;
    championName.textContent = campeon.id;
    championTitle.textContent = campeon.title;
    championTags.textContent = `${campeon.tags[0]}${campeon.tags[1] ? ` - ${campeon.tags[1]}` : ""}`;
    championDescription.textContent = campeon.description;
  
    championAbilities.innerHTML = "";
    for (const [key, value] of Object.entries(campeon.spells)) {
      const abilityName = value.name;
      const abilityDescription = value.description;
  
      const abilityItem = document.createElement("li");
      abilityItem.innerHTML = `<strong>${abilityName}</strong>: ${abilityDescription}`;
      championAbilities.appendChild(abilityItem);
   
    }
}