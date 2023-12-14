document.addEventListener('DOMContentLoaded', () => {
    // urls for exercises
    const url_ex2 = `https://www.randyconnolly.com/funwebdev/3rd/api/art/galleries.php`;
    const url_ex4 = `https://www.randyconnolly.com/funwebdev/3rd/api/art/artists.php`;
    const url_ex6 = `https://www.randyconnolly.com/funwebdev/3rd/api/art/paintings-nested.php?gallery=`;

    // Exercise 2
fetch(url_ex2)
.then(response => response.json())
.then(data => {
  const listGalleries = document.querySelector('#listGalleries');
  data.forEach(gallery => {
    const listItem = document.createElement('li');
    listItem.textContent = gallery.GalleryName;
    listItem.addEventListener('click', () => {
      // Exercise 6
      fetch(`https://www.randyconnolly.com/funwebdev/3rd/api/art/paintings-nested.php?gallery=${gallery.GalleryID}`)
        .then(response => response.json())
        .then(paintings => {
          const paintingsList = document.querySelector('#paintings');
          paintingsList.innerHTML = '';
          paintings.forEach(painting => {
            const paintingItem = document.createElement('li');
            paintingItem.textContent = painting.title;
            paintingsList.appendChild(paintingItem);
          });
        })
        .catch(error => console.error('Error fetching paintings:', error));
    });
    listGalleries.appendChild(listItem);
  });
})
.catch(error => console.error('Error fetching galleries:', error));

// Exercise 4
fetch(url_ex4)
.then(response => response.json())
.then(artists => populateArtists(artists))
.catch(error => console.error('Error fetching artists:', error));

function populateArtists(artists) {
const listArtists = document.querySelector('#listArtists');
artists.forEach(artist => {
  const listItem = document.createElement('li');
  listItem.textContent = artist.LastName;
  listArtists.appendChild(listItem);
});
}
});