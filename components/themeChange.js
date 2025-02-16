let check = 0;

function themeChange() {
    const body = document.body;
    const title = document.getElementById("title");
    if (check % 2 === 0) {
        body.style.backgroundColor = 'black';
        title.style.color = 'white';
    } else {
        body.style.backgroundColor = 'white';
        title.style.color = 'black';
    }
    check++;
}
