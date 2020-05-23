/*deklaracja obiektu typu pracownik o zadanych polach*/

function Pracownicy(Plec, Imie, Nazwisko, Wiek, Miasto)
{
    this.Plec = Plec;
    this.Imie = Imie;
    this.Nazwisko = Nazwisko;
    this.Wiek = Wiek;
    this.Miasto = Miasto;
 

}
/* Tworzenie tablicy obiektów typu Pracownik*/
var Tabela = new Array();
Tabela[0] = new Pracownicy('Kobieta', 'Tamara', 'Puki', '26', 'Poznan');
Tabela[1] = new Pracownicy('Mezczyzna','Ryszard', 'Nowak', '28', 'Warszawa',);
Tabela[2] = new Pracownicy('Kobieta', 'Janina', 'Kolaszkowa', '29', 'Gdynia', );
Tabela[3] = new Pracownicy('Mezczyzna', 'Szymon', 'Kowalczyk', '35', 'Poznan', );


function wyswietlTabele(Tab)
{

    var txt = '';
    for (var x =0; x <1; x++) {
        txt += '<tr>';
        txt += '<td>' + Tab[x].Plec + '</td>';
        txt += '<td>' + Tab[x].Imie + '</td>';
        txt += '<td>' + Tab[x].Nazwisko + '</td>';
        txt += '<td>' + Tab[x].Wiek + '</td>';
        txt += '<td>' + Tab[x].Miasto + '</td>';
        txt += '</tr>';
    }

    var trescTab = document.getElementById("rekordy1");

    trescTab.innerHTML = txt;
}

function wyswietlTabele1(Tab)
{

    
    var txt = '';

    for (var x = 1; x <2; x++) {
        txt += '<tr>';
        txt += '<td>' + Tab[x].Plec + '</td>';
        txt += '<td>' + Tab[x].Imie + '</td>';
        txt += '<td>' + Tab[x].Nazwisko + '</td>';
        txt += '<td>' + Tab[x].Wiek + '</td>';
        txt += '<td>' + Tab[x].Miasto + '</td>';
        txt += '</tr>';
    }

   
    var trescTab = document.getElementById("rekordy1");
   
    trescTab.innerHTML = txt;
}

function wyswietlTabele2(Tab)
{


    var txt = '';

    for (var x = 2; x < 3; x++) {
        txt += '<tr>';
        txt += '<td>' + Tab[x].Plec + '</td>';
        txt += '<td>' + Tab[x].Imie + '</td>';
        txt += '<td>' + Tab[x].Nazwisko + '</td>';
        txt += '<td>' + Tab[x].Wiek + '</td>';
        txt += '<td>' + Tab[x].Miasto + '</td>';
        txt += '</tr>';
    }


    var trescTab = document.getElementById("rekordy1");

    trescTab.innerHTML = txt;
}



function wyswietlTabele3(Tab) {


    var txt = '';

    for (var x = 3; x < 4; x++)
    {
        txt += '<tr>';
        txt += '<td>' + Tab[x].Plec + '</td>';
        txt += '<td>' + Tab[x].Imie + '</td>';
        txt += '<td>' + Tab[x].Nazwisko + '</td>';
        txt += '<td>' + Tab[x].Wiek + '</td>';
        txt += '<td>' + Tab[x].Miasto + '</td>';
        txt += '</tr>';
    }


    var trescTab = document.getElementById("rekordy1");

    trescTab.innerHTML = txt;
}






