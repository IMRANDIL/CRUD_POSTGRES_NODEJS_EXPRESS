

const btn = document.querySelector('.btn');



btn.addEventListener('click', async (e) => {
    e.preventDefault();
    try {
        const inputTxt = document.querySelector('.input');
        const name = inputTxt.value;
        inputTxt.value = '';

        const data = await fetch('http://localhost:5000/info', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: name })
        });
        const response = await data.json();


    } catch (error) {
        console.log(error);
    }

})