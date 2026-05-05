// ─── Allergen names ──────────────────────────────────────────────
const ALLERGEN_NAMES = {
  1:'Glutine',2:'Crostacei',3:'Uova',4:'Pesce',5:'Soia',
  6:'Latte',7:'Frutta a guscio',8:'Senape',9:'Solfiti',
  10:'Arachidi',11:'Agrumi'
};

// ─── Categories ───────────────────────────────────────────────────
const CATEGORIES = [
  { id:'special',      label:'Special del Mese' },
  { id:'antipasti',    label:'Antipasti' },
  { id:'fritti',       label:'Fritti' },
  { id:'patatine',     label:'Patatine' },
  { id:'insalate',     label:'Insalate' },
  { id:'carni',        label:'Carni' },
  { id:'iberica',      label:'Selezione Iberica' },
  { id:'degustazione', label:'Menu Degustazione' },
  { id:'panini',       label:'Panini &amp; Burger' },
  { id:'pizze',        label:'Pizze' },
  { id:'pizze-ruota',  label:'Pizze a Ruota di Carro' },
  { id:'dolci',        label:'Dolci' },
  { id:'birre',        label:'Birre' },
  { id:'bibite',       label:'Bibite' },
  { id:'digestivi',    label:'Digestivi' },
];

// ─── Items ────────────────────────────────────────────────────────
// price: number = fixed; string = custom label (e.g. '12€/etto' or '0.25L €4,5 · 0.50L €6,5')
const ITEMS = [
  // ── SPECIAL ────────────────────────────────────────────
  { cat:'special', name:'Pizza Fiamma Primaverile', desc:'Fior di latte, salsiccia a punta di coltello, crema di zucchine, chips di zucchine croccanti, fonduta di parmigiano, zest di limone', beer:'Birra consigliata: Brooklyn East IPA', price:15, allergens:[1,6] },
  { cat:'special', name:'Panino Sunset Smash', desc:'Bun artigianale, doppio smash burger, stracciata di bufala, pancetta croccante, crema di pomodorino confit, zest arancia e limone, mayo al basilico', beer:'Birra consigliata: Brooklyn East IPA', price:15, allergens:[1,3,6,11] },

  // ── ANTIPASTI ──────────────────────────────────────────
  { cat:'antipasti', name:'Tagliere Salumi', desc:null, price:18, allergens:[1] },
  { cat:'antipasti', name:'Tagliere Formaggi', desc:null, price:18, allergens:[6,7] },
  { cat:'antipasti', name:'Tagliere Salumi e Formaggi', desc:null, price:25, allergens:[1,6,7] },
  { cat:'antipasti', name:'Parmigiana di Melanzane', desc:null, price:10, allergens:[1,6,7] },
  { cat:'antipasti', name:'Tris Mini Bun', desc:'A fantasia dello chef', price:10, allergens:[1,3,6,7] },
  { cat:'antipasti', name:'Bruschetta Classica', desc:'Pomodorino confit e crema di basilico (2pz)', price:5, allergens:[1] },
  { cat:'antipasti', name:'Bruschetta Veniu', desc:'Ricotta di bufala, crudo di Parma 24 mesi DOP, zest di arancia (2pz)', price:7, allergens:[1,6] },
  { cat:'antipasti', name:'Degustazione Croccante', desc:'Bruschetta mortadella e pistacchio, Bruschetta Veniu, Bruschetta melanzane a funghetto e crema di parmigiano, Bruschetta fantasia dello Chef (4pz)', price:9, allergens:[1,6,7,8] },
  { cat:'antipasti', name:'Cannolo Mortadella & Pistacchio', desc:'Cialda croccante salata con mousse di mortadella, granella di pistacchio tostato, zest di limone e arancia e riduzione di balsamico', price:7, allergens:[1,6] },
  { cat:'antipasti', name:'Bao', desc:'Pulled pork e salsa BBQ (2pz)', price:9, allergens:[1,6] },
  { cat:'antipasti', name:'Bao al Chili', desc:'Bao artigianale, chili di manzo, insalata croccante e mayo al lime (2pz)', price:10, allergens:[1,6], isNew:true },
  { cat:'antipasti', name:'Polpette di Angus', desc:'Pistacchio e mortadella · Spianata piccante e nduja · Pomodorino carbone e crema di parmigiano (3pz)', price:9, allergens:[1,3,6,7] },
  { cat:'antipasti', name:'3 Sfumature di Angus', desc:'Genovese: polpetta con topping di cipolla, fondo bruno e colata di parmigiano 30 mesi · Nerano: polpetta con crema di zucchine, chips croccanti e scaglie di provolone del Monaco DOP · Agrumata: stracciata di bufala, prosciutto cotto, zest di limone e arancia', price:12, allergens:[1,6,11] },
  { cat:'antipasti', name:'Ribs BBQ Smoke', desc:'Glassate con salsa barbecue affumicata al faggio · Glassate con salsa teriyaki e semi di sesamo', price:12, allergens:[1,6] },
  { cat:'antipasti', name:'Carpaccio di Black Angus', desc:'Black Angus affumicato, mayo al tartufo, germogli di campo, zest di arancia e limone, crumble di tarallo napoletano, olio EVO', price:18, allergens:[], isNew:true },
  { cat:'antipasti', name:'Kentucky Veniu', desc:'Straccetti di pollo marinati, panatura croccante speziata e salsa affumicata', price:9, allergens:[1], isNew:true },

  // ── FRITTI ────────────────────────────────────────────
  { cat:'fritti', name:'Frittatina Classica', desc:null, price:4.50, allergens:[1,3,6,7] },
  { cat:'fritti', name:'Frittatina Nerano', desc:null, price:5, allergens:[1,3] },
  { cat:'fritti', name:'Frittatina Carbonara', desc:null, price:5, allergens:[1,3,6,7] },
  { cat:'fritti', name:'Frittatina Genovese', desc:null, price:6, allergens:[1,3,6,7] },
  { cat:'fritti', name:'Crocchè', desc:null, price:3, allergens:[1,3] },

  // ── PATATINE ──────────────────────────────────────────
  { cat:'patatine', name:'Patate Dipper', desc:'Contiene possibili tracce di glutine (frittura)', price:5, allergens:[] },
  { cat:'patatine', name:'Stick Crunchy', desc:'Contiene possibili tracce di glutine (frittura)', price:5, allergens:[] },
  { cat:'patatine', name:'Chips di Patate Homemade', desc:'Contiene possibili tracce di glutine (frittura)', price:5, allergens:[] },
  { cat:'patatine', name:'Patate Stick Homemade', desc:'Contiene possibili tracce di glutine (frittura)', price:5, allergens:[] },
  { cat:'patatine', name:'Sweet Fries', desc:'Patate americane dolci · Contiene possibili tracce di glutine (frittura)', price:6.50, allergens:[] },
  { cat:'patatine', name:'Sweet Fries Gourmet', desc:'Patate americane dolci con pulled pork sfilacciato e cheddar fuso', price:9, allergens:[6] },
  { cat:'patatine', name:'Topping — Salsiccia e Provola', desc:null, price:2, allergens:[] },
  { cat:'patatine', name:'Topping — Croccante di Bacon', desc:null, price:2, allergens:[] },
  { cat:'patatine', name:'Topping — Fonduta di Cheddar', desc:null, price:1, allergens:[6] },
  { cat:'patatine', name:'Topping — Pulled Pork', desc:null, price:3, allergens:[] },

  // ── INSALATE ──────────────────────────────────────────
  { cat:'insalate', name:'Cesar Salad', desc:'Insalata riccia, pollo grigliato, scaglie di parmigiano reggiano, salsa cesar, crostini di pane', price:13, allergens:[1,3,4,6,7] },

  // ── CARNI ─────────────────────────────────────────────
  { cat:'carni', name:'Filetto di Prussiana / Scottona / Black Angus', desc:'Taglio premium selezione Veniu (marezzatura 12), servito su letto di patate al forno, con salsa al fondo bruno, fili di peperoncino e petali di fiori. Porzione media 350/400gr. In base alla disponibilità', price:'12€/etto', allergens:[1,6,9] },
  { cat:'carni', name:'Entrecôte di Black Angus', desc:'Selezione Veniu (marezzatura da 7 a 9)', price:'9€/etto', allergens:[1] },
  { cat:'carni', name:'Stinco di Maiale', desc:'Cottura lenta, glassa al fondo bruno e petali di rosa', price:18, allergens:[1,6,9] },
  { cat:'carni', name:'Costata con Osso di Black Angus', desc:'Selezione Veniu con olio EVO IGP e sale rosa', price:'8€/etto', allergens:[1] },
  { cat:'carni', name:'Hamburger Aberdeen Angus', desc:'Black Angus 250gr, con provola di Agerola e melanzane a funghetto, completato da peperone crusco croccante', price:15, allergens:[6] },
  { cat:'carni', name:'T-Bone Prussiana', desc:'Metà filetto, metà controfiletto. Porzione media 1kg', price:'7€/etto', allergens:[6] },
  { cat:'carni', name:'Striploin "Controfiletto" Prussiana', desc:'Taglio minimo 400gr', price:'9€/etto', allergens:[1] },
  { cat:'carni', name:'Tomahawk Prussiano', desc:'Costata con osso lungo. Porzione media 1.2kg', price:'8€/etto', allergens:[1] },
  { cat:'carni', name:"Rossini d'Inverno", desc:'Letto di friarielli saltati secondo la tradizione napoletana, filetto selezione Veniu, porcino saltato in padella, demi-glace al tartufo nero', price:'14€/etto', allergens:[1,6,9], isNew:true },

  // ── IBERICA ───────────────────────────────────────────
  { cat:'iberica', name:'T-Bone Iberica', desc:"Il massimo dell'esperienza Iberica in un solo piatto. Da un lato la tenerezza del filetto, dall'altro la struttura e il sapore del controfiletto, uniti dall'osso che amplifica gusto e succosità.", price:'10€/etto', allergens:[1] },
  { cat:'iberica', name:'Costata Iberica', desc:'Taglio iconico per marezzatura e intensità aromatica. Succosa e morbida, con una persistenza di gusto che richiama note di nocciola e burro caldo.', price:'10€/etto', allergens:[1] },
  { cat:'iberica', name:'Filetto Iberico', desc:"Il taglio più nobile dell'Iberica. Estremamente tenero, dalla fibra fine e dalla succosità naturale. Porzione 300/400gr", price:'13€/etto', allergens:[1] },

  // ── DEGUSTAZIONE ──────────────────────────────────────
  { cat:'degustazione', name:'Menu Degustazione', desc:'T-Bone 1.5kg Prussiana "Red Krowa" Polonia (o Tomahawk 1.5kg) · Entrecôte 300gr Black Angus · Salsiccia a punta di coltello 300gr · Patate al forno · Verdure grigliate. Consigliato per 3 persone. In base alla disponibilità.', price:120, allergens:[1,6,7] },

  // ── PANINI & BURGER ───────────────────────────────────
  { cat:'panini', name:'Bao Texano', desc:'Brisket di manzo cotto low & slow con rub speziato e affumicatura leggera, salsa BBQ al bourbon, cipolla caramellata, insalata di cavolo e fili di peperoncino rosso', beer:'Birra consigliata: Brooklyn East IPA', price:16, allergens:[1,6,7] },
  { cat:'panini', name:'Black Luxury Truffle', desc:'Bun al carbone vegetale, hamburger di manzo Angus, crema di tartufo nero, fonduta di taleggio, funghi porcini saltati, rucola e glassa al balsamico', beer:'Birra consigliata: Grimbergen Double Ambrée', price:18, allergens:[1,6,7] },
  { cat:'panini', name:'Smash Veniu', desc:'Doppio smash burger, cuore di parmigiana secondo Veniu, provola affumicata, stracciata di bufala e crema di basilico homemade', beer:'Birra consigliata: Carlsberg Special Brew', price:16, allergens:[1,6,7] },
  { cat:'panini', name:'Bismark', desc:'Hamburger, patate al forno aromatizzate al rosmarino, uova occhio di bue, bacon croccante, fonduta di parmigiano e cipolla croccante', beer:'Birra consigliata: Carlsberg Special Brew', price:15, allergens:[1,3,6,7] },
  { cat:'panini', name:'Classic Burger', desc:'Hamburger 200gr selezione Veniu, insalata riccia, pomodori, mayo, ketchup', beer:'Birra consigliata: Carlsberg Pilsner', price:9, allergens:[1,6,7] },
  { cat:'panini', name:'Classic Burger 2.0', desc:'Hamburger 200gr, provola, pomodori semi dry, insalata riccia, crema di parmigiano reggiano 24 mesi', beer:'Birra consigliata: Carlsberg Special Brew', price:10, allergens:[1,6,7] },
  { cat:'panini', name:'Tentazione Americana', desc:'Hamburger 200gr, bacon, fonduta cheddar', beer:'Birra consigliata: Carlsberg Special Brew', price:12, allergens:[1,6,7] },
  { cat:'panini', name:'Inebriante', desc:'Hamburger 200gr, provola di Agerola, pancetta arrotolata al pepe, cipolla rossa caramellata, crema di pomodorini', beer:'Birra consigliata: Brooklyn East IPA', price:12, allergens:[1,6,7] },
  { cat:'panini', name:'Tentazione Americana 2.0', desc:'Doppio hamburger 200gr, doppio bacon, doppio cheddar', beer:'Birra consigliata: Carlsberg Special Brew', price:15, allergens:[1,6] },
  { cat:'panini', name:'Scrocchiato 2.0', desc:'Hamburger 200gr, provola di Agerola, patate al forno, salsa Veniu', beer:'Birra consigliata: Carlsberg Special Brew', price:11, allergens:[1,6] },
  { cat:'panini', name:'Pistacchioso', desc:'Hamburger 200gr, provola di Agerola, mortadella di Bologna IGP, crema di pistacchio', beer:'Birra consigliata: Carlsberg Special Brew', price:12, allergens:[1,6,7] },
  { cat:'panini', name:'Nduja', desc:"Hamburger 200gr, provola di Agerola, spianata piccante, crema 'nduja, melanzane a funghetto", beer:'Birra consigliata: Brooklyn East IPA', price:13, allergens:[1,6] },
  { cat:'panini', name:'Gusto Crunch', desc:'Pollo fritto con impanatura panko, provola di Agerola, insalata riccia, mayo al pepe nero, zest di lime', beer:'Birra consigliata: Carlsberg Pilsner', price:13, allergens:[1,6] },
  { cat:'panini', name:'Veniu', desc:'Pan pizza, hamburger di Angus, patate al forno, provola impanata, pesto di basilico, crema di pomodorini', beer:'Birra consigliata: Carlsberg Special Brew', price:15, allergens:[1,6] },
  { cat:'panini', name:'Affumicato BBQ', desc:'Pulled pork, insalata coleslaw, bacon, cheddar, salsa BBQ smoked. Servito in campana con affumicatura', beer:'Birra consigliata: Grimbergen Double Ambrée', price:16, allergens:[1,6] },
  { cat:'panini', name:'Vegusto', desc:'Hamburger vegetariano, provola, lattuga, cipolla caramellata, mayo al pepe cuvè', beer:'Birra consigliata: Carlsberg Pilsner', price:10, allergens:[1,3,6] },
  { cat:'panini', name:'Crock Angus', desc:'Hamburger 200gr Black Angus Italia, provola di bufala, crocchè homemade, pancetta affumicata croccante, fonduta di cheddar homemade', beer:'Birra consigliata: Grimbergen Double Ambrée', price:15, allergens:[1,6] },
  { cat:'panini', name:'Gloriosa', desc:'Polpetta napoletana fritta di Angus 200gr, parmigiana di melanzane homemade, provola di bufala, crema di pomodorini cotti al forno a legna, maionese al basilico', beer:'Birra consigliata: Carlsberg Special Brew', price:15, allergens:[1,6,7] },
  { cat:'panini', name:'Pork 2.0', desc:"Bun hot dog, porchetta D'Alterio, provola, patate al forno, cipolla in doppia consistenza e crema di parmigiano", beer:'Birra consigliata: Brooklyn East IPA', price:14, allergens:[1,6] },
  { cat:'panini', name:'Chili Crunch Burger', desc:'Hamburger di manzo, chili di manzo, cheddar, cipolla crispy', beer:'Birra consigliata: Brooklyn East IPA', price:15, allergens:[1,6], isNew:true },
  { cat:'panini', name:'Veniu 2.0', desc:'Bun al carbone, hamburger Wagyu, provola fritta impanata al panko, patate al forno, crema di Parmigiano Reggiano', beer:'Birra consigliata: Carlsberg Pilsner', price:20, allergens:[1,3,6], isNew:true },

  // ── PIZZE ─────────────────────────────────────────────
  { cat:'pizze', name:'Margherita', desc:"Pomodoro San Marzano D.O.C.G., fior di latte di Agerola, basilico, olio extra d'oliva I.G.P.", beer:'Birra consigliata: Carlsberg Pilsner', price:6, allergens:[1,6] },
  { cat:'pizze', name:'Marinara', desc:"Pomodoro San Marzano D.O.C.G., origano di montagna, olive di Itri, capperi di Salina, aglio, filetti di alici di Cetara, basilico, olio extra d'oliva I.G.P.", beer:'Birra consigliata: Carlsberg Pilsner', price:8, allergens:[1,4] },
  { cat:'pizze', name:'Napoli', desc:"Pomodoro San Marzano D.O.C.G., origano di montagna, aglio, basilico, olio extra d'oliva I.G.P.", beer:'Birra consigliata: Carlsberg Pilsner', price:5, allergens:[1] },
  { cat:'pizze', name:'Bufalina', desc:"Pomodoro San Marzano D.O.C.G., mozzarella di bufala fresca 100% latte campano, basilico, olio extra d'oliva I.G.P.", beer:'Birra consigliata: Carlsberg Pilsner', price:10, allergens:[1,6] },
  { cat:'pizze', name:'Diavola', desc:"Fior di latte di Agerola, salame piccante, basilico, olio evo I.G.P.", beer:'Birra consigliata: Carlsberg Special Brew', price:8, allergens:[1,6] },
  { cat:'pizze', name:'Capricciosa Rossa', desc:"Pomodoro San Marzano D.O.C.G., fior di latte di Agerola, prosciutto cotto, funghi porcini saltati in padella, olive di Itri, carciofi alla romana, basilico, olio extra d'oliva I.G.P.", beer:'Birra consigliata: Carlsberg Special Brew', price:12, allergens:[1,6] },
  { cat:'pizze', name:'Provola e Pepe', desc:"Pomodoro San Marzano D.O.C.G., provola di Agerola, pepe, scaglie di parmigiano reggiano (stagionatura 20 mesi), olio extra d'oliva I.G.P.", beer:'Birra consigliata: Brooklyn East IPA', price:8, allergens:[1,6] },
  { cat:'pizze', name:'Ortolana', desc:'Mozzarella di bufala campana DOP, verdure di stagione grigliate (zucchine, melanzane, peperoni), olio evo IGP, basilico', beer:'Birra consigliata: Carlsberg Pilsner', price:10, allergens:[1,6,9] },
  { cat:'pizze', name:'Ripieno al Forno', desc:'Salame Napoli, provola di Agerola, ricotta di bufala, pepe nero', beer:'Birra consigliata: Carlsberg Special Brew', price:9, allergens:[1,3,6] },
  { cat:'pizze', name:'Primavera', desc:"Fior di latte di Agerola, prosciutto crudo stagionato 20 mesi, pomodorini ciliegini, rucola, scaglie di parmigiano reggiano (stagionatura minima 20 mesi), olio extra d'oliva I.G.P.", beer:'Birra consigliata: Carlsberg Pilsner', price:11, allergens:[1,6] },
  { cat:'pizze', name:'La Bronte', desc:"Fior di latte di Agerola, mortadella Bologna I.G.P., pesto di pistacchio di Sicilia, basilico, olio extra d'oliva I.G.P.", beer:'Birra consigliata: Carlsberg Pilsner', price:12, allergens:[1,6,7] },
  { cat:'pizze', name:'La Gustosa', desc:"Fior di latte di Agerola, salsiccia di maialino nero casertano a punta di coltello, patate al forno, olio extra d'oliva I.G.P.", beer:'Birra consigliata: Carlsberg Special Brew', price:10, allergens:[1,6] },
  { cat:'pizze', name:'Würstel e Patate', desc:"Fior di latte di Agerola, wurstel, patatine fritte, olio extra d'oliva I.G.P.", beer:'Birra consigliata: Carlsberg Pilsner', price:10, allergens:[1,6] },
  { cat:'pizze', name:'Ripieno Fritto', desc:"Provola di Agerola, ricotta di fuscella, cicoli, pepe, olio extra d'oliva I.G.P.", beer:'Birra consigliata: Carlsberg Special Brew', price:10, allergens:[1,6] },
  { cat:'pizze', name:'Filetto', desc:"Provola di Agerola, pomodorini ciliegini, pepe, basilico, olio extra d'oliva I.G.P.", beer:'Birra consigliata: Carlsberg Pilsner', price:8, allergens:[1,6] },
  { cat:'pizze', name:'La Norma', desc:"Pomodoro San Marzano D.O.C.G., fior di latte di Agerola, melanzane a funghetto, basilico, olio extra d'oliva I.G.P.", beer:'Birra consigliata: Carlsberg Special Brew', price:8, allergens:[1,6] },
  { cat:'pizze', name:'Estiva', desc:"Crema di melanzane homemade, fior di latte di Agerola, prosciutto crudo stagionato 20 mesi, burrata pugliese I.G.P., chips di melanzane croccanti, basilico, olio extra d'oliva I.G.P.", beer:'Birra consigliata: Carlsberg Pilsner', price:12, allergens:[1,6] },
  { cat:'pizze', name:'Margherita 2.0', desc:"Pesto di basilico, fior di latte di Agerola, pomodorini semi dried gialli e rossi, basilico cristallizzato, olio extra d'oliva I.G.P.", beer:'Birra consigliata: Carlsberg Pilsner', price:10, allergens:[1,6] },
  { cat:'pizze', name:'Fiocco', desc:'Fior di latte, panna, crocchè, prosciutto cotto, formaggio, pepe', beer:'Birra consigliata: Brooklyn East IPA', price:10, allergens:[1,6] },
  { cat:'pizze', name:'Nerano', desc:'Fior di latte di Agerola, chips di zucchine, pancetta croccante, Provolone del Monaco, pepe, basilico fresco, olio evo D.O.P.', beer:'Birra consigliata: Brooklyn East IPA', price:12, allergens:[1,6] },
  { cat:'pizze', name:'La Genovese', desc:"Genovese, fior di latte di Agerola, crema di parmigiano, basilico, olio extravergine d'oliva", beer:'Birra consigliata: Brooklyn East IPA', price:13, allergens:[1,6] },
  { cat:'pizze', name:'Porchetta 2.0', desc:"Provola di Agerola I.G.P., porchetta di Ariccia croccante, patate al forno aromatizzate, fonduta di cheddar homemade", beer:'Birra consigliata: Brooklyn East IPA', price:13, allergens:[1,6,7,9] },
  { cat:'pizze', name:'Salsiccia e Friarielli', desc:'Salsiccia di maialino nero casertano a punta di coltello, friarielli alla napoletana, provola di Agerola, olio EVO IGP', beer:'Birra consigliata: Carlsberg Special Brew', price:10, allergens:[1,6,9] },
  { cat:'pizze', name:'La Sfilacciata', desc:'Fior di latte di Agerola, maialino sfilacciato a lenta cottura con salsa BBQ, chips di patate homemade, olio EVO affumicato e zest di limone', beer:'Birra consigliata: Brooklyn East IPA', price:15, allergens:[1,6], isNew:true },
  { cat:'pizze', name:'Veniu Signature', desc:"Fior di latte di Agerola, fonduta di Parmigiano Reggiano, carpaccio di Black Angus all'uscita, rucola, pomodorini confit gialli e rossi, croccante di nocciole", beer:'Birra consigliata: Brooklyn East IPA', price:18, allergens:[1,6,7], isNew:true },
  { cat:'pizze', name:'Mexico', desc:'Chili di manzo cotto lentamente, fior di latte, cheddar e cipolla crispy', beer:'Birra consigliata: Brooklyn East IPA', price:15, allergens:[1,6], isNew:true },

  // ── PIZZE A RUOTA DI CARRO ────────────────────────────
  { cat:'pizze-ruota', name:'Margherita', desc:'Pomodoro San Marzano D.O.C.G., fior di latte, basilico fresco, olio EVO', price:10, allergens:[1,6] },
  { cat:'pizze-ruota', name:'Napoletana', desc:'Pomodoro San Marzano D.O.C.G., aglio, origano selvatico, olio EVO', price:9, allergens:[1,6] },
  { cat:'pizze-ruota', name:'Provola e Pepe', desc:'Provola affumicata dei Monti Lattari, pomodoro San Marzano D.O.C.G., pepe nero macinato fresco, olio EVO', price:10, allergens:[1,6] },

  // ── DOLCI ─────────────────────────────────────────────
  { cat:'dolci', name:'Sweet Fries Nutella', desc:'Patate americane dolci con Nutella e zucchero a velo', price:7, allergens:[1,6,7,8] },
  { cat:'dolci', name:'Pizza Nutella', desc:'Pizza con Nutella e granelle di nocciole', price:10, allergens:[1,6,7,8] },
  { cat:'dolci', name:'Pizza Babà', desc:'Base Nutella, babà artigianale tagliato in quattro, zucchero a velo, granella di nocciola', price:15, allergens:[1,3,6,7], isNew:true },
  { cat:'dolci', name:'Tentazione Nera', desc:'Bun dolce artigianale caldo con cuore alla Nutella, doppia colata di Nutella, glassa al cioccolato e spolverata di zucchero a velo', price:8, allergens:[1,6,7,8], isNew:true },
  { cat:'dolci', name:'Roccobabà', desc:'Babà classico napoletano, semifreddo alla vaniglia, glassa al cioccolato al latte, decorazione in panna', price:6, allergens:[1,3,6,7] },
  { cat:'dolci', name:'Cocco e Gianduia', desc:'Frolla alla mandorla, gianduia, bavarese al cocco, glassa di puro cioccolato al latte', price:6, allergens:[1,3,6,7,8] },
  { cat:'dolci', name:'Tiramisù 2.0', desc:'Pan di spagna al cacao bagnato al caffè, semifreddo al mascarpone, crema leggera al caffè', price:6, allergens:[1,3,6] },
  { cat:'dolci', name:'Cheesecake', desc:'Caramello · Frutti di bosco', price:6, allergens:[1,3,6] },
  { cat:'dolci', name:'Delizia al Limone', desc:null, price:6, allergens:[1,3,6,11] },

  // ── BIRRE ─────────────────────────────────────────────
  { cat:'birre', name:'Carlsberg Pilsner', desc:"Pilsner chiara, equilibrata e beverina — 5% alc.", price:'0.25L €4,5 · 0.50L €6,5', allergens:[1] },
  { cat:'birre', name:'Carlsberg Special Brew', desc:"Strong Lager di solo malto d'orzo, corposa con note alcoliche e fruttata — 9% alc.", price:'0.50L €7', allergens:[1] },
  { cat:'birre', name:'Grimbergen Double Ambrée', desc:"Birra d'abbazia ambrata, corposa con note maltate e fruttate — 6,5% alc.", price:'0.25L €4,5 · 0.50L €7,5', allergens:[1] },
  { cat:'birre', name:'Brooklyn East IPA', desc:'India Pale Ale, intensa e corposa, con note fruttate e resinose — 6,9% alc.', price:'0.25L €6 · 0.40L €8', allergens:[1] },
  { cat:'birre', name:'Poretti 4 Luppoli Zero', desc:'Lager analcolica, leggera e profumata — 0,5% alc.', price:'0.33L €4,5', allergens:[1] },
  { cat:'birre', name:'Poretti 4 Luppoli Senza Glutine', desc:'Lager senza glutine, equilibrata e profumata — 4,8% alc.', price:'0.33L €4,5', allergens:[] },
  { cat:'birre', name:'Krombacher Weizen', desc:'Birra di frumento, fresca e leggermente fruttata — 5,3% alc.', price:'0.5L €6,5', allergens:[1] },

  // ── BIBITE ────────────────────────────────────────────
  { cat:'bibite', name:'Acqua Naturale', desc:null, price:'€2,5', allergens:[] },
  { cat:'bibite', name:'Acqua Frizzante', desc:null, price:'€2,5', allergens:[] },
  { cat:'bibite', name:'Coca Cola', desc:null, price:'€3', allergens:[] },
  { cat:'bibite', name:'Coca Cola Zero', desc:null, price:'€3', allergens:[] },
  { cat:'bibite', name:'Fanta', desc:null, price:'€3', allergens:[] },
  { cat:'bibite', name:'Sprite', desc:null, price:'€3', allergens:[] },

  // ── DIGESTIVI ─────────────────────────────────────────
  { cat:'digestivi', name:'Amaro del Capo', desc:null, price:'€3', allergens:[] },
  { cat:'digestivi', name:'Unicum', desc:null, price:'€3', allergens:[] },
  { cat:'digestivi', name:'Limoncello', desc:null, price:'€2,5', allergens:[11] },
  { cat:'digestivi', name:'Meloncello', desc:null, price:'€2,5', allergens:[] },
  { cat:'digestivi', name:'Jagermeister', desc:null, price:'€3', allergens:[] },
  { cat:'digestivi', name:'Grappa Villa De Varda', desc:null, price:'€4', allergens:[] },
  { cat:'digestivi', name:'Grappa Barricata', desc:null, price:'€6', allergens:[] },
  { cat:'digestivi', name:'Amaro di Luppolo', desc:null, price:'€4', allergens:[] },
  { cat:'digestivi', name:"Meyer's Bitter", desc:null, price:'€3', allergens:[] },
  { cat:'digestivi', name:'Cognac', desc:null, price:'€5,5', allergens:[] },
  { cat:'digestivi', name:'Caffè', desc:null, price:'€1', allergens:[] },
];

// ─── Rendering (menu.html only) ───────────────────────────────────
if (document.getElementById('menu-body')) {
  // ── State ──────────────────────────────────────────────
  let activeCat = 'all';
  let activeAllergens = new Set();

  // ── Helpers ────────────────────────────────────────────
  function formatPrice(p) {
    if (typeof p === 'number') {
      return { main: p % 1 === 0 ? p + '€' : p.toFixed(2).replace('.', ',') + '€', unit: null };
    }
    if (p.includes('/etto')) return { main: p.replace('/etto',''), unit: '/etto' };
    return { main: p, unit: null };
  }

  function buildCard(item) {
    const div = document.createElement('div');
    div.className = 'item-card';
    div.dataset.cat = item.cat;
    div.dataset.allergens = JSON.stringify(item.allergens || []);

    const { main, unit } = formatPrice(item.price);

    const badges = [];
    if (item.isNew) badges.push('<span class="badge-new">Novità</span>');
    if (item.cat === 'special') badges.push('<span class="badge-special">Special</span>');

    const allergenTags = (item.allergens || []).map(n =>
      `<span class="allergen-tag" data-num="${n}" title="${ALLERGEN_NAMES[n]}">${n}</span>`
    ).join('');

    div.innerHTML = `
      <div class="item-top">
        <div class="item-name">${item.name}</div>
        <div class="item-price">
          ${main}
          ${unit ? `<span class="unit">${unit}</span>` : ''}
        </div>
      </div>
      ${item.desc ? `<div class="item-desc">${item.desc}</div>` : ''}
      ${item.beer ? `<div class="item-beer">${item.beer}</div>` : ''}
      <div class="item-footer">
        <div class="item-allergens">${allergenTags}</div>
        <div style="display:flex;gap:6px;flex-wrap:wrap">${badges.join('')}</div>
      </div>
    `;
    return div;
  }

  function buildSection(cat) {
    const section = document.createElement('section');
    section.className = 'menu-category';
    section.dataset.cat = cat.id;

    const items = ITEMS.filter(i => i.cat === cat.id);
    const header = document.createElement('div');
    header.className = 'cat-header';
    header.innerHTML = `
      <h2 class="display" id="cat-${cat.id}">${cat.label}</h2>
      <span class="cat-count" data-count-for="${cat.id}">${items.length} piatti</span>
    `;
    section.appendChild(header);

    const grid = document.createElement('div');
    grid.className = 'items-grid';
    items.forEach(item => grid.appendChild(buildCard(item)));
    section.appendChild(grid);
    return section;
  }

  // ── Init DOM ───────────────────────────────────────────
  const bodyEl = document.getElementById('menu-body');
  const wrap = bodyEl.querySelector('.wrap');
  const noResults = document.getElementById('no-results');

  CATEGORIES.forEach(cat => {
    if (ITEMS.some(i => i.cat === cat.id)) {
      wrap.appendChild(buildSection(cat));
    }
  });

  const legend = document.createElement('div');
  legend.className = 'allergen-legend';
  legend.innerHTML = `
    <h3>Legenda allergeni</h3>
    <div class="legend-grid">
      ${Object.entries(ALLERGEN_NAMES).map(([k,v]) =>
        `<div class="legend-item"><strong>${k}</strong> — ${v}</div>`
      ).join('')}
    </div>
  `;
  wrap.appendChild(legend);

  // ── Filter logic ────────────────────────────────────────
  function applyFilters() {
    const sections = wrap.querySelectorAll('.menu-category');
    let anyVisible = false;

    sections.forEach(section => {
      const cat = section.dataset.cat;
      const catMatch = activeCat === 'all' || activeCat === cat;

      if (!catMatch) { section.style.display = 'none'; return; }
      section.style.display = '';

      const cards = section.querySelectorAll('.item-card');
      let sectionVisible = 0;
      cards.forEach(card => {
        const allergens = JSON.parse(card.dataset.allergens);
        const hasConflict = [...activeAllergens].some(a => allergens.includes(Number(a)));
        if (hasConflict) {
          card.classList.add('hidden');
        } else {
          card.classList.remove('hidden');
          sectionVisible++;
        }
      });

      const countEl = section.querySelector('[data-count-for]');
      if (countEl) countEl.textContent = sectionVisible + (sectionVisible === 1 ? ' piatto' : ' piatti');

      if (sectionVisible === 0) {
        section.style.display = 'none';
      } else {
        anyVisible = true;
      }

      section.querySelectorAll('.allergen-tag').forEach(tag => {
        tag.classList.toggle('flagged', activeAllergens.has(tag.dataset.num));
      });
    });

    noResults.style.display = anyVisible ? 'none' : 'block';
  }

  // ── Category tabs ────────────────────────────────────────
  document.getElementById('cat-tabs').addEventListener('click', e => {
    const tab = e.target.closest('.cat-tab');
    if (!tab) return;
    document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    activeCat = tab.dataset.cat;
    applyFilters();
    if (activeCat !== 'all') {
      const target = document.getElementById('cat-' + activeCat);
      if (target) {
        const offset = target.getBoundingClientRect().top + window.scrollY - 160;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    }
  });

  // ── Allergen chips ────────────────────────────────────────
  document.getElementById('allergy-chips').addEventListener('click', e => {
    const chip = e.target.closest('.allergy-chip');
    if (!chip) return;
    const a = chip.dataset.allergen;
    if (activeAllergens.has(a)) {
      activeAllergens.delete(a);
      chip.classList.remove('active');
    } else {
      activeAllergens.add(a);
      chip.classList.add('active');
    }
    applyFilters();
  });

  applyFilters();

  // ── Scroll reveal ──────────────────────────────────────────
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}
