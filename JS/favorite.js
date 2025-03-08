// // textContent.classList.add('closeTab')

// function addFavorite(id) {
//     const cardContainer = document.getElementById('favoriteCardContainer');
//     const textContent = document.getElementById('favConPro')
//     const item = document.getElementById(id);
//     if (!item) {
//         console.error(`Element with id ${id} not found`);
//         return;
//     }

//     const cardHTML = `
//         <div class="card" id="${elm.id}">
//             <div class="image-content">
//                 <div class="icons" id="icons">
//                     <div class="icon">
//                         ${elm.credit ? '<i class="fa-solid fa-percent percent"></i>' : ''}
//                         ${elm.barter ? '<i class="fa-solid fa-arrows-spin arrow"></i>' : ''}
//                     </div>
//                     <i class="fa-regular fa-heart heartIcon" id="heartIcon" onclick="removeFavorite('${elm.id}')"></i>
//                 </div>
//                 <img src="${elm.images}" alt="car img">
//             </div>
//             <div class="text-content">
//                 <h3>${elm.price} ${elm.currency}</h3>
//                 <p>${elm.brand} ${elm.model}</p>
//                 <p>${elm.year}, ${elm.engine}L, ${elm.odometer} ${elm.odometerUnit}</p>
//                 <span>${elm.city} , ${elm.dates}</span>
//             </div>
//         </div>
//     `;

//     cardContainer.innerHTML += cardHTML;
//     toggleTextContent();
// }

// function removeFavorite(id) {
//     const item = document.getElementById(id);
//     if (item) {
//         cardContainer.removeChild(item);
//         toggleTextContent();
//     }
// }

// function toggleTextContent() {
//     if (cardContainer.children.length > 0) {
//         textContent.classList.add('closeTab');
//     } else {
//         textContent.classList.remove('closeTab');
//     }
// }