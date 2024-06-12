const page = document.querySelector('.page');

let htmlString = ""

for (let i = 1; i <= 8; i++) {
    htmlString += `<div class="page-number">${i}</div>`
}

page.innerHTML = htmlString