const candidates = {
  "Thompson": {
    "NDP": "Adams, Danielle",
    "PC": "Bindle, Kelly"
  },
  "Concordia": {
    "Lib": "Albo, Maria",
    "PC": "Frank, Andrew",
    "GPM": "Van Styvendale, Kari",
    "NDP": "Wiebe, Matt"
  },
  "Transcona": {
    "NDP": "Altomare, Nello",
    "PC": "Yakimoski, Blair"
  },
  "St. Vital": {
    "Lib": "Anderson, Jeffrey",
    "PC": "Mayer, Colleen",
    "NDP": "Moses, Jamie",
    "Ind": "Sharma, Baljeet"
  },
  "Assiniboia": {
    "Lib": "Anderson, Jeff",
    "PC": "Johnston, Scott",
    "NDP": "McKellep, Joe"
  },
  "Union Station": {
    "NDP": "Asagwara, Uzoma",
    "CPC-M": "Cubas, Elsa",
    "Lib": "Davis, Harold",
    "GPM": "Shalay, Andrea"
  },
  "Dawson Trail": {
    "NDP": "Asher, Echo",
    "PC": "Lagassé, Bob",
    "Lib": "Rivard, Robert"
  },
  "Roblin": {
    "Lib": "Bazak, Michael",
    "NDP": "Brandt Murenzi, Sophie",
    "PC": "Driedger, Myrna",
    "GPM": "Nichols, Kevin"
  },
  "Rossmere": {
    "GPM": "Bazan, Amanda",
    "PC": "Micklefield, Andrew",
    "NDP": "Regier, Andy"
  },
  "Fort Rouge": {
    "GPM": "Beddome, James",
    "Lib": "Friesen, Cyndy",
    "NDP": "Kinew, Wab",
    "PC": "Nabess, Edna"
  },
  "Seine River": {
    "Lib": "Bloomfield, James",
    "NDP": "Islam, Durdana",
    "GPM": "Lamoureux, Bryanne",
    "PC": "Morley-Lecomte, Janice"
  },
  "River Heights": {
    "PC": "Boulter, Susan",
    "Lib": "Gerrard, Jon",
    "NDP": "Niemczak, Jonathan",
    "GPM": "Zahn, Nathan"
  },
  "Tuxedo": {
    "Lib": "Brandson, Marc",
    "NDP": "Compton, Carla",
    "PC": "Stefanson, Heather"
  },
  "Burrows": {
    "NDP": "Brar, Diljeetpal",
    "PC": "Brar, Jasmine",
    "Lib": "Gill, Sarbjit Singh"
  },
  "The Maples": {
    "Lib": "Brar, Amandeep",
    "NDP": "Sandhu, Sukhjinderpal (Mintu)",
    "PC": "Sandhu, Amanjot"
  },
  "Borderland": {
    "Lib": "Braul, Loren",
    "NDP": "Cronk, Liz",
    "Ind": "Graydon, Cliff",
    "PC": "Guenter, Joshua"
  },
  "Kildonan-River East": {
    "Lib": "Braun, Kathryn",
    "PC": "Cox, Cathy",
    "NDP": "Macdonald, Elliot"
  },
  "Brandon West": {
    "NDP": "Brown, Nick",
    "PC": "Helwer, Reginald"
  },
  "Fort Whyte": {
    "NDP": "Bruske, Bea",
    "GPM": "Campbell, Sara",
    "Lib": "Morin, Darrel",
    "PC": "Pallister, Brian"
  },
  "St. James": {
    "GPM": "Buhse, Jeff",
    "Lib": "Hohne, Bernd",
    "PC": "Richard, Michelle",
    "NDP": "Sala, Adrien"
  },
  "Keewatinook": {
    "NDP": "Bushie, Ian",
    "PC": "Flett, Arnold",
    "Lib": "Harper, Jason"
  },
  "McPhillips": {
    "Lib": "Cacayuran, John",
    "PC": "Martin, Shannon",
    "NDP": "McFarlane, Greg",
    "GPM": "Smith, Jason",
    "Ind": "Wheeler, Dave"
  },
  "St. Johns": {
    "Lib": "Calisto-Tavares, Eddie",
    "NDP": "Fontaine, Nahanni"
  },
  "Riding Mountain": {
    "NDP": "Chacun, Wayne",
    "PC": "Nesbitt, Greg"
  },
  "Agassiz": {
    "PC": "Clarke, Eileen",
    "GPM": "Clayton, Liz",
    "NDP": "Legaspi, Kelly",
    "Lib": "Swanson, Hector"
  },
  "Fort Garry": {
    "PC": "Cooke, Nancy",
    "Lib": "Larkins, Craig",
    "NDP": "Wasyliw, Mark"
  },
  "Lagimodière": {
    "NDP": "Cross, Billie",
    "Lib": "Sacher, Jake",
    "PC": "Smith, Andrew"
  },
  "Spruce Woods": {
    "PC": "Cullen, Cliff",
    "NDP": "Shannon, Justin"
  },
  "Morden-Winkler": {
    "NDP": "Dalloo, Robin",
    "PC": "Friesen, Cameron",
    "Lib": "Mintz, David",
    "GPM": "Urichuk, Mike"
  },
  "Turtle Mountain": {
    "Lib": "Davies, Richard",
    "NDP": "Herrera-Hildebrand, Angie",
    "PC": "Piwniuk, Doyle"
  },
  "Elmwood": {
    "PC": "Dubon, Mayra",
    "GPM": "Geddert, Nicolas",
    "CPC-M": "Lombana, German",
    "NDP": "Maloway, Jim",
    "Lib": "Wolfrom, Regan"
  },
  "Southdale": {
    "Lib": "Duncanson, Spencer",
    "PC": "Gordon, Audrey",
    "NDP": "Myshkowsky, Karen"
  },
  "Lakeside": {
    "PC": "Eichler, Ralph",
    "NDP": "Rugg, Dan"
  },
  "The Pas-Kameesak": {
    "PC": "Evans, Ronald",
    "NDP": "Lathlin, Amanda",
    "GPM": "McLean, Ralph"
  },
  "Lac du Bonnet": {
    "PC": "Ewasko, Wayne",
    "Lib": "Hayward, Terry",
    "NDP": "Klassen, Sidney"
  },
  "Point Douglas": {
    "CPC-M": "Fainman, Fagie",
    "GPM": "Kess, Jenn",
    "NDP": "Smith, Bernadette"
  },
  "Kirkfield Park": {
    "PC": "Fielding, Scott",
    "NDP": "Morton, Kurt",
    "Lib": "Nathaniel, Ernie"
  },
  "Midland": {
    "NDP": "Friesen, Cindy",
    "PC": "Pedersen, Blaine",
    "GPM": "Price, Dylan",
    "Lib": "Sisler, Julia"
  },
  "Steinbach": {
    "PC": "Goertzen, Kelvin",
    "NDP": "Jessup, Rob"
  },
  "Fort Richmond": {
    "PC": "Guillemard, Sarah",
    "Lib": "Nagra, Tanjit",
    "NDP": "Wong, George"
  },
  "Waverley": {
    "Lib": "Haftani, Fiona",
    "PC": "Reyes, Jon",
    "NDP": "Zargani, Dashi"
  },
  "St. Boniface": {
    "PC": "Hoskins, Megan",
    "Lib": "Lamont, Dougald",
    "NDP": "Sims, Laurissa"
  },
  "Brandon East": {
    "PC": "Isleifson, Len",
    "Lib": "Longstreet, Kim",
    "NDP": "Patterson, Lonnie"
  },
  "Interlake-Gimli": {
    "PC": "Johnson, Derek",
    "NDP": "Pinsent, Sarah"
  },
  "Riel": {
    "Lib": "Johnston, Neil",
    "NDP": "Moyes, Michael",
    "PC": "Squires, Rochelle"
  },
  "Tyndall Park": {
    "PC": "Kainth, Daljit",
    "CPC-M": "Komarniski, Frank",
    "Lib": "Lamoureux, Cindy",
    "NDP": "Marcelino, Dominador (Ted)"
  },
  "Selkirk": {
    "PC": "Lagimodiere, Alan",
    "NDP": "Obach, Mitch"
  },
  "Flin Flon": {
    "Lib": "Lindsay, James",
    "NDP": "Lindsey, Tom",
    "GPM": "Murnick, Saara",
    "PC": "Wride, Theresa"
  },
  "Notre Dame": {
    "NDP": "Marcelino, Malaya",
    "Lib": "Martin, Donovan",
    "CPC-M": "Taylor, Andrew"
  },
  "La Vérendrye": {
    "NDP": "McGee, Erin",
    "Lib": "Mitchell, Lorena",
    "PC": "Smook, Dennis"
  },
  "Dauphin": {
    "PC": "Michaleski, Brad",
    "NDP": "Scheller, Darcy",
    "Lib": "Scofield Singh, Cathy"
  },
  "Springfield-Ritchot": {
    "Lib": "Mirwaldt, Sara",
    "NDP": "Okoi, Obasesam (Sam)",
    "PC": "Schuler, Ron"
  },
  "Wolseley": {
    "NDP": "Naylor, Lisa",
    "GPM": "Nickarz, David",
    "Lib": "Strong, Shandi"
  },
  "Portage la Prairie": {
    "NDP": "Podolecki, Andrew",
    "PC": "Wishart, Ian"
  },
  "Red River North": {
    "NDP": "Pullen, Chris",
    "PC": "Wharton, Jeffrey"
  },
  "Radisson": {
    "NDP": "Sandhu, Rajwinder",
    "PC": "Teitsma, James"
  },
  "Swan River": {
    "Lib": "Teffaine, David",
    "NDP": "Wiggins, Shelley",
    "PC": "Wowchuk, Rick"
  }
};

export default candidates;
