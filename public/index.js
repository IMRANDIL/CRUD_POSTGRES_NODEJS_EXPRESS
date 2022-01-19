

const btn = document.querySelector('.btn');
const getbtn = document.querySelector('.getbtn');



btn.addEventListener('click', async (e) => {
    e.preventDefault();
    try {
        const inputTxt = document.querySelector('.input');
        const name = inputTxt.value;
        inputTxt.value = '';
        if (name === '') {
            return alert('please pass the name.')
        }

        const data = await fetch('http://localhost:5000/info', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: name })
        });
        return await data.json();


    } catch (error) {
        console.log(error);
    }

});




//show data...

getbtn.addEventListener('click', async () => {
    const response = await fetch('http://localhost:5000/info/get');
    const data = await response.json();
    console.log(data);
})