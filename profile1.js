function om(){
    const n=sessionStorage.getItem('Name');
    document.getElementById("name").innerHTML=n;

};

function san(){

    const e=sessionStorage.getItem('User');
    document.getElementById("name").innerHTML=e;
};


$(document).ready(function(){

$('.log-btn').on('click',function(){

    $('.log-in').addClass("active");
    $('.sign-on').addClass("inactive");
    $('.btn-6').addClass("active");
});

$('.sign-btn').on('click',function(){

    $('.sign-on').removeClass("inactive");
    $('.sign-on').addClass("active");
    $('.log-in').removeClass("active");
    $('.btn-6').addClass("active");
});

$('.log-out').on('click',function(){
      $('.go-name').addClass("inactive");
});

$('.save').on('click',function(){
  
    $('.payment-on').addClass("act");
    $('.address-on').addClass("inact");
});

$('.card-option').on('click',function(){

    $('.card-on').addClass("act");
});

$('.place').on('click',function(){

    $('.thanks-go').addClass("acto");
});

$('.card-op').on('click',function(){

    $('.card-on').removeClass("act");
});



$(function(){
  
        $('#R').click(function() {
             sessionStorage.setItem('r','show');
           
          });
          
          $('#A').click(function() {
            sessionStorage.setItem('a','show');
          
         });

         $('#B').click(function() {
            sessionStorage.setItem('b','show');
          
         });

         $('#C').click(function() {
            sessionStorage.setItem('c','show');
          
         });

         $('#D').click(function() {
            sessionStorage.setItem('d','show');
          
         });

         $('#E').click(function() {
            sessionStorage.setItem('e','show');
          
         });

         $('#F').click(function() {
            sessionStorage.setItem('f','show');
          
         });

         $('#G').click(function() {
            sessionStorage.setItem('g','show');
          
         });

         $('#H').click(function() {
            sessionStorage.setItem('h','show');
          
         });

         $('#I').click(function() {
            sessionStorage.setItem('i','show');
          
         });

         $('#J').click(function() {
            sessionStorage.setItem('j','show');
          
         });

         $('#K').click(function() {
            sessionStorage.setItem('k','show');
          
         });

         $('#L').click(function() {
            sessionStorage.setItem('l','show');
          
         });

         $('#M').click(function() {
            sessionStorage.setItem('m','show');
          
         });

         $('#N').click(function() {
            sessionStorage.setItem('n','show');
          
         });

         $('#O').click(function() {
            sessionStorage.setItem('o','show');
          
         });

         $('#P').click(function() {
            sessionStorage.setItem('p','show');
          
         });

         $('#Q').click(function() {
            sessionStorage.setItem('q','show');
          
         });

         $('#S').click(function() {
            sessionStorage.setItem('s','show');
          
         });

         $('#T').click(function() {
            sessionStorage.setItem('t','show');
          
         });

         $('#U').click(function() {
            sessionStorage.setItem('u','show');
          
         });

         $('#V').click(function() {
            sessionStorage.setItem('v','show');
          
         });

         $('#W').click(function() {
            sessionStorage.setItem('w','show');
          
         });

         $('#X').click(function() {
            sessionStorage.setItem('x','show');
          
         });

         $('#Y').click(function() {
            sessionStorage.setItem('y','show');
          
         });

         $('#Z').click(function() {
            sessionStorage.setItem('z','show');
          
         });

         $('#A-1').click(function() {
            sessionStorage.setItem('a-1','show');
          
         });

         $('#B-1').click(function() {
            sessionStorage.setItem('b-1','show');
          
         });

         $('#C-1').click(function() {
            sessionStorage.setItem('c-1','show');
          
         });

         $('#D-1').click(function() {
            sessionStorage.setItem('d-1','show');
          
         });

         $('#E-1').click(function() {
            sessionStorage.setItem('e-1','show');
          
         });

         $('#F-1').click(function() {
            sessionStorage.setItem('f-1','show');
          
         });
         
         $('#G-1').click(function() {
            sessionStorage.setItem('g-1','show');
          
         });

         $('#H-1').click(function() {
            sessionStorage.setItem('h-1','show');
          
         });

         $('#I-1').click(function() {
            sessionStorage.setItem('i-1','show');
          
         });

         $('#J-1').click(function() {
            sessionStorage.setItem('j-1','show');
          
         });

         $('#K-1').click(function() {
            sessionStorage.setItem('k-1','show');
          
         });

         $('#L-1').click(function() {
            sessionStorage.setItem('l-1','show');
          
         });
          
         $('#M-1').click(function() {
            sessionStorage.setItem('m-1','show');
          
         });

         $('#N-1').click(function() {
            sessionStorage.setItem('n-1','show');
          
         });

         $('#O-1').click(function() {
            sessionStorage.setItem('o-1','show');
          
         });

         $('#P-1').click(function() {
            sessionStorage.setItem('p-1','show');
          
         });

         $('#Q-1').click(function() {
            sessionStorage.setItem('q-1','show');
          
         });

         $('#R-1').click(function() {
            sessionStorage.setItem('r-1','show');
          
         });

         $('#S-1').click(function() {
            sessionStorage.setItem('s-1','show');
          
         });

         $('#T-1').click(function() {
            sessionStorage.setItem('t-1','show');
          
         });

         $('#U-1').click(function() {
            sessionStorage.setItem('u-1','show');
          
         });

         $('#V-1').click(function() {
            sessionStorage.setItem('v-1','show');
          
         });

         $('#W-1').click(function() {
            sessionStorage.setItem('w-1','show');
          
         });

         $('#X-1').click(function() {
            sessionStorage.setItem('x-1','show');
          
         });

         $('#Y-1').click(function() {
            sessionStorage.setItem('y-1','show');
          
         });

         $('#Z-1').click(function() {
            sessionStorage.setItem('z-1','show');
          
         });

         $('#A-2').click(function() {
            sessionStorage.setItem('a-2','show');
          
         });

         $('#B-2').click(function() {
            sessionStorage.setItem('b-2','show');
          
         });
});

});