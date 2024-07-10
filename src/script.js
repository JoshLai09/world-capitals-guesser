const CITIES = [
  ["Kabul, Afghanistan", "AF"],
  ["Tirana, Albania", "AL"],
  ["Algiers, Algeria", "DZ"],
  ["Andorra la Vella, Andorra", "AD"],
  ["Luanda, Angola", "AO"],
  ["St. John's, Antigua and Barbuda", "AG"],
  ["Buenos Aires, Argentina", "AR"],
  ["Yerevan, Armenia", "AM"],
  ["Canberra, Australia", "AU"],
  ["Vienna, Austria", "AT"],
  ["Baku, Azerbaijan", "AZ"],
  ["Nassau, Bahamas", "BS"],
  ["Manama, Bahrain", "BH"],
  ["Dhaka, Bangladesh", "BD"],
  ["Bridgetown, Barbados", "BB"],
  ["Minsk, Belarus", "BY"],
  ["Brussels, Belgium", "BE"],
  ["Belmopan, Belize", "BZ"],
  ["Porto-Novo, Benin", "BJ"],
  ["Thimphu, Bhutan", "BT"],
  ["Sucre, Bolivia", "BO"],
  ["Sarajevo, Bosnia and Herzegovina", "BA"],
  ["Gaborone, Botswana", "BW"],
  ["Brasilia, Brazil", "BR"],
  ["Bandar Seri Begawan, Brunei", "BN"],
  ["Sofia, Bulgaria", "BG"],
  ["Ouagadougou, Burkina Faso", "BF"],
  ["Bujumbura, Burundi", "BI"],
  ["Phnom Penh, Cambodia", "KH"],
  ["Yaounde, Cameroon", "CM"],
  ["Ottawa, Canada", "CA"],
  ["Praia, Cape Verde", "CV"],
  ["Bangui, Central African Republic", "CF"],
  ["N'Djamena, Chad", "TD"],
  ["Santiago, Chile", "CL"],
  ["Beijing, China", "CN"],
  ["Bogota, Colombia", "CO"],
  ["Moroni, Comoros", "KM"],
  ["Brazzaville, Congo", "CG"],
  ["San Jose, Costa Rica", "CR"],
  ["Zagreb, Croatia", "HR"],
  ["Havana, Cuba", "CU"],
  ["Nicosia, Cyprus", "CY"],
  ["Prague, Czech Republic", "CZ"],
  ["Kinshasa, Democratic Republic of the Congo", "CD"],
  ["Copenhagen, Denmark", "DK"],
  ["Djibouti, Djibouti", "DJ"],
  ["Roseau, Dominica", "DM"],
  ["Santo Domingo, Dominican Republic", "DO"],
  ["Quito, Ecuador", "EC"],
  ["Cairo, Egypt", "EG"],
  ["San Salvador, El Salvador", "SV"],
  ["Malabo, Equatorial Guinea", "GQ"],
  ["Asmara, Eritrea", "ER"],
  ["Tallinn, Estonia", "EE"],
  ["Addis Ababa, Ethiopia", "ET"],
  ["Suva, Fiji", "FJ"],
  ["Helsinki, Finland", "FI"],
  ["Paris, France", "FR"],
  ["Libreville, Gabon", "GA"],
  ["Banjul, Gambia", "GM"],
  ["Tbilisi, Georgia", "GE"],
  ["Berlin, Germany", "DE"],
  ["Accra, Ghana", "GH"],
  ["Athens, Greece", "GR"],
  ["St. George's, Grenada", "GD"],
  ["Guatemala City, Guatemala", "GT"],
  ["Conakry, Guinea", "GN"],
  ["Bissau, Guinea-Bissau", "GW"],
  ["Georgetown, Guyana", "GY"],
  ["Port-au-Prince, Haiti", "HT"],
  ["Tegucigalpa, Honduras", "HN"],
  ["Budapest, Hungary", "HU"],
  ["Reykjavik, Iceland", "IS"],
  ["New Delhi, India", "IN"],
  ["Jakarta, Indonesia", "ID"],
  ["Tehran, Iran", "IR"],
  ["Baghdad, Iraq", "IQ"],
  ["Dublin, Ireland", "IE"],
  // ["Jerusalem, Israel", "IL"], Geocoding API doesn't work
  ["Rome, Italy", "IT"],
  ["Yamoussoukro, Ivory Coast", "CI"],
  ["Kingston, Jamaica", "JM"],
  ["Tokyo, Japan", "JP"],
  ["Amman, Jordan", "JO"],
  ["Astana, Kazakhstan", "KZ"],
  ["Nairobi, Kenya", "KE"],
  // ["Tarawa, Kiribati", "KI"], Geocoding API doesn't work
  ["Kuwait City, Kuwait", "KW"],
  ["Bishkek, Kyrgyzstan", "KG"],
  ["Vientiane, Laos", "LA"],
  ["Riga, Latvia", "LV"],
  ["Beirut, Lebanon", "LB"],
  ["Maseru, Lesotho", "LS"],
  ["Monrovia, Liberia", "LR"],
  ["Tripoli, Libya", "LY"],
  ["Vaduz, Liechtenstein", "LI"],
  ["Vilnius, Lithuania", "LT"],
  ["Luxembourg, Luxembourg", "LU"],
  ["Skopje, Macedonia", "MK"],
  ["Antananarivo, Madagascar", "MG"],
  ["Lilongwe, Malawi", "MW"],
  ["Kuala Lumpur, Malaysia", "MY"],
  ["Male, Maldives", "MV"],
  ["Bamako, Mali", "ML"],
  ["Valletta, Malta", "MT"],
  ["Majuro, Marshall Islands", "MH"],
  ["Nouakchott, Mauritania", "MR"],
  ["Port Louis, Mauritius", "MU"],
  ["Mexico City, Mexico", "MX"],
  ["Palikir, Micronesia", "FM"],
  ["Chisinau, Moldova", "MD"],
  ["Monaco, Monaco", "MC"],
  ["Ulan Bator, Mongolia", "MN"],
  ["Podgorica, Montenegro", "ME"],
  ["Rabat, Morocco", "MA"],
  ["Maputo, Mozambique", "MZ"],
  ["Nay Pyi Taw, Myanmar", "MM"],
  ["Windhoek, Namibia", "NA"],
  ["Yaren, Nauru", "NR"],
  ["Kathmandu, Nepal", "NP"],
  ["Amsterdam, Netherlands", "NL"],
  ["Wellington, New Zealand", "NZ"],
  ["Managua, Nicaragua", "NI"],
  ["Niamey, Niger", "NE"],
  ["Abuja, Nigeria", "NG"],
  ["Pyongyang, North Korea", "KP"],
  ["Oslo, Norway", "NO"],
  ["Muscat, Oman", "OM"],
  ["Islamabad, Pakistan", "PK"],
  ["Melekeok, Palau", "PW"],
  ["Panama City, Panama", "PA"],
  ["Port Moresby, Papua New Guinea", "PG"],
  ["Asuncion, Paraguay", "PY"],
  ["Lima, Peru", "PE"],
  ["Manila, Philippines", "PH"],
  ["Warsaw, Poland", "PL"],
  ["Lisbon, Portugal", "PT"],
  ["Doha, Qatar", "QA"],
  ["Bucharest, Romania", "RO"],
  ["Moscow, Russia", "RU"],
  ["Kigali, Rwanda", "RW"],
  ["Basseterre, Saint Kitts and Nevis", "KN"],
  ["Castries, Saint Lucia", "LC"],
  ["Kingstown, Saint Vincent and the Grenadines", "VC"],
  ["Apia, Samoa", "WS"],
  ["San Marino, San Marino", "SM"],
  ["Sao Tome, Sao Tome and Principe", "ST"],
  ["Riyadh, Saudi Arabia", "SA"],
  ["Dakar, Senegal", "SN"],
  ["Belgrade, Serbia", "RS"],
  ["Victoria, Seychelles", "SC"],
  ["Freetown, Sierra Leone", "SL"],
  ["Singapore, Singapore", "SG"],
  ["Bratislava, Slovakia", "SK"],
  ["Ljubljana, Slovenia", "SI"],
  ["Honiara, Solomon Islands", "SB"],
  ["Mogadishu, Somalia", "SO"],
  ["Pretoria, South Africa", "ZA"],
  ["Seoul, South Korea", "KR"],
  ["Juba, South Sudan", "SS"],
  ["Madrid, Spain", "ES"],
  ["Colombo, Sri Lanka", "LK"],
  ["Khartoum, Sudan", "SD"],
  ["Paramaribo, Suriname", "SR"],
  ["Mbabane, Swaziland", "SZ"],
  ["Stockholm, Sweden", "SE"],
  ["Berne, Switzerland", "CH"],
  ["Damascus, Syria", "SY"],
  ["Taipei, Taiwan", "TW"],
  ["Dushanbe, Tajikistan", "TJ"],
  ["Dodoma, Tanzania", "TZ"],
  ["Bangkok, Thailand", "TH"],
  ["Dili, Timor-Leste", "TL"],
  ["Lome, Togo", "TG"],
  ["Nuku'alofa, Tonga", "TO"],
  ["Port of Spain, Trinidad and Tobago", "TT"],
  ["Tunis, Tunisia", "TN"],
  ["Ankara, Turkey", "TR"],
  ["Ashgabat, Turkmenistan", "TM"],
  ["Funafuti, Tuvalu", "TV"],
  ["Kampala, Uganda", "UG"],
  ["Kiev, Ukraine", "UA"],
  ["Abu Dhabi, United Arab Emirates", "AE"],
  ["London, United Kingdom", "GB"],
  ["Washington, D.C., United States", "US"],
  ["Montevideo, Uruguay", "UY"],
  ["Tashkent, Uzbekistan", "UZ"],
  // ["Port Vila, Vanuatu", "VU"], Geocoding API doesn't work
  ["Vatican City, Vatican City State", "VA"],
  ["Caracas, Venezuela", "VE"],
  ["Hanoi, Vietnam", "VN"],
  ["Sanaa, Yemen", "YE"],
  ["Lusaka, Zambia", "ZM"],
  ["Harare, Zimbabwe", "ZW"]
];
let score = 0;
let rounds = 0;
let goodRounds = 0;
let map, marker, targetMarker;
let targetCity = CITIES[Math.floor(195 * Math.random())];
document.getElementById("city").textContent = targetCity[0];

function initMap() {
    const markerInitPos = {
        lat: 80 * Math.random() - 40,
        lng: 160 * Math.random() - 80
    };
    const iconMarker = {
        labelOrigin: new window.woosmap.map.Point(14, 15),
        scaledSize: { height: 37.5, width: 24 },
        url: "./img/pin.png"
    };
    map = new woosmap.map.Map(document.getElementById("map"), {
        zoom: 2,
        center: { lat: 40, lng: 0 },
        styles: [
            {
                elementType: "geometry",
                stylers: [{ color: "#f6f6f6" }]
            },
            {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#c9c9c9" }]
            },
            {
                elementType: "labels.icon",
                stylers: [{ visibility: "off" }]
            },
            {
                elementType: "labels.text.fill",
                stylers: [{ visibility: "off" }]
            },
            {
                elementType: "labels.text.stroke",
                stylers: [{ visibility: "off" }]
            }
        ]
    });
    marker = new window.woosmap.map.Marker({
        position: markerInitPos,
        icon: iconMarker,
        map
    });
    marker.addListener("click", () => {
        marker.setMap(null);
        document.getElementById("check").disabled = true;
        document.getElementById("check").style.cursor = "not-allowed";
    });
    map.addListener("click", (e) => {
        marker.setMap(map);
        marker.setPosition(e.latlng);
        document.getElementById("check").disabled = false;
        document.getElementById("check").style.cursor = "pointer";

        marker.addListener("click", () => {
            marker.setMap(null);
            document.getElementById("check").disabled = true;
            document.getElementById("check").style.cursor = "not-allowed";
        });
    });
}

function check() {
    const iconMarker = {
        scaledSize: { height: 37.5, width: 25.6 },
        url: "./img/red-pin.png"
    };
    let targetCoords;
    let selectedCoords = marker.getPosition();
    let distance;

    function coordsDistance(coord1, coord2) {
        const [lat1, lng1] = Object.values(coord1);
        const [lat2, lng2] = Object.values(coord2);
        const toRad = Math.PI / 180;
        const R = 6371; // Radius of the earth in km
        const dLat = toRad * (lat2 - lat1);
        const dLng = toRad * (lng2 - lng1);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRad * lat1) *
            Math.cos(toRad * lat2) *
            Math.sin(dLng / 2) *
            Math.sin(dLng / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const d = R * c; // Distance in km
        return d;
    }
    let url =
        "https://api.woosmap.com/localities/geocode?key=woos-a4593e61-b0ca-3307-b332-347c19b22558&language=en&components=country%3A" +
        targetCity[1] +
        "&address=" +
        targetCity[0].split(", ")[0];
    fetch(url, {
            method: "GET",
            redirect: "follow"
        })
        .then((response) => response.json())
        .then((result) => {
            targetCoords = result.results[0].geometry.location;
            distance = coordsDistance(targetCoords, selectedCoords);
            document.getElementById("distance").textContent = distance.toLocaleString(
                "en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }
            );
            score += parseFloat((5250000 / (distance + 1000) - 250).toFixed(0));
            rounds++;
            goodRounds += distance < 300 ? 1 : 0;
            // maps 0 - 20,000 km away -> 5000 - 0 pts
            document.getElementById("score").textContent = score;
            document.getElementById("instructions").style.visibility = "hidden";
            document.getElementById("outcome").style.visibility = "visible";
            document.getElementById("map").classList.add("disabled");
            if (CITIES.length <= 1) {
                document.getElementById("next").disabled = true;
                document.getElementById("next").style.pointerEvents = "none";
            }
            targetMarker = new window.woosmap.map.Marker({
                position: targetCoords,
                icon: iconMarker,
                map
            });
            map.flyTo({
                animate: true,
                zoom: 12 - 1.21 * Math.log(distance),
                around: targetCoords,
                center: targetCoords
            });
        })
        .catch((error) => console.error("error", error));
}

function next() {
    CITIES.splice(CITIES.indexOf(targetCity), 1);
    targetCity = CITIES[Math.floor(CITIES.length * Math.random())];
    document.getElementById("city").textContent = targetCity[0];
    document.getElementById("instructions").style.visibility = "visible";
    document.getElementById("outcome").style.visibility = "hidden";
    document.getElementById("map").classList.remove("disabled");
    targetMarker.setMap(null);
    marker.setMap(null);
    map.flyTo({
        animate: true,
        zoom: 1.2,
        around: { lat: 40, lng: 0 },
        center: { lat: 40, lng: 0 }
    });
}

function finish() {
    document.getElementById("final-score").textContent = score.toLocaleString("en-US");
    document.getElementById("max-score").textContent = (rounds * 5000).toLocaleString("en-US");
    document.getElementById("good-rounds").textContent = goodRounds;
    document.getElementById("total-rounds").textContent = rounds;
    document.body.classList.add("popup");
}

function newGame() { location.reload() }

window.initMap = initMap;
