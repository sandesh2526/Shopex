row1 = document.getElementsByClassName("row-1");
window.alert("HELLO");
console.log(row1[0].innerText);

function myFun()
{
    var txt,products,val;
    input = document.getElementById("input").value.toUpperCase();
    products = document.getElementsByClassName("card");
    row1 = document.getElementsByClassName("row-1");
    for (let count = 0; count < products.length; count++) 
    {
        val = products[count].innerText;
        txt = val.toUpperCase();
        if(txt.indexOf(input) > -1)
        {
            console.log(val);
            products[count].style.display = "flex";
            products[count].align
        }
        else
        {
            products[count].style.display = "none";
        }
    }
}