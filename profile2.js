function get(){
  
    var f=document.getElementById("username").value;
    sessionStorage.setItem("Name",f); 
  
    return;
}

function set(){

    var h=document.getElementById("user").value;
    sessionStorage.setItem("User",h);
     
    return;
}

var tp;var ts;var tp1;var ts1;var tp2;var ts2;var tp3;var ts3;var tp4;var ts4;var tp5;var ts5;var tp6;var ts6;
var tp7;var ts7;var tp8;var ts8;var tp9;var ts9;var tp10;var ts10;var tp11;var ts11;var tp12;var ts12;var ts112;var tp112;
var ts13;var tp13;var ts14;var tp14;var ts15;var tp15;var ts16;var tp16;var ts17;var tp17;var ts18;var tp18;var ts19;var tp19;
var ts20;var tp20;var ts21;var tp21;var ts22;var tp22;var ts23;var tp23;var ts24;var tp24;var ts25;var tp25;
var ts26;var tp26;var ts27;var tp27;var ts28;var tp28;var ts29;var tp29;var ts30;var tp30;var ts31;var tp31;
var ts32;var tp32;var ts33;var tp33;var ts34;var tp34;var ts35;var tp35;var ts36;var tp36;var ts37;var tp37;
var ts38;var tp38;var ts39;var tp39;var ts40;var tp40;var ts41;var tp41;var ts42;var tp42;var ts43;var tp43;
var ts44;var tp44;var ts45;var tp45;var ts46;var tp46;var ts47;var tp47;var ts48;var tp48;var ts49;var tp49;
var ts50;var tp50;var ts51;var tp51;var ts52;var tp52;

        function addGo()
        {
            tp=parseInt(document.getElementById("quan").value);
            if(tp==5){
                alert("Allowed only 5 Quantity for Each Product");
            }
            else{
                document.getElementById("quan").value=tp+1;
                  ts=600+tp*600;
                sessionStorage.setItem("Ts",ts);
               
            }
       }  

       function negativeGo()
       {
           tp=parseInt(document.getElementById("quan").value);
           if(tp==0){
               alert("Zero value not allowed");
           }
           else{
            document.getElementById("quan").value=tp-1;
            ts=tp*600-600;
            sessionStorage.setItem("Ts",ts);
           }
      }  

       function addGo1()
       {
            tp1=parseInt(document.getElementById("quan-1").value);
           if(tp1==5){
               alert("Allowed only 5 Quantity for Each Product");
           }
           else{
               document.getElementById("quan-1").value=tp1+1;
               ts1=500+tp1*500;
               sessionStorage.setItem("Ts1",ts1);
           }
      }  

      function negativeGo1()
      {
           tp1=parseInt(document.getElementById("quan-1").value);
          if(tp1==0){
              alert("Zero value not allowed");
          }
          else{
           document.getElementById("quan-1").value=tp1-1;
            ts1=tp1*500-500;
           sessionStorage.setItem("Ts1",ts1);
          }
     }  

      function addGo2()
       {
           tp2=parseInt(document.getElementById("quan-2").value);
           if(tp2==5){
               alert("Allowed only 5 Quantity for Each Product");
           }
           else{
               document.getElementById("quan-2").value=tp2+1;
               ts2=1500+tp2*1500;
               sessionStorage.setItem("Ts2",ts2);
           }
      }  
       
      function negativeGo2()
      {
           tp2=parseInt(document.getElementById("quan-2").value);
          if(tp2==0){
              alert("Zero value not allowed");
          }
          else{
           document.getElementById("quan-2").value=tp2-1;
            ts2=tp2*500-500;
           sessionStorage.setItem("Ts2",ts2);
          }
     }  

     function addGo3()
       {
            tp3=parseInt(document.getElementById("quan-3").value);
           if(tp3==5){
               alert("Allowed only 5 Quantity for Each Product");
           }
           else{
               document.getElementById("quan-3").value=tp3+1;
               ts3=1200+tp3*1200;
               sessionStorage.setItem("Ts3",ts3);
           }
      }  
    
      function negativeGo3()
      {
           tp3=parseInt(document.getElementById("quan-3").value);
          if(tp3==0){
              alert("Zero value not allowed");
          }
          else{
           document.getElementById("quan-3").value=tp3-1;
            ts3=tp3*1200-1200;
           sessionStorage.setItem("Ts3",ts3);
          }
     } 

     function addGo4()
     {
         tp4=parseInt(document.getElementById("quan-4").value);
         if(tp4==5){
             alert("Allowed only 5 Quantity for Each Product");
         }
         else{
             document.getElementById("quan-4").value=tp4+1;
             ts4=500+tp4*500;
             sessionStorage.setItem("Ts4",ts4);
         }
    }  

    function negativeGo4()
    {
         tp4=parseInt(document.getElementById("quan-4").value);
        if(tp4==0){
            alert("Zero value not allowed");
        }
        else{
         document.getElementById("quan-4").value=tp4-1;
          ts4=tp4*500-500;
         sessionStorage.setItem("Ts4",ts4);
        }
   } 

   function addGo5()
     {
         tp5=parseInt(document.getElementById("quan-5").value);
         if(tp5==5){
             alert("Allowed only 5 Quantity for Each Product");
         }
         else{
             document.getElementById("quan-5").value=tp5+1;
             ts5=1000+tp5*1000;
             sessionStorage.setItem("Ts5",ts5);
         }
    }  


    
    function negativeGo5()
    {
         tp5=parseInt(document.getElementById("quan-5").value);
        if(tp5==0){
            alert("Zero value not allowed");
        }
        else{
         document.getElementById("quan-5").value=tp5-1;
          ts5=tp5*1000-1000;
         sessionStorage.setItem("Ts5",ts5);
        }
   } 


   function addGo6()
   {
       tp6=parseInt(document.getElementById("quan-6").value);
       if(tp6==5){
           alert("Allowed only 5 Quantity for Each Product");
       }
       else{
           document.getElementById("quan-6").value=tp6+1;
           ts6=1200+tp6*1200;
           sessionStorage.setItem("Ts6",ts6);
       }
  }  

  function negativeGo6()
    {
         tp6=parseInt(document.getElementById("quan-6").value);
        if(tp6==0){
            alert("Zero value not allowed");
        }
        else{
         document.getElementById("quan-6").value=tp6-1;
          ts6=tp6*1200-1200;
         sessionStorage.setItem("Ts6",ts6);
        }
   } 


   function addGo7()
       {
            tp7=parseInt(document.getElementById("quan-7").value);
           if(tp7==5){
               alert("Allowed only 5 Quantity for Each Product");
           }
           else{
               document.getElementById("quan-7").value=tp7+1;
               ts7=600+tp7*600;
               sessionStorage.setItem("Ts7",ts7);
           }
      }  


      function negativeGo7()
    {
         tp7=parseInt(document.getElementById("quan-7").value);
        if(tp7==0){
            alert("Zero value not allowed");
        }
        else{
         document.getElementById("quan-7").value=tp7-1;
          ts7=tp7*600-600;
         sessionStorage.setItem("Ts7",ts7);
        }
   } 


   function addGo8()
   {
        tp8=parseInt(document.getElementById("quan-8").value);
       if(tp8==5){
           alert("Allowed only 5 Quantity for Each Product");
       }
       else{
           document.getElementById("quan-8").value=tp8+1;
           ts8=1500+tp8*1500;
           sessionStorage.setItem("Ts8",ts8);
       }
  }  

  function negativeGo8()
      {
           tp8=parseInt(document.getElementById("quan-8").value);
          if(tp8==0){
              alert("Zero value not allowed");
          }
          else{
           document.getElementById("quan-8").value=tp8-1;
            ts8=tp8*1500-1500;
           sessionStorage.setItem("Ts8",ts8);
          }
     } 

     function addGo9()
     {
          tp9=parseInt(document.getElementById("quan-9").value);
         if(tp9==5){
             alert("Allowed only 5 Quantity for Each Product");
         }
         else{
             document.getElementById("quan-9").value=tp9+1;
             ts9=900+tp9*1500;
             sessionStorage.setItem("Ts9",ts9);
         }
    }  

    function negativeGo9()
    {
         tp9=parseInt(document.getElementById("quan-9").value);
        if(tp9==0){
            alert("Zero value not allowed");
        }
        else{
         document.getElementById("quan-9").value=tp9-1;
          ts9=tp9*900-900;
         sessionStorage.setItem("Ts9",ts9);
        }
   } 

    
   function addGo10()
   {
        tp10=parseInt(document.getElementById("quan-10").value);
       if(tp10==5){
           alert("Allowed only 5 Quantity for Each Product");
       }
       else{
           document.getElementById("quan-10").value=tp10+1;
           ts10=700+tp10*700;
           sessionStorage.setItem("Ts10",ts10);
       }
  }  

  function negativeGo10()
  {
       tp10=parseInt(document.getElementById("quan-10").value);
      if(tp10==0){
          alert("Zero value not allowed");
      }
      else{
       document.getElementById("quan-10").value=tp10-1;
        ts10=tp10*700-700;
       sessionStorage.setItem("Ts10",ts10);
      }
 } 
   
 function addGo11()
   {
        tp11=parseInt(document.getElementById("quan-11").value);
       if(tp11==5){
           alert("Allowed only 5 Quantity for Each Product");
       }
       else{
           document.getElementById("quan-11").value=tp11+1;
           ts11=1300+tp11*1300;
           sessionStorage.setItem("Ts11",ts11);
       }
  }  

  function negativeGo11()
  {
       tp11=parseInt(document.getElementById("quan-11").value);
      if(tp11==0){
          alert("Zero value not allowed");
      }
      else{
       document.getElementById("quan-11").value=tp11-1;
        ts11=tp11*1300-1300;
       sessionStorage.setItem("Ts11",ts11);
      }
 } 
   
 function addGo112()
 {
      tp112=parseInt(document.getElementById("quan-112").value);
     if(tp112==5){
         alert("Allowed only 5 Quantity for Each Product");
     }
     else{
         document.getElementById("quan-112").value=tp112+1;
         ts112=700+tp112*700;
         sessionStorage.setItem("Ts112",ts112);
     }
}  

function negativeGo112()
{
     tp112=parseInt(document.getElementById("quan-112").value);
    if(tp112==0){
        alert("Zero value not allowed");
    }
    else{
     document.getElementById("quan-112").value=tp112-1;
      ts112=tp112*700-700;
     sessionStorage.setItem("Ts112",ts112);
    }
} 
 
function addGo12()
{
     tp12=parseInt(document.getElementById("quan-12").value);
    if(tp12==5){
        alert("Allowed only 5 Quantity for Each Product");
    }
    else{
        document.getElementById("quan-12").value=tp12+1;
        ts12=1300+tp12*1300;
        sessionStorage.setItem("Ts12",ts12);
    }
}  

function negativeGo12()
{
     tp12=parseInt(document.getElementById("quan-12").value);
    if(tp12==0){
        alert("Zero value not allowed");
    }
    else{
     document.getElementById("quan-12").value=tp12-1;
      ts12=tp12*1300-1300;
     sessionStorage.setItem("Ts12",ts12);
    }
} 
 
function addGo13()
{
     tp13=parseInt(document.getElementById("quan-13").value);
    if(tp13==5){
        alert("Allowed only 5 Quantity for Each Product");
    }
    else{
        document.getElementById("quan-13").value=tp13+1;
        ts13=1500+tp13*1500;
        sessionStorage.setItem("Ts13",ts13);
    }
} 

 
function negativeGo13()
{
     tp13=parseInt(document.getElementById("quan-13").value);
    if(tp13==0){
        alert("Zero value not allowed");
    }
    else{
     document.getElementById("quan-13").value=tp13-1;
      ts13=tp13*1500-1500;
     sessionStorage.setItem("Ts13",ts13);
    }
} 

function addGo14()
{
     tp14=parseInt(document.getElementById("quan-14").value);
    if(tp14==5){
        alert("Allowed only 5 Quantity for Each Product");
    }
    else{
        document.getElementById("quan-14").value=tp14+1;
        ts14=1300+tp14*1300;
        sessionStorage.setItem("Ts14",ts14);
    }
} 

function negativeGo14()
{
     tp14=parseInt(document.getElementById("quan-14").value);
    if(tp14==0){
        alert("Zero value not allowed");
    }
    else{
     document.getElementById("quan-14").value=tp14-1;
      ts14=tp14*1300-1300;
     sessionStorage.setItem("Ts14",ts14);
    }
} 

function addGo15()
{
     tp15=parseInt(document.getElementById("quan-15").value);
    if(tp15==5){
        alert("Allowed only 5 Quantity for Each Product");
    }
    else{
        document.getElementById("quan-15").value=tp15+1;
        ts15=1200+tp15*1200;
        sessionStorage.setItem("Ts15",ts15);
    }
} 

function negativeGo15()
{
     tp15=parseInt(document.getElementById("quan-15").value);
    if(tp15==0){
        alert("Zero value not allowed");
    }
    else{
     document.getElementById("quan-15").value=tp15-1;
      ts15=tp15*1200-1200;
     sessionStorage.setItem("Ts15",ts15);
    }
} 
 
function addGo16()
{
     tp16=parseInt(document.getElementById("quan-16").value);
    if(tp16==5){
        alert("Allowed only 5 Quantity for Each Product");
    }
    else{
        document.getElementById("quan-16").value=tp16+1;
        ts16=1600+tp16*1600;
        sessionStorage.setItem("Ts16",ts16);
    }
} 

function negativeGo16()
{
     tp16=parseInt(document.getElementById("quan-16").value);
    if(tp16==0){
        alert("Zero value not allowed");
    }
    else{
     document.getElementById("quan-16").value=tp16-1;
      ts16=tp16*1600-1600;
     sessionStorage.setItem("Ts16",ts16);
    }
} 
 
function addGo17()
{
     tp17=parseInt(document.getElementById("quan-17").value);
    if(tp17==5){
        alert("Allowed only 5 Quantity for Each Product");
    }
    else{
        document.getElementById("quan-17").value=tp17+1;
        ts17=900+tp17*900;
        sessionStorage.setItem("Ts17",ts17);
    }
} 

function negativeGo17()
{
     tp17=parseInt(document.getElementById("quan-17").value);
    if(tp17==0){
        alert("Zero value not allowed");
    }
    else{
     document.getElementById("quan-17").value=tp17-1;
      ts17=tp17*900-900;
     sessionStorage.setItem("Ts17",ts17);
    }
} 

function addGo18()
{
     tp18=parseInt(document.getElementById("quan-18").value);
    if(tp18==5){
        alert("Allowed only 5 Quantity for Each Product");
    }
    else{
        document.getElementById("quan-18").value=tp18+1;
        ts18=1100+tp18*1100;
        sessionStorage.setItem("Ts18",ts18);
    }
} 

function negativeGo18()
{
     tp18=parseInt(document.getElementById("quan-18").value);
    if(tp18==0){
        alert("Zero value not allowed");
    }
    else{
     document.getElementById("quan-18").value=tp18-1;
      ts18=tp18*1100-1100;
     sessionStorage.setItem("Ts18",ts18);
    }
} 

function addGo19()
{
     tp19=parseInt(document.getElementById("quan-19").value);
    if(tp19==5){
        alert("Allowed only 5 Quantity for Each Product");
    }
    else{
        document.getElementById("quan-19").value=tp19+1;
        ts19=1300+tp19*1300;
        sessionStorage.setItem("Ts19",ts19);
    }
} 

function negativeGo19()
{
     tp19=parseInt(document.getElementById("quan-19").value);
    if(tp19==0){
        alert("Zero value not allowed");
    }
    else{
     document.getElementById("quan-19").value=tp19-1;
      ts19=tp19*1300-1300;
     sessionStorage.setItem("Ts19",ts19);
    }
} 
 
function addGo20()
{
     tp20=parseInt(document.getElementById("quan-20").value);
    if(tp20==5){
        alert("Allowed only 5 Quantity for Each Product");
    }
    else{
        document.getElementById("quan-20").value=tp20+1;
        ts20=1500+tp20*1500;
        sessionStorage.setItem("Ts20",ts20);
    }
} 
 
 
function negativeGo20()
{
     tp20=parseInt(document.getElementById("quan-20").value);
    if(tp20==0){
        alert("Zero value not allowed");
    }
    else{
     document.getElementById("quan-20").value=tp20-1;
      ts20=tp20*1500-1500;
     sessionStorage.setItem("Ts20",ts20);
    }
} 
 
  
function addGo21()
{
     tp21=parseInt(document.getElementById("quan-21").value);
    if(tp21==5){
        alert("Allowed only 5 Quantity for Each Product");
    }
    else{
        document.getElementById("quan-21").value=tp21+1;
        ts21=1700+tp21*1700;
        sessionStorage.setItem("Ts21",ts21);
    }
} 
 
function negativeGo21()
{
     tp21=parseInt(document.getElementById("quan-21").value);
    if(tp21==0){
        alert("Zero value not allowed");
    }
    else{
     document.getElementById("quan-21").value=tp21-1;
      ts21=tp21*1700-1700;
     sessionStorage.setItem("Ts21",ts21);
    }
} 

function addGo22()
{
     tp22=parseInt(document.getElementById("quan-22").value);
    if(tp22==5){
        alert("Allowed only 5 Quantity for Each Product");
    }
    else{
        document.getElementById("quan-22").value=tp22+1;
        ts22=2000+tp22*2000;
        sessionStorage.setItem("Ts22",ts22);
    }
} 

function negativeGo22()
{
     tp22=parseInt(document.getElementById("quan-22").value);
    if(tp22==0){
        alert("Zero value not allowed");
    }
    else{
     document.getElementById("quan-22").value=tp22-1;
      ts22=tp22*2000-2000;
     sessionStorage.setItem("Ts22",ts22);
    }
} 

function addGo23()
{
     tp23=parseInt(document.getElementById("quan-23").value);
    if(tp23==5){
        alert("Allowed only 5 Quantity for Each Product");
    }
    else{
        document.getElementById("quan-23").value=tp23+1;
        ts23=1600+tp23*1600;
        sessionStorage.setItem("Ts23",ts23);
    }
} 

function negativeGo23()
{
     tp23=parseInt(document.getElementById("quan-23").value);
    if(tp23==0){
        alert("Zero value not allowed");
    }
    else{
     document.getElementById("quan-23").value=tp23-1;
      ts23=tp23*1600-1600;
     sessionStorage.setItem("Ts23",ts23);
    }
}

 
function addGo24()
{
     tp24=parseInt(document.getElementById("quan-24").value);
    if(tp24==5){
        alert("Allowed only 5 Quantity for Each Product");
    }
    else{
        document.getElementById("quan-24").value=tp24+1;
        ts24=2100+tp24*2100;
        sessionStorage.setItem("Ts24",ts24);
    }
} 

function negativeGo24()
{
     tp24=parseInt(document.getElementById("quan-24").value);
    if(tp24==0){
        alert("Zero value not allowed");
    }
    else{
     document.getElementById("quan-24").value=tp24-1;
      ts24=tp24*2100-2100;
     sessionStorage.setItem("Ts24",ts24);
    }
}

function addGo25()
{
     tp25=parseInt(document.getElementById("quan-25").value);
    if(tp25==5){
        alert("Allowed only 5 Quantity for Each Product");
    }
    else{
        document.getElementById("quan-25").value=tp25+1;
        ts25=2000+tp25*2000;
        sessionStorage.setItem("Ts25",ts25);
    }
} 
 
function negativeGo25()
{
     tp25=parseInt(document.getElementById("quan-25").value);
    if(tp25==0){
        alert("Zero value not allowed");
    }
    else{
     document.getElementById("quan-25").value=tp25-1;
      ts25=tp25*2000-2000;
     sessionStorage.setItem("Ts25",ts25);
    }
} 

function addGo26()
{
     tp26=parseInt(document.getElementById("quan-26").value);
    if(tp26==5){
        alert("Allowed only 5 Quantity for Each Product");
    }
    else{
        document.getElementById("quan-26").value=tp26+1;
        ts26=1500+tp26*1500;
        sessionStorage.setItem("Ts26",ts26);
    }
} 

function negativeGo26()
{
     tp26=parseInt(document.getElementById("quan-26").value);
    if(tp26==0){
        alert("Zero value not allowed");
    }
    else{
     document.getElementById("quan-26").value=tp26-1;
      ts26=tp26*1500-1500;
     sessionStorage.setItem("Ts26",ts26);
    }
} 

function addGo27()
{
     tp27=parseInt(document.getElementById("quan-27").value);
    if(tp27==5){
        alert("Allowed only 5 Quantity for Each Product");
    }
    else{
        document.getElementById("quan-27").value=tp27+1;
        ts27=1700+tp27*1700;
        sessionStorage.setItem("Ts27",ts27);
    }
} 

function negativeGo27()
{
     tp27=parseInt(document.getElementById("quan-27").value);
    if(tp27==0){
        alert("Zero value not allowed");
    }
    else{
     document.getElementById("quan-27").value=tp27-1;
      ts27=tp27*1700-1700;
     sessionStorage.setItem("Ts27",ts27);
    }
} 
 
function addGo28()
{
     tp28=parseInt(document.getElementById("quan-28").value);
    if(tp28==5){
        alert("Allowed only 5 Quantity for Each Product");
    }
    else{
        document.getElementById("quan-28").value=tp28+1;
        ts28=2200+tp28*2200;
        sessionStorage.setItem("Ts28",ts28);
    }
} 

function negativeGo28()
{
     tp28=parseInt(document.getElementById("quan-28").value);
    if(tp28==0){
        alert("Zero value not allowed");
    }
    else{
     document.getElementById("quan-28").value=tp28-1;
      ts28=tp28*2200-2200;
     sessionStorage.setItem("Ts28",ts28);
    }
} 

  
function addGo29()
{
     tp29=parseInt(document.getElementById("quan-29").value);
    if(tp29==5){
        alert("Allowed only 5 Quantity for Each Product");
    }
    else{
        document.getElementById("quan-29").value=tp29+1;
        ts29=800+tp29*800;
        sessionStorage.setItem("Ts29",ts29);
    }
} 
 
function negativeGo29()
{
     tp29=parseInt(document.getElementById("quan-29").value);
    if(tp29==0){
        alert("Zero value not allowed");
    }
    else{
     document.getElementById("quan-29").value=tp29-1;
      ts29=tp29*800-800;
     sessionStorage.setItem("Ts29",ts29);
    }
} 

function addGo30()
{
     tp30=parseInt(document.getElementById("quan-30").value);
    if(tp30==5){
        alert("Allowed only 5 Quantity for Each Product");
    }
    else{
        document.getElementById("quan-30").value=tp30+1;
        ts30=600+tp30*600;
        sessionStorage.setItem("Ts30",ts30);
    }
} 

function negativeGo30()
{
     tp30=parseInt(document.getElementById("quan-30").value);
    if(tp30==0){
        alert("Zero value not allowed");
    }
    else{
     document.getElementById("quan-30").value=tp30-1;
      ts30=tp30*600-600;
     sessionStorage.setItem("Ts30",ts30);
    }
} 

function addGo31()
{
     tp31=parseInt(document.getElementById("quan-31").value);
    if(tp31==5){
        alert("Allowed only 5 Quantity for Each Product");
    }
    else{
        document.getElementById("quan-31").value=tp31+1;
        ts31=1000+tp31*1000;
        sessionStorage.setItem("Ts31",ts31);
    }
} 

function negativeGo31()
{
     tp31=parseInt(document.getElementById("quan-31").value);
    if(tp31==0){
        alert("Zero value not allowed");
    }
    else{
     document.getElementById("quan-31").value=tp31-1;
      ts31=tp31*1000-1000;
     sessionStorage.setItem("Ts31",ts31);
    }
} 

function addGo32()
{
     tp32=parseInt(document.getElementById("quan-32").value);
    if(tp32==5){
        alert("Allowed only 5 Quantity for Each Product");
    }
    else{
        document.getElementById("quan-32").value=tp32+1;
        ts32=1200+tp32*1200;
        sessionStorage.setItem("Ts32",ts32);
    }
} 

 
function negativeGo32()
{
     tp32=parseInt(document.getElementById("quan-32").value);
    if(tp32==0){
        alert("Zero value not allowed");
    }
    else{
     document.getElementById("quan-32").value=tp32-1;
      ts32=tp32*1200-1200;
     sessionStorage.setItem("Ts32",ts32);
    }
} 

function addGo33()
{
     tp33=parseInt(document.getElementById("quan-33").value);
    if(tp33==5){
        alert("Allowed only 5 Quantity for Each Product");
    }
    else{
        document.getElementById("quan-33").value=tp33+1;
        ts33=1400+tp33*1400;
        sessionStorage.setItem("Ts33",ts33);
    }
} 
 
function negativeGo33()
{
     tp33=parseInt(document.getElementById("quan-33").value);
    if(tp33==0){
        alert("Zero value not allowed");
    }
    else{
     document.getElementById("quan-33").value=tp33-1;
      ts33=tp33*1400-1400;
     sessionStorage.setItem("Ts33",ts33);
    }
} 

function addGo34()
{
     tp34=parseInt(document.getElementById("quan-34").value);
    if(tp34==5){
        alert("Allowed only 5 Quantity for Each Product");
    }
    else{
        document.getElementById("quan-34").value=tp34+1;
        ts34=1400+tp34*1400;
        sessionStorage.setItem("Ts34",ts34);
    }
} 

function negativeGo34()
{
     tp34=parseInt(document.getElementById("quan-34").value);
    if(tp34==0){
        alert("Zero value not allowed");
    }
    else{
     document.getElementById("quan-34").value=tp34-1;
      ts34=tp34*1400-1400;
     sessionStorage.setItem("Ts34",ts34);
    }
} 

function addGo35()
{
     tp35=parseInt(document.getElementById("quan-35").value);
    if(tp35==5){
        alert("Allowed only 5 Quantity for Each Product");
    }
    else{
        document.getElementById("quan-35").value=tp35+1;
        ts35=1600+tp35*1600;
        sessionStorage.setItem("Ts35",ts35);
    }
} 

function negativeGo35()
{
     tp35=parseInt(document.getElementById("quan-35").value);
    if(tp35==0){
        alert("Zero value not allowed");
    }
    else{
     document.getElementById("quan-35").value=tp35-1;
      ts35=tp35*1600-1600;
     sessionStorage.setItem("Ts35",ts35);
    }
} 

function addGo36()
{
     tp36=parseInt(document.getElementById("quan-36").value);
    if(tp36==5){
        alert("Allowed only 5 Quantity for Each Product");
    }
    else{
        document.getElementById("quan-36").value=tp36+1;
        ts36=2100+tp36*2100;
        sessionStorage.setItem("Ts36",ts36);
    }
} 

function negativeGo36()
{
     tp36=parseInt(document.getElementById("quan-36").value);
    if(tp36==0){
        alert("Zero value not allowed");
    }
    else{
     document.getElementById("quan-36").value=tp36-1;
      ts36=tp36*2100-2100;
     sessionStorage.setItem("Ts36",ts36);
    }
}

 
function addGo37()
{
     tp37=parseInt(document.getElementById("quan-37").value);
    if(tp37==5){
        alert("Allowed only 5 Quantity for Each Product");
    }
    else{
        document.getElementById("quan-37").value=tp37+1;
        ts37=2000+tp37*2000;
        sessionStorage.setItem("Ts37",ts37);
    }
} 

function negativeGo37()
{
     tp37=parseInt(document.getElementById("quan-37").value);
    if(tp37==0){
        alert("Zero value not allowed");
    }
    else{
     document.getElementById("quan-37").value=tp37-1;
      ts37=tp37*2000-2000;
     sessionStorage.setItem("Ts37",ts37);
    }
}

function addGo38()
{
     tp38=parseInt(document.getElementById("quan-38").value);
    if(tp38==5){
        alert("Allowed only 5 Quantity for Each Product");
    }
    else{
        document.getElementById("quan-38").value=tp38+1;
        ts38=1200+tp38*1200;
        sessionStorage.setItem("Ts38",ts38);
    }
} 

function negativeGo38()
{
     tp38=parseInt(document.getElementById("quan-38").value);
    if(tp38==0){
        alert("Zero value not allowed");
    }
    else{
     document.getElementById("quan-38").value=tp38-1;
      ts38=tp38*1200-1200;
     sessionStorage.setItem("Ts38",ts38);
    }
} 

function addGo39()
{
     tp39=parseInt(document.getElementById("quan-39").value);
    if(tp39==5){
        alert("Allowed only 5 Quantity for Each Product");
    }
    else{
        document.getElementById("quan-39").value=tp39+1;
        ts39=1600+tp39*1600;
        sessionStorage.setItem("Ts39",ts39);
    }
} 

 
function negativeGo39()
{
     tp39=parseInt(document.getElementById("quan-39").value);
    if(tp39==0){
        alert("Zero value not allowed");
    }
    else{
     document.getElementById("quan-39").value=tp39-1;
      ts39=tp39*1600-1600;
     sessionStorage.setItem("Ts39",ts39);
    }
} 

function addGo40()
{
     tp40=parseInt(document.getElementById("quan-40").value);
    if(tp40==5){
        alert("Allowed only 5 Quantity for Each Product");
    }
    else{
        document.getElementById("quan-40").value=tp40+1;
        ts40=1800+tp40*1800;
        sessionStorage.setItem("Ts40",ts40);
    }
} 

function negativeGo40()
{
     tp40=parseInt(document.getElementById("quan-40").value);
    if(tp40==0){
        alert("Zero value not allowed");
    }
    else{
     document.getElementById("quan-40").value=tp40-1;
      ts40=tp40*1800-1800;
     sessionStorage.setItem("Ts40",ts40);
    }
}


function addGo41()
{
     tp41=parseInt(document.getElementById("quan-41").value);
    if(tp41==5){
        alert("Allowed only 5 Quantity for Each Product");
    }
    else{
        document.getElementById("quan-41").value=tp41+1;
        ts41=800+tp41*800;
        sessionStorage.setItem("Ts41",ts41);
    }
} 

function negativeGo41()
{
     tp41=parseInt(document.getElementById("quan-41").value);
    if(tp41==0){
        alert("Zero value not allowed");
    }
    else{
     document.getElementById("quan-41").value=tp41-1;
      ts41=tp41*800-800;
     sessionStorage.setItem("Ts41",ts41);
    }
}


function addGo42()
{
     tp42=parseInt(document.getElementById("quan-42").value);
    if(tp42==5){
        alert("Allowed only 5 Quantity for Each Product");
    }
    else{
        document.getElementById("quan-42").value=tp42+1;
        ts42=600+tp42*600;
        sessionStorage.setItem("Ts42",ts42);
    }
} 


function negativeGo42()
{
     tp42=parseInt(document.getElementById("quan-42").value);
    if(tp42==0){
        alert("Zero value not allowed");
    }
    else{
     document.getElementById("quan-42").value=tp42-1;
      ts42=tp42*600-600;
     sessionStorage.setItem("Ts42",ts42);
    }
}

function addGo43()
{
     tp43=parseInt(document.getElementById("quan-43").value);
    if(tp43==5){
        alert("Allowed only 5 Quantity for Each Product");
    }
    else{
        document.getElementById("quan-43").value=tp43+1;
        ts43=1000+tp43*1000;
        sessionStorage.setItem("Ts43",ts43);
    }
} 

 
function negativeGo43()
{
     tp43=parseInt(document.getElementById("quan-43").value);
    if(tp43==0){
        alert("Zero value not allowed");
    }
    else{
     document.getElementById("quan-43").value=tp43-1;
      ts43=tp43*1000-1000;
     sessionStorage.setItem("Ts43",ts43);
    }
}

function addGo44()
{
     tp44=parseInt(document.getElementById("quan-44").value);
    if(tp44==5){
        alert("Allowed only 5 Quantity for Each Product");
    }
    else{
        document.getElementById("quan-44").value=tp44+1;
        ts44=900+tp44*900;
        sessionStorage.setItem("Ts44",ts44);
    }
} 

function negativeGo44()
{
     tp44=parseInt(document.getElementById("quan-44").value);
    if(tp44==0){
        alert("Zero value not allowed");
    }
    else{
     document.getElementById("quan-44").value=tp44-1;
      ts44=tp44*900-900;
     sessionStorage.setItem("Ts44",ts44);
    }
}

function addGo45()
{
     tp45=parseInt(document.getElementById("quan-45").value);
    if(tp45==5){
        alert("Allowed only 5 Quantity for Each Product");
    }
    else{
        document.getElementById("quan-45").value=tp45+1;
        ts45=1400+tp45*1400;
        sessionStorage.setItem("Ts45",ts45);
    }
} 

function negativeGo45()
{
     tp45=parseInt(document.getElementById("quan-45").value);
    if(tp45==0){
        alert("Zero value not allowed");
    }
    else{
     document.getElementById("quan-45").value=tp45-1;
      ts45=tp45*1400-1400;
     sessionStorage.setItem("Ts45",ts45);
    }
}

function addGo46()
{
     tp46=parseInt(document.getElementById("quan-46").value);
    if(tp46==5){
        alert("Allowed only 5 Quantity for Each Product");
    }
    else{
        document.getElementById("quan-46").value=tp46+1;
        ts46=1500+tp46*1500;
        sessionStorage.setItem("Ts46",ts46);
    }
} 

function negativeGo46()
{
     tp46=parseInt(document.getElementById("quan-46").value);
    if(tp46==0){
        alert("Zero value not allowed");
    }
    else{
     document.getElementById("quan-46").value=tp46-1;
      ts46=tp46*1500-1500;
     sessionStorage.setItem("Ts46",ts46);
    }
}

function addGo47()
{
     tp47=parseInt(document.getElementById("quan-47").value);
    if(tp47==5){
        alert("Allowed only 5 Quantity for Each Product");
    }
    else{
        document.getElementById("quan-47").value=tp47+1;
        ts47=1300+tp47*1300;
        sessionStorage.setItem("Ts47",ts47);
    }
} 

function negativeGo47()
{
     tp47=parseInt(document.getElementById("quan-47").value);
    if(tp47==0){
        alert("Zero value not allowed");
    }
    else{
     document.getElementById("quan-47").value=tp47-1;
      ts47=tp47*1300-1300;
     sessionStorage.setItem("Ts47",ts47);
    }
}

function addGo48()
{
     tp48=parseInt(document.getElementById("quan-48").value);
    if(tp48==5){
        alert("Allowed only 5 Quantity for Each Product");
    }
    else{
        document.getElementById("quan-48").value=tp48+1;
        ts48=1600+tp48*1600;
        sessionStorage.setItem("Ts48",ts48);
    }
} 

function negativeGo48()
{
     tp48=parseInt(document.getElementById("quan-48").value);
    if(tp48==0){
        alert("Zero value not allowed");
    }
    else{
     document.getElementById("quan-48").value=tp48-1;
      ts48=tp48*1600-1600;
     sessionStorage.setItem("Ts48",ts48);
    }
}

function addGo49()
{
     tp49=parseInt(document.getElementById("quan-49").value);
    if(tp49==5){
        alert("Allowed only 5 Quantity for Each Product");
    }
    else{
        document.getElementById("quan-49").value=tp49+1;
        ts49=1600+tp49*1600;
        sessionStorage.setItem("Ts49",ts49);
    }
} 

function negativeGo49()
{
     tp49=parseInt(document.getElementById("quan-49").value);
    if(tp49==0){
        alert("Zero value not allowed");
    }
    else{
     document.getElementById("quan-49").value=tp49-1;
      ts49=tp49*1600-1600;
     sessionStorage.setItem("Ts49",ts49);
    }
}

function addGo50()
{
     tp50=parseInt(document.getElementById("quan-50").value);
    if(tp50==5){
        alert("Allowed only 5 Quantity for Each Product");
    }
    else{
        document.getElementById("quan-50").value=tp50+1;
        ts50=1700+tp50*1700;
        sessionStorage.setItem("Ts50",ts50);
    }
} 

function negativeGo50()
{
     tp50=parseInt(document.getElementById("quan-50").value);
    if(tp50==0){
        alert("Zero value not allowed");
    }
    else{
     document.getElementById("quan-50").value=tp50-1;
      ts50=tp50*1700-1700;
     sessionStorage.setItem("Ts50",ts50);
    }
}

function addGo51()
{
     tp51=parseInt(document.getElementById("quan-51").value);
    if(tp51==5){
        alert("Allowed only 5 Quantity for Each Product");
    }
    else{
        document.getElementById("quan-51").value=tp51+1;
        ts51=1800+tp51*1800;
        sessionStorage.setItem("Ts51",ts51);
    }
} 

function negativeGo51()
{
     tp51=parseInt(document.getElementById("quan-51").value);
    if(tp51==0){
        alert("Zero value not allowed");
    }
    else{
     document.getElementById("quan-51").value=tp51-1;
      ts51=tp51*1800-1800;
     sessionStorage.setItem("Ts51",ts51);
    }
}

function addGo52()
{
     tp52=parseInt(document.getElementById("quan-52").value);
    if(tp52==5){
        alert("Allowed only 5 Quantity for Each Product");
    }
    else{
        document.getElementById("quan-52").value=tp52+1;
        ts52=2000+tp52*2000;
        sessionStorage.setItem("Ts52",ts52);
    }
} 

function negativeGo52()
{
     tp52=parseInt(document.getElementById("quan-52").value);
    if(tp52==0){
        alert("Zero value not allowed");
    }
    else{
     document.getElementById("quan-52").value=tp52-1;
      ts52=tp52*2000-2000;
     sessionStorage.setItem("Ts52",ts52);
    }
}












































$(function(){
  
    if(sessionStorage.getItem('r') === 'show'){
        $('#r').show();
    }

    if(sessionStorage.getItem('a') === 'show'){
        $('#a').show();
    }

    if(sessionStorage.getItem('b') === 'show'){
        $('#b').show();
    }

    if(sessionStorage.getItem('c') === 'show'){
        $('#c').show();
    }

    if(sessionStorage.getItem('d') === 'show'){
        $('#d').show();
    }

    if(sessionStorage.getItem('e') === 'show'){
        $('#e').show();
    }

    if(sessionStorage.getItem('f') === 'show'){
        $('#f').show();
    }

    if(sessionStorage.getItem('g') === 'show'){
        $('#g').show();
    }

    if(sessionStorage.getItem('h') === 'show'){
        $('#h').show();
    }

    if(sessionStorage.getItem('i') === 'show'){
        $('#i').show();
    }

    if(sessionStorage.getItem('j') === 'show'){
        $('#j').show();
    }

    if(sessionStorage.getItem('k') === 'show'){
        $('#k').show();
    }

    if(sessionStorage.getItem('l') === 'show'){
        $('#l').show();
    }

    if(sessionStorage.getItem('m') === 'show'){
        $('#m').show();
    }

    if(sessionStorage.getItem('n') === 'show'){
        $('#n').show();
    }

    if(sessionStorage.getItem('o') === 'show'){
        $('#o').show();
    }

    if(sessionStorage.getItem('p') === 'show'){
        $('#p').show();
    }

    if(sessionStorage.getItem('q') === 'show'){
        $('#q').show();
    }

    if(sessionStorage.getItem('s') === 'show'){
        $('#s').show();
    }

    if(sessionStorage.getItem('t') === 'show'){
        $('#t').show();
    }

    if(sessionStorage.getItem('u') === 'show'){
        $('#u').show();
    }

    if(sessionStorage.getItem('v') === 'show'){
        $('#v').show();
    }

    if(sessionStorage.getItem('w') === 'show'){
        $('#w').show();
    }

    if(sessionStorage.getItem('x') === 'show'){
        $('#x').show();
    }

    if(sessionStorage.getItem('y') === 'show'){
        $('#y').show();
    }

    if(sessionStorage.getItem('z') === 'show'){
        $('#z').show();
    }

    if(sessionStorage.getItem('a-1') === 'show'){
        $('#a-1').show();
    }

    if(sessionStorage.getItem('b-1') === 'show'){
        $('#b-1').show();
    }

    if(sessionStorage.getItem('c-1') === 'show'){
        $('#c-1').show();
    }

    if(sessionStorage.getItem('d-1') === 'show'){
        $('#d-1').show();
    }

    if(sessionStorage.getItem('e-1') === 'show'){
        $('#e-1').show();
    }

    if(sessionStorage.getItem('f-1') === 'show'){
        $('#f-1').show();
    }

    if(sessionStorage.getItem('g-1') === 'show'){
        $('#g-1').show();
    }

    if(sessionStorage.getItem('h-1') === 'show'){
        $('#h-1').show();
    }
   
    if(sessionStorage.getItem('i-1') === 'show'){
        $('#i-1').show();
    }

    if(sessionStorage.getItem('j-1') === 'show'){
        $('#j-1').show();
    }

    if(sessionStorage.getItem('k-1') === 'show'){
        $('#k-1').show();
    } 

    if(sessionStorage.getItem('l-1') === 'show'){
        $('#l-1').show();
    }

    if(sessionStorage.getItem('m-1') === 'show'){
        $('#m-1').show();
    }

    if(sessionStorage.getItem('n-1') === 'show'){
        $('#n-1').show();
    }

    if(sessionStorage.getItem('o-1') === 'show'){
        $('#o-1').show();
    }

    if(sessionStorage.getItem('p-1') === 'show'){
        $('#p-1').show();
    }

    if(sessionStorage.getItem('q-1') === 'show'){
        $('#q-1').show();
    }

    if(sessionStorage.getItem('r-1') === 'show'){
        $('#r-1').show();
    }

    if(sessionStorage.getItem('s-1') === 'show'){
        $('#s-1').show();
    }

    if(sessionStorage.getItem('t-1') === 'show'){
        $('#t-1').show();
    }

    if(sessionStorage.getItem('u-1') === 'show'){
        $('#u-1').show();
    }

    if(sessionStorage.getItem('v-1') === 'show'){
        $('#v-1').show();
    }

    if(sessionStorage.getItem('w-1') === 'show'){
        $('#w-1').show();
    }

    if(sessionStorage.getItem('x-1') === 'show'){
        $('#x-1').show();
    }

    if(sessionStorage.getItem('y-1') === 'show'){
        $('#y-1').show();
    }

    if(sessionStorage.getItem('z-1') === 'show'){
        $('#z-1').show();
    }

    if(sessionStorage.getItem('a-2') === 'show'){
        $('#a-2').show();
    }

    if(sessionStorage.getItem('b-2') === 'show'){
        $('#b-2').show();
    }

});