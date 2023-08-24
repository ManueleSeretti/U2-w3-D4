const URL = "https://api.pexels.com/v1/search?query=tiger";
const ID = new URLSearchParams(window.location.search).get("ID");
window.onload = async () => {
  const resp = await fetch(URL, {
    method: "GET",
    headers: { Authorization: "JfpwJjXPtDBOYponpqbrjPAtCO5fmQv6BMKzd3NKGJa4w0N214A2B9kA" },
  });
  const collections = await resp.json();
  const photos = collections.photos;
  console.log(photos);
  photos.forEach((photo) => {
    if (photo.id === parseInt(ID)) {
      const container = document.getElementById("container");
      container.innerHTML = `<div class="card mb-4 shadow-sm">
      <img src="${photo.src.medium}" alt="">
      <div class="card-body">
        <h5 class="card-title"><a href="./dettaglio.html?ID=${photo.id}">${photo.photographer}</a></h5>
        <p class="card-text">
          This is a wider card with supporting text below as a natural lead-in to additional content. This
          content is a little bit longer.
        </p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
            <button type="button" class="btn btn-sm btn-outline-secondary "onclick="hide(event)">Hide</button>
          </div>
          <small class="text-muted">${photo.id}</small>
        </div>
      </div>
    </div>`;
    }
  });
};
