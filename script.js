var noms = ["Michel Varuk", "Jim Carrey", "Emma Watson", "Renaud", "Jacques", "Bernadette", "Léa", "Wina", "Jacquie",
    "Michel", "H.P Lovecraft", "Bill Gates", "Gotaga", "Phillipe Etchebest", "Julien Lepers", "Hugh Jackman", "Johnny Deep",
    "The Rock", "Billy Obam", "Cyrille Vin", "Eminem", "Paul Rudd", "Albert Einstein", "Vivaldi"];


var objets = ["ordinateur", "téléphone", "ordinateur", "dé à coudre", "clavier", "tasse", "marteau", "pièce", "manette", "clavier", "ordinateur", "vélo",
    "avion", "miche de pain", "fourchette", "tasse", "pièces jaunes", "lunettes de soleil", "décapsuleur", "ballon de foot", "téléphone portable", "montre"];

var degres = ["10°C", "30°C", "-50°C", "5°C" , "69°C", "18°C", "30°C", "40°C", "69°C", "70°C", "5°C", "28°C", "28°C", "24°C"
, "37°C", "25°C", "12°C", "25°C", "100°C", "22°C", "37,2°C", "100°F", "30°C", "-5°C"];

var lieux = ["Floyon", "Wignehies", "Barcelona", "Paris", "Tokyo", "Reykjavik", "Mons", "Le Touquet", "Trélon", "Fourmies", "Palais de l'Elysée",
    "Mairie de Paris", "Mac Do", "Buger King", "Chuttes du Niagara", "Hidepark", "Paris", "Montcuq", "Mac Do", "KFC", "Big Ben", "Mt Fuji",
    "Bondy", "Rio de Janeiro"];

var verbes = ["coder", "copier", "nager", "monter", "developper", "jouer", "voter", "arnaquer", "jouer", "manger", "accomplir", "communiquer", "coder"
, "coordonner", "avoir", "aimer", "être passionné", "soulever", "évoluer", "jouer", "manger", "s'envoyer", "enfourner"];




    var randNoms = noms[Math.floor(Math.random() * noms.length)];
    var randNoms2 = noms[Math.floor(Math.random() * noms.length)];
    var randObjets = objets[Math.floor(Math.random() * objets.length)];
    var randDegres = degres[Math.floor(Math.random() * degres.length)];
    var randLieux = lieux[Math.floor(Math.random() * lieux.length)];
    var randVerbes = verbes[Math.floor(Math.random() * verbes.length)];


document.getElementById("histoire").innerHTML = "Ce matin à "+ randLieux+ ", il faisait "+ randDegres + " quand "+ randNoms +" était en train de "+ randVerbes + " avec " + randNoms2 + " en utilisant son/sa "+ randObjets;