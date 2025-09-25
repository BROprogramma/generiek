1.1 Doel en doelgroep

In de basisregistratie ondergrond (BRO) wordt een aantal typen gegevens
geregistreerd, de *registratieobjecten*.

Een catalogus is de gegevensdefinitie van een registratieobject en
beschrijft welke gegevens van dit object in de BRO zijn opgeslagen. Het
document is bedoeld voor alle gebruikers van de BRO en maakt duidelijk
welke gegevens er precies in de BRO zijn opgenomen. Aan aanleverende
partijen geeft het inzicht in welke gegevens in de BRO moeten komen en
aan welke eisen die moeten voldoen, en aan afnemende partijen welke
gegevens zij in de BRO mogen verwachten. Het document is voor een breed
publiek bedoeld en de informatie moet naast precies ook begrijpelijk
zijn.

1.2 Totstandkoming

Een catalogus is het resultaat van een proces van standaardisatie dat
geruime tijd in beslag kan nemen. De standaardisatie is een open proces
waarin de belanghebbende partijen actief betrokken worden. Het
eindresultaat wordt vastgesteld als bijlage van een ministeriële
regeling.

1.3 Beheer

De eerste wettelijk vastgestelde catalogus (zoals bekendgemaakt in de
[Regeling Bro](https://wetten.overheid.nl/BWBR0040482)) krijgt het
versienummer 1.0. Verwacht mag worden dat er na enige tijd behoefte
ontstaat aan gegevens die nog niet in de catalogus zijn opgenomen.

De beheerder hanteert drie typen versies voor een wijziging van een
catalogus. Bijvoorbeeld: versie 2.1.0 (=X.Y.Z):

- X-wijzigingenDeze wijzigingen veranderen de structuur van de
  catalogus, en/of de namen van bestaande attributen of codelijsten￼
  en/of de domeinwaarden. Hierdoor zijn X-wijzigingen niet *backwards
  compatible*.\
  Frequentie: maximaal 1 keer per 2 jaar.

- Y-wijzigingen\
  Deze wijzigingen voegen gegevens toe aan de catalogus, die niet de
  structuur veranderen. Dit kunnen nieuwe entiteiten of attributen zijn,
  maar ook een uitbreiding van een bestaande codelijst. Deze wijzigingen
  zijn *backwards compatible,* d.w.z. een doorontwikkeling op de
  bestaande registratie, maar hebben ook gevolgen voor aangesloten
  systemen, zeker van afnemers.\
  Frequentie: maximaal 1 keer per jaar.

- Z-wijzigingen\
  Dit zijn verbeteringen van technische of redactionele aard. Deze
  wijzigingen zijn *backwards compatible*.\
  Frequentie: maximaal 2 keer per jaar.

In een jaar waarin een X-wijziging plaats vindt zullen er op hetzelfde
registratieobject geen Y-wijzigingen plaatsvinden. Als er een X- of een
Y-wijziging in een jaar aan de orde is, wordt er geen Z-wijziging
gepland in een andere wijziging van de Regeling Bro. Wijzigingen aan
algemene teksten in de catalogi vallen altijd onder Z-wijzigingen en
zullen maximaal 2 keer per jaar plaatsvinden.

1.4 Leeswijzer

[Hoofdstuk
1](https://docs.geostandaarden.nl/bro/def-im-bhr-g-20230607/#inleiding) geldt
voor alle catalogi en geeft het doel en de doelgroep van een catalogus.

[Hoofdstuk
2](https://docs.geostandaarden.nl/bro/def-im-bhr-g-20230607/#algemene-kenmerken-en-begrippen) geldt
voor alle catalogi en behandelt enkele algemene aspecten van de BRO en
begrippen van algemene aard.

[Hoofdstuk
3](https://docs.geostandaarden.nl/bro/def-im-bhr-g-20230607/#booronderzoek) geldt
voor alle catalogi en plaatst het registratieobject in de
gegevenssystematiek van de BRO en vertelt wat de benadering is geweest
bij het opstellen van de gegevensdefinitie.

[Hoofdstuk
4](https://docs.geostandaarden.nl/bro/def-im-bhr-g-20230607/#booronderzoek_geologie) geldt
voor alle catalogi en is de toelichting op de gegevensdefinitie van het
registratieobject.

[Hoofdstuk
5](https://docs.geostandaarden.nl/bro/def-im-bhr-g-20230607/#opbouw_gegevensdefinitie) geldt
voor alle catalogi en vertelt hoe de gegevensdefinitie is opgebouwd en
welke aspecten van de gegevens daarin worden beschreven.

[Hoofdstuk
6](https://docs.geostandaarden.nl/bro/def-im-bhr-g-20230607/#gegevensdefinitie-0) 
geeft de inhoud weer van het registratieobject, van de delen waaruit het
is opgebouwd, de entiteiten, en van de eigenschappen van die entiteiten,
de attributen.

[Hoofdstuk
7](https://docs.geostandaarden.nl/bro/def-im-bhr-g-20230607/#uitbreidbare-waardelijsten) 
geeft de uitbreidbare waardelijsten weer, dat wil zeggen een lijst van
waarden die een attribuut uit hoofdstuk 6 mag hebben.

2. Algemene kenmerken en begrippen

2.1 Opzet van de landelijke voorziening

De landelijke voorziening van de BRO is een systeem dat een schakel
vormt in een informatieketen. Aan het begin van de keten staan
bronhouders die opdracht geven tot de productie van gegevens, of zelf
gegevens produceren ([artikel 9 van de Wet
Bro](https://wetten.overheid.nl/jci1.3:c:BWBR0037095&hoofdstuk=2&artikel=9)).
De geproduceerde gegevens levert de bronhouder of, namens hem,
een *dataleverancier*  aan de beheerder van de landelijke voorziening
van de BRO, de *registerbeheerder*. De bronhouder is verantwoordelijk
voor de levering en de kwaliteit van gegevens. De registerbeheerder
registreert de aangeleverde gegevens en levert deze voor (her)gebruik
door aan allerlei afnemers.

De opzet van de BRO moet begrepen worden vanuit de verantwoordelijkheden
die in de keten zijn belegd. De aangeleverde gegevens vallen onder de
verantwoordelijkheid van de bronhouder en de registratiebeheerder mag
die gegevens niet veranderen. De registratiebeheerder moet echter wel
gegevens toevoegen om de BRO te kunnen beheren en hij kan gegevens
toevoegen om de afnemers goed van dienst te kunnen zijn.

Bij wet is geregeld dat de BRO zo wordt opgezet dat er onderscheid
bestaat tussen de gegevens die aan de registratiebeheerder zijn
aangeleverd en de gegevens die de registratiebeheerder aan de afnemers
verstrekt. De BRO valt uiteen in twee grote deelsystemen, het
*register* *brondocumenten ondergrond* en de *registratie
ondergrond* ([Figuur 1](https://docs.geostandaarden.nl/bro/def-im-bhr-g-20230607/#image001)).

Een geheel van gegevens dat een bronhouder aanlevert, wordt
een *brondocument* genoemd. De brondocumenten worden in het *register
brondocumenten ondergrond* opgeslagen. De gegevens uit de brondocumenten
worden samen met de gegevens die de registratiebeheerder toevoegt in
de *registratie ondergrond* vastgelegd. De *registratie ondergrond* is
het deelsysteem dat gebruikt wordt voor uitgifte.

Figuur 1 De twee grote deelsystemen van de landelijke voorziening van de
BRO.

Met deze opzet verkrijgt de BRO de nodige flexibiliteit. Zo kan een
object in de registratie ondergrond gegevens bevatten die uit meer dan
één brondocument afkomstig zijn en bij uitgifte kunnen gegevens van
verschillende objecten met elkaar gecombineerd worden. Ook is het
mogelijk met het brondocument gegevens op te slaan die alleen voor de
bronhouder en de dataleverancier van belang zijn.

De catalogus dekt alle gegevens die opgenomen zijn in de registratie
ondergrond. Verreweg de meeste gegevens komen uit de brondocumenten die
de dataleverancier levert en een paar gegevens komen voort uit de
overdracht van een brondocument aan de registerbeheerder. Aan de
aangeleverde gegevens worden enkele gegevens door de registerbeheerder
toegevoegd. Als de registerbeheerder een gegeven heeft toegevoegd wordt
dat in de beschrijving expliciet vermeld.

Alle gegevens in de registratie ondergrond worden uitgegeven, maar niet
alle afnemers krijgen alle gegevens geleverd. De gegevens die niet aan
alle afnemers worden uitgeleverd zijn de gegevens die alleen nodig zijn
in de communicatie tussen de registratiebeheerder enerzijds en de
dataleveranciers en bronhouders anderzijds, of niet openbaar zijn op
grond van een wettelijk voorschrift. Zo zijn persoonsgegevens over
bronhouder, dataleverancier en onderzoeker/uitvoerder alleen
toegankelijk voor de betreffende bronhouder en dataleverancier op grond
van de [Algemene verordening
gegevensbescherming](https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=CELEX:32016R0679&from=NL)
(AVG).

2.2 Registratieobject

Het *registratieobject* is dé eenheid in de data-architectuur van de
BRO. Voor de registratiebeheerder is het de elementaire bouwsteen van de
BRO.

Een *registratieobject* verwijst naar een eenheid van gegevens, een
groep entiteiten, die onder de verantwoordelijkheid van één bronhouder
valt en die met een bepaald doel is of wordt gemaakt. Het is in directe
of indirecte zin gedefinieerd in de ruimte en dat wil zeggen dat een
registratieobject een plaats op het aardoppervlak heeft of dat het
gekoppeld is aan een ander type registratieobject met een plaats op het
aardoppervlak.\
De entiteiten zijn niet de entiteiten uit [Bijlage I bij de
NIS2-richtlijn](https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=CELEX:02022L2555-20221227).

Een *registratieobject* is niet alleen in de ruimte maar ook in de tijd
gedefinieerd. Het leven van een registratieobject begint op het moment
dat de gegevens zijn geregistreerd en dat is zo kort mogelijk nadat de
gegevens zijn geproduceerd. De levensduur van een registratieobject, en
de veranderlijkheid van de gegevens verschilt van object tot object. Een
grondwatermonitoringput (GMW) kan tientallen jaren gebruikt worden voor
het meten van grondwaterstanden en in de periode kunnen er nieuwe
gegevens ontstaan. Dat betekent dat de gegevens van de put in de BRO
gedurende zijn hele levensduur bijgewerkt moeten kunnen worden. Aan de
andere kant van het spectrum staan de objecten waarvan alle gegevens in
een keer worden vastgelegd. Een geotechnisch sondeeronderzoek (CPT) is
daar een voorbeeld van. Sondeeronderzoek is eenmalig onderzoek en het
resultaat ervan kan al na een of enkele dagen aan de bronhouder worden
overhandigd.

2.3 Registratiedomein

Registratieobjecten worden in de BRO gegroepeerd in domeinen. [Hoofdstuk
2 van het Besluit
Bro](https://wetten.overheid.nl/jci1.3:c:BWBR0040205&hoofdstuk=2)
onderscheidt zes domeinen:

- bodem- en grondonderzoek

- milieukwaliteit

- grondwatermonitoring

- grondwatergebruik

- mijnbouwwet

- modellen.

De domeinen zijn vanuit het oogpunt van beheer van belang voor de
ordening van de inhoud van de BRO. Daarnaast zijn zij nuttig in de
communicatie met de partijen die bij de realisatie van de BRO betrokken
zijn.\
NB: deze registratiedomeinen zijn niet de domeinen als bedoeld in
Hoofdstuk 5 van de catalogus. De laatste beschrijven de mogelijke
waarden van een attribuut.

2.4 Kwaliteitsregime

In de BRO worden niet alleen gegevens geregistreerd die dateren van na
de datum waarop de wet van kracht is geworden. Ook oudere gegevens
worden in de BRO opgenomen. Gegevens uit de eerder bestaande systemen
Registratie Data en Informatie Nederlandse Ondergrond (DINO) en
Bodemkundig Informatie Systeem (BIS) worden zo veel mogelijk naar de BRO
overgezet. Verder verplicht [artikel 40 van de
wet](https://zoek.officielebekendmakingen.nl/stb-2025-35.html)
bronhouders digitale, gestructureerde gegevens binnen vijf jaar na
inwerkingtreding - van de wetswijziging per 1-7-2025 of van een
registratieobject - ter registratie aan te bieden.

Deze historische gegevens kunnen niet altijd voldoen aan de strikte
regels die de BRO stelt. Zo kan het voorkomen dat voor gegevens die
volgens de strikte regels van de BRO verplicht zijn, geen waarde bekend
is. Om de verwerking van de twee categorieën gegevens naast elkaar
mogelijk te maken, worden twee kwaliteitsregimes gehanteerd. Voor de
levering van gegevens aan de BRO volgens de strikte regels geldt het
IMBRO-regime. Bij de levering van historische gegevens wordt
geaccepteerd dat een aantal verplichte attributen geen waarde heeft.
Voor deze gegevens wordt het IMBRO/A-regime gehanteerd; dat kent minder
strikte regels. Als historische gegevens wel aan alle strikte
voorwaarden voldoen, worden de gegevens echter onder het IMBRO-regime
geleverd.

Artikel 41 van de Wet Bro geeft de bronhouder van een gegeven over een
registratieobject dat valt onder de categorie verkenningen, gedurende
drie jaar na inwerkingtreding van dit registratieobject, een zekere mate
van vrijheid. Als een gegeven voortkomt uit een schriftelijke opdracht
van voor inwerkingtreding van dit registratieobject, kan het praktisch
blijken het IMBRO/A-regime te hanteren voor gegevens die pas na deze
datum zijn geproduceerd.

In schema:


| **Gegeven** | **Omschrijving**  | **Kwaliteitsregime** | **Verplicht voor** | **Verplicht vanaf** | **Transitieperiode** |
| --- | ---|---|---|---|---|
| Nieuwe gegevens | gegevens die dateren van na de datum waarop de ministeriële regeling of een registratieobject van kracht is geworden. | IMBRO | alle bronhouders[^1] (art. 9 Wet Bro) | - Vanaf inwerkingtreding ministeriële regeling of een registratieobject<br> -	Uitzondering o.b.v. art. 41: verkenning die voortkomt uit een schriftelijke opdracht van voor inwerkingtreding van dit registratieobject, is uitgezonderd van deze verplichting -> en valt daarmee automatisch onder art. 40| - Geen (binnen 20 werkdagen)<br> - Tot 3 jaar na inwerkingtreding registratieobject  |
| Historische gegevens | gegevens die dateren van **voor** de datum  waarop de ministeriële regeling of een registratieobject van kracht is geworden. | IMBRO/A<br>  (IMBRO als gegevens voldoen aan IMBRO)| - DINO en BIS (art. 39).<br>   - Andere actuele digitale, gestructureerde gegevens bij bronhouders van vóór 1-7-2025 ([art.  40](https://zoek.officielebekendmakingen.nl/dossier/kst-36544-2.html)).| - Een bij koninklijk besluit te bepalen tijdstip (art. 39).<br>  - [Vanaf  1-7-2025](https://zoek.officielebekendmakingen.nl/stb-2025-97.html) of vanaf inwerkingtreding van een registratieobject dat later in werking treedt. | - ?<br> - Binnen vijf jaar |


De periode waarin de bronhouders die vrijheid hebben wordt
de *transitieperiode* genoemd. Na afloop van de transitieperiode kan
alleen onder het strikte IMBRO-regime worden aangeleverd.

Voor een nadere toelichting van het kwaliteitsregime met een
beschrijving van verschillende scenario's voor het corrigeren van het
kwaliteitsregime van aangeleverde gegevens, zie [Handreiking aanleveren
BRO-gegevens](https://www.bro-productomgeving.nl/bpo/latest/handreiking-aanleveren-bro-gegevens)
op de BRO Productomgeving.

2.5 Formele en materiële geschiedenis

De BRO maakt deel uit van een stelsel van basisregistraties. Binnen het
stelsel maakt men onderscheid tussen de materiële geschiedenis en de
formele geschiedenis van een object.

Het begrip *materiële geschiedenis* wordt gebruikt om de veranderingen
van eigenschappen van een object in de werkelijkheid aan te duiden (dus
niet attributen in een systeem). De materiële geschiedenis van een
object wordt, voor zover relevant, in de BRO vastgelegd. Niet alle
registratieobjecten hebben een materiële geschiedenis, alleen de
objecten met een levensduur, zoals de grondwatermonitoringput.

Het begrip *formele geschiedenis* wordt gebruikt voor de veranderingen
van attributen van een object in de registratie zelf. De meeste van die
veranderingen gaan terug op een verandering van eigenschappen in de
werkelijkheid, en de formele geschiedenis geeft aan wanneer de
veranderingen in de BRO geregistreerd zijn. De formele geschiedenis kent
ook gebeurtenissen die niet het gevolg zijn van een verandering in de
werkelijke eigenschappen van een object. Die gebeurtenissen hebben
betrekking op correcties. Het kan gebeuren dat een bronhouder erachter
komt dat er een onjuiste waarde was geregistreerd en dan zorgt hij
ervoor dat die verbeterd wordt. De registratie van de verbetering is een
formele gebeurtenis.

Alle registratieobjecten hebben een formele geschiedenis en die wordt in
de BRO globaal vastgelegd in de *registratiegeschiedenis* van het
object. Globaal wil zeggen dat de BRO alleen een overzicht van de
formele geschiedenis geeft. Voor de details moet het register
brondocumenten ondergrond worden geraadpleegd.

Bij een correctie wordt het betreffende gegeven in de BRO overschreven
en is de oude waarde van het gegeven niet meer direct beschikbaar voor
de afnemers. Zou een afnemer toch willen weten wat de eerdere foute
waarde was, dan moet hij het register brondocumenten ondergrond
raadplegen.

2.6 Coördinaten en referentiestelsels

De objecten van de BRO zijn gedefinieerd in de ruimte en dat wil zeggen
dat een object zelf een plaats op het aardoppervlak, een locatie, heeft,
of dat het gekoppeld is aan een ander type registratieobject met een
locatie. Afhankelijk van het type registratieobject, wordt de locatie
van het object geregistreerd als een punt, een lijn of een vlak.

De locatie is de horizontale positie van een object. Voor bepaalde
objecten is het voldoende dat alleen die horizontale positie wordt
vastgelegd, maar voor veel objecten is ook de verticale positie van
belang.

Posities worden vastgelegd in coördinaten en die zijn gedefinieerd in
een bepaald referentiestelsel.

Er zijn verschillende typen referentiestelsels. Zo spreekt men van
horizontale referentiestelsels (2D), verticale referentiestelsels (1D),
gecombineerde referentiestelsels (2D, 1D) en werkelijke 3D
referentiestelsels. In Nederland worden de horizontale en de verticale
component van een positie in een afzonderlijk stelsel uitgedrukt. Het is
vandaag de dag mogelijk met gps een positie in een 3D-referentiestelsel
vast te leggen, maar de wens over te stappen op het gebruik van 3D is
nog door geen van de partijen die betrokken zijn bij de BRO naar voren
gebracht.

**2.6.1 Referentiestelsels voor de horizontale positie**

In Nederland zijn traditioneel verschillende referentiestelsels voor de
horizontale positie in gebruik. In 2009, bij de eerste voorbereidingen
voor de totstandkoming van de BRO, is al vastgesteld dat de
verscheidenheid aan referentiestelsels de BRO voor problemen stelt omdat
de registratie dan niet gemakkelijk op een eenduidige manier bevraagd
kan worden. In de BRO worden namelijk zowel gegevens met een locatie op
land als gegevens met een locatie op zee geregistreerd. In de toenmalige
praktijk werden op land en op zee verschillende stelsels gebruikt. Op
land werd RD gebruikt en op zee waren verschillende stelsels in gebruik,
waarvan WGS84 de belangrijkste was.

In 2009 was ook al bekend dat de Europese Richtlijn (nr. 2007/2/EG van
het Europees Parlement en de Raad van de Europese Unie van 14 maart 2007
tot oprichting van een infrastructuur voor ruimtelijke informatie in de
Gemeenschap zoals gewijzigd in 2019 en 2024, *PbEU* 2024 L 2829)
Inspire, de lidstaten vraagt de gegevens in Europa in één
referentiestelsel uit te gaan wisselen, te weten in ETRS89. Daarom is
het besluit genomen de BRO zo in te richten, dat de registratie bevraagd
gaat worden in ETRS89.

Het besluit wordt ondersteund door ontwikkelingen in Nederland. Sinds
2013 wordt er door de drie belangrijkste autoriteiten in Nederland op
het gebied van referentiestelsels, het Kadaster, de Dienst der
Hydrografie en Rijkswaterstaat, gewerkt aan de totstandkoming van nieuwe
afspraken. Die afspraken moeten in lijn zijn met Europese afspraken en
leiden tot heldere en eenduidige transformatieprocedures tussen
referentiestelsels. Concreet betekent dit dat in Nederland op termijn
het ETRS89-stelsel als standaard zal worden gehanteerd voor het
uitwisselen van geo-informatie.

Het besluit betekent niet dat de gegevens ook in ETRS89 aangeleverd
moeten worden. De BRO voorziet een periode van transitie waarin de
aanleverende partijen zelf bepalen wanneer zij overstappen op ETRS89.
Die periode zal naar verwachting jaren duren. Om de transitie te
ondersteunen hanteert de BRO de volgende spelregels:

- Gegevens mogen in een beperkt aantal referentiestelsels worden
  aangeleverd (RD, WGS84 en ETRS89).

  - Voor locaties op land wordt alleen RD of ETRS89 toegestaan.

> (WGS84 is niet geschikt voor nauwkeurige toepassingen, bij wijze van
> uitzondering wordt binnen het domein milieukwaliteit WGS84 op land
> toegestaan.)

- Voor locaties op zee wordt alleen WGS84 of ETRS89 toegestaan.

<!-- -->

- De aangeleverde coördinaten worden in de registratie opgeslagen.

- De aangeleverde coördinaten worden door de BRO getransformeerd naar
  het ETRS89 referentiestelsel.

- De getransformeerde coördinaten worden naast de aangeleverde
  coördinaten opgeslagen.

- Bij de getransformeerde coördinaten wordt ook een identificatie van de
  gebruikte transformatiemethode opgeslagen.

- Als de coördinaten in ETRS89 zijn aangeleverd, dan staat bij
  aangeleverde en getransformeerde positie dezelfde informatie. Voor de
  locatie worden de getransformeerde coördinaten en de aangeleverde
  coördinaten beide aan de afnemers verstrekt.

**2.6.2 Referentiestelsels voor de verticale positie**

In Nederland zijn voor verticale posities op land en zee verschillende
referentiestelsels in gebruik. Op land wordt NAP gebruikt. Op zee is het
in de voor de BRO relevante werkvelden gebruikelijk posities uit te
drukken t.o.v. het gemiddeld zeeniveau (MSL, Mean Sea Level), maar
posities t.o.v. LAT komen ook voor (Lowest Astronomical Tide). Dit
laatstgenoemde stelsel wordt in de richtlijn Inspire genoemd als het
stelsel van voorkeur voor het uitdrukken van verticale posities op zee.
De BRO staat daarom op zee het gebruik van LAT naast MSL toe.
Aangeleverde verticale posities worden door de BRO niet getransformeerd.

2.7 Gegevens op land en op zee

De BRO bevat gegevens over de ondergrond van Nederland en zijn zgn.
Exclusieve Economische Zone (EEZ). De EEZ is het gebied op de Noordzee
waar Nederland economische rechten heeft. Voor de referentiestelsels die
bij levering aan de BRO worden toegestaan, is het van belang te weten of
de locatie van een object op zee of op land ligt.

Als scheidingslijn tussen land en zee wordt in de BRO de
UNCLOS-basislijn gehanteerd. Het beheer van deze basislijn valt onder de
verantwoordelijkheid van de Dienst der Hydrografie van het ministerie
van Defensie. Deze dienst voert die taak uit op basis van het
Zeerechtverdrag van de Verenigde Naties uit 1982, dat in het Engels de
United Nations Convention on the Law of the Sea (UNCLOS) heet. De
basislijn is opgebouwd uit de nulmeterdieptelijn zoals weergegeven op de
zeekaarten en enkele rechte basislijnen die onder meer de monding van de
Westerschelde en de wateren tussen de Waddeneilanden afsluiten.

De grens tussen land en zee is veranderlijk. De Dienst der Hydrografie
stelt de grens opnieuw vast wanneer daartoe voldoende aanleiding is. De
BRO hanteert bij inname de meest recente versie van de UNCLOS-basislijn
en controleert daarmee of de juiste referentiestelsels gebruikt worden.

Tussen het moment waarop de locatie van een object wordt bepaald en het
moment waarop het gegeven in de BRO wordt vastgelegd verloopt enige
tijd. In die periode kan de positie van de UNCLOS-basislijn opnieuw zijn
vastgesteld, en dan ontstaat er een discrepantie die bij het leveren van
gegevens aan de BRO tot problemen kan leiden. Wanneer een dergelijk
probleem zich voordoet, wordt de dataleverancier gevraagd contact op te
nemen met de registerbeheerder om gezamenlijk tot een oplossing te
komen.

Een soortgelijk probleem doet zich voor met betrekking tot de begrenzing
van Nederland, met name van het Nederlands territoir. De grenzen van
Nederland worden ieder jaar op 1 januari vastgesteld door het Kadaster
en vastgelegd in de basisregistratie kadaster. De registerbeheerder
controleert bij inname of een object in het gebied ligt dat Nederland en
zijn Exclusieve Economische Zone omvat, en hanteert daarbij de actuele
grenzen. Ook bij problemen die te herleiden zijn tot een verandering in
de begrenzing van Nederland, wordt de dataleverancier gevraagd contact
op te nemen met de registerbeheerder om gezamenlijk tot een oplossing te
komen.

Binnen het domein Mijnbouwwet wordt de scheidingslijn tussen land en zee
niet bepaald door de UNCLOS-basislijn, maar door een over zee lopende
lijn die is vastgelegd in een bijlage bij de Mijnbouwwet. In de BRO
wordt deze lijn aangeduid als mijnbouwgrens. Voor de referentiestelsels
die bij levering aan de BRO worden toegestaan, is het binnen het domein
Mijnbouwwet van belang te weten of de locatie van een object aan
landzijde of aan zeezijde van de mijnbouwgrens ligt. Waar in voorgaande
paragrafen 'op land' en 'op zee' is genoemd, houdt dat binnen het domein
Mijnbouwwet in: aan landzijde respectievelijk aan zeezijde van de
mijnbouwgrens.

Ook registratieobjecten die (ten dele) in het buitenland liggen, kunnen
van belang zijn voor het inzicht over de ondergrond in Nederland. Zo
wordt bij het hydrologisch beheer van het Nederlands grondgebied soms
gebruik gemaakt van grondwatermonitoringnetten, waarvan de bijbehorende
grondwatermonitoringputten zowel in Nederland, als in het buitenland
liggen. Ook kan het voorkomen dat een mijnstelsel gedeeltelijk in het
buitenland ligt, in welk geval de toegang(en) tot dit mijnstelsel in het
buitenland kunnen liggen. In dit soort situaties dient de begrenzing van
Nederland geen beperking te zijn voor het kunnen registreren van de
betreffende ondergrond gegevens. Deze objecten moeten "vanzelfsprekend"
wel een Nederlandse bronhouder hebben. Indien van toepassing is in de
gegevensdefinitie voorzien dat onder bepaalde condities ook gegevens
geregistreerd kunnen worden die (ten dele) in het buitenland liggen.

2.8 Nauwkeurigheid van meetwaarden

Voor zinvol gebruik van attributen met een gemeten, berekende of
anderszins bepaalde waarde is het noodzakelijk dat de nauwkeurigheid van
die waarde bekend is.

Het begrip nauwkeurigheid laat zich in deze context het best omschrijven
als de juistheid van een gemeten of berekende waarde. In de meeste
processen waarin de waarde van een gegeven wordt bepaald, kan de
afwijking van de daadwerkelijke waarde slechts via een kalibratie- of
statistisch proces worden verkregen. Het resultaat omvat dan niet alleen
een van de mogelijke realisaties van een meetwaarde maar ook informatie
over de mogelijke spreiding van de meetwaarden.

De BRO gaat ervan uit dat de producenten van gegevens de metingen en
berekeningen uitvoeren binnen een stelsel van afspraken binnen het
desbetreffende werkveld. Uitgangspunt is dat ook de eisen waaraan de
gegevens op het gebied van nauwkeurigheid moeten voldoen in afspraken
zijn vastgelegd. Dat kunnen praktische werkafspraken zijn, maar ook
afspraken die vertaald zijn naar ISO- en NEN-normen. In de catalogus
wordt in beginsel verwezen naar die normen. Waar deze normen niet
voorzien in afspraken over de nauwkeurigheid, stelt de BRO hieraan
specifieke eisen. Deze zijn dan vermeld in de catalogus.

2.9 Authentiek gegeven

In de wet is een aantal gegevens expliciet als authentiek aangeduid. Dit
wordt in de catalogus nader uitgewerkt; verreweg de meeste gegevens zijn
authentiek.

Met de aanduiding *authentiek* wordt, zoals geformuleerd in [de memorie
van toelichting op de
wet](https://zoek.officielebekendmakingen.nl/dossier/kst-33839-3.html),
tot uitdrukking gebracht dat:

a.  Het gegeven in samenhang met andere gegevens door een groot aantal
    bestuursorganen in verschillende processen wordt gebruikt en
    derhalve bestemd is voor gegevensuitwisseling tussen
    bestuursorganen;

b.  de verantwoordelijkheid voor betrouwbaarheid van het gegeven
    eenduidig geregeld is;

c.  het gegeven onderworpen is aan intern en extern kwaliteitsonderzoek,
    en

d.  het gegeven zich leent voor verplicht gebruik door bestuursorganen
    en eenmalige verstrekking door burgers en bedrijven aan de overheid.

In de praktijk mag een gebruiker van de gegevens ervan uitgaan dat alle
gegevens correct zijn. De catalogus moet de gebruiker alle informatie
geven die voor een goed begrip daarvan nodig is. Heeft een gebruiker
echter gerede twijfel over de juistheid van een *authentiek* gegeven dan
wordt verwacht dat hij de registerbeheerder daarvan op de hoogte brengt.
Bronhouders zijn, bij gerede twijfel over de juistheid van een
authentiek gegeven (of het ontbreken ervan), zelfs verplicht daarvan
melding te maken ([artikel 30 van de Wet
Bro](https://wetten.overheid.nl/jci1.3:c:BWBR0037095&hoofdstuk=5&artikel=30)).

Voor alle gegevens is aangegeven of ze authentiek zijn. Ook is voor alle
gegevens aangegeven of ze aanwezig moeten zijn en een waarde moeten
hebben. Dat is van belang bij het bepalen of de registratie volledig is.
Er kunnen dus ook gegevens zijn die authentiek zijn, maar geen waarde
hoeven te hebben. Juist omdat er verplichtingen gelden t.a.v.
authentieke gegevens, vraagt dit om een korte toelichting. Wanneer een
authentiek gegeven geen waarde heeft, moet de gebruiker ervan uitgaan
dat het gegeven niet is geproduceerd. Dat geval kan zich uiteraard
alleen voordoen wanneer er vrijheid van beslissen bestaat bij de
bronhouder of de producent. Voor de duidelijkheid, als er wel een waarde
is dan moet die ook in de BRO worden opgenomen. Bij gerede twijfel over
het ontbreken van een waarde, moet een bestuursorgaan dat melden.

### **5. Opbouw van de gegevensdefinitie**

### 5.1 De gegevensdefinitie

De gegevensdefinitie vormt het hart van de catalogus en geeft een
beschrijving van alle gegevens van het registratieobject. Eerst wordt de
definitie van het registratieobject gegeven inclusief de plaatjes van
het zgn. *domeinmodel*, en vervolgens de definities van de *entiteiten*
waaruit het object is opgebouwd met de eigenschappen van die entiteiten,
de *attributen*. De entiteiten worden op volgorde van de nummers in het
domeinmodel behandeld. De volgende aspecten van de gegevens worden
vastgelegd.

- De Nederlandse naam van het gegeven.

- Of het gegeven van het type entiteit of het type attribuut is, met in
  het laatste geval van welke entiteit het een attribuut is.

- Eventueel de herkomst van het gegeven, in het uitzonderlijke geval de
  herkomst anders is dan de BRO.

- De definitie van het gegeven.

- Eventueel de herkomst van de definitie, in het uitzonderlijke geval de
  definitie een andere herkomst heeft dan de BRO.

- De kardinaliteit van een attribuut, en dat geeft aan hoe vaak het
  attribuut voorkomt.

- De aanduiding of een attribuut al dan niet authentiek is (juridische
  status).

- De naam van het domein voor de waarden van het attribuut, met
  afhankelijk van het type domein nadere informatie over de waarden.

- Eventueel de naam van het domein van het attribuut voor IMBRO/A,
  wanneer het uitzonderlijke geval zich voordoet dat er voor IMBRO/A een
  ander domein geldt dan voor IMBRO.

- Eventueel de regels die voor IMBRO en IMBRO/A in aanvulling op de
  kardinaliteit en de bepalingen van het domein gelden en door de BRO in
  controles zijn opgenomen, bijvoorbeeld om de consistentie van de
  inhoud van een brondocument vast te stellen.

- Eventueel de aanduiding dat de waarde van het attribuut mag ontbreken,
  wanneer het uitzonderlijke geval zich voordoet dat de waarde van het
  attribuut mag ontbreken.

- Van attributen waarvan de waarde mag ontbreken de omschrijving van de
  reden waarom de waarde mag ontbreken.

- Eventueel de aanduiding dat het gegeven wordt afgeleid door de BRO, in
  het uitzonderlijke geval het gegeven wordt afgeleid.

- Eventueel een toelichting om aanvullende informatie te geven over de
  betekenis van het gegeven of de reden waarom het is opgenomen.

- Van attributen van objecten met een materiële geschiedenis de
  aanduiding of het attribuut al dan niet een materiële geschiedenis kan
  hebben.

De gegevensdefinitie dekt de beide kwaliteitsregimes die worden
onderscheiden, IMBRO en IMBRO/A. Het kwaliteitsregime IMBRO is leidend
en bij het opstellen van de gegevensdefinitie is geprobeerd de
verschillen tussen de twee regimes zo klein mogelijk te houden. Het
streven is een object altijd in termen van dezelfde gegevens te
beschrijven en voor IMBRO/A alleen aanvullende regels te formuleren en
extra waarden toe te staan. Bij uitzondering kan het echter nodig zijn
gebleken voor IMBRO/A aparte entiteiten, attributen of domeinen te
definiëren.

### 5.2 Domeinen

Een *domein* beschrijft welke waarden mogelijk zijn voor een attribuut
(zie bijv. *Aantal* of *Code*).

Sommige domeinen zijn samengesteld uit twee of meer elementen die in
samenhang betekenisvol zijn. Een voorbeeld van een samengesteld domein
dat in de BRO bestaat is *Datuminterval*. *Datuminterval* bestaat uit
twee elementen, beide van het domein *Datum* (*jaar, maand* en *dag*),
namelijk een begindatum en een einddatum.

Bij een attribuut kunnen ook twee of meer domeinen mogelijk zijn. Voor
dit attribuut geldt dat verschillende domeinen valide zijn, er kan
echter bij levering van de gegevens aan de BRO altijd maar één van de
domeinen gekozen worden.\
In de gegevensdefinitie worden in dat geval een attribuut gemodelleerd
waarvan het domein dat de mogelijke waarde beschrijft een keuze is
tussen twee of meer domeinen. Dit maakt het mogelijk waar in het
domeinmodel normaal gesproken maar één mogelijkheid bestaat, een
opsomming te geven van meerdere mogelijke domeinen, waarbij altijd
precies één van deze mogelijkheden wordt gebruikt. Een voorbeeld van een
dergelijke keuze domein is het domein *Organisatie*.

De domeinen die in de gegevensdefinitie worden gebruikt worden hieronder
toegelicht.

**5.2.1 Aantal**

Het domein *Aantal* wordt gebruikt voor een telbare hoeveelheid. Het is
een natuurlijk getal met een bepaalde maximale lengte.\
Het domein wordt volledig gespecificeerd door met de aanduiding aantal
ook de maximale lengte mee te (Aantal N). Gewoonlijk wordt de
waardeverzameling verder ingeperkt door een bereik te specificeren. In
het domeinmodel wordt volstaan met de algemene aanduiding *Aantal*.

**5.2.2 Code**

Een code is een opeenvolging van cijfers, van letters of van cijfers en
letters met een bepaalde opbouw en met een specifieke betekenis. Een
code heeft gewoonlijk een betekenis die ook buiten de BRO geldt. Een
code wordt uitgegeven door een verantwoordelijke instantie. Om de opbouw
van een code weer te geven wordt gebruik gemaakt van de letters C en N.
De letter C staat voor character (Eng.) en duidt een letter aan, de
letter N staat voor number (Eng.) en duidt een cijfer aan. Een code
heeft een bepaalde naam.\
Het domein wordt volledig gespecificeerd door met de naam van de code
ook de opbouw mee te geven. Uit de definitie van het attribuut zelf moet
blijken wat de specifieke betekenis is van de code. In het domeinmodel
wordt het domein aangeduid met zijn naam.

**5.2.3 Gemeten waarden**

Meetwaarden worden gebruikt voor grootheden. De waarde van een grootheid
is een getal met een bepaalde opbouw en een bepaalde eenheid. Voor de
waarde van grootheden worden twee domeinen gebruikt. Een voor een waarde
waarvan de nauwkeurigheid altijd hetzelfde is (*Meetwaarde*) en een voor
een waarde waarvan de nauwkeurigheid varieert (*Meetwaarde in machten*)
en dat is het geval wanneer de nauwkeurigheid voor kleine getallen
anders is dan de nauwkeurigheid voor grote getallen omdat een ander
apparaat of methode is gebruikt.

De BRO gebruikt voor de eenheden de codes uit het UCUM (Unified Code for
Units of Measure)-systeem. In bijzondere gevallen is de eenheid
dimensieloos.

*5.2.3.1 Meetwaarde*

Het domein *Meetwaarde* wordt gebruikt wanneer de nauwkeurigheid van de
waarde altijd hetzelfde is.\
Het is een rationaal getal met een bepaalde opbouw. Het aantal cijfers
voor het scheidingsteken is variabel maar begrensd. Het aantal cijfers
achter het scheidingsteken ligt vast.

Het domein wordt volledig gespecificeerd door met de aanduiding
meetwaarde ook de opbouw (Meetwaarde N.N) en de eenheid mee te geven.
Gewoonlijk wordt de waardeverzameling verder ingeperkt door een bereik
te specificeren. In het domeinmodel wordt volstaan met de algemene
aanduiding *Meetwaarde*.

*5.2.3.2 Inname van gemeten waarden*

In de praktijk is het moeilijk een meetwaarde zonder verandering van het
ene systeem aan het andere door te geven. De BRO hanteert de definities
binnen het systeem en bij uitgifte strikt om te borgen dat een
meetwaarde zonder verandering kan worden doorgegeven.

Bij het vastleggen van eigenschappen is het niet altijd nodig getallen
zo strikt te definiëren als de basisregistratie vraagt. De uitvoerders
weten wel wat een getal zou moeten voorstellen en kunnen bijvoorbeeld
accepteren dat een meetwaarde er een decimale nul bij krijgt of dat een
getal een onbepaald aantal decimalen heeft. Om de uitvoeringspraktijk
niet nodeloos te frustreren door getallen die niet aan de strikte
definitie voldoen af te wijzen, hanteert de BRO bij het innemen van
meetwaarden de volgende praktische regels.

- Er zijn meer cijfers achter het scheidingsteken aanwezig dan
  gespecificeerd: het getal wordt afgekapt op het aantal dat in de
  gegevensdefinitie is gespecificeerd.

- Er zijn minder cijfers achter het scheidingsteken aanwezig dan
  gespecificeerd: het getal wordt aangevuld met nullen tot het aantal
  dat in de gegevensdefinitie is gespecificeerd.

- Er is geen scheidingsteken aanwezig: het scheidingsteken wordt
  toegevoegd en het getal wordt aangevuld met nullen tot het aantal dat
  in de gegevensdefinitie is gespecificeerd.

- Het getal voor het scheidingsteken begint met een of meer nullen: de
  nullen worden genegeerd.

- Er zijn meer cijfers vóór het scheidingsteken aanwezig dan
  gespecificeerd: de waarde wordt geweigerd.

- Er is een scheidingsteken bij de exponent van de meetwaarde in machten
  aanwezig: de waarde wordt geweigerd.

**5.2.4 Nummer**

Het domein *Nummer* wordt gebruikt om de plaats in een reeks aan te
geven. Het is een opeenvolging van cijfers met een bepaalde maximale
lengte. Een nummer heeft geen rekenkundige betekenis, maar heeft een
betekenisvolle volgorde.\
Het domein wordt volledig gespecificeerd door met de aanduiding nummer
ook de maximale lengte mee te geven (Nummer N). Eventueel wordt de
waardeverzameling verder ingeperkt door een bereik te specificeren. In
het domeinmodel wordt volstaan met de algemene aanduiding *Nummer*.

**5.2.5 Tekst**

Het domein *Tekst* bestaat uit een stuk tekst van een bepaalde maximale
lengte. De tekst mag alleen bestaan uit de tekens die voorkomen in de
MES-1 set. De MES-1 set omvat 335 tekens en wordt gebruikt binnen de
landen van de Europese Unie die een Latijns schrift kennen.\
Het domein wordt volledig gespecificeerd door met de aanduiding tekst
ook de maximale lengte mee te (Tekst N). In het domeinmodel wordt
volstaan met de algemene aanduiding *Tekst*.

**5.2.6 Tijdstip**

Voor gegevens die over tijdstippen gaan worden twee domeinen gebruikt.
Een voor een tijdstip tot op de seconde nauwkeurig (DatumTijd) en een
voor een tijdstip tot op de dag nauwkeurig (Datum).

In ieder domein gaat het om de datum gemeten volgens de Gregoriaanse
kalender. Bij het domein DatumTijd wordt de tijd gemeten volgens UTC en
moet de tijdzone worden meegegeven. UTC is de mondiaal geaccepteerde
standaardtijd en de opvolger van GMT (Greenwich Mean Time); de drie
letters staan voor Coordinated Universal Time. Door de tijdzone mee te
geven kan lokale tijd worden omgezet naar UTC.

De opbouw van de twee domeinen volgt dezelfde conventies, conform ISO
8601. Het eerste element in de opbouw staat voor het jaar, dan volgt de
maand, enz., en het laatste element staat voor de tijdzone. Om de
verschillende elementen aan te geven worden letters gebruikt: jaar (J),
maand (M), dag (D), uur (U), minuut (M)en seconde (S), gevolgd door de
tijdzone. Het aantal letters geeft de lengte aan.

Voor de meest uitgebreide variant van de opbouw, die van DatumTijd,
wordt dit JJJJ-MM-DDTUU:MM:SS+UU:MM. De T is het teken dat de datum en
het tijdstip op die datum scheidt. De + is het scheidingteken tussen het
tijdstip en de tijdzone. Zoals uit de opbouw blijkt wordt de tijdzone in
uren en minuten gegeven. De meeste tijdzones zijn overigens uitgedrukt
in gehele uren (UU:00). In Nederland geldt Centraal Europese Tijd
(UTC+1:00) of Centraal Europese Zomertijd (UTC+2.00).

*5.2.6.1 Datum*

Het domein *Datum* wordt gebruikt om een datum volgens de Gregoriaanse
kalender tot op de dag nauwkeurig aan te geven. De opbouw is
JJJJ-MM-DD.\
Bij het domein Datum is het voldoende de naam te geven, omdat de opbouw
altijd hetzelfde is. Gewoonlijk wordt de waardeverzameling verder
ingeperkt door een bereik te specificeren.

5.1.6.2 DatumTijd

Het domein DatumTijd wordt gebruikt om een tijdstip volgens de
Gregoriaanse kalender tot op de seconde nauwkeurig aan te geven. De
opbouw is JJJJ-MM-DDTUU:MM:SS+UU:MM.\
Bij het domein DatumTijd is het voldoende de naam te geven, omdat de
opbouw altijd hetzelfde is. Gewoonlijk wordt de waardeverzameling verder
ingeperkt door een bereik te specificeren.

De BRO volgt de ISO8601 standaard en rekent de aangeleverde DatumTijd
waarde om tot een Nederlandse DatumTijd waarde voordat er wordt getoetst
op eventuele regels. Het is dus belangrijk dat de juiste tijdzone wordt
opgevoerd om tijdstippen correct leesbaar te houden. Voor de lezer is
dit de lokale tijd. Daarnaast is het belangrijk dat de zomer- en
wintertijd correct worden toegepast. Geadviseerd wordt om voor de
tijdzone de in Nederland geldige waarden +01:00 en +02:00 te gebruiken:
dit ondersteunt de leesbaarheid van de XML door mensen. Zie voor een
uitgebreidere toelichting het document "[Het afhandelen van
[tijstippen](https://tijstippen)tijstippen](https://www.bro-productomgeving.nl/bpo/latest/het-afhandelen-van-tijdstippen)"
op de BRO productomgeving.

*5.2.6.3 OnvolledigeDatum*

Voor gegevens die onder het kwaliteitsregime IMBRO/A aangeleverd worden,
geldt een derde domein met vier keuzemogelijkheden.

- De datum tot op de dag nauwkeurig, met als opbouw JJJJ-MM-DD

- De datum tot op de maand nauwkeurig, met als opbouw JJJJ-MM

- De datum tot op het jaar nauwkeurig, met als opbouw JJJJ

- Geen datum bekend, met als vaste waarde *onbekend*.

De keuze die gemaakt wordt is gebaseerd op de beschikbaarheid van
gegevens. De gebruiker moet ervan uitgaan dat de informatie zo
nauwkeurig mogelijk is opgenomen. Bij het domein OnvolledigeDatum is het
voldoende de naam te geven, omdat de vier keuzen en de opbouw altijd
hetzelfde zijn.

**5.2.7 Waardelijsten**

Een waardelijst is een lijst van de waarden die het attribuut mag
hebben. Er zijn twee typen waardelijsten, waardelijsten die in de
toekomst kunnen worden uitgebreid en waardelijsten die niet kunnen
worden uitgebreid. Een waardelijst heeft een bepaalde naam en een
specifieke inhoud.

*5.2.7.1 Waardelijst niet-uitbreidbaar*

Een niet-uitbreidbare waardelijst wordt gebruikt wanneer uitbreiding
niet mogelijk is. Alle waarden van de lijst staan vast.\
Bij een niet-uitbreidbare waardelijst is het voldoende de naam te geven,
omdat de inhoud altijd hetzelfde is. In de BRO worden drie
niet-uitbreidbare waardelijsten gebruikt.

*IndicatieJaNee*

  -----------------------------------------------------------------------
  **Waarde**
  -----------------------------------------------------------------------
  **ja**

  **nee**
  -----------------------------------------------------------------------

*IndicatieJaNeeOnbekend*

  -----------------------------------------------------------------------
  **Waarde**
  -----------------------------------------------------------------------
  ja

  nee

  onbekend
  -----------------------------------------------------------------------

*Kwaliteitsregime*

  -----------------------------------------------------------------------
  **Waarde**
  -----------------------------------------------------------------------
  IMBRO

  IMBRO/A
  -----------------------------------------------------------------------

*5.2.7.2 Waardelijst uitbreidbaar*

Een uitbreidbare waardelijst wordt gebruikt wanneer uitbreiding mogelijk
moet zijn. Iedere waarde van de lijst heeft een specifieke betekenis
(omschrijving) en geldt voor een bepaald kwaliteitsregime, IMBRO en/of
IMBRO/A. Eventueel worden andere aspecten van de waarde vastgelegd.\
Bij een uitbreidbare waardelijst wordt de naam van de lijst gegeven. De
inhoud van de lijst is in een apart hoofdstuk van de gegevensdefinitie
opgenomen.

**5.2.8 Geometrie**

Voor gegevens over de geometrie van een object worden verschillende
domeinen gebruikt. De vorm, afmetingen, oriëntatie en positie ten
opzichte van de aarde van een object kunnen in verschillende typen
geometrie uitgedrukt worden, waarbij ook een keuzemogelijkheid uit
meerdere typen en daarmee domeinen een optie kan zijn.\
In de BRO zijn de geometrieën conform het [GML Simple Features profile
versie 2.0
(OGC)](https://www.geonovum.nl/geo-standaarden/geography-markup-language-gml/gml-simple-features-profile) toegestaan.
Deze omvat punten, lijnen, vlakken en volumen.

De verschillende typen geometrie uitgedrukt in verschillende domeinen
die in de gegevensdefinitie worden gebruikt worden hieronder toegelicht.

*5.2.8.1 Punt*

Het domein *Punt* wordt gebruikt om de positie van een object vast te
leggen. De positie wordt bepaald in een tweedimensionaal vlak, een
specifiek referentiestelsel en uitgedrukt in coördinaten. In sommige
gevallen wordt daarnaast de hoogte (derde dimensie) van
het *Punt* vastgelegd.

![A blue dot in a black rectangle AI-generated content may be
incorrect.](./media/media/image2.png){width="2.0833333333333335in"
height="1.7430555555555556in"}[Figuur 7](https://docs.geostandaarden.nl/bro/sld/#fig-generatedID)Een
punt geometrie (ISO 19107:2003 Spatial Schema).

*5.2.8.2 Lijn*

Het domein *Lijn* wordt gebruikt om de vorm, afmetingen en positie van
een object in een lijn uit te drukken. De positie wordt bepaald in een
specifiek referentiestelsel en uitgedrukt in één of meerdere
lijnsegmenten. Een lijnsegment is de verbinding tussen twee punten.
Lijnsegmenten zijn aan elkaar verbonden doordat het eindpunt van een
segment is verbonden aan het beginpunt van een volgend lijnsegment.
Een *Lijn* kan in een tweedimensionaal vlak (x- en y-coördinaat of in
een driedimensionale ruimte (x-, y- en z-coördinaat) worden vastgelegd.

![A blue line in a white background AI-generated content may be
incorrect.](./media/media/image3.png){width="2.0069444444444446in"
height="1.6736111111111112in"}[Figuur 8](https://docs.geostandaarden.nl/bro/sld/#fig-generatedID-0)Een
lijn geometrie (ISO 19107:2003 Spatial Schema).

*5.2.8.3 Multilijn*

Het domein *Multilijn* bestaat uit een verzameling van lijnen die
gezamenlijk één object vormen en wordt gebruikt om de vorm, afmetingen
en positie van een object in meerdere lijnen uit te drukken. De positie
wordt bepaald in een specifiek referentiestelsel en uitgedrukt in
meerdere lijnen met één of meerdere lijnsegmenten. Tussen de lijnen die
samen een *Multilijn* vormen mag geen intersectie plaatsvinden tenzij
dit gebeurt in de eindpunten van de lijnen (er mag geen kruising van
lijnen plaatsvinden, wel vertakkingen). Een *Multilijn* kan in een
tweedimensionaal vlak (x- en y-coördinaat) of in een driedimensionale
ruimte (x-, y- en z-coördinaat) worden vastgelegd.

![A blue lines in a white background AI-generated content may be
incorrect.](./media/media/image4.png){width="2.048611111111111in"
height="1.6736111111111112in"}[Figuur 9](https://docs.geostandaarden.nl/bro/sld/#fig-generatedID-1)Een
multilijn geometrie.

*5.2.8.4 Vlak*

Het domein *Vlak* wordt binnen de geometrie gebruikt voor de
representatie van de vorm, afmetingen en positie van een object als een
vlak. De positie wordt bepaald in een specifiek referentiestelsel. Een
vlak heeft altijd een buitengrens, daarnaast kan een vlak ook nog een of
meerdere interne begrenzingen hebben. Een *Vlak* kan in een
tweedimensionaal vlak (x- en y-coördinaat) of in een driedimensionale
ruimte (x-, y- en z-coördinaat) worden vastgelegd.

![A blue and white rectangles with a black border AI-generated content
may be incorrect.](./media/media/image5.png){width="4.326388888888889in"
height="1.6319444444444444in"}[Figuur 10](https://docs.geostandaarden.nl/bro/sld/#fig-generatedID-2)Een
vlak is een geometrie dat een beeld van een continue regio of vlak
vertegenwoordigd (ISO 19107:2003 Spatial Schema).

*5.2.8.5 Multivlak*

Het domein *Multivlak* bestaat uit een verzameling van vlakken die
gezamenlijk één object vormen en wordt gebruikt om de vorm, afmetingen
en positie van een object uit te drukken. De vlakken die samen een
multivlak vormen mogen elkaar niet overlappen, wel mogen zij in een
eindig aantal punten elkaar raken (wel punten maar geen grenzen
gemeenschappelijk). De posities van de vlakken worden bepaald in een
specifiek referentiestelsel. Een *Multivlak* kan in een tweedimensionaal
vlak (x- en y-coördinaat) of in een driedimensionale ruimte (x-, y- en
z-coördinaat) worden vastgelegd.

![A blue and black rectangles AI-generated content may be
incorrect.](./media/media/image6.png){width="2.0277777777777777in"
height="1.6736111111111112in"}[Figuur 11](https://docs.geostandaarden.nl/bro/sld/#fig-generatedID-3)Een
Multivlak geometrie.

*5.2.8.6 Volume*

Het domein *Volume* wordt gebruikt om de vorm, afmetingen en positie van
een object uit te drukken. De geometrie van een volume is opgebouwd uit
grenzen die elk een vlak zijn. Deze zijn naar buiten toe georiënteerd;
de bovenkant van elk vlak is van de buitenkant van het volume object te
zien. Een *Volume* geometrie kan in een tweedimensionaal vlak (x- en
y-coördinaat of in een driedimensionale ruimte (x-, y-, en z-coördinaat)
worden vastgelegd.

![A blue rectangular object with black border AI-generated content may
be incorrect.](./media/media/image7.png){width="2.076388888888889in"
height="1.75in"}[Figuur 12](https://docs.geostandaarden.nl/bro/sld/#fig-generatedID-4)Een
volume geometrie (ISO 19107:2003 Spatial Schema).

*5.2.8.7 Minimum begrenzing*

Het domein Minimum begrenzing wordt gebruikt om de positie van één of
meerdere geometrieobjecten te begrenzen. De geometrie van de Minimum
begrenzing is opgebouwd uit twee punten, waarbij het eerste punt de hoek
aan de linker onderkant van het selectiekader weergeeft en het tweede
punt de hoek aan de rechter bovenkant. De positie van de punten worden
bepaald in een specifiek referentiestelsel. Een Minimum begrenzing kan
in een tweedimensionaal vlak (x- en y-coördinaat of in een
driedimensionale ruimte (x-, y-, en z-coördinaat) worden vastgelegd.

*Figuur 14*

![A blue dotted rectangle with dots AI-generated content may be
incorrect.](./media/media/image9.png){width="1.3308628608923885in"
height="1.2688024934383202in"}

**5.2.9 Organisatie**

Het domein *Organisatie* wordt gebruikt om de organisaties die een rol
hebben in de BRO te identificeren. De invulling van het domein hangt af
van waar de organisatie gevestigd is en voor de BRO gaat het daarbij om
Nederland of een andere lidstaat van de Europese Unie.

In het geval de organisatie in Nederland gevestigd is, wordt het domein
ingevuld met het gegeven dat een onderneming of de maatschappelijke
activiteit van een rechtspersoon in het Handelsregister identificeert,
het KvK-nummer. Het *KvK-nummer* is van het type code en de opbouw is
NNNNNNNN.

Voor organisaties buiten Nederland wordt het domein ingevuld met het
equivalent van het KvK-nummer in een handelsregister van een andere
lidstaat van de Europese Unie dan Nederland,
het *EuropeesHandelsnummer*. Het Europees handelsnummer, de zogenaamde
EUID, is geïntroduceerd ten behoeve van de koppeling van
handelsregisters. De code is gebaseerd op ISO 6523 en is opgebouwd uit
een landcode, registeridentificatiecode, inschrijvingsnummer en
controlegetal. De landcode is de 2-letterige code van ISO3166, de
registeridentificatiecode is de identificatie van het nationale register
omdat in sommige landen meerdere handelsregisters bestaan en het
inschrijvingsnummer is het nummer waaronder de onderneming is
ingeschreven in het betreffende register. Het controlegetal ter
voorkomen van identificatiefouten wordt nog niet gebruikt. De opbouw per
element is variabel en daarom is het Europees Handelsnummer in de BRO
als domein Tekst 40 opgenomen.

Bij het domein Organisatie is het voldoende de naam te geven, omdat de
twee keuzen en de opbouw altijd hetzelfde zijn.

5.3 Entiteiten van het type meetreeks

Een meetreeks is een type entiteit met een vaste ordening. Het wordt
gebruikt om het verloop van een bepaalde eigenschap of eigenschappen
vast te leggen die het gevolg is van de verandering van een bepaalde
variabele, de zogenaamde onafhankelijke variabele. In de BRO is er
altijd 1 onafhankelijke variabele, en dat is meestal de tijd maar kan
ook een andere variabele zijn.

De meetreeks is een verzameling gemeten waarden van bepaalde
eigenschappen in een bepaalde volgorde. Alle eigenschappen van de
meetreeks worden volledig gespecificeerd. De eerste eigenschap is de
onafhankelijke variabele op basis waarvan de metingen elkaar in
oplopende volgorde opvolgen. Daarna volgen de afhankelijke variabelen.\
Een meetreeks heeft een bepaalde naam. Alleen in het domeinmodel is de
meetreeks aangeduid als *Meetreeks*.

5.4 Het domeinmodel

Het domeinmodel geeft een overzicht van de gegevens van het
registratieobject en laat de onderlinge samenhang zien. Modellering van
informatie kent verschillende invalshoeken. In de catalogus is het
inhoudelijke perspectief gekozen omdat dat de meeste waarde heeft voor
de mensen die de informatie moeten begrijpen. Een dergelijk model wordt
in de BRO een domeinmodel genoemd. Uit het domeinmodel wordt een
technisch model afgeleid dat meeweegt dat informatiesystemen efficiënt
met elkaar moeten kunnen spreken. Voor het domeinmodel wordt de
UML-notatie gebruikt. Met kennis van de gebruikte symbolen is het
gemakkelijk te lezen.

Het domeinmodel kent een aantal vaste elementen die bij ieder
registratieobject terugkomen. Een begrip van deze elementen vergroot de
leesbaarheid van het domeinmodel en de catalogus. De elementen zijn:
entiteiten, attributen, gegevensgroepen en relaties. Een entiteit is een
onderscheidend geheel van eigenschappen die gezamenlijk betekenis
hebben. Een entiteit heeft altijd een naam en een definitie. In het
domeinmodel zijn de entiteiten te herkennen aan het begrip Objecttype.

In de entiteiten staan de namen opgesomd van de attributen, de
eigenschappen van de entiteiten, met daarachter de naam van de
bijbehorende waardenverzameling (domein) en de kardinaliteit. Bij
attributen is de kardinaliteit alleen opgenomen wanneer die ongelijk is
aan 1. Overigens moet de kardinaliteit altijd in samenhang met de regels
die in de definitie van het gegeven zijn opgenomen worden begrepen. De
kardinaliteit en de regels bepalen samen of een gegeven al dan niet
aanwezig is. De figuren laten ook zien welke attributen alleen aan de
dataleverancier en de bronhouder worden uitgeleverd. In het domeinmodel
zijn de attributen te herkennen aan het begrip Attribuutsoort.

Soms zijn een aantal attributen gegroepeerd in een groep, aangeduid als
gegevensgroep. Het blijven attributen van de entiteit, maar de
inhoudelijke definiëring van de gegevensgroep staat elders.
Gegevensgroepen kunnen bij meerdere entiteiten terugkomen.

Het domeinmodel laat daarnaast ook zien hoe entiteiten aan elkaar
gerelateerd zijn. Een beschrijving van deze relatie is opgenomen bij de
bron-entiteit van de relatie. Een relatie heeft altijd een richting en
in de meeste gevallen loopt deze van bron naar doel. In het plaatje van
een domeinmodel heeft de relatie een naam en een kardinaliteit. Om de
leesbaarheid te vergroten staat de kardinaliteit bij de doelentiteit.

![](./media/media/image10.png){width="6.270833333333333in"
height="1.5833333333333333in"}[Figuur 14](https://docs.geostandaarden.nl/bro/sld/#fig-generatedID-6)

Bovenstaand voorbeeld is te lezen als: de entiteit Bepaling bevat één of
meerdere metingen. Een meting bestaat uit een meetwaarde en
meetconfiguratie-gegevens. De meetconfiguratie bestaat uit twee
parameters.

5.5 Verplichte gegevens, verplichte waarden

De kardinaliteit en de regels bepalen samen of een gegeven al dan niet
aanwezig is. Voor een goed begrip van de gegevensdefinitie is dat nog
niet zorgvuldig genoeg geformuleerd. In de praktijk van
gegevensuitwisseling is het namelijk mogelijk een attribuut op te nemen
zonder waarde. Verbijzonderd voor attributen is de juiste formulering
daarom dat de kardinaliteit en de regels samen bepalen of een attribuut
al dan niet aanwezig is en of een attribuut al dan niet een waarde
heeft.

Uitgangspunt is dat een attribuut dat aanwezig is een waarde heeft. Een
attribuut wordt alleen bij uitzondering zonder waarde in de berichten
opgenomen. Het onderstaande overzicht geeft de vier mogelijkheden die
voorkomen.

- De kardinaliteit= \[1\] en er is geen aanvullende regel opgenomen. Dit
  betekent dat het gegeven altijd aanwezig is en altijd een waarde
  heeft.

- De kardinaliteit= \[1\] en er is een aanvullende regel opgenomen die
  aangeeft waarom een waarde toch mag ontbreken. Dit betekent dat het
  gegeven altijd aanwezig is maar bij uitzondering en om een specifieke
  reden geen waarde kan hebben.

- De kardinaliteit= \[0..1\] en er zijn 1 of meer aanvullende regels
  opgenomen. Dit betekent dat de regels bepalen of het gegeven wel of
  niet voorkomt en bepalen of het gegeven wel of geen waarde heeft.

- De kardinaliteit= \[0..1\] en er is geen aanvullende regel opgenomen.
  Dit betekent dat het gegeven alleen aanwezig is als het een waarde
  heeft.

Voor de kardinaliteiten \[0..\*\] en \[1..\*\] geldt in essentie
hetzelfde.

[^1]: Drinkwaterbedrijven zijn alleen bronhouder voor bepaalde
    registratieobjecten.



