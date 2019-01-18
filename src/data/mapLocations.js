const locations = {
  dining: [
    {
      title: 'Aroma Espresso Bar',
      coordinates: [-74.009765, 40.713020],
    },
    {
      title: 'Birch Coffee',
      coordinates: [-74.005945, 40.711071]
    },
    {
      title: 'Bluestone Coffee',
      coordinates: [-74.011540, 40.706132]
    },
    {
      title: 'Irving Farm Coffee Roasters',
      coordinates: [-74.009010, 40.710851]
    },
    {
      title: 'Joe Coffee',
      coordinates: [-74.012863, 40.712931]
    },
    {
      title: 'Juice Press',
      coordinates: [-74.015230, 40.712056]
    },
    {
      title: 'Kaffe 1668 South',
      coordinates: [-74.011099, 40.715316]
    },
    {
      title: 'Lady M Cake Boutique',
      coordinates: [-74.011851, 40.710284]
    },
    {
      title: 'Milk Bar',
      coordinates: [-74.006529, 40.705760]
    },
    {
      title: 'Takahachi Bakery',
      coordinates: [-74.008505, 40.713941]
    },
    {
      title: 'The Wooly Daily',
      coordinates: [-74.008281, 40.712599]
    },
    {
      title: 'Apothèke',
      coordinates: [-73.998217, 40.714383]
    },
    {
      title: 'Barleycorn',
      coordinates: [-74.008857, 40.713194]
    },
    {
      title: 'Dead Rabbit',
      coordinates: [-74.011030, 40.703312]
    },
    {
      title: 'Evening Bar',
      coordinates: [-74.009130, 40.715235]
    },
    {
      title: 'Five and Dime',
      coordinates: [ -74.008208, 40.712634]
    },
    {
      title: 'Stone Street Tavern',
      coordinates: [-74.010196, 40.704232]
    },
    {
      title: 'Temple Court',
      coordinates: [-74.006844, 40.711291]
    },
    {
      title: 'Temple Court',
      coordinates: [-74.006844, 40.711291]
    },
    {
      title: 'The Malt House',
      coordinates: [-74.009343, 40.709680]
    },
    {
      title: 'The Wooly Public',
      coordinates: [-74.006844, 40.711291]
    },
    {
      title: 'Tiny’s & The Bar Upstairs',
      coordinates: [-74.008058, 40.716757]
    },
    {
      title: 'Vin Sur Vingt',
      coordinates: [-74.010110, 40.714808]
    },
    {
      title: 'Ward III',
      coordinates: [-74.008678, 40.715894]
    },
    {
      title: 'Weather Up',
      coordinates: [-74.008750, 40.716970]
    },
    {
      title: 'American Cut Tribeca',
      coordinates: [-74.010022, 40.719111]
    },
    {
      title: 'Augustine',
      coordinates: [-74.006814, 40.711419]
    },
    {
      title: 'Blue Smoke',
      coordinates: [-74.015359, 40.714871]
    },
    {
      title: '2CUT by Wolfgang Puck',
      coordinates: [-74.009406, 40.713078]
    },
    {
      title: '2Eataly Downtown',
      coordinates: [-74.012269, 40.710443]
    },
    {
      title: 'Fraunces Tavern',
      coordinates: [-74.011354, 40.703597]
    },
    {
      title: 'Frenchette',
      coordinates: [-74.005612, 40.719843]
    },
    {
      title: 'Fuku',
      coordinates: [-74.015172, 40.712166]
    },
    {
      title: 'Hudson Eats',
      coordinates: [-74.015680, 40.713026]
    },
    {
      title: 'Le Coucou',
      coordinates: [-74.000247, 40.719167]
    },
    {
      title: 'Le District',
      coordinates: [-74.015720, 40.712655]
    },
    {
      title: 'Little Park',
      coordinates: [-74.009123, 40.715415]
    },
    {
      title: 'Locanda Verde',
      coordinates: [-74.010025, 40.719949]
    },
    {
      title: 'Mr Chow',
      coordinates: [-74.008733, 40.720206]
    },
    {
      title: 'Nobu Downtown',
      coordinates: [-74.009848, 40.710927]
    },
    {
      title: 'Parm',
      coordinates: [-74.016006, 40.714581]
    },
    {
      title: 'Racines NY',
      coordinates: [-74.007556, 40.714638]
    },
    {
      title: 'Reserve Cut',
      coordinates: [-74.011776, 40.706051]
    },
    {
      title: 'Rosa Mexicano',
      coordinates: [-74.009036, 40.714124]
    },
    {
      title: 'Shake Shack',
      coordinates: [-74.014799, 40.715502]
    },
    {
      title: 'Sushi of Gari',
      coordinates: [-74.008467, 40.716786]
    },
    {
      title: 'The Palm Tribeca',
      coordinates: [-74.012698, 40.716594]
    }
  ],
  schools: [
    {
      title: 'Spruce Street School',
      coordinates: [-74.005360, 40.711073]
    },
    {
      title: 'The Blue School',
      coordinates: [-74.005847, 40.709981]
    },
    {
      title: 'P.S. 234 Independence School',
      coordinates: [-74.011604, 40.716045]
    },
    {
      title: 'The Peck Slip School',
      coordinates: [-74.001967, 40.708919]
    },
    {
      title: 'New York Charter School of the Arts',
      coordinates: [-74.012886, 40.705459]
    },
    {
      title: 'Stuyvesant High School',
      coordinates: [-74.013872, 40.718015]
    },
    {
      title: 'Millennium High School',
      coordinates: [-74.011230, 40.704703]
    },
    {
      title: 'Léman Manhattan Preparatory School',
      coordinates: [-74.011207, 40.705757]
    },
    {
      title: 'Trinity Preschool',
      coordinates: [-74.010304, 40.713644]
    },
    {
      title: 'Pine Street School',
      coordinates: [-74.009865, 40.707409]
    },
    {
      title: 'Downtown Little School',
      coordinates: [-74.007265, 40.709770]
    },
    {
      title: 'Brooklyn Robot Foundry Tribeca',
      coordinates: [-74.006956, 40.716394]
    },
    {
      title: 'Bright Kids',
      coordinates: [-74.008762, 40.711984]
    },
    {
      title: 'Children’s Tumbling',
      coordinates: [-74.007931, 40.713657]
    },
    {
      title: 'Gymboree Play & Music',
      coordinates: [-74.008024, 40.715841]
    },
    {
      title: 'Imagination Playground',
      coordinates: [-74.004320, 40.706405]
    },
    {
      title: 'Kidville FiDi',
      coordinates: [-74.005785, 40.708794]
    },
    {
      title: 'Mandarin Seeds',
      coordinates: [-74.008143, 40.714038]
    },
    {
      title: 'SeaGlass Carousel',
      coordinates: [-74.014992, 40.702178]
    },
    {
      title: 'Wet Paint! Art Studio',
      coordinates: [-74.008609, 40.715039]
    },
    {
      title: 'Battery Park Esplanade',
      coordinates: [-74.017903, 40.711921]
    },
    {
      title: 'City Hall Park',
      coordinates: [-74.006549, 40.712526]
    },
    {
      title: 'Clinton Castle',
      coordinates: [-74.016800, 40.703456]
    },
    {
      title: 'North Cove Sailing',
      coordinates: [-74.017026, 40.714624]
    },
    {
      title: 'Pier 15, East River',
      coordinates: [-74.003523, 40.704820]
    },
    {
      title: 'Rockefeller Park',
      coordinates: [-74.003523, 40.704820]
    },
    {
      title: 'The Elevated Acre',
      coordinates: [-74.008896, 40.703340]
    },
    {
      title: '56 HENRY',
      coordinates: [-73.995167, 40.712804]
    },
    {
      title: '9/11 Memorial & Museum',
      coordinates: [-74.013443, 40.711490]
    },
    {
      title: 'Federal Hall',
      coordinates: [-74.010209, 40.707415]
    },
    {
      title: 'Jeffrey Stark',
      coordinates: [-73.994139, 40.713850]
    },
    {
      title: 'Mmuseumm',
      coordinates: [-74.002718, 40.717426]
    },
    {
      title: 'Museum of Jewish Heritage',
      coordinates: [-74.018580, 40.705991]
    },
    {
      title: 'National Museum of the American Indian',
      coordinates: [-74.013983, 40.704404]
    },
    {
      title: 'Postmasters Gallery',
      coordinates: [-74.002707, 40.717309]
    },
    {
      title: 'South Street Seaport Museum',
      coordinates: [-74.003709, 40.706578]
    }
  ],
  fitness: [
    {
      title: 'Blink',
      coordinates: [-74.007369, 40.710864]
    },
    {
      title: 'Bodies by Pilates',
      coordinates: [-74.009205, 40.709673]
    },
    {
      title: 'Bout Fight Club',
      coordinates: [-74.007767, 40.710475]
    },
    {
      title: 'Church Street Boxing',
      coordinates: [-74.003221, 40.719191]
    },
    {
      title: 'CrossFit Tribeca',
      coordinates: [-74.006367, 40.714552]
    },
    {
      title: 'Equinox',
      coordinates: [-74.009555, 40.714072]
    },
    {
      title: 'New York Sports Club',
      coordinates: [-74.008594, 40.711784]
    },
    {
      title: 'Oculus CrossFit',
      coordinates: [-74.006268, 40.709808]
    },
    {
      title: 'Physique 57',
      coordinates: [-74.013029, 40.706866]
    },
    {
      title: 'SoulCycle',
      coordinates: [-74.012544, 40.716160]
    },
    {
      title: 'The Class by Taryn Toomey',
      coordinates: [40.712762, -74.008565]
    },
    {
      title: 'Barre Tribeca',
      coordinates: [40.714418, -74.007913]
    },
    {
      title: 'Trinity Boxing Club',
      coordinates: [-74.006744, 40.715626]
    },
    {
      title: 'Aloft',
      coordinates: [-74.006699, 40.710388]
    },
    {
      title: 'Conrad New York',
      coordinates: [-74.015464, 40.714929]
    },
    {
      title: 'Gild Hall',
      coordinates: [-74.007215, 40.707932]
    },
    {
      title: 'The Beekman',
      coordinates: [-74.006752, 40.711149]
    },
    {
      title: 'The Four Seasons',
      coordinates: [-74.009188, 40.712671]
    },
    {
      title: 'The Greenwich Hotel',
      coordinates: [-74.009859, 40.719838]
    },
    {
      title: 'The Roxy Hotel',
      coordinates: [-74.004901, 40.719420]
    },
    {
      title: 'W New York-Downtown',
      coordinates: [-74.013594, 40.709214]
    },
    {
      title: 'Alley Cat Theater',
      coordinates: [-74.006860, 40.711408]
    },
    {
      title: 'iPic New York',
      coordinates: [-74.003285, 40.706800]
    },
    {
      title: 'One World Observatory',
      coordinates: [-74.013367, 40.713361]
    },
    {
      title: 'Regal Cinemas',
      coordinates: [-74.015235, 40.715007]
    },
    {
      title: 'Rooftop at Pier 17',
      coordinates: [40.705475, -74.001569]
    }
  ],
  shopping: [
    {
      title: 'Corso Como',
      coordinates: [-74.003071, 40.706948]
    },
    {
      title: 'Apple Store',
      coordinates: [-74.011502, 40.711932]
    },
    {
      title: 'Brietling',
      coordinates: [-74.011486, 40.711316]
    },
    {
      title: 'Brookfield Place',
      coordinates: [-74.015281, 40.712733]
    },
    {
      title: 'Burberry',
      coordinates: [-74.015065, 40.713383]
    },
    {
      title: 'Century 21',
      coordinates: [-74.010520, 40.710627]
    },
    {
      title: 'Gucci',
      coordinates: [-74.014771, 40.713239]
    },
    {
      title: 'H&M',
      coordinates: [-74.011728, 40.710398]
    },
    {
      title: 'Hermès',
      coordinates: [-74.010820, 40.706350]
    },
    {
      title: 'J. Crew The Ludlow Shop',
      coordinates: [-74.008825, 40.717366]
    },
    {
      title: 'Jo Malone',
      coordinates: [-74.015012, 40.712820]
    },
    {
      title: 'Louis Vuitton',
      coordinates: [40.712327, -74.015612]
    },
    {
      title: 'Lululemon',
      coordinates: [-74.015611, 40.714076]
    },
    {
      title: 'Montblanc',
      coordinates: [-74.011430, 40.711270]
    },
    {
      title: 'Oculus',
      coordinates: [-74.011147, 40.711416]
    },
    {
      title: 'Saks Fifth Avenue',
      coordinates: [-74.015403, 40.713464]
    },
    {
      title: 'Salvatore Ferragamo',
      coordinates: [-74.015217, 40.713431]
    },
    {
      title: '1Smythson',
      coordinates: [-74.011256, 40.711183]
    },
    {
      title: '1South Street Seaport',
      coordinates: [-74.002744, 40.705636]
    },
    {
      title: '2Steven Alan',
      coordinates: [-74.005748, 40.718394]
    },
    {
      title: 'Stuart Weitzman',
      coordinates: [-74.011256, 40.711183]
    },
    {
      title: 'Theory',
      coordinates: [-74.015404, 40.713636]
    },
    {
      title: 'Tiffany & Co.',
      coordinates: [-74.010225, 40.706539]
    },
    {
      title: 'Vince',
      coordinates: [-74.015138, 40.713880]
    },
    {
      title: 'Westfield',
      coordinates: [-74.011479, 40.711492]
    },
    {
      title: 'Zara',
      coordinates: [-74.008673, 40.711017]
    },
    {
      title: '255 Fulton Market',
      coordinates: [-74.004720, 40.708730]
    },
    {
      title: 'Beer Table',
      coordinates: [-73.976185, 40.752548]
    },
    {
      title: 'Chambers Street Wines',
      coordinates: [-74.009907, 40.715683]
    },
    {
      title: 'City Hall Greenmarket',
      coordinates: [-74.006423, 40.713941]
    },
    {
      title: 'City Hall Wines & Spirits',
      coordinates: [-74.007906, 40.715222]
    },
    {
      title: 'Eataly',
      coordinates: [-74.012269, 40.710443]
    },
    {
      title: 'Freedom Wine Cellar',
      coordinates: [-74.008923, 40.710462]
    },
    {
      title: 'Gristedes',
      coordinates: [-74.007474, 40.706957]
    },
    {
      title: 'Oculus Plaza Greenmarket',
      coordinates: [-74.010485, 40.711609]
    },
    {
      title: 'Seaport Wine Spirits',
      coordinates: [-74.007056, 40.709656]
    },
    {
      title: 'Tribeca Greenmarket',
      coordinates: [-74.010879, 40.716982]
    },
    {
      title: 'Whole Foods',
      coordinates: [-74.012051, 40.715546]
    },
    {
      title: 'World Trade Center',
      coordinates: [-74.013720, 40.711945]
    },
    {
      title: 'Zeytuna',
      coordinates: [-74.007582, 40.708705]
    }
  ],
  transitMTA: [
    {
      title: 'N/R Subway',
      coordinates: [-74.006699, 40.713561]
    },
    {
      title: '4/5/6 Subway',
      coordinates: [-74.004276, 40.712901]
    },
    {
      title: 'J/Z Subway',
      coordinates: [-74.004061, 40.713105]
    },
    {
      title: '2/3 Subway',
      coordinates: [-74.006402, 40.709568]
    },
    {
      title: '4/5 Subway',
      coordinates: [-74.009294, 40.710645]
    },
    {
      title: 'J/Z Subway',
      coordinates: [-74.008319, 40.709371]
    },
    {
      title: '1 Subway',
      coordinates: [40.710964, -74.011671]
    },
    {
      title: 'R/W Subway',
      coordinates: [-74.010748, 40.711009]
    },
    {
      title: 'E Subway',
      coordinates: [-74.009911, 40.712640]
    },
    {
      title: '2/3 Subway',
      coordinates: [-74.009251, 40.713242]
    },
    {
      title: 'A/C/F Subway',
      coordinates: [-74.008430, 40.714303]
    },
    {
      title: '1/2/3 Subway',
      coordinates: [-74.009229, 40.715507]
    },
    {
      title: '1 Subway',
      coordinates: [-74.006692, 40.718987]
    },
    {
      title: 'A/C/E/F Subway',
      coordinates: [-74.004997, 40.720711]
    },
    {
      title: 'N/Q/R/W Subway',
      coordinates: [-74.001789, 40.719520]
    },
    {
      title: 'N/Q/R/W Subway',
      coordinates: [-74.000512, 40.718414]
    },
    {
      title: 'J/Z Subway',
      coordinates: [-74.000229, 40.717825]
    },
  ],
  transitPath: [
    {
      title: 'Word Trade Center Path Train',
      coordinates: [-74.011451, 40.711628]
    }
  ],
  transitHeliport: [
    {
      title: 'Downtown Heliport',
      coordinates: [-74.008714, 40.701094]
    },
  ],
  transitFerry: [
    {
      title: 'Staten Island Ferry',
      coordinates: [-74.013126, 40.700921]
    },
  ]
  
};

export default locations;