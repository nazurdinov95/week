const button = document.getElementById('addButton');

button.addEventListener('click', () = > {
    addButton();
})

const input = document.getElementById('input');

input.addEventListener('keydown', (e) = > {
    if(e.keyCode === 13
)
{
    addButton();
}
})

function addButton() {

    let dayOfWeek;
    const day = document.getElementById('input').value;

    switch (day) {
        case "1":
            dayOfWeek = "Monday";
            break;
        case "2":
            dayOfWeek = "Tuesday";
            break;
        case "3":
            dayOfWeek = "Wednesday";
            break;
        case "4":
            dayOfWeek = "Thursday";
            break;
        case "5":
            dayOfWeek = "Friday";
            break;
        case "6":
            dayOfWeek = "Saturday";
            break;
        case "7":
            dayOfWeek = "Sunday";
            break;
        default:
            dayOfWeek = "Another day";
    }
    document.getElementById('message').innerHTML = dayOfWeek;
}