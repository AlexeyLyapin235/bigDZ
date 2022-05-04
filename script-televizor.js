import{render} from'./phone-scrypt.js';
import{setAt} from'./phone-scrypt.js';
import{checkard} from'./phone-scrypt.js';
import{showMiniCart} from'./phone-scrypt.js';

window.onload = () => {
    
    getData();
    setAt()
    checkard();
    showMiniCart()
}

const productURL = 'https://dh.cubicle.53xapps.com/products';
let product = [];
let products =[]
 async function getData(){
 await axios.get(productURL).then((response)=>{
     products = response.data
     product = products.filter(item => item.category == 3)
   
     render(product)
    })
 
}
console.log(product);