/* ================= DATA ================= */
var typed = new Typed('.auto-type', {
  strings: ['เมืองสมุทรปราการ', 'บางพลี', 'บางเสาธง','บางบ่อ', 'พระประแดง', 'พระสมุทรเจดีย์','พระสมุทรเจดีย์'],
  typeSpeed: 80,
  backSpeed: 40,
  loop: true
});

const DISTRICTS = [
  {
    id: 'mueang', name: 'อำเภอเมืองสมุทรปราการ', lat: 13.5991, lng: 100.5968,
    tag: ''
  },
  {
    id: 'bangphli', name: 'อำเภอบางพลี', lat: 13.6040, lng: 100.7123,
    tag: ''
  },
  {
    id: 'bangsaothong', name: 'อำเภอบางเสาธง', lat: 13.5280, lng: 100.7800,
    tag: ''
  },
  {
    id: 'bangbo', name: 'อำเภอบางบ่อ', lat: 13.5744, lng: 100.8358,
    tag: ''
  },
  {
    id: 'phrapradaeng', name: 'อำเภอพระประแดง', lat: 13.6570, lng: 100.5330,
    tag: ''
  },
  {
    id: 'phrasamutchedi', name: 'อำเภอพระสมุทรเจดีย์', lat: 13.5998, lng: 100.5940,
    tag: ''
  }
];

const Age = [
  
   {
    id: 'historytongtin', 
    name: 'ประวัติศาสตร์ท้องถิ่นจังหวัดสมุทรปราการ',
    tag: ''
  },
  {
    id: 'lopburi', 
    name: 'สมัยลพบุรี',
    tag: ''
  },
   {
    id: 'sukhothai', 
    name: 'สมัยสุโขทัย',
    tag: ''
  },
   {
    id: 'ayothaya', 
    name: 'สมัยอยุธยา',
    tag: ''
  },
   {
    id: 'thonburi', 
    name: 'สมัยธนบุรี',
    tag: ''
  },
   {
    id: 'rattanakosin', 
    name: 'สมัยรัตนโกสินทร์',
    tag: ''
  },
   {
    id: 'prapenee', 
    name:  'ประเพณีวัฒนธรรม' ,
    tag: ''
  }

];

const DISTRICT_ICONS = {
};

/* หนึ่งไฮไลต์ต่ออำเภอ สำหรับการ์ดแนะนำในหน้าแรก */
const FEATURED_IDS = [
  'erawan', 'bangphliold', 'chujai',
  'peekamarket', 'bangkachao', 'chedi'
];

const CAT_LABEL = {
  all: 'ทั้งหมด',
  landmark: 'แลนด์มาร์ก',
  temple: 'วัด',
  nature: 'ธรรมชาติ',
  market: 'ตลาด',
  cafe: 'คาเฟ่/ร้านอาหาร'
};

const PLACES = [
 {
    id: 'tower',
    district: 'mueang',
    name: 'หอชมเมืองสมุทรปราการ',
    category: 'landmark',
    teaser: '',
    about: 'เป็น Landmark ที่น่าสนใจของจังหวัดสมุทรปราการ  ภายในอาคารมีการจัดแสดงแบบพิพิธภัณฑ์ โดยรวบรวมเรื่องราวของสถานที่สำคัญ ข้อมูลบุคคลสำคัญ ความรู้ประจำจังหวัด แหล่งรวมหนังสือ, ภาพยนตร์, ดนตรี และเทคโนโลยีที่น่าสนใจ ซึ่งเป็นยอดหอคอยเป็นจุดที่สามารถชมทัศนียภาพได้ 360 องศา พื้นที่อุทยานการเรียนรู้อ่าวไทยแบ่งพื้นที่ออกเป็น 4 ส่วนคือ พิพิธภัณฑ์เด็ก พิพิธภัณฑ์สมุทรปราการ ห้องสมุด หอชมเมือง นับได้ว่าเป็นสถานที่ที่ควรมาของจังหวัดสมุทรปราการ  ',
    transport: 'รถไฟฟ้า BTS สายสีเขียว สถานีปากน้ำ E16 จากนั้นเดินสกายวอล์คและออกทางออก 6 เป็นทางออกที่เชื่อมต่อกับบริเวณหอชมเมือง วันเปิดทำการ วันอังคาร – วันอาทิตย์ และวันหยุดนักขัตฤกษ์ วันหยุดทำการ วันจันทร์ เวลาเปิด-ปิด 10:00 น. – 17:00 น. ',
    image: "img/chommueng.png",
    detailImages: [
      "img/chommueng2.jpg",
      "img/chommueng3.jpg",
      "img/chommueng4.jpg"
    ]
  },
    {
    id: 'boran',
    district: 'mueang',
    name: 'เมืองโบราณสมุทรปราการ',
    category: 'landmark',
    teaser: '',
    about: 'เมืองโบราณเป็นสถานที่ที่มีลักษณะคล้ายคลึงกับลักษณะของแผนที่ประเทศไทย ซึ่งตำแหน่งทในเมืองโบราณจะมีการก่อสร้างและปาติมากรรมมาบูรณะปฏิสังขรจัดวางตำแหน่งให้ตรงตามภูมิภาคต้นแบบโดยแบ่งเป็น 4 ภาค คือ ภาคเหนือ ภาคอีสาน ภาคกลางและภาคใต้ แล้วสร้างสถาปัตยกรรมในพื้นที่เหล่านั้นให้สอดคล้องคล้ายคลึงกับภาคนั้นๆ เปิดให้บริการทุกวัน ตั้งแต่เวลา 09.00 - 19.00 น.',
    transport: 'รถไฟฟ้า BTS สถานีเคหะฯ (E23) ทางออก 3 แล้วต่อรถสองแถวสาย 1140 หรือรถตู้ประจำทาง',
    image: "img/boran.jpg",
    detailImages: [
      "img/boran2.png",
      "img/boran3.png",
      "img/boran4.png"
    ]
  },

  {
    id: 'erawan',
    district: 'mueang',
    name: 'พิพิธภัณฑ์ช้างเอราวัณ',
    category: 'landmark',
    teaser: '',
    about: 'เป็นประติมากรรมลอยตัวรูปช้าง 3 เศียร ซึ่งในทางวรรณคดีไทยเอราวัณซึ่งมีเศียรทั้งหมด 33 เศียร แต่เนื่องจากปัญหาขนาดและโครงสร้างที่ซับซ้อนจึงลดมาเหลือเพียง 3 เศียร พิพิธภัณฑ์ช้างเอราวัณ สถานที่แห่งนี้เป็นแหล่งท่องเที่ยวที่สำคัญและโดดเด่นแห่งหนึ่งของจังหวัดสมุทรปราการ ภายในจะมีการตกแต่งผสานความงามแบบตะวันตก  ',
    transport: 'รถไฟฟ้า BTS สถานีช้างเอราวัณ (E17) ทางออก 2 หรือรถประจำทางสาย 2, 25, 102, 129, 142, 511',
    image: "img/chang.jpg",
    detailImages: [
      "img/chang1.jpg",
      "img/chang2.webp",
      "img/chang3.jpg"
    ]
  },

  {
    id: 'asokaram',
    district: 'mueang',
    name: 'วัดอโศการาม',
    category: 'temple',
    teaser: '',
    about: 'เป็นวัดเก่าแก่ที่มีความสำคัญ เป็นศาสนสถานที่มีความงดงามทางสถาปัตยกรรม โดยเฉพาะพระธุตังคเจดีย์ เจดีย์สีขาวขนาดใหญ่ เป็นปูชนียสถานประดิษฐานพระบรมสารีริธาตุ',
    transport: 'จากถนนสุขุมวิท กม.31 เลี้ยวเข้าซอยสุขาภิบาล 58 หรือใช้บริการรถสองแถวสายปากน้ำ-คลองด่าน/ตำหรุ',
    image: "img/asokaram.jpg",
    detailImages: [
      "img/asokaram2.jpg",
      "img/asokaram3.jpg",
      "img/asokaram4.jpg"
    ]
  },
    {
    id: 'kruat',
    district: 'mueang',
    name: 'พิพิธภัณฑ์ครุฑ',
    category: 'temple',
    teaser: '',
    about: 'เป็นพิพิธภัณฑ์ครุฑแห่งแรกและแห่งเดียวในอาเซียน เป็นสถานที่รวบรวมและจัดแสดงองค์ครุฑพระราชทานกว่า 150 องค์ ที่อัญเชิญมาจากธนาคารนครหลวงไทยกว่า 100 สาขาทั่วประเทศไทยมาประดิษฐาน ณ พิพิธภัณฑ์ครุฑ เพื่อเป็นส่วนหนึ่งในอนุรักษ์ศิลปกรรม และมรดกทางวัฒนธรรมไทย ส่งผ่านถึงคนรุ่นหลังให้ตระหนักถึงคุณค่าขององค์ครุฑที่มีกับสังคม พร้อมทั้งสืบสานสัญลักษณ์แห่งความกตัญญู ความดีงาม และความซื่อสัตย์ ให้คงอยู่คู่สังคมไทยตลอดไป ผ่านการจัดแสดงที่ทันสมัย เปิดให้บริการทุกวันศุกร์และวันเสาร์ ตั้งแต่เวลา 10.00 – 16.30 น. ',
    transport: 'รถประจำทางสาย 1207 หรือ 6008',
    image: "img/kruat.jpg",
     detailImages: [
      "img/kruat2.jpg",
      "img/kruat3.jpg",
      "img/kruat4.jpg"
    ]
  },

  {
    id: 'bangpu',
    district: 'mueang',
    name: 'สถานตากอากาศบางปู',
    category: 'landmark',
    teaser: '',
    about: 'สถานที่ท่องเที่ยวพักผ่อนตากอากาศทางชายทะเลด้านอ่าวไทย มีเส้นทางชมป่า ชมนก โดยมีจำนวนนกกว่า 200 ชนิดอาศัยอยู่ ให้นักท่องเที่ยวได้ชมตลอดทั้งปี โดยเฉพาะประมาณกลางเดือนตุลาคมถึงเดือนพฤศจิกายนของทุกปี นกนางนวลจำนวนเป็นพันเป็นหมื่นตัวจะอพยพหนัหนาวจากไซบีเรียมาอาศัยอยู่ที่นี่ในช่วงฤดูหนาว เปิดบริการ ทุกวันเวลา 10.00 - 20.00 น.',
    transport: 'รถไฟฟ้า BTS สายสีเขียว ลงสถานีเคหะ E23 ออกทางทางออกที่ 3 แล้วต่อด้วยรถสองแถว สาย (36) ปากน้ำ-บางปู' ,
    image: "img/Bangpu.png",
    detailImages: [
      "img/Bangpu2.png",
      "img/Bangpu3.png",
      "img/Bangpu4.png"
    ]
  },

  {
    id: 'crocfarm',
    district: 'mueang',
    name: 'ฟาร์มจระเข้สมุทรปราการ',
    category: 'landmark',
    teaser: '',
     about: 'เป็นฟาร์มจระเข้ที่ใหญ่ที่สุดในโลก ภายในมีการจัดแสดงจระเข้หลากหลายสายพันธุ์ รวมถึงสัตว์อื่น ๆ  และมีการแสดงโชว์จระเข้และกิจกรรมให้นักท่องเที่ยวได้สัมผัสใกล้ชิดกับจระเข้ เวลาทำการ เปิดทุกวัน ตั้งแต่ 08.00–18.00 น. ราคาบัตร-คนไทย รวมชมโชว์และพิพิธภัณฑ์ไดโนเสาร์ ผู้ใหญ่ 100 บาท เด็ก 50 บาท เด็กเล็กส่วนสูงต่ำกว่า 80 cm. เข้าฟรี ชมโชว์จระเข้และช้างฟรี',
    transport: 'รถไฟฟ้า BTS สายสีเขียว ลงสถานีสายลวด E22 ออกทางออกที่ 4 หรือรถโดยสารประจำทาง25 , 102 , 507 , 508 , 511 , 536',
    image: "img/farmcrocodile.png",
    detailImages: [
      "img/farmcrocodile2.png",
      "img/farmcrocodile3.png",
      "img/farmcrocodile4.png"
    ]
  },
  {
    id: 'paknam',
    district: 'mueang',
    name: 'ตลาดปากน้ำ',
    category: 'market',
    teaser: '',
     about: 'เป็นศูนย์รวมของการค้าขาย ทั้งปลีก และส่ง มีทั้งของสด ของแห้ง ของใช้ อุปกรณ์ต่างๆมากมาย หรือแม้กระทั่งเครื่องอำนวยความสะดวกต่างๆที่นี่ก็มีพร้อม รวมถึงของกิน ของอร่อยต่างๆ ก็รวมอยู่ที่ตลาดปากน้ำแห่งนี้',
    transport: 'BTS สายสีเขียว สถานีปากน้ำ แล้วเดิน เข้าสู่ตัวตลาด',
    image: "img/paknam.jpg"
  },

  {
    id: 'vivajoy',
    district: 'mueang',
    name: 'สวนสนุกหิมะในร่ม VIVAJOY PLANET',
    category: 'landmark',
    teaser: '',
     about: 'สวนสนุกเมืองหิมะในร่มแห่งแรกในสมุทรปราการ สนุกกับลานหิมะจริง สไลเดอร์น้ำแข็ง และโซนถ่ายรูปที่น่ารัก เปิดทุกวัน : 10.00 - 20.00 น.' ,
    transport: 'รถไฟฟ้า BTS สถานีแพรกษา (E15) แล้วต่อรถจักรยานยนต์รับจ้าง',
    image: "img/vivajoy.jpg"
  },

  {
    id: 'bangphliold',
    district: 'bangphli',
    name: 'ตลาดโบราณบางพลี',
    category: 'market',
    teaser: '',
    about: 'เป็นตลาดเก่าแก่ที่มีสภาพค่อนข้างสมบูรณ์และยังคงบรรยากาศวิถีชีวิตริมคลองที่เรียบง่าย เป็นเรือนแถวไม้สองชั้นหลายคูหา หลังคาปั้นหยา พื้นตลาดเป็นพื้นไม้สามารถเดินต่อกันได้ยาวเกือบ 1 กิโลเมตร มีร้านค้าเรียงรายตลอดทางมีสินค้าทั้งเก่าและใหม่ให้เลือกสรรมากมาย',
    transport: 'จากสถานีสำโรง ต่อรถสองแถวสายสำโรง-หนามแดง-บางพลี หรือรถสองแถว 1142 ลงที่หน้าวัดบางพลีใหญ่ใน',
    image: "img/bangphlimarket.jpg",
     detailImages: [
      "img/bangphlimarket2.jpg",
      "img/bangphlimarket3.jpg",
      "img/bangphlimarket4.jpg"
    ]
  },

  {
    id: 'watbangphli',
    district: 'bangphli',
    name: 'วัดบางพลีใหญ่ใน',
    category: 'temple',
    teaser: '',
     about: 'เป็นชื่อของวัดพระอารามหลวงชั้นตรีที่มีประวัติความเป็นมาอันยาวนานและมีชื่อเสียงแห่งหนึ่งของอำเภอบางพลี จังหวัดสมุทรปราการ เพราะเป็นวัดที่ใช้ประดิษฐานหลวงพ่อโตซึ่งเป็นพระพุทธรูปสมัยสุโขทัยปางมารวิชัย และเป็นหนึ่งในพระสามพี่น้อง',
    transport: 'รถไฟฟ้า BTS สถานีสำโรง ต่อรถสองแถวสีส้มสายสำโรง-บางพลี หรือขับรถมาตามถนนบางนา-ตราด เลี้ยวเข้าถนนกิ่งแก้ว-บางพลี',
    image: "img/watbangphli.jpg",
    detailImages: [
      "img/watbangphli2.png",
      "img/watbangphli3.png",
      "img/watbangphli4.png"
    ]
  },
  

  {
    id: 'bangkachao',
    district: 'phrapradaeng',
    name: 'คุ้งบางกะเจ้า',
    category: 'landmark',
    teaser: '',
     about: 'พื้นที่สีเขียวขนาดใหญ่รูปกระเพาะหมู หรือ "ปอดกรุงเทพฯ" ขึ้นชื่อเรื่องธรรมชาติร่มรื่น เหมาะสำหรับการปั่นจักรยานท่องเที่ยวเชิงนิเวศ',
    transport: 'ข้ามเรือจากท่าเรือวัดบางนานอก (ถนนสรรพาวุธ) มายังท่าเรือวัดบางน้ำผึ้งนอก แล้วเช่าจักรยานปั่นเที่ยวชม',
    image: "img/bangkachao.jpg",
     detailImages: [
      "img/bangkachao2.jpg",
      "img/bangkachao3.jpg",
      "img/bangkachao4.jpg"
    ]
  },

  {
    id: 'suansrinakorn',
    district: 'phrapradaeng',
    name: 'สวนศรีนครเขื่อนขันธ์',
    category: 'nature',
    teaser: '',
     about: 'เป็นแหล่งผลิตอากาศบริสุทธิ์ สวนสาธารณะสำหรับพักผ่อนหย่อนใจและออกกำลังกายของประชาชน และเป็นที่ศึกษาระบบนิเวศของพันธุ์พืชและพันธุ์สัตว์ในท้องถิ่นและพื้นที่ใกล้เคียง นอกจากนี้ สวนศรีนครเขื่อนขันธ์ยังมีหอดูนกที่ได้รับความนิยมจากนักดูนกที่ไม่ต้องการออกไปต่างจังหวัดไกลๆ  ',
    transport: 'เดินทางผ่านเส้นทางคุ้งบางกะเจ้า หรือนั่งรถประจำทางสาย 1011 และข้ามเรือโดยสาร',
    image: "img/suansri.jpg",
     detailImages: [
      "img/suansri2.jpg",
      "img/suansri3.jpg"
    ]
  },
  {
    id: 'museumfish',
    district: 'phrapradaeng',
    name: 'พิพิธภัณฑ์ปลากัดไทย',
    category: 'landmark',
    teaser: '',
     about: '“พิพิธภัณฑ์เพื่อการเรียนรู้ และการพักผ่อนหย่อนใจ” ซึ่งนอกจากเนื้อหาด้านปลากัดและความสวยงามของปลากัดสายพันธุ์ต่างๆ ที่ได้จัดแสดงไว้ ยังมีสิ่งที่น่าสนใจอื่นๆ อาทิ เช่น คุณค่าของสถาปัตยกรรมเรือนไทยประยุกต์ การจัดแสดงพันธุ์ปลาที่มีแหล่งกำเนิดจากแม่น้ำเจ้าพระยา สามล้อถีบ สัญลักษณ์ประจำเมืองพระประแดง',
    transport: 'ข้ามเรือมาจากท่าเรือวัดคลองเตยนอก',
    image: "img/museumfish.jpg",
     detailImages: [
      "img/museumfish3.jpg",
      "img/museumfish4.jpg"
    ]
  },

  {
    id: 'phrapradaengcity',
    district: 'phrapradaeng',
    name: 'ศาลหลักเมืองพระประแดง',
    category: 'temple',
    teaser: '',
     about: 'ศาลหลักเมืองสถาปัตยกรรมไทยโบราณ ตกแต่งลวดลายไม้แกะสลักงดงาม เป็นที่เคารพสักการะเพื่อความเป็นสิริมงคลแก่ผู้ที่มาเยือน และเป็นศูนย์รวมจิตใจของชาวพระประแดง',
    transport: 'รถประจำทางสาย 82 หรือใช้เรือข้ามฟากฝั่งพระประแดง',
    image: "img/sal.png",
    detailImages: [
      "img/sal2.png",
      "img/sal3.png",
      "img/sal4.png"
    ]
  },
  {
    id: 'watchakdang',
    district: 'phrapradaeng',
    name: 'วัดจากแดง',
    category: 'temple',
    teaser: '',
     about: 'วัดต้นแบบด้านสิ่งแวดล้อม โดดเด่นเรื่องการรีไซเคิลขยะพลาสติกเป็นจีวรพระ และส่งเสริมพลังงานสะอาดโซลาร์เซลล์',
    transport: 'จากถนนสุขสวัสดิ์ เลี้ยวเข้าถนนนครเขื่อนขันธ์ และเข้าซอยเพชรหึงษ์ วัดตั้งอยู่ริมแม่น้ำเจ้าพระยา',
    image: "img/watchakdang.jpg",
     detailImages: [
      "img/watchakdang1.jpg",
      "img/watchakdang2.jpg",
      "img/watchakdang3.jpg"
    ]
  },
   {
    id: 'bannaklang',
    district: 'phrapradaeng',
    name: 'บ้านกลางสวนบางกอบัว',
    category: 'landmark',
    teaser: '',
    about: 'บรรยากาศร่มรื่น เต็มไปด้วยต้นไม้สีเขียวรอบตัว เหมือนหลุดมาอยู่บ้านกลางป่า มีกิจกรรม Workshop หลากหลายให้เลือก ไม่ว่าจะเป็น เพ้นต์ภาพ, มัดย้อมผ้า, พายเรือคายัก, ล่องเรือไม้',
    transport: 'นั่งรถไฟฟ้า BTS ลงสถานีบางนา แล้วต่อเรือข้ามฟากที่ท่าเรือวัดบางนานอก',
    image: "img/bannaklang.jpg"
  },

  {
    id: 'chedi',
    district: 'phrasamutchedi',
    name: 'องค์พระสมุทรเจดีย์',
    category: 'landmark',
    teaser: '',
     about: 'เป็นวัดราษฎร์ที่อยู่ฝั่งตรงข้ามศาลากลางจังหวัดสมุทรปราการ มีผู้คนเดินทางมาเคารพสักการะบูชากันอย่างไม่ขาดสาย และยังเป็นสัญลักษณ์ประจำจังหวัดสมุทรปราการ',
    transport: 'นั่งรถประจำทางสาย 20 หรือใช้บริการเรือข้ามฟากจากฝั่งอำเภอเมืองสมุทรปราการ',
    image: "img/chedi.jpg",
     detailImages: [
      "img/chedi2.jpg",
      "img/chedi3.jpg",
      "img/chedi4.jpg"
    ]
  },
   {
    id: 'pompheesue',
    district: 'phrasamutchedi',
    name: 'ป้อมผีเสื้อสมุทร',
    category: 'landmark',
    teaser: '',
     about: 'เป็นสถานที่ท่องเที่ยวที่มีความสำคัญทางประวัติศาสตร์ของไทย สร้างขึ้นในสมัยรัชกาลที่ 2 และมีบทบาทสำคัญในเหตุการณ์เมื่อ รศ. 112 สมัยรัชกาลที่ 5 บริเวณป้อมผีเสื้อสมุทรมีสิ่งที่น่าสนใจหลายจุด ทั้งเส้นทางศึกษาธรรมชาติป่าชายเลน สะพานแขวนทอดยาวข้ามฝั่งมายังป้อมผีเสื้อสมุทร  กำแพงป้อมโบราณ รวมทั้งปืนเสือหมอบ ประตูป้อมโบราณ สะพานชมวิวแม่น้ำเจ้าพระยา',
    transport: 'นั่งรถประจำทางสาย 20 หรือใช้บริการเรือข้ามฟากจากฝั่งอำเภอเมืองสมุทรปราการ',
    image: "img/pompheesue.jpg",
     detailImages: [
      "img/pompheesue2.jpg",
      "img/pompheesue3.jpg",
      "img/pompheesue4.jpg"
    ]
  },

  {
    id: 'pompragul',
    district: 'phrasamutchedi',
    name: 'ป้อมพระจุลจอมเกล้า',
    category: 'landmark',
    teaser: '',
     about: 'ป้อมปืนประวัติศาสตร์สมัยรัชกาลที่ 5 สร้างขึ้นเพื่อป้องกันการรุกรานจากชาติตะวันตก จัดแสดงพิพิธภัณฑ์เรือหลวง และธรรมชาติป่าชายเลน',
    transport: 'รถประจำทางสาย 4-4 (20) หรือขับรถยนต์ส่วนตัวมุ่งหน้าตำบลแหลมฟ้าผ่า',
    image: "img/pompragul.png",
    detailImages: [
      "img/pompragul2.png",
      "img/pompragul3.png",
      "img/pompragul4.png"
    ]
  },

  {
    id: 'watthongkung',
    district: 'bangbo',
    name: 'วัดท้องคุ้ง ',
    category: 'temple',
    teaser: '',
    about: 'วัดท้องคุ้งเป็นวัดที่เหมาะสำหรับทั้ง สายทำบุญและสายถ่ายรูป จุดเด่นที่น่าสนใจคือ อุโบสถสีทอง ซึ่งมีลวดลายสีทองตกแต่งอย่างละเอียด ภายในมีพระพุทธรูปประดิษฐานอยู่ในกระจก และด้านหน้ามี พระพุทธรูปปางนาคปรก รวมถึง พระพุทธรูปทรงเครื่อง ที่สามารถเข้าไปสักการะได้อีกจุดที่โดดเด่นคือ พระเจดีย์สีเหลือง ซึ่งอยู่ด้านหน้าอุโบสถและช่วยให้ภาพถ่ายมีมิติ นอกจากนี้บริเวณวัดยังมีบรรยากาศค่อนข้างสงบ เหมาะกับการมานั่งพักและศึกษาประวัติของวัด',
    transport: 'รถยนต์ส่วนตัว: จากจุดเริ่มต้นย่านเทพารักษ์ ขับรถตามถนนเทพารักษ์เข้าสู่ทางหลวงหมายเลข 3268 แล้วมุ่งหน้าสู่ตำบลคลองด่าน อำเภอบางบ่อ',
    image: "img/watthongkung.webp",
     detailImages: [
      "img/watthongkung2.jpg",
      "img/watthongkung4.jpg",
      "img/watthongkung3.jpg"
    ]
  },
   {
    id: 'peekamarket',
    district: 'bangbo',
    name: 'ตลาดน้ำปีกกา',
    category: 'landmark',
    teaser: '',
    about: 'ตลาดน้ำกลางวัดที่อบอวลไปด้วยกลิ่นอายของวิถีชีวิตดั้งเดิม อาหารพื้นบ้านแสนอร่อย หัตถกรรมจากชุมชน และบรรยากาศอันเงียบสงบริมสายน้ำ ที่นี่คือศูนย์รวมของรอยยิ้ม น้ำใจ และความอบอุ่นจากชาวบ้านในพื้นที่ ที่พร้อมต้อนรับทุกคนด้วยความจริงใจ',
    transport: 'รถประจำทางหรือรถตู้สาธารณะสายสำโรง-คลองด่าน วิ่งเส้นถนนสุขุมวิท และต่อมอเตอร์ไซค์รับจ้าง',
    image: "img/peekamarket.jpg"
  },
   {
    id: 'newcaferestaurant',
    district: 'bangbo',
    name: 'New cafe & restaurant',
    category: 'cafe',
    teaser: '',
    about: 'NEW Cafe ร้านอาหารริมน้ำที่ให้คุณได้ผ่อนคลายไปกับบรรยากาศสุดชิล และชมพระอาทิตย์ตกดินสุดโรแมนติก  พร้อมอิ่มอร่อยไปกับเมนูอาหารและเครื่องดื่มหลากหลาย  ที่คัดสรรมาเพื่อคุณโดยเฉพาะไม่ว่าจะมากับเพื่อน, คนรัก, หรือครอบครัว NEW Cafe ก็พร้อมมอบช่วงเวลาดี ๆ ที่น่าจดจำให้คุณเสมอ',
    transport: 'รถยนต์ส่วนตัว: ทางเข้าตลาดช้อนทอง',
    image: "img/newcaferestaurant.jpg"
  },
   {
    id: 'chomjant',
    district: 'bangbo',
    name: 'ชมจันทร์ Chill bar',
    category: 'cafe',
    teaser: '',
    about: 'เหมาะสำหรับนั่งดื่ม ลองค็อกเทล เป็นร้านสไตล์น่ารักแนวแคมปิ้งตกแต่งออกมาได้นั่งชิลล์ชิลล์เหมือน นั่งแคมปิ้งกับเพื่อนๆ มีเมนูอาหารให้เลือกหลากหลายรายการทั้งอาหารไทย อาหารอีสานหรือ จะเป็นอาหารจานเดียว ปลาเผา จิ้มจุ่ม ',
    transport: 'การเดินทางโดยรถยนต์: ใช้เส้นทางถนนเทพราช-ลาดกระบัง',
    image: "img/chomjant.jpg"
  },
  

  {
    id: 'chujai',
    district: 'bangsaothong',
    name: 'หาดชูใจ',
    category: 'landmark',
    teaser: '',
     about: 'หาดชูใจ ทะเลน้ำจืดสมุทรปราการ เปิดใหม่ใกล้กรุงเทพฯ พื้นที่กว่า 40 ไร่ มุมถ่ายรูปเพียบ เครื่องเล่นอลังการจัดเต็มรอชาวแก๊งและครอบครัว',
    transport: 'รถยนต์ส่วนตัว: ซ.วัดศรีวารีน้อย อ.บางเสาธง',
    image: "img/chujai.jpg"
  },
  {
    id: 'letmetellyourstory',
    district: 'bangsaothong',
    name: 'Let me tell you our story cafe',
    category: 'landmark',
    teaser: '',
    about: 'Let Me Tell You Our Story Cafe เป็นคาเฟ่สไตล์ฝรั่ง บ้านไม้สีน้ำตาล ท่ามกลางต้นไม้เยอะๆ มีละอองน้ำพ่นคลุ้งแบบโคตรสดชื่น บรรยากาศดีจนลืมไปเลยว่าอยู่ใกล้กรุงเทพ มุมถ่ายรูปเพียบ เดินไปทางไหนก็สวย',
    transport: 'รถยนต์ส่วนตัว: ซ.วัดศรีวารีน้อย อ.บางเสาธง',
    image: "img/letmetellyouourstorycafe.webp"
  },
   {
    id: 'watsuwanaphumiputthachayanee',
    district: 'bangsaothong',
    name: 'วัดสุวรรณภูมิพุทธชยันตี',
    category: 'temple',
    teaser: '',
    about: ' วัดสุวรรณภูมิพุทธชยันตี โดดเด่นด้วยสถาปัตยกรรมไทยประยุกต์ ผสมผสานความงดงามจากศิลปะไทย อินเดีย จุดสำคัญที่ไม่ควรพลาดคือ พระมหาเจดีย์พุทธคยาจำลอง หัวใจสำคัญของวัด จำลองจาก มหาเจดีย์พุทธคยา สถานที่ตรัสรู้ของพระพุทธเจ้า ประเทศอินเดีย สูงตระหง่าน 9 ชั้น  ยอดเจดีย์ทำจากหินทรายแกะสลักจากเมืองจูนนาห์ ประเทศอินเดีย ประดับด้วยลวดลายรูปธรรมจักร ภายในพระมหาเจดีย์ บรรจุพระสารีริกธาตุ',
    transport: 'โดยรถยนต์ส่วนตัว : ใช้เส้นทางถนนเทพรัตน์ มุ่งหน้าสนามบินสุวรรณภูมิ ผ่านห้างสรรพสินค้าเซ็นทรัล อีสต์วิลล์ เลี้ยวซ้ายเข้าซอยวัดศรีวารีน้อย ตรงไปประมาณ 2 กิโลเมตร โดยรถสาธารณะ : ขึ้นรถสองแถวสีฟ้าสายวัดศรีวารีน้อย ลงป้ายวัดสุวรรณภูมิพุทธชยันตี',
    image: "img/watsuwanaphumiputthachayanee.webp"
  },
   {
    id: 'watsaotangnok',
    district: 'bangsaothong',
    name: 'วัดเสาธงนอก',
    category: 'temple',
    teaser: '',
    about: ' กราบพระพิฆเนศ ปางสุขสมหวัง วัดเสาธงนอก จ.สมุทรปราการเป็นอีกหนึ่งวัดศักดิ์สิทธิ์ที่มีญาติโยมมากราบไหว้ทำบุญกันอยู่เนืองๆ เที่ยวสมุทรปราการครั้งไหน อย่าลืมแวะไปกราบพระ',
    transport: 'โดยรถยนต์ส่วนตัว : ใวิ่งเส้นถนนเทพารักษ์ ออกสู่ถนนบางนา-ตราด หรือใช้เส้นทางถนนทางหลวงชนบทเชื่อมต่อมายังอำเภอบางเสาธง',
    image: "img/watsaotangnok.jpg"
  },
  {
    id: 'wimanthung',
    district: 'bangsaothong',
    name: 'วิมานทุ่ง',
    category: 'cafe',
    teaser: '',
     about: 'ดินแดนสวรรค์กลางทุ่งนา ทุ่งนาสีเขียวขจี ท้องฟ้าสีคราม อากาศบริสุทธิ์ บวกกับการตกแต่งสไตล์ไทยร่วมสมัย ที่ผสมผสานกลิ่นอายธรรมชาติ ไม้ไผ่ หลังคาฟาง และเฟอร์นิเจอร์ไม้ สร้างบรรยากาศอบอุ่น ผ่อนคลาย เหมือนมาพักผ่อนหย่อนใจ',
    transport: 'รถยนต์ส่วนตัว: Wiman Thung (อ.บางเสาธง จ.สมุทรปราการ)',
    image: "img/wimanthung.webp"
  }
];


/* ================= UTILS & UI FUNCTIONS ================= */

function toggleDropdown() {
  document.getElementById("submenu").classList.toggle("active");
  document.getElementById("arrow").classList.toggle("rotate");
}


function placeholderThumb() {
  return `
    <svg class="place-thumb-svg"
         viewBox="0 0 88 88"
         preserveAspectRatio="xMidYMid slice"
         aria-hidden="true">
      <rect width="88" height="88" fill="#cfe9fb"/>
      <rect y="56" width="88" height="32" fill="#b7dfa0"/>
      <circle cx="26" cy="28" r="11" fill="#ffffff" opacity="0.9"/>
      <circle cx="38" cy="33" r="9" fill="#ffffff" opacity="0.9"/>
    </svg>`;
}


/* รูปที่ยังไม่มีไฟล์จริง (เช่น images/*.jpg ที่ยังไม่ได้เพิ่ม)
   จะโหลดไม่สำเร็จ -> สลับไปใช้ภาพประกอบ SVG แทนโดยอัตโนมัติ */
function handleImgError(imgEl) {
  imgEl.outerHTML = placeholderThumb();
}

function togglehistoryDropdown() {
  document.getElementById("historysubmenu").classList.toggle("active");
  document.getElementById("arrow2").classList.toggle("rotate");
}



/* ================= HOME: DISTRICT MAP ================= */




function renderDistrictMap() {

  const holder = document.getElementById("districtGrid");

  if (!holder) return;

  const districtGroups = DISTRICTS.map(d => {

    const shape = DISTRICT_SHAPES[d.id];

    if (!shape) return "";

    const lbl = shape.label;

    const transform = lbl.rotate
      ? ` transform="rotate(${lbl.rotate} ${lbl.x} ${lbl.y})"`
      : "";

    return `
      <g class="spk-district" data-id="${d.id}" tabindex="0" role="link" aria-label="${d.name}">
        <title>${d.name}</title>
        <path d="${shape.d}" fill="${shape.fill}" stroke="#2255aa" stroke-width="1.5"/>
        <text x="${lbl.x}" y="${lbl.y}" text-anchor="middle" font-size="${lbl.size}" fill="${lbl.color}"${transform}>${d.name.replace("อำเภอ", "อ.")}</text>
      </g>`;

  }).join("");



  holder.innerHTML = `
    <div class="spk-map-wrap">
      <svg class="spk-map" viewBox="0 0 580 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="แผนที่จังหวัดสมุทรปราการ 6 อำเภอ">
        ${districtGroups}

      </svg>

    </div>
  `;

  holder.querySelectorAll(".spk-district").forEach(g => {

    const id = g.getAttribute("data-id");

    const go = () => {
      location.hash = `#places-${id}`;
    };

    g.addEventListener("click", go);

    g.addEventListener("keydown", (e) => {

      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        go();
      }

    });

  });

}


/* ================= HOME: FEATURED PLACES ================= */

function renderFeaturedHighlights() {

  const grid = document.getElementById("featuredGrid");

  if (!grid) return;

  const featured = FEATURED_IDS
    .map(id => PLACES.find(p => p.id === id))
    .filter(Boolean);

  grid.innerHTML = featured.map((p, i) => {

    const district = DISTRICTS.find(d => d.id === p.district);
    const side = i % 2 === 0 ? "reveal-left" : "reveal-right";

    return `
      <a class="featured-card reveal ${side}" href="#place-${p.id}">

        <div class="featured-thumb">
          ${
            p.image
              ? `<img src="${p.image}" alt="${p.name}" onerror="handleImgError(this)">`
              : placeholderThumb()
          }
        </div>

        <div class="featured-info">
          <span class="featured-district">${district ? district.name : ""}</span>
          <span class="featured-name">${p.name}</span>
          <span class="featured-teaser">${p.teaser}</span>
        </div>

      </a>
    `;

  }).join("");
}


/* ================= SCROLL REVEAL ================= */

let revealObserver = null;
const revealTracked = new WeakSet();

function ensureRevealObserver() {

  if (revealObserver || typeof IntersectionObserver === "undefined") return;

  revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }

    });

  }, { threshold: 0.18, rootMargin: "0px 0px -40px 0px" });

}

function observeReveals(root) {

  root = root || document;

  const reduceMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const els = root.querySelectorAll(".reveal:not(.visible)");

  if (reduceMotion || typeof IntersectionObserver === "undefined") {
    els.forEach(el => el.classList.add("visible"));
    return;
  }

  ensureRevealObserver();

  els.forEach(el => {

    if (!revealTracked.has(el)) {
      revealTracked.add(el);
      revealObserver.observe(el);
    }

  });

}


/* ================= SUBMENU ================= */

function renderSubmenu() {
  const submenu = document.getElementById("submenu");

  if (!submenu) return;

  submenu.innerHTML = DISTRICTS.map(d => `
    <li>
      <a href="#places-${d.id}" data-close>
        ${d.name}
      </a>
    </li>
  `).join("");
}
/* ================= SUBMENU (History) ================= */

function renderHistorySubmenu() {
  const submenu = document.getElementById("historysubmenu");

  if (!submenu) return;

  submenu.innerHTML = Age.map(d => `
    <li>
      <a href="${d.id}.html">
        ${d.name}
      </a>
    </li>
  `).join("");
}

/* ================= STATE ================= */

let currentDistrictId = "mueang";
let currentCategory = "all";

let detailPlaces = [];
let detailIndex = 0;


/* ================= DISTRICT MAP ================= */

function updateDistrictMap(distId) {

  const district = DISTRICTS.find(d => d.id === distId);
  const map = document.getElementById("districtMap");

  if (!district || !map) return;

  map.src =
    `https://www.google.com/maps?q=${district.lat},${district.lng}&z=13&output=embed`;
}


function updateDetailMap(p) {

  const map = document.getElementById("detailMap");

  if (!map || !p) return;

  if (p.mapEmbed) {
    /* ใช้ลิงก์ embed แบบเต็มที่คัดลอกมาจาก Google Maps โดยตรง (แม่นยำที่สุด) */
    map.src = p.mapEmbed;
    return;
  }

  let query;

  if (p.lat && p.lng) {
    /* ใช้พิกัดถ้ามี */
    query = `${p.lat},${p.lng}`;
  } else {
    /* ไม่มีพิกัด -> ค้นหาจากชื่อสถานที่ + อำเภอ */
    const dObj = DISTRICTS.find(d => d.id === p.district);
    const districtName = dObj ? dObj.name : "สมุทรปราการ";
    query = `${p.name} ${districtName}`;
  }

  map.src =
    `https://www.google.com/maps?q=${encodeURIComponent(query)}&z=16&output=embed`;
}


function updateDetailImages(p) {

  const container = document.getElementById("detailExtraImages");

  if (!container || !p) return;

  const images = p.detailImages || [];

  container.innerHTML = images.map(image => `
    <img
      src="${image}"
      class="detail-extra-image"
      alt="${p.name || ""}"
    >
  `).join("");
}


/* ================= PLACES VIEW ================= */

function renderPlacesView(distId) {

  currentDistrictId = distId;
  currentCategory = "all";

  const dObj = DISTRICTS.find(d => d.id === distId);

  if (!dObj) return;

  /* ชื่ออำเภอ */
  document.getElementById("placesDistName").textContent = dObj.name;

  /* อัปเดตแผนที่ตามอำเภอ */
  updateDistrictMap(distId);

  /* สถานที่ของอำเภอนั้น */
  const districtPlaces = PLACES.filter(
    p => p.district === distId
  );

  /* ตรงนี้คือส่วนที่หายไปในโค้ดเดิม */
  const categories = [
    "all",
    ...new Set(districtPlaces.map(p => p.category))
  ];


  /* ================= FILTER CHIPS ================= */

  const chipContainer = document.getElementById("filterChips");

  chipContainer.innerHTML = categories.map(cat => `
    <button
      class="chip ${cat === currentCategory ? 'active' : ''}"
      data-cat="${cat}">
      ${CAT_LABEL[cat] || cat}
    </button>
  `).join("");


  chipContainer.querySelectorAll(".chip").forEach(btn => {

    btn.addEventListener("click", () => {

      currentCategory = btn.dataset.cat;

      chipContainer
        .querySelectorAll(".chip")
        .forEach(b => {
          b.classList.toggle("active", b === btn);
        });

      renderPlaceList();
    });

  });


  renderPlaceList();
}


/* ================= PLACE LIST ================= */

function renderPlaceList() {

  const list = document.getElementById("placeList");
  const countEl = document.getElementById("placesCount");

  if (!list) return;

  const districtPlaces = PLACES.filter(
    p => p.district === currentDistrictId
  );

  const filtered = districtPlaces.filter(
    p =>
      currentCategory === "all" ||
      p.category === currentCategory
  );


  if (countEl) {
    countEl.textContent = `${filtered.length} สถานที่`;
  }


  list.innerHTML = filtered.length

    ? filtered.map(p => `
        <a class="place-card" href="#place-${p.id}">

          <div class="place-thumb">
            ${
              p.image
                ? `<img src="${p.image}" alt="${p.name}" onerror="handleImgError(this)">`
                : placeholderThumb()
            }
          </div>

          <div class="place-info">
            <span class="place-name">
              ${p.name}
            </span>

            <span class="place-teaser">
              ${p.teaser}
            </span>
          </div>

        </a>
      `).join("")

    : `
        <div class="place-empty">
          ไม่พบสถานที่ในหมวดนี้
        </div>
      `;
}


/* ================= PLACE DETAIL ================= */

function renderPlaceDetail(placeId) {

  const p = PLACES.find(x => x.id === placeId);

  if (!p) return;


  detailPlaces = PLACES.filter(
    x => x.district === p.district
  );

  detailIndex = detailPlaces.findIndex(
    x => x.id === placeId
  );

  if (detailIndex < 0) {
    detailIndex = 0;
  }


  buildDetailCoverflow();
  updateDetailContent();
}


/* ================= COVERFLOW ================= */

function buildDetailCoverflow() {

  const track = document.getElementById("cfDetailTrack");
  const wrap = document.getElementById("cfDetailWrap");

  if (!track || !wrap) return;


  track.innerHTML = detailPlaces.map(dp => `
    <div
      class="cf-card compact"
      data-id="${dp.id}"
      style="background-image: url('${dp.image || ""}');">

      <div class="cf-body"></div>

    </div>
  `).join("");


  const cards = [...track.children];


  function renderDetailCF() {

    cards.forEach((card, i) => {

      const offset = i - detailIndex;
      const abs = Math.abs(offset);

      let tx;
      let rot;
      let scale;
      let z;
      let op;


      if (abs === 0) {

        tx = 0;
        rot = 0;
        scale = 1;
        z = 30;
        op = 1;

      } else {

        tx = offset * 115;
        rot = offset > 0 ? -42 : 42;
        scale = 0.82;
        z = 20 - abs;
        op = abs > 2 ? 0 : 0.55;

      }


      card.style.transform =
        `translateX(${tx}px) rotateY(${rot}deg) scale(${scale})`;

      card.style.zIndex = z;
      card.style.opacity = op;

      card.style.pointerEvents =
        abs > 2 ? "none" : "auto";

      card.classList.toggle(
        "is-active",
        abs === 0
      );

    });

  }


  function goTo(i) {

    detailIndex = i;

    renderDetailCF();
    updateDetailContent();

  }


  cards.forEach((card, i) => {

    card.addEventListener("click", () => {

      if (i !== detailIndex) {
        goTo(i);
      }

    });

  });


  const prev =
    document.getElementById("cfDetailPrev");

  const next =
    document.getElementById("cfDetailNext");


  if (prev) {
    prev.onclick = () => {
      goTo(
        Math.max(
          0,
          detailIndex - 1
        )
      );
    };
  }


  if (next) {
    next.onclick = () => {
      goTo(
        Math.min(
          detailPlaces.length - 1,
          detailIndex + 1
        )
      );
    };
  }


  /* ปัดซ้าย-ขวาบนมือถือ */

  let startX = null;


  wrap.onpointerdown = e => {
    startX = e.clientX;
  };


  wrap.onpointerup = e => {

    if (startX === null) return;

    const dx = e.clientX - startX;


    if (dx > 40) {

      goTo(
        Math.max(
          0,
          detailIndex - 1
        )
      );

    } else if (dx < -40) {

      goTo(
        Math.min(
          detailPlaces.length - 1,
          detailIndex + 1
        )
      );

    }


    startX = null;

  };


  renderDetailCF();
}


/* ================= DETAIL CONTENT ================= */

function updateDetailContent() {

  const p = detailPlaces[detailIndex];

  if (!p) return;


  document.getElementById("detailName").textContent =
    p.name;

  document.getElementById("detailAbout").textContent =
    p.about;

  document.getElementById("detailTransport").textContent =
    p.transport;

updateDetailImages(p);
updateDetailMap(p);






  history.replaceState(
    null,
    "",
    `#place-${p.id}`
  );
}


/* ================= SPA ROUTER ================= */

const views = {

  home: document.getElementById("view-home"),

  places: document.getElementById("view-places"),

  place: document.getElementById("view-place"),

  history: document.getElementById("view-history"),

  credits: document.getElementById("view-credits")

};


function route() {

  const hash =
    location.hash || "#home";


  /* ปิดเมนู */

  const menuToggle =
    document.getElementById("menu-toggle");

  if (menuToggle) {
    menuToggle.checked = false;
  }


  /* ซ่อนทุกหน้า */

  Object.values(views).forEach(v => {

    if (v) {
      v.classList.remove("active");
    }

  });


  /* ================= HOME ================= */

  if (hash === "#home") {

    views.home.classList.add("active");
    renderDistrictMap();
    renderFeaturedHighlights();
    observeReveals(views.home);

  }


  /* ================= DISTRICT ================= */

  else if (hash.startsWith("#places-")) {

    const distId =
      hash.replace("#places-", "");

    renderPlacesView(distId);

    views.places.classList.add("active");

  }


  /* ================= PLACE DETAIL ================= */

  else if (hash.startsWith("#place-")) {

    const placeId =
      hash.replace("#place-", "");

    renderPlaceDetail(placeId);

    views.place.classList.add("active");

  }


  /* ================= HISTORY ================= */

  else if (hash === "#history") {

    views.history.classList.add("active");

  }


  /* ================= CREDITS ================= */

  else if (hash === "#credits") {

    views.credits.classList.add("active");

  }


  /* ================= DEFAULT ================= */

  else {

    views.home.classList.add("active");

  }


  window.scrollTo({
    top: 0,
    behavior: "instant"
  });

}


/* ================= EVENTS ================= */

window.addEventListener(
  "hashchange",
  route
);


/* ================= INIT ================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    renderSubmenu();
    renderHistorySubmenu();

    route();

  }
);
