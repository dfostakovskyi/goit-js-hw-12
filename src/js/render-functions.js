// webformatURL — посилання на маленьке зображення для списку карток у галереї
// largeImageURL — посилання на велике зображення для модального вікна
// tags — рядок з описом зображення. Підійде для атрибута alt
// likes — кількість вподобайок
// views — кількість переглядів
// comments — кількість коментарів
// downloads — кількість завантажень


export function createGallery(arr) {
    return arr.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
        <li class="gallery_item">
            <a href="${largeImageURL}">
                <img src="${webformatURL}" alt="${tags}" width="360px">
            </a>
            <div class="gallery_data">
                <table>
                    <tr>
                        <th>Likes</th>
                        <th>Views</th>
                        <th>Comments</th>
                        <th>Downloads</th>
                    </tr>
                    <tr>
                        <td>${likes}</td>
                        <td>${views}</td>
                        <td>${comments}</td>
                        <td>${downloads}</td>
                    </tr>
                </table>
            </div>
        </li>
    `).join("");
}
