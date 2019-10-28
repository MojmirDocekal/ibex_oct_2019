var shuffleSequence = seq("intro", sepWith("sep",  seq("practice")), "practiceover", sepWith("sep", rshuffle(startsWith("first-item"), startsWith("firstfiller"))), sepWith("sep", rshuffle(startsWith("followup"), startsWith("filler"))));

var continueMessage = ["Klikni zde"];

var aj = "AcceptabilityJudgment";

var q = "Question";

var completionMessage = "[Zadané odpovědi jsou odeslány na server. Děkujeme za spolupráci! Nyní  můžete okno zavřít.]";

var ms = "Message";

var defaults = [
    "Separator", { transfer: 800,
                   normalMessage: "Počkejte prosím na další položku v experimentu.",
                   errorMessage: "Špatně. Počkejte prosím na další položku v experimentu."
         },
    "AcceptabilityJudgment", { as: ["1", "2", "3", "4", "5"],
                               presentAsScale: true,
                               leftComment: "(Aleš pochopil vše naprosto správně)", rightComment: "(Aleš pochopil vše naprosto špatně)" },
    "Message", { hideProgressBar: true, transfer: "click" }
];

 var progressBarText = "";

var items = [ ["sep", "Separator", { }],

          ["intro", "Form", {continueMessage: "Pro vstup do experimentu, klikněte zde", html: { include: "example_intro.html" }}],


["practice", aj, {s: {html: "<p>Kontext: Aleš ... </p> <p> Aleš: 'Plavecký závod nakonec vyhrál dokonce Mirek.'</p><p><i>Věta je v daném kontextu nepřijatelná: výraz '</i>dokonce<i>' se neslučuje s vysokou kontextovou pravděpodobností Mirkova vítězství; vyberte jako odpověď jednu z možností v levém konci škály (nejspíš 1).</i></p>"}, leftComment: "(v daném kontextu je věta naprosto nepřijatelná)", rightComment: "(v daném kontextu je věta zcela přijatelná)"}],


          ["practiceover", "Message", {continueMessage: "Klikněte zde pro pokračování experimentu", html: ["div", ["p", "Zde končí přípravná část experimentu. Klikněte níže pro vstup do experimentu."]]}],

[["first-item1-at-most", 1], aj, {s: {html: "<p>Kontext: Aleš čte nápis na balení potravin: 'Toto jídlo může obsahovat nanejvýš 100 gramů cukru' a komentuje to následující větou.</p><p>Aleš: 'Takže v tom jídle se občas může objevit i 110 gramů cukru.'</p>"}, leftComment: "(Aleš pochopil vše naprosto správně)", rightComment: "(Aleš pochopil vše naprosto špatně)"}],

  [["first-item1-no-more", 1], aj, {s: {html: "<p>Kontext: Aleš čte nápis na balení potravin: 'Toto jídlo může obsahovat ne víc než 100 gramů cukru' a komentuje to následující větou.</p><p>Aleš: 'Takže v tom jídle se občas může objevit i 110 gramů cukru.'</p>"}, leftComment: "(Aleš pochopil vše naprosto správně)", rightComment: "(Aleš pochopil vše naprosto špatně)"}],

  [["first-item1-fewer", 1], aj, {s: {html: "<p>Kontext: Aleš čte nápis na balení potravin: 'Toto jídlo může obsahovat méně než 100 gramů cukru' a komentuje to následující větou.</p><p>Aleš: 'Takže v tom jídle se občas může objevit i 110 gramů cukru.'</p>"}, leftComment: "(Aleš pochopil vše naprosto správně)", rightComment: "(Aleš pochopil vše naprosto špatně)"}],


["filler1-good", aj, {s: {html: "<p>Kontext: Aleš si právě přečetl v novinách, že 'Tři současní čeští básníci napsali (každý) přesně jednu knihu básní.' a komentuje to následující větou.</p><p>Věta: 'Takže ti tři básníci napsali přesně tři knihy básní.'</p>"}, leftComment: "(Aleš pochopil vše naprosto správně)", rightComment: "(Aleš pochopil vše naprosto špatně)"}],
["filler2-bad", aj, {s: {html: "<p>Kontext: Školník si vybral všechny dny dovolené v létě, protože nebylo ve škole tolik práce jako přes školní rok.</p><p>Věta: Školník byl mrzutý, že mu na podzim zbyl ani jeden den dovolené.</p>"}, leftComment: "(v daném kontextu je věta naprosto nepřijatelná)", rightComment: "(v daném kontextu je věta zcela přijatelná)"}],

];
