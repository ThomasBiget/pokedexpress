const pokedex = [
    {
        index: "001",	
        name: "Bulbizarre",	
        type: "Plante-Poison. C'est un des starters dans la région Kanto, avec Salamèche et Carapuce.",
    },
    {
        index: "002",	
        name: "Herbizarre",	
        type: "Plante-Poison. Première évolution de Bulbizarre.",
    },
    {
        index: "003",	
        name: "Florizarre",	
        type: "Plante-Poison. Dernière évolution de Bulbizarre.",
    },
    {
        index:"004",	
        name:"Salamèche",	
        type:"Feu. C'est un des starters de la région Kanto, avec Bulbizarre et Carapuce.",
    },
    {
        index: "005",	
        name: "Reptincel",	
        type: "Feu. Première évolution de Salamèche.",
    },
    {
        index: "006",	
        name: "Dracaufeu",	
        type: "Feu-Vol. Dernière évolution de Salamèche.",
    },
    {
        index: "007",
        name: "Carapuce",	
        type: "Eau. C'est un des starters de Kanto, avec Salamèche et Bulbizarre.",
    },
    {
        index: "008",
        name: "Carabaffe",	
        type: "Eau. Première évolution de Carapuce.",
    },
    {
        index: "009",	
        name:"Tortank",	
        type:"Eau. Dernière évolution de Carapuce.",
    },
    {
        index: "010",	
        name: "Chenipan",	
        type: "Insecte.",
    },
    {
        index:"011",	
        name:"Chrysacier",	
        type:"Insecte. Première évolution de Chenipan.",
    },
    {
        index:"012",	
        name: "Papilusion",	
        type: "Insecte-Vol. Dernière évolution de Chenipan.",
    },
    {
        index:"013",
        name:"Aspicot",	
        type:"Insecte-Poison.",
    },
    {
        index:"014",	
        name:"Coconfort",	
        type:"Insecte-Poison. Première évolution d'Aspicot.",
    },
    {
        index:"015",	
        name:"Dardargnan",
    	type:"Insecte-Poison. Dernière évolution d'Aspicot.",
    },
    {
        index:"016",	
        name:"Roucool",	
        type:"Normal-Vol.",
    },
    {
        index:"017",	
        name:"Roucoups",	
        type:"Normal-Vol. Première évolution de Roucool.",
    },
    {
        index:"018",	
        name:"Roucarnage",	
        type:"Normal-Vol. Dernière évolution de Roucool.",
    },
    {
        index:"019",
        name:"Rattata",	
        type:"Normal.",
    },
    {
        index:"020",	
        name:"Rattatac",	
        type:"Normal. Évolution de Rattata.",
    },
    {
        index:"021",	
        name:"Piafabec",	
        type:"Normal-Vol.",
    },
    {
        index:"022",	
        name:"Rapasdepic",	
        type:"Normal-Vol. Évolution de Rapasdepic.",
    },
    {
        index:"023",	
        name:"Abo",	
        type:"Poison.",
    },
    {
        index:"024",	
        name:"Arbok",	
        type:"Poison. Évolution d'Abo.",
    },
    {
        index:"025",	
        name: "Pikachu",	
        type: "Électrique. Le Pokémon le plus connu à cause de à son implication dans le dessin animé",
    },
    {
        index:"026",	
        name:"Raichu",	
        type:"Électrique. Évolution de Pikachu.",
    },
    {
        index:"027",
        name:"Sabelette",	
        type:"Sol.",
    },
    {
        index:"028",	
        name:"Sablaireau",	
        type:"Sol. Évolution de Sabelette.",
    },
    {
        index:"029",	
        name:"Nidoran♀",	
        type:"Poison. Malgré sa ressemblance avec son alter ego Nidoran♂, ces deux Pokémon sont de deux espèces différentes selon le Pokédex.",
    },
    {
        index:"030",
        name:"Nidorina",	
        type:"Poison. Première évolution de Nidoran♀.",
    },
    {
        index:"031",	
        name:"Nidoqueen",
        type:"Poison. Dernière évolution de Nidoran♀.",
    },
    {
        index:"032",
        name:"Nidoran♂",	
        type:"Poison. Malgré sa ressemblance avec son alter ego Nidoran♀, ces deux Pokémon sont deux espèces différentes selon le Pokédex.",
    },
    {
        index:"033",	
        name: "Nidorino",	
        type: "Poison. Première évolution de Nidoran♂.",
    },
    {
        index:"034",	
        name:"Nidoking",	
        type:"Poison. Dernière évolution de Nidoran♂.",
    },
    {
        index:"035",	
        name:"Mélofée",	
        type:"Fée (Normal avant la sixième génération).",
    },
    {
        index:"036",	
        name:"Mélodelfe",	
        type:"Fée (Normal avant la sixième génération). Évolution de Mélofée.",
    },
    {
        index:"037",	
        name:"Goupix",	
        type:"Feu.",
    },
    {
        index:"038",	
        name:"Feunard",	
        type:"Feu. Évolution de Goupix.",
    },
    {
        index:"039",	
        name:"Rondoudou",	
        type:"Normal-Fée (seulement Normal avant la sixième génération).",
    },
    { 
        index:"040",	
        name:"Grodoudou",	
        type:"Normal-Fée (seulement Normal avant la sixième génération). Évolution de Rondoudou.",
    },
    {
        index:"041",	
        name:"Nosferapti",	
        type:"Vol-Poison.",
    },
    {
        index:"042",	
        name:"Nosferalto",	
        type:"Vol-Poison.",
    },
    {
        index:"043",	
        name:"Mystherbe",	
        type:"Plante-Poison.",
    },
    {
        index:"044",	
        name:"Ortide",	
        type:"Plante-Poison. Première évolution de Mystherbe.",
    },
    {
        index:"045",	
        name:"Rafflesia",	
        type:"Plante-Poison. Dernière évolution de Mystherbe (Utilisation d'une Pierre Plante sur Ortide)",
    },
    {
        index:"046",	
        name:"Paras",	
        type:"Insecte-Plante.",
    },
    {
        index:"047",	
        name:"Parasect",	
        type:"Insecte-Plante. Évolution de Paras.",
    },
    {
        index:"048",	
        name:"Mimitoss",	
        type:"Insecte-Poison.",
    },
    {
        index:"049",	
        name:"Aéromite",	
        type:"Insecte-Poison. Évolution de Mimitoss.",
    },
    {
        index:"050",	
        name:"Taupiqueur",	
        type:"Sol.",
    },
    {
        index:"051",	
        name:"Triopikeur",	
        type:"Sol. Évolution de Taupiqueur.",
    },
    {
        index:"052",	
        name:"Miaouss",	
        type:"Normal. Pokémon connu à cause de son implication dans le dessin animé (membre du Trio Rocket).",
    },
    {
        index:"053",	
        name:"Persian",	
        type:"Normal. Évolution de Miaouss.",
    },
    {
        index:"054",	
        name:"Psykokwak",	
        type:"Eau.",
    },
    {
        index:"055",	
        name:"Akwakwak",	
        type:"Eau. Évolution de Psykokwak.",
    },
    {
        index:"056",	
        name:"Férosinge",	
        type:"Combat.",
    },
    {
        index:"057",	
        name:"Colossinge",	
        type:"Combat. Évolution de Férosinge.",
    },
    {
        index:"058",	
        name:"Caninos",	
        type:"Feu.",
    },
    {
        index:"059",	
        name:"Arcanin",	
        type:"Feu. Évolution d'Arcanin.",
    },
    {
        index:"060",	
        name:"Ptitard",	
        type:"Eau.",
    },
    {
        index:"061",	
        name:"Têtarte",	
        type:"Eau. Première évolution de Ptitard.",
    },
    {
        index:"062",	
        name:"Tartard",	
        type:"Eau. Dernière évolution de Ptitard (Utilisation d'une Pierre Eau sur Têtarte).",
    },
    {
        index:"063",	
        name:"Abra",	
        type:"Psy.",
    },
    {
        index:"064",	
        name:"Kadabra",	
        type:"Psy. Première évolution d'Abra.",
    },
    {
        index:"065",	
        name:"Alakazam",	
        type:"Psy. Dernière évolution d'Abra.",
    },
    {
        index:"066",
        name:"Machoc",	
        type:"Combat.",
    },
    {
        index:"067",
        name:"Machopeur",	
        type:"Combat. Première évolution de Machoc,",
    },
    {
        index:"068",	
        name:"Mackogneur",	
        type:"Combat. Dernière évolution de Machoc.",
    },
    {
        index:"069",	
        name:"Chétiflor",	
        type:"Plante.",
    },
    {
        index:"070",	
        name:"Boustiflor",	
        type:"Plante. Première évolution de Chétiflor.",
    },
    {
        index:"071",	
        name:"Empiflor",	
        type:"Plante. Dernière évolution de Chétiflor.",
    },
    {
        index:"072",	
        name:"Tentacool",	
        type:"Eau-Poison.",
    },
    {
        index:"073",	
        name:"Tentacruel",	
        type:"Eau-Poison. ÉvolutIon de Tentacool.",
    },
    {
        index:"074",	
        name:"Racaillou",	
        type:"Sol-Roche.",
    },
    {
        index:"075",	
        name:"Gravalanch",	
        type:"Sol-Roche. Première évolution de Racaillou.",
    },
    {
        index:"076",	
        name:"Grolem",	
        type:"Sol-Roche. Dernière évolution de Racaillou.",
    },
    {
        index:"077",	
        name:"Ponyta",	
        type:"Feu.",
    },
    {
        index:"078",	
        name:"Galopa",	
        type:"Feu. Évolution de Ponyta.",
    },
    {
        index:"079",	
        name:"Ramoloss",	
        type:"Eau-Psy.",
    },
    {
        index:"080",	
        name:"Flagadoss",	
        type:"Eau-Psy. Évolution de Ramoloss.",
    },
    {
        index:"081",	
        name:"Magnéti",	
        type:"Électrique-Acier (Seulement Électrique dans la première génération)",
    },
    {
        index:"082",	
        name:"Magneton",
        type:"Électrique-Acier. Évolution de Magnéti.",
    },
    {
        index:"083",	
        name:"Canarticho",	
        type:"Normal-Vol.",
    },
    {
        index:"084",	
        name:"Doduo",	
        type:"Normal-Vol.",
    },
    {
        index:"085",	
        name:"Dodrio	",
        type:"Normal-Vol. Évolution de Dodrio.",
    },
    {
        index:"086",	
        name:"Otaria",
        type:"Eau.",
    },
    {
        index:"087",	
        name:"Lamantine",	
        type:"Eau-Glace. Évolution d'Otaria.",
    },
    {
        index:"088",	
        name:"Tadmorv",	
        type:"Poison.",
    },
    {
        index:"089",
        name:"Grotadmorv	",
        type:"Poisom. Évolution de Tadmorv.",
    },
    {
        index:"090",	
        name:"Kokiyas",	
        type:"Eau.",
    },
    {
        index:"091",	
        name:"Crustabri",	
        type:"Eau-Glace. Évolution de Kokiyas.",
    },
    {
        index:"092",	
        name:"Fantominus	",
        type:"Spectre-Poison.",
    },
    {
        index: "093",	
        name:"Spectrum",	
        type:"Spectre-Poison. Première évolution de Fantominus.",
    },
    {
        index:"094",	
        name:"Ectoplasma	",
        type:"Spectre-Poison. Dernière évolution de Spectrum.",
    },
    {
        index:"095",	
        name:"Onix",	
        type:"Sol-Roche.",
    },
    {
        index:"096",
        name:"Soporifik",	
        type:"Psy.",
    },
    {
        index:"097",	
        name:"Hypnomade",	
        type:"Psy. Évolution de Soporifik.",
    },
    {
        index:"098",	
        name:"Krabby",
        type:"Eau.",
    },
    {
        index:"099",	
        name:"Krabboss",	
        type:"Eau. Évolutiom de Krabby.",
    },
    {
        index:"100",	
        name:"Voltorbe",	
        type:"Électrique.",
    },
    {
        index:"101",	
        name:"Électrode",	
        type:"Électrique. Évolution de Voltorbe.",
    },
    {
        index:"102",	
        name:"Noeunoeuf",	
        type:"Plante-Psy.",
    },
    {
        index:"103",	
        name:"Noadkoko	",
        type:"Plante-Psy. Évolution de Noeunoeuf.",
    },
    {
        index:"104",	
        name:"Osselait",	
        type:"Sol.",
    },
    {
        index:"105",	
        name:"Ossatueur",	
        type:"Sol. Évolution d'Osselait.",
    },
    {
        index:"106",	
        name:"Kicklee",	
        type:"Combat. Kikclee et Tygnon n'ont aucun lien de parenté dans la première génération, et sont tous deux sans évolution.",
    },
    {
        index:"107",
        name:"Tygnon",
        type:"Combat. Kikclee et Tygnon n'ont aucun lien de parenté dans la première génération, et sont tous deux sans évolution.",
    },
    {
        index:"108",	
        name:"Excelangue",	
        type:"Normal. N'avait pas d'évolution dans la première génération (son évolution est apparue dans la quatrième génération).",
    },
    {
        index:"109",	
        name:"Smogo",	
        type:"Poison.",
    },
    {
        index:"110",	
        name:"Smogogo",	
        type:"Poison.",
    },
    {
        index:"111",	
        name:"Rhinocorne",
        type:"Sol-Roche.",
    },
    {
        index:"112",	
        name:"Rhinoféros",	
        type:"Sol-Roche. Évolution de Rhinocorne.",
    },
    {
        index:"113",	
        name:"Leveinard",	
        type:"Normal. N'avait pas d'évolution dans la première génération.",
    },
    {
        index:"114",	
        name:"Saquedeuneu",	
        type:"Plante. N'avait pas d'évolution dans la première génération.",
    },
    {
        index:"115",	
        name:"Kangourex",	
        type:"Normal. N'a pas d'évolution.",
    },
    {
        index:"116",	
        name:"Hypotrempe",
        type:"Eau.",
    },
    {
        index:"117",	
        name:"Hypocéan	",
        type:"Eau. Évolution d'Hypotrempe.",
    },
    {
        index:"118",	
        name:"Poissirène",	
        type:"Eau.",
    },
    {
        index:"119",	
        name:"Poissoroy",	
        type:"Eau.",
    },
    {
        index:"120",	
        name:"stari	",
        type:"Eau.",
    },
    {
        index:"121",	
        name:"Staross",	
        type:"Eau-Psy. Évolution de Stari.",
    },
    {
        index:"122",	
        name:"M. Mime",	
        type:"Psy. N'avait pas de famille évolutive jusqu'à la quatrième génération.",
    },
    {
        index:"123",	
        name:"Insécateur",	
        type:"Insecte. N'avait pas d'évolution dans la première génération.",
    },
    {
        index:"124",	
        name:"Lippoutou",	
        type:"Glace-Psy. N'a pas de famille évolutive dans la première génération.",
    },
    {
        index:"125",	
        name:"Élektek",	
        type:"Électrique. N'a pas de famille évolutive dans la première génération.",
    },
    {
        index:"126",	
        name:"Magmar",	
        type:"Feu. N'a pas de famille évolutive dans la première génération.",
    },
    {
        index:"127",	
        name:"Scarabrute",	
        type:"Insecte.",
    },
    {
        index:"128",	
        name:"Tauros",	
        type:"Normal.",
    },
    {
        index:"129",	
        name:"Magicarpe",	
        type:"Eau.",
    },
    {
        index:"130",
        name:"Léviator",	
        type:"Eau-Vol. Évolution de Magicarpe",
    },
    {
        index:"131",	
        name:"Lokhlass",	
        type:"Eau glace",
    },
    {
        index:"132",
        name:"Métarmoph	",
        type:"Normal",
    },
    {
        index:"133",
        name:"Évoli",	
        type:"Normal",
    },
    {
        index:"134",	
        name:"Aquali",	
        type:"Eau.",
    },
    {
        index:"135",	
        name:"Voltali",	
        type:"Électrique",
    },
    {
        index:"136",	
        name:"Pyroli",	
        type:"Feu",
    },
    {
        index:"137",	
        name:"Porygon",	
        type:"Normal",
    },
    {
        index:"138",	
        name:"Amonista",	
        type:"Roche-Eau",
    },
    {
        index:"139",	
        name:"Amonistar	",
        type:"Roche-Eau",
    },
    {
        index:"140	",
        name:"Kabuto	",
        type:"Roche-Eau",
    },
    {
        index:"141",	
        name:"Kaputops",	
        type:"Roche-Eau",
    },
    {
        index:"142",	
        name:"Ptéra",	
        type:"Roche-Vol",
    },
    {
        index:"143",	
        name:"Ronflex",	
        type:"Normal",
    },
    {
        index:"144",
        name:"Artikodin",	
        type:"Glace-Vol",
    },
    {
        index:"145",	
        name:"Électhor",	
        type:"Electrik-Vol",
    },
    {
        index:"146",	
        name:"Sulfura",	
        type:"Feu-Vol",
    },
    {
        index:"147",	
        name:"Minidraco	",
        type:"Dragon",
    },
    {
        index:"148",	
        name:"Draco",	
        type:"Dragon",
    },
    {
        index:"149",	
        name:"Dracolosse",
        type:"Dragon-Vol",
    },
    {
        index:"150",
        name:"Mewtwo",
        type:"Psy",
    },
    {
        index:"151",	
        name:"Mew",	
        type:"Psy",
    }
]
module.exports = pokedex