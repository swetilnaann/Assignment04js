const studentInfo = document.createElement("p");
studentInfo.textContent = "Student ID: 200588539 | Name: Ann Mary Swetilna";
document.body.appendChild(studentInfo);

const url = `https://api.thecatapi.com/v1/images/search?limit=20`;
const api_key = "live_4jY6RXH1MspQoMTWSTuAFDogAr2EvC4u0t7X1bcPJKnVu8L8UbQQDJxYuWsJEreE";

fetch(url, {
    headers: {
        'x-api-key': api_key
    }
})
    .then((response) => response.json())
    .then((data) => {
        data.forEach(imageData => {
            let image = document.createElement('img');
            image.src = imageData.url;

            let gridCell = document.createElement('div');
            gridCell.classList.add('col', 'col-lg');
            gridCell.appendChild(image);

            document.getElementById('grid').appendChild(gridCell);
        });
    })
    .catch(error => {
        console.error("Error fetching images:", error);
    });
