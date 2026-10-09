// 항공사별 Prefix와 공식 화물 추적 페이지. 각 항공사 공식 사이트에서 확인한 값.
window.AWB_CHECKED = '2026년 10월';
window.AWB_AIRLINES = [
 {
  "name": "Korean Air",
  "name_ko": "대한항공",
  "iata": "KE",
  "prefix": "180",
  "url": "https://cargo.koreanair.com/tracking",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "Asiana Airlines",
  "name_ko": "아시아나항공",
  "iata": "OZ",
  "prefix": "988",
  "url": "https://www.asianacargo.com/tracking/viewTraceAirWaybill.do",
  "tracking": true,
  "note_ko": "대한항공과 통합 중이라 추적 주소가 바뀔 수 있음"
 },
 {
  "name": "AirZeta (formerly Air Incheon)",
  "name_ko": "에어제타(구 에어인천)",
  "iata": "KJ",
  "prefix": "994",
  "url": "https://portal.airzetacargo.com/tracking/viewTraceAirWaybill.do",
  "tracking": true,
  "note_ko": "2025년 8월 에어인천이 아시아나 화물사업부를 넘겨받으며 이름 변경"
 },
 {
  "name": "Jeju Air",
  "name_ko": "제주항공",
  "iata": "7C",
  "prefix": "806",
  "url": "https://cargo.jejuair.net/cargo/main.do",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "Air Premia",
  "name_ko": "에어프레미아",
  "iata": "YP",
  "prefix": "350",
  "url": "https://cargo.airpremia.com/en/track",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "Jin Air",
  "name_ko": "진에어",
  "iata": "LJ",
  "prefix": "718",
  "url": "https://www.jinair.com/company/freight",
  "tracking": false,
  "note_ko": "화물 안내 페이지. 항공사 화물 담당에 문의"
 },
 {
  "name": "Trinity Airways (formerly T'way Air)",
  "name_ko": "트리니티항공(구 티웨이항공)",
  "iata": "TW",
  "prefix": "722",
  "url": "https://www.trinityairways.com",
  "tracking": false,
  "note_ko": "2026년 9월 티웨이항공에서 이름 변경"
 },
 {
  "name": "Air Busan",
  "name_ko": "에어부산",
  "iata": "BX",
  "prefix": "982",
  "url": "https://www.airbusan.com",
  "tracking": false,
  "note_ko": "항공사 화물 담당에 문의"
 },
 {
  "name": "Aer Lingus (IAG Cargo)",
  "name_ko": "에어링구스",
  "iata": "EI",
  "prefix": "053",
  "url": "https://www.iagcargo.com/iagcargo/portlet/en/html/601",
  "tracking": true,
  "note_ko": "IAG 카고에서 영국항공(125)·이베리아(075) AWB로 발행될 수 있음"
 },
 {
  "name": "Aerolineas Argentinas Cargo",
  "name_ko": "아르헨티나항공",
  "iata": "AR",
  "prefix": "044",
  "url": "https://cargo.aerolineas.com.ar/es-ar",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "Aeromexico Cargo",
  "name_ko": "아에로멕시코",
  "iata": "AM",
  "prefix": "139",
  "url": "https://amcargo.aeromexico.com/seguimiento",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "Air Algerie Cargo",
  "name_ko": "알제리항공",
  "iata": "AH",
  "prefix": "124",
  "url": "https://airalgeriecargo.dz/tracking/",
  "tracking": true,
  "note_ko": "CHAMP의 freight.aero에서 조회"
 },
 {
  "name": "Air Arabia",
  "name_ko": "에어아라비아",
  "iata": "G9",
  "prefix": "514",
  "url": "https://cargo.airarabia.com/cargo-tracking/",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "Air Astana",
  "name_ko": "에어아스타나",
  "iata": "KC",
  "prefix": "465",
  "url": "https://www.freight.aero/index.asp",
  "tracking": true,
  "note_ko": "freight.aero에서 항공사 KC를 고르고 8자리 입력"
 },
 {
  "name": "Air Canada Cargo",
  "name_ko": "에어캐나다",
  "iata": "AC",
  "prefix": "014",
  "url": "https://www.aircanada.com/cargo/tracking",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "Air China Cargo",
  "name_ko": "중국국제항공",
  "iata": "CA",
  "prefix": "999",
  "url": "https://www.airchinacargo.com/cargo_en/gzcx/hkyd/list/index_pc.html",
  "tracking": true,
  "note_ko": "조회할 때 보안 문자 입력 필요"
 },
 {
  "name": "Air Europa Cargo",
  "name_ko": "에어유로파",
  "iata": "UX",
  "prefix": "996",
  "url": "https://www.crsairlines.aero/en/agents.html",
  "tracking": true,
  "note_ko": "판매 대리점 CRS 사이트. 로그인 필요"
 },
 {
  "name": "Air France (AF KLM Martinair Cargo)",
  "name_ko": "에어프랑스",
  "iata": "AF",
  "prefix": "057",
  "url": "https://www.afklcargo.com/mycargo/shipment/singlesearch",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "Air Hong Kong",
  "name_ko": "에어홍콩",
  "iata": "LD",
  "prefix": "288",
  "url": "https://www.cathaycargo.com/en-us/track-and-trace.html",
  "tracking": true,
  "note_ko": "캐세이 카고 추적 페이지에서 조회"
 },
 {
  "name": "Air India",
  "name_ko": "에어인디아",
  "iata": "AI",
  "prefix": "098",
  "url": "https://aicargoportal.airindia.com/icargoneoportal/app/main/",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "Air Macau",
  "name_ko": "에어마카오",
  "iata": "NX",
  "prefix": "675",
  "url": "https://www.infoccsp.com/iportal/servicecenter/cargotracking.aspx",
  "tracking": true,
  "note_ko": "TravelSky 공용 화물 포털"
 },
 {
  "name": "Air New Zealand",
  "name_ko": "에어뉴질랜드",
  "iata": "NZ",
  "prefix": "086",
  "url": "https://www.airnewzealandcargo.com/self-service/track-and-trace",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "Alaska Air Cargo",
  "name_ko": "알래스카항공",
  "iata": "AS",
  "prefix": "027",
  "url": "https://alaska-icargo.ibsplc.aero/icargoportal/portal/loginFlow",
  "tracking": true,
  "note_ko": "알래스카 에어카고 포털에서 조회"
 },
 {
  "name": "American Airlines Cargo",
  "name_ko": "아메리칸항공",
  "iata": "AA",
  "prefix": "001",
  "url": "https://www.aacargo.com/AACargo/tracking",
  "tracking": true,
  "note_ko": "조회 결과를 보려면 로그인을 요구할 수 있음"
 },
 {
  "name": "Amerijet International",
  "name_ko": "",
  "iata": "M6",
  "prefix": "810",
  "url": "https://amerijet.com/air-waybill-tracking/",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "ANA All Nippon Airways",
  "name_ko": "전일본공수",
  "iata": "NH",
  "prefix": "205",
  "url": "https://www.anacargo.jp/en/int/",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "ASL Airlines Belgium",
  "name_ko": "",
  "iata": "3V",
  "prefix": "756",
  "url": "https://www.aslairlines.be",
  "tracking": false,
  "note_ko": "전세·위탁 운항사"
 },
 {
  "name": "Atlas Air",
  "name_ko": "아틀라스항공",
  "iata": "5Y",
  "prefix": "369",
  "url": "https://www.atlasair.com/cargo-services/track-and-trace/",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "Austrian Airlines",
  "name_ko": "오스트리아항공",
  "iata": "OS",
  "prefix": "257",
  "url": "https://www.lufthansa-cargo.com/en/eservices/etracking",
  "tracking": true,
  "note_ko": "현재 루프트한자 카고(020) AWB로 판매·조회"
 },
 {
  "name": "Avianca Cargo",
  "name_ko": "아비앙카항공",
  "iata": "QT",
  "prefix": "729",
  "url": "https://www.aviancacargo.com/",
  "tracking": true,
  "note_ko": "아비앙카 여객편 화물도 이 사이트에서 조회"
 },
 {
  "name": "Biman Bangladesh Airlines",
  "name_ko": "비만방글라데시항공",
  "iata": "BG",
  "prefix": "997",
  "url": "https://www.freight.aero/tracking.asp",
  "tracking": true,
  "note_ko": "CHAMP의 freight.aero에서 조회(보안 문자)"
 },
 {
  "name": "British Airways (IAG Cargo)",
  "name_ko": "영국항공",
  "iata": "BA",
  "prefix": "125",
  "url": "https://www.iagcargo.com/iagcargo/portlet/en/html/601",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "Brussels Airlines",
  "name_ko": "브뤼셀항공",
  "iata": "SN",
  "prefix": "082",
  "url": "https://www.lufthansa-cargo.com/en/eservices/etracking",
  "tracking": true,
  "note_ko": "2018년부터 루프트한자 카고(020) AWB로 판매·조회"
 },
 {
  "name": "Cargojet",
  "name_ko": "카고젯",
  "iata": "W8",
  "prefix": "489",
  "url": "https://km.cargojet.com/ords/f?p=102:857",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "Cargolux",
  "name_ko": "카고룩스",
  "iata": "CV",
  "prefix": "172",
  "url": "https://www.cargolux.com/track-and-Trace",
  "tracking": true,
  "note_ko": "카고룩스 이탈리아는 prefix 356"
 },
 {
  "name": "Cathay Pacific",
  "name_ko": "캐세이퍼시픽항공",
  "iata": "CX",
  "prefix": "160",
  "url": "https://www.cathaycargo.com/en-us/track-and-trace.html",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "Cebu Pacific",
  "name_ko": "세부퍼시픽항공",
  "iata": "5J",
  "prefix": "203",
  "url": "https://cebu.smartkargo.com/FrmAWBTracking.aspx",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "Central Airlines",
  "name_ko": "중저우항공",
  "iata": "I9",
  "prefix": "959",
  "url": "http://218.77.210.6:8082/",
  "tracking": true,
  "note_ko": "공식 조회 페이지가 IP 주소이고 보안 연결(HTTPS) 없음"
 },
 {
  "name": "China Airlines",
  "name_ko": "중화항공",
  "iata": "CI",
  "prefix": "297",
  "url": "https://cargo.china-airlines.com/ccnetv2/content/manage/ShipmentTracking.aspx",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "China Cargo Airlines",
  "name_ko": "중국화물항공",
  "iata": "CK",
  "prefix": "112",
  "url": "https://www.ckair.com/cargo-tracking.html",
  "tracking": true,
  "note_ko": "동방항공물류와 같은 시스템. 보안 문자 입력 필요"
 },
 {
  "name": "China Eastern Airlines (Eastern Air Logistics)",
  "name_ko": "중국동방항공",
  "iata": "MU",
  "prefix": "781",
  "url": "https://www.eal-ceair.com/cargo-tracking.html",
  "tracking": true,
  "note_ko": "동방항공물류 사이트. 조회할 때 보안 문자 입력 필요"
 },
 {
  "name": "China Southern Airlines (China Southern Air Logistics)",
  "name_ko": "중국남방항공",
  "iata": "CZ",
  "prefix": "784",
  "url": "https://cargo.csair.com/pages/cargotrackingNew",
  "tracking": true,
  "note_ko": "조회할 때 보안 문자 입력 필요"
 },
 {
  "name": "Copa Airlines Cargo",
  "name_ko": "코파항공",
  "iata": "CM",
  "prefix": "230",
  "url": "https://www.copacargo.com/homepage.aspx?lang=en",
  "tracking": null,
  "note_ko": "사이트가 자동 확인을 막아 조회 기능을 확인하지 못함"
 },
 {
  "name": "Delta Cargo",
  "name_ko": "델타항공",
  "iata": "DL",
  "prefix": "006",
  "url": "https://www.deltacargo.com/Cargo/",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "EgyptAir Cargo",
  "name_ko": "이집트항공",
  "iata": "MS",
  "prefix": "077",
  "url": "https://www.egyptair.com/en/about-egyptair/Pages/Cargo.aspx",
  "tracking": null,
  "note_ko": "사이트가 자동 확인을 막아 조회 기능을 확인하지 못함"
 },
 {
  "name": "Emirates (Emirates SkyCargo)",
  "name_ko": "에미레이트항공",
  "iata": "EK",
  "prefix": "176",
  "url": "https://eskycargo.emirates.com/app/offerandorder/#/home/find-offer",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "Ethiopian Airlines (Ethiopian Cargo)",
  "name_ko": "에티오피아항공",
  "iata": "ET",
  "prefix": "071",
  "url": "https://cargo.ethiopianairlines.com/my-cargo/track-your-shipment",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "Etihad Airways (Etihad Cargo)",
  "name_ko": "에티하드항공",
  "iata": "EY",
  "prefix": "607",
  "url": "https://www.etihadcargo.com/en/e-services/track-shipment",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "European Air Transport (DHL)",
  "name_ko": "",
  "iata": "QY",
  "prefix": "615",
  "url": "https://www.dhl.com/global-en/home/tracking.html",
  "tracking": false,
  "note_ko": "DHL 네트워크 운항사. DHL 운송장 번호로 조회"
 },
 {
  "name": "EVA Air",
  "name_ko": "에바항공",
  "iata": "BR",
  "prefix": "695",
  "url": "https://www.brcargo.com/NEC_WEB/Tracking/QuickTracking/Index",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "FedEx Express",
  "name_ko": "페덱스",
  "iata": "FX",
  "prefix": "023",
  "url": "https://www.fedex.com/en-us/tracking.html",
  "tracking": true,
  "note_ko": "AWB가 아니라 FedEx 운송장 번호로 조회"
 },
 {
  "name": "Finnair Cargo",
  "name_ko": "핀에어",
  "iata": "AY",
  "prefix": "105",
  "url": "https://cargo.finnair.com/api/offerandorder/#/home/find-offer",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "flydubai",
  "name_ko": "플라이두바이",
  "iata": "FZ",
  "prefix": "141",
  "url": "https://cargo.flydubai.com/",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "Garuda Indonesia",
  "name_ko": "가루다인도네시아항공",
  "iata": "GA",
  "prefix": "126",
  "url": "https://cargo.garuda-indonesia.com/",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "Gulf Air",
  "name_ko": "걸프항공",
  "iata": "GF",
  "prefix": "072",
  "url": "https://ebooking.champ.aero/webtracking/gf/tracking.asp",
  "tracking": true,
  "note_ko": "CHAMP 추적 페이지에서 조회"
 },
 {
  "name": "Hainan Airlines (HNA Cargo)",
  "name_ko": "하이난항공",
  "iata": "HU",
  "prefix": "880",
  "url": "https://www.hnacargo.com/Portal2/AwbSearch.aspx",
  "tracking": true,
  "note_ko": "하이난항공 그룹 화물 사이트. 보안 문자 입력 필요"
 },
 {
  "name": "Hawaiian Airlines (Hawaiian Air Cargo)",
  "name_ko": "하와이안항공",
  "iata": "HA",
  "prefix": "173",
  "url": "https://alaska-icargo.ibsplc.aero/icargoportal/portal/loginFlow",
  "tracking": true,
  "note_ko": "알래스카 에어카고 포털로 통합되어 그곳에서 조회"
 },
 {
  "name": "Hong Kong Airlines",
  "name_ko": "홍콩항공",
  "iata": "HX",
  "prefix": "851",
  "url": "https://www.hkaircargo.com/",
  "tracking": true,
  "note_ko": "자매 항공사 홍콩에어카고 사이트에서 조회"
 },
 {
  "name": "Iberia (IAG Cargo)",
  "name_ko": "이베리아항공",
  "iata": "IB",
  "prefix": "075",
  "url": "https://www.iagcargo.com/iagcargo/portlet/en/html/601",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "Icelandair Cargo",
  "name_ko": "아이슬란드항공",
  "iata": "FI",
  "prefix": "108",
  "url": "https://track.champ.aero/FI",
  "tracking": true,
  "note_ko": "CHAMP 추적 페이지에서 조회"
 },
 {
  "name": "IndiGo",
  "name_ko": "인디고",
  "iata": "6E",
  "prefix": "312",
  "url": "https://6ecargo.goindigo.in/",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "ITA Airways",
  "name_ko": "ITA 항공",
  "iata": "AZ",
  "prefix": "055",
  "url": "https://www.lufthansa-cargo.com/en/eservices/etracking",
  "tracking": true,
  "note_ko": "2025년 6월부터 루프트한자 카고(020) AWB로 옮기는 중"
 },
 {
  "name": "Japan Airlines",
  "name_ko": "일본항공",
  "iata": "JL",
  "prefix": "131",
  "url": "https://www.jal.co.jp/jp/en/jalcargo/",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "Juneyao Air",
  "name_ko": "길상항공",
  "iata": "HO",
  "prefix": "018",
  "url": "http://cargo.juneyaoair.com/",
  "tracking": true,
  "note_ko": "보안 연결(HTTPS) 없는 페이지"
 },
 {
  "name": "Kalitta Air",
  "name_ko": "칼리타항공",
  "iata": "K4",
  "prefix": "272",
  "url": "https://www.kalittaair.com/utilities/track-cargo",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "Kenya Airways (KQ Cargo)",
  "name_ko": "케냐항공",
  "iata": "KQ",
  "prefix": "706",
  "url": "https://www.kqcargo.com/en/track-and-trace/",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "KLM Cargo (AF KLM Martinair Cargo)",
  "name_ko": "KLM 네덜란드항공",
  "iata": "KL",
  "prefix": "074",
  "url": "https://www.afklcargo.com/mycargo/shipment/singlesearch",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "Kuwait Airways",
  "name_ko": "쿠웨이트항공",
  "iata": "KU",
  "prefix": "229",
  "url": "https://www.kuwaitairways.com/en/cargo/pages/tracking.aspx",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "LATAM Cargo",
  "name_ko": "라탐항공",
  "iata": "LA",
  "prefix": "045",
  "url": "https://www.latamcargo.com/en/trackshipment",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "LOT Polish Airlines (LOT Cargo)",
  "name_ko": "LOT 폴란드항공",
  "iata": "LO",
  "prefix": "080",
  "url": "https://cargo-tracking.lot.com/",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "Lufthansa Cargo",
  "name_ko": "루프트한자 카고",
  "iata": "LH",
  "prefix": "020",
  "url": "https://www.lufthansa-cargo.com/en/eservices/etracking",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "Malaysia Airlines (MASkargo)",
  "name_ko": "말레이시아항공",
  "iata": "MH",
  "prefix": "232",
  "url": "https://www.maskargo.com/my/en/shipment-tracking.html",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "Martinair Cargo",
  "name_ko": "마틴에어",
  "iata": "MP",
  "prefix": "129",
  "url": "https://www.afklcargo.com/mycargo/shipment/singlesearch",
  "tracking": true,
  "note_ko": "새 화물은 KLM(074) AWB로 발행"
 },
 {
  "name": "MIAT Mongolian Airlines",
  "name_ko": "몽골항공",
  "iata": "OM",
  "prefix": "289",
  "url": "https://www.miat.com/en/page/cargo",
  "tracking": false,
  "note_ko": "화물 안내 페이지"
 },
 {
  "name": "National Airlines",
  "name_ko": "",
  "iata": "N8",
  "prefix": "416",
  "url": "https://www.nationalairlines.com/track-your-shipment/",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "Nippon Cargo Airlines",
  "name_ko": "일본화물항공",
  "iata": "KZ",
  "prefix": "933",
  "url": "https://www.nca.aero/e/index.html",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "Oman Air",
  "name_ko": "오만항공",
  "iata": "WY",
  "prefix": "910",
  "url": "https://cargo.omanair.com/track-shipment",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "Pakistan International Airlines",
  "name_ko": "파키스탄국제항공",
  "iata": "PK",
  "prefix": "214",
  "url": "https://www.freight.aero/tracking.asp",
  "tracking": true,
  "note_ko": "CHAMP의 freight.aero에서 조회(보안 문자)"
 },
 {
  "name": "Philippine Airlines",
  "name_ko": "필리핀항공",
  "iata": "PR",
  "prefix": "079",
  "url": "https://www.philippineairlines.com/ph/en/cargo.html",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "Polar Air Cargo",
  "name_ko": "폴라에어카고",
  "iata": "PO",
  "prefix": "403",
  "url": "https://www.polaraircargo.com/track-and-trace/",
  "tracking": true,
  "note_ko": "아틀라스항공과 같은 추적 시스템"
 },
 {
  "name": "Qantas (Qantas Freight)",
  "name_ko": "콴타스항공",
  "iata": "QF",
  "prefix": "081",
  "url": "https://freight.qantas.com/en-au/online-tracking",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "Qatar Airways Cargo",
  "name_ko": "카타르항공",
  "iata": "QR",
  "prefix": "157",
  "url": "https://www.qrcargo.com/s/track-your-shipment",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "Royal Air Maroc Cargo",
  "name_ko": "로열에어모로코",
  "iata": "AT",
  "prefix": "147",
  "url": "https://cargo.royalairmaroc.com/",
  "tracking": null,
  "note_ko": "사이트에 접속되지 않아 조회 기능을 확인하지 못함"
 },
 {
  "name": "Royal Brunei Airlines",
  "name_ko": "로열브루나이항공",
  "iata": "BI",
  "prefix": "672",
  "url": "https://www.flyroyalbrunei.com/brunei/en/information/flight-cargo-information/",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "Royal Jordanian",
  "name_ko": "로열요르단항공",
  "iata": "RJ",
  "prefix": "512",
  "url": "https://rj-cargo.com/track-and-trace",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "RwandAir Cargo",
  "name_ko": "르완다항공",
  "iata": "WB",
  "prefix": "459",
  "url": "https://www.rwandair.com/business-solutions/cargo-tracking/",
  "tracking": true,
  "note_ko": "조회 결과가 나오지 않을 수 있음"
 },
 {
  "name": "SAS Cargo",
  "name_ko": "스칸디나비아항공",
  "iata": "SK",
  "prefix": "117",
  "url": "https://booking.sascargo.com/app/offerandorder/#/home/find-offer",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "Saudia Cargo",
  "name_ko": "사우디아항공",
  "iata": "SV",
  "prefix": "065",
  "url": "https://www.saudiacargo.com/en/digital-services?tab=trackShipment",
  "tracking": true,
  "note_ko": "조회할 때 보안 문자 입력 필요"
 },
 {
  "name": "SF Airlines",
  "name_ko": "SF항공",
  "iata": "O3",
  "prefix": "921",
  "url": "https://www.sf-airlines.com/track/index.html",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "Shenzhen Airlines",
  "name_ko": "선전항공",
  "iata": "ZH",
  "prefix": "479",
  "url": "https://cargo.shenzhenair.com/",
  "tracking": false,
  "note_ko": "화물 사이트에 조회 기능 없음"
 },
 {
  "name": "Sichuan Airlines (Sichuan Airlines Logistics)",
  "name_ko": "쓰촨항공",
  "iata": "3U",
  "prefix": "876",
  "url": "https://cargonest.sal-sichuanair.com/processTracking",
  "tracking": true,
  "note_ko": "쓰촨항공물류 사이트. 보안 문자 입력 필요"
 },
 {
  "name": "Silk Way West Airlines",
  "name_ko": "실크웨이웨스트항공",
  "iata": "7L",
  "prefix": "501",
  "url": "https://www.silkwaywest.com/e-services/shipment-tracking/",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "Singapore Airlines",
  "name_ko": "싱가포르항공",
  "iata": "SQ",
  "prefix": "618",
  "url": "https://www.siacargo.com/e-services/quicksearch_public/",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "South African Airways Cargo",
  "name_ko": "남아프리카항공",
  "iata": "SA",
  "prefix": "083",
  "url": "https://saa.ibsplc.aero/icargoneoportal/app/main/#/app",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "SriLankan Airlines",
  "name_ko": "스리랑카항공",
  "iata": "UL",
  "prefix": "603",
  "url": "https://srilankancargo.ibsplc.aero/icargoneoportal/app/main/#/app",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "Starlux Airlines",
  "name_ko": "스타럭스항공",
  "iata": "JX",
  "prefix": "189",
  "url": "https://www.starluxcargo.com/en-Global/search-and-management/track-and-trace",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "Swiss WorldCargo",
  "name_ko": "스위스 월드카고",
  "iata": "LX",
  "prefix": "724",
  "url": "https://offerandorder.swissworldcargo.com/app/offerandorder/#/home/find-offer",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "TAP Air Portugal (TAP Air Cargo)",
  "name_ko": "TAP 포르투갈항공",
  "iata": "TP",
  "prefix": "047",
  "url": "https://www.tapcargo.com/en#special-anchor-e-tracking",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "Thai Airways",
  "name_ko": "타이항공",
  "iata": "TG",
  "prefix": "217",
  "url": "https://www.thaicargo.com/en/main",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "Turkish Airlines (Turkish Cargo)",
  "name_ko": "터키항공",
  "iata": "TK",
  "prefix": "235",
  "url": "https://www.turkishcargo.com/en/cargo-tracking",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "United Airlines (United Cargo)",
  "name_ko": "유나이티드항공",
  "iata": "UA",
  "prefix": "016",
  "url": "https://www.unitedcargo.com/en/us/track/",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "UPS Airlines (UPS Air Cargo)",
  "name_ko": "UPS 항공",
  "iata": "5X",
  "prefix": "406",
  "url": "https://www.aircargo.ups.com/en-us/tracking",
  "tracking": true,
  "note_ko": "UPS Air Cargo(공항 간 화물) 추적. 일반 UPS 택배는 UPS 운송장 번호로 조회"
 },
 {
  "name": "Uzbekistan Airways",
  "name_ko": "우즈베키스탄항공",
  "iata": "HY",
  "prefix": "250",
  "url": "https://www.uzairways.com",
  "tracking": false,
  "note_ko": "홈페이지에서 화물 조회 기능을 찾지 못함"
 },
 {
  "name": "Vietnam Airlines",
  "name_ko": "베트남항공",
  "iata": "VN",
  "prefix": "738",
  "url": "https://track.champ.aero/vn",
  "tracking": true,
  "note_ko": "CHAMP 추적 페이지에서 조회"
 },
 {
  "name": "Virgin Atlantic Cargo",
  "name_ko": "버진애틀랜틱",
  "iata": "VS",
  "prefix": "932",
  "url": "https://myvs.virginatlanticcargo.com/app/offerandorder/#/home/find-offer",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "Virgin Australia (Virgin Australia Cargo)",
  "name_ko": "버진오스트레일리아",
  "iata": "VA",
  "prefix": "795",
  "url": "https://va-icargo.ibsplc.aero/icargoportal/portal/loginFlow",
  "tracking": true,
  "note_ko": "국제 화물 예약은 현재 받지 않음(호주 국내)"
 },
 {
  "name": "WestJet Cargo",
  "name_ko": "웨스트젯",
  "iata": "WS",
  "prefix": "838",
  "url": "https://www.westjetcargo.com/en-ca/shipment-services/track-shipment",
  "tracking": true,
  "note_ko": ""
 },
 {
  "name": "Xiamen Airlines",
  "name_ko": "샤먼항공",
  "iata": "MF",
  "prefix": "731",
  "url": "https://cargo.xiamenair.com/Cargo/DF/QuerySearch.html?status=1",
  "tracking": true,
  "note_ko": ""
 }
];
