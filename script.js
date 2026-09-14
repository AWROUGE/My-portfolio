// Edit this list to manage your links.
// Add, remove, or reorder entries without changing the HTML.

const links = [
  {
    name: "github",
    label: "github.com/Awrouge",
    url: "https://github.com/awrouge"
  },
  {
    name: "linkedin",
    label: "linkedin.com/in/AhmedAlmsleh",
    url: "https://www.linkedin.com/in/AhmedAlmsleh/"
  },
];

const linksContainer = document.querySelector("#links");

for (const link of links) {
  const a = document.createElement("a");
  a.className = "link";
  a.href = link.url;
  a.textContent = link.name;

  if (!link.url.startsWith("mailto:")) {
    a.target = "_blank";
    a.rel = "noopener noreferrer";
  }

  const small = document.createElement("small");
  small.textContent = link.label;
  a.appendChild(small);

  linksContainer.appendChild(a);
}

document.querySelector("#year").textContent = new Date().getFullYear();
