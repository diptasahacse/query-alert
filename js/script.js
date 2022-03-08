const getCurrnetStatus = () => {
    const status = localStorage.getItem('active-status');
    if (status == 'Play') {
        document.getElementById('toggle-button').innerText = "Play";
        console.log('Play');

    } else {
        document.getElementById('toggle-button').innerText = "Pause";
        console.log('Pause');

    }

}
getCurrnetStatus();

document.getElementById('toggle-button').addEventListener('click', () => {
    let currentText = document.getElementById('toggle-button').innerText;
    if (currentText == "Play") {
        localStorage.setItem('active-status', 'Pause');
        // // sessionStorage.setItem('active-status', 'Pause');
        currentText = localStorage.getItem('active-status');
    } else {
        localStorage.setItem('active-status', 'Play');
        // // sessionStorage.setItem('active-status', 'Play');

        currentText = localStorage.getItem('active-status');

    }
    document.getElementById('toggle-button').innerText = currentText;

});

// const addItem = () => {
//     let itemData = document.getElementById('input-field').value;
//     console.log(itemData)
// }
document.getElementById('add-item').addEventListener('click', () => {
    const data = document.getElementById('input-field').value;
    if (data.length > 0) {
        document.getElementById('input-field').value = '';
        const span = document.createElement('span');
        span.classList.add('alert-item');
        span.innerText = data;
        document.getElementById('all-items-section').appendChild(span);

    }



});