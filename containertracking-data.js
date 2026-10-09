// 선사별 컨테이너 Prefix(소유자 코드)와 공식 추적 페이지. 각 선사 공식 사이트에서 확인한 값.
window.CTR_CHECKED = '2026년 10월';
window.CTR_CARRIERS = [
 {
  "name": "HMM",
  "name_ko": "HMM",
  "scac": "HDMU",
  "prefixes": [
   "HDMU",
   "HMMU"
  ],
  "url": "https://www.hmm21.com/e-service/general/trackNTrace/TrackNTrace.do",
  "tracking": true,
  "kind": "carrier",
  "note_ko": ""
 },
 {
  "name": "KMTC (Korea Marine Transport Co.)",
  "name_ko": "고려해운",
  "scac": "",
  "prefixes": [
   "KMTU"
  ],
  "url": "https://www.ekmtc.com/index.html#/cargo-tracking",
  "tracking": true,
  "kind": "carrier",
  "note_ko": "e-KMTC 화물추적. 사이트가 자동 접속을 막아 링크를 직접 확인하지 못함"
 },
 {
  "name": "Sinokor Merchant Marine",
  "name_ko": "장금상선",
  "scac": "",
  "prefixes": [
   "SKHU",
   "SKLU",
   "SKRU"
  ],
  "url": "https://ebiz.sinokor.co.kr/Tracking",
  "tracking": true,
  "kind": "carrier",
  "note_ko": "B/L·컨테이너 번호로 조회(로그인 불필요)"
 },
 {
  "name": "Heung-A Line",
  "name_ko": "흥아라인",
  "scac": "",
  "prefixes": [
   "HALU",
   "HLHU"
  ],
  "url": "https://ebiz.heungaline.com/Tracking",
  "tracking": true,
  "kind": "carrier",
  "note_ko": "장금상선 그룹이지만 흥아라인 자체 사이트에서 조회"
 },
 {
  "name": "SM Line",
  "name_ko": "SM상선",
  "scac": "",
  "prefixes": [
   "SMCU"
  ],
  "url": "https://esvc.smlines.com/smline/CUP_HOM_3301.do?sessLocale=ko",
  "tracking": true,
  "kind": "carrier",
  "note_ko": "화물위치조회(로그인 불필요)"
 },
 {
  "name": "Pan Ocean (container service)",
  "name_ko": "팬오션",
  "scac": "",
  "prefixes": [
   "POLU"
  ],
  "url": "https://container.panocean.com/",
  "tracking": true,
  "kind": "carrier",
  "note_ko": "B/L·컨테이너·부킹 번호로 조회"
 },
 {
  "name": "Namsung Shipping",
  "name_ko": "남성해운",
  "scac": "",
  "prefixes": [
   "NSRU",
   "NSSU"
  ],
  "url": "https://ebiz.namsung.co.kr/?direct=Y&code=00010025&rtnUrl=/WS/trk/UIE0710.xml&title=cargo",
  "tracking": true,
  "kind": "carrier",
  "note_ko": "남성해운 홈페이지가 연결하는 조회 페이지"
 },
 {
  "name": "Dong Young Shipping",
  "name_ko": "동영해운",
  "scac": "",
  "prefixes": [
   "DYLU"
  ],
  "url": "https://ebiz.pcsline.co.kr/?direct=Y&code=00010025&rtnUrl=/WS/trk/UIE0710.xml&title=cargo",
  "tracking": true,
  "kind": "carrier",
  "note_ko": "공식 사이트는 pcsline.co.kr"
 },
 {
  "name": "CK Line",
  "name_ko": "천경해운",
  "scac": "",
  "prefixes": [
   "CKSU"
  ],
  "url": "https://es.ckline.co.kr/?cmd=TRK",
  "tracking": true,
  "kind": "carrier",
  "note_ko": "2024년 1월 새 e-Service. B/L·부킹 번호로 조회"
 },
 {
  "name": "Pan Continental Shipping (Pancon)",
  "name_ko": "범주해운",
  "scac": "",
  "prefixes": [
   "PCLU"
  ],
  "url": "https://www.pancon.co.kr/pan/pageLink.pcl?link=COM/WEB_212&SCRN_ID=COM",
  "tracking": true,
  "kind": "carrier",
  "note_ko": "컨테이너·부킹·B/L 번호로 조회"
 },
 {
  "name": "Dongjin Shipping",
  "name_ko": "동진상선",
  "scac": "",
  "prefixes": [
   "DJLU"
  ],
  "url": "https://esvc.djship.co.kr/gnoss/CUP_HOM_3301.do?sessLocale=ko",
  "tracking": true,
  "kind": "carrier",
  "note_ko": "공식 사이트는 djship.co.kr"
 },
 {
  "name": "Weidong Ferry (Weihai Weidong Ferry)",
  "name_ko": "위동항운",
  "scac": "",
  "prefixes": [],
  "url": "https://cargo.weidong.com/index.do",
  "tracking": true,
  "kind": "carrier",
  "note_ko": "한중 카페리·컨테이너. BIC 등록 Prefix 확인 못함"
 },
 {
  "name": "MSC (Mediterranean Shipping Company)",
  "name_ko": "MSC",
  "scac": "MSCU",
  "prefixes": [
   "MADU",
   "MEDU",
   "MSBU",
   "MSCU",
   "MSDU",
   "MSGU",
   "MSMU",
   "MSNU",
   "MSPU",
   "MSRU",
   "MSTU",
   "MSVU",
   "MSYU",
   "MSZU"
  ],
  "url": "https://www.msc.com/en/track-a-shipment",
  "tracking": true,
  "kind": "carrier",
  "note_ko": "컨테이너·B/L·부킹 번호로 조회(로그인 불필요)"
 },
 {
  "name": "Maersk (incl. Hamburg Süd, Sealand)",
  "name_ko": "머스크",
  "scac": "MAEU",
  "prefixes": [
   "APMU",
   "CNIU",
   "COZU",
   "GRIU",
   "HASU",
   "MAEU",
   "MALU",
   "MCAU",
   "MCHU",
   "MCRU",
   "MHHU",
   "MIEU",
   "MMAU",
   "MNBU",
   "MRFU",
   "MRKU",
   "MRSU",
   "MSAU",
   "MSFU",
   "MSKU",
   "MSWU",
   "MVIU",
   "MWCU",
   "MWMU",
   "OCLU",
   "POCU",
   "PONU",
   "SEAU",
   "SUDU",
   "TORU"
  ],
  "url": "https://www.maersk.com/tracking/",
  "tracking": true,
  "kind": "carrier",
  "note_ko": "함부르크수드(SUDU)·씨랜드(SEAU)·P&O Nedlloyd 옛 코드 포함"
 },
 {
  "name": "CMA CGM",
  "name_ko": "CMA CGM",
  "scac": "CMDU",
  "prefixes": [
   "AMCU",
   "CGMU",
   "CMAU",
   "CMNU",
   "CSFU",
   "CSOU",
   "ECMU",
   "KLCU",
   "MMCU",
   "SMUU"
  ],
  "url": "https://www.cma-cgm.com/ebusiness/tracking",
  "tracking": true,
  "kind": "carrier",
  "note_ko": "조회할 때 보안 확인이 나올 수 있음"
 },
 {
  "name": "COSCO Shipping Lines",
  "name_ko": "코스코",
  "scac": "COSU",
  "prefixes": [
   "CBHU",
   "CCLU",
   "CSGU",
   "CSLU",
   "CSNU"
  ],
  "url": "https://elines.coscoshipping.com/ebusiness/cargoTracking",
  "tracking": true,
  "kind": "carrier",
  "note_ko": "CBHU·CCLU·CSLU는 COSCO 계열 리스사(Florens 등) 소유로 등록돼 있지만 COSCO가 운항"
 },
 {
  "name": "Hapag-Lloyd (incl. UASC legacy)",
  "name_ko": "하파그로이드",
  "scac": "HLCU",
  "prefixes": [
   "CMUU",
   "CPSU",
   "CSQU",
   "CSVU",
   "DAYU",
   "HAMU",
   "HLBU",
   "HLCU",
   "HLXU",
   "ITAU",
   "MOMU",
   "NIDU",
   "UACU",
   "UAEU",
   "UASU"
  ],
  "url": "https://www.hapag-lloyd.com/en/online-business/track/track-by-container-solution.html",
  "tracking": true,
  "kind": "carrier",
  "note_ko": "UASC 옛 코드 포함. 보안 확인이 나올 수 있음"
 },
 {
  "name": "ONE (Ocean Network Express)",
  "name_ko": "ONE",
  "scac": "ONEY",
  "prefixes": [
   "MOAU",
   "MOEU",
   "MOFU",
   "MOGU",
   "MORU",
   "MOSU",
   "MOTU",
   "ONEU"
  ],
  "url": "https://www.one-line.com/one-ecom/manage-shipment/cargo-tracking",
  "tracking": true,
  "kind": "carrier",
  "note_ko": "MOL 옛 코드 포함"
 },
 {
  "name": "Evergreen Line",
  "name_ko": "에버그린",
  "scac": "EGLV",
  "prefixes": [
   "EGHU",
   "EGMU",
   "EGSU",
   "EISU",
   "EMCU",
   "EMEU",
   "EVGU",
   "HMCU",
   "IMTU",
   "LTIU"
  ],
  "url": "https://ct.shipmentlink.com/servlet/TDB1_CargoTracking.do",
  "tracking": true,
  "kind": "carrier",
  "note_ko": "ShipmentLink에서 조회. Italia Marittima 코드 포함"
 },
 {
  "name": "Yang Ming",
  "name_ko": "양밍",
  "scac": "YMJA",
  "prefixes": [
   "YMLU",
   "YMMU"
  ],
  "url": "https://www.yangming.com/e-service/track_trace/track_trace_cargo_tracking.aspx",
  "tracking": true,
  "kind": "carrier",
  "note_ko": "2023년 10월부터 SCAC YMJA"
 },
 {
  "name": "ZIM",
  "name_ko": "짐라인",
  "scac": "ZIMU",
  "prefixes": [
   "ZCLU",
   "ZCSU",
   "ZIMU"
  ],
  "url": "https://www.zim.com/tools/track-a-shipment",
  "tracking": true,
  "kind": "carrier",
  "note_ko": "2026년 2월 하파그로이드 인수 합의. 거래 완료 후 주소가 바뀔 수 있음"
 },
 {
  "name": "Wan Hai Lines",
  "name_ko": "완하이",
  "scac": "WHLC",
  "prefixes": [
   "WHAU",
   "WHCU",
   "WHLU",
   "WHSU"
  ],
  "url": "https://www.wanhai.com/views/cargoTrack/CargoTrack.xhtml",
  "tracking": true,
  "kind": "carrier",
  "note_ko": ""
 },
 {
  "name": "PIL (Pacific International Lines)",
  "name_ko": "PIL",
  "scac": "",
  "prefixes": [
   "PCIU",
   "PIDU",
   "PILU"
  ],
  "url": "https://www.pilship.com/digital-solutions/?tab=customer&id=track-trace&label=containerTandT&module=TrackContStatus",
  "tracking": true,
  "kind": "carrier",
  "note_ko": ""
 },
 {
  "name": "OOCL (Orient Overseas Container Line)",
  "name_ko": "OOCL",
  "scac": "OOLU",
  "prefixes": [
   "OOCU",
   "OOLU"
  ],
  "url": "https://www.oocl.com/eng/ourservices/eservices/cargotracking/Pages/cargotracking.aspx",
  "tracking": true,
  "kind": "carrier",
  "note_ko": "COSCO 그룹이지만 OOCL 자체 사이트에서 조회"
 },
 {
  "name": "APL (CMA CGM group)",
  "name_ko": "APL",
  "scac": "APLU",
  "prefixes": [
   "APHU",
   "APLU",
   "APRU",
   "APZU"
  ],
  "url": "https://www.apl.com/ebusiness/tracking",
  "tracking": true,
  "kind": "carrier",
  "note_ko": "CMA CGM 그룹 브랜드. 같은 플랫폼에서 조회"
 },
 {
  "name": "ANL (CMA CGM group)",
  "name_ko": "ANL",
  "scac": "",
  "prefixes": [
   "ANNU"
  ],
  "url": "https://www.anl.com.au/ebusiness/tracking",
  "tracking": true,
  "kind": "carrier",
  "note_ko": "CMA CGM 그룹 호주·오세아니아 브랜드"
 },
 {
  "name": "CNC Line (Cheng Lie Navigation, CMA CGM group)",
  "name_ko": "CNC",
  "scac": "",
  "prefixes": [
   "CNCU"
  ],
  "url": "https://www.cnc-line.com/ebusiness/tracking",
  "tracking": true,
  "kind": "carrier",
  "note_ko": "CMA CGM 그룹 아시아 역내 브랜드"
 },
 {
  "name": "NYK Line (container, legacy)",
  "name_ko": "NYK",
  "scac": "",
  "prefixes": [
   "NYKU"
  ],
  "url": "https://www.one-line.com/one-ecom/manage-shipment/cargo-tracking",
  "tracking": true,
  "kind": "carrier",
  "note_ko": "컨테이너 사업은 ONE으로 통합. ONE에서 조회"
 },
 {
  "name": "K Line (container, legacy)",
  "name_ko": "케이라인",
  "scac": "",
  "prefixes": [
   "AKLU",
   "KKFU",
   "KKTU",
   "KLFU",
   "KLTU"
  ],
  "url": "https://www.one-line.com/one-ecom/manage-shipment/cargo-tracking",
  "tracking": true,
  "kind": "carrier",
  "note_ko": "컨테이너 사업은 ONE으로 통합. ONE에서 조회"
 },
 {
  "name": "CULines (China United Lines / CU Lines)",
  "name_ko": "CU라인",
  "scac": "",
  "prefixes": [
   "CULU",
   "CUSU",
   "CUVU"
  ],
  "url": "https://www.culines.com/en/site/bill",
  "tracking": true,
  "kind": "carrier",
  "note_ko": ""
 },
 {
  "name": "RCL (Regional Container Lines)",
  "name_ko": "RCL",
  "scac": "",
  "prefixes": [
   "REGU"
  ],
  "url": "https://www.rclgroup.com/Home#cargo",
  "tracking": true,
  "kind": "carrier",
  "note_ko": ""
 },
 {
  "name": "SITC",
  "name_ko": "SITC",
  "scac": "",
  "prefixes": [
   "SITU"
  ],
  "url": "https://ebusiness.sitcline.com/#/topMenu/cargoTrack",
  "tracking": true,
  "kind": "carrier",
  "note_ko": ""
 },
 {
  "name": "T.S. Lines",
  "name_ko": "TS라인",
  "scac": "",
  "prefixes": [
   "TSSU",
   "TSTU"
  ],
  "url": "https://www.tslines.com/en/tracking",
  "tracking": true,
  "kind": "carrier",
  "note_ko": ""
 },
 {
  "name": "Gold Star Line",
  "name_ko": "골드스타라인",
  "scac": "",
  "prefixes": [
   "GMOU",
   "GMSU",
   "GOSU",
   "GSLU"
  ],
  "url": "https://www.goldstarline.com/tools/track_shipment",
  "tracking": true,
  "kind": "carrier",
  "note_ko": "ZIM 자회사. 자체 사이트에서 조회"
 },
 {
  "name": "Grimaldi Group",
  "name_ko": "그리말디",
  "scac": "",
  "prefixes": [],
  "url": "https://www.gnet.grimaldi-eservice.com/gnet/pages_gatlas/wfcontainertracking",
  "tracking": true,
  "kind": "carrier",
  "note_ko": "BIC 등록 Prefix 없음(GRIU는 머스크 코드)"
 },
 {
  "name": "Matson",
  "name_ko": "맷슨",
  "scac": "MATS",
  "prefixes": [
   "CXCU",
   "MATU"
  ],
  "url": "https://www.matson.com/shipment-tracking.html",
  "tracking": true,
  "kind": "carrier",
  "note_ko": ""
 },
 {
  "name": "Ignazio Messina (Messina Line)",
  "name_ko": "메시나",
  "scac": "",
  "prefixes": [
   "LMCU"
  ],
  "url": "https://messinaline.it/cntr-tracking/",
  "tracking": true,
  "kind": "carrier",
  "note_ko": ""
 },
 {
  "name": "Samudera Shipping Line",
  "name_ko": "사무데라",
  "scac": "",
  "prefixes": [
   "SIKU"
  ],
  "url": "https://ssl-cts.samudera.id:3000/",
  "tracking": true,
  "kind": "carrier",
  "note_ko": "예전 samudera.com 대신 그룹 조회 시스템"
 },
 {
  "name": "Swire Shipping (China Navigation Co.)",
  "name_ko": "스와이어",
  "scac": "PLLU",
  "prefixes": [],
  "url": "https://online.swireshipping.com/tracking",
  "tracking": true,
  "kind": "carrier",
  "note_ko": "BIC 등록 Prefix 없음. SCAC는 노선에 따라 PLLU·SSBF·CHVW"
 },
 {
  "name": "Sinotrans Container Lines (Sinolines)",
  "name_ko": "시노트란스",
  "scac": "",
  "prefixes": [
   "SNBU",
   "SNHU"
  ],
  "url": "https://www.sinolines.com/",
  "tracking": null,
  "kind": "carrier",
  "note_ko": "사이트가 자동 확인을 막아 조회 기능을 확인하지 못함"
 },
 {
  "name": "Seaboard Marine",
  "name_ko": "씨보드 마린",
  "scac": "SMLU",
  "prefixes": [
   "SMLU"
  ],
  "url": "https://www.seaboardmarine.com/",
  "tracking": true,
  "kind": "carrier",
  "note_ko": "홈페이지 조회 칸에서 조회"
 },
 {
  "name": "Arkas Line",
  "name_ko": "아르카스",
  "scac": "",
  "prefixes": [
   "ARKU"
  ],
  "url": "https://arkasline.com.tr/en/online-tracking/",
  "tracking": true,
  "kind": "carrier",
  "note_ko": ""
 },
 {
  "name": "Antong Holdings (Quanzhou Antong Logistics / Quanzhou Ansheng Shipping)",
  "name_ko": "안통",
  "scac": "",
  "prefixes": [
   "ATHU"
  ],
  "url": "http://www.antong56.com/",
  "tracking": null,
  "kind": "carrier",
  "note_ko": "중국 내항 위주. 조회 기능을 확인하지 못함"
 },
 {
  "name": "Emirates Shipping Line (ESL)",
  "name_ko": "에미레이트 쉽핑 라인",
  "scac": "EMIV",
  "prefixes": [
   "ESDU",
   "ESPU"
  ],
  "url": "https://www.emiratesline.com/track/",
  "tracking": true,
  "kind": "carrier",
  "note_ko": ""
 },
 {
  "name": "Unifeeder (DP World)",
  "name_ko": "유니피더",
  "scac": "",
  "prefixes": [
   "UNFU"
  ],
  "url": "https://www.dpworld.com/en/supply-chain-solutions/marine-services/shipping-solutions/track-and-trace",
  "tracking": true,
  "kind": "carrier",
  "note_ko": "DP World 사이트로 통합"
 },
 {
  "name": "Imoto Lines",
  "name_ko": "이모토라인",
  "scac": "",
  "prefixes": [
   "KCBU"
  ],
  "url": "https://www.imotoline.co.jp/",
  "tracking": false,
  "kind": "carrier",
  "note_ko": "일본 내항 피더. 공개 조회 없음"
 },
 {
  "name": "Interasia Lines",
  "name_ko": "인터아시아",
  "scac": "",
  "prefixes": [
   "IAAU"
  ],
  "url": "https://www.interasia.cc/Service/Form?servicetype=0",
  "tracking": true,
  "kind": "carrier",
  "note_ko": ""
 },
 {
  "name": "Kambara Kisen",
  "name_ko": "캄바라기선",
  "scac": "",
  "prefixes": [
   "KMBU"
  ],
  "url": "https://algesvc.kambara-kisen.co.jp/gnoss/CUP_HOM_3000.do",
  "tracking": true,
  "kind": "carrier",
  "note_ko": "일본 지방항-중국 노선"
 },
 {
  "name": "Crowley",
  "name_ko": "크라울리",
  "scac": "CAMN",
  "prefixes": [
   "CMCU",
   "SEFU"
  ],
  "url": "https://csight.crowley.com/crowley/s/shipment-tracking",
  "tracking": true,
  "kind": "carrier",
  "note_ko": ""
 },
 {
  "name": "Turkon Line",
  "name_ko": "투르콘",
  "scac": "",
  "prefixes": [
   "TRKU"
  ],
  "url": "https://myturkonline.turkon.com/tracking",
  "tracking": true,
  "kind": "carrier",
  "note_ko": "My Turkon Line에서 조회"
 },
 {
  "name": "Blue Sky Intermodal",
  "name_ko": "",
  "scac": "",
  "prefixes": [
   "BSIU",
   "SKIU"
  ],
  "url": "https://bsiu.com/",
  "tracking": false,
  "kind": "lessor",
  "note_ko": "운항 선사 사이트에서 B/L·컨테이너 번호로 조회"
 },
 {
  "name": "CAI International (incl. Beacon Intermodal Leasing)",
  "name_ko": "CAI 인터내셔널",
  "scac": "",
  "prefixes": [
   "BEAU",
   "BENU",
   "BMOU",
   "CAAU",
   "CAHU",
   "CAIU",
   "CAJU",
   "CAOU",
   "CAXU",
   "CAZU",
   "CESU",
   "CIPU",
   "CMHU",
   "CNEU",
   "CZZU",
   "NEVU",
   "OTEU",
   "SKYU",
   "SKZU",
   "STJU"
  ],
  "url": "https://www.capps.com/",
  "tracking": false,
  "kind": "lessor",
  "note_ko": "2023년 Beacon 합병(BEAU·BMOU 등 포함). 운항 선사 사이트에서 조회"
 },
 {
  "name": "Raffles Lease",
  "name_ko": "",
  "scac": "",
  "prefixes": [
   "FPTU",
   "MBJU",
   "RFCU",
   "RLTU"
  ],
  "url": "https://www.raffleslease.com/",
  "tracking": false,
  "kind": "lessor",
  "note_ko": "탱크 컨테이너 리스. 운항 선사 사이트에서 조회"
 },
 {
  "name": "UES International",
  "name_ko": "",
  "scac": "",
  "prefixes": [
   "GUTU",
   "GVCU",
   "GVDU",
   "UECU",
   "UESU",
   "UETU",
   "UXXU"
  ],
  "url": "https://www.uesleasing.com/",
  "tracking": false,
  "kind": "lessor",
  "note_ko": "운항 선사 사이트에서 B/L·컨테이너 번호로 조회"
 },
 {
  "name": "Dong Fang International Container (DFIC)",
  "name_ko": "동방국제컨테이너",
  "scac": "",
  "prefixes": [
   "LYGU"
  ],
  "url": "http://www.dficlyg.com/",
  "tracking": false,
  "kind": "lessor",
  "note_ko": "COSCO 계열 컨테이너 제조사. 운항 선사 사이트에서 조회"
 },
 {
  "name": "Seaco (Global Sea Containers Ltd)",
  "name_ko": "시코",
  "scac": "",
  "prefixes": [
   "SEGU"
  ],
  "url": "https://seacoglobal.com/",
  "tracking": false,
  "kind": "lessor",
  "note_ko": "2025년 12월 Textainer가 인수. 운항 선사 사이트에서 조회"
 },
 {
  "name": "SeaCube Container Leasing",
  "name_ko": "시큐브",
  "scac": "",
  "prefixes": [
   "CRLU",
   "CTWU",
   "DRYU",
   "GAOU",
   "GIPU",
   "GSPU",
   "INBU",
   "INKU",
   "INNU",
   "INTU",
   "IPXU",
   "IRNU",
   "MGNU",
   "MTSU",
   "MTYU",
   "OTPU",
   "SDDU",
   "SZLU",
   "WBPU"
  ],
  "url": "https://seacubecontainers.com/",
  "tracking": false,
  "kind": "lessor",
  "note_ko": "운항 선사 사이트에서 B/L·컨테이너 번호로 조회"
 },
 {
  "name": "CARU Containers",
  "name_ko": "카루",
  "scac": "",
  "prefixes": [
   "ALNU",
   "ARDU",
   "ARTU",
   "CAEU",
   "CARU",
   "CATU",
   "CORU",
   "CUBU",
   "LCRU",
   "LGEU",
   "MANU",
   "MARU",
   "OFFU",
   "PSCU",
   "RLXU",
   "RTHU",
   "SCSU",
   "TRTU",
   "WEDU",
   "WSCU"
  ],
  "url": "https://www.carucontainers.com/",
  "tracking": false,
  "kind": "lessor",
  "note_ko": "운항 선사 사이트에서 B/L·컨테이너 번호로 조회"
 },
 {
  "name": "Textainer (TGH)",
  "name_ko": "텍스테이너",
  "scac": "",
  "prefixes": [
   "AMFU",
   "AMZU",
   "AXIU",
   "CEOU",
   "CHIU",
   "CLHU",
   "CLOU",
   "CRSU",
   "CRTU",
   "CRXU",
   "CUCU",
   "CXDU",
   "CXRU",
   "CXSU",
   "CXTU",
   "DNAU",
   "GAEU",
   "GATU",
   "GAZU",
   "GCEU",
   "GESU",
   "GSTU",
   "HCIU",
   "HJMU",
   "IEAU",
   "LLTU",
   "MAGU",
   "MAXU",
   "MGLU",
   "MLCU",
   "OCGU",
   "PRSU",
   "RFSU",
   "SBOU",
   "SCEU",
   "SCXU",
   "SCZU",
   "SEKU",
   "SELU",
   "SEMU",
   "TEMU",
   "TENU",
   "TEXU",
   "TGBU",
   "TGHU",
   "THLU",
   "TXBU",
   "TXGU",
   "TXTU",
   "WCIU",
   "XINU"
  ],
  "url": "https://www.textainer.com/",
  "tracking": false,
  "kind": "lessor",
  "note_ko": "2025년 12월 Seaco 인수. 운항 선사 사이트에서 조회"
 },
 {
  "name": "Touax Container Leasing",
  "name_ko": "투악스",
  "scac": "",
  "prefixes": [
   "GLDU",
   "GRDU",
   "PGTU",
   "TBTU",
   "TGCU",
   "TGKU",
   "TGSU",
   "TLRU"
  ],
  "url": "https://www.touax-container.com/",
  "tracking": false,
  "kind": "lessor",
  "note_ko": "운항 선사 사이트에서 B/L·컨테이너 번호로 조회"
 },
 {
  "name": "Triton International (incl. legacy TAL International)",
  "name_ko": "트라이톤",
  "scac": "",
  "prefixes": [
   "EQRU",
   "GCXU",
   "HNSU",
   "ICSU",
   "IKSU",
   "MTRU",
   "TBIU",
   "TBRU",
   "TCKU",
   "TCLU",
   "TCNU",
   "TDRU",
   "TDTU",
   "TIIU",
   "TLLU",
   "TNTU",
   "TOLU",
   "TPHU",
   "TRDU",
   "TRHU",
   "TRIU",
   "TRLU",
   "TRVU",
   "TTNU",
   "YOIU"
  ],
  "url": "https://www.tritoninternational.com/",
  "tracking": false,
  "kind": "lessor",
  "note_ko": "운항 선사 사이트에서 B/L·컨테이너 번호로 조회"
 },
 {
  "name": "Florens (COSCO Shipping Development)",
  "name_ko": "플로렌스",
  "scac": "",
  "prefixes": [
   "DFOU",
   "DFSU",
   "FBIU",
   "FBLU",
   "FCGU",
   "FCIU",
   "FCLU",
   "FCXU",
   "FFAU",
   "FJKU",
   "FNBU",
   "FNGU",
   "FNTU",
   "FSCU",
   "FTAU",
   "JTMU",
   "PGXU"
  ],
  "url": "https://www.florens.com/",
  "tracking": false,
  "kind": "lessor",
  "note_ko": "COSCO 계열 리스사. CBHU는 COSCO 줄 참고. 운항 선사 사이트에서 조회"
 }
];
