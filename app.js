const categories = [
  {
    name: "Brawl Stars",
    icon: "gamepad",
    news: [
      {
        title: "Nuovo Brawler in arrivo!",
        content: "Supercell ha annunciato l’arrivo di un nuovo brawler questa settimana...",
      },
      {
        title: "Aggiornamento settembre",
        content: "Bilanciamenti e nuove skin in arrivo a settembre per Brawl Stars...",
      },
    ],
  },
  {
    name: "Gran Turismo",
    icon: "car",
    news: [
      {
        title: "GT7: nuove auto rilasciate",
        content: "Sony ha rilasciato un aggiornamento con 3 nuove auto classiche...",
      }
    ],
  },
];

function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("-translate-x-full");
}

function renderCategories(filter = "") {
  const container = document.getElementById("categoryContainer");
  container.innerHTML = "";

  categories
    .filter(cat => cat.name.toLowerCase().includes(filter.toLowerCase()))
    .forEach(cat => {
      const el = document.createElement("div");
      el.className = "bg-gray-700 p-4 rounded shadow cursor-pointer hover:bg-gray-600 transition";
      el.innerHTML = `
        <div class="flex items-center mb-2">
          <i class="fas fa-${cat.icon} mr-2 text-xl"></i>
          <h3 class="font-bold">${cat.name}</h3>
        </div>
        <ul class="space-y-2">
          ${cat.news.map(news => `<li onclick="openNews('${encodeURIComponent(news.title)}','${encodeURIComponent(news.content)}')" class="text-sm hover:underline cursor-pointer">${news.title}</li>`).join("")}
        </ul>
      `;
      container.appendChild(el);
    });
}

function openNews(title, content) {
  localStorage.setItem("newsTitle", decodeURIComponent(title));
  localStorage.setItem("newsContent", decodeURIComponent(content));
  window.location.href = "news.html";
}

document.getElementById("searchInput").addEventListener("input", (e) => {
  renderCategories(e.target.value);
});

renderCategories();
