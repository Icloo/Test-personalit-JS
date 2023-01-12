let compteursupp = 0;
let compteurmage = 0;
let compteurbruiser = 0;
let compteuradc = 0;
let compteurassassin = 0;

let myForm = document.getElementById('myForm');

myForm.addEventListener('submit', function(e) {

    if(document.getElementById('reponse1').checked == true) {   
        compteursupp++;   
    }

    if(document.getElementById('reponse2').checked == true) {   
      compteurmage++;   
    }

    if(document.getElementById('reponse3').checked == true) {   
        compteurbruiser++;  
    }

    if(document.getElementById('reponse4').checked == true) {   
        compteuradc++;  
    }

    if(document.getElementById('reponse5').checked == true) {   
        compteurassassin++;  
    }

    if(document.getElementById('reponse2_1').checked == true) {   
        compteursupp++;   
    }

    if(document.getElementById('reponse2_2').checked == true) {   
      compteurmage++;   
    }

    if(document.getElementById('reponse2_3').checked == true) {   
        compteurbruiser++;  
    }

    if(document.getElementById('reponse2_4').checked == true) {   
        compteuradc++;  
    }

    if(document.getElementById('reponse2_5').checked == true) {   
        compteurassassin++;  
    }

    if(document.getElementById('reponse3_1').checked == true) {   
        compteursupp++;   
    }

    if(document.getElementById('reponse3_2').checked == true) {   
      compteurmage++;   
    }

    if(document.getElementById('reponse3_3').checked == true) {   
        compteurbruiser++;  
    }

    if(document.getElementById('reponse3_4').checked == true) {   
        compteuradc++;  
    }

    if(document.getElementById('reponse3_5').checked == true) {   
        compteurassassin++;  
    }


    if(document.getElementById('reponse4_1').checked == true) {   
        compteursupp++;   
    }

    if(document.getElementById('reponse4_2').checked == true) {   
      compteurmage++;   
    }

    if(document.getElementById('reponse4_3').checked == true) {   
        compteurbruiser++;  
    }

    if(document.getElementById('reponse4_4').checked == true) {   
        compteuradc++;  
    }

    if(document.getElementById('reponse4_5').checked == true) {   
        compteurassassin++;  
    }

    if(document.getElementById('reponse5_1').checked == true) {   
        compteursupp++;   
    }

    if(document.getElementById('reponse5_2').checked == true) {   
      compteurmage++;   
    }

    if(document.getElementById('reponse5_3').checked == true) {   
        compteurbruiser++;  
    }

    if(document.getElementById('reponse5_4').checked == true) {   
        compteuradc++;  
    }

    if(document.getElementById('reponse5_5').checked == true) {   
        compteurassassin++;  
    }

    if(document.getElementById('reponse6_1').checked == true) {   
        compteursupp++;   
    }

    if(document.getElementById('reponse6_2').checked == true) {   
      compteurmage++;   
    }

    if(document.getElementById('reponse6_3').checked == true) {   
        compteurbruiser++;  
    }

    if(document.getElementById('reponse6_4').checked == true) {   
        compteuradc++;  
    }

    if(document.getElementById('reponse6_5').checked == true) {   
        compteurassassin++;  
    }

    if(document.getElementById('reponse7_1').checked == true) {   
        compteursupp++;   
    }

    if(document.getElementById('reponse7_2').checked == true) {   
      compteurmage++;   
    }

    if(document.getElementById('reponse7_3').checked == true) {   
        compteurbruiser++;  
    }

    if(document.getElementById('reponse7_4').checked == true) {   
        compteuradc++;  
    }

    if(document.getElementById('reponse7_5').checked == true) {   
        compteurassassin++;  
    }


    if(compteursupp>compteurmage && compteursupp>compteurbruiser && compteursupp>compteuradc && compteursupp>compteurassassin) {
        let resultat = document.getElementById('resultat');
        let fort = document.getElementById('fort');
        let faible = document.getElementById('faible');
        let perso = document.getElementById('perso');
        resultat.innerHTML = "Vous êtes un Support";
        fort.innerHTML = "Votre point fort : Soin et/ou bouclier, résistance améliorée";
        faible.innerHTML = "Votre point faible : Nécéssite des alliés pour briller";
        perso.innerHTML = ' <br> <img src="../Starter kit/assets/image/leona.jpg"> Leona <br> <img src="../Starter kit/assets/image/nami.jpg"> Nami <br> <img src="../Starter kit/assets/image/soraka.jpg"> Soraka <br> <img src="../Starter kit/assets/image/thresh.jpg"> thresh';
        e.preventDefault();
    }

    if(compteurmage>compteursupp && compteurmage>compteurbruiser && compteurmage>compteuradc && compteurmage>compteurassassin) {
        let resultat = document.getElementById('resultat');
        let fort = document.getElementById('fort');
        let faible = document.getElementById('faible');
        let perso = document.getElementById('perso');
        resultat.innerHTML = "Vous êtes un Mage";
        fort.innerHTML = "Votre point fort : Polyvalence, bon compris entre dégât, entrave et mobilité";
        faible.innerHTML = "Votre point faible : Fragile";
        perso.innerHTML = ' <br> <img src="../Starter kit/assets/image/lissandra.jpg"> Lissandra <br> <img src="../Starter kit/assets/image/viktor.jpg"> Viktor <br> <img src="../Starter kit/assets/image/ziggs.jpg"> Ziggs <br> <img src="../Starter kit/assets/image/tf.jpg"> Twisted fate';
    
        e.preventDefault();
    }

    if(compteurbruiser>compteursupp && compteurbruiser>compteurmage && compteurbruiser>compteuradc && compteurbruiser>compteurassassin) {
        let resultat = document.getElementById('resultat');
        let fort = document.getElementById('fort');
        let faible = document.getElementById('faible');
        let perso = document.getElementById('perso');
        resultat.innerHTML = "Vous êtes un combattant";
        fort.innerHTML = "Votre point fort : Très résistant, des entraves et de dégâts";
        faible.innerHTML = "Votre point faible : manque de portée"
        perso.innerHTML = ' <br> <img src="../Starter kit/assets/image/darius.jpg"> Darius <br> <img src="../Starter kit/assets/image/hecarim.jpg"> Hecarim <br> <img src="../Starter kit/assets/image/udyr.jpg"> Udyr <br> <img src="../Starter kit/assets/image/zac.jpg"> Zac';
        e.preventDefault();
    }

    if(compteuradc>compteursupp && compteuradc>compteurmage && compteuradc>compteurbruiser && compteuradc>compteurassassin) {
        let resultat = document.getElementById('resultat');
        let fort = document.getElementById('fort');
        let faible = document.getElementById('faible');
        let perso = document.getElementById('perso');
        resultat.innerHTML = "Vous êtes un Ad Carry";
        fort.innerHTML = "Votre point fort : gros dégât constant à longue portée";
        faible.innerHTML = "Votre point faible : pas de mobilité, fragile";
        perso.innerHTML = ' <br> <img src="../Starter kit/assets/image/jinx.jpg"> Jinx <br> <img src="../Starter kit/assets/image/aphelios.jpg"> aphelios <br> <img src="../Starter kit/assets/image/kog.jpg"> Kog"maw <br> <img src="../Starter kit/assets/image/twitch.jpg"> Twitch';
        e.preventDefault();
    }

    if(compteurassassin>compteursupp && compteurassassin>compteurmage && compteurassassin>compteurbruiser && compteurassassin>compteuradc) {
        let resultat = document.getElementById('resultat');
        let fort = document.getElementById('fort');
        let faible = document.getElementById('faible');
        let perso = document.getElementById('perso');
        resultat.innerHTML = "Vous êtes un Assasin";
        fort.innerHTML =  "Votre point fort : Grande mobilité, dégâts sur court terme et grande discretion";
        faible.innerHTML = "Votre point faible : fragile, faible contre personnage résistant";
        perso.innerHTML = ' <br> <img src="../Starter kit/assets/image/talon.jpg"> Talon <br> <img src="../Starter kit/assets/image/pyke.jpg"> Pyke <br> <img src="../Starter kit/assets/image/rengar.jpg"> Rengar <br> <img src="../Starter kit/assets/image/kha.jpg"> Kha"zix';
        e.preventDefault();
    }

});