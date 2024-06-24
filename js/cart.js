
let rowShop = document.getElementById("rowShop")
let cart = JSON.parse(localStorage.getItem("myCart")) || [];
let compare = JSON.parse(localStorage.getItem("myCompare")) || [];
let wishListVer = JSON.parse(localStorage.getItem("myList")) || [];
let tBody= document.getElementById("tBody")
let table = document.getElementById("table")
let compareID = document.getElementById("compare")
let whishList = document.getElementById("whishList")
let cartCount = document.getElementById("cartCount")
let btnDeleteAll = document.getElementById("btnDeleteAll")
let cartUp = document.getElementById("cartUp")
let cartCh = document.getElementById("cartCh")

cartCount.textContent = cart.length; 
compareID.textContent = compare.length;
whishList.textContent = wishListVer.length; 

function render(){ 
    let container="";
    for(let i =0 ; i<cart.length;i++){
        container+=`
        
        <tr class="text-center">
        <td class="tdd" colspan="2">
        <div class="d-flex justify-content-center align-items-center ">
        
        <img src="${cart[i].image}" alt="" class="me-5"style="height:100px; width:100px;"></img>
       ${(cart[i].title).slice(0,20)}
        </div>
        </td>
        <td  class="tdd">${cart[i].price +" $"}</td>

<td class="tdd text-center" colspan="3">
<div class="control-Count text-center">
<div  onclick="plusOne(${i})"><i class="fa-solid fa-plus"></i></div>
${cart[i].count}
<div   onclick="minusOne(${i})"><i class="fa-solid fa-minus"></i></div>
</div>
</td>
<td class="tdd" onclick="deleteItem(${i})"><i class="fa-solid fa-xmark"></i></td>
</tr>
        `
   

}
tBody.innerHTML=container
}
render()




{/* <tr>
<td>${data[i].id}</td>
<td>${(data[i].title).slice(0,30)}</td>
<td><img src="${data[i].image}" alt=""></td>
<td>${data[i].count}</td>
<td onclick="plusOne(i)"><i class="fa-solid fa-plus"></i></td>
<td onclick="minusOne(i)"><i class="fa-solid fa-minus"></i></td>
 <td>${cart.price}</td>
</tr> */}

function plusOne(index){
    cart[index].count+=1;
    render()
    localStorage.setItem("myCart" , JSON.stringify(cart))

}


function minusOne(index){
    if(cart[index].count >1){
        cart[index].count-=1;
        render()
        localStorage.setItem("myCart" , JSON.stringify(cart))
    }else{
        cart.splice(index,1)
        render()
        localStorage.setItem("myCart" , JSON.stringify(cart))
    }
    cart.length<1 ? btnDeleteAll.style.display="none" : btnDeleteAll.style.display="block"
    cartCount.textContent = cart.length; 
compareID.textContent = compare.length;
whishList.textContent = wishListVer.length; 
}
btnDeleteAll.addEventListener("click" , function(e){
    localStorage.removeItem("myCart")
    cart=[]
    render()
    location.reload()
})
cart.length<1 ? btnDeleteAll.style.display="none" : btnDeleteAll.style.display="block"
cart.length<1 ? table.style.display="none" : table.style.display=""
cart.length<1 ? cartUp.style.display="none" : cartUp.style.display="block"
cart.length<1 ? cartCh.style.display="none" : cartCh.style.display="block"



function deleteItem(index){
    cart.splice(index,1)
    render()
    localStorage.setItem("myCart" , JSON.stringify(cart))
}