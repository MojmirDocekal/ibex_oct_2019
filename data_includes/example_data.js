var shuffleSequence = seq("intro", sepWith("sep",  seq("practice")), "practiceover", sepWith("sep", rshuffle(startsWith("first-item"), startsWith("filler"))));

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


["practice", aj, {s: {html: "<p>Kontext: Aleš si právě přečetl v novinách, že 'Ve městě Er nikdo nepřečetl víc než 20 knih.' a komentuje to následující větou. </p> <p> Aleš: 'Takže někteří obyvatelé města Er přečetli i 25 knih.'</p><p>Alešův komentář ukazuje, že původní informaci špatně pochopil; vyberte jako odpověď jednu z možností v levém konci škály (nejspíš 1).</p>"}, leftComment: "(Aleš pochopil vše naprosto špatně)", rightComment: "(Aleš pochopil vše naprosto správně)"}],


          ["practiceover", "Message", {continueMessage: "Klikněte zde pro pokračování experimentu", html: ["div", ["p", "Zde končí přípravná část experimentu. Klikněte níže pro vstup do experimentu."]]}],

[["first-item1-at-most", 1], aj, {s: {html: "<p>Kontext: Aleš čte nápis na balení potravin: 'Toto jídlo může obsahovat nanejvýš 100 gramů cukru' a komentuje to následující větou.</p><p>Aleš: 'Takže v tom jídle se občas může objevit i 110 gramů cukru.'</p>"}, leftComment: "(Aleš pochopil vše naprosto špatně)", rightComment: "(Aleš pochopil vše naprosto správně)"}],

  [["first-item1-no-more", 1], aj, {s: {html: "<p>Kontext: Aleš čte nápis na balení potravin: 'Toto jídlo může obsahovat ne víc než 100 gramů cukru' a komentuje to následující větou.</p><p>Aleš: 'Takže v tom jídle se občas může objevit i 110 gramů cukru.'</p>"}, leftComment: "(Aleš pochopil vše naprosto špatně)", rightComment: "(Aleš pochopil vše naprosto správně)"}],

  [["first-item1-fewer", 1], aj, {s: {html: "<p>Kontext: Aleš čte nápis na balení potravin: 'Toto jídlo může obsahovat méně než 100 gramů cukru' a komentuje to následující větou.</p><p>Aleš: 'Takže v tom jídle se občas může objevit i 110 gramů cukru.'</p>"}, leftComment: "(Aleš pochopil vše naprosto špatně)", rightComment: "(Aleš pochopil vše naprosto správně)"}],

  [["first-item2-at-most", 2], aj, {s: {html: "<p>Kontext: Aleš čte nápis na stojanu u benzínové pumpy: 'Litr benzínu Ropák může obsahovat nanejvýš 0.5 gramu olova' a komentuje to následující větou.</p><p>Aleš: 'Takže v Ropákovi se občas může objevit i 0.6 gramu olova na litr.'</p>"}, leftComment: "(Aleš pochopil vše naprosto špatně)", rightComment: "(Aleš pochopil vše naprosto správně)"}],

    [["first-item2-no-more", 2], aj, {s: {html: "<p>Kontext: Aleš čte nápis na stojanu u benzínové pumpy: 'Litr benzínu Ropák může obsahovat ne víc než 0.5 gramu olova' a komentuje to následující větou.</p><p>Aleš: 'Takže v Ropákovi se občas může objevit i 0.6 gramu olova na litr.'</p>"}, leftComment: "(Aleš pochopil vše naprosto špatně)", rightComment: "(Aleš pochopil vše naprosto správně)"}],

    [["first-item2-fewer", 2], aj, {s: {html: "<p>Kontext: Aleš čte nápis na stojanu u benzínové pumpy: 'Litr benzínu Ropák může obsahovat méně než 0.5 gramu olova' a komentuje to následující větou.</p><p>Aleš: 'Takže v Ropákovi se občas může objevit i 0.6 gramu olova na litr.'</p>"}, leftComment: "(Aleš pochopil vše naprosto špatně)", rightComment: "(Aleš pochopil vše naprosto správně)"}],


["filler1-good", aj, {s: {html: "<p>Kontext: Aleš si právě přečetl v novinách, že 'Tři současní čeští básníci napsali (každý) přesně jednu knihu básní.' a komentuje to následující větou.</p><p>Aleš: 'Takže ti tři básníci napsali přesně tři knihy básní.'</p>"}, leftComment: "(Aleš pochopil vše naprosto špatně)", rightComment: "(Aleš pochopil vše naprosto správně)"}],
["filler2-bad", aj, {s: {html: "<p>Kontext: čte informaci o městě Er: 'Radnice města Er je vysoká 40 metrů a každá budova v městě Er je nižší než radnice' a komentuje to následující větou.</p><p>Aleš: 'Takže některé budovy v městě Er, včetně radnice, mají 45 metrů a víc'</p>"}, leftComment: "(Aleš pochopil vše naprosto špatně)", rightComment: "(Aleš pochopil vše naprosto správně)"}],

];
