function myFun()
{
    var txt,products,val;
    input = document.getElementById("input").value.toUpperCase();

    products = document.getElementsByClassName("card-title");
    console.log(input);
    for (let i = 0; i < products.length; i++) 
    {
        val = products[i].innerText;
        txt = val.toUpperCase();
        
        if(txt.indexOf(input) > -1)
        {
            console.log(val);
            products[i].style.display = "";
        }
        else
        {
            products[i].style.display = "none";
        }
    }
}