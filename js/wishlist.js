let rowShop = document.getElementById("rowShop")
let cart = JSON.parse(localStorage.getItem("myCart")) || [];
let compare = JSON.parse(localStorage.getItem("myCompare")) || [];
let wishListVer = JSON.parse(localStorage.getItem("myList")) || [];

let compareID = document.getElementById("compare")
let whishList = document.getElementById("whishList")
let cartCount = document.getElementById("cartCount")
let table = document.getElementById("table")
let cartUp = document.getElementById("cartUp")

cartCount.textContent = cart.length; 
compareID.textContent = compare.length;
whishList.textContent = wishListVer.length; 
let item;

let tBodyWish = document.getElementById("tBodyWish")



function render(){ 

    let containerTwo =" ";
    for(let i =0 ; i<wishListVer.length;i++){
        containerTwo+=`
   
        <tr class="text-center">
        <td class="tdd" colspan="2">
        <div class="d-flex justify-content-center align-items-center ">
        
        <img src="${wishListVer[i].image}" alt="" class="me-5"style="height:100px; width:100px;"></img>
       ${(wishListVer[i].title).slice(0,10)}
        </div>
        </td>
        <td  class="tdd">${wishListVer[i].price +" $"}</td>
<td class="tdd" onclick="deleteItem(${i})"><i class="fa-solid fa-xmark"></i></td>
</tr>
        `
   

}
tBodyWish.innerHTML =  containerTwo
}
render()

function minusOne(index){
 
    wishListVer.splice(index,1)
        render()
        localStorage.setItem("myList" , JSON.stringify(wishListVer))
        wishListVer.length<1 ? btnDeleteAll.style.display="none" : btnDeleteAll.style.display="block"
        cartCount.textContent = cart.length; 
        compareID.textContent = compare.length;
        whishList.textContent = wishListVer.length; 

    
}
btnDeleteAll.addEventListener("click" , function(e){

    localStorage.removeItem("myList")
    wishListVer=[]
    render()
    location.reload()
})

wishListVer.length<1 ? btnDeleteAll.style.display="none" : btnDeleteAll.style.display="block"
wishListVer.length<1 ? table.style.display="none" : table.style.display=""
wishListVer.length<1 ? cartUp.style.display="none" : cartUp.style.display="block"


function deleteItem(index){
    wishListVer.splice(index,1)
    render()
    localStorage.setItem("myList" , JSON.stringify(wishListVer))
}