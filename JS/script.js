const activePrice = (e) => {
   child = document.querySelector(".priceUp").children;
   const arr = [...child]

    arr.forEach(ch => {
        ch.classList.remove("activePrice");
    });

    const selected = e.target;

    selected.classList.add("activePrice");

    if(selected.classList.contains("left")) {
        document.querySelector("#moneyPrice").innerHTML = "50€";
        document.querySelector("#time").innerHTML = "1 mese";
        document.querySelector("#linkProPrice").setAttribute("href", "https://sso.teachable.com/secure/418132/checkout/2727323/percorso-sviluppo-web-app");
    }
    else if(selected.classList.contains("center")) {
        document.querySelector("#moneyPrice").innerHTML = "120€";
        document.querySelector("#time").innerHTML = "3 mesi";
        document.querySelector("#linkProPrice").setAttribute("href", "https://sso.teachable.com/secure/418132/checkout/2929386/percorso-sviluppo-web-app");
    }
    else if(selected.classList.contains("right")) {
        document.querySelector("#moneyPrice").innerHTML = "200€";
        document.querySelector("#time").innerHTML = "6 mesi";
        document.querySelector("#linkProPrice").setAttribute("href", "https://sso.teachable.com/secure/418132/checkout/2929402/percorso-sviluppo-web-app");
    }
}

const activePriceMobile = (e) => {
    child = document.querySelector(".priceUpMobile").children;
    const arr = [...child]
 
     arr.forEach(ch => {
         ch.classList.remove("activePrice");
     });
 
     const selected = e.target;
 
     selected.classList.add("activePrice");
 
     if(selected.classList.contains("left")) {
         document.querySelector("#moneyPriceMobile").innerHTML = "50€";
         document.querySelector("#timeMobile").innerHTML = "1 mese";
         document.querySelector("#linkProPrice").setAttribute("href", "https://sso.teachable.com/secure/418132/checkout/2727323/percorso-sviluppo-web-app");
     }
     else if(selected.classList.contains("center")) {
         document.querySelector("#moneyPriceMobile").innerHTML = "120€";
         document.querySelector("#timeMobile").innerHTML = "3 mesi";
         document.querySelector("#linkProPrice").setAttribute("href", "https://sso.teachable.com/secure/418132/checkout/2929386/percorso-sviluppo-web-app");
     }
     else if(selected.classList.contains("right")) {
         document.querySelector("#moneyPriceMobile").innerHTML = "200€";
         document.querySelector("#timeMobile").innerHTML = "6 mesi";
         document.querySelector("#linkProPrice").setAttribute("href", "https://sso.teachable.com/secure/418132/checkout/2929402/percorso-sviluppo-web-app");
     }
 }