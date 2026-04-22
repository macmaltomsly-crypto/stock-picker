// ─── SEARCH DATABASE ─────────────────────────────────────────────────────────
var SEARCH_DB=[
  {t:'AAPL',n:'Apple Inc.',s:'Technology'},{t:'MSFT',n:'Microsoft Corporation',s:'Technology'},
  {t:'GOOGL',n:'Alphabet Inc.',s:'Technology'},{t:'GOOG',n:'Alphabet Inc. Class C',s:'Technology'},
  {t:'AMZN',n:'Amazon.com Inc.',s:'Consumer'},{t:'NVDA',n:'Nvidia Corporation',s:'Technology'},
  {t:'META',n:'Meta Platforms Inc.',s:'Technology'},{t:'TSLA',n:'Tesla Inc.',s:'Consumer'},
  {t:'AVGO',n:'Broadcom Inc.',s:'Technology'},{t:'LLY',n:'Eli Lilly and Company',s:'Healthcare'},
  {t:'TSM',n:'Taiwan Semiconductor',s:'Technology'},{t:'JPM',n:'JPMorgan Chase & Co.',s:'Financial'},
  {t:'V',n:'Visa Inc.',s:'Financial'},{t:'UNH',n:'UnitedHealth Group Inc.',s:'Healthcare'},
  {t:'MA',n:'Mastercard Inc.',s:'Financial'},{t:'XOM',n:'Exxon Mobil Corporation',s:'Energy'},
  {t:'HD',n:'The Home Depot Inc.',s:'Consumer'},{t:'COST',n:'Costco Wholesale Corp.',s:'Consumer'},
  {t:'WMT',n:'Walmart Inc.',s:'Consumer'},{t:'CVX',n:'Chevron Corporation',s:'Energy'},
  {t:'MRK',n:'Merck & Co. Inc.',s:'Healthcare'},{t:'ABBV',n:'AbbVie Inc.',s:'Healthcare'},
  {t:'BAC',n:'Bank of America Corp.',s:'Financial'},{t:'NFLX',n:'Netflix Inc.',s:'Communication'},
  {t:'KO',n:'The Coca-Cola Company',s:'Consumer'},{t:'ORCL',n:'Oracle Corporation',s:'Technology'},
  {t:'CRM',n:'Salesforce Inc.',s:'Technology'},{t:'AMD',n:'Advanced Micro Devices',s:'Technology'},
  {t:'PEP',n:'PepsiCo Inc.',s:'Consumer'},{t:'ACN',n:'Accenture PLC',s:'Technology'},
  {t:'MCD',n:'McDonald\'s Corporation',s:'Consumer'},{t:'GS',n:'Goldman Sachs Group Inc.',s:'Financial'},
  {t:'CSCO',n:'Cisco Systems Inc.',s:'Technology'},{t:'WFC',n:'Wells Fargo & Company',s:'Financial'},
  {t:'MS',n:'Morgan Stanley',s:'Financial'},{t:'DIS',n:'The Walt Disney Company',s:'Communication'},
  {t:'CAT',n:'Caterpillar Inc.',s:'Industrials'},{t:'INTU',n:'Intuit Inc.',s:'Technology'},
  {t:'UBER',n:'Uber Technologies Inc.',s:'Technology'},{t:'BKNG',n:'Booking Holdings Inc.',s:'Consumer'},
  {t:'ISRG',n:'Intuitive Surgical Inc.',s:'Healthcare'},{t:'RTX',n:'RTX Corporation',s:'Defense'},
  {t:'GE',n:'GE Aerospace',s:'Industrials'},{t:'NOW',n:'ServiceNow Inc.',s:'Technology'},
  {t:'TXN',n:'Texas Instruments',s:'Technology'},{t:'QCOM',n:'Qualcomm Inc.',s:'Technology'},
  {t:'PANW',n:'Palo Alto Networks',s:'Technology'},{t:'AMD',n:'Advanced Micro Devices',s:'Technology'},
  {t:'INTC',n:'Intel Corporation',s:'Technology'},{t:'IBM',n:'IBM Corporation',s:'Technology'},
  {t:'SNOW',n:'Snowflake Inc.',s:'Technology'},{t:'SHOP',n:'Shopify Inc.',s:'Technology'},
  {t:'COIN',n:'Coinbase Global Inc.',s:'Financial'},{t:'HOOD',n:'Robinhood Markets Inc.',s:'Financial'},
  {t:'SOFI',n:'SoFi Technologies Inc.',s:'Financial'},{t:'AFRM',n:'Affirm Holdings Inc.',s:'Financial'},
  {t:'SQ',n:'Block Inc.',s:'Financial'},{t:'PYPL',n:'PayPal Holdings Inc.',s:'Financial'},
  {t:'ROKU',n:'Roku Inc.',s:'Technology'},{t:'SNAP',n:'Snap Inc.',s:'Technology'},
  {t:'PINS',n:'Pinterest Inc.',s:'Technology'},{t:'SPOT',n:'Spotify Technology',s:'Technology'},
  {t:'DKNG',n:'DraftKings Inc.',s:'Consumer'},{t:'RBLX',n:'Roblox Corporation',s:'Technology'},
  {t:'RIVN',n:'Rivian Automotive Inc.',s:'Consumer'},{t:'LCID',n:'Lucid Group Inc.',s:'Consumer'},
  {t:'F',n:'Ford Motor Company',s:'Consumer'},{t:'GM',n:'General Motors Company',s:'Consumer'},
  {t:'NIO',n:'NIO Inc.',s:'Consumer'},{t:'BRK.B',n:'Berkshire Hathaway B',s:'Financial'},
  {t:'BRK.A',n:'Berkshire Hathaway A',s:'Financial'},{t:'C',n:'Citigroup Inc.',s:'Financial'},
  {t:'USB',n:'U.S. Bancorp',s:'Financial'},{t:'PNC',n:'PNC Financial Services',s:'Financial'},
  {t:'BA',n:'Boeing Company',s:'Defense'},{t:'LMT',n:'Lockheed Martin Corp.',s:'Defense'},
  {t:'RTX',n:'RTX Corporation',s:'Defense'},{t:'NOC',n:'Northrop Grumman Corp.',s:'Defense'},
  {t:'GD',n:'General Dynamics Corp.',s:'Defense'},{t:'HII',n:'Huntington Ingalls Industries',s:'Defense'},
  {t:'AXON',n:'Axon Enterprise Inc.',s:'Defense'},{t:'KTOS',n:'Kratos Defense & Security',s:'Defense'},
  {t:'RCAT',n:'Red Cat Holdings Inc.',s:'Defense'},{t:'LDOS',n:'Leidos Holdings Inc.',s:'Defense'},
  {t:'CACI',n:'CACI International Inc.',s:'Defense'},{t:'PLTR',n:'Palantir Technologies',s:'Technology'},
  {t:'VRT',n:'Vertiv Holdings Co.',s:'Technology'},{t:'APP',n:'AppLovin Corporation',s:'Technology'},
  {t:'SOUN',n:'SoundHound AI Inc.',s:'Technology'},{t:'BBAI',n:'BigBear.ai Holdings',s:'Technology'},
  {t:'IREN',n:'Iris Energy Limited',s:'Technology'},{t:'HIMS',n:'Hims & Hers Health Inc.',s:'Healthcare'},
  {t:'ASTS',n:'AST SpaceMobile Inc.',s:'Space'},{t:'IONQ',n:'IonQ Inc.',s:'Technology'},
  {t:'RKLB',n:'Rocket Lab USA Inc.',s:'Space'},{t:'LUNR',n:'Intuitive Machines Inc.',s:'Space'},
  {t:'IRDM',n:'Iridium Communications',s:'Space'},{t:'SPIR',n:'Spire Global Inc.',s:'Space'},
  {t:'BKSY',n:'BlackSky Technology Inc.',s:'Space'},{t:'VST',n:'Vistra Corp.',s:'Energy'},
  {t:'CEG',n:'Constellation Energy Corp.',s:'Energy'},{t:'FSLR',n:'First Solar Inc.',s:'Energy'},
  {t:'ENPH',n:'Enphase Energy Inc.',s:'Energy'},{t:'OXY',n:'Occidental Petroleum Corp.',s:'Energy'},
  {t:'NEE',n:'NextEra Energy Inc.',s:'Energy'},{t:'DUK',n:'Duke Energy Corporation',s:'Energy'},
  {t:'OKLO',n:'Oklo Inc.',s:'Energy'},{t:'SMR',n:'NuScale Power Corporation',s:'Energy'},
  {t:'ARRY',n:'Array Technologies Inc.',s:'Energy'},{t:'MRNA',n:'Moderna Inc.',s:'Healthcare'},
  {t:'RXRX',n:'Recursion Pharmaceuticals',s:'Healthcare'},{t:'EXAS',n:'Exact Sciences Corp.',s:'Healthcare'},
  {t:'NTRA',n:'Natera Inc.',s:'Healthcare'},{t:'TMDX',n:'TransMedics Group Inc.',s:'Healthcare'},
  {t:'NU',n:'Nu Holdings Ltd.',s:'Financial'},{t:'OPFI',n:'OppFi Inc.',s:'Financial'},
  {t:'SPY',n:'SPDR S&P 500 ETF Trust',s:'ETF'},{t:'QQQ',n:'Invesco QQQ Trust',s:'ETF'},
  {t:'ARKK',n:'ARK Innovation ETF',s:'ETF'},{t:'VTI',n:'Vanguard Total Stock Market ETF',s:'ETF'},
  {t:'IWM',n:'iShares Russell 2000 ETF',s:'ETF'},{t:'GLD',n:'SPDR Gold Shares',s:'ETF'},
  {t:'NKE',n:'Nike Inc.',s:'Consumer'},{t:'SBUX',n:'Starbucks Corporation',s:'Consumer'},
  {t:'PFE',n:'Pfizer Inc.',s:'Healthcare'},{t:'JNJ',n:'Johnson & Johnson',s:'Healthcare'},
  {t:'T',n:'AT&T Inc.',s:'Communication'},{t:'VZ',n:'Verizon Communications',s:'Communication'},
  {t:'CMCSA',n:'Comcast Corporation',s:'Communication'},{t:'AMGN',n:'Amgen Inc.',s:'Healthcare'},
  {t:'MRVL',n:'Marvell Technology Inc.',s:'Technology'},{t:'MU',n:'Micron Technology Inc.',s:'Technology'},
  {t:'LRCX',n:'Lam Research Corporation',s:'Technology'},{t:'AMAT',n:'Applied Materials Inc.',s:'Technology'},
  {t:'KLAC',n:'KLA Corporation',s:'Technology'},{t:'NXPI',n:'NXP Semiconductors',s:'Technology'},
  {t:'ON',n:'ON Semiconductor Corp.',s:'Technology'},{t:'STX',n:'Seagate Technology',s:'Technology'},
  {t:'WDC',n:'Western Digital Corporation',s:'Technology'},{t:'DELL',n:'Dell Technologies Inc.',s:'Technology'},
  {t:'COP',n:'ConocoPhillips',s:'Energy'},{t:'SLB',n:'Schlumberger N.V.',s:'Energy'},
  {t:'AXP',n:'American Express Company',s:'Financial'},{t:'SCHW',n:'Charles Schwab Corporation',s:'Financial'},
  {t:'UNP',n:'Union Pacific Corporation',s:'Industrials'},{t:'HON',n:'Honeywell International',s:'Industrials'},
  {t:'ETN',n:'Eaton Corporation',s:'Industrials'},{t:'LIN',n:'Linde PLC',s:'Materials'},
  {t:'TMO',n:'Thermo Fisher Scientific',s:'Healthcare'},{t:'ABT',n:'Abbott Laboratories',s:'Healthcare'},
  {t:'SYK',n:'Stryker Corporation',s:'Healthcare'},{t:'VRTX',n:'Vertex Pharmaceuticals',s:'Healthcare'},
  {t:'LOW',n:'Lowe\'s Companies Inc.',s:'Consumer'},{t:'TGT',n:'Target Corporation',s:'Consumer'},
];

// ─── STATE ────────────────────────────────────────────────────────────────────
var MODE='paper',CONNECTED=false,ORDER_AMT=5,ACT_SECTOR=null,ACT_FILTER='all';
var LIVE_PRICES={},ALL_ORDERS=[],CHART_INST=null,CHART_PERIOD='1M';
var SCREENER={rating:'',conv:0,sig:''};
var PAPER='https://paper-api.alpaca.markets',LIVE_URL='https://api.alpaca.markets';

function base(){return MODE==='paper'?PAPER:LIVE_URL;}
function prx(u){return 'https://corsproxy.io/?url='+encodeURIComponent(u);}
function hdrs(){return {'APCA-API-KEY-ID':document.getElementById('apiKey').value.trim(),'APCA-API-SECRET-KEY':document.getElementById('apiSec').value.trim(),'Content-Type':'application/json'};}
function alpaca(path,opts){opts=opts||{};return fetch(base()+path,Object.assign({},opts,{headers:Object.assign({},hdrs(),opts.headers||{})}));}
function f$(v){return '$'+parseFloat(v||0).toFixed(2);}
function fPct(v,d){d=d||2;return (v>=0?'+':'')+parseFloat(v).toFixed(d)+'%';}
function pct(n){return (n>=0?'+':'')+n+'%';}

// ─── DARK MODE ────────────────────────────────────────────────────────────────
function toggleDark(){
  var on=document.body.hasAttribute('data-dark');
  on?document.body.removeAttribute('data-dark'):document.body.setAttribute('data-dark','');
  document.getElementById('darkBtn').textContent=on?'\u{1F319} Dark':'\u2600\uFE0F Light';
  localStorage.setItem('psp_dark',on?'0':'1');
  if(CHART_INST)refreshChartTheme();
}
(function(){if(localStorage.getItem('psp_dark')==='1'){document.body.setAttribute('data-dark','');document.getElementById('darkBtn').textContent='\u2600\uFE0F Light';}})();

// ─── UTILS ────────────────────────────────────────────────────────────────────
function setMode(m){
  MODE=m;
  document.getElementById('mPaper').classList.toggle('active',m==='paper');
  document.getElementById('mLive').classList.toggle('active',m==='live');
}
function setAmt(n,el){ORDER_AMT=n;document.querySelectorAll('.amt-btn').forEach(function(b){b.classList.remove('active');});el.classList.add('active');document.getElementById('customAmt').value='';}
function setCustomAmt(el){var v=parseFloat(el.value);if(v>0){ORDER_AMT=v;document.querySelectorAll('.amt-btn').forEach(function(b){b.classList.remove('active');});}}
function showToast(msg,type,dur){type=type||'';dur=dur||3200;var t=document.getElementById('toast');t.textContent=msg;t.className='toast '+type;t.classList.add('show');setTimeout(function(){t.classList.remove('show');},dur);}
function showTab(name,el){
  ['picks','sectors','portfolio','watchlist','orders','search'].forEach(function(t){document.getElementById('tab-'+t).style.display='none';});
  document.querySelectorAll('.tab').forEach(function(t){t.classList.remove('active');});
  document.getElementById('tab-'+name).style.display='block';el.classList.add('active');
  if(name==='sectors')renderSectorGrid();
  if(name==='portfolio')loadPortfolio();
  if(name==='watchlist')renderWatchlist();
  if(name==='orders'&&CONNECTED)loadOrders();
}

// ─── SIGNALS ──────────────────────────────────────────────────────────────────
var SIG={pol:{l:'&#127963; Politician',c:'s-po'},bil:{l:'&#128142; Billionaire',c:'s-bi'},inst:{l:'&#127970; Institution',c:'s-in'},insider:{l:'&#128084; Insider',c:'s-id'},options:{l:'&#128202; Options',c:'s-op'},retail:{l:'&#128241; Retail',c:'s-re'}};
// signal chips — use .sc base class (matches new CSS)
function sigChips(s){
  return Object.keys(SIG).filter(function(k){return s[k]&&s[k].length;}).map(function(k){
    return '<span class="sc '+SIG[k].c+'" title="'+s[k].slice(0,3).join(', ')+'">'+SIG[k].l+'</span>';
  }).join('');
}
function convScore(s){
  var n=0;
  n+=Math.min(30,(s.pol||[]).length*10);
  n+=Math.min(25,(s.bil||[]).length*9);
  n+=Math.min(15,(s.inst||[]).length*5);
  n+=Math.min(15,(s.insider||[]).length*8);
  n+=Math.min(10,(s.options||[]).length*10);
  n+=Math.min(5,(s.retail||[]).length*5);
  return Math.min(100,Math.round(n));
}
function convBadge(s){
  var c=convScore(s);
  var cls=c>=80?'cv-hi':c>=60?'cv-go':c>=40?'cv-md':'cv-lo';
  var lbl=c>=80?'High conviction':c>=60?'Good conviction':c>=40?'Moderate':'Low signal';
  return '<span class="cv '+cls+'">&#9889; '+c+' &mdash; '+lbl+'</span>';
}
function whosBuying(s,compact){
  var rows=[
    {icon:'&#127963;',label:'Politicians',items:s.pol||[]},
    {icon:'&#128142;',label:'Billionaires',items:s.bil||[]},
    {icon:'&#127970;',label:'Institutions',items:s.inst||[]},
    {icon:'&#128084;',label:'Insiders',items:s.insider||[]},
    {icon:'&#128202;',label:'Options flow',items:s.options||[]},
    {icon:'&#128241;',label:'Retail/social',items:s.retail||[]},
  ].filter(function(r){return r.items.length>0;});
  if(!rows.length) return '';
  if(compact){
    return '<div class="wb-cp">'+rows.map(function(r){
      return '<span class="wb-ch">'+r.icon+' <strong>'+r.items[0]+'</strong>'+(r.items.length>1?' +'+( r.items.length-1):'')+'</span>';
    }).join('')+'</div>';
  }
  return '<div class="lbl">Who\'s buying this</div><div class="wb-grid">'+rows.map(function(r){
    return '<div class="wb-rw"><span class="wb-tp">'+r.icon+' '+r.label+'</span><span class="wb-nm">'+r.items.join(', ')+'</span></div>';
  }).join('')+'</div>';
}
function articlesHTML(ticker){
  var src=SOURCES[ticker]||[
    {t:ticker+' congressional trading',u:'https://www.capitoltrades.com/issuers?search='+ticker,o:'Capitol Trades'},
    {t:ticker+' analyst ratings & targets',u:'https://www.tipranks.com/stocks/'+ticker.toLowerCase()+'/forecast',o:'TipRanks'},
    {t:ticker+' latest news',u:'https://finance.yahoo.com/news/?symbols='+ticker,o:'Yahoo Finance'},
    {t:ticker+' fundamentals & chart',u:'https://finviz.com/quote.ashx?t='+ticker,o:'Finviz'},
  ];
  return '<div class="lbl" style="margin-top:14px">Research &amp; sources</div><div class="art-list">'+src.map(function(a){
    return '<a href="'+a.u+'" target="_blank" class="art-a"><span class="art-o">'+a.o+'</span><span class="art-t">'+a.t+'</span><span style="color:var(--tx4)">&#8594;</span></a>';
  }).join('')+'</div>';
}
function bracketPanel(sym){
  return '<span class="bk-tog" onclick="this.nextElementSibling.classList.toggle(\'open\')">&#9881; Add stop-loss / take-profit</span>'
    +'<div class="bk-pan">'
    +'<div class="bk-row"><span class="bk-lbl">Stop-loss %</span><input class="bk-in" id="sl-'+sym+'" type="number" placeholder="e.g. 10" min="1" max="50"/></div>'
    +'<div class="bk-row"><span class="bk-lbl">Take-profit %</span><input class="bk-in" id="tp-'+sym+'" type="number" placeholder="e.g. 25" min="1" max="200"/></div>'
    +'<div style="font-size:11px;color:var(--tx4);margin-bottom:8px">Bracket orders use GTC and require a connected account.</div>'
    +'<button class="bk-buy" onclick="buyStock(\''+sym+'\',this,parseFloat(document.getElementById(\'sl-'+sym+'\').value)||0,parseFloat(document.getElementById(\'tp-'+sym+'\').value)||0)">Place Bracket Order for '+sym+'</button>'
    +'</div>';
}
// fix class helpers to match new CSS
function bCls(){return 'btn-buy'+(MODE==='paper'?' paper':'');}
function gCls(){return 'btn-buy'+(MODE==='paper'?' paper':'');}
function sCls(){return 'ss-buy'+(MODE==='paper'?' paper':'');}
function bLbl(sym){return 'Buy 

// ─── STOCK DATA ───────────────────────────────────────────────────────────────
var DB=[
  {ticker:'GOOGL',company:'Alphabet Inc.',fb:319,conf:90,rating:'Strong Buy',polScore:95,sector:'AI & Technology',sCls:'b-blue',
   pol:['Nancy Pelosi','Rohit Khanna','Tony Wied'],bil:['Bill Ackman','Druckenmiller','David Tepper'],inst:['T. Rowe Price','Capital Group','State Street'],insider:['Sundar Pichai $10M buy'],options:['Unusual LEAPS Dec 2026'],retail:['Top r/stocks pick Q1 2026'],
   polCtx:'178 congressional purchases totaling $2.6M in the past year. Pelosi added call options in January 2026.',
   anaCtx:'44 analysts rate GOOGL Strong Buy, $354 target. Google Cloud backlog surged 55% in Q4 2025.',
   why:'Congress\'s most-purchased stock over 12 months. Pelosi added options Jan 2026. 44 analysts at Strong Buy, $354 target.'},
  {ticker:'NVDA',company:'Nvidia Corporation',fb:187,conf:88,rating:'Strong Buy',polScore:92,sector:'AI & Technology',sCls:'b-blue',
   pol:['Nancy Pelosi','Terri Sewell','M.T. Greene'],bil:['Cathie Wood','Druckenmiller','Laffont'],inst:['Vanguard','Fidelity','BlackRock'],insider:['Jensen Huang open-market buys'],options:['Massive call sweeps $250 strike'],retail:['WSB #1 for 12 weeks'],
   polCtx:'#1 most-bought stock by Congress in 2025. Sewell\'s purchase alone fueled a 67.9% annual return.',
   anaCtx:'43 analysts Strong Buy with $273 avg target, 46% upside. Cantor named it top 2026 pick.',
   why:'Congress\'s most-purchased stock of 2025 across both parties. 43 analysts Strong Buy, 46% upside implied.'},
  {ticker:'LMT',company:'Lockheed Martin',fb:490,conf:82,rating:'Strong Buy',polScore:80,sector:'Defense & Military',sCls:'b-gray',
   pol:['Armed Services Committee','Mike Rogers'],bil:['Citadel','Two Sigma'],inst:['Vanguard','State Street','Fidelity'],insider:['Jim Taiclet CEO buys'],options:['LEAPS accumulation'],retail:['Dividend defense crowd'],
   polCtx:'Armed Services Committee buys LMT consistently -- they oversee the budget funding Lockheed contracts.',
   anaCtx:'Strong Buy consensus. F-35 + hypersonic programs provide decade-long revenue visibility.',
   why:'Armed Services Committee buys LMT -- they oversee the very budget funding Lockheed. NATO rearmament adds a decade of backlog.'},
  {ticker:'LLY',company:'Eli Lilly',fb:810,conf:85,rating:'Strong Buy',polScore:75,sector:'Healthcare & Biotech',sCls:'b-teal',
   pol:['Health Committee members'],bil:['Baillie Gifford','Capital Group'],inst:['T. Rowe Price','Wellington','Fidelity'],insider:['David Ricks CEO buying'],options:['Massive LEAPS accumulation'],retail:['Top health sector pick'],
   polCtx:'Health Committee members buying ahead of GLP-1 regulatory tailwinds.',
   anaCtx:'Highest conviction Strong Buy. Mounjaro + Zepbound are the fastest-growing pharma launches in history.',
   why:'Eli Lilly owns the GLP-1 revolution. Health Committee buying ahead of favorable legislation.'},
  {ticker:'VST',company:'Vistra Corp',fb:145,conf:78,rating:'Strong Buy',polScore:73,sector:'Energy & Clean Tech',sCls:'b-green',
   pol:['Nancy Pelosi','Energy Committee'],bil:['Baupost Group','Citadel'],inst:['D1 Capital','Fidelity'],insider:['Jim Burke CEO buying'],options:['Large call sweep Q4 2025'],retail:['AI energy trade'],
   polCtx:'Pelosi added Vistra in January 2026 alongside GOOGL and NVDA. Energy Committee sees AI power shortage.',
   anaCtx:'Multiple analyst upgrades on AI energy demand thesis. Goldman calls power "the trade of 2026".',
   why:'Pelosi January 2026 pick. AI data centers need enormous power -- Vistra provides it.'},
  {ticker:'PLTR',company:'Palantir',fb:96,conf:74,rating:'Moderate Buy',polScore:68,sector:'AI & Technology',sCls:'b-blue',
   pol:['Homeland Security Committee'],bil:['Cathie Wood','Peter Thiel (founder)'],inst:['ARK Invest','Baillie Gifford'],insider:['Alex Karp CEO buying'],options:['High OI $100+ calls'],retail:['Cult Reddit following'],
   polCtx:'Homeland Security Committee bought PLTR -- the committee that oversees Palantir\'s government contracts.',
   anaCtx:'Mixed analyst consensus but AIP government pipeline is a strong tailwind.',
   why:'Homeland Security Committee bought PLTR in 2025 -- the most specific insider signal on this list.'},
];
var GEMS=[
  {ticker:'VRT',company:'Vertiv Holdings',theme:'AI Infrastructure',tCls:'b-blue',sector:'Energy & Clean Tech',fb:98,conf:86,rating:'Strong Buy',bear:15,base:52,bull:95,bearP:20,baseP:55,bullP:25,
   pol:['Energy Committee'],bil:['GQG Partners','Citadel'],inst:['T. Rowe Price','Fidelity'],insider:['CEO Albertazzi buying'],options:['Heavy call accumulation'],retail:['AI infra community'],
   why:'Powers AI data center cooling. Every $1 on AI chips needs $1 in Vertiv equipment.',
   catalyst:'Catalysts: Data center capex supercycle, hyperscaler supply agreements. Risk: Supply chain delays.'},
  {ticker:'AXON',company:'Axon Enterprise',theme:'GovTech / AI',tCls:'b-purple',sector:'Defense & Military',fb:680,conf:82,rating:'Strong Buy',bear:10,base:38,bull:72,bearP:15,baseP:60,bullP:25,
   pol:['Homeland Security Committee'],bil:['Cathie Wood','Baillie Gifford'],inst:['T. Rowe Price','Coatue'],insider:['Rick Smith founder buying'],options:['Large call sweep Q1 2026'],retail:['High social sentiment'],
   why:'Taser + body cam + AI report writing. Draft One creates sticky per-officer recurring revenue.',
   catalyst:'Catalysts: Draft One adoption, international expansion. Risk: Budget cuts.'},
  {ticker:'APP',company:'AppLovin Corp.',theme:'AI Ad Tech',tCls:'b-orange',sector:'AI & Technology',fb:285,conf:84,rating:'Strong Buy',bear:-10,base:45,bull:110,bearP:25,baseP:50,bullP:25,
   pol:['Multiple Congress members'],bil:['Cathie Wood','Millennium'],inst:['Coatue','Tiger Global'],insider:['Adam Foroughi large buy'],options:['Aggressive call sweeps'],retail:['Viral fintech community'],
   why:'AXON 2.0 AI ad model drove 75%+ revenue growth in 2025. Most underappreciated large-cap on the market.',
   catalyst:'Catalysts: AXON 2.0, e-commerce expansion. Risk: Google/Meta competition.'},
  {ticker:'HIMS',company:'Hims & Hers Health',theme:'Telehealth',tCls:'b-teal',sector:'Healthcare & Biotech',fb:18,conf:76,rating:'Moderate Buy',bear:-20,base:55,bull:130,bearP:30,baseP:45,bullP:25,
   pol:['Multiple Congress members'],bil:['General Atlantic','Foresite'],inst:['Coatue','D1 Capital'],insider:['CEO Dudum buying'],options:['Aggressive call sweeps'],retail:['#1 telehealth Reddit'],
   why:'Telehealth for GLP-1, hair loss, mental health. Direct-to-consumer bypasses pharmacy markups.',
   catalyst:'Catalysts: GLP-1 expansion, subscriber growth. Risk: FDA crackdowns.'},
  {ticker:'ASTS',company:'AST SpaceMobile',theme:'Space Tech',tCls:'b-purple',sector:'Space & Aerospace',fb:28,conf:68,rating:'Speculative Buy',bear:-40,base:80,bull:220,bearP:35,baseP:40,bullP:25,
   pol:['Commerce Committee','Ted Cruz'],bil:['a16z','Google (strategic)'],inst:['ARK','Baillie Gifford'],insider:['Abel Avellan large buy'],options:['Aggressive speculative calls'],retail:['Space community #1'],
   why:'Space-based cellular for standard phones. AT&T, Verizon, Vodafone already partners.',
   catalyst:'Catalysts: Satellite launches, carrier activations. Risk: Launch failures.'},
  {ticker:'IONQ',company:'IonQ Inc.',theme:'Quantum Computing',tCls:'b-purple',sector:'Space & Aerospace',fb:32,conf:66,rating:'Speculative Buy',bear:-35,base:65,bull:185,bearP:40,baseP:38,bullP:22,
   pol:['Science Committee/DARPA'],bil:['Amazon (strategic)','Samsung'],inst:['ARK Invest','Coatue'],insider:['Peter Chapman CEO buying'],options:['Speculative long-dated calls'],retail:['Quantum community'],
   why:'Only pure-play quantum computing on NYSE with DARPA and Air Force contracts.',
   catalyst:'Catalysts: Government contract wins, qubit milestones. Risk: Timeline risk.'},
];
var ALL_STOCKS=DB.concat(GEMS);

var SOURCES={
  GOOGL:[{t:'Congress GOOGL trading -- 178 buys tracked',u:'https://www.quiverquant.com/congresstrading/stock/GOOGL',o:'QuiverQuant'},{t:'Alphabet analyst ratings & $354 price target',u:'https://www.tipranks.com/stocks/googl/forecast',o:'TipRanks'},{t:'Google Cloud AI surge & Q4 2025 earnings',u:'https://finance.yahoo.com/news/?symbols=GOOGL',o:'Yahoo Finance'},{t:'GOOGL fundamentals & short interest',u:'https://finviz.com/quote.ashx?t=GOOGL',o:'Finviz'}],
  NVDA:[{t:'Congress NVDA trades -- #1 bought stock 2025',u:'https://www.quiverquant.com/congresstrading/stock/NVDA',o:'QuiverQuant'},{t:'Nvidia 43 Strong Buy ratings, $273 avg target',u:'https://www.tipranks.com/stocks/nvda/forecast',o:'TipRanks'},{t:'Nvidia Blackwell demand & Rubin 2026 outlook',u:'https://finance.yahoo.com/news/?symbols=NVDA',o:'Yahoo Finance'},{t:'NVDA institutional ownership & chart',u:'https://finviz.com/quote.ashx?t=NVDA',o:'Finviz'}],
  LMT:[{t:'Armed Services Committee LMT purchases',u:'https://www.quiverquant.com/congresstrading/stock/LMT',o:'QuiverQuant'},{t:'Lockheed Martin analyst ratings & defense outlook',u:'https://www.tipranks.com/stocks/lmt/forecast',o:'TipRanks'},{t:'F-35, hypersonic & NATO rearmament news',u:'https://finance.yahoo.com/news/?symbols=LMT',o:'Yahoo Finance'},{t:'LMT stock data & institutional ownership',u:'https://finviz.com/quote.ashx?t=LMT',o:'Finviz'}],
  LLY:[{t:'Congress LLY trades -- Health Committee buys',u:'https://www.quiverquant.com/congresstrading/stock/LLY',o:'QuiverQuant'},{t:'Eli Lilly GLP-1 analyst ratings & targets',u:'https://www.tipranks.com/stocks/lly/forecast',o:'TipRanks'},{t:'Mounjaro, Zepbound & GLP-1 pipeline news',u:'https://finance.yahoo.com/news/?symbols=LLY',o:'Yahoo Finance'},{t:'LLY institutional ownership & fundamentals',u:'https://finviz.com/quote.ashx?t=LLY',o:'Finviz'}],
  VST:[{t:'Pelosi & Energy Committee VST purchases',u:'https://www.quiverquant.com/congresstrading/stock/VST',o:'QuiverQuant'},{t:'Vistra analyst ratings -- AI electricity thesis',u:'https://www.tipranks.com/stocks/vst/forecast',o:'TipRanks'},{t:'AI data center power demand & nuclear news',u:'https://finance.yahoo.com/news/?symbols=VST',o:'Yahoo Finance'},{t:'VST stock data & institutional ownership',u:'https://finviz.com/quote.ashx?t=VST',o:'Finviz'}],
  PLTR:[{t:'Congress PLTR trades -- Homeland Security buys',u:'https://www.quiverquant.com/congresstrading/stock/PLTR',o:'QuiverQuant'},{t:'Palantir analyst ratings -- AIP pipeline',u:'https://www.tipranks.com/stocks/pltr/forecast',o:'TipRanks'},{t:'Palantir government AI contracts news',u:'https://finance.yahoo.com/news/?symbols=PLTR',o:'Yahoo Finance'},{t:'PLTR institutional ownership & short interest',u:'https://finviz.com/quote.ashx?t=PLTR',o:'Finviz'}],
};

// Sector definitions -- just ticker arrays
var SECTORS={
  'AI & Technology':{icon:'&#129302;',cls:'b-blue',
    stocks:['NVDA','GOOGL','META','MSFT','APP','PLTR'],
    gems:['SOUN','BBAI','IREN'],
    stockData:{META:{company:'Meta Platforms',rating:'Strong Buy',bear:3,base:28,bull:65,pol:['Multiple Congress'],bil:['Dan Loeb','Tepper'],inst:['Fidelity','Vanguard'],insider:['Zuckerberg buys'],options:['Record call volume'],retail:['High sentiment'],why:'AI-supercharged ad engine. Congress bought heavily during TikTok legislation.'},
    MSFT:{company:'Microsoft',rating:'Strong Buy',bear:5,base:20,bull:42,pol:['Multiple Congress'],bil:['Warren Buffett','Ackman'],inst:['Vanguard','BlackRock'],insider:['Nadella buys'],options:['LEAPS accumulation'],retail:['AI exposure fav'],why:'Most bipartisan congressional stock. Azure AI + Copilot compounding revenue.'},
    SOUN:{company:'SoundHound AI',rating:'Speculative Buy',bear:-45,base:70,bull:200,pol:['Tech Committee'],bil:['NVIDIA (strategic)'],inst:['ARK Invest'],insider:['CEO Mohajer buying'],options:['Unusual call flow'],retail:['High Reddit buzz'],why:'AI voice platform. Nvidia strategic investor. Auto, food, IoT deploying. Tiny float = big upside.',isGem:true},
    BBAI:{company:'BigBear.ai',rating:'Speculative Buy',bear:-40,base:80,bull:190,pol:['Intelligence Committee'],bil:['Palantir ecosystem'],inst:['Renaissance'],insider:['CEO Long buying'],options:['Call sweep'],retail:['Defense AI'],why:'AI analytics for defense/intelligence. Classified government contracts. Intel Committee interest is rare.',isGem:true},
    IREN:{company:'Iris Energy',rating:'Speculative Buy',bear:-35,base:65,bull:175,pol:['Energy/Tech'],bil:['Cathie Wood'],inst:['ARK Invest'],insider:['CEO Roberts buying'],options:['BTC-correlated'],retail:['Crypto-AI cross'],why:'Bitcoin mining pivoting to AI GPU compute. Owns power + cooling AI firms desperately need.',isGem:true}}},
  'Defense & Military':{icon:'&#128737;',cls:'b-gray',
    stocks:['LMT','RTX','NOC','GD','AXON','CACI'],
    gems:['KTOS','RCAT','LDOS'],
    stockData:{RTX:{company:'RTX (Raytheon)',rating:'Strong Buy',bear:3,base:22,bull:45,pol:['Armed Services Cmte','Multiple senators'],bil:['ValueAct','Citadel'],inst:['T.Rowe','Capital Group'],insider:['Hayes buys'],options:['LEAPS accumulation'],retail:['Defense dividend'],why:'Patriot missile demand at record highs. Pratt & Whitney jet engine backlog spans a decade.'},
    NOC:{company:'Northrop Grumman',rating:'Strong Buy',bear:4,base:19,bull:40,pol:['Armed Services Committee'],bil:['Duquesne','Citadel'],inst:['BlackRock','Vanguard'],insider:['Warden buying'],options:['Long-dated calls'],retail:['Defense income'],why:'B-21 Raider stealth bomber. Nuclear defense programs locked in for decades.'},
    GD:{company:'General Dynamics',rating:'Strong Buy',bear:3,base:17,bull:35,pol:['Armed Services','Wicker'],bil:['Citadel','Two Sigma'],inst:['Vanguard','State St'],insider:['Novakovic buying'],options:['Steady accumul.'],retail:['Dividend growth'],why:'Gulfstream jets + Abrams tanks + nuclear submarines. Recession-proof government revenue.'},
    CACI:{company:'CACI International',rating:'Moderate Buy',bear:5,base:20,bull:42,pol:['Intelligence Committee'],bil:['Royce Investment'],inst:['Fidelity','Wellington'],insider:['Mengucci buying'],options:['Moderate calls'],retail:['Defense tech niche'],why:'Intelligence agency IT + cyber defense. Rare Intel Committee buying is historically significant.'},
    KTOS:{company:'Kratos Defense',rating:'Moderate Buy',bear:-10,base:35,bull:85,pol:['Armed Services Cmte'],bil:['Dragoneer'],inst:['Fidelity','BlackRock'],insider:['DeMarco buying'],options:['Call sweep'],retail:['Drone community'],why:'Affordable attritable drones. Ukraine proved drone warfare is the norm -- Kratos builds what Pentagon needs.',isGem:true},
    RCAT:{company:'Red Cat Holdings',rating:'Speculative Buy',bear:-40,base:90,bull:250,pol:['Armed Services Cmte'],bil:['Defense funds'],inst:['Small-cap defense'],insider:['Thompson CEO buying'],options:['Unusual volume'],retail:['Defense drone Reddit'],why:'US Army Black Widow drones. Sole-source contracts. $400M market cap vs massive drone TAM.',isGem:true},
    LDOS:{company:'Leidos Holdings',rating:'Strong Buy',bear:3,base:18,bull:38,pol:['Armed Services/Intel'],bil:['Citadel','Two Sigma'],inst:['Vanguard','T.Rowe'],insider:['Bell CEO buying'],options:['Institutional flow'],retail:['Dividend defense'],why:'Defense IT and intelligence giant. $15B+ revenue with consistent DoD contracts -- under the radar.',isGem:true}}},
  'Healthcare & Biotech':{icon:'&#127973;',cls:'b-teal',
    stocks:['LLY','ISRG','HIMS','MRNA','UNH','RXRX'],
    gems:['EXAS','NTRA','TMDX'],
    stockData:{ISRG:{company:'Intuitive Surgical',rating:'Strong Buy',bear:5,base:22,bull:48,pol:['Health Committee'],bil:['Baillie Gifford','Fisher'],inst:['Capital Group','T.Rowe'],insider:['Guthart buying'],options:['Long-dated calls'],retail:['MedTech community'],why:'da Vinci robot surgery monopoly. 9000+ systems = razor-and-blade recurring revenue.'},
    MRNA:{company:'Moderna',rating:'Moderate Buy',bear:-15,base:35,bull:90,pol:['Health Committee'],bil:['Baillie Gifford','ARK'],inst:['Fidelity','State St'],insider:['Bancel buying'],options:['Speculative accum.'],retail:['Biotech Reddit'],why:'mRNA platform beyond COVID -- cancer vaccines in Phase 3. Biggest potential in biotech.'},
    UNH:{company:'UnitedHealth',rating:'Strong Buy',bear:3,base:15,bull:30,pol:['Multiple Congress'],bil:['T.Rowe','Capital Group'],inst:['Vanguard','BlackRock'],insider:['Witty buying'],options:['Steady LEAPS'],retail:['Dividend crowd'],why:'Largest US health insurer + Optum data. Stable healthcare infrastructure pick across Congress.'},
    RXRX:{company:'Recursion Pharma',rating:'Speculative Buy',bear:-30,base:60,bull:160,pol:['Tech/Health crossover'],bil:['Nvidia (strategic $50M)'],inst:['Baillie Gifford','ARK'],insider:['Gibson CEO buying'],options:['Speculative calls'],retail:['AI-biotech cross'],why:'AI drug discovery with $50M Nvidia investment. Foundation models find candidates 10x faster.'},
    EXAS:{company:'Exact Sciences',rating:'Moderate Buy',bear:-15,base:45,bull:95,pol:['Health Committee'],bil:['Baillie Gifford','T.Rowe'],inst:['Fidelity','Wellington'],insider:['Conroy buying'],options:['Steady accumul.'],retail:['Cancer screening'],why:'Cologuard non-invasive colon cancer test becoming standard of care. 4M+ tests/year.',isGem:true},
    NTRA:{company:'Natera',rating:'Moderate Buy',bear:-10,base:50,bull:110,pol:['Health/Science Cmte'],bil:['Baillie Gifford','Coatue'],inst:['T.Rowe','Fidelity'],insider:['Chapman buying'],options:['Growing calls'],retail:['Genetic testing'],why:'Cell-free DNA for prenatal and cancer detection. Signatera cancer recurrence monitoring rapidly adopted.',isGem:true},
    TMDX:{company:'TransMedics Group',rating:'Speculative Buy',bear:-20,base:65,bull:155,pol:['Health Committee'],bil:['Coatue Management'],inst:['ARK Invest','Fidelity'],insider:['Hassanein CEO buying'],options:['Unusual small-cap'],retail:['MedTech community'],why:'Organ Care System keeps transplant organs alive 3x longer. Growing logistics network is a deep moat.',isGem:true}}},
  'Energy & Clean Tech':{icon:'&#9889;',cls:'b-green',
    stocks:['VRT','VST','CEG','FSLR','OXY','ENPH'],
    gems:['SMR','ARRY','OKLO'],
    stockData:{CEG:{company:'Constellation Energy',rating:'Strong Buy',bear:8,base:35,bull:70,pol:['Energy Committee','Multiple senators'],bil:['Baupost Group','D1'],inst:['Fidelity','BlackRock'],insider:['Dominguez buying'],options:['Long-dated calls'],retail:['Nuclear energy'],why:'Largest US nuclear fleet. Microsoft signed 20-year power deal. AI electricity demand makes nuclear essential.'},
    FSLR:{company:'First Solar',rating:'Strong Buy',bear:-5,base:28,bull:65,pol:['Energy/climate members'],bil:['Cathie Wood','Invesco'],inst:['State St','Fidelity'],insider:['Widmar buying'],options:['Call sweep tariff news'],retail:['Clean energy crowd'],why:'Only major US-manufactured solar panel company. IRA + anti-China tariffs give structural domestic moat.'},
    OXY:{company:'Occidental Petroleum',rating:'Moderate Buy',bear:-10,base:20,bull:45,pol:['Energy/Texas delegation'],bil:['Warren Buffett (35%+)','Carl Icahn'],inst:['Vanguard','BlackRock'],insider:['Hollub CEO buying'],options:['Steady call flow'],retail:['Buffett tracker'],why:'Warren Buffett biggest recent bet. Direct air carbon capture + Permian Basin. Only fossil fuel Buffett added to recently.'},
    ENPH:{company:'Enphase Energy',rating:'Moderate Buy',bear:-15,base:30,bull:80,pol:['Energy Committee'],bil:['Cathie Wood','Coatue'],inst:['ARK Invest','Baillie G.'],insider:['Kothandaraman buying'],options:['Speculative accum.'],retail:['Solar community'],why:'Residential solar microinverter leader. Battery storage + EV charging = OS of the home energy stack.'},
    SMR:{company:'NuScale Power',rating:'Speculative Buy',bear:-50,base:85,bull:300,pol:['Energy Cmte/nuclear'],bil:['Emerging nuclear funds'],inst:['ARK Invest'],insider:['Hopkins CEO buying'],options:['Speculative calls'],retail:['Nuclear renaissance'],why:'Small Modular Reactor technology, first NRC-approved SMR. Ground floor of a new energy era.',isGem:true},
    ARRY:{company:'Array Technologies',rating:'Moderate Buy',bear:-10,base:40,bull:90,pol:['Energy Committee'],bil:['Invesco','Energy funds'],inst:['Fidelity','State St'],insider:['Hostetler buying'],options:['Moderate accumul.'],retail:['Utility-scale solar'],why:'Solar tracking systems increase output 25%. IRA domestic content bonus gives structural advantage.',isGem:true},
    OKLO:{company:'Oklo Inc.',rating:'Speculative Buy',bear:-50,base:90,bull:280,pol:['Energy Committee'],bil:['Sam Altman (chairman)','Peter Thiel'],inst:['ARK Invest'],insider:['DeWitte CEO buying'],options:['Early-stage speculative'],retail:['Nuclear/AI energy'],why:'Sam Altman\'s nuclear startup targeting AI data center power. Altman + nuclear + AI electricity is a once-in-a-decade setup.',isGem:true}}},
  'Space & Aerospace':{icon:'&#128640;',cls:'b-purple',
    stocks:['ASTS','RKLB','IONQ','HII','KTOS','LUNR'],
    gems:['IRDM','SPIR','BKSY'],
    stockData:{RKLB:{company:'Rocket Lab',rating:'Moderate Buy',bear:-25,base:55,bull:130,pol:['Armed Services members'],bil:['Peter Thiel (Founders Fund)','Baillie G.'],inst:['ARK','Fidelity'],insider:['Beck CEO buying'],options:['Call accumulation'],retail:['Space community'],why:'SpaceX most credible small-launch competitor. Neutron rocket in development. Defense contracts provide base.'},
    HII:{company:'Huntington Ingalls',rating:'Strong Buy',bear:3,base:15,bull:32,pol:['Armed Services/VA delegations'],bil:['Citadel','Renaissance'],inst:['Vanguard','BlackRock'],insider:['Kastner CEO buying'],options:['Steady defense flow'],retail:['Defense income'],why:'Only builder of US nuclear aircraft carriers and submarines. Sole-source contracts for 15+ years.'},
    LUNR:{company:'Intuitive Machines',rating:'Speculative Buy',bear:-45,base:70,bull:200,pol:['Science/Space Committee'],bil:['ARK Invest (Cathie Wood)'],inst:['ARK','Space funds'],insider:['Altemus CEO buying'],options:['Volatile speculative'],retail:['Lunar believers'],why:'NASA Commercial Lunar Program prime contractor. Put a lander on the moon in 2024.'},
    IRDM:{company:'Iridium Communications',rating:'Moderate Buy',bear:5,base:25,bull:55,pol:['Commerce/Defense Cmte'],bil:['Silverpoint Capital'],inst:['Vanguard','Fidelity'],insider:['Desch CEO buying'],options:['Steady call interest'],retail:['Satellite niche'],why:'Only truly global satellite phone network -- works everywhere. Government + maritime = ultra-stable revenue.',isGem:true},
    SPIR:{company:'Spire Global',rating:'Speculative Buy',bear:-35,base:75,bull:180,pol:['Commerce/Science Cmte'],bil:['Emerging space funds'],inst:['ARK Invest'],insider:['Platzer CEO buying'],options:['Low vol speculative'],retail:['Space data community'],why:'Space-based data-as-a-service -- weather, maritime, radio occultation. Recurring satellite intelligence subscriptions.',isGem:true},
    BKSY:{company:'BlackSky Technology',rating:'Speculative Buy',bear:-40,base:80,bull:200,pol:['Intelligence/Armed Services'],bil:['Defense-space funds'],inst:['Small-cap defense'],insider:['O\'Toole CEO buying'],options:['Low vol speculative'],retail:['Space defense niche'],why:'Real-time Earth observation satellites feeding AI analytics to defense/intelligence agencies.',isGem:true}}},
  'Financial Services':{icon:'&#127974;',cls:'b-amber',
    stocks:['V','GS','BRK.B','COIN','HOOD','SOFI'],
    gems:['AFRM','NU','OPFI'],
    stockData:{V:{company:'Visa',rating:'Strong Buy',bear:4,base:16,bull:32,pol:['Finance Committee'],bil:['Warren Buffett','Baillie G.'],inst:['Vanguard','BlackRock','T.Rowe'],insider:['McInerney buying'],options:['Steady LEAPS'],retail:['Dividend compounders'],why:'Digital payments toll booth. As cash disappears, Visa grows without credit risk.'},
    GS:{company:'Goldman Sachs',rating:'Strong Buy',bear:5,base:20,bull:42,pol:['Finance/Banking Cmte'],bil:['Solomon (insider)','Citadel'],inst:['Wellington','Fidelity'],insider:['Solomon buying'],options:['M&A revival calls'],retail:['Finance crowd'],why:'M&A + trading + asset management. IPO revival + PE deal flow = all three businesses accelerating.'},
    'BRK.B':{company:'Berkshire Hathaway',rating:'Strong Buy',bear:3,base:14,bull:28,pol:['Finance Committee'],bil:['Warren Buffett (CEO)'],inst:['Vanguard','State St'],insider:['Buffett buying'],options:['Conservative LEAPS'],retail:['Value investors'],why:'Own what Buffett owns. Insurance float + BNSF + Apple stake. Near-zero downside since 1965.'},
    COIN:{company:'Coinbase',rating:'Moderate Buy',bear:-20,base:40,bull:120,pol:['Crypto-friendly members'],bil:['Andreessen Horowitz','Cathie Wood'],inst:['ARK Invest','Fidelity'],insider:['Armstrong buying'],options:['High call OI'],retail:['Crypto community'],why:'Regulatory clarity is a massive tailwind. Only regulated US crypto exchange -- captures institutional on-ramp.'},
    HOOD:{company:'Robinhood',rating:'Moderate Buy',bear:-15,base:38,bull:95,pol:['Multiple Congress'],bil:['Andreessen Horowitz'],inst:['ARK Invest','Coatue'],insider:['Tenev CEO buying'],options:['Retail-driven calls'],retail:['Retail trading #1'],why:'Retail trading boom + crypto + Gold subscriptions. Millennial runway as the generation builds wealth.'},
    SOFI:{company:'SoFi Technologies',rating:'Moderate Buy',bear:-15,base:45,bull:100,pol:['Finance Committee'],bil:['SoftBank (major holder)','ARK'],inst:['Fidelity','Coatue'],insider:['Noto buying'],options:['Steady accumulation'],retail:['Fintech community'],why:'Digital bank with loans, investing, credit cards. Bank charter gives cheap deposit funding competitors lack.'},
    AFRM:{company:'Affirm Holdings',rating:'Moderate Buy',bear:-20,base:50,bull:120,pol:['Finance Committee'],bil:['Andreessen Horowitz','Coatue'],inst:['ARK Invest','D1'],insider:['Levchin CEO buying'],options:['Aggressive sweeps'],retail:['BNPL community'],why:'Honest BNPL no hidden fees. Shopify + Amazon checkout scale. Debit+ card becoming full banking product.',isGem:true},
    NU:{company:'Nu Holdings',rating:'Strong Buy',bear:5,base:35,bull:80,pol:['Latin America trade'],bil:['Warren Buffett (Berkshire)','Sequoia'],inst:['T.Rowe','Baillie G.'],insider:['Velez CEO buying'],options:['Growing institutional'],retail:['Emerging market fintech'],why:'Largest digital bank by customers (100M+). Dominates Brazil, Mexico, Colombia. Buffett holds stake.',isGem:true},
    OPFI:{company:'OppFi',rating:'Speculative Buy',bear:-15,base:55,bull:130,pol:['Finance Committee'],bil:['Emerging fintech funds'],inst:['Small-cap fintech'],insider:['Schwartz CEO buying'],options:['Speculative calls'],retail:['Under-radar fintech'],why:'AI lending for 60M Americans locked out of traditional banks. 90%+ approval with alternative data.',isGem:true}}}
};
var EARNINGS={NVDA:'2026-05-28',GOOGL:'2026-04-29',META:'2026-04-30',MSFT:'2026-04-30',AMZN:'2026-05-01',LLY:'2026-04-30',LMT:'2026-04-22',RTX:'2026-04-23',PLTR:'2026-05-05',APP:'2026-05-07',VRT:'2026-04-23',VST:'2026-05-06',COIN:'2026-05-08',HOOD:'2026-05-07',HIMS:'2026-05-07',ASTS:'2026-05-08',IONQ:'2026-05-08',AXON:'2026-05-08',OXY:'2026-05-05',RKLB:'2026-05-12',CEG:'2026-05-07',FSLR:'2026-04-29',GS:'2026-04-14',V:'2026-04-22'};

// ─── ALPACA ───────────────────────────────────────────────────────────────────
function connectAlpaca(){
  var btn=document.getElementById('conBtn');
  btn.textContent='Connecting...';btn.disabled=true;
  document.getElementById('sDot').className='dot';
  document.getElementById('sTxt').textContent='Connecting...';
  alpaca('/v2/account').then(function(r){return r.text();}).then(function(raw){
    var d;try{d=JSON.parse(raw);}catch(e){throw new Error('Bad response -- check keys');}
    if(!d.status) throw new Error((d.message||'Auth failed'));
    CONNECTED=true;
    document.getElementById('sDot').className='dot on';
    document.getElementById('sTxt').textContent=MODE==='paper'?'Paper connected':'Live connected';
    document.getElementById('aBP').textContent=f$(d.buying_power);
    document.getElementById('aPV').textContent=f$(d.portfolio_value);
    var pl=parseFloat(d.equity||d.portfolio_value||0)-parseFloat(d.last_equity||d.portfolio_value||0);
    var plPct=parseFloat(d.last_equity||1)>0?(pl/parseFloat(d.last_equity)*100):0;
    var plEl=document.getElementById('aPL');plEl.textContent=(pl>=0?'+':'')+pl.toFixed(2);plEl.style.color=pl>=0?'#2e7d32':'#c62828';
    var dEl=document.getElementById('aDPL');dEl.textContent=fPct(plPct);dEl.style.color=pl>=0?'#2e7d32':'#c62828';
    document.getElementById('acctStats').style.display='grid';
    document.getElementById('brokerHint').innerHTML='<span style="color:#2e7d32;font-weight:600">Connected to Alpaca '+(MODE==='paper'?'Paper':'Live')+'</span> -- buy buttons now active';
    showToast('Connected to Alpaca '+(MODE==='paper'?'Paper':'Live')+'!','ok');
    loadAB();startAlertChecker();
  }).catch(function(e){
    CONNECTED=false;
    document.getElementById('sDot').className='dot err';
    document.getElementById('sTxt').textContent='Failed';
    document.getElementById('brokerHint').innerHTML='<span style="color:#c62828;font-weight:600">Error: '+e.message+'</span><br>Paper keys start with PK. Check both fields are correct.';
    showToast('Connection failed','err');
  }).finally(function(){btn.textContent='Connect Account';btn.disabled=false;});
}

function buyStock(sym,btnEl,slPct,tpPct){
  slPct=slPct||0;tpPct=tpPct||0;
  if(!CONNECTED){showToast('Connect your Alpaca account first','err');return;}
  var orig=btnEl.textContent;btnEl.disabled=true;btnEl.textContent='Placing...';
  var body;
  if(slPct>0||tpPct>0){
    var price=LIVE_PRICES[sym]||(ALL_STOCKS.find(function(s){return s.ticker===sym;})||{}).fb||100;
    var qty=(ORDER_AMT/price).toFixed(6);
    body={symbol:sym,qty:qty,side:'buy',type:'market',time_in_force:'gtc',order_class:'bracket'};
    if(slPct>0) body.stop_loss={stop_price:(price*(1-slPct/100)).toFixed(2)};
    if(tpPct>0) body.take_profit={limit_price:(price*(1+tpPct/100)).toFixed(2)};
  } else {
    body={symbol:sym,notional:ORDER_AMT.toFixed(2),side:'buy',type:'market',time_in_force:'day'};
  }
  alpaca('/v2/orders',{method:'POST',body:JSON.stringify(body)}).then(function(r){return r.json();}).then(function(d){
    if(d.code||!d.id) throw new Error(d.message||'Order rejected');
    showToast('$'+ORDER_AMT+' of '+sym+' ordered!'+(MODE==='paper'?' (paper)':''),'ok');
    btnEl.textContent='Done!';setTimeout(function(){btnEl.textContent=orig;btnEl.disabled=false;},3000);
    refreshAcctQuick();
  }).catch(function(e){showToast('Order failed: '+(e.message||'Try again'),'err');btnEl.textContent=orig;btnEl.disabled=false;});
}

function sellStock(sym,qty,btnEl,full){
  if(!CONNECTED){showToast('Connect your Alpaca account first','err');return;}
  var orig=btnEl.textContent;btnEl.disabled=true;btnEl.textContent='Selling...';
  var inputAmt=parseFloat((document.getElementById('si-'+sym)||{}).value)||ORDER_AMT;
  var body=full?{symbol:sym,qty:parseFloat(qty).toFixed(6),side:'sell',type:'market',time_in_force:'day'}:{symbol:sym,notional:inputAmt.toFixed(2),side:'sell',type:'market',time_in_force:'day'};
  alpaca('/v2/orders',{method:'POST',body:JSON.stringify(body)}).then(function(r){return r.json();}).then(function(d){
    if(d.code||!d.id) throw new Error(d.message||'Sell rejected');
    showToast('Sell order placed for '+sym+(full?' (all shares)':''),'ok');
    btnEl.textContent='Sold!';setTimeout(function(){loadPortfolio();},2500);refreshAcctQuick();
  }).catch(function(e){showToast('Sell failed: '+(e.message||'Try again'),'err');btnEl.textContent=orig;btnEl.disabled=false;});
}

function refreshAcctQuick(){
  alpaca('/v2/account').then(function(r){return r.json();}).then(function(d){
    if(d.buying_power) document.getElementById('aBP').textContent=f$(d.buying_power);
    if(d.portfolio_value) document.getElementById('aPV').textContent=f$(d.portfolio_value);
  }).catch(function(){});
}

// ─── PORTFOLIO ────────────────────────────────────────────────────────────────
function loadPortfolio(){
  var out=document.getElementById('portfolioOut');
  if(!CONNECTED){out.innerHTML='<div class="empty">Connect your Alpaca account to view your portfolio</div>';return;}
  out.innerHTML='<div class="spin"><div class="spn"></div><div class="spin-t">Loading portfolio...</div></div>';
  Promise.all([alpaca('/v2/positions'),alpaca('/v2/account/portfolio/history?period='+CHART_PERIOD+'&timeframe=1D')]).then(function(rs){
    return Promise.all([rs[0].json(),rs[1].json()]);
  }).then(function(results){
    var positions=results[0],hist=results[1];
    var isPos=Array.isArray(positions)&&positions.length>0;
    var tMV=isPos?positions.reduce(function(s,p){return s+parseFloat(p.market_value||0);},0):0;
    var tPL=isPos?positions.reduce(function(s,p){return s+parseFloat(p.unrealized_pl||0);},0):0;
    var html='<div class="chart-wrap"><div class="ch-hdr"><div class="ch-t">Portfolio Value</div><div class="ch-per">'
      +['1W','1M','3M','1A'].map(function(p){return '<button class="cp-btn'+(CHART_PERIOD===p?' active':'')+'" onclick="CHART_PERIOD=\''+p+'\';loadPortfolio()">'+p+'</button>';}).join('')
      +'</div></div><canvas id="portfolioChart" height="160"></canvas></div>'
      +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:1rem">'
      +'<div class="astat"><div class="aval">'+f$(tMV)+'</div><div class="albl">Total Market Value</div></div>'
      +'<div class="astat"><div class="aval" style="color:'+(tPL>=0?'#2e7d32':'#c62828')+'">'+(tPL>=0?'+':'')+f$(tPL)+'</div><div class="albl">Unrealized P&amp;L</div></div>'
      +'</div>';
    if(isPos){
      html+=positions.map(function(p){
        var mv=parseFloat(p.market_value||0),pl=parseFloat(p.unrealized_pl||0),plpc=parseFloat(p.unrealized_plpc||0)*100;
        var cp=parseFloat(p.current_price||0),ap=parseFloat(p.avg_entry_price||0),qty=parseFloat(p.qty||0);
        var isUp=pl>=0;
        return '<div class="pos"><div class="pos-top"><div><div class="pos-sym">'+p.symbol+'</div><div class="pos-nm">'+(p.asset_class||'Equity')+'</div></div>'
          +'<div class="pos-rt"><div class="pos-val">'+f$(mv)+'</div><div class="pos-pl '+(isUp?'up':'dn')+'">'+(isUp?'+':'')+f$(pl)+' ('+fPct(plpc)+')</div></div></div>'
          +'<div class="pos-mt"><div class="pm"><div class="pm-v">'+f$(cp)+'</div><div class="pm-l">Current</div></div>'
          +'<div class="pm"><div class="pm-v">'+f$(ap)+'</div><div class="pm-l">Avg Cost</div></div>'
          +'<div class="pm"><div class="pm-v">'+(qty%1===0?qty.toFixed(0):qty.toFixed(4))+'</div><div class="pm-l">Shares</div></div></div>'
          +'<div class="sl-row"><input class="sl-in" id="si-'+p.symbol+'" type="number" value="'+ORDER_AMT+'" min="1"/>'
          +'<button class="sp-btn" onclick="sellStock(\''+p.symbol+'\','+qty+',this,false)">Sell $</button>'
          +'<button class="sf-btn" onclick="sellStock(\''+p.symbol+'\','+qty+',this,true)">Sell All</button></div></div>';
      }).join('');
    } else { html+='<div class="empty">No open positions. Buy some stocks from the Picks tab!</div>'; }
    out.innerHTML=html;
    renderPortfolioChart(hist);
  }).catch(function(e){out.innerHTML='<div class="empty">Failed to load: '+(e.message||'Check connection')+'</div>';});
}

function renderPortfolioChart(hist){
  var canvas=document.getElementById('portfolioChart');
  if(!canvas||typeof Chart==='undefined') return;
  if(CHART_INST){CHART_INST.destroy();CHART_INST=null;}
  if(!hist||!hist.timestamp||!hist.timestamp.length) return;
  var isDark=!document.body.hasAttribute('data-light');
  var gColor=isDark?'rgba(255,255,255,.05)':'rgba(0,0,0,.06)';
  var tColor=isDark?'#4a5568':'#bbb';
  var pairs=hist.timestamp.map(function(t,i){return {t:t,v:hist.equity[i]};}).filter(function(x){return x.v>0;});
  if(!pairs.length) return;
  var labels=pairs.map(function(x){return new Date(x.t*1000).toLocaleDateString('en-US',{month:'short',day:'numeric'});});
  var data=pairs.map(function(x){return x.v;});
  var lineColor=data[data.length-1]>=data[0]?'#2e7d32':'#c62828';
  CHART_INST=new Chart(canvas,{type:'line',data:{labels:labels,datasets:[{data:data,borderColor:lineColor,borderWidth:2,pointRadius:0,fill:true,backgroundColor:lineColor+'20',tension:0.3}]},
    options:{responsive:true,plugins:{legend:{display:false},tooltip:{callbacks:{label:function(c){return f$(c.raw);}}}},
      scales:{x:{grid:{color:gColor},ticks:{color:tColor,maxTicksLimit:7,font:{size:10}}},y:{grid:{color:gColor},ticks:{color:tColor,callback:function(v){return f$(v);},font:{size:10}}}}}});
}
function refreshChartTheme(){
  if(!CHART_INST) return;
  var isDark=document.body.hasAttribute('data-dark');
  var g=isDark?'rgba(255,255,255,.07)':'rgba(0,0,0,.06)';var t=isDark?'#666':'#bbb';
  CHART_INST.options.scales.x.grid.color=g;CHART_INST.options.scales.x.ticks.color=t;
  CHART_INST.options.scales.y.grid.color=g;CHART_INST.options.scales.y.ticks.color=t;
  CHART_INST.update();
}

// ─── ORDERS ───────────────────────────────────────────────────────────────────
function loadOrders(){
  var out=document.getElementById('ordersOut');
  if(!CONNECTED){out.innerHTML='<div class="empty">Connect your Alpaca account to view orders</div>';return;}
  out.innerHTML='<div class="spin"><div class="spn"></div><div class="spin-t">Loading orders...</div></div>';
  alpaca('/v2/orders?status=all&limit=100&direction=desc').then(function(r){return r.json();}).then(function(orders){
    ALL_ORDERS=orders;
    if(!Array.isArray(orders)||!orders.length){out.innerHTML='<div class="empty">No orders yet</div>';return;}
    out.innerHTML=orders.map(function(o){
      var isBuy=o.side==='buy';
      var filledAmt=o.filled_avg_price&&o.filled_qty?f$(parseFloat(o.filled_avg_price)*parseFloat(o.filled_qty)):null;
      var amt=o.notional?f$(o.notional):filledAmt||'--';
      var sCl=['canceled','cancelled'].includes(o.status)?'o-ca':o.status==='filled'?'o-fi':'o-pe';
      var dt=new Date(o.created_at).toLocaleDateString('en-US',{month:'short',day:'numeric',hour:'2-digit',minute:'2-digit'});
      return '<div class="ord"><div><div class="o-sym">'+o.symbol+' <span style="font-size:12px;font-weight:600;color:'+(isBuy?'#2e7d32':'#c62828')+'">'+o.side.toUpperCase()+'</span></div>'
        +'<div class="o-dt">'+dt+' &middot; '+o.type+'</div></div>'
        +'<div style="text-align:right"><div class="o-amt" style="'+(isBuy?'':'color:#c62828')+'">'+(isBuy?'':'-')+amt+'</div>'
        +'<span class="o-st '+sCl+'">'+o.status+'</span></div></div>';
    }).join('');
  }).catch(function(e){out.innerHTML='<div class="empty">Failed: '+(e.message||'Check connection')+'</div>';});
}
function exportCSV(){
  if(!ALL_ORDERS.length){showToast('Load orders first','err');return;}
  var rows=[['Symbol','Side','Notional','Status','Type','Created_at']].concat(ALL_ORDERS.map(function(o){return [o.symbol,o.side,o.notional||'',o.status,o.type,o.created_at];}));
  var csv=rows.map(function(r){return r.map(function(v){return '"'+String(v||'').replace(/"/g,'""')+'"';}).join(',');}).join('\n');
  var a=document.createElement('a');a.href='data:text/csv;charset=utf-8,'+encodeURIComponent(csv);a.download='orders_'+new Date().toISOString().slice(0,10)+'.csv';a.click();
  showToast('CSV exported','ok');
}

// ─── AUTO BUY ─────────────────────────────────────────────────────────────────
function saveAB(){var ab={enabled:document.getElementById('abToggle').checked,time:document.getElementById('abTime').value,ticker:document.getElementById('abTicker').value.toUpperCase().trim(),lastRun:''};localStorage.setItem('psp_ab',JSON.stringify(ab));}
function loadAB(){var ab=JSON.parse(localStorage.getItem('psp_ab')||'{}');if(ab.enabled)document.getElementById('abToggle').checked=true;if(ab.time)document.getElementById('abTime').value=ab.time;if(ab.ticker)document.getElementById('abTicker').value=ab.ticker;}
setInterval(function(){
  var ab=JSON.parse(localStorage.getItem('psp_ab')||'{}');
  if(!ab.enabled||!CONNECTED||!ab.ticker) return;
  var now=new Date();var parts=(ab.time||'09:35').split(':').map(Number);var today=now.toDateString();
  if(now.getHours()===parts[0]&&now.getMinutes()===parts[1]&&ab.lastRun!==today){
    ab.lastRun=today;localStorage.setItem('psp_ab',JSON.stringify(ab));
    var fakeBtn={textContent:'',disabled:false};buyStock(ab.ticker,fakeBtn);
    showToast('Auto-buy: $'+ORDER_AMT+' of '+ab.ticker+' placed!','inf',6000);
  }
},30000);

// ─── PRICE ALERTS ─────────────────────────────────────────────────────────────
function getAlerts(){return JSON.parse(localStorage.getItem('psp_alerts')||'[]');}
function saveAlerts(a){localStorage.setItem('psp_alerts',JSON.stringify(a));}
function addAlert(ticker,price,type){
  var p=parseFloat(price);if(!ticker||isNaN(p)||p<=0){showToast('Enter a valid ticker and price','err');return;}
  var a=getAlerts();a.push({id:Date.now(),ticker:ticker.toUpperCase(),price:p,type:type,triggered:false});saveAlerts(a);renderWatchlist();showToast('Alert set: '+ticker+' '+type+' '+f$(p),'ok');
}
function removeAlert(id){saveAlerts(getAlerts().filter(function(a){return a.id!==id;}));renderWatchlist();}
var alertRunning=false;
function startAlertChecker(){
  if(alertRunning) return;alertRunning=true;
  setInterval(function(){
    var active=getAlerts().filter(function(a){return !a.triggered;});if(!active.length) return;
    var syms=active.map(function(a){return a.ticker;}).filter(function(v,i,arr){return arr.indexOf(v)===i;}).join(',');
    fetch(prx('https://query1.finance.yahoo.com/v7/finance/quote?symbols='+syms)).then(function(r){return r.json();}).then(function(d){
      var all=getAlerts();var changed=false;
      (d&&d.quoteResponse&&d.quoteResponse.result||[]).forEach(function(q){
        LIVE_PRICES[q.symbol]=q.regularMarketPrice;var price=q.regularMarketPrice;
        all.forEach(function(al){
          if(al.ticker===q.symbol&&!al.triggered){
            var hit=(al.type==='above'&&price>=al.price)||(al.type==='below'&&price<=al.price);
            if(hit){al.triggered=true;changed=true;showToast('Alert: '+al.ticker+' is '+al.type+' '+f$(al.price)+'! Now: '+f$(price),'inf',7000);if(Notification.permission==='granted'){new Notification(al.ticker+' Alert',{body:'Price '+al.type+' '+f$(al.price)+' -- now '+f$(price)});}}
          }
        });
      });
      if(changed) saveAlerts(all);
    }).catch(function(){});
  },60000);
}

// ─── WATCHLIST ────────────────────────────────────────────────────────────────
function getWL(){return JSON.parse(localStorage.getItem('psp_wl')||'[]');}
function addToWL(ticker){
  var t=(ticker||'').trim().toUpperCase();if(!t){showToast('Enter a ticker symbol','err');return;}
  var wl=getWL();if(wl.includes(t)){showToast(t+' already in watchlist','err');return;}
  wl.push(t);localStorage.setItem('psp_wl',JSON.stringify(wl));renderWatchlist();
  var inp=document.getElementById('wlInput');if(inp)inp.value='';
  showToast(t+' added to watchlist','ok');
}
function removeFromWL(ticker){localStorage.setItem('psp_wl',JSON.stringify(getWL().filter(function(t){return t!==ticker;})));renderWatchlist();}
function renderWatchlist(){
  var out=document.getElementById('watchlistOut');if(!out) return;
  var wl=getWL();var alerts=getAlerts();
  if(Notification.permission==='default'&&!localStorage.getItem('psp_notif')){Notification.requestPermission().then(function(){localStorage.setItem('psp_notif','1');});}
  var pricesP=wl.length?fetch(prx('https://query1.finance.yahoo.com/v7/finance/quote?symbols='+wl.join(','))).then(function(r){return r.json();}).catch(function(){return {};})
    :Promise.resolve({});
  pricesP.then(function(d){
    var prices={};(d&&d.quoteResponse&&d.quoteResponse.result||[]).forEach(function(q){prices[q.symbol]={price:q.regularMarketPrice,change:q.regularMarketChangePercent||0};LIVE_PRICES[q.symbol]=q.regularMarketPrice;});
    var wlHTML=wl.length?
      '<div class="table-wrap"><table class="wl-table"><thead><tr><th>Symbol</th><th>Price</th><th>Change</th><th>Alerts</th><th>Actions</th></tr></thead><tbody>'
      +wl.map(function(sym){
        var pd=prices[sym];var isUp=(pd&&pd.change||0)>=0;var symAlerts=alerts.filter(function(a){return a.ticker===sym&&!a.triggered;});
        return '<tr>'
          +'<td><div class="wl-sym">'+sym+'</div></td>'
          +'<td style="font-weight:700">'+(pd?f$(pd.price):'--')+'</td>'
          +'<td class="'+(pd?(isUp?'up':'dn'):'')+'" style="font-weight:600">'+(pd?(isUp?'+':'')+pd.change.toFixed(2)+'%':'--')+'</td>'
          +'<td style="font-size:11px;color:'+(symAlerts.length?'#f6ad37':'var(--tx3)')+'">'+(symAlerts.length?'&#128276; '+symAlerts.length:'--')+'</td>'
          +'<td><div class="wl-acts">'
          +'<button class="wl-btn" onclick="openAlertPanel(\''+sym+'\')">+ Alert</button>'
          +'<a href="https://finance.yahoo.com/news/?symbols='+sym+'" target="_blank" class="wl-btn" style="text-decoration:none">News</a>'
          +'<button class="wl-btn wl-buy'+(bMode?' paper':'')+'" onclick="buyStock(\''+sym+'\',this)">Buy 

    var alertsHTML=alerts.length?alerts.map(function(a){
      return '<div class="al-row"><span style="font-size:16px">'+(a.triggered?'&#9989;':'&#128276;')+'</span>'
        +'<span class="al-inf" '+(a.triggered?'style="opacity:.5;text-decoration:line-through"':'')+'><strong>'+a.ticker+'</strong> '+a.type+' '+f$(a.price)+(a.triggered?' -- triggered':'')+'</span>'
        +'<button class="al-del" onclick="removeAlert('+a.id+')" title="Remove">&#215;</button></div>';
    }).join(''):'<div style="font-size:12px;color:var(--tx4);padding:.5rem 0">No alerts set. Click "+ Alert" on any watchlist stock.</div>';

    var today=new Date();today.setHours(0,0,0,0);
    var earningsHTML=Object.entries(EARNINGS).filter(function(e){return new Date(e[1])>=today;}).sort(function(a,b){return new Date(a[1])-new Date(b[1]);}).map(function(e){
      var sym=e[0],dt=new Date(e[1]);dt.setHours(0,0,0,0);
      var days=Math.round((dt-today)/86400000);
      var dayLbl=days===0?'Today!':days===1?'Tomorrow':'In '+days+' days';
      var dayCls=days===0?'earn-to':days<=7?'earn-so':'earn-ok';
      return '<div class="earn-c"><div><div class="earn-sy">'+sym+'</div><div class="earn-co">'+(DB.find(function(s){return s.ticker===sym;})||{}).company||''+'</div></div>'
        +'<div><div class="earn-dv">'+dt.toLocaleDateString('en-US',{month:'short',day:'numeric'})+'</div><div class="earn-dy '+dayCls+'">'+dayLbl+'</div></div></div>';
    }).join('');

    out.innerHTML='<div class="wl-add"><input id="wlInput" class="wl-inp" type="text" placeholder="Add ticker e.g. AAPL" maxlength="6" onkeydown="if(event.key===\'Enter\')addToWL(this.value)"/><button class="wl-add-btn" onclick="addToWL(document.getElementById(\'wlInput\').value)">Add</button></div>'
      +'<div class="al-pan" id="alertPanel"></div>'
      +wlHTML
      +'<div style="margin-top:20px"><div style="font-size:11px;font-weight:700;color:var(--tx3);text-transform:uppercase;letter-spacing:.07em;margin-bottom:8px">Price Alerts <span style="font-size:10px;font-weight:400;text-transform:none;color:var(--tx3)">Notifies while tab is open</span></div>'
      +alertsHTML+'</div>'
      +'<div style="margin-top:20px"><div style="font-size:11px;font-weight:700;color:var(--tx3);text-transform:uppercase;letter-spacing:.07em;margin-bottom:8px">Earnings Calendar</div>'
      +'<div class="earn-grid">'
      +(earningsHTML||'<div style="font-size:12px;color:var(--tx3)">No upcoming earnings</div>')
      +'</div></div>';
  });
}
function openAlertPanel(ticker){
  var panel=document.getElementById('alertPanel');
  var isOpen=panel.classList.contains('open')&&panel.dataset.for===ticker;
  panel.classList.toggle('open',!isOpen);panel.dataset.for=ticker;
  if(!isOpen){
    panel.innerHTML='<div class="al-t">&#128276; Set price alert for <strong>'+ticker+'</strong></div>'
      +'<div class="al-form"><select id="alertType"><option value="above">Price goes above</option><option value="below">Price goes below</option></select>'
      +'<input type="number" id="alertPrice" placeholder="e.g. 150" step="0.01" min="0.01"/>'
      +'<button class="al-set" onclick="addAlert(\''+ticker+'\',document.getElementById(\'alertPrice\').value,document.getElementById(\'alertType\').value)">Set Alert</button>'
      +'<button class="al-cn" onclick="document.getElementById(\'alertPanel\').classList.remove(\'open\')">Cancel</button></div>';
  }
}

// ─── SECTOR EXPLORER ──────────────────────────────────────────────────────────
function getStockData(ticker,sec){
  var fromDB=ALL_STOCKS.find(function(s){return s.ticker===ticker;});
  if(fromDB) return fromDB;
  return Object.assign({ticker:ticker},sec.stockData&&sec.stockData[ticker]||{company:ticker,rating:'Listed',bear:-20,base:20,bull:60,pol:[],bil:[],inst:[],insider:[],options:[],retail:[],why:'Research this stock using the links below.'});
}
function sectorMomentum(sec){
  var all=sec.stocks.concat(sec.gems).map(function(tk){var sd=getStockData(tk,sec);return sd.base||0;});
  return Math.round(all.reduce(function(s,v){return s+v;},0)/(all.length||1));
}
function renderSectorGrid(){
  var out=document.getElementById('sectorsOut');
  var moms=Object.keys(SECTORS).map(function(n){return {n:n,s:SECTORS[n],m:sectorMomentum(SECTORS[n])};}).sort(function(a,b){return b.m-a.m;});
  var maxM=Math.max.apply(null,moms.map(function(x){return x.m;}));maxM=maxM||1;
  var scr='<div class="scr-bar"><label>Rating:</label><select id="scRating" onchange="applyScreener()"><option value="">All</option><option>Strong Buy</option><option>Moderate Buy</option><option>Speculative Buy</option></select>'
    +'<label>Min conviction:</label><input id="scConv" type="number" placeholder="0" min="0" max="100" style="width:60px" oninput="applyScreener()"/>'
    +'<label>Signal:</label><select id="scSig" onchange="applyScreener()"><option value="">Any</option>'+Object.keys(SIG).map(function(k){return '<option value="'+k+'">'+SIG[k].l+'</option>';}).join('')+'</select></div>';
  var cards=moms.map(function(x,i){
    var n=x.n,s=x.s,m=x.m;var topK=i===0?'&#128293; ':i===1?'&#11014;&#65039; ':'';
    return '<div class="sec-c" id="sc-'+n.replace(/\W/g,'_')+'" onclick="openSector(\''+n+'\')">'
      +'<div class="sc-ic">'+s.icon+'</div><div class="sc-nm">'+topK+n+'</div>'
      +'<div class="sc-mt">'+s.stocks.length+' stocks &middot; '+s.gems.length+' gems &middot; avg +'+m+'% base</div>'
      +'<span class="badge '+s.cls+' nc" style="font-size:10px">'+s.stocks.slice(0,3).join(' &middot; ')+'</span>'
      +'<div class="rot-bg"><div class="rot-fill" style="width:'+(m/maxM*100).toFixed(0)+'%"></div></div>'
      +'</div>';
  }).join('');
  out.innerHTML=scr+'<div class="lbl" style="margin-bottom:.75rem">Sector rotation -- ranked by avg base-case ROI</div><div class="sec-grid">'+cards+'</div><div id="sectorDetail"></div>';
}
function applyScreener(){
  SCREENER.rating=(document.getElementById('scRating')||{}).value||'';
  SCREENER.conv=parseInt((document.getElementById('scConv')||{}).value)||0;
  SCREENER.sig=(document.getElementById('scSig')||{}).value||'';
  if(ACT_SECTOR) renderSectorDetail(ACT_SECTOR);
}
function stockPass(s){
  if(SCREENER.rating&&s.rating!==SCREENER.rating) return false;
  if(SCREENER.conv&&convScore(s)<SCREENER.conv) return false;
  if(SCREENER.sig&&!(s[SCREENER.sig]&&s[SCREENER.sig].length)) return false;
  return true;
}
function openSector(name){
  ACT_SECTOR=name;ACT_FILTER='all';
  document.querySelectorAll('.sec-c').forEach(function(c){c.classList.remove('active');});
  var el=document.getElementById('sc-'+name.replace(/\W/g,'_'));if(el)el.classList.add('active');
  renderSectorDetail(name);
  setTimeout(function(){var el2=document.getElementById('sectorDetail');if(el2)el2.scrollIntoView({behavior:'smooth',block:'start'});},50);
}
function closeSectorDetail(){
  var el=document.getElementById('sectorDetail');if(el)el.innerHTML='';
  document.querySelectorAll('.sec-c').forEach(function(c){c.classList.remove('active');});
  ACT_SECTOR=null;
}
function ssRow(s,isGem){
  var rCls=s.rating==='Strong Buy'?'b-green':s.rating==='Moderate Buy'?'b-amber':'b-gray';
  var cv=convScore(s);var cvCls=cv>=80?'cv-hi':cv>=60?'cv-go':cv>=40?'cv-md':'cv-lo';
  var bMode=MODE==='paper';
  return '<div class="ss-rw'+(isGem?' gem-rw':'')+'">'+( isGem?'<div class="gem-lb">&#11088; Hidden Gem</div>':'')
    +'<div class="ss-top"><div><div class="ss-sy">'+s.ticker+'</div><div class="ss-co">'+(s.company||s.ticker)+'</div></div>'
    +'<div class="ss-rt"><span class="ss-ra badge '+rCls+' nc">'+s.rating+'</span><div class="ss-bs">'+pct(s.base||0)+' base</div></div></div>'
    +'<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px"><span class="cv '+cvCls+'" style="font-size:11px">&#9889; '+cv+'</span>'
    +'<a href="https://finance.yahoo.com/news/?symbols='+s.ticker+'" target="_blank" class="nws">&#128240; News</a></div>'
    +'<div class="sigs">'+sigChips(s)+'</div>'
    +'<div class="ss-prd"><div class="ss-p bear">Bear '+pct(s.bear||0)+'</div><div class="ss-p base">Base '+pct(s.base||0)+'</div><div class="ss-p bull">Bull +'+(s.bull||0)+'%</div></div>'
    +'<div class="ss-wh">'+(s.why||'')+'</div>'
    +'<button class="'+sCls()+'" onclick="buyStock(\''+s.ticker+'\',this)" '+(CONNECTED?'':'disabled')+'>Buy $'+ORDER_AMT+(bMode?' (P)':'')+'</button></div>';
}
function renderSectorDetail(name){
  var sec=SECTORS[name];
  var FKEYS=['all','pol','bil','inst','insider','options','retail','multi'];
  var FLBLS=['All','&#127963; Pol','&#128142; Bil','&#127970; Inst','&#128084; Insider','&#128202; Options','&#128241; Retail','3+ signals'];
  var fBtns=FKEYS.map(function(k,i){return '<button class="sig-btn'+(ACT_FILTER===k?' active':'')+'" onclick="ACT_FILTER=\''+k+'\';renderSectorDetail(\''+name+'\')">'+FLBLS[i]+'</button>';}).join('');
  function sigF(s){if(ACT_FILTER==='all')return true;if(ACT_FILTER==='multi')return Object.keys(SIG).filter(function(k){return s[k]&&s[k].length;}).length>=3;return s[ACT_FILTER]&&s[ACT_FILTER].length>0;}
  function score(s){return convScore(s)+(s.rating==='Strong Buy'?20:s.rating==='Moderate Buy'?10:0)+(s.base||0)/5;}
  var stocks=sec.stocks.map(function(tk){return getStockData(tk,sec);}).filter(function(s){return stockPass(s)&&sigF(s);}).sort(function(a,b){return score(b)-score(a);});
  var gems=sec.gems.map(function(tk){return getStockData(tk,sec);}).filter(function(s){return stockPass(s)&&sigF(s);}).sort(function(a,b){return score(b)-score(a);});
  document.getElementById('sectorDetail').innerHTML='<div class="sec-det"><div class="sd-hdr"><div style="display:flex;align-items:center;gap:8px"><span style="font-size:20px">'+sec.icon+'</span><div class="sd-t">'+name+'</div></div><button class="sd-cl" onclick="closeSectorDetail()">&#215; Close</button></div>'
    +'<div class="sig-fs">'+fBtns+'</div>'
    +(stocks.length?stocks.map(function(s){return ssRow(s,false);}).join(''):'<div class="empty" style="padding:1rem">No stocks match this filter</div>')
    +(gems.length?'<div class="sec-dv">&#11088; Hidden Gems in '+name+'</div>'+gems.map(function(g){return ssRow(g,true);}).join(''):'')
    +'</div>';
}

// ─── MODAL ────────────────────────────────────────────────────────────────────
function openSectorModal(sectorName){
  var sec=SECTORS[sectorName];if(!sec)return;
  document.getElementById('moT').textContent=sec.icon+' '+sectorName;
  document.getElementById('moS').textContent=sec.stocks.length+' stocks \u00b7 '+sec.gems.length+' hidden gems';
  document.getElementById('moB').innerHTML=sec.stocks.map(function(tk){return ssRow(getStockData(tk,sec),false);}).join('')
    +(sec.gems.length?'<div class="sec-dv">&#11088; Hidden Gems</div>'+sec.gems.map(function(tk){return ssRow(getStockData(tk,sec),true);}).join(''):'');
  document.getElementById('modalOv').classList.add('open');
}
function closeModal(){document.getElementById('modalOv').classList.remove('open');}
function maybeClose(e){if(e.target===document.getElementById('modalOv'))closeModal();}

// ─── SEARCH AUTOCOMPLETE ──────────────────────────────────────────────────────
var srchFocusIdx=-1;
function onSearchInput(inp){
  var val=(inp.value||'').trim();
  if(val.length<1){closeSearchDrop();return;}
  var upper=val.toUpperCase();
  var lower=val.toLowerCase();
  var results=SEARCH_DB.filter(function(s){
    if(s.t.startsWith(upper)) return true;
    var words=s.n.toLowerCase().split(' ');
    return words.some(function(w){return w.startsWith(lower);});
  }).slice(0,9);
  if(!results.length){closeSearchDrop();return;}
  var drop=document.getElementById('srchDrop');
  if(!drop) return;
  drop.innerHTML=results.map(function(s,i){
    var tHL=s.t.toUpperCase().startsWith(upper)?'<strong>'+s.t.slice(0,upper.length)+'</strong>'+s.t.slice(upper.length):s.t;
    var nHL=s.n;
    return '<div class="srch-item" data-idx="'+i+'" onclick="selectStock(\''+s.t+'\')" onmouseover="srchFocusIdx='+i+';updateFocus()">'
      +'<span class="srch-tk">'+tHL+'</span>'
      +'<span class="srch-nm">'+nHL+'</span>'
      +'<span class="srch-sc">'+s.s+'</span>'
      +'</div>';
  }).join('');
  drop.classList.add('open');
  srchFocusIdx=-1;
}
function onSearchKey(e){
  var drop=document.getElementById('srchDrop');
  if(!drop||!drop.classList.contains('open')){if(e.key==='Enter')searchStock();return;}
  var items=drop.querySelectorAll('.srch-item');
  if(e.key==='ArrowDown'){e.preventDefault();srchFocusIdx=Math.min(srchFocusIdx+1,items.length-1);updateFocus();}
  else if(e.key==='ArrowUp'){e.preventDefault();srchFocusIdx=Math.max(srchFocusIdx-1,-1);updateFocus();}
  else if(e.key==='Enter'){e.preventDefault();if(srchFocusIdx>=0&&items[srchFocusIdx]){items[srchFocusIdx].click();}else{closeSearchDrop();searchStock();}}
  else if(e.key==='Escape'){closeSearchDrop();}
}
function updateFocus(){
  var drop=document.getElementById('srchDrop');if(!drop) return;
  var items=drop.querySelectorAll('.srch-item');
  Array.prototype.forEach.call(items,function(it,i){
    it.classList.toggle('focused',i===srchFocusIdx);
    if(i===srchFocusIdx) it.scrollIntoView({block:'nearest'});
  });
}
function closeSearchDrop(){
  var drop=document.getElementById('srchDrop');
  if(drop){drop.classList.remove('open');drop.innerHTML='';}
  srchFocusIdx=-1;
}
function selectStock(ticker){
  var inp=document.getElementById('srchIn');if(inp) inp.value=ticker;
  closeSearchDrop();searchStock();
}
// close dropdown when clicking outside
document.addEventListener('click',function(e){if(!e.target.closest('.srch-wrap'))closeSearchDrop();});

// ─── SEARCH ───────────────────────────────────────────────────────────────────
function fmtCap(v){if(v>=1e12)return '$'+(v/1e12).toFixed(2)+'T';if(v>=1e9)return '$'+(v/1e9).toFixed(1)+'B';if(v>=1e6)return '$'+(v/1e6).toFixed(1)+'M';return '$'+v.toLocaleString();}
function searchStock(){
  var raw=((document.getElementById('srchIn')||{}).value||'').trim();
  var lower=raw.toLowerCase();
  // resolve company name to ticker
  var fromDB=SEARCH_DB.find(function(s){return s.n.toLowerCase()===lower||s.t.toLowerCase()===lower;});
  var ticker=(fromDB?fromDB.t:raw).toUpperCase();
  if(!ticker){showToast('Enter a company name or ticker symbol','err');return;}
  closeSearchDrop();
  out.innerHTML='<div class="spin"><div class="spn"></div><div class="spin-t">Looking up '+ticker+'...</div></div>';
  fetch(prx('https://query1.finance.yahoo.com/v7/finance/quote?symbols='+ticker)).then(function(r){return r.json();}).then(function(d){
    var q=(d&&d.quoteResponse&&d.quoteResponse.result||[])[0];
    if(!q||!q.regularMarketPrice){out.innerHTML='<div class="empty">No results for "'+ticker+'" -- check the symbol and try again</div>';return;}
    LIVE_PRICES[q.symbol]=q.regularMarketPrice;
    var dbStock=ALL_STOCKS.find(function(s){return s.ticker===q.symbol;});
    var price=q.regularMarketPrice||0;var chg=q.regularMarketChangePercent||0;var isUp=chg>=0;var bMode=MODE==='paper';
    var dbSection=dbStock?
      '<div style="margin-bottom:8px">'+convBadge(dbStock)+'</div><div class="sigs" style="margin:0 0 4px">'+sigChips(dbStock)+'</div>'+whosBuying(dbStock,false):
      '<div style="padding:10px 12px;background:var(--sf2);border-radius:10px;font-size:12px;color:var(--tx3);margin:8px 0">Not in our tracked database -- buy and research links available below.</div>';
    var buyBtns='<div style="display:flex;gap:8px;align-items:center;margin:14px 0;flex-wrap:wrap">'
      +'<button class="'+bCls()+'" onclick="buyStock(\''+q.symbol+'\',this)">Buy $'+ORDER_AMT+(bMode?' (P)':'')+'</button>'
      +'<button class="refresh-btn" style="margin:0" onclick="addToWL(\''+q.symbol+'\')">+ Watchlist</button>'
      +'<a href="https://finance.yahoo.com/news/?symbols='+q.symbol+'" target="_blank" class="nws">&#128240; News</a>'
      +'<a href="https://finviz.com/quote.ashx?t='+q.symbol+'" target="_blank" class="nws">Finviz</a>'
      +'</div>';
    out.innerHTML='<div class="card"><div class="tkr" style="font-size:26px;letter-spacing:-.5px">'+q.symbol+'</div>'
      +'<div class="co">'+(q.longName||q.shortName||q.symbol)+(q.exchangeName?' &nbsp;&middot;&nbsp; '+q.exchangeName:'')+'</div>'
      +'<div style="display:flex;align-items:baseline;gap:10px;margin-bottom:16px;flex-wrap:wrap"><span class="price">'+f$(price)+'</span><span style="font-size:16px;font-weight:700;color:'+(isUp?'#2e7d32':'#c62828')+'">'+(isUp?'+':'')+chg.toFixed(2)+'% today</span></div>'
      +'<div class="srch-st"><div class="astat"><div class="aval">'+(q.marketCap?fmtCap(q.marketCap):'--')+'</div><div class="albl">Market Cap</div></div>'
      +'<div class="astat"><div class="aval">'+(q.trailingPE?q.trailingPE.toFixed(1)+'x':'--')+'</div><div class="albl">Trailing P/E</div></div>'
      +'<div class="astat"><div class="aval">'+(q.fiftyTwoWeekHigh?f$(q.fiftyTwoWeekHigh):'--')+'</div><div class="albl">52W High</div></div>'
      +'<div class="astat"><div class="aval">'+(q.fiftyTwoWeekLow?f$(q.fiftyTwoWeekLow):'--')+'</div><div class="albl">52W Low</div></div></div>'
      +dbSection+buyBtns+bracketPanel(q.symbol)+articlesHTML(q.symbol)+'</div>';
  }).catch(function(e){out.innerHTML='<div class="empty">Search failed: '+(e.message||'Check your connection')+'</div>';});
}

// ─── PRICES + PICKS ───────────────────────────────────────────────────────────
var STEPS=['Fetching live prices...','Scoring all signals...','Running AI models...','Finalizing picks...'];
function fetchPrices(){
  return fetch(prx('https://query1.finance.yahoo.com/v7/finance/quote?symbols='+ALL_STOCKS.map(function(s){return s.ticker;}).join(','))).then(function(r){return r.json();}).then(function(d){
    (d&&d.quoteResponse&&d.quoteResponse.result||[]).forEach(function(q){var s=ALL_STOCKS.find(function(x){return x.ticker===q.symbol;});if(s&&q.regularMarketPrice){s.livePrice=q.regularMarketPrice;LIVE_PRICES[q.symbol]=q.regularMarketPrice;}});
    return true;
  }).catch(function(){return false;});
}
function getDailyPick(){
  var day=Math.floor(Date.now()/86400000);
  return DB.map(function(s,i){return Object.assign({},s,{score:s.polScore*0.55+s.conf*0.45+(day%(i+4)===0?6:0)});}).sort(function(a,b){return b.score-a.score;});
}
function renderPicks(sorted,live){
  var pick=sorted[0];var runners=sorted.slice(1,4);
  var p=pick.livePrice||pick.fb;var today=new Date().toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'});
  var allChips=(pick.pol||[]).map(function(x){return '<span class="chip">&#127963; '+x+'</span>';}).join('')+(pick.bil||[]).map(function(x){return '<span class="chip">&#128142; '+x+'</span>';}).join('');
  var liveTag=live&&pick.livePrice?'<span class="badge b-gray nc">Live price</span>':'<span class="badge b-gray nc">Est. price</span>';
  var bMode=MODE==='paper';
  var runnerHTML=runners.map(function(r){var rp=r.livePrice||r.fb;return '<div class="alt" onclick="openSectorModal(\''+r.sector+'\')"><div class="alt-t">'+r.ticker+'</div><div class="alt-co">'+r.company+'</div><div class="alt-p">'+f$(rp)+(live&&r.livePrice?'':' <span style="font-size:10px;color:var(--tx4)">est.</span>')+'</div><div class="alt-w">'+r.why.split('.')[0]+'.</div></div>';}).join('');
  var gemHTML=GEMS.map(function(g){
    var gp=g.livePrice||g.fb;
    return '<div class="gem"><div class="g-hdr"><div><div class="g-tk">'+g.ticker+'</div><div class="g-co">'+g.company+'</div>'
      +'<div class="g-bgs"><span class="badge '+g.tCls+'" onclick="openSectorModal(\''+g.sector+'\')">'+g.theme+' &#8599;</span><span class="badge b-gray nc">'+g.rating+'</span></div></div>'
      +'<div class="g-rt"><div class="g-pr">'+f$(gp)+(live&&g.livePrice?'':' <span style="font-size:10px;color:var(--tx4)">est.</span>')+'</div><div class="g-sh">$'+ORDER_AMT+' = '+((ORDER_AMT)/(gp)).toFixed(4)+' sh</div><div class="g-roi">'+pct(g.bear)+' to +'+g.bull+'%</div></div></div>'
      +'<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">'+convBadge(g)+'<a href="https://finance.yahoo.com/news/?symbols='+g.ticker+'" target="_blank" class="nws">&#128240; News</a></div>'
      +'<div class="sigs" style="margin-bottom:10px">'+sigChips(g)+'</div>'
      +whosBuying(g,true)
      +'<p class="g-why" style="margin-top:8px">'+g.why+'</p>'
      +'<div class="lbl">AI 12-month prediction</div>'
      +'<div class="scns"><div class="scn scn-bear"><div class="scn-nm">Bear</div><div class="scn-pct">'+pct(g.bear)+'</div><div class="scn-pb">'+g.bearP+'% likely</div><div class="pb-bg"><div class="pb" style="width:'+g.bearP+'%"></div></div></div>'
      +'<div class="scn scn-base"><div class="scn-nm">Base &#9733;</div><div class="scn-pct">'+pct(g.base)+'</div><div class="scn-pb">'+g.baseP+'% likely</div><div class="pb-bg"><div class="pb" style="width:'+g.baseP+'%"></div></div></div>'
      +'<div class="scn scn-bull"><div class="scn-nm">Bull</div><div class="scn-pct">+'+g.bull+'%</div><div class="scn-pb">'+g.bullP+'% likely</div><div class="pb-bg"><div class="pb" style="width:'+g.bullP+'%"></div></div></div></div>'
      +'<div class="cat">'+g.catalyst+'</div>'
      +'<button class="'+gCls()+'" onclick="buyStock(\''+g.ticker+'\',this)">Buy $'+ORDER_AMT+(bMode?' (Paper)':'')+'</button>'
      +bracketPanel(g.ticker)+'</div>';
  }).join('');
  document.getElementById('picksOut').innerHTML='<div class="dt-b">'+today+'</div>'
    +'<div class="card"><div class="tkr">'+pick.ticker+'</div><div class="co">'+pick.company+'</div>'
    +'<div class="badges"><span class="badge b-green nc">'+pick.rating+'</span><span class="badge b-blue nc">Top congressional buy</span><span class="badge '+pick.sCls+'" onclick="openSectorModal(\''+pick.sector+'\')">'+pick.sector+' &#8599;</span>'+liveTag+'</div>'
    +'<div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;flex-wrap:wrap">'+convBadge(pick)+'<a href="https://finance.yahoo.com/news/?symbols='+pick.ticker+'" target="_blank" class="nws">&#128240; News</a></div>'
    +'<div class="sigs" style="margin-bottom:12px">'+sigChips(pick)+'</div>'
    +'<div class="pr"><span class="price">'+f$(p)+'</span><span class="sh">$'+ORDER_AMT+' = '+((ORDER_AMT)/(p)).toFixed(4)+' shares</span>'
    +'<button class="'+bCls()+'" onclick="buyStock(\''+pick.ticker+'\',this)">Buy $'+ORDER_AMT+(bMode?' (Paper)':'')+'</button></div>'
    +bracketPanel(pick.ticker)
    +'<div class="lbl">Why this pick today</div><p class="why-t">'+pick.why+'</p>'
    +'<div class="lbl">Confidence score</div><div class="bar-bg"><div class="bar-fill" style="width:'+pick.conf+'%"></div></div>'
    +'<div class="cf-lbl"><span>Low</span><span style="font-weight:700;color:var(--tx)">'+pick.conf+'%</span><span>High</span></div>'
    +'<hr class="dvd">'
    +whosBuying(pick,false)
    +'<div class="lbl" style="margin-top:14px">Analyst consensus</div><p class="ctx">'+pick.anaCtx+'</p>'
    +articlesHTML(pick.ticker)+'</div>'
    +'<div class="lbl">Runner-up picks <span style="font-size:10px;color:var(--tx4)">-- click to explore that sector</span></div>'
    +'<div class="alt-grid">'+runnerHTML+'</div>'
    +'<div class="sh-hdr"><div class="sh-t">Hidden gem picks</div><div class="sh-s">Under-the-radar &middot; All 6 signal types &middot; AI predictions &middot; Click sector badge to see more</div></div>'
    +gemHTML;
}
function run(){
  var btn=document.getElementById('pickBtn');btn.disabled=true;btn.textContent='Researching...';
  var si=0;
  document.getElementById('picksOut').innerHTML='<div class="spin"><div class="spn"></div><div class="spin-t">Analyzing all signal sources</div><div class="spin-s" id="ss">'+STEPS[0]+'</div></div>';
  var t=setInterval(function(){si=(si+1)%STEPS.length;var el=document.getElementById('ss');if(el)el.textContent=STEPS[si];},1200);
  fetchPrices().then(function(live){
    clearInterval(t);renderPicks(getDailyPick(),live);
    btn.textContent='Refresh picks';btn.disabled=false;
  });
}

// Init
loadAB();
+ORDER_AMT+'</button>'
          +'<button class="wl-btn wl-rm" onclick="removeFromWL(\''+sym+'\')">&#215;</button>'
          +'</div></td>'
          +'</tr>';
      }).join('')+'</tbody></table></div>'
      :'<div class="empty">Add stocks above to track them here</div>';

    var alertsHTML=alerts.length?alerts.map(function(a){
      return '<div class="al-row"><span style="font-size:16px">'+(a.triggered?'&#9989;':'&#128276;')+'</span>'
        +'<span class="al-inf" '+(a.triggered?'style="opacity:.5;text-decoration:line-through"':'')+'><strong>'+a.ticker+'</strong> '+a.type+' '+f$(a.price)+(a.triggered?' -- triggered':'')+'</span>'
        +'<button class="al-del" onclick="removeAlert('+a.id+')" title="Remove">&#215;</button></div>';
    }).join(''):'<div style="font-size:12px;color:var(--tx4);padding:.5rem 0">No alerts set. Click "+ Alert" on any watchlist stock.</div>';

    var today=new Date();today.setHours(0,0,0,0);
    var earningsHTML=Object.entries(EARNINGS).filter(function(e){return new Date(e[1])>=today;}).sort(function(a,b){return new Date(a[1])-new Date(b[1]);}).map(function(e){
      var sym=e[0],dt=new Date(e[1]);dt.setHours(0,0,0,0);
      var days=Math.round((dt-today)/86400000);
      var dayLbl=days===0?'Today!':days===1?'Tomorrow':'In '+days+' days';
      var dayCls=days===0?'earn-to':days<=7?'earn-so':'earn-ok';
      return '<div class="earn-c"><div><div class="earn-sy">'+sym+'</div><div class="earn-co">'+(DB.find(function(s){return s.ticker===sym;})||{}).company||''+'</div></div>'
        +'<div><div class="earn-dv">'+dt.toLocaleDateString('en-US',{month:'short',day:'numeric'})+'</div><div class="earn-dy '+dayCls+'">'+dayLbl+'</div></div></div>';
    }).join('');

    out.innerHTML='<div class="wl-add"><input id="wlInput" type="text" placeholder="Add ticker e.g. AAPL" maxlength="6" onkeydown="if(event.key===\'Enter\')addToWL(this.value)" style="text-transform:uppercase"/><button onclick="addToWL(document.getElementById(\'wlInput\').value)">Add</button></div>'
      +wlHTML
      +'<div class="al-pan" id="alertPanel"></div>'
      +'<div class="sh-hdr" style="margin-top:1.5rem"><div class="sh-t">Price Alerts</div><div class="sh-s">Notifies you while this tab is open</div></div>'
      +alertsHTML
      +'<div class="sh-hdr" style="margin-top:1.5rem"><div class="sh-t">Earnings Calendar</div><div class="sh-s">Upcoming earnings dates</div></div>'
      +(earningsHTML||'<div class="empty" style="padding:1rem">No upcoming earnings in database</div>');
  });
}
function openAlertPanel(ticker){
  var panel=document.getElementById('alertPanel');
  var isOpen=panel.classList.contains('open')&&panel.dataset.for===ticker;
  panel.classList.toggle('open',!isOpen);panel.dataset.for=ticker;
  if(!isOpen){
    panel.innerHTML='<div class="al-t">&#128276; Set price alert for <strong>'+ticker+'</strong></div>'
      +'<div class="al-form"><select id="alertType"><option value="above">Price goes above</option><option value="below">Price goes below</option></select>'
      +'<input type="number" id="alertPrice" placeholder="e.g. 150" step="0.01" min="0.01"/>'
      +'<button class="al-set" onclick="addAlert(\''+ticker+'\',document.getElementById(\'alertPrice\').value,document.getElementById(\'alertType\').value)">Set Alert</button>'
      +'<button class="al-cn" onclick="document.getElementById(\'alertPanel\').classList.remove(\'open\')">Cancel</button></div>';
  }
}

// ─── SECTOR EXPLORER ──────────────────────────────────────────────────────────
function getStockData(ticker,sec){
  var fromDB=ALL_STOCKS.find(function(s){return s.ticker===ticker;});
  if(fromDB) return fromDB;
  return Object.assign({ticker:ticker},sec.stockData&&sec.stockData[ticker]||{company:ticker,rating:'Listed',bear:-20,base:20,bull:60,pol:[],bil:[],inst:[],insider:[],options:[],retail:[],why:'Research this stock using the links below.'});
}
function sectorMomentum(sec){
  var all=sec.stocks.concat(sec.gems).map(function(tk){var sd=getStockData(tk,sec);return sd.base||0;});
  return Math.round(all.reduce(function(s,v){return s+v;},0)/(all.length||1));
}
function renderSectorGrid(){
  var out=document.getElementById('sectorsOut');
  var moms=Object.keys(SECTORS).map(function(n){return {n:n,s:SECTORS[n],m:sectorMomentum(SECTORS[n])};}).sort(function(a,b){return b.m-a.m;});
  var maxM=Math.max.apply(null,moms.map(function(x){return x.m;}));maxM=maxM||1;
  var scr='<div class="scr-bar"><label>Rating:</label><select id="scRating" onchange="applyScreener()"><option value="">All</option><option>Strong Buy</option><option>Moderate Buy</option><option>Speculative Buy</option></select>'
    +'<label>Min conviction:</label><input id="scConv" type="number" placeholder="0" min="0" max="100" style="width:60px" oninput="applyScreener()"/>'
    +'<label>Signal:</label><select id="scSig" onchange="applyScreener()"><option value="">Any</option>'+Object.keys(SIG).map(function(k){return '<option value="'+k+'">'+SIG[k].l+'</option>';}).join('')+'</select></div>';
  var cards=moms.map(function(x,i){
    var n=x.n,s=x.s,m=x.m;var topK=i===0?'&#128293; ':i===1?'&#11014;&#65039; ':'';
    return '<div class="sec-c" id="sc-'+n.replace(/\W/g,'_')+'" onclick="openSector(\''+n+'\')">'
      +'<div class="sc-ic">'+s.icon+'</div><div class="sc-nm">'+topK+n+'</div>'
      +'<div class="sc-mt">'+s.stocks.length+' stocks &middot; '+s.gems.length+' gems &middot; avg +'+m+'% base</div>'
      +'<span class="badge '+s.cls+' nc" style="font-size:10px">'+s.stocks.slice(0,3).join(' &middot; ')+'</span>'
      +'<div class="rot-bg"><div class="rot-fill" style="width:'+(m/maxM*100).toFixed(0)+'%"></div></div>'
      +'</div>';
  }).join('');
  out.innerHTML=scr+'<div class="lbl" style="margin-bottom:.75rem">Sector rotation -- ranked by avg base-case ROI</div><div class="sec-grid">'+cards+'</div><div id="sectorDetail"></div>';
}
function applyScreener(){
  SCREENER.rating=(document.getElementById('scRating')||{}).value||'';
  SCREENER.conv=parseInt((document.getElementById('scConv')||{}).value)||0;
  SCREENER.sig=(document.getElementById('scSig')||{}).value||'';
  if(ACT_SECTOR) renderSectorDetail(ACT_SECTOR);
}
function stockPass(s){
  if(SCREENER.rating&&s.rating!==SCREENER.rating) return false;
  if(SCREENER.conv&&convScore(s)<SCREENER.conv) return false;
  if(SCREENER.sig&&!(s[SCREENER.sig]&&s[SCREENER.sig].length)) return false;
  return true;
}
function openSector(name){
  ACT_SECTOR=name;ACT_FILTER='all';
  document.querySelectorAll('.sec-c').forEach(function(c){c.classList.remove('active');});
  var el=document.getElementById('sc-'+name.replace(/\W/g,'_'));if(el)el.classList.add('active');
  renderSectorDetail(name);
  setTimeout(function(){var el2=document.getElementById('sectorDetail');if(el2)el2.scrollIntoView({behavior:'smooth',block:'start'});},50);
}
function closeSectorDetail(){
  var el=document.getElementById('sectorDetail');if(el)el.innerHTML='';
  document.querySelectorAll('.sec-c').forEach(function(c){c.classList.remove('active');});
  ACT_SECTOR=null;
}
function ssRow(s,isGem){
  var rCls=s.rating==='Strong Buy'?'b-green':s.rating==='Moderate Buy'?'b-amber':'b-gray';
  var cv=convScore(s);var cvCls=cv>=80?'cv-hi':cv>=60?'cv-go':cv>=40?'cv-md':'cv-lo';
  var bMode=MODE==='paper';
  return '<div class="ss-rw'+(isGem?' gem-rw':'')+'">'+( isGem?'<div class="gem-lb">&#11088; Hidden Gem</div>':'')
    +'<div class="ss-top"><div><div class="ss-sy">'+s.ticker+'</div><div class="ss-co">'+(s.company||s.ticker)+'</div></div>'
    +'<div class="ss-rt"><span class="ss-ra badge '+rCls+' nc">'+s.rating+'</span><div class="ss-bs">'+pct(s.base||0)+' base</div></div></div>'
    +'<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px"><span class="cv '+cvCls+'" style="font-size:11px">&#9889; '+cv+'</span>'
    +'<a href="https://finance.yahoo.com/news/?symbols='+s.ticker+'" target="_blank" class="nws">&#128240; News</a></div>'
    +'<div class="sigs">'+sigChips(s)+'</div>'
    +'<div class="ss-prd"><div class="ss-p bear">Bear '+pct(s.bear||0)+'</div><div class="ss-p base">Base '+pct(s.base||0)+'</div><div class="ss-p bull">Bull +'+(s.bull||0)+'%</div></div>'
    +'<div class="ss-wh">'+(s.why||'')+'</div>'
    +'<button class="'+sCls()+'" onclick="buyStock(\''+s.ticker+'\',this)" '+(CONNECTED?'':'disabled')+'>Buy $'+ORDER_AMT+(bMode?' (P)':'')+'</button></div>';
}
function renderSectorDetail(name){
  var sec=SECTORS[name];
  var FKEYS=['all','pol','bil','inst','insider','options','retail','multi'];
  var FLBLS=['All','&#127963; Pol','&#128142; Bil','&#127970; Inst','&#128084; Insider','&#128202; Options','&#128241; Retail','3+ signals'];
  var fBtns=FKEYS.map(function(k,i){return '<button class="sig-btn'+(ACT_FILTER===k?' active':'')+'" onclick="ACT_FILTER=\''+k+'\';renderSectorDetail(\''+name+'\')">'+FLBLS[i]+'</button>';}).join('');
  function sigF(s){if(ACT_FILTER==='all')return true;if(ACT_FILTER==='multi')return Object.keys(SIG).filter(function(k){return s[k]&&s[k].length;}).length>=3;return s[ACT_FILTER]&&s[ACT_FILTER].length>0;}
  function score(s){return convScore(s)+(s.rating==='Strong Buy'?20:s.rating==='Moderate Buy'?10:0)+(s.base||0)/5;}
  var stocks=sec.stocks.map(function(tk){return getStockData(tk,sec);}).filter(function(s){return stockPass(s)&&sigF(s);}).sort(function(a,b){return score(b)-score(a);});
  var gems=sec.gems.map(function(tk){return getStockData(tk,sec);}).filter(function(s){return stockPass(s)&&sigF(s);}).sort(function(a,b){return score(b)-score(a);});
  document.getElementById('sectorDetail').innerHTML='<div class="sec-det"><div class="sd-hdr"><div style="display:flex;align-items:center;gap:8px"><span style="font-size:20px">'+sec.icon+'</span><div class="sd-t">'+name+'</div></div><button class="sd-cl" onclick="closeSectorDetail()">&#215; Close</button></div>'
    +'<div class="sig-fs">'+fBtns+'</div>'
    +(stocks.length?stocks.map(function(s){return ssRow(s,false);}).join(''):'<div class="empty" style="padding:1rem">No stocks match this filter</div>')
    +(gems.length?'<div class="sec-dv">&#11088; Hidden Gems in '+name+'</div>'+gems.map(function(g){return ssRow(g,true);}).join(''):'')
    +'</div>';
}

// ─── MODAL ────────────────────────────────────────────────────────────────────
function openSectorModal(sectorName){
  var sec=SECTORS[sectorName];if(!sec)return;
  document.getElementById('moT').textContent=sec.icon+' '+sectorName;
  document.getElementById('moS').textContent=sec.stocks.length+' stocks \u00b7 '+sec.gems.length+' hidden gems';
  document.getElementById('moB').innerHTML=sec.stocks.map(function(tk){return ssRow(getStockData(tk,sec),false);}).join('')
    +(sec.gems.length?'<div class="sec-dv">&#11088; Hidden Gems</div>'+sec.gems.map(function(tk){return ssRow(getStockData(tk,sec),true);}).join(''):'');
  document.getElementById('modalOv').classList.add('open');
}
function closeModal(){document.getElementById('modalOv').classList.remove('open');}
function maybeClose(e){if(e.target===document.getElementById('modalOv'))closeModal();}

// ─── SEARCH AUTOCOMPLETE ──────────────────────────────────────────────────────
var srchFocusIdx=-1;
function onSearchInput(inp){
  var val=(inp.value||'').trim();
  if(val.length<1){closeSearchDrop();return;}
  var upper=val.toUpperCase();
  var lower=val.toLowerCase();
  var results=SEARCH_DB.filter(function(s){
    if(s.t.startsWith(upper)) return true;
    var words=s.n.toLowerCase().split(' ');
    return words.some(function(w){return w.startsWith(lower);});
  }).slice(0,9);
  if(!results.length){closeSearchDrop();return;}
  var drop=document.getElementById('srchDrop');
  if(!drop) return;
  drop.innerHTML=results.map(function(s,i){
    var tHL=s.t.toUpperCase().startsWith(upper)?'<strong>'+s.t.slice(0,upper.length)+'</strong>'+s.t.slice(upper.length):s.t;
    var nHL=s.n;
    return '<div class="srch-item" data-idx="'+i+'" onclick="selectStock(\''+s.t+'\')" onmouseover="srchFocusIdx='+i+';updateFocus()">'
      +'<span class="srch-tk">'+tHL+'</span>'
      +'<span class="srch-nm">'+nHL+'</span>'
      +'<span class="srch-sc">'+s.s+'</span>'
      +'</div>';
  }).join('');
  drop.classList.add('open');
  srchFocusIdx=-1;
}
function onSearchKey(e){
  var drop=document.getElementById('srchDrop');
  if(!drop||!drop.classList.contains('open')){if(e.key==='Enter')searchStock();return;}
  var items=drop.querySelectorAll('.srch-item');
  if(e.key==='ArrowDown'){e.preventDefault();srchFocusIdx=Math.min(srchFocusIdx+1,items.length-1);updateFocus();}
  else if(e.key==='ArrowUp'){e.preventDefault();srchFocusIdx=Math.max(srchFocusIdx-1,-1);updateFocus();}
  else if(e.key==='Enter'){e.preventDefault();if(srchFocusIdx>=0&&items[srchFocusIdx]){items[srchFocusIdx].click();}else{closeSearchDrop();searchStock();}}
  else if(e.key==='Escape'){closeSearchDrop();}
}
function updateFocus(){
  var drop=document.getElementById('srchDrop');if(!drop) return;
  var items=drop.querySelectorAll('.srch-item');
  Array.prototype.forEach.call(items,function(it,i){
    it.classList.toggle('focused',i===srchFocusIdx);
    if(i===srchFocusIdx) it.scrollIntoView({block:'nearest'});
  });
}
function closeSearchDrop(){
  var drop=document.getElementById('srchDrop');
  if(drop){drop.classList.remove('open');drop.innerHTML='';}
  srchFocusIdx=-1;
}
function selectStock(ticker){
  var inp=document.getElementById('srchIn');if(inp) inp.value=ticker;
  closeSearchDrop();searchStock();
}
// close dropdown when clicking outside
document.addEventListener('click',function(e){if(!e.target.closest('.srch-wrap'))closeSearchDrop();});

// ─── SEARCH ───────────────────────────────────────────────────────────────────
function fmtCap(v){if(v>=1e12)return '$'+(v/1e12).toFixed(2)+'T';if(v>=1e9)return '$'+(v/1e9).toFixed(1)+'B';if(v>=1e6)return '$'+(v/1e6).toFixed(1)+'M';return '$'+v.toLocaleString();}
function searchStock(){
  var raw=((document.getElementById('srchIn')||{}).value||'').trim();
  var lower=raw.toLowerCase();
  // resolve company name to ticker
  var fromDB=SEARCH_DB.find(function(s){return s.n.toLowerCase()===lower||s.t.toLowerCase()===lower;});
  var ticker=(fromDB?fromDB.t:raw).toUpperCase();
  if(!ticker){showToast('Enter a company name or ticker symbol','err');return;}
  closeSearchDrop();
  out.innerHTML='<div class="spin"><div class="spn"></div><div class="spin-t">Looking up '+ticker+'...</div></div>';
  fetch(prx('https://query1.finance.yahoo.com/v7/finance/quote?symbols='+ticker)).then(function(r){return r.json();}).then(function(d){
    var q=(d&&d.quoteResponse&&d.quoteResponse.result||[])[0];
    if(!q||!q.regularMarketPrice){out.innerHTML='<div class="empty">No results for "'+ticker+'" -- check the symbol and try again</div>';return;}
    LIVE_PRICES[q.symbol]=q.regularMarketPrice;
    var dbStock=ALL_STOCKS.find(function(s){return s.ticker===q.symbol;});
    var price=q.regularMarketPrice||0;var chg=q.regularMarketChangePercent||0;var isUp=chg>=0;var bMode=MODE==='paper';
    var dbSection=dbStock?
      '<div style="margin-bottom:8px">'+convBadge(dbStock)+'</div><div class="sigs" style="margin:0 0 4px">'+sigChips(dbStock)+'</div>'+whosBuying(dbStock,false):
      '<div style="padding:10px 12px;background:var(--sf2);border-radius:10px;font-size:12px;color:var(--tx3);margin:8px 0">Not in our tracked database -- buy and research links available below.</div>';
    var buyBtns='<div style="display:flex;gap:8px;align-items:center;margin:14px 0;flex-wrap:wrap">'
      +'<button class="'+bCls()+'" onclick="buyStock(\''+q.symbol+'\',this)">Buy $'+ORDER_AMT+(bMode?' (P)':'')+'</button>'
      +'<button class="refresh-btn" style="margin:0" onclick="addToWL(\''+q.symbol+'\')">+ Watchlist</button>'
      +'<a href="https://finance.yahoo.com/news/?symbols='+q.symbol+'" target="_blank" class="nws">&#128240; News</a>'
      +'<a href="https://finviz.com/quote.ashx?t='+q.symbol+'" target="_blank" class="nws">Finviz</a>'
      +'</div>';
    out.innerHTML='<div class="card"><div class="tkr" style="font-size:26px;letter-spacing:-.5px">'+q.symbol+'</div>'
      +'<div class="co">'+(q.longName||q.shortName||q.symbol)+(q.exchangeName?' &nbsp;&middot;&nbsp; '+q.exchangeName:'')+'</div>'
      +'<div style="display:flex;align-items:baseline;gap:10px;margin-bottom:16px;flex-wrap:wrap"><span class="price">'+f$(price)+'</span><span style="font-size:16px;font-weight:700;color:'+(isUp?'#2e7d32':'#c62828')+'">'+(isUp?'+':'')+chg.toFixed(2)+'% today</span></div>'
      +'<div class="srch-st"><div class="astat"><div class="aval">'+(q.marketCap?fmtCap(q.marketCap):'--')+'</div><div class="albl">Market Cap</div></div>'
      +'<div class="astat"><div class="aval">'+(q.trailingPE?q.trailingPE.toFixed(1)+'x':'--')+'</div><div class="albl">Trailing P/E</div></div>'
      +'<div class="astat"><div class="aval">'+(q.fiftyTwoWeekHigh?f$(q.fiftyTwoWeekHigh):'--')+'</div><div class="albl">52W High</div></div>'
      +'<div class="astat"><div class="aval">'+(q.fiftyTwoWeekLow?f$(q.fiftyTwoWeekLow):'--')+'</div><div class="albl">52W Low</div></div></div>'
      +dbSection+buyBtns+bracketPanel(q.symbol)+articlesHTML(q.symbol)+'</div>';
  }).catch(function(e){out.innerHTML='<div class="empty">Search failed: '+(e.message||'Check your connection')+'</div>';});
}

// ─── PRICES + PICKS ───────────────────────────────────────────────────────────
var STEPS=['Fetching live prices...','Scoring all signals...','Running AI models...','Finalizing picks...'];
function fetchPrices(){
  return fetch(prx('https://query1.finance.yahoo.com/v7/finance/quote?symbols='+ALL_STOCKS.map(function(s){return s.ticker;}).join(','))).then(function(r){return r.json();}).then(function(d){
    (d&&d.quoteResponse&&d.quoteResponse.result||[]).forEach(function(q){var s=ALL_STOCKS.find(function(x){return x.ticker===q.symbol;});if(s&&q.regularMarketPrice){s.livePrice=q.regularMarketPrice;LIVE_PRICES[q.symbol]=q.regularMarketPrice;}});
    return true;
  }).catch(function(){return false;});
}
function getDailyPick(){
  var day=Math.floor(Date.now()/86400000);
  return DB.map(function(s,i){return Object.assign({},s,{score:s.polScore*0.55+s.conf*0.45+(day%(i+4)===0?6:0)});}).sort(function(a,b){return b.score-a.score;});
}
function renderPicks(sorted,live){
  var pick=sorted[0];var runners=sorted.slice(1,4);
  var p=pick.livePrice||pick.fb;var today=new Date().toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'});
  var allChips=(pick.pol||[]).map(function(x){return '<span class="chip">&#127963; '+x+'</span>';}).join('')+(pick.bil||[]).map(function(x){return '<span class="chip">&#128142; '+x+'</span>';}).join('');
  var liveTag=live&&pick.livePrice?'<span class="badge b-gray nc">Live price</span>':'<span class="badge b-gray nc">Est. price</span>';
  var bMode=MODE==='paper';
  var runnerHTML=runners.map(function(r){var rp=r.livePrice||r.fb;return '<div class="alt" onclick="openSectorModal(\''+r.sector+'\')"><div class="alt-t">'+r.ticker+'</div><div class="alt-co">'+r.company+'</div><div class="alt-p">'+f$(rp)+(live&&r.livePrice?'':' <span style="font-size:10px;color:var(--tx4)">est.</span>')+'</div><div class="alt-w">'+r.why.split('.')[0]+'.</div></div>';}).join('');
  var gemHTML=GEMS.map(function(g){
    var gp=g.livePrice||g.fb;
    return '<div class="gem"><div class="g-hdr"><div><div class="g-tk">'+g.ticker+'</div><div class="g-co">'+g.company+'</div>'
      +'<div class="g-bgs"><span class="badge '+g.tCls+'" onclick="openSectorModal(\''+g.sector+'\')">'+g.theme+' &#8599;</span><span class="badge b-gray nc">'+g.rating+'</span></div></div>'
      +'<div class="g-rt"><div class="g-pr">'+f$(gp)+(live&&g.livePrice?'':' <span style="font-size:10px;color:var(--tx4)">est.</span>')+'</div><div class="g-sh">$'+ORDER_AMT+' = '+((ORDER_AMT)/(gp)).toFixed(4)+' sh</div><div class="g-roi">'+pct(g.bear)+' to +'+g.bull+'%</div></div></div>'
      +'<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">'+convBadge(g)+'<a href="https://finance.yahoo.com/news/?symbols='+g.ticker+'" target="_blank" class="nws">&#128240; News</a></div>'
      +'<div class="sigs" style="margin-bottom:10px">'+sigChips(g)+'</div>'
      +whosBuying(g,true)
      +'<p class="g-why" style="margin-top:8px">'+g.why+'</p>'
      +'<div class="lbl">AI 12-month prediction</div>'
      +'<div class="scns"><div class="scn scn-bear"><div class="scn-nm">Bear</div><div class="scn-pct">'+pct(g.bear)+'</div><div class="scn-pb">'+g.bearP+'% likely</div><div class="pb-bg"><div class="pb" style="width:'+g.bearP+'%"></div></div></div>'
      +'<div class="scn scn-base"><div class="scn-nm">Base &#9733;</div><div class="scn-pct">'+pct(g.base)+'</div><div class="scn-pb">'+g.baseP+'% likely</div><div class="pb-bg"><div class="pb" style="width:'+g.baseP+'%"></div></div></div>'
      +'<div class="scn scn-bull"><div class="scn-nm">Bull</div><div class="scn-pct">+'+g.bull+'%</div><div class="scn-pb">'+g.bullP+'% likely</div><div class="pb-bg"><div class="pb" style="width:'+g.bullP+'%"></div></div></div></div>'
      +'<div class="cat">'+g.catalyst+'</div>'
      +'<button class="'+gCls()+'" onclick="buyStock(\''+g.ticker+'\',this)">Buy $'+ORDER_AMT+(bMode?' (Paper)':'')+'</button>'
      +bracketPanel(g.ticker)+'</div>';
  }).join('');
  document.getElementById('picksOut').innerHTML='<div class="dt-b">'+today+'</div>'
    +'<div class="card"><div class="tkr">'+pick.ticker+'</div><div class="co">'+pick.company+'</div>'
    +'<div class="badges"><span class="badge b-green nc">'+pick.rating+'</span><span class="badge b-blue nc">Top congressional buy</span><span class="badge '+pick.sCls+'" onclick="openSectorModal(\''+pick.sector+'\')">'+pick.sector+' &#8599;</span>'+liveTag+'</div>'
    +'<div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;flex-wrap:wrap">'+convBadge(pick)+'<a href="https://finance.yahoo.com/news/?symbols='+pick.ticker+'" target="_blank" class="nws">&#128240; News</a></div>'
    +'<div class="sigs" style="margin-bottom:12px">'+sigChips(pick)+'</div>'
    +'<div class="pr"><span class="price">'+f$(p)+'</span><span class="sh">$'+ORDER_AMT+' = '+((ORDER_AMT)/(p)).toFixed(4)+' shares</span>'
    +'<button class="'+bCls()+'" onclick="buyStock(\''+pick.ticker+'\',this)">Buy $'+ORDER_AMT+(bMode?' (Paper)':'')+'</button></div>'
    +bracketPanel(pick.ticker)
    +'<div class="lbl">Why this pick today</div><p class="why-t">'+pick.why+'</p>'
    +'<div class="lbl">Confidence score</div><div class="bar-bg"><div class="bar-fill" style="width:'+pick.conf+'%"></div></div>'
    +'<div class="cf-lbl"><span>Low</span><span style="font-weight:700;color:var(--tx)">'+pick.conf+'%</span><span>High</span></div>'
    +'<hr class="dvd">'
    +whosBuying(pick,false)
    +'<div class="lbl" style="margin-top:14px">Analyst consensus</div><p class="ctx">'+pick.anaCtx+'</p>'
    +articlesHTML(pick.ticker)+'</div>'
    +'<div class="lbl">Runner-up picks <span style="font-size:10px;color:var(--tx4)">-- click to explore that sector</span></div>'
    +'<div class="alt-grid">'+runnerHTML+'</div>'
    +'<div class="sh-hdr"><div class="sh-t">Hidden gem picks</div><div class="sh-s">Under-the-radar &middot; All 6 signal types &middot; AI predictions &middot; Click sector badge to see more</div></div>'
    +gemHTML;
}
function run(){
  var btn=document.getElementById('pickBtn');btn.disabled=true;btn.textContent='Researching...';
  var si=0;
  document.getElementById('picksOut').innerHTML='<div class="spin"><div class="spn"></div><div class="spin-t">Analyzing all signal sources</div><div class="spin-s" id="ss">'+STEPS[0]+'</div></div>';
  var t=setInterval(function(){si=(si+1)%STEPS.length;var el=document.getElementById('ss');if(el)el.textContent=STEPS[si];},1200);
  fetchPrices().then(function(live){
    clearInterval(t);renderPicks(getDailyPick(),live);
    btn.textContent='Refresh picks';btn.disabled=false;
  });
}

// Init
loadAB();
+ORDER_AMT+(MODE==='paper'?' (P)':'')+(sym?' of '+sym:'');}

// ─── STOCK DATA ───────────────────────────────────────────────────────────────
var DB=[
  {ticker:'GOOGL',company:'Alphabet Inc.',fb:319,conf:90,rating:'Strong Buy',polScore:95,sector:'AI & Technology',sCls:'b-blue',
   pol:['Nancy Pelosi','Rohit Khanna','Tony Wied'],bil:['Bill Ackman','Druckenmiller','David Tepper'],inst:['T. Rowe Price','Capital Group','State Street'],insider:['Sundar Pichai $10M buy'],options:['Unusual LEAPS Dec 2026'],retail:['Top r/stocks pick Q1 2026'],
   polCtx:'178 congressional purchases totaling $2.6M in the past year. Pelosi added call options in January 2026.',
   anaCtx:'44 analysts rate GOOGL Strong Buy, $354 target. Google Cloud backlog surged 55% in Q4 2025.',
   why:'Congress\'s most-purchased stock over 12 months. Pelosi added options Jan 2026. 44 analysts at Strong Buy, $354 target.'},
  {ticker:'NVDA',company:'Nvidia Corporation',fb:187,conf:88,rating:'Strong Buy',polScore:92,sector:'AI & Technology',sCls:'b-blue',
   pol:['Nancy Pelosi','Terri Sewell','M.T. Greene'],bil:['Cathie Wood','Druckenmiller','Laffont'],inst:['Vanguard','Fidelity','BlackRock'],insider:['Jensen Huang open-market buys'],options:['Massive call sweeps $250 strike'],retail:['WSB #1 for 12 weeks'],
   polCtx:'#1 most-bought stock by Congress in 2025. Sewell\'s purchase alone fueled a 67.9% annual return.',
   anaCtx:'43 analysts Strong Buy with $273 avg target, 46% upside. Cantor named it top 2026 pick.',
   why:'Congress\'s most-purchased stock of 2025 across both parties. 43 analysts Strong Buy, 46% upside implied.'},
  {ticker:'LMT',company:'Lockheed Martin',fb:490,conf:82,rating:'Strong Buy',polScore:80,sector:'Defense & Military',sCls:'b-gray',
   pol:['Armed Services Committee','Mike Rogers'],bil:['Citadel','Two Sigma'],inst:['Vanguard','State Street','Fidelity'],insider:['Jim Taiclet CEO buys'],options:['LEAPS accumulation'],retail:['Dividend defense crowd'],
   polCtx:'Armed Services Committee buys LMT consistently -- they oversee the budget funding Lockheed contracts.',
   anaCtx:'Strong Buy consensus. F-35 + hypersonic programs provide decade-long revenue visibility.',
   why:'Armed Services Committee buys LMT -- they oversee the very budget funding Lockheed. NATO rearmament adds a decade of backlog.'},
  {ticker:'LLY',company:'Eli Lilly',fb:810,conf:85,rating:'Strong Buy',polScore:75,sector:'Healthcare & Biotech',sCls:'b-teal',
   pol:['Health Committee members'],bil:['Baillie Gifford','Capital Group'],inst:['T. Rowe Price','Wellington','Fidelity'],insider:['David Ricks CEO buying'],options:['Massive LEAPS accumulation'],retail:['Top health sector pick'],
   polCtx:'Health Committee members buying ahead of GLP-1 regulatory tailwinds.',
   anaCtx:'Highest conviction Strong Buy. Mounjaro + Zepbound are the fastest-growing pharma launches in history.',
   why:'Eli Lilly owns the GLP-1 revolution. Health Committee buying ahead of favorable legislation.'},
  {ticker:'VST',company:'Vistra Corp',fb:145,conf:78,rating:'Strong Buy',polScore:73,sector:'Energy & Clean Tech',sCls:'b-green',
   pol:['Nancy Pelosi','Energy Committee'],bil:['Baupost Group','Citadel'],inst:['D1 Capital','Fidelity'],insider:['Jim Burke CEO buying'],options:['Large call sweep Q4 2025'],retail:['AI energy trade'],
   polCtx:'Pelosi added Vistra in January 2026 alongside GOOGL and NVDA. Energy Committee sees AI power shortage.',
   anaCtx:'Multiple analyst upgrades on AI energy demand thesis. Goldman calls power "the trade of 2026".',
   why:'Pelosi January 2026 pick. AI data centers need enormous power -- Vistra provides it.'},
  {ticker:'PLTR',company:'Palantir',fb:96,conf:74,rating:'Moderate Buy',polScore:68,sector:'AI & Technology',sCls:'b-blue',
   pol:['Homeland Security Committee'],bil:['Cathie Wood','Peter Thiel (founder)'],inst:['ARK Invest','Baillie Gifford'],insider:['Alex Karp CEO buying'],options:['High OI $100+ calls'],retail:['Cult Reddit following'],
   polCtx:'Homeland Security Committee bought PLTR -- the committee that oversees Palantir\'s government contracts.',
   anaCtx:'Mixed analyst consensus but AIP government pipeline is a strong tailwind.',
   why:'Homeland Security Committee bought PLTR in 2025 -- the most specific insider signal on this list.'},
];
var GEMS=[
  {ticker:'VRT',company:'Vertiv Holdings',theme:'AI Infrastructure',tCls:'b-blue',sector:'Energy & Clean Tech',fb:98,conf:86,rating:'Strong Buy',bear:15,base:52,bull:95,bearP:20,baseP:55,bullP:25,
   pol:['Energy Committee'],bil:['GQG Partners','Citadel'],inst:['T. Rowe Price','Fidelity'],insider:['CEO Albertazzi buying'],options:['Heavy call accumulation'],retail:['AI infra community'],
   why:'Powers AI data center cooling. Every $1 on AI chips needs $1 in Vertiv equipment.',
   catalyst:'Catalysts: Data center capex supercycle, hyperscaler supply agreements. Risk: Supply chain delays.'},
  {ticker:'AXON',company:'Axon Enterprise',theme:'GovTech / AI',tCls:'b-purple',sector:'Defense & Military',fb:680,conf:82,rating:'Strong Buy',bear:10,base:38,bull:72,bearP:15,baseP:60,bullP:25,
   pol:['Homeland Security Committee'],bil:['Cathie Wood','Baillie Gifford'],inst:['T. Rowe Price','Coatue'],insider:['Rick Smith founder buying'],options:['Large call sweep Q1 2026'],retail:['High social sentiment'],
   why:'Taser + body cam + AI report writing. Draft One creates sticky per-officer recurring revenue.',
   catalyst:'Catalysts: Draft One adoption, international expansion. Risk: Budget cuts.'},
  {ticker:'APP',company:'AppLovin Corp.',theme:'AI Ad Tech',tCls:'b-orange',sector:'AI & Technology',fb:285,conf:84,rating:'Strong Buy',bear:-10,base:45,bull:110,bearP:25,baseP:50,bullP:25,
   pol:['Multiple Congress members'],bil:['Cathie Wood','Millennium'],inst:['Coatue','Tiger Global'],insider:['Adam Foroughi large buy'],options:['Aggressive call sweeps'],retail:['Viral fintech community'],
   why:'AXON 2.0 AI ad model drove 75%+ revenue growth in 2025. Most underappreciated large-cap on the market.',
   catalyst:'Catalysts: AXON 2.0, e-commerce expansion. Risk: Google/Meta competition.'},
  {ticker:'HIMS',company:'Hims & Hers Health',theme:'Telehealth',tCls:'b-teal',sector:'Healthcare & Biotech',fb:18,conf:76,rating:'Moderate Buy',bear:-20,base:55,bull:130,bearP:30,baseP:45,bullP:25,
   pol:['Multiple Congress members'],bil:['General Atlantic','Foresite'],inst:['Coatue','D1 Capital'],insider:['CEO Dudum buying'],options:['Aggressive call sweeps'],retail:['#1 telehealth Reddit'],
   why:'Telehealth for GLP-1, hair loss, mental health. Direct-to-consumer bypasses pharmacy markups.',
   catalyst:'Catalysts: GLP-1 expansion, subscriber growth. Risk: FDA crackdowns.'},
  {ticker:'ASTS',company:'AST SpaceMobile',theme:'Space Tech',tCls:'b-purple',sector:'Space & Aerospace',fb:28,conf:68,rating:'Speculative Buy',bear:-40,base:80,bull:220,bearP:35,baseP:40,bullP:25,
   pol:['Commerce Committee','Ted Cruz'],bil:['a16z','Google (strategic)'],inst:['ARK','Baillie Gifford'],insider:['Abel Avellan large buy'],options:['Aggressive speculative calls'],retail:['Space community #1'],
   why:'Space-based cellular for standard phones. AT&T, Verizon, Vodafone already partners.',
   catalyst:'Catalysts: Satellite launches, carrier activations. Risk: Launch failures.'},
  {ticker:'IONQ',company:'IonQ Inc.',theme:'Quantum Computing',tCls:'b-purple',sector:'Space & Aerospace',fb:32,conf:66,rating:'Speculative Buy',bear:-35,base:65,bull:185,bearP:40,baseP:38,bullP:22,
   pol:['Science Committee/DARPA'],bil:['Amazon (strategic)','Samsung'],inst:['ARK Invest','Coatue'],insider:['Peter Chapman CEO buying'],options:['Speculative long-dated calls'],retail:['Quantum community'],
   why:'Only pure-play quantum computing on NYSE with DARPA and Air Force contracts.',
   catalyst:'Catalysts: Government contract wins, qubit milestones. Risk: Timeline risk.'},
];
var ALL_STOCKS=DB.concat(GEMS);

var SOURCES={
  GOOGL:[{t:'Congress GOOGL trading -- 178 buys tracked',u:'https://www.quiverquant.com/congresstrading/stock/GOOGL',o:'QuiverQuant'},{t:'Alphabet analyst ratings & $354 price target',u:'https://www.tipranks.com/stocks/googl/forecast',o:'TipRanks'},{t:'Google Cloud AI surge & Q4 2025 earnings',u:'https://finance.yahoo.com/news/?symbols=GOOGL',o:'Yahoo Finance'},{t:'GOOGL fundamentals & short interest',u:'https://finviz.com/quote.ashx?t=GOOGL',o:'Finviz'}],
  NVDA:[{t:'Congress NVDA trades -- #1 bought stock 2025',u:'https://www.quiverquant.com/congresstrading/stock/NVDA',o:'QuiverQuant'},{t:'Nvidia 43 Strong Buy ratings, $273 avg target',u:'https://www.tipranks.com/stocks/nvda/forecast',o:'TipRanks'},{t:'Nvidia Blackwell demand & Rubin 2026 outlook',u:'https://finance.yahoo.com/news/?symbols=NVDA',o:'Yahoo Finance'},{t:'NVDA institutional ownership & chart',u:'https://finviz.com/quote.ashx?t=NVDA',o:'Finviz'}],
  LMT:[{t:'Armed Services Committee LMT purchases',u:'https://www.quiverquant.com/congresstrading/stock/LMT',o:'QuiverQuant'},{t:'Lockheed Martin analyst ratings & defense outlook',u:'https://www.tipranks.com/stocks/lmt/forecast',o:'TipRanks'},{t:'F-35, hypersonic & NATO rearmament news',u:'https://finance.yahoo.com/news/?symbols=LMT',o:'Yahoo Finance'},{t:'LMT stock data & institutional ownership',u:'https://finviz.com/quote.ashx?t=LMT',o:'Finviz'}],
  LLY:[{t:'Congress LLY trades -- Health Committee buys',u:'https://www.quiverquant.com/congresstrading/stock/LLY',o:'QuiverQuant'},{t:'Eli Lilly GLP-1 analyst ratings & targets',u:'https://www.tipranks.com/stocks/lly/forecast',o:'TipRanks'},{t:'Mounjaro, Zepbound & GLP-1 pipeline news',u:'https://finance.yahoo.com/news/?symbols=LLY',o:'Yahoo Finance'},{t:'LLY institutional ownership & fundamentals',u:'https://finviz.com/quote.ashx?t=LLY',o:'Finviz'}],
  VST:[{t:'Pelosi & Energy Committee VST purchases',u:'https://www.quiverquant.com/congresstrading/stock/VST',o:'QuiverQuant'},{t:'Vistra analyst ratings -- AI electricity thesis',u:'https://www.tipranks.com/stocks/vst/forecast',o:'TipRanks'},{t:'AI data center power demand & nuclear news',u:'https://finance.yahoo.com/news/?symbols=VST',o:'Yahoo Finance'},{t:'VST stock data & institutional ownership',u:'https://finviz.com/quote.ashx?t=VST',o:'Finviz'}],
  PLTR:[{t:'Congress PLTR trades -- Homeland Security buys',u:'https://www.quiverquant.com/congresstrading/stock/PLTR',o:'QuiverQuant'},{t:'Palantir analyst ratings -- AIP pipeline',u:'https://www.tipranks.com/stocks/pltr/forecast',o:'TipRanks'},{t:'Palantir government AI contracts news',u:'https://finance.yahoo.com/news/?symbols=PLTR',o:'Yahoo Finance'},{t:'PLTR institutional ownership & short interest',u:'https://finviz.com/quote.ashx?t=PLTR',o:'Finviz'}],
};

// Sector definitions -- just ticker arrays
var SECTORS={
  'AI & Technology':{icon:'&#129302;',cls:'b-blue',
    stocks:['NVDA','GOOGL','META','MSFT','APP','PLTR'],
    gems:['SOUN','BBAI','IREN'],
    stockData:{META:{company:'Meta Platforms',rating:'Strong Buy',bear:3,base:28,bull:65,pol:['Multiple Congress'],bil:['Dan Loeb','Tepper'],inst:['Fidelity','Vanguard'],insider:['Zuckerberg buys'],options:['Record call volume'],retail:['High sentiment'],why:'AI-supercharged ad engine. Congress bought heavily during TikTok legislation.'},
    MSFT:{company:'Microsoft',rating:'Strong Buy',bear:5,base:20,bull:42,pol:['Multiple Congress'],bil:['Warren Buffett','Ackman'],inst:['Vanguard','BlackRock'],insider:['Nadella buys'],options:['LEAPS accumulation'],retail:['AI exposure fav'],why:'Most bipartisan congressional stock. Azure AI + Copilot compounding revenue.'},
    SOUN:{company:'SoundHound AI',rating:'Speculative Buy',bear:-45,base:70,bull:200,pol:['Tech Committee'],bil:['NVIDIA (strategic)'],inst:['ARK Invest'],insider:['CEO Mohajer buying'],options:['Unusual call flow'],retail:['High Reddit buzz'],why:'AI voice platform. Nvidia strategic investor. Auto, food, IoT deploying. Tiny float = big upside.',isGem:true},
    BBAI:{company:'BigBear.ai',rating:'Speculative Buy',bear:-40,base:80,bull:190,pol:['Intelligence Committee'],bil:['Palantir ecosystem'],inst:['Renaissance'],insider:['CEO Long buying'],options:['Call sweep'],retail:['Defense AI'],why:'AI analytics for defense/intelligence. Classified government contracts. Intel Committee interest is rare.',isGem:true},
    IREN:{company:'Iris Energy',rating:'Speculative Buy',bear:-35,base:65,bull:175,pol:['Energy/Tech'],bil:['Cathie Wood'],inst:['ARK Invest'],insider:['CEO Roberts buying'],options:['BTC-correlated'],retail:['Crypto-AI cross'],why:'Bitcoin mining pivoting to AI GPU compute. Owns power + cooling AI firms desperately need.',isGem:true}}},
  'Defense & Military':{icon:'&#128737;',cls:'b-gray',
    stocks:['LMT','RTX','NOC','GD','AXON','CACI'],
    gems:['KTOS','RCAT','LDOS'],
    stockData:{RTX:{company:'RTX (Raytheon)',rating:'Strong Buy',bear:3,base:22,bull:45,pol:['Armed Services Cmte','Multiple senators'],bil:['ValueAct','Citadel'],inst:['T.Rowe','Capital Group'],insider:['Hayes buys'],options:['LEAPS accumulation'],retail:['Defense dividend'],why:'Patriot missile demand at record highs. Pratt & Whitney jet engine backlog spans a decade.'},
    NOC:{company:'Northrop Grumman',rating:'Strong Buy',bear:4,base:19,bull:40,pol:['Armed Services Committee'],bil:['Duquesne','Citadel'],inst:['BlackRock','Vanguard'],insider:['Warden buying'],options:['Long-dated calls'],retail:['Defense income'],why:'B-21 Raider stealth bomber. Nuclear defense programs locked in for decades.'},
    GD:{company:'General Dynamics',rating:'Strong Buy',bear:3,base:17,bull:35,pol:['Armed Services','Wicker'],bil:['Citadel','Two Sigma'],inst:['Vanguard','State St'],insider:['Novakovic buying'],options:['Steady accumul.'],retail:['Dividend growth'],why:'Gulfstream jets + Abrams tanks + nuclear submarines. Recession-proof government revenue.'},
    CACI:{company:'CACI International',rating:'Moderate Buy',bear:5,base:20,bull:42,pol:['Intelligence Committee'],bil:['Royce Investment'],inst:['Fidelity','Wellington'],insider:['Mengucci buying'],options:['Moderate calls'],retail:['Defense tech niche'],why:'Intelligence agency IT + cyber defense. Rare Intel Committee buying is historically significant.'},
    KTOS:{company:'Kratos Defense',rating:'Moderate Buy',bear:-10,base:35,bull:85,pol:['Armed Services Cmte'],bil:['Dragoneer'],inst:['Fidelity','BlackRock'],insider:['DeMarco buying'],options:['Call sweep'],retail:['Drone community'],why:'Affordable attritable drones. Ukraine proved drone warfare is the norm -- Kratos builds what Pentagon needs.',isGem:true},
    RCAT:{company:'Red Cat Holdings',rating:'Speculative Buy',bear:-40,base:90,bull:250,pol:['Armed Services Cmte'],bil:['Defense funds'],inst:['Small-cap defense'],insider:['Thompson CEO buying'],options:['Unusual volume'],retail:['Defense drone Reddit'],why:'US Army Black Widow drones. Sole-source contracts. $400M market cap vs massive drone TAM.',isGem:true},
    LDOS:{company:'Leidos Holdings',rating:'Strong Buy',bear:3,base:18,bull:38,pol:['Armed Services/Intel'],bil:['Citadel','Two Sigma'],inst:['Vanguard','T.Rowe'],insider:['Bell CEO buying'],options:['Institutional flow'],retail:['Dividend defense'],why:'Defense IT and intelligence giant. $15B+ revenue with consistent DoD contracts -- under the radar.',isGem:true}}},
  'Healthcare & Biotech':{icon:'&#127973;',cls:'b-teal',
    stocks:['LLY','ISRG','HIMS','MRNA','UNH','RXRX'],
    gems:['EXAS','NTRA','TMDX'],
    stockData:{ISRG:{company:'Intuitive Surgical',rating:'Strong Buy',bear:5,base:22,bull:48,pol:['Health Committee'],bil:['Baillie Gifford','Fisher'],inst:['Capital Group','T.Rowe'],insider:['Guthart buying'],options:['Long-dated calls'],retail:['MedTech community'],why:'da Vinci robot surgery monopoly. 9000+ systems = razor-and-blade recurring revenue.'},
    MRNA:{company:'Moderna',rating:'Moderate Buy',bear:-15,base:35,bull:90,pol:['Health Committee'],bil:['Baillie Gifford','ARK'],inst:['Fidelity','State St'],insider:['Bancel buying'],options:['Speculative accum.'],retail:['Biotech Reddit'],why:'mRNA platform beyond COVID -- cancer vaccines in Phase 3. Biggest potential in biotech.'},
    UNH:{company:'UnitedHealth',rating:'Strong Buy',bear:3,base:15,bull:30,pol:['Multiple Congress'],bil:['T.Rowe','Capital Group'],inst:['Vanguard','BlackRock'],insider:['Witty buying'],options:['Steady LEAPS'],retail:['Dividend crowd'],why:'Largest US health insurer + Optum data. Stable healthcare infrastructure pick across Congress.'},
    RXRX:{company:'Recursion Pharma',rating:'Speculative Buy',bear:-30,base:60,bull:160,pol:['Tech/Health crossover'],bil:['Nvidia (strategic $50M)'],inst:['Baillie Gifford','ARK'],insider:['Gibson CEO buying'],options:['Speculative calls'],retail:['AI-biotech cross'],why:'AI drug discovery with $50M Nvidia investment. Foundation models find candidates 10x faster.'},
    EXAS:{company:'Exact Sciences',rating:'Moderate Buy',bear:-15,base:45,bull:95,pol:['Health Committee'],bil:['Baillie Gifford','T.Rowe'],inst:['Fidelity','Wellington'],insider:['Conroy buying'],options:['Steady accumul.'],retail:['Cancer screening'],why:'Cologuard non-invasive colon cancer test becoming standard of care. 4M+ tests/year.',isGem:true},
    NTRA:{company:'Natera',rating:'Moderate Buy',bear:-10,base:50,bull:110,pol:['Health/Science Cmte'],bil:['Baillie Gifford','Coatue'],inst:['T.Rowe','Fidelity'],insider:['Chapman buying'],options:['Growing calls'],retail:['Genetic testing'],why:'Cell-free DNA for prenatal and cancer detection. Signatera cancer recurrence monitoring rapidly adopted.',isGem:true},
    TMDX:{company:'TransMedics Group',rating:'Speculative Buy',bear:-20,base:65,bull:155,pol:['Health Committee'],bil:['Coatue Management'],inst:['ARK Invest','Fidelity'],insider:['Hassanein CEO buying'],options:['Unusual small-cap'],retail:['MedTech community'],why:'Organ Care System keeps transplant organs alive 3x longer. Growing logistics network is a deep moat.',isGem:true}}},
  'Energy & Clean Tech':{icon:'&#9889;',cls:'b-green',
    stocks:['VRT','VST','CEG','FSLR','OXY','ENPH'],
    gems:['SMR','ARRY','OKLO'],
    stockData:{CEG:{company:'Constellation Energy',rating:'Strong Buy',bear:8,base:35,bull:70,pol:['Energy Committee','Multiple senators'],bil:['Baupost Group','D1'],inst:['Fidelity','BlackRock'],insider:['Dominguez buying'],options:['Long-dated calls'],retail:['Nuclear energy'],why:'Largest US nuclear fleet. Microsoft signed 20-year power deal. AI electricity demand makes nuclear essential.'},
    FSLR:{company:'First Solar',rating:'Strong Buy',bear:-5,base:28,bull:65,pol:['Energy/climate members'],bil:['Cathie Wood','Invesco'],inst:['State St','Fidelity'],insider:['Widmar buying'],options:['Call sweep tariff news'],retail:['Clean energy crowd'],why:'Only major US-manufactured solar panel company. IRA + anti-China tariffs give structural domestic moat.'},
    OXY:{company:'Occidental Petroleum',rating:'Moderate Buy',bear:-10,base:20,bull:45,pol:['Energy/Texas delegation'],bil:['Warren Buffett (35%+)','Carl Icahn'],inst:['Vanguard','BlackRock'],insider:['Hollub CEO buying'],options:['Steady call flow'],retail:['Buffett tracker'],why:'Warren Buffett biggest recent bet. Direct air carbon capture + Permian Basin. Only fossil fuel Buffett added to recently.'},
    ENPH:{company:'Enphase Energy',rating:'Moderate Buy',bear:-15,base:30,bull:80,pol:['Energy Committee'],bil:['Cathie Wood','Coatue'],inst:['ARK Invest','Baillie G.'],insider:['Kothandaraman buying'],options:['Speculative accum.'],retail:['Solar community'],why:'Residential solar microinverter leader. Battery storage + EV charging = OS of the home energy stack.'},
    SMR:{company:'NuScale Power',rating:'Speculative Buy',bear:-50,base:85,bull:300,pol:['Energy Cmte/nuclear'],bil:['Emerging nuclear funds'],inst:['ARK Invest'],insider:['Hopkins CEO buying'],options:['Speculative calls'],retail:['Nuclear renaissance'],why:'Small Modular Reactor technology, first NRC-approved SMR. Ground floor of a new energy era.',isGem:true},
    ARRY:{company:'Array Technologies',rating:'Moderate Buy',bear:-10,base:40,bull:90,pol:['Energy Committee'],bil:['Invesco','Energy funds'],inst:['Fidelity','State St'],insider:['Hostetler buying'],options:['Moderate accumul.'],retail:['Utility-scale solar'],why:'Solar tracking systems increase output 25%. IRA domestic content bonus gives structural advantage.',isGem:true},
    OKLO:{company:'Oklo Inc.',rating:'Speculative Buy',bear:-50,base:90,bull:280,pol:['Energy Committee'],bil:['Sam Altman (chairman)','Peter Thiel'],inst:['ARK Invest'],insider:['DeWitte CEO buying'],options:['Early-stage speculative'],retail:['Nuclear/AI energy'],why:'Sam Altman\'s nuclear startup targeting AI data center power. Altman + nuclear + AI electricity is a once-in-a-decade setup.',isGem:true}}},
  'Space & Aerospace':{icon:'&#128640;',cls:'b-purple',
    stocks:['ASTS','RKLB','IONQ','HII','KTOS','LUNR'],
    gems:['IRDM','SPIR','BKSY'],
    stockData:{RKLB:{company:'Rocket Lab',rating:'Moderate Buy',bear:-25,base:55,bull:130,pol:['Armed Services members'],bil:['Peter Thiel (Founders Fund)','Baillie G.'],inst:['ARK','Fidelity'],insider:['Beck CEO buying'],options:['Call accumulation'],retail:['Space community'],why:'SpaceX most credible small-launch competitor. Neutron rocket in development. Defense contracts provide base.'},
    HII:{company:'Huntington Ingalls',rating:'Strong Buy',bear:3,base:15,bull:32,pol:['Armed Services/VA delegations'],bil:['Citadel','Renaissance'],inst:['Vanguard','BlackRock'],insider:['Kastner CEO buying'],options:['Steady defense flow'],retail:['Defense income'],why:'Only builder of US nuclear aircraft carriers and submarines. Sole-source contracts for 15+ years.'},
    LUNR:{company:'Intuitive Machines',rating:'Speculative Buy',bear:-45,base:70,bull:200,pol:['Science/Space Committee'],bil:['ARK Invest (Cathie Wood)'],inst:['ARK','Space funds'],insider:['Altemus CEO buying'],options:['Volatile speculative'],retail:['Lunar believers'],why:'NASA Commercial Lunar Program prime contractor. Put a lander on the moon in 2024.'},
    IRDM:{company:'Iridium Communications',rating:'Moderate Buy',bear:5,base:25,bull:55,pol:['Commerce/Defense Cmte'],bil:['Silverpoint Capital'],inst:['Vanguard','Fidelity'],insider:['Desch CEO buying'],options:['Steady call interest'],retail:['Satellite niche'],why:'Only truly global satellite phone network -- works everywhere. Government + maritime = ultra-stable revenue.',isGem:true},
    SPIR:{company:'Spire Global',rating:'Speculative Buy',bear:-35,base:75,bull:180,pol:['Commerce/Science Cmte'],bil:['Emerging space funds'],inst:['ARK Invest'],insider:['Platzer CEO buying'],options:['Low vol speculative'],retail:['Space data community'],why:'Space-based data-as-a-service -- weather, maritime, radio occultation. Recurring satellite intelligence subscriptions.',isGem:true},
    BKSY:{company:'BlackSky Technology',rating:'Speculative Buy',bear:-40,base:80,bull:200,pol:['Intelligence/Armed Services'],bil:['Defense-space funds'],inst:['Small-cap defense'],insider:['O\'Toole CEO buying'],options:['Low vol speculative'],retail:['Space defense niche'],why:'Real-time Earth observation satellites feeding AI analytics to defense/intelligence agencies.',isGem:true}}},
  'Financial Services':{icon:'&#127974;',cls:'b-amber',
    stocks:['V','GS','BRK.B','COIN','HOOD','SOFI'],
    gems:['AFRM','NU','OPFI'],
    stockData:{V:{company:'Visa',rating:'Strong Buy',bear:4,base:16,bull:32,pol:['Finance Committee'],bil:['Warren Buffett','Baillie G.'],inst:['Vanguard','BlackRock','T.Rowe'],insider:['McInerney buying'],options:['Steady LEAPS'],retail:['Dividend compounders'],why:'Digital payments toll booth. As cash disappears, Visa grows without credit risk.'},
    GS:{company:'Goldman Sachs',rating:'Strong Buy',bear:5,base:20,bull:42,pol:['Finance/Banking Cmte'],bil:['Solomon (insider)','Citadel'],inst:['Wellington','Fidelity'],insider:['Solomon buying'],options:['M&A revival calls'],retail:['Finance crowd'],why:'M&A + trading + asset management. IPO revival + PE deal flow = all three businesses accelerating.'},
    'BRK.B':{company:'Berkshire Hathaway',rating:'Strong Buy',bear:3,base:14,bull:28,pol:['Finance Committee'],bil:['Warren Buffett (CEO)'],inst:['Vanguard','State St'],insider:['Buffett buying'],options:['Conservative LEAPS'],retail:['Value investors'],why:'Own what Buffett owns. Insurance float + BNSF + Apple stake. Near-zero downside since 1965.'},
    COIN:{company:'Coinbase',rating:'Moderate Buy',bear:-20,base:40,bull:120,pol:['Crypto-friendly members'],bil:['Andreessen Horowitz','Cathie Wood'],inst:['ARK Invest','Fidelity'],insider:['Armstrong buying'],options:['High call OI'],retail:['Crypto community'],why:'Regulatory clarity is a massive tailwind. Only regulated US crypto exchange -- captures institutional on-ramp.'},
    HOOD:{company:'Robinhood',rating:'Moderate Buy',bear:-15,base:38,bull:95,pol:['Multiple Congress'],bil:['Andreessen Horowitz'],inst:['ARK Invest','Coatue'],insider:['Tenev CEO buying'],options:['Retail-driven calls'],retail:['Retail trading #1'],why:'Retail trading boom + crypto + Gold subscriptions. Millennial runway as the generation builds wealth.'},
    SOFI:{company:'SoFi Technologies',rating:'Moderate Buy',bear:-15,base:45,bull:100,pol:['Finance Committee'],bil:['SoftBank (major holder)','ARK'],inst:['Fidelity','Coatue'],insider:['Noto buying'],options:['Steady accumulation'],retail:['Fintech community'],why:'Digital bank with loans, investing, credit cards. Bank charter gives cheap deposit funding competitors lack.'},
    AFRM:{company:'Affirm Holdings',rating:'Moderate Buy',bear:-20,base:50,bull:120,pol:['Finance Committee'],bil:['Andreessen Horowitz','Coatue'],inst:['ARK Invest','D1'],insider:['Levchin CEO buying'],options:['Aggressive sweeps'],retail:['BNPL community'],why:'Honest BNPL no hidden fees. Shopify + Amazon checkout scale. Debit+ card becoming full banking product.',isGem:true},
    NU:{company:'Nu Holdings',rating:'Strong Buy',bear:5,base:35,bull:80,pol:['Latin America trade'],bil:['Warren Buffett (Berkshire)','Sequoia'],inst:['T.Rowe','Baillie G.'],insider:['Velez CEO buying'],options:['Growing institutional'],retail:['Emerging market fintech'],why:'Largest digital bank by customers (100M+). Dominates Brazil, Mexico, Colombia. Buffett holds stake.',isGem:true},
    OPFI:{company:'OppFi',rating:'Speculative Buy',bear:-15,base:55,bull:130,pol:['Finance Committee'],bil:['Emerging fintech funds'],inst:['Small-cap fintech'],insider:['Schwartz CEO buying'],options:['Speculative calls'],retail:['Under-radar fintech'],why:'AI lending for 60M Americans locked out of traditional banks. 90%+ approval with alternative data.',isGem:true}}}
};
var EARNINGS={NVDA:'2026-05-28',GOOGL:'2026-04-29',META:'2026-04-30',MSFT:'2026-04-30',AMZN:'2026-05-01',LLY:'2026-04-30',LMT:'2026-04-22',RTX:'2026-04-23',PLTR:'2026-05-05',APP:'2026-05-07',VRT:'2026-04-23',VST:'2026-05-06',COIN:'2026-05-08',HOOD:'2026-05-07',HIMS:'2026-05-07',ASTS:'2026-05-08',IONQ:'2026-05-08',AXON:'2026-05-08',OXY:'2026-05-05',RKLB:'2026-05-12',CEG:'2026-05-07',FSLR:'2026-04-29',GS:'2026-04-14',V:'2026-04-22'};

// ─── ALPACA ───────────────────────────────────────────────────────────────────
function connectAlpaca(){
  var btn=document.getElementById('conBtn');
  btn.textContent='Connecting...';btn.disabled=true;
  document.getElementById('sDot').className='dot';
  document.getElementById('sTxt').textContent='Connecting...';
  alpaca('/v2/account').then(function(r){return r.text();}).then(function(raw){
    var d;try{d=JSON.parse(raw);}catch(e){throw new Error('Bad response -- check keys');}
    if(!d.status) throw new Error((d.message||'Auth failed'));
    CONNECTED=true;
    document.getElementById('sDot').className='dot on';
    document.getElementById('sTxt').textContent=MODE==='paper'?'Paper connected':'Live connected';
    document.getElementById('aBP').textContent=f$(d.buying_power);
    document.getElementById('aPV').textContent=f$(d.portfolio_value);
    var pl=parseFloat(d.equity||d.portfolio_value||0)-parseFloat(d.last_equity||d.portfolio_value||0);
    var plPct=parseFloat(d.last_equity||1)>0?(pl/parseFloat(d.last_equity)*100):0;
    var plEl=document.getElementById('aPL');plEl.textContent=(pl>=0?'+':'')+pl.toFixed(2);plEl.style.color=pl>=0?'#2e7d32':'#c62828';
    var dEl=document.getElementById('aDPL');dEl.textContent=fPct(plPct);dEl.style.color=pl>=0?'#2e7d32':'#c62828';
    document.getElementById('acctStats').style.display='grid';
    document.getElementById('brokerHint').innerHTML='<span style="color:#2e7d32;font-weight:600">Connected to Alpaca '+(MODE==='paper'?'Paper':'Live')+'</span> -- buy buttons now active';
    showToast('Connected to Alpaca '+(MODE==='paper'?'Paper':'Live')+'!','ok');
    loadAB();startAlertChecker();
  }).catch(function(e){
    CONNECTED=false;
    document.getElementById('sDot').className='dot err';
    document.getElementById('sTxt').textContent='Failed';
    document.getElementById('brokerHint').innerHTML='<span style="color:#c62828;font-weight:600">Error: '+e.message+'</span><br>Paper keys start with PK. Check both fields are correct.';
    showToast('Connection failed','err');
  }).finally(function(){btn.textContent='Connect Account';btn.disabled=false;});
}

function buyStock(sym,btnEl,slPct,tpPct){
  slPct=slPct||0;tpPct=tpPct||0;
  if(!CONNECTED){showToast('Connect your Alpaca account first','err');return;}
  var orig=btnEl.textContent;btnEl.disabled=true;btnEl.textContent='Placing...';
  var body;
  if(slPct>0||tpPct>0){
    var price=LIVE_PRICES[sym]||(ALL_STOCKS.find(function(s){return s.ticker===sym;})||{}).fb||100;
    var qty=(ORDER_AMT/price).toFixed(6);
    body={symbol:sym,qty:qty,side:'buy',type:'market',time_in_force:'gtc',order_class:'bracket'};
    if(slPct>0) body.stop_loss={stop_price:(price*(1-slPct/100)).toFixed(2)};
    if(tpPct>0) body.take_profit={limit_price:(price*(1+tpPct/100)).toFixed(2)};
  } else {
    body={symbol:sym,notional:ORDER_AMT.toFixed(2),side:'buy',type:'market',time_in_force:'day'};
  }
  alpaca('/v2/orders',{method:'POST',body:JSON.stringify(body)}).then(function(r){return r.json();}).then(function(d){
    if(d.code||!d.id) throw new Error(d.message||'Order rejected');
    showToast('$'+ORDER_AMT+' of '+sym+' ordered!'+(MODE==='paper'?' (paper)':''),'ok');
    btnEl.textContent='Done!';setTimeout(function(){btnEl.textContent=orig;btnEl.disabled=false;},3000);
    refreshAcctQuick();
  }).catch(function(e){showToast('Order failed: '+(e.message||'Try again'),'err');btnEl.textContent=orig;btnEl.disabled=false;});
}

function sellStock(sym,qty,btnEl,full){
  if(!CONNECTED){showToast('Connect your Alpaca account first','err');return;}
  var orig=btnEl.textContent;btnEl.disabled=true;btnEl.textContent='Selling...';
  var inputAmt=parseFloat((document.getElementById('si-'+sym)||{}).value)||ORDER_AMT;
  var body=full?{symbol:sym,qty:parseFloat(qty).toFixed(6),side:'sell',type:'market',time_in_force:'day'}:{symbol:sym,notional:inputAmt.toFixed(2),side:'sell',type:'market',time_in_force:'day'};
  alpaca('/v2/orders',{method:'POST',body:JSON.stringify(body)}).then(function(r){return r.json();}).then(function(d){
    if(d.code||!d.id) throw new Error(d.message||'Sell rejected');
    showToast('Sell order placed for '+sym+(full?' (all shares)':''),'ok');
    btnEl.textContent='Sold!';setTimeout(function(){loadPortfolio();},2500);refreshAcctQuick();
  }).catch(function(e){showToast('Sell failed: '+(e.message||'Try again'),'err');btnEl.textContent=orig;btnEl.disabled=false;});
}

function refreshAcctQuick(){
  alpaca('/v2/account').then(function(r){return r.json();}).then(function(d){
    if(d.buying_power) document.getElementById('aBP').textContent=f$(d.buying_power);
    if(d.portfolio_value) document.getElementById('aPV').textContent=f$(d.portfolio_value);
  }).catch(function(){});
}

// ─── PORTFOLIO ────────────────────────────────────────────────────────────────
function loadPortfolio(){
  var out=document.getElementById('portfolioOut');
  if(!CONNECTED){out.innerHTML='<div class="empty">Connect your Alpaca account to view your portfolio</div>';return;}
  out.innerHTML='<div class="spin"><div class="spn"></div><div class="spin-t">Loading portfolio...</div></div>';
  Promise.all([alpaca('/v2/positions'),alpaca('/v2/account/portfolio/history?period='+CHART_PERIOD+'&timeframe=1D')]).then(function(rs){
    return Promise.all([rs[0].json(),rs[1].json()]);
  }).then(function(results){
    var positions=results[0],hist=results[1];
    var isPos=Array.isArray(positions)&&positions.length>0;
    var tMV=isPos?positions.reduce(function(s,p){return s+parseFloat(p.market_value||0);},0):0;
    var tPL=isPos?positions.reduce(function(s,p){return s+parseFloat(p.unrealized_pl||0);},0):0;
    var html='<div class="chart-wrap"><div class="ch-hdr"><div class="ch-t">Portfolio Value</div><div class="ch-per">'
      +['1W','1M','3M','1A'].map(function(p){return '<button class="cp-btn'+(CHART_PERIOD===p?' active':'')+'" onclick="CHART_PERIOD=\''+p+'\';loadPortfolio()">'+p+'</button>';}).join('')
      +'</div></div><canvas id="portfolioChart" height="160"></canvas></div>'
      +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:1rem">'
      +'<div class="astat"><div class="aval">'+f$(tMV)+'</div><div class="albl">Total Market Value</div></div>'
      +'<div class="astat"><div class="aval" style="color:'+(tPL>=0?'#2e7d32':'#c62828')+'">'+(tPL>=0?'+':'')+f$(tPL)+'</div><div class="albl">Unrealized P&amp;L</div></div>'
      +'</div>';
    if(isPos){
      html+=positions.map(function(p){
        var mv=parseFloat(p.market_value||0),pl=parseFloat(p.unrealized_pl||0),plpc=parseFloat(p.unrealized_plpc||0)*100;
        var cp=parseFloat(p.current_price||0),ap=parseFloat(p.avg_entry_price||0),qty=parseFloat(p.qty||0);
        var isUp=pl>=0;
        return '<div class="pos"><div class="pos-top"><div><div class="pos-sym">'+p.symbol+'</div><div class="pos-nm">'+(p.asset_class||'Equity')+'</div></div>'
          +'<div class="pos-rt"><div class="pos-val">'+f$(mv)+'</div><div class="pos-pl '+(isUp?'up':'dn')+'">'+(isUp?'+':'')+f$(pl)+' ('+fPct(plpc)+')</div></div></div>'
          +'<div class="pos-mt"><div class="pm"><div class="pm-v">'+f$(cp)+'</div><div class="pm-l">Current</div></div>'
          +'<div class="pm"><div class="pm-v">'+f$(ap)+'</div><div class="pm-l">Avg Cost</div></div>'
          +'<div class="pm"><div class="pm-v">'+(qty%1===0?qty.toFixed(0):qty.toFixed(4))+'</div><div class="pm-l">Shares</div></div></div>'
          +'<div class="sl-row"><input class="sl-in" id="si-'+p.symbol+'" type="number" value="'+ORDER_AMT+'" min="1"/>'
          +'<button class="sp-btn" onclick="sellStock(\''+p.symbol+'\','+qty+',this,false)">Sell $</button>'
          +'<button class="sf-btn" onclick="sellStock(\''+p.symbol+'\','+qty+',this,true)">Sell All</button></div></div>';
      }).join('');
    } else { html+='<div class="empty">No open positions. Buy some stocks from the Picks tab!</div>'; }
    out.innerHTML=html;
    renderPortfolioChart(hist);
  }).catch(function(e){out.innerHTML='<div class="empty">Failed to load: '+(e.message||'Check connection')+'</div>';});
}

function renderPortfolioChart(hist){
  var canvas=document.getElementById('portfolioChart');
  if(!canvas||typeof Chart==='undefined') return;
  if(CHART_INST){CHART_INST.destroy();CHART_INST=null;}
  if(!hist||!hist.timestamp||!hist.timestamp.length) return;
  var isDark=!document.body.hasAttribute('data-light');
  var gColor=isDark?'rgba(255,255,255,.05)':'rgba(0,0,0,.06)';
  var tColor=isDark?'#4a5568':'#bbb';
  var pairs=hist.timestamp.map(function(t,i){return {t:t,v:hist.equity[i]};}).filter(function(x){return x.v>0;});
  if(!pairs.length) return;
  var labels=pairs.map(function(x){return new Date(x.t*1000).toLocaleDateString('en-US',{month:'short',day:'numeric'});});
  var data=pairs.map(function(x){return x.v;});
  var lineColor=data[data.length-1]>=data[0]?'#2e7d32':'#c62828';
  CHART_INST=new Chart(canvas,{type:'line',data:{labels:labels,datasets:[{data:data,borderColor:lineColor,borderWidth:2,pointRadius:0,fill:true,backgroundColor:lineColor+'20',tension:0.3}]},
    options:{responsive:true,plugins:{legend:{display:false},tooltip:{callbacks:{label:function(c){return f$(c.raw);}}}},
      scales:{x:{grid:{color:gColor},ticks:{color:tColor,maxTicksLimit:7,font:{size:10}}},y:{grid:{color:gColor},ticks:{color:tColor,callback:function(v){return f$(v);},font:{size:10}}}}}});
}
function refreshChartTheme(){
  if(!CHART_INST) return;
  var isDark=document.body.hasAttribute('data-dark');
  var g=isDark?'rgba(255,255,255,.07)':'rgba(0,0,0,.06)';var t=isDark?'#666':'#bbb';
  CHART_INST.options.scales.x.grid.color=g;CHART_INST.options.scales.x.ticks.color=t;
  CHART_INST.options.scales.y.grid.color=g;CHART_INST.options.scales.y.ticks.color=t;
  CHART_INST.update();
}

// ─── ORDERS ───────────────────────────────────────────────────────────────────
function loadOrders(){
  var out=document.getElementById('ordersOut');
  if(!CONNECTED){out.innerHTML='<div class="empty">Connect your Alpaca account to view orders</div>';return;}
  out.innerHTML='<div class="spin"><div class="spn"></div><div class="spin-t">Loading orders...</div></div>';
  alpaca('/v2/orders?status=all&limit=100&direction=desc').then(function(r){return r.json();}).then(function(orders){
    ALL_ORDERS=orders;
    if(!Array.isArray(orders)||!orders.length){out.innerHTML='<div class="empty">No orders yet</div>';return;}
    out.innerHTML=orders.map(function(o){
      var isBuy=o.side==='buy';
      var filledAmt=o.filled_avg_price&&o.filled_qty?f$(parseFloat(o.filled_avg_price)*parseFloat(o.filled_qty)):null;
      var amt=o.notional?f$(o.notional):filledAmt||'--';
      var sCl=['canceled','cancelled'].includes(o.status)?'o-ca':o.status==='filled'?'o-fi':'o-pe';
      var dt=new Date(o.created_at).toLocaleDateString('en-US',{month:'short',day:'numeric',hour:'2-digit',minute:'2-digit'});
      return '<div class="ord"><div><div class="o-sym">'+o.symbol+' <span style="font-size:12px;font-weight:600;color:'+(isBuy?'#2e7d32':'#c62828')+'">'+o.side.toUpperCase()+'</span></div>'
        +'<div class="o-dt">'+dt+' &middot; '+o.type+'</div></div>'
        +'<div style="text-align:right"><div class="o-amt" style="'+(isBuy?'':'color:#c62828')+'">'+(isBuy?'':'-')+amt+'</div>'
        +'<span class="o-st '+sCl+'">'+o.status+'</span></div></div>';
    }).join('');
  }).catch(function(e){out.innerHTML='<div class="empty">Failed: '+(e.message||'Check connection')+'</div>';});
}
function exportCSV(){
  if(!ALL_ORDERS.length){showToast('Load orders first','err');return;}
  var rows=[['Symbol','Side','Notional','Status','Type','Created_at']].concat(ALL_ORDERS.map(function(o){return [o.symbol,o.side,o.notional||'',o.status,o.type,o.created_at];}));
  var csv=rows.map(function(r){return r.map(function(v){return '"'+String(v||'').replace(/"/g,'""')+'"';}).join(',');}).join('\n');
  var a=document.createElement('a');a.href='data:text/csv;charset=utf-8,'+encodeURIComponent(csv);a.download='orders_'+new Date().toISOString().slice(0,10)+'.csv';a.click();
  showToast('CSV exported','ok');
}

// ─── AUTO BUY ─────────────────────────────────────────────────────────────────
function saveAB(){var ab={enabled:document.getElementById('abToggle').checked,time:document.getElementById('abTime').value,ticker:document.getElementById('abTicker').value.toUpperCase().trim(),lastRun:''};localStorage.setItem('psp_ab',JSON.stringify(ab));}
function loadAB(){var ab=JSON.parse(localStorage.getItem('psp_ab')||'{}');if(ab.enabled)document.getElementById('abToggle').checked=true;if(ab.time)document.getElementById('abTime').value=ab.time;if(ab.ticker)document.getElementById('abTicker').value=ab.ticker;}
setInterval(function(){
  var ab=JSON.parse(localStorage.getItem('psp_ab')||'{}');
  if(!ab.enabled||!CONNECTED||!ab.ticker) return;
  var now=new Date();var parts=(ab.time||'09:35').split(':').map(Number);var today=now.toDateString();
  if(now.getHours()===parts[0]&&now.getMinutes()===parts[1]&&ab.lastRun!==today){
    ab.lastRun=today;localStorage.setItem('psp_ab',JSON.stringify(ab));
    var fakeBtn={textContent:'',disabled:false};buyStock(ab.ticker,fakeBtn);
    showToast('Auto-buy: $'+ORDER_AMT+' of '+ab.ticker+' placed!','inf',6000);
  }
},30000);

// ─── PRICE ALERTS ─────────────────────────────────────────────────────────────
function getAlerts(){return JSON.parse(localStorage.getItem('psp_alerts')||'[]');}
function saveAlerts(a){localStorage.setItem('psp_alerts',JSON.stringify(a));}
function addAlert(ticker,price,type){
  var p=parseFloat(price);if(!ticker||isNaN(p)||p<=0){showToast('Enter a valid ticker and price','err');return;}
  var a=getAlerts();a.push({id:Date.now(),ticker:ticker.toUpperCase(),price:p,type:type,triggered:false});saveAlerts(a);renderWatchlist();showToast('Alert set: '+ticker+' '+type+' '+f$(p),'ok');
}
function removeAlert(id){saveAlerts(getAlerts().filter(function(a){return a.id!==id;}));renderWatchlist();}
var alertRunning=false;
function startAlertChecker(){
  if(alertRunning) return;alertRunning=true;
  setInterval(function(){
    var active=getAlerts().filter(function(a){return !a.triggered;});if(!active.length) return;
    var syms=active.map(function(a){return a.ticker;}).filter(function(v,i,arr){return arr.indexOf(v)===i;}).join(',');
    fetch(prx('https://query1.finance.yahoo.com/v7/finance/quote?symbols='+syms)).then(function(r){return r.json();}).then(function(d){
      var all=getAlerts();var changed=false;
      (d&&d.quoteResponse&&d.quoteResponse.result||[]).forEach(function(q){
        LIVE_PRICES[q.symbol]=q.regularMarketPrice;var price=q.regularMarketPrice;
        all.forEach(function(al){
          if(al.ticker===q.symbol&&!al.triggered){
            var hit=(al.type==='above'&&price>=al.price)||(al.type==='below'&&price<=al.price);
            if(hit){al.triggered=true;changed=true;showToast('Alert: '+al.ticker+' is '+al.type+' '+f$(al.price)+'! Now: '+f$(price),'inf',7000);if(Notification.permission==='granted'){new Notification(al.ticker+' Alert',{body:'Price '+al.type+' '+f$(al.price)+' -- now '+f$(price)});}}
          }
        });
      });
      if(changed) saveAlerts(all);
    }).catch(function(){});
  },60000);
}

// ─── WATCHLIST ────────────────────────────────────────────────────────────────
function getWL(){return JSON.parse(localStorage.getItem('psp_wl')||'[]');}
function addToWL(ticker){
  var t=(ticker||'').trim().toUpperCase();if(!t){showToast('Enter a ticker symbol','err');return;}
  var wl=getWL();if(wl.includes(t)){showToast(t+' already in watchlist','err');return;}
  wl.push(t);localStorage.setItem('psp_wl',JSON.stringify(wl));renderWatchlist();
  var inp=document.getElementById('wlInput');if(inp)inp.value='';
  showToast(t+' added to watchlist','ok');
}
function removeFromWL(ticker){localStorage.setItem('psp_wl',JSON.stringify(getWL().filter(function(t){return t!==ticker;})));renderWatchlist();}
function renderWatchlist(){
  var out=document.getElementById('watchlistOut');if(!out) return;
  var wl=getWL();var alerts=getAlerts();
  if(Notification.permission==='default'&&!localStorage.getItem('psp_notif')){Notification.requestPermission().then(function(){localStorage.setItem('psp_notif','1');});}
  var pricesP=wl.length?fetch(prx('https://query1.finance.yahoo.com/v7/finance/quote?symbols='+wl.join(','))).then(function(r){return r.json();}).catch(function(){return {};})
    :Promise.resolve({});
  pricesP.then(function(d){
    var prices={};(d&&d.quoteResponse&&d.quoteResponse.result||[]).forEach(function(q){prices[q.symbol]={price:q.regularMarketPrice,change:q.regularMarketChangePercent||0};LIVE_PRICES[q.symbol]=q.regularMarketPrice;});
    var wlHTML=wl.length?
      '<div class="table-wrap"><table class="wl-table"><thead><tr><th>Symbol</th><th>Price</th><th>Change</th><th>Alerts</th><th>Actions</th></tr></thead><tbody>'
      +wl.map(function(sym){
        var pd=prices[sym];var isUp=(pd&&pd.change||0)>=0;var symAlerts=alerts.filter(function(a){return a.ticker===sym&&!a.triggered;});
        return '<tr>'
          +'<td><div class="wl-sym">'+sym+'</div></td>'
          +'<td style="font-weight:700">'+(pd?f$(pd.price):'--')+'</td>'
          +'<td class="'+(pd?(isUp?'up':'dn'):'')+'" style="font-weight:600">'+(pd?(isUp?'+':'')+pd.change.toFixed(2)+'%':'--')+'</td>'
          +'<td style="font-size:11px;color:'+(symAlerts.length?'#f6ad37':'var(--tx3)')+'">'+(symAlerts.length?'&#128276; '+symAlerts.length:'--')+'</td>'
          +'<td><div class="wl-acts">'
          +'<button class="wl-btn" onclick="openAlertPanel(\''+sym+'\')">+ Alert</button>'
          +'<a href="https://finance.yahoo.com/news/?symbols='+sym+'" target="_blank" class="wl-btn" style="text-decoration:none">News</a>'
          +'<button class="wl-btn wl-buy'+(bMode?' paper':'')+'" onclick="buyStock(\''+sym+'\',this)">Buy 

    var alertsHTML=alerts.length?alerts.map(function(a){
      return '<div class="al-row"><span style="font-size:16px">'+(a.triggered?'&#9989;':'&#128276;')+'</span>'
        +'<span class="al-inf" '+(a.triggered?'style="opacity:.5;text-decoration:line-through"':'')+'><strong>'+a.ticker+'</strong> '+a.type+' '+f$(a.price)+(a.triggered?' -- triggered':'')+'</span>'
        +'<button class="al-del" onclick="removeAlert('+a.id+')" title="Remove">&#215;</button></div>';
    }).join(''):'<div style="font-size:12px;color:var(--tx4);padding:.5rem 0">No alerts set. Click "+ Alert" on any watchlist stock.</div>';

    var today=new Date();today.setHours(0,0,0,0);
    var earningsHTML=Object.entries(EARNINGS).filter(function(e){return new Date(e[1])>=today;}).sort(function(a,b){return new Date(a[1])-new Date(b[1]);}).map(function(e){
      var sym=e[0],dt=new Date(e[1]);dt.setHours(0,0,0,0);
      var days=Math.round((dt-today)/86400000);
      var dayLbl=days===0?'Today!':days===1?'Tomorrow':'In '+days+' days';
      var dayCls=days===0?'earn-to':days<=7?'earn-so':'earn-ok';
      return '<div class="earn-c"><div><div class="earn-sy">'+sym+'</div><div class="earn-co">'+(DB.find(function(s){return s.ticker===sym;})||{}).company||''+'</div></div>'
        +'<div><div class="earn-dv">'+dt.toLocaleDateString('en-US',{month:'short',day:'numeric'})+'</div><div class="earn-dy '+dayCls+'">'+dayLbl+'</div></div></div>';
    }).join('');

    out.innerHTML='<div class="wl-add"><input id="wlInput" class="wl-inp" type="text" placeholder="Add ticker e.g. AAPL" maxlength="6" onkeydown="if(event.key===\'Enter\')addToWL(this.value)"/><button class="wl-add-btn" onclick="addToWL(document.getElementById(\'wlInput\').value)">Add</button></div>'
      +'<div class="al-pan" id="alertPanel"></div>'
      +wlHTML
      +'<div style="margin-top:20px"><div style="font-size:11px;font-weight:700;color:var(--tx3);text-transform:uppercase;letter-spacing:.07em;margin-bottom:8px">Price Alerts <span style="font-size:10px;font-weight:400;text-transform:none;color:var(--tx3)">Notifies while tab is open</span></div>'
      +alertsHTML+'</div>'
      +'<div style="margin-top:20px"><div style="font-size:11px;font-weight:700;color:var(--tx3);text-transform:uppercase;letter-spacing:.07em;margin-bottom:8px">Earnings Calendar</div>'
      +'<div class="earn-grid">'
      +(earningsHTML||'<div style="font-size:12px;color:var(--tx3)">No upcoming earnings</div>')
      +'</div></div>';
  });
}
function openAlertPanel(ticker){
  var panel=document.getElementById('alertPanel');
  var isOpen=panel.classList.contains('open')&&panel.dataset.for===ticker;
  panel.classList.toggle('open',!isOpen);panel.dataset.for=ticker;
  if(!isOpen){
    panel.innerHTML='<div class="al-t">&#128276; Set price alert for <strong>'+ticker+'</strong></div>'
      +'<div class="al-form"><select id="alertType"><option value="above">Price goes above</option><option value="below">Price goes below</option></select>'
      +'<input type="number" id="alertPrice" placeholder="e.g. 150" step="0.01" min="0.01"/>'
      +'<button class="al-set" onclick="addAlert(\''+ticker+'\',document.getElementById(\'alertPrice\').value,document.getElementById(\'alertType\').value)">Set Alert</button>'
      +'<button class="al-cn" onclick="document.getElementById(\'alertPanel\').classList.remove(\'open\')">Cancel</button></div>';
  }
}

// ─── SECTOR EXPLORER ──────────────────────────────────────────────────────────
function getStockData(ticker,sec){
  var fromDB=ALL_STOCKS.find(function(s){return s.ticker===ticker;});
  if(fromDB) return fromDB;
  return Object.assign({ticker:ticker},sec.stockData&&sec.stockData[ticker]||{company:ticker,rating:'Listed',bear:-20,base:20,bull:60,pol:[],bil:[],inst:[],insider:[],options:[],retail:[],why:'Research this stock using the links below.'});
}
function sectorMomentum(sec){
  var all=sec.stocks.concat(sec.gems).map(function(tk){var sd=getStockData(tk,sec);return sd.base||0;});
  return Math.round(all.reduce(function(s,v){return s+v;},0)/(all.length||1));
}
function renderSectorGrid(){
  var out=document.getElementById('sectorsOut');
  var moms=Object.keys(SECTORS).map(function(n){return {n:n,s:SECTORS[n],m:sectorMomentum(SECTORS[n])};}).sort(function(a,b){return b.m-a.m;});
  var maxM=Math.max.apply(null,moms.map(function(x){return x.m;}));maxM=maxM||1;
  var scr='<div class="scr-bar"><label>Rating:</label><select id="scRating" onchange="applyScreener()"><option value="">All</option><option>Strong Buy</option><option>Moderate Buy</option><option>Speculative Buy</option></select>'
    +'<label>Min conviction:</label><input id="scConv" type="number" placeholder="0" min="0" max="100" style="width:60px" oninput="applyScreener()"/>'
    +'<label>Signal:</label><select id="scSig" onchange="applyScreener()"><option value="">Any</option>'+Object.keys(SIG).map(function(k){return '<option value="'+k+'">'+SIG[k].l+'</option>';}).join('')+'</select></div>';
  var cards=moms.map(function(x,i){
    var n=x.n,s=x.s,m=x.m;var topK=i===0?'&#128293; ':i===1?'&#11014;&#65039; ':'';
    return '<div class="sec-c" id="sc-'+n.replace(/\W/g,'_')+'" onclick="openSector(\''+n+'\')">'
      +'<div class="sc-ic">'+s.icon+'</div><div class="sc-nm">'+topK+n+'</div>'
      +'<div class="sc-mt">'+s.stocks.length+' stocks &middot; '+s.gems.length+' gems &middot; avg +'+m+'% base</div>'
      +'<span class="badge '+s.cls+' nc" style="font-size:10px">'+s.stocks.slice(0,3).join(' &middot; ')+'</span>'
      +'<div class="rot-bg"><div class="rot-fill" style="width:'+(m/maxM*100).toFixed(0)+'%"></div></div>'
      +'</div>';
  }).join('');
  out.innerHTML=scr+'<div class="lbl" style="margin-bottom:.75rem">Sector rotation -- ranked by avg base-case ROI</div><div class="sec-grid">'+cards+'</div><div id="sectorDetail"></div>';
}
function applyScreener(){
  SCREENER.rating=(document.getElementById('scRating')||{}).value||'';
  SCREENER.conv=parseInt((document.getElementById('scConv')||{}).value)||0;
  SCREENER.sig=(document.getElementById('scSig')||{}).value||'';
  if(ACT_SECTOR) renderSectorDetail(ACT_SECTOR);
}
function stockPass(s){
  if(SCREENER.rating&&s.rating!==SCREENER.rating) return false;
  if(SCREENER.conv&&convScore(s)<SCREENER.conv) return false;
  if(SCREENER.sig&&!(s[SCREENER.sig]&&s[SCREENER.sig].length)) return false;
  return true;
}
function openSector(name){
  ACT_SECTOR=name;ACT_FILTER='all';
  document.querySelectorAll('.sec-c').forEach(function(c){c.classList.remove('active');});
  var el=document.getElementById('sc-'+name.replace(/\W/g,'_'));if(el)el.classList.add('active');
  renderSectorDetail(name);
  setTimeout(function(){var el2=document.getElementById('sectorDetail');if(el2)el2.scrollIntoView({behavior:'smooth',block:'start'});},50);
}
function closeSectorDetail(){
  var el=document.getElementById('sectorDetail');if(el)el.innerHTML='';
  document.querySelectorAll('.sec-c').forEach(function(c){c.classList.remove('active');});
  ACT_SECTOR=null;
}
function ssRow(s,isGem){
  var rCls=s.rating==='Strong Buy'?'b-green':s.rating==='Moderate Buy'?'b-amber':'b-gray';
  var cv=convScore(s);var cvCls=cv>=80?'cv-hi':cv>=60?'cv-go':cv>=40?'cv-md':'cv-lo';
  var bMode=MODE==='paper';
  return '<div class="ss-rw'+(isGem?' gem-rw':'')+'">'+( isGem?'<div class="gem-lb">&#11088; Hidden Gem</div>':'')
    +'<div class="ss-top"><div><div class="ss-sy">'+s.ticker+'</div><div class="ss-co">'+(s.company||s.ticker)+'</div></div>'
    +'<div class="ss-rt"><span class="ss-ra badge '+rCls+' nc">'+s.rating+'</span><div class="ss-bs">'+pct(s.base||0)+' base</div></div></div>'
    +'<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px"><span class="cv '+cvCls+'" style="font-size:11px">&#9889; '+cv+'</span>'
    +'<a href="https://finance.yahoo.com/news/?symbols='+s.ticker+'" target="_blank" class="nws">&#128240; News</a></div>'
    +'<div class="sigs">'+sigChips(s)+'</div>'
    +'<div class="ss-prd"><div class="ss-p bear">Bear '+pct(s.bear||0)+'</div><div class="ss-p base">Base '+pct(s.base||0)+'</div><div class="ss-p bull">Bull +'+(s.bull||0)+'%</div></div>'
    +'<div class="ss-wh">'+(s.why||'')+'</div>'
    +'<button class="'+sCls()+'" onclick="buyStock(\''+s.ticker+'\',this)" '+(CONNECTED?'':'disabled')+'>Buy $'+ORDER_AMT+(bMode?' (P)':'')+'</button></div>';
}
function renderSectorDetail(name){
  var sec=SECTORS[name];
  var FKEYS=['all','pol','bil','inst','insider','options','retail','multi'];
  var FLBLS=['All','&#127963; Pol','&#128142; Bil','&#127970; Inst','&#128084; Insider','&#128202; Options','&#128241; Retail','3+ signals'];
  var fBtns=FKEYS.map(function(k,i){return '<button class="sig-btn'+(ACT_FILTER===k?' active':'')+'" onclick="ACT_FILTER=\''+k+'\';renderSectorDetail(\''+name+'\')">'+FLBLS[i]+'</button>';}).join('');
  function sigF(s){if(ACT_FILTER==='all')return true;if(ACT_FILTER==='multi')return Object.keys(SIG).filter(function(k){return s[k]&&s[k].length;}).length>=3;return s[ACT_FILTER]&&s[ACT_FILTER].length>0;}
  function score(s){return convScore(s)+(s.rating==='Strong Buy'?20:s.rating==='Moderate Buy'?10:0)+(s.base||0)/5;}
  var stocks=sec.stocks.map(function(tk){return getStockData(tk,sec);}).filter(function(s){return stockPass(s)&&sigF(s);}).sort(function(a,b){return score(b)-score(a);});
  var gems=sec.gems.map(function(tk){return getStockData(tk,sec);}).filter(function(s){return stockPass(s)&&sigF(s);}).sort(function(a,b){return score(b)-score(a);});
  document.getElementById('sectorDetail').innerHTML='<div class="sec-det"><div class="sd-hdr"><div style="display:flex;align-items:center;gap:8px"><span style="font-size:20px">'+sec.icon+'</span><div class="sd-t">'+name+'</div></div><button class="sd-cl" onclick="closeSectorDetail()">&#215; Close</button></div>'
    +'<div class="sig-fs">'+fBtns+'</div>'
    +(stocks.length?stocks.map(function(s){return ssRow(s,false);}).join(''):'<div class="empty" style="padding:1rem">No stocks match this filter</div>')
    +(gems.length?'<div class="sec-dv">&#11088; Hidden Gems in '+name+'</div>'+gems.map(function(g){return ssRow(g,true);}).join(''):'')
    +'</div>';
}

// ─── MODAL ────────────────────────────────────────────────────────────────────
function openSectorModal(sectorName){
  var sec=SECTORS[sectorName];if(!sec)return;
  document.getElementById('moT').textContent=sec.icon+' '+sectorName;
  document.getElementById('moS').textContent=sec.stocks.length+' stocks \u00b7 '+sec.gems.length+' hidden gems';
  document.getElementById('moB').innerHTML=sec.stocks.map(function(tk){return ssRow(getStockData(tk,sec),false);}).join('')
    +(sec.gems.length?'<div class="sec-dv">&#11088; Hidden Gems</div>'+sec.gems.map(function(tk){return ssRow(getStockData(tk,sec),true);}).join(''):'');
  document.getElementById('modalOv').classList.add('open');
}
function closeModal(){document.getElementById('modalOv').classList.remove('open');}
function maybeClose(e){if(e.target===document.getElementById('modalOv'))closeModal();}

// ─── SEARCH AUTOCOMPLETE ──────────────────────────────────────────────────────
var srchFocusIdx=-1;
function onSearchInput(inp){
  var val=(inp.value||'').trim();
  if(val.length<1){closeSearchDrop();return;}
  var upper=val.toUpperCase();
  var lower=val.toLowerCase();
  var results=SEARCH_DB.filter(function(s){
    if(s.t.startsWith(upper)) return true;
    var words=s.n.toLowerCase().split(' ');
    return words.some(function(w){return w.startsWith(lower);});
  }).slice(0,9);
  if(!results.length){closeSearchDrop();return;}
  var drop=document.getElementById('srchDrop');
  if(!drop) return;
  drop.innerHTML=results.map(function(s,i){
    var tHL=s.t.toUpperCase().startsWith(upper)?'<strong>'+s.t.slice(0,upper.length)+'</strong>'+s.t.slice(upper.length):s.t;
    var nHL=s.n;
    return '<div class="srch-item" data-idx="'+i+'" onclick="selectStock(\''+s.t+'\')" onmouseover="srchFocusIdx='+i+';updateFocus()">'
      +'<span class="srch-tk">'+tHL+'</span>'
      +'<span class="srch-nm">'+nHL+'</span>'
      +'<span class="srch-sc">'+s.s+'</span>'
      +'</div>';
  }).join('');
  drop.classList.add('open');
  srchFocusIdx=-1;
}
function onSearchKey(e){
  var drop=document.getElementById('srchDrop');
  if(!drop||!drop.classList.contains('open')){if(e.key==='Enter')searchStock();return;}
  var items=drop.querySelectorAll('.srch-item');
  if(e.key==='ArrowDown'){e.preventDefault();srchFocusIdx=Math.min(srchFocusIdx+1,items.length-1);updateFocus();}
  else if(e.key==='ArrowUp'){e.preventDefault();srchFocusIdx=Math.max(srchFocusIdx-1,-1);updateFocus();}
  else if(e.key==='Enter'){e.preventDefault();if(srchFocusIdx>=0&&items[srchFocusIdx]){items[srchFocusIdx].click();}else{closeSearchDrop();searchStock();}}
  else if(e.key==='Escape'){closeSearchDrop();}
}
function updateFocus(){
  var drop=document.getElementById('srchDrop');if(!drop) return;
  var items=drop.querySelectorAll('.srch-item');
  Array.prototype.forEach.call(items,function(it,i){
    it.classList.toggle('focused',i===srchFocusIdx);
    if(i===srchFocusIdx) it.scrollIntoView({block:'nearest'});
  });
}
function closeSearchDrop(){
  var drop=document.getElementById('srchDrop');
  if(drop){drop.classList.remove('open');drop.innerHTML='';}
  srchFocusIdx=-1;
}
function selectStock(ticker){
  var inp=document.getElementById('srchIn');if(inp) inp.value=ticker;
  closeSearchDrop();searchStock();
}
// close dropdown when clicking outside
document.addEventListener('click',function(e){if(!e.target.closest('.srch-wrap'))closeSearchDrop();});

// ─── SEARCH ───────────────────────────────────────────────────────────────────
function fmtCap(v){if(v>=1e12)return '$'+(v/1e12).toFixed(2)+'T';if(v>=1e9)return '$'+(v/1e9).toFixed(1)+'B';if(v>=1e6)return '$'+(v/1e6).toFixed(1)+'M';return '$'+v.toLocaleString();}
function searchStock(){
  var raw=((document.getElementById('srchIn')||{}).value||'').trim();
  var lower=raw.toLowerCase();
  // resolve company name to ticker
  var fromDB=SEARCH_DB.find(function(s){return s.n.toLowerCase()===lower||s.t.toLowerCase()===lower;});
  var ticker=(fromDB?fromDB.t:raw).toUpperCase();
  if(!ticker){showToast('Enter a company name or ticker symbol','err');return;}
  closeSearchDrop();
  out.innerHTML='<div class="spin"><div class="spn"></div><div class="spin-t">Looking up '+ticker+'...</div></div>';
  fetch(prx('https://query1.finance.yahoo.com/v7/finance/quote?symbols='+ticker)).then(function(r){return r.json();}).then(function(d){
    var q=(d&&d.quoteResponse&&d.quoteResponse.result||[])[0];
    if(!q||!q.regularMarketPrice){out.innerHTML='<div class="empty">No results for "'+ticker+'" -- check the symbol and try again</div>';return;}
    LIVE_PRICES[q.symbol]=q.regularMarketPrice;
    var dbStock=ALL_STOCKS.find(function(s){return s.ticker===q.symbol;});
    var price=q.regularMarketPrice||0;var chg=q.regularMarketChangePercent||0;var isUp=chg>=0;var bMode=MODE==='paper';
    var dbSection=dbStock?
      '<div style="margin-bottom:8px">'+convBadge(dbStock)+'</div><div class="sigs" style="margin:0 0 4px">'+sigChips(dbStock)+'</div>'+whosBuying(dbStock,false):
      '<div style="padding:10px 12px;background:var(--sf2);border-radius:10px;font-size:12px;color:var(--tx3);margin:8px 0">Not in our tracked database -- buy and research links available below.</div>';
    var buyBtns='<div style="display:flex;gap:8px;align-items:center;margin:14px 0;flex-wrap:wrap">'
      +'<button class="'+bCls()+'" onclick="buyStock(\''+q.symbol+'\',this)">Buy $'+ORDER_AMT+(bMode?' (P)':'')+'</button>'
      +'<button class="refresh-btn" style="margin:0" onclick="addToWL(\''+q.symbol+'\')">+ Watchlist</button>'
      +'<a href="https://finance.yahoo.com/news/?symbols='+q.symbol+'" target="_blank" class="nws">&#128240; News</a>'
      +'<a href="https://finviz.com/quote.ashx?t='+q.symbol+'" target="_blank" class="nws">Finviz</a>'
      +'</div>';
    out.innerHTML='<div class="card"><div class="tkr" style="font-size:26px;letter-spacing:-.5px">'+q.symbol+'</div>'
      +'<div class="co">'+(q.longName||q.shortName||q.symbol)+(q.exchangeName?' &nbsp;&middot;&nbsp; '+q.exchangeName:'')+'</div>'
      +'<div style="display:flex;align-items:baseline;gap:10px;margin-bottom:16px;flex-wrap:wrap"><span class="price">'+f$(price)+'</span><span style="font-size:16px;font-weight:700;color:'+(isUp?'#2e7d32':'#c62828')+'">'+(isUp?'+':'')+chg.toFixed(2)+'% today</span></div>'
      +'<div class="srch-st"><div class="astat"><div class="aval">'+(q.marketCap?fmtCap(q.marketCap):'--')+'</div><div class="albl">Market Cap</div></div>'
      +'<div class="astat"><div class="aval">'+(q.trailingPE?q.trailingPE.toFixed(1)+'x':'--')+'</div><div class="albl">Trailing P/E</div></div>'
      +'<div class="astat"><div class="aval">'+(q.fiftyTwoWeekHigh?f$(q.fiftyTwoWeekHigh):'--')+'</div><div class="albl">52W High</div></div>'
      +'<div class="astat"><div class="aval">'+(q.fiftyTwoWeekLow?f$(q.fiftyTwoWeekLow):'--')+'</div><div class="albl">52W Low</div></div></div>'
      +dbSection+buyBtns+bracketPanel(q.symbol)+articlesHTML(q.symbol)+'</div>';
  }).catch(function(e){out.innerHTML='<div class="empty">Search failed: '+(e.message||'Check your connection')+'</div>';});
}

// ─── PRICES + PICKS ───────────────────────────────────────────────────────────
var STEPS=['Fetching live prices...','Scoring all signals...','Running AI models...','Finalizing picks...'];
function fetchPrices(){
  return fetch(prx('https://query1.finance.yahoo.com/v7/finance/quote?symbols='+ALL_STOCKS.map(function(s){return s.ticker;}).join(','))).then(function(r){return r.json();}).then(function(d){
    (d&&d.quoteResponse&&d.quoteResponse.result||[]).forEach(function(q){var s=ALL_STOCKS.find(function(x){return x.ticker===q.symbol;});if(s&&q.regularMarketPrice){s.livePrice=q.regularMarketPrice;LIVE_PRICES[q.symbol]=q.regularMarketPrice;}});
    return true;
  }).catch(function(){return false;});
}
function getDailyPick(){
  var day=Math.floor(Date.now()/86400000);
  return DB.map(function(s,i){return Object.assign({},s,{score:s.polScore*0.55+s.conf*0.45+(day%(i+4)===0?6:0)});}).sort(function(a,b){return b.score-a.score;});
}
function renderPicks(sorted,live){
  var pick=sorted[0];var runners=sorted.slice(1,4);
  var p=pick.livePrice||pick.fb;var today=new Date().toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'});
  var allChips=(pick.pol||[]).map(function(x){return '<span class="chip">&#127963; '+x+'</span>';}).join('')+(pick.bil||[]).map(function(x){return '<span class="chip">&#128142; '+x+'</span>';}).join('');
  var liveTag=live&&pick.livePrice?'<span class="badge b-gray nc">Live price</span>':'<span class="badge b-gray nc">Est. price</span>';
  var bMode=MODE==='paper';
  var runnerHTML=runners.map(function(r){var rp=r.livePrice||r.fb;return '<div class="alt" onclick="openSectorModal(\''+r.sector+'\')"><div class="alt-t">'+r.ticker+'</div><div class="alt-co">'+r.company+'</div><div class="alt-p">'+f$(rp)+(live&&r.livePrice?'':' <span style="font-size:10px;color:var(--tx4)">est.</span>')+'</div><div class="alt-w">'+r.why.split('.')[0]+'.</div></div>';}).join('');
  var gemHTML=GEMS.map(function(g){
    var gp=g.livePrice||g.fb;
    return '<div class="gem"><div class="g-hdr"><div><div class="g-tk">'+g.ticker+'</div><div class="g-co">'+g.company+'</div>'
      +'<div class="g-bgs"><span class="badge '+g.tCls+'" onclick="openSectorModal(\''+g.sector+'\')">'+g.theme+' &#8599;</span><span class="badge b-gray nc">'+g.rating+'</span></div></div>'
      +'<div class="g-rt"><div class="g-pr">'+f$(gp)+(live&&g.livePrice?'':' <span style="font-size:10px;color:var(--tx4)">est.</span>')+'</div><div class="g-sh">$'+ORDER_AMT+' = '+((ORDER_AMT)/(gp)).toFixed(4)+' sh</div><div class="g-roi">'+pct(g.bear)+' to +'+g.bull+'%</div></div></div>'
      +'<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">'+convBadge(g)+'<a href="https://finance.yahoo.com/news/?symbols='+g.ticker+'" target="_blank" class="nws">&#128240; News</a></div>'
      +'<div class="sigs" style="margin-bottom:10px">'+sigChips(g)+'</div>'
      +whosBuying(g,true)
      +'<p class="g-why" style="margin-top:8px">'+g.why+'</p>'
      +'<div class="lbl">AI 12-month prediction</div>'
      +'<div class="scns"><div class="scn scn-bear"><div class="scn-nm">Bear</div><div class="scn-pct">'+pct(g.bear)+'</div><div class="scn-pb">'+g.bearP+'% likely</div><div class="pb-bg"><div class="pb" style="width:'+g.bearP+'%"></div></div></div>'
      +'<div class="scn scn-base"><div class="scn-nm">Base &#9733;</div><div class="scn-pct">'+pct(g.base)+'</div><div class="scn-pb">'+g.baseP+'% likely</div><div class="pb-bg"><div class="pb" style="width:'+g.baseP+'%"></div></div></div>'
      +'<div class="scn scn-bull"><div class="scn-nm">Bull</div><div class="scn-pct">+'+g.bull+'%</div><div class="scn-pb">'+g.bullP+'% likely</div><div class="pb-bg"><div class="pb" style="width:'+g.bullP+'%"></div></div></div></div>'
      +'<div class="cat">'+g.catalyst+'</div>'
      +'<button class="'+gCls()+'" onclick="buyStock(\''+g.ticker+'\',this)">Buy $'+ORDER_AMT+(bMode?' (Paper)':'')+'</button>'
      +bracketPanel(g.ticker)+'</div>';
  }).join('');
  document.getElementById('picksOut').innerHTML='<div class="dt-b">'+today+'</div>'
    +'<div class="card"><div class="tkr">'+pick.ticker+'</div><div class="co">'+pick.company+'</div>'
    +'<div class="badges"><span class="badge b-green nc">'+pick.rating+'</span><span class="badge b-blue nc">Top congressional buy</span><span class="badge '+pick.sCls+'" onclick="openSectorModal(\''+pick.sector+'\')">'+pick.sector+' &#8599;</span>'+liveTag+'</div>'
    +'<div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;flex-wrap:wrap">'+convBadge(pick)+'<a href="https://finance.yahoo.com/news/?symbols='+pick.ticker+'" target="_blank" class="nws">&#128240; News</a></div>'
    +'<div class="sigs" style="margin-bottom:12px">'+sigChips(pick)+'</div>'
    +'<div class="pr"><span class="price">'+f$(p)+'</span><span class="sh">$'+ORDER_AMT+' = '+((ORDER_AMT)/(p)).toFixed(4)+' shares</span>'
    +'<button class="'+bCls()+'" onclick="buyStock(\''+pick.ticker+'\',this)">Buy $'+ORDER_AMT+(bMode?' (Paper)':'')+'</button></div>'
    +bracketPanel(pick.ticker)
    +'<div class="lbl">Why this pick today</div><p class="why-t">'+pick.why+'</p>'
    +'<div class="lbl">Confidence score</div><div class="bar-bg"><div class="bar-fill" style="width:'+pick.conf+'%"></div></div>'
    +'<div class="cf-lbl"><span>Low</span><span style="font-weight:700;color:var(--tx)">'+pick.conf+'%</span><span>High</span></div>'
    +'<hr class="dvd">'
    +whosBuying(pick,false)
    +'<div class="lbl" style="margin-top:14px">Analyst consensus</div><p class="ctx">'+pick.anaCtx+'</p>'
    +articlesHTML(pick.ticker)+'</div>'
    +'<div class="lbl">Runner-up picks <span style="font-size:10px;color:var(--tx4)">-- click to explore that sector</span></div>'
    +'<div class="alt-grid">'+runnerHTML+'</div>'
    +'<div class="sh-hdr"><div class="sh-t">Hidden gem picks</div><div class="sh-s">Under-the-radar &middot; All 6 signal types &middot; AI predictions &middot; Click sector badge to see more</div></div>'
    +gemHTML;
}
function run(){
  var btn=document.getElementById('pickBtn');btn.disabled=true;btn.textContent='Researching...';
  var si=0;
  document.getElementById('picksOut').innerHTML='<div class="spin"><div class="spn"></div><div class="spin-t">Analyzing all signal sources</div><div class="spin-s" id="ss">'+STEPS[0]+'</div></div>';
  var t=setInterval(function(){si=(si+1)%STEPS.length;var el=document.getElementById('ss');if(el)el.textContent=STEPS[si];},1200);
  fetchPrices().then(function(live){
    clearInterval(t);renderPicks(getDailyPick(),live);
    btn.textContent='Refresh picks';btn.disabled=false;
  });
}

// Init
loadAB();
+ORDER_AMT+'</button>'
          +'<button class="wl-btn wl-rm" onclick="removeFromWL(\''+sym+'\')">&#215;</button>'
          +'</div></td>'
          +'</tr>';
      }).join('')+'</tbody></table></div>'
      :'<div class="empty">Add stocks above to track them here</div>';

    var alertsHTML=alerts.length?alerts.map(function(a){
      return '<div class="al-row"><span style="font-size:16px">'+(a.triggered?'&#9989;':'&#128276;')+'</span>'
        +'<span class="al-inf" '+(a.triggered?'style="opacity:.5;text-decoration:line-through"':'')+'><strong>'+a.ticker+'</strong> '+a.type+' '+f$(a.price)+(a.triggered?' -- triggered':'')+'</span>'
        +'<button class="al-del" onclick="removeAlert('+a.id+')" title="Remove">&#215;</button></div>';
    }).join(''):'<div style="font-size:12px;color:var(--tx4);padding:.5rem 0">No alerts set. Click "+ Alert" on any watchlist stock.</div>';

    var today=new Date();today.setHours(0,0,0,0);
    var earningsHTML=Object.entries(EARNINGS).filter(function(e){return new Date(e[1])>=today;}).sort(function(a,b){return new Date(a[1])-new Date(b[1]);}).map(function(e){
      var sym=e[0],dt=new Date(e[1]);dt.setHours(0,0,0,0);
      var days=Math.round((dt-today)/86400000);
      var dayLbl=days===0?'Today!':days===1?'Tomorrow':'In '+days+' days';
      var dayCls=days===0?'earn-to':days<=7?'earn-so':'earn-ok';
      return '<div class="earn-c"><div><div class="earn-sy">'+sym+'</div><div class="earn-co">'+(DB.find(function(s){return s.ticker===sym;})||{}).company||''+'</div></div>'
        +'<div><div class="earn-dv">'+dt.toLocaleDateString('en-US',{month:'short',day:'numeric'})+'</div><div class="earn-dy '+dayCls+'">'+dayLbl+'</div></div></div>';
    }).join('');

    out.innerHTML='<div class="wl-add"><input id="wlInput" type="text" placeholder="Add ticker e.g. AAPL" maxlength="6" onkeydown="if(event.key===\'Enter\')addToWL(this.value)" style="text-transform:uppercase"/><button onclick="addToWL(document.getElementById(\'wlInput\').value)">Add</button></div>'
      +wlHTML
      +'<div class="al-pan" id="alertPanel"></div>'
      +'<div class="sh-hdr" style="margin-top:1.5rem"><div class="sh-t">Price Alerts</div><div class="sh-s">Notifies you while this tab is open</div></div>'
      +alertsHTML
      +'<div class="sh-hdr" style="margin-top:1.5rem"><div class="sh-t">Earnings Calendar</div><div class="sh-s">Upcoming earnings dates</div></div>'
      +(earningsHTML||'<div class="empty" style="padding:1rem">No upcoming earnings in database</div>');
  });
}
function openAlertPanel(ticker){
  var panel=document.getElementById('alertPanel');
  var isOpen=panel.classList.contains('open')&&panel.dataset.for===ticker;
  panel.classList.toggle('open',!isOpen);panel.dataset.for=ticker;
  if(!isOpen){
    panel.innerHTML='<div class="al-t">&#128276; Set price alert for <strong>'+ticker+'</strong></div>'
      +'<div class="al-form"><select id="alertType"><option value="above">Price goes above</option><option value="below">Price goes below</option></select>'
      +'<input type="number" id="alertPrice" placeholder="e.g. 150" step="0.01" min="0.01"/>'
      +'<button class="al-set" onclick="addAlert(\''+ticker+'\',document.getElementById(\'alertPrice\').value,document.getElementById(\'alertType\').value)">Set Alert</button>'
      +'<button class="al-cn" onclick="document.getElementById(\'alertPanel\').classList.remove(\'open\')">Cancel</button></div>';
  }
}

// ─── SECTOR EXPLORER ──────────────────────────────────────────────────────────
function getStockData(ticker,sec){
  var fromDB=ALL_STOCKS.find(function(s){return s.ticker===ticker;});
  if(fromDB) return fromDB;
  return Object.assign({ticker:ticker},sec.stockData&&sec.stockData[ticker]||{company:ticker,rating:'Listed',bear:-20,base:20,bull:60,pol:[],bil:[],inst:[],insider:[],options:[],retail:[],why:'Research this stock using the links below.'});
}
function sectorMomentum(sec){
  var all=sec.stocks.concat(sec.gems).map(function(tk){var sd=getStockData(tk,sec);return sd.base||0;});
  return Math.round(all.reduce(function(s,v){return s+v;},0)/(all.length||1));
}
function renderSectorGrid(){
  var out=document.getElementById('sectorsOut');
  var moms=Object.keys(SECTORS).map(function(n){return {n:n,s:SECTORS[n],m:sectorMomentum(SECTORS[n])};}).sort(function(a,b){return b.m-a.m;});
  var maxM=Math.max.apply(null,moms.map(function(x){return x.m;}));maxM=maxM||1;
  var scr='<div class="scr-bar"><label>Rating:</label><select id="scRating" onchange="applyScreener()"><option value="">All</option><option>Strong Buy</option><option>Moderate Buy</option><option>Speculative Buy</option></select>'
    +'<label>Min conviction:</label><input id="scConv" type="number" placeholder="0" min="0" max="100" style="width:60px" oninput="applyScreener()"/>'
    +'<label>Signal:</label><select id="scSig" onchange="applyScreener()"><option value="">Any</option>'+Object.keys(SIG).map(function(k){return '<option value="'+k+'">'+SIG[k].l+'</option>';}).join('')+'</select></div>';
  var cards=moms.map(function(x,i){
    var n=x.n,s=x.s,m=x.m;var topK=i===0?'&#128293; ':i===1?'&#11014;&#65039; ':'';
    return '<div class="sec-c" id="sc-'+n.replace(/\W/g,'_')+'" onclick="openSector(\''+n+'\')">'
      +'<div class="sc-ic">'+s.icon+'</div><div class="sc-nm">'+topK+n+'</div>'
      +'<div class="sc-mt">'+s.stocks.length+' stocks &middot; '+s.gems.length+' gems &middot; avg +'+m+'% base</div>'
      +'<span class="badge '+s.cls+' nc" style="font-size:10px">'+s.stocks.slice(0,3).join(' &middot; ')+'</span>'
      +'<div class="rot-bg"><div class="rot-fill" style="width:'+(m/maxM*100).toFixed(0)+'%"></div></div>'
      +'</div>';
  }).join('');
  out.innerHTML=scr+'<div class="lbl" style="margin-bottom:.75rem">Sector rotation -- ranked by avg base-case ROI</div><div class="sec-grid">'+cards+'</div><div id="sectorDetail"></div>';
}
function applyScreener(){
  SCREENER.rating=(document.getElementById('scRating')||{}).value||'';
  SCREENER.conv=parseInt((document.getElementById('scConv')||{}).value)||0;
  SCREENER.sig=(document.getElementById('scSig')||{}).value||'';
  if(ACT_SECTOR) renderSectorDetail(ACT_SECTOR);
}
function stockPass(s){
  if(SCREENER.rating&&s.rating!==SCREENER.rating) return false;
  if(SCREENER.conv&&convScore(s)<SCREENER.conv) return false;
  if(SCREENER.sig&&!(s[SCREENER.sig]&&s[SCREENER.sig].length)) return false;
  return true;
}
function openSector(name){
  ACT_SECTOR=name;ACT_FILTER='all';
  document.querySelectorAll('.sec-c').forEach(function(c){c.classList.remove('active');});
  var el=document.getElementById('sc-'+name.replace(/\W/g,'_'));if(el)el.classList.add('active');
  renderSectorDetail(name);
  setTimeout(function(){var el2=document.getElementById('sectorDetail');if(el2)el2.scrollIntoView({behavior:'smooth',block:'start'});},50);
}
function closeSectorDetail(){
  var el=document.getElementById('sectorDetail');if(el)el.innerHTML='';
  document.querySelectorAll('.sec-c').forEach(function(c){c.classList.remove('active');});
  ACT_SECTOR=null;
}
function ssRow(s,isGem){
  var rCls=s.rating==='Strong Buy'?'b-green':s.rating==='Moderate Buy'?'b-amber':'b-gray';
  var cv=convScore(s);var cvCls=cv>=80?'cv-hi':cv>=60?'cv-go':cv>=40?'cv-md':'cv-lo';
  var bMode=MODE==='paper';
  return '<div class="ss-rw'+(isGem?' gem-rw':'')+'">'+( isGem?'<div class="gem-lb">&#11088; Hidden Gem</div>':'')
    +'<div class="ss-top"><div><div class="ss-sy">'+s.ticker+'</div><div class="ss-co">'+(s.company||s.ticker)+'</div></div>'
    +'<div class="ss-rt"><span class="ss-ra badge '+rCls+' nc">'+s.rating+'</span><div class="ss-bs">'+pct(s.base||0)+' base</div></div></div>'
    +'<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px"><span class="cv '+cvCls+'" style="font-size:11px">&#9889; '+cv+'</span>'
    +'<a href="https://finance.yahoo.com/news/?symbols='+s.ticker+'" target="_blank" class="nws">&#128240; News</a></div>'
    +'<div class="sigs">'+sigChips(s)+'</div>'
    +'<div class="ss-prd"><div class="ss-p bear">Bear '+pct(s.bear||0)+'</div><div class="ss-p base">Base '+pct(s.base||0)+'</div><div class="ss-p bull">Bull +'+(s.bull||0)+'%</div></div>'
    +'<div class="ss-wh">'+(s.why||'')+'</div>'
    +'<button class="'+sCls()+'" onclick="buyStock(\''+s.ticker+'\',this)" '+(CONNECTED?'':'disabled')+'>Buy $'+ORDER_AMT+(bMode?' (P)':'')+'</button></div>';
}
function renderSectorDetail(name){
  var sec=SECTORS[name];
  var FKEYS=['all','pol','bil','inst','insider','options','retail','multi'];
  var FLBLS=['All','&#127963; Pol','&#128142; Bil','&#127970; Inst','&#128084; Insider','&#128202; Options','&#128241; Retail','3+ signals'];
  var fBtns=FKEYS.map(function(k,i){return '<button class="sig-btn'+(ACT_FILTER===k?' active':'')+'" onclick="ACT_FILTER=\''+k+'\';renderSectorDetail(\''+name+'\')">'+FLBLS[i]+'</button>';}).join('');
  function sigF(s){if(ACT_FILTER==='all')return true;if(ACT_FILTER==='multi')return Object.keys(SIG).filter(function(k){return s[k]&&s[k].length;}).length>=3;return s[ACT_FILTER]&&s[ACT_FILTER].length>0;}
  function score(s){return convScore(s)+(s.rating==='Strong Buy'?20:s.rating==='Moderate Buy'?10:0)+(s.base||0)/5;}
  var stocks=sec.stocks.map(function(tk){return getStockData(tk,sec);}).filter(function(s){return stockPass(s)&&sigF(s);}).sort(function(a,b){return score(b)-score(a);});
  var gems=sec.gems.map(function(tk){return getStockData(tk,sec);}).filter(function(s){return stockPass(s)&&sigF(s);}).sort(function(a,b){return score(b)-score(a);});
  document.getElementById('sectorDetail').innerHTML='<div class="sec-det"><div class="sd-hdr"><div style="display:flex;align-items:center;gap:8px"><span style="font-size:20px">'+sec.icon+'</span><div class="sd-t">'+name+'</div></div><button class="sd-cl" onclick="closeSectorDetail()">&#215; Close</button></div>'
    +'<div class="sig-fs">'+fBtns+'</div>'
    +(stocks.length?stocks.map(function(s){return ssRow(s,false);}).join(''):'<div class="empty" style="padding:1rem">No stocks match this filter</div>')
    +(gems.length?'<div class="sec-dv">&#11088; Hidden Gems in '+name+'</div>'+gems.map(function(g){return ssRow(g,true);}).join(''):'')
    +'</div>';
}

// ─── MODAL ────────────────────────────────────────────────────────────────────
function openSectorModal(sectorName){
  var sec=SECTORS[sectorName];if(!sec)return;
  document.getElementById('moT').textContent=sec.icon+' '+sectorName;
  document.getElementById('moS').textContent=sec.stocks.length+' stocks \u00b7 '+sec.gems.length+' hidden gems';
  document.getElementById('moB').innerHTML=sec.stocks.map(function(tk){return ssRow(getStockData(tk,sec),false);}).join('')
    +(sec.gems.length?'<div class="sec-dv">&#11088; Hidden Gems</div>'+sec.gems.map(function(tk){return ssRow(getStockData(tk,sec),true);}).join(''):'');
  document.getElementById('modalOv').classList.add('open');
}
function closeModal(){document.getElementById('modalOv').classList.remove('open');}
function maybeClose(e){if(e.target===document.getElementById('modalOv'))closeModal();}

// ─── SEARCH AUTOCOMPLETE ──────────────────────────────────────────────────────
var srchFocusIdx=-1;
function onSearchInput(inp){
  var val=(inp.value||'').trim();
  if(val.length<1){closeSearchDrop();return;}
  var upper=val.toUpperCase();
  var lower=val.toLowerCase();
  var results=SEARCH_DB.filter(function(s){
    if(s.t.startsWith(upper)) return true;
    var words=s.n.toLowerCase().split(' ');
    return words.some(function(w){return w.startsWith(lower);});
  }).slice(0,9);
  if(!results.length){closeSearchDrop();return;}
  var drop=document.getElementById('srchDrop');
  if(!drop) return;
  drop.innerHTML=results.map(function(s,i){
    var tHL=s.t.toUpperCase().startsWith(upper)?'<strong>'+s.t.slice(0,upper.length)+'</strong>'+s.t.slice(upper.length):s.t;
    var nHL=s.n;
    return '<div class="srch-item" data-idx="'+i+'" onclick="selectStock(\''+s.t+'\')" onmouseover="srchFocusIdx='+i+';updateFocus()">'
      +'<span class="srch-tk">'+tHL+'</span>'
      +'<span class="srch-nm">'+nHL+'</span>'
      +'<span class="srch-sc">'+s.s+'</span>'
      +'</div>';
  }).join('');
  drop.classList.add('open');
  srchFocusIdx=-1;
}
function onSearchKey(e){
  var drop=document.getElementById('srchDrop');
  if(!drop||!drop.classList.contains('open')){if(e.key==='Enter')searchStock();return;}
  var items=drop.querySelectorAll('.srch-item');
  if(e.key==='ArrowDown'){e.preventDefault();srchFocusIdx=Math.min(srchFocusIdx+1,items.length-1);updateFocus();}
  else if(e.key==='ArrowUp'){e.preventDefault();srchFocusIdx=Math.max(srchFocusIdx-1,-1);updateFocus();}
  else if(e.key==='Enter'){e.preventDefault();if(srchFocusIdx>=0&&items[srchFocusIdx]){items[srchFocusIdx].click();}else{closeSearchDrop();searchStock();}}
  else if(e.key==='Escape'){closeSearchDrop();}
}
function updateFocus(){
  var drop=document.getElementById('srchDrop');if(!drop) return;
  var items=drop.querySelectorAll('.srch-item');
  Array.prototype.forEach.call(items,function(it,i){
    it.classList.toggle('focused',i===srchFocusIdx);
    if(i===srchFocusIdx) it.scrollIntoView({block:'nearest'});
  });
}
function closeSearchDrop(){
  var drop=document.getElementById('srchDrop');
  if(drop){drop.classList.remove('open');drop.innerHTML='';}
  srchFocusIdx=-1;
}
function selectStock(ticker){
  var inp=document.getElementById('srchIn');if(inp) inp.value=ticker;
  closeSearchDrop();searchStock();
}
// close dropdown when clicking outside
document.addEventListener('click',function(e){if(!e.target.closest('.srch-wrap'))closeSearchDrop();});

// ─── SEARCH ───────────────────────────────────────────────────────────────────
function fmtCap(v){if(v>=1e12)return '$'+(v/1e12).toFixed(2)+'T';if(v>=1e9)return '$'+(v/1e9).toFixed(1)+'B';if(v>=1e6)return '$'+(v/1e6).toFixed(1)+'M';return '$'+v.toLocaleString();}
function searchStock(){
  var raw=((document.getElementById('srchIn')||{}).value||'').trim();
  var lower=raw.toLowerCase();
  // resolve company name to ticker
  var fromDB=SEARCH_DB.find(function(s){return s.n.toLowerCase()===lower||s.t.toLowerCase()===lower;});
  var ticker=(fromDB?fromDB.t:raw).toUpperCase();
  if(!ticker){showToast('Enter a company name or ticker symbol','err');return;}
  closeSearchDrop();
  out.innerHTML='<div class="spin"><div class="spn"></div><div class="spin-t">Looking up '+ticker+'...</div></div>';
  fetch(prx('https://query1.finance.yahoo.com/v7/finance/quote?symbols='+ticker)).then(function(r){return r.json();}).then(function(d){
    var q=(d&&d.quoteResponse&&d.quoteResponse.result||[])[0];
    if(!q||!q.regularMarketPrice){out.innerHTML='<div class="empty">No results for "'+ticker+'" -- check the symbol and try again</div>';return;}
    LIVE_PRICES[q.symbol]=q.regularMarketPrice;
    var dbStock=ALL_STOCKS.find(function(s){return s.ticker===q.symbol;});
    var price=q.regularMarketPrice||0;var chg=q.regularMarketChangePercent||0;var isUp=chg>=0;var bMode=MODE==='paper';
    var dbSection=dbStock?
      '<div style="margin-bottom:8px">'+convBadge(dbStock)+'</div><div class="sigs" style="margin:0 0 4px">'+sigChips(dbStock)+'</div>'+whosBuying(dbStock,false):
      '<div style="padding:10px 12px;background:var(--sf2);border-radius:10px;font-size:12px;color:var(--tx3);margin:8px 0">Not in our tracked database -- buy and research links available below.</div>';
    var buyBtns='<div style="display:flex;gap:8px;align-items:center;margin:14px 0;flex-wrap:wrap">'
      +'<button class="'+bCls()+'" onclick="buyStock(\''+q.symbol+'\',this)">Buy $'+ORDER_AMT+(bMode?' (P)':'')+'</button>'
      +'<button class="refresh-btn" style="margin:0" onclick="addToWL(\''+q.symbol+'\')">+ Watchlist</button>'
      +'<a href="https://finance.yahoo.com/news/?symbols='+q.symbol+'" target="_blank" class="nws">&#128240; News</a>'
      +'<a href="https://finviz.com/quote.ashx?t='+q.symbol+'" target="_blank" class="nws">Finviz</a>'
      +'</div>';
    out.innerHTML='<div class="card"><div class="tkr" style="font-size:26px;letter-spacing:-.5px">'+q.symbol+'</div>'
      +'<div class="co">'+(q.longName||q.shortName||q.symbol)+(q.exchangeName?' &nbsp;&middot;&nbsp; '+q.exchangeName:'')+'</div>'
      +'<div style="display:flex;align-items:baseline;gap:10px;margin-bottom:16px;flex-wrap:wrap"><span class="price">'+f$(price)+'</span><span style="font-size:16px;font-weight:700;color:'+(isUp?'#2e7d32':'#c62828')+'">'+(isUp?'+':'')+chg.toFixed(2)+'% today</span></div>'
      +'<div class="srch-st"><div class="astat"><div class="aval">'+(q.marketCap?fmtCap(q.marketCap):'--')+'</div><div class="albl">Market Cap</div></div>'
      +'<div class="astat"><div class="aval">'+(q.trailingPE?q.trailingPE.toFixed(1)+'x':'--')+'</div><div class="albl">Trailing P/E</div></div>'
      +'<div class="astat"><div class="aval">'+(q.fiftyTwoWeekHigh?f$(q.fiftyTwoWeekHigh):'--')+'</div><div class="albl">52W High</div></div>'
      +'<div class="astat"><div class="aval">'+(q.fiftyTwoWeekLow?f$(q.fiftyTwoWeekLow):'--')+'</div><div class="albl">52W Low</div></div></div>'
      +dbSection+buyBtns+bracketPanel(q.symbol)+articlesHTML(q.symbol)+'</div>';
  }).catch(function(e){out.innerHTML='<div class="empty">Search failed: '+(e.message||'Check your connection')+'</div>';});
}

// ─── PRICES + PICKS ───────────────────────────────────────────────────────────
var STEPS=['Fetching live prices...','Scoring all signals...','Running AI models...','Finalizing picks...'];
function fetchPrices(){
  return fetch(prx('https://query1.finance.yahoo.com/v7/finance/quote?symbols='+ALL_STOCKS.map(function(s){return s.ticker;}).join(','))).then(function(r){return r.json();}).then(function(d){
    (d&&d.quoteResponse&&d.quoteResponse.result||[]).forEach(function(q){var s=ALL_STOCKS.find(function(x){return x.ticker===q.symbol;});if(s&&q.regularMarketPrice){s.livePrice=q.regularMarketPrice;LIVE_PRICES[q.symbol]=q.regularMarketPrice;}});
    return true;
  }).catch(function(){return false;});
}
function getDailyPick(){
  var day=Math.floor(Date.now()/86400000);
  return DB.map(function(s,i){return Object.assign({},s,{score:s.polScore*0.55+s.conf*0.45+(day%(i+4)===0?6:0)});}).sort(function(a,b){return b.score-a.score;});
}
function renderPicks(sorted,live){
  var pick=sorted[0];var runners=sorted.slice(1,4);
  var p=pick.livePrice||pick.fb;var today=new Date().toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'});
  var allChips=(pick.pol||[]).map(function(x){return '<span class="chip">&#127963; '+x+'</span>';}).join('')+(pick.bil||[]).map(function(x){return '<span class="chip">&#128142; '+x+'</span>';}).join('');
  var liveTag=live&&pick.livePrice?'<span class="badge b-gray nc">Live price</span>':'<span class="badge b-gray nc">Est. price</span>';
  var bMode=MODE==='paper';
  var runnerHTML=runners.map(function(r){var rp=r.livePrice||r.fb;return '<div class="alt" onclick="openSectorModal(\''+r.sector+'\')"><div class="alt-t">'+r.ticker+'</div><div class="alt-co">'+r.company+'</div><div class="alt-p">'+f$(rp)+(live&&r.livePrice?'':' <span style="font-size:10px;color:var(--tx4)">est.</span>')+'</div><div class="alt-w">'+r.why.split('.')[0]+'.</div></div>';}).join('');
  var gemHTML=GEMS.map(function(g){
    var gp=g.livePrice||g.fb;
    return '<div class="gem"><div class="g-hdr"><div><div class="g-tk">'+g.ticker+'</div><div class="g-co">'+g.company+'</div>'
      +'<div class="g-bgs"><span class="badge '+g.tCls+'" onclick="openSectorModal(\''+g.sector+'\')">'+g.theme+' &#8599;</span><span class="badge b-gray nc">'+g.rating+'</span></div></div>'
      +'<div class="g-rt"><div class="g-pr">'+f$(gp)+(live&&g.livePrice?'':' <span style="font-size:10px;color:var(--tx4)">est.</span>')+'</div><div class="g-sh">$'+ORDER_AMT+' = '+((ORDER_AMT)/(gp)).toFixed(4)+' sh</div><div class="g-roi">'+pct(g.bear)+' to +'+g.bull+'%</div></div></div>'
      +'<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">'+convBadge(g)+'<a href="https://finance.yahoo.com/news/?symbols='+g.ticker+'" target="_blank" class="nws">&#128240; News</a></div>'
      +'<div class="sigs" style="margin-bottom:10px">'+sigChips(g)+'</div>'
      +whosBuying(g,true)
      +'<p class="g-why" style="margin-top:8px">'+g.why+'</p>'
      +'<div class="lbl">AI 12-month prediction</div>'
      +'<div class="scns"><div class="scn scn-bear"><div class="scn-nm">Bear</div><div class="scn-pct">'+pct(g.bear)+'</div><div class="scn-pb">'+g.bearP+'% likely</div><div class="pb-bg"><div class="pb" style="width:'+g.bearP+'%"></div></div></div>'
      +'<div class="scn scn-base"><div class="scn-nm">Base &#9733;</div><div class="scn-pct">'+pct(g.base)+'</div><div class="scn-pb">'+g.baseP+'% likely</div><div class="pb-bg"><div class="pb" style="width:'+g.baseP+'%"></div></div></div>'
      +'<div class="scn scn-bull"><div class="scn-nm">Bull</div><div class="scn-pct">+'+g.bull+'%</div><div class="scn-pb">'+g.bullP+'% likely</div><div class="pb-bg"><div class="pb" style="width:'+g.bullP+'%"></div></div></div></div>'
      +'<div class="cat">'+g.catalyst+'</div>'
      +'<button class="'+gCls()+'" onclick="buyStock(\''+g.ticker+'\',this)">Buy $'+ORDER_AMT+(bMode?' (Paper)':'')+'</button>'
      +bracketPanel(g.ticker)+'</div>';
  }).join('');
  document.getElementById('picksOut').innerHTML='<div class="dt-b">'+today+'</div>'
    +'<div class="card"><div class="tkr">'+pick.ticker+'</div><div class="co">'+pick.company+'</div>'
    +'<div class="badges"><span class="badge b-green nc">'+pick.rating+'</span><span class="badge b-blue nc">Top congressional buy</span><span class="badge '+pick.sCls+'" onclick="openSectorModal(\''+pick.sector+'\')">'+pick.sector+' &#8599;</span>'+liveTag+'</div>'
    +'<div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;flex-wrap:wrap">'+convBadge(pick)+'<a href="https://finance.yahoo.com/news/?symbols='+pick.ticker+'" target="_blank" class="nws">&#128240; News</a></div>'
    +'<div class="sigs" style="margin-bottom:12px">'+sigChips(pick)+'</div>'
    +'<div class="pr"><span class="price">'+f$(p)+'</span><span class="sh">$'+ORDER_AMT+' = '+((ORDER_AMT)/(p)).toFixed(4)+' shares</span>'
    +'<button class="'+bCls()+'" onclick="buyStock(\''+pick.ticker+'\',this)">Buy $'+ORDER_AMT+(bMode?' (Paper)':'')+'</button></div>'
    +bracketPanel(pick.ticker)
    +'<div class="lbl">Why this pick today</div><p class="why-t">'+pick.why+'</p>'
    +'<div class="lbl">Confidence score</div><div class="bar-bg"><div class="bar-fill" style="width:'+pick.conf+'%"></div></div>'
    +'<div class="cf-lbl"><span>Low</span><span style="font-weight:700;color:var(--tx)">'+pick.conf+'%</span><span>High</span></div>'
    +'<hr class="dvd">'
    +whosBuying(pick,false)
    +'<div class="lbl" style="margin-top:14px">Analyst consensus</div><p class="ctx">'+pick.anaCtx+'</p>'
    +articlesHTML(pick.ticker)+'</div>'
    +'<div class="lbl">Runner-up picks <span style="font-size:10px;color:var(--tx4)">-- click to explore that sector</span></div>'
    +'<div class="alt-grid">'+runnerHTML+'</div>'
    +'<div class="sh-hdr"><div class="sh-t">Hidden gem picks</div><div class="sh-s">Under-the-radar &middot; All 6 signal types &middot; AI predictions &middot; Click sector badge to see more</div></div>'
    +gemHTML;
}
function run(){
  var btn=document.getElementById('pickBtn');btn.disabled=true;btn.textContent='Researching...';
  var si=0;
  document.getElementById('picksOut').innerHTML='<div class="spin"><div class="spn"></div><div class="spin-t">Analyzing all signal sources</div><div class="spin-s" id="ss">'+STEPS[0]+'</div></div>';
  var t=setInterval(function(){si=(si+1)%STEPS.length;var el=document.getElementById('ss');if(el)el.textContent=STEPS[si];},1200);
  fetchPrices().then(function(live){
    clearInterval(t);renderPicks(getDailyPick(),live);
    btn.textContent='Refresh picks';btn.disabled=false;
  });
}

// Init
loadAB();
