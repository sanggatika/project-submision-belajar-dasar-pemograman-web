const contenArtikel = "android";

function resetArtikel()
{
    var a = document.getElementById("artikel_android");
    a.style.display = "none";
    var b = document.getElementById("artikel_ios");
    b.style.display = "none";
    var c = document.getElementById("artikel_frontend");
    c.style.display = "none";
}

function showArtikel(artikel)
{
    resetArtikel();

    if(artikel == 'android'){
        var x = document.getElementById("artikel_android");
    }

    if(artikel == 'ios'){
        var x = document.getElementById("artikel_ios");
    }

    if(artikel == 'frontend'){
        var x = document.getElementById("artikel_frontend");
    }
    
    x.style.display = "block";
}

