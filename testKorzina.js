
let cart =[]
let html = document.querySelector('.ap')


getData()
function getData(){
     axios.get('https://dh.cubicle.53xapps.com/products').then((response)=>{
       let products = response.data
      
       console.log(products);
   
    })}
   

    
let nameAndPrice = [];
let index = 0;
let arx = JSON.parse(localStorage.getItem('cart'));
console.log(arx);

for(let i =0;i<arx.length;i++){
  for (key in arx[i]){
      if(key=='name'|| key == 'price'){
    //  console.log(arx[i+1][key]);
      nameAndPrice[index] = arx[i][key];
      index++
      }
  }

}
 let allcount = 0;
for(let i = 0; i < nameAndPrice.length - 1; i=i+2){
    const p = document.createElement('div')
    p.innerHTML = `<p><span>Товар:${nameAndPrice[i + 1]} </span><span>Цена:${nameAndPrice[i]}</span> </p>`
    html.appendChild(p)
    allcount += Number(nameAndPrice[i])
    console.log(nameAndPrice);
    console.log(`Название: ${nameAndPrice[i + 1]}, Цена: ${nameAndPrice[i]}`);
}
let finishPrice =document.querySelector(".finish-price");
finishPrice.innerHTML =`<h4>Итоговая цена:${allcount}Рублей</h4>`

function DeleteCart(){
    
    localStorage.clear('cart')
   return location.reload()
}