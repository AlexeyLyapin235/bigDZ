window.onload = () => {
    setTimeout(getData)
}
const productURL = 'https://dh.cubicle.53xapps.com/products';
const categoryURL ='https://dh.cubicle.53xapps.com/categories';
let product = [];
let src1 = []

let category = [];
 async function getData(){
 await axios.get(categoryURL).then((response)=>{
     category = response.data
    // src1 = category.filter(item => item.title)
})
render1(category)
 
 }/*
function createURL(arr){
    const fragment = document.createDocumentFragment();
    const blocks = document.querySelector('.blocks');
    for(let key in arr){
        if(key.title == 'Смартфоны'){
            const url = document.createElement('a')
            url.href = 'index-smartphone.html'
            fragment.appendChild(url)
        }
    }
    blocks.appendChild(fragment)
}
*/




function render1(list){
     const blocks = document.querySelector('.blocks');
    const fragment = document.createDocumentFragment();
    for(let prod of list){
        let html = ``
      if(prod.title =='Смартфоны'){
       
            html = `
            <div>
            <a href='index-smartphone.html'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmQ6W4jjcnhsYOwlFsrq1w5FezW_qYxIRx7A&usqp=CAU" class="card-img-top" alt="...">
            <div class="card-body">
            <p class="card-text">${prod.title}</p>
            </div>
            </div> `
      } 
      else if(prod.title =='Наутбуки'){
        html = `
        <div>
            <a href='index-nootbook.html'>
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmQ6W4jjcnhsYOwlFsrq1w5FezW_qYxIRx7A&usqp=CAU" class="card-img-top" alt="...">
       <div class="card-body">
       <p class="card-text">${prod.title}</p>
       </div>
       </div>`
      } else if(prod.title=='Телефизоры'){
        html = `
        <div>
            <a href='index-televizor.html'>
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmQ6W4jjcnhsYOwlFsrq1w5FezW_qYxIRx7A&usqp=CAU" class="card-img-top" alt="...">
       <div class="card-body">
       <p class="card-text">${prod.title}</p>
       </div>
       </div>`
      } else if(prod.title =='Часы'){
        html = `
        <div>
            <a href='index-clock.html'>
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmQ6W4jjcnhsYOwlFsrq1w5FezW_qYxIRx7A&usqp=CAU" class="card-img-top" alt="...">
       <div class="card-body">
       <p class="card-text">${prod.title}</p>
       </div>
       </div>`
      }
            
            const block = document.createElement('div')
            block.className = 'placeholder-glow block shadow rounded text-center'
            block.innerHTML = ''
            blocks.appendChild(block)
        block.innerHTML = html
        fragment.appendChild(block)
        console.log(prod.title);
    }

    blocks.appendChild(fragment)
}
function ber(url11){
/*
const blocka = document.querySelector('.blocks')
blocka.addEventListener('click',(e)=>{
    if(e.target.innerHTML == 'Cмартфоны'){
       let url = document.createElement('a');
       url.href = 'index-smartphone.html'
       
       blocka.appendChild(url)
    }
})}
ber()
*/
/*





function render(list){
    const blocks = document.querySelector('.blocks');
    const fragment = document.createDocumentFragment();
    for(let prod of list){
        const block = document.createElement('div')
        block.className = 'placeholder-glow block shadow rounded text-center'
        block.innerHTML = ''
        blocks.appendChild(block)
        const html = `
        <img class="rounded user-img" src="${prod.photo}" alt="">
        <p class="">
        <span>title:${prod.title}</span>
        </p>
        <p class="prod-prise">
        <span>price:${prod.price}</span>
        </p>
        <button type="button" class="btn btn-warning">В корзину</button>
         </div> `

    block.innerHTML = html
    fragment.appendChild(block)
    }
    blocks.appendChild(fragment)
}*/
/*
let dropmenu = document.querySelector('.dropdown-menu');
dropmenu.addEventListener('click',function(e){
    console.log(e);
})

*/
}


/*



function run(){
var URL = "index-smartphone.html";    
window.open(URL, null)
 }
run()


*/
