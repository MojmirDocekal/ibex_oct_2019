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
                               leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)" },
    "Message", { hideProgressBar: true, transfer: "click" }
];

 var progressBarText = "";

var items = [ ["sep", "Separator", { }],

          ["intro", "Form", {continueMessage: "Pro vstup do experimentu, klikněte zde", html: { include: "example_intro.html" }}],


["practice", aj, {s: {html: "<p>Kontext: Aleš si právě přečetl v novinách následující větu: 'Ve městě Er nikdo nepřečetl víc než 20 knih.' a komentuje to. </p> <p> Alešův komentář: 'Takže někteří obyvatelé města Er přečetli i 25 knih.'</p><p>Alešův komentář ukazuje, že původní větu špatně pochopil; vyberte jako odpověď jednu z možností v levém konci škály (nejspíš 1).</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],


          ["practiceover", "Message", {continueMessage: "Klikněte zde pro pokračování experimentu", html: ["div", ["p", "Zde končí přípravná část experimentu. Klikněte níže pro vstup do experimentu."]]}],

[["first-item1-at-most", 1], aj, {s: {html: "<p>Kontext: Aleš čte na obalu potravin následující větu: 'Toto balení může obsahovat nanejvýš 100 gramů cukru' a komentuje to.</p><p>Alešův komentář: 'Takže v tom jídle se občas může objevit i 110 gramů cukru.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

  [["first-item1-no-more", 1], aj, {s: {html: "<p>Kontext: Aleš čte na obalu potravin následující větu: 'Toto balení může obsahovat ne víc než 100 gramů cukru' a komentuje to.</p><p>Alešův komentář: 'Takže v tom jídle se občas může objevit i 110 gramů cukru.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

  [["first-item1-fewer", 1], aj, {s: {html: "<p>Kontext: Aleš čte na obalu potravin následující větu: 'Toto balení může obsahovat méně než 100 gramů cukru' a komentuje to.</p><p>Alešův komentář: 'Takže v tom jídle se občas může objevit i 110 gramů cukru.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

[["first-item2-at-most", 2], aj, {s: {html: "<p>Kontext: Aleš čte na stojanu u benzínové pumpy následující větu: 'Litr benzínu Ropák může obsahovat nanejvýš 0.5 gramu olova' a komentuje to.</p><p>Alešův komentář: 'Takže v Ropákovi se občas může objevit i 0.6 gramu olova na litr.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

    [["first-item2-no-more", 2], aj, {s: {html: "<p>Kontext: Aleš čte na stojanu u benzínové pumpy následující větu: 'Litr benzínu Ropák může obsahovat ne víc než 0.5 gramu olova' a komentuje to.</p><p>Alešův komentář: 'Takže v Ropákovi se občas může objevit i 0.6 gramu olova na litr.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

    [["first-item2-fewer", 2], aj, {s: {html: "<p>Kontext: Aleš čte na stojanu u benzínové pumpy následující větu: 'Litr benzínu Ropák může obsahovat méně než 0.5 gramu olova' a komentuje to.</p><p>Alešův komentář: 'Takže v Ropákovi se občas může objevit i 0.6 gramu olova na litr.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

[["first-item3-at-most", 3], aj, {s: {html: "<p>Kontext: Aleš čte místní vyhlášku upravující provoz mopedů na rychlostní silnici, vidí v ní tuto větu: 'Řidič mopedu má dovoleno jet nanejvýš 70 km/h' a komentuje to.</p><p>Alešův komentář: 'Takže na téhle rychlostní silnici občas můžu potkat moped jedoucí 80 km/h.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

    [["first-item1-no-more", 3],aj, {s: {html: "<p>Kontext: Aleš čte místní vyhlášku upravující provoz mopedů na rychlostní silnici, vidí v ní tuto větu: 'Řidič mopedu má dovoleno jet ne víc než 70 km/h' a komentuje to.</p><p>Alešův komentář: 'Takže na téhle rychlostní silnici občas můžu potkat moped jedoucí 80 km/h.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

    [["first-item1-fewer", 3], aj, {s: {html: "<p>Kontext: Aleš čte místní vyhlášku upravující provoz mopedů na rychlostní silnici, vidí v ní tuto větu: 'Řidič mopedu má dovoleno jet méně než 70 km/h' a komentuje to.</p><p>Alešův komentář: 'Takže na téhle rychlostní silnici občas můžu potkat moped jedoucí 80 km/h.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

[["first-item4-at-most", 4], aj, {s: {html: "<p>Kontext: Aleš si čte pravidla práce revizorů v městské hromadné dopravě, kde stojí následující věta: 'Revizor má dovoleno zkontrolovat nanejvýš 50 cestujících denně', a komentuje to.</p><p>Alešův komentář: 'Takže pilný revizor může zkontrolovat i 60 nebo víc cestujících denně.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

    [["first-item4-no-more", 4], aj, {s: {html: "<p>Kontext: Aleš si čte pravidla práce revizorů v městské hromadné dopravě, kde stojí následující věta: 'Revizor má dovoleno zkontrolovat ne víc než 50 cestujících denně', a komentuje to.</p><p>Alešův komentář: 'Takže pilný revizor může zkontrolovat i 60 nebo víc cestujících denně.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

    [["first-item4-fewer", 4], aj, {s: {html: "<p>Kontext: Aleš si čte pravidla práce revizorů v městské hromadné dopravě, kde stojí následující věta: 'Revizor má dovoleno zkontrolovat méně než 50 cestujících denně', a komentuje to.</p><p>Alešův komentář: 'Takže pilný revizor může zkontrolovat i 60 nebo víc cestujících denně.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],


["filler1-good", aj, {s: {html: "<p>Kontext: Aleš si právě přečetl v novinách následující větu: 'Tři současní čeští básníci napsali (každý) právě jednu knihu básní.' a komentuje to .</p><p>Alešův komentář: 'Takže ti tři básníci napsali tři knihy básní, co básník -- to knížka.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],
["filler2-bad", aj, {s: {html: "<p>Kontext: Aleš čte o na webových stránkách města Er následující větu: 'Radnice města Er je vysoká 40 metrů a každá budova v městě Er je nižší než radnice' a komentuje to. </p><p>Alešův komentář: 'Takže některé budovy v městě Er mají 45 metrů a víc'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

];
