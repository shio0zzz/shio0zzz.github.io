const grid = document.getElementById("labGrid");

experiments.forEach(exp => {
  const card = document.createElement("div");
  card.className = "lab-card";

  card.innerHTML = `
    <img src="${exp.image}">
    <div class="content">
      <h2>${exp.title}</h2>
      <p>${exp.subtitle}</p>
    </div>
  `;

  card.onclick = () => {
    window.location.href = exp.link;
  };

  grid.appendChild(card);
});
