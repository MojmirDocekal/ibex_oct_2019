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

[["first-item1-at-most", 1], aj, {s: {html: "/debug: first-item1-at-most/<p>Kontext: Aleš čte na obalu potravin následující větu: 'Toto balení může obsahovat nanejvýš 100 gramů cukru' a komentuje to.</p><p>Alešův komentář: 'Takže v tom jídle se občas může objevit i 110 gramů cukru.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

  [["first-item1-no-more", 1], aj, {s: {html: "/debug: first-item1-no-more/<p>Kontext: Aleš čte na obalu potravin následující větu: 'Toto balení může obsahovat ne víc než 100 gramů cukru' a komentuje to.</p><p>Alešův komentář: 'Takže v tom jídle se občas může objevit i 110 gramů cukru.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

  [["first-item1-fewer", 1], aj, {s: {html: "/debug: first-item1-fewer/<p>Kontext: Aleš čte na obalu potravin následující větu: 'Toto balení může obsahovat méně než 100 gramů cukru' a komentuje to.</p><p>Alešův komentář: 'Takže v tom jídle se občas může objevit i 110 gramů cukru.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

[["first-item2-at-most", 2], aj, {s: {html: "/debug: first-item2-at-most/<p>Kontext: Aleš čte na stojanu u benzínové pumpy následující větu: 'Litr benzínu Ropák může obsahovat nanejvýš 0.5 gramu olova' a komentuje to.</p><p>Alešův komentář: 'Takže v Ropákovi se občas může objevit i 0.6 gramu olova na litr.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

    [["first-item2-no-more", 2], aj, {s: {html: "/debug: first-item2-no-more/<p>Kontext: Aleš čte na stojanu u benzínové pumpy následující větu: 'Litr benzínu Ropák může obsahovat ne víc než 0.5 gramu olova' a komentuje to.</p><p>Alešův komentář: 'Takže v Ropákovi se občas může objevit i 0.6 gramu olova na litr.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

    [["first-item2-fewer", 2], aj, {s: {html: "/debug: first-item2-fewer/<p>Kontext: Aleš čte na stojanu u benzínové pumpy následující větu: 'Litr benzínu Ropák může obsahovat méně než 0.5 gramu olova' a komentuje to.</p><p>Alešův komentář: 'Takže v Ropákovi se občas může objevit i 0.6 gramu olova na litr.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

[["first-item3-at-most", 3], aj, {s: {html: "/debug: first-item3-at-most/<p>Kontext: Aleš čte místní vyhlášku upravující provoz mopedů na rychlostní silnici, vidí v ní tuto větu: 'Řidič mopedu má dovoleno jet nanejvýš 70 km/h' a komentuje to.</p><p>Alešův komentář: 'Takže na téhle rychlostní silnici občas můžu potkat moped jedoucí 80 km/h.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

    [["first-item1-no-more", 3],aj, {s: {html: "/debug: first-item3-no-more/<p>Kontext: Aleš čte místní vyhlášku upravující provoz mopedů na rychlostní silnici, vidí v ní tuto větu: 'Řidič mopedu má dovoleno jet ne víc než 70 km/h' a komentuje to.</p><p>Alešův komentář: 'Takže na téhle rychlostní silnici občas můžu potkat moped jedoucí 80 km/h.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

    [["first-item1-fewer", 3], aj, {s: {html: "/debug: first-item3-fewer/<p>Kontext: Aleš čte místní vyhlášku upravující provoz mopedů na rychlostní silnici, vidí v ní tuto větu: 'Řidič mopedu má dovoleno jet méně než 70 km/h' a komentuje to.</p><p>Alešův komentář: 'Takže na téhle rychlostní silnici občas můžu potkat moped jedoucí 80 km/h.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

[["first-item4-at-most", 4], aj, {s: {html: "/debug: first-item4-at-most/<p>Kontext: Aleš si čte pravidla práce revizorů v městské hromadné dopravě, kde stojí následující věta: 'Revizor má dovoleno zkontrolovat nanejvýš 50 cestujících denně', a komentuje to.</p><p>Alešův komentář: 'Takže pilný revizor může zkontrolovat i 60 nebo víc cestujících denně.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

    [["first-item4-no-more", 4], aj, {s: {html: "/debug: first-item4-no-more/<p>Kontext: Aleš si čte pravidla práce revizorů v městské hromadné dopravě, kde stojí následující věta: 'Revizor má dovoleno zkontrolovat ne víc než 50 cestujících denně', a komentuje to.</p><p>Alešův komentář: 'Takže pilný revizor může zkontrolovat i 60 nebo víc cestujících denně.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

    [["first-item4-fewer", 4], aj, {s: {html: "/debug: first-item4-fewer/<p>Kontext: Aleš si čte pravidla práce revizorů v městské hromadné dopravě, kde stojí následující věta: 'Revizor má dovoleno zkontrolovat méně než 50 cestujících denně', a komentuje to.</p><p>Alešův komentář: 'Takže pilný revizor může zkontrolovat i 60 nebo víc cestujících denně.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

[["first-item5-at-most", 5], aj, {s: {html: "/debug: first-item5-at-most/<p>Kontext: Aleš si čte studijní řád Miskatonické univerzity, kde vidí následující větu: 'Bakalářská práce může mít nanejvýš 50 tisíc znaků', a komentuje to.</p><p>Alešův komentář: 'Takže některé bakalářské práce na Miskatonické univerzitě mohou mít i 60 tisíc znaků.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

    [["first-item5-no-more", 5], aj, {s: {html: "/debug: first-item5-no-more/<p>Kontext: Aleš si čte studijní řád Miskatonické univerzity, kde vidí následující větu: 'Bakalářská práce může mít ne víc než 50 tisíc znaků', a komentuje to.</p><p>Alešův komentář: 'Takže některé bakalářské práce na Miskatonické univerzitě mohou mít i 60 tisíc znaků.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

    [["first-item5-fewer", 5],  aj, {s: {html: "/debug: first-item5-fewer/<p>Kontext: Aleš si čte studijní řád Miskatonické univerzity, kde vidí následující větu: 'Bakalářská práce může mít méně než 50 tisíc znaků', a komentuje to.</p><p>Alešův komentář: 'Takže některé bakalářské práce na Miskatonické univerzitě mohou mít i 60 tisíc znaků.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

[["first-item6-at-most", 6], aj, {s: {html: "/debug: first-item6-at-most/<p>Kontext: Aleš listuje v předpisech upravujících pracovní dobu pomocného personálu v mrakodrapu EB, kde vidí následující větu: 'Uklízečka v EB má dovoleno za den uklidit nanejvýš 10 kanceláří', a komentuje to.</p><p>Alešův komentář: 'Takže některé uklízečky v EB mohou za den uklidit i 12 kanceláří.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

    [["first-item6-no-more", 6], aj, {s: {html: "/debug: first-item6-no-more/<p>Kontext: Aleš listuje v předpisech upravujících pracovní dobu pomocného personálu v mrakodrapu EB, kde vidí následující větu: 'Uklízečka v EB má dovoleno za den uklidit ne víc než 10 kanceláří', a komentuje to.</p><p>Alešův komentář: 'Takže některé uklízečky v EB mohou za den uklidit i 12 kanceláří.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

    [["first-item6-fewer", 6], aj, {s: {html: "/debug: first-item6-fewer/<p>Kontext: Aleš listuje v předpisech upravujících pracovní dobu pomocného personálu v mrakodrapu EB, kde vidí následující větu: 'Uklízečka v EB má dovoleno za den uklidit méně než 10 kanceláří', a komentuje to.</p><p>Alešův komentář: 'Takže některé uklízečky v EB mohou za den uklidit i 12 kanceláří.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

[["first-item7-at-most", 7], aj, {s: {html: "/debug: first-item7-at-most/<p>Kontext: Aleš si čte v novinách předpověď počasí na zítra a vidí tam následující větu: 'Zítra může napršet nanejvýš 10 mm srážek', a komentuje to.</p><p>Alešův komentář: 'Takže zítra možná naprší i 20 mm.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

    [["first-item7-no-more", 7], aj, {s: {html: "/debug: first-item7-no-more/<p>Kontext: Aleš si čte v novinách předpověď počasí na zítra a vidí tam následující větu: 'Zítra může napršet ne víc než 10 mm srážek', a komentuje to.</p><p>Alešův komentář: 'Takže zítra možná naprší i 20 mm.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

    [["first-item7-fewer", 7],  aj, {s: {html: "/debug: first-item7-fewer/<p>Kontext: Aleš si čte v novinách předpověď počasí na zítra a vidí tam následující větu: 'Zítra může napršet méně než 10 mm srážek', a komentuje to.</p><p>Alešův komentář: 'Takže zítra možná naprší i 20 mm.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

[["first-item8-at-most", 8], aj, {s: {html: "/debug: first-item8-at-most/<p>Kontext: Aleš si čte instrukce týkající se jubilejního dálkového pochodu z města Er a vidí tam následující větu: 'Účastníci jubilejního dálkového pochodu mohou ujít nanejvýš 40 km', a komentuje to.</p><p>Alešův komentář: 'Takže někteří účastníci toho pochodu ujdou i 50 km.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

    [["first-item8-no-more", 8], aj, {s: {html: "/debug: first-item8-no-more/<p>Kontext: Aleš si čte instrukce týkající se jubilejního dálkového pochodu z města Er a vidí tam následující větu: 'Účastníci jubilejního dálkového pochodu mohou ujít ne víc než 40 km', a komentuje to.</p><p>Alešův komentář: 'Takže někteří účastníci toho pochodu ujdou i 50 km.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

    [["first-item8-fewer", 8], aj, {s: {html: "/debug: first-item8-fewer/<p>Kontext: Aleš si čte instrukce týkající se jubilejního dálkového pochodu z města Er a vidí tam následující větu: 'Účastníci jubilejního dálkového pochodu mohou ujít méně než 40 km', a komentuje to.</p><p>Alešův komentář: 'Takže někteří účastníci toho pochodu ujdou i 50 km.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

[["first-item9-at-most", 9], aj, {s: {html: "/debug: first-item9-at-most/<p>Kontext: Aleš si čte interní zprávu upravující personální politiku ve firmě EB, kde stojí následující věta: 'Firma EB může tento rok propustit nanejvýš 100 zaměstnanců', a komentuje to.</p><p>Alešův komentář: 'Takže tento rok v EB propustí možná i 110 zaměstnanců.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

    [["first-item9-no-more", 9], aj, {s: {html: "/debug: first-item9-no-more/<p>Kontext: Aleš si čte interní zprávu upravující personální politiku ve firmě EB, kde stojí následující věta: 'Firma EB může tento rok propustit ne víc než 100 zaměstnanců', a komentuje to.</p><p>Alešův komentář: 'Takže tento rok v EB propustí možná i 110 zaměstnanců.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

    [["first-item9-fewer", 9], aj, {s: {html: "/debug: first-item9-fewer/<p>Kontext: Aleš si čte interní zprávu upravující personální politiku ve firmě EB, kde stojí následující věta: 'Firma EB může tento rok propustit méně než 100 zaměstnanců', a komentuje to.</p><p>Alešův komentář: 'Takže tento rok v EB propustí možná i 110 zaměstnanců.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

["filler1-good", aj, {s: {html: "/debug: filler1-good/<p>Kontext: Aleš si právě přečetl v novinách následující větu: 'Tři současní čeští básníci napsali (každý) právě jednu knihu básní.' a komentuje to .</p><p>Alešův komentář: 'Takže ti tři básníci napsali tři knihy básní, co básník -- to knížka.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

["filler2-bad", aj, {s: {html: "/debug: filler2-bad/<p>Kontext: Aleš čte o na webových stránkách města Er následující větu: 'Radnice města Er je vysoká 40 metrů a každá budova v městě Er je nižší než výška radnice' a komentuje to. </p><p>Alešův komentář: 'Takže některé budovy v městě Er mají 45 metrů a víc.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

["filler3-good", aj, {s: {html: "/debug: filler3-good/<p>Kontext: Aleš si čte v novinách o korunovaci královny a vidí tam následující větu: 'Každý státník nepřiletěl letadlem.' a komentuje to .</p><p>Alešův komentář: 'Takže někteří státníci dorazili na korunovaci jinak než letadlem.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

["filler4-bad", aj, {s: {html: "/debug: filler4-bad/<p>Kontext: Aleš si právě v univerzitních novinách přečetl větu: 'Každý student na filozofické fakultě přečetl méně než 20 knih.' a komentuje to. </p><p>Alešův komentář: 'Takže každý student na filozofické fakultě přečetl 21 nebo víc knih.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

["filler5-good", aj, {s: {html: "/debug: filler5-good/<p>Kontext: Aleš si právě přečetl v novinách následující větu: 'Průměrný obyvatel města Er vlastní 2.5 kočky.' a komentuje to .</p><p>Alešův komentář: 'Takže někteří obyvatelé v Er mají dvě kočky nebo míň, ale někteří mají tři kočky nebo víc.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

["filler6-bad", aj, {s: {html: "/debug: filler6-bad/<p>Kontext: Aleš si právě přečetl v novinách, že 'průměrný obyvatel města Er si vloni nepřečetl ani jednu knížku' a komentuje to. </p><p>Alešův komentář: 'Takže průměrný obyvatel města Er si vloni přečetl dvě a více knížek''</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

["filler7-good", aj, {s: {html: "/debug: filler7-good/<p>Kontext: Aleš si čte statistickou zprávu o zemi Er a v ní je následující věta: 'Každý obyvatel země Er vlastní nanejvýš 3 kola.' a komentuje to .</p><p>Alešův komentář: 'Takže žádný obyvatel země Er nemá víc než 4 kola.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

["filler8-bad", aj, {s: {html: "/debug: filler9-bad/<p>Kontext: Aleš si čte na Wikipedii o vzdálené sluneční soustavě Sol a vidí větu: 'V Sol má každá planeta nanejvýš 3 měsíce' a komentuje to. </p><p>Alešův komentář: 'Takže některé planety v Sol mají 4 nebo více měsíců.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],

["filler9-good", aj, {s: {html: "/debug: filler9-good/<p>Kontext: Aleš si čte technickou zprávu o výtahu K, ve které je následující věta: 'Výtah K uveze i 5 pasažérů' a komentuje to .</p><p>Alešův komentář: 'Takže výtah K rozhodně uveze 4 pasažéry.'</p>"}, leftComment: "(Alešův komentář je naprosto v rozporu s větou)", rightComment: "(Alešův komentář je naprosto v souladu s větou)"}],


];
