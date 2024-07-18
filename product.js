//Selecting Side Navbar, Menuicon

var sidenav = document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")
var closenav=document.getElementById("closenav")

menuicon.addEventListener("click",function()
{
    sidenav.style.right=0
})

closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})


//Product Search Funtionality
var ProductContainer = document.getElementById("product-container")
var search = document.getElementById("search")
var productlist = ProductContainer.querySelectorAll("div")

    search.addEventListener("keyup",function(){
    var enteredValu = event.target.value.toUpperCase()

    for(count = 0; count<productlist.length; count=count+1)

    {
        var productname = productlist[count].querySelector("h1").textContent

        if(productname.toUpperCase().indexOf(enteredValu)<0)
        {
            productlist[count].style.display="none"
        }
        else
        {
            productlist[count].style.display="block"
        }

    }
})