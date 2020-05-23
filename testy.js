
function Auto(Marka, Model, Rok, Silnik, Cena, Dostepnosc) {
    this.Marka = Marka;
    this.Model = Model;
    this.Rok = Rok;
    this.Silnik = Silnik;
    this.Cena = Cena;
    this.Dostepnosc = Dostepnosc;

}


var Tabela = new Array();
Tabela[0] = new Auto('Volkswagen ', 'Sharan', 2003, 1.9, 10000, 'Dostepny');
Tabela[1] = new Auto('Mercedes ', 'CLS', 2019, 2.3, 80000, 'Niedostepny');
Tabela[2] = new Auto('BMW', ' 5', 2014, 2.1, 55000, 'Dostepny');
Tabela[3] = new Auto('Skoda ', 'Superb', 2015, 2.3, 36000, 'Dostepny');

function wyswietlTabele(Tab) {


    var txt = '';


    for (var x = 0; x < Tab.length; x++) {
        txt += '<tr>';
        txt += '<td>' + Tab[x].Marka + '</td>';
        txt += '<td>' + Tab[x].Model + '</td>';
        txt += '<td>' + Tab[x].Rok + '</td>';
        txt += '<td>' + Tab[x].Silnik + '</td>';
        txt += '<td>' + Tab[x].Cena + '</td>';
        txt += '<td>' + Tab[x].Dostepnosc + '</td>';
        txt += '</tr>';
    }
    var trescTab = document.getElementById("rekordy");

    trescTab.innerHTML = txt;
}

