const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  const params = event.queryStringParameters;
  const ref = params.ref || event.path.split('/').pop();
  const ip = event.headers['x-forwarded-for'] || event.headers['client-ip'] || 'unknown';
  const userAgent = event.headers['user-agent'] || 'unknown';
  const timestamp = new Date().toISOString();

  const referralMap = {
    audgaming8: 'https://audgaming8.com/RF19218329A',
    woospin: 'https://woospin.org/RF205301678',
    spin420: 'https://spin420.com/RF23A581713',
    spinfred: 'https://spinfred.com/RF20A582661',
    spinkash: 'https://spinkash.com/RF216111855',
    spinmate88: 'https://spinmate88.com/RF207862999',
    sugar96: 'https://sugar96.com/RF19038A821',
    sydspin: 'https://sydspin.com/RF203022925',
    tlcwin: 'https://tlcwin.com/RF19038587A',
    ufo9: 'https://ufo9.asia/RF190888596',
    wabet77: 'https://wabet77.com/RF189173068',
    waboom77: 'https://waboom77.com/TW201A0A127',
    weslot88: 'https://weslot88.org/RF23A578591',
    sm8aud: 'https://sm8aud.com/RF20A10A568',
    winsavage: 'https://winsavage.com/RF28792A012',
    winstreak9: 'https://winstreak9.com/RF197728576',
    woohoo9: 'https://woohoo9.com/RF198352199',
    slotmate88: 'https://slotmate88.com/RF206557126',
    skystar96: 'https://skystar96.com/RF192211131',
    winmate88: 'https://winmate88.com/RF197391317',
    n1spin: 'https://n1spin.com/RF231599511',
    scr55: 'https://scr55.com/RF206231038',
    scatter9: 'https://scatter9.com/RF23A58AA30',
    scr111: 'https://scr111.com/RF19A367518',
    roospin: 'https://roospin.com/RF197191835',
    roopokies: 'https://roopokies.com/RF201753A28',
    rookash: 'https://rookash.com/RF2036A5395',
    richclub9: 'https://richclub9.com/RF20A318351',
    raabet9: 'https://raabet9.com/RF2050AA113',
    rizspin: 'https://rizspin.net/RF203899A5A',
    pureluck9: 'https://pureluck9.com/RF201369328',
    petercasino: 'https://petercasino.com/RF22287A658',
    qbet21au: 'https://qbet21au.com/RF257873118',
    popmolly: 'https://popmolly.co/RF230350673',
    pokiestt: 'https://pokiestt.com/RF189169085',
    pokiesokay: 'https://pokiesokay.com/RF196607280',
    pokies7bet: 'https://pokies7bet.com/RF2231966A9',
    pokiesgg: 'https://pokiesgg.com/RF200897855',
    onlymeth: 'https://onlymeth.com/RF257673130',
    neospin66: 'https://neospin66.com/RF19112A565',
    paramax9: 'https://paramax9.com/RF19835A393',
    mmd9: 'https://mmd9.net/RF208265636',
    minorspin: 'https://minorspin.com/RF21A89A153',
    liamcasino: 'https://liamcasino.com/RF889A825',
    lsdbaby: 'https://lsdbaby.co/RF23A583612',
    lucky76au: 'https://lucky76au.live/RF192560995',
    melspin: 'https://melspin.com/RF2015A2752',
    methspin: 'https://methspin.com/RF228757570',
    imperium88: 'https://imperium88.com/RF8996790',
    jellospin: 'https://jellospin.com/RF258599601',
    joospin: 'https://joospin.com/RF210518375',
    kaboom77: 'https://kaboom77.com/RF189103501',
    ketawin: 'https://ketawin.com/RF226202639',
    legit99: 'https://legit99.com/RF19A36A970',
    ignition66: 'https://ignition66.com/RF2A3673830',
    fafabet9: 'https://fafabet9.com/TW192111A20',
    auplay99: 'https://auplay99.com/RF27A6088',
    goospin: 'https://goospin.com/RF199959693',
    iclub365au: 'https://iclub365au.com/RF207222250',
    donaldwin: 'https://donaldwin.com/RF230899868',
    dogdog11: 'https://dogdog11.com/RF25769693A',
    devegas99: 'https://devegas99.com/RF198139669',
    deespin: 'https://deespin.com/RF203020732',
    betworld168: 'https://betworld168.vip/RF207230970',
    betnet9: 'https://betnet9.com/RF20175291A',
    ausclub: 'https://ausclub.net/RF187937912',
    aud99: 'https://aud99.com/RF20122A110',
    aus96: 'https://aus96.com/RF121808826',
    aucloud9: 'https://aucloud9.com/RF190A03891',
    anzspin: 'https://anzspin.com/RF239527A69',
    ace34: 'https://ace34.vip/RF198133561',
    lisboa7: 'https://lisboa7.com/RF258972868'
  };

  const redirectURL = referralMap[ref] || 'https://payidcasinos.netlify.app';

  const sheetWebhook = "https://script.google.com/macros/s/AKfycbwtjbRijK44xIEnQSU2eGoC5eq-_8HYDuENhYH48BO39RN75Zas77j84SMlkss3eKwu/exec";

  try {
    const response = await fetch(sheetWebhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ref, ip, userAgent, timestamp }),
    });

    const resultText = await response.text();
    console.log("✅ Sent to Google Sheet:", resultText);
  } catch (err) {
    console.error("❌ Failed to log to Google Sheet:", err);
  }

  return {
    statusCode: 302,
    headers: {
      Location: redirectURL,
    },
  };
};
