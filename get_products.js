var prod = document.getElementsByClassName("card");
var price = document.getElementsByTagName("p");
var keep = 0;
for (let keep = 0; keep < prod.length; keep++) 
{
    console.log("{");
    if(keep+3<prod.length)
    {
        console.log('name: "' +prod[keep+3].querySelector(".card-title").innerText + '",');
        console.log('href: "'+prod[keep+3].querySelector("a").href + '",');    
        console.log('link: "'+prod[keep+3].querySelector("img").src+'",');
    }
    console.log('price: "'+price[keep].innerText + '",');
    //console.log(prod[13].querySelector(".text").innerText);
    console.log("},");
}
//$(".card-body .card-title ");
