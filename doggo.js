const URL = 'https://dog.ceo/api/breeds/list/all';
const select = document.querySelector('.breeds');
const loading = document.querySelector('.icon');

fetch(URL).then( res => res.json()).then(data => {
    const breedsObj = data.message;
    const breedsArr = Object.keys(breedsObj);
    
    for( let i = 0; i < breedsArr.length; i++ ) {
        const option = document.createElement('option');
        option.value = breedsArr[i];
        option.innerText = breedsArr[i];

        select.appendChild(option);
    }
});

select.addEventListener('change', (event) => {
    loading.classList.add('show');
    fetch(`https://dog.ceo/api/breed/${event.target.value}/images/random`)
    .then( res => res.json() )
    .then( data => {
        const img = document.createElement('img');
        const div = document.querySelector('.doggos');
        img.src = data.message;
        img.alt = 'a dog';

        div.appendChild(img);
    })
    .catch( err => console.log(err));
    loading.classList.remove("show");
});