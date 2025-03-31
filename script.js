
function addProduct(e){
    e.preventDefault();
    const formProduct = document.getElementById('formProduct');

    const nameProduct = document.getElementById('nameP');
    const priceProduct = document.getElementById('priceP');
    const optionProduct = document.getElementById('optionP');
    const linkImageProduct = document.getElementById('linkImageP');
    
    const tableProduct = document.querySelector('#tableProduct');

    const butDelete = document.createElement('button');
    butDelete.innerText = 'Delete row';
    butDelete.style.color = 'red';

    const arrProduct = [nameProduct.value, Number(priceProduct.value), optionProduct.value, linkImageProduct.value, butDelete]; 
    if(arrProduct[0].trim() && (arrProduct[1] !== 0 && isNaN(priceProduct.value) === false) && arrProduct[2] && arrProduct[3].trim()){
        const createTR = document.createElement('tr');
        const createImage = document.createElement('img');
        arrProduct.forEach((element, index) => {
            const createTD = document.createElement('td');
            if(index === (arrProduct.length -2)){
                createImage.src = element;
                createImage.alt = 'image';
                createImage.id = 'imgProduct';
                createTD.appendChild(createImage);
            }
            else if(index === (arrProduct.length -1)){
                arrProduct[index].addEventListener('click', ()=>{ deleteProduct(createTR) });
                createTD.appendChild(arrProduct[index]);
            }
            else{
                createTD.innerText = element;
            }
            createTR.appendChild(createTD);
        });
        tableProduct.appendChild(createTR);
        formProduct.reset();
    }
    else{
        alert("The fields are invalid.");
    }
}

function deleteProduct(tr){
    tr.remove();
}