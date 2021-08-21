document.getElementById('cost-memory0').addEventListener('click',  function(){
    const oldPrice = document.getElementById('Extra-Memory');
    const updatePrice = oldPrice.innerText;
    oldPrice.innerText = 0; 
})
document.getElementById('cost-memory16').addEventListener('click',  function(){
    const oldPrice = document.getElementById('Extra-Memory');
    const updatePrice = oldPrice.innerText;
    oldPrice.innerText = 180; 
})
// storage
document.getElementById('cost-storage256').addEventListener('click',  function(){
    const oldPrice = document.getElementById('Extra-Storage');
    const updatePrice = oldPrice.innerText;
    oldPrice.innerText = 0; 
})
document.getElementById('cost-storage512').addEventListener('click',  function(){
    const oldPrice = document.getElementById('Extra-Storage');
    const updatePrice = oldPrice.innerText;
    oldPrice.innerText = 100; 
})
document.getElementById('cost-storage1TB').addEventListener('click',  function(){
    const oldPrice = document.getElementById('Extra-Storage');
    const updatePrice = oldPrice.innerText;
    oldPrice.innerText = 180; 
})

// delivary charge
document.getElementById('free-delivery').addEventListener('click',  function(){
    const oldPrice = document.getElementById('total-price');
    const updatePrice = oldPrice.innerText;
    oldPrice.innerText = 0; 
})
document.getElementById('charge-delivery').addEventListener('click',  function(){
    const oldPrice = document.getElementById('Delivery-Charge');
    const updatePrice = oldPrice.innerText;
    oldPrice.innerText = 20; 
})

function updateTotal(){
    const totalPrice=document.getElementById('total-price');
   
    const bestPrice=parseInt(document.getElementById('Best-Price').innerText);
    const memoryPrice =parseInt(document.getElementById('Extra-Memory').innerText);
    const storagePrice =parseInt(document.getElementById('Extra-Storage').innerText);
    const deliveryPrice =parseInt(document.getElementById('Delivery-Charge').innerText);
    
    totalPrice.innerText=bestPrice+memoryPrice+storagePrice+deliveryPrice;

    // update price after using code 

    const offer=document.getElementById('total-with-code');
    offer.innerText=bestPrice+memoryPrice+storagePrice+deliveryPrice;
}
// coupon code apply 

document.getElementById('code-btn').addEventListener('click',function(){
    const codeValue=document.getElementById('code-value')
    const offer=document.getElementById('total-with-code');
    if(codeValue.value=='stevekaku'){
       offer.innerText=parseFloat(offer.innerText)-parseFloat(offer.innerText)*.2
    }
    
    codeValue.value=''
});