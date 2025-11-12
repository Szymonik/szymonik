document.addEventListener("DOMContentLoaded", () => {
  const headerContainer = document.getElementById("header-container");
  const footerContainer = document.getElementById("footer-container");

  const base = window.location.origin;

  const headerURL = base + "/partials/header.html";
  const footerURL = base + "/partials/footer.html";

  console.log("Ładuję header z:", headerURL);
  console.log("Ładuję footer z:", footerURL);

  fetch(headerURL)
    .then(response => {
      if (!response.ok) throw new Error("Nie udało się załadować header.html");
      return response.text();
    })
    .then(html => {
      headerContainer.innerHTML = html;
    })
    .catch(err => console.error(err));

  fetch(footerURL)
    .then(response => {
      if (!response.ok) throw new Error("Nie udało się załadować footer.html");
      return response.text();
    })
    .then(html => {
      footerContainer.innerHTML = html;
    })
    .catch(err => console.error(err));
});
