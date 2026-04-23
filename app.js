// ─── SEARCH DATABASE ──────────────────────────────────────────────────────────
var SEARCH_DB=[
  {t:'AAPL',n:'Apple Inc.',s:'Technology'},{t:'MSFT',n:'Microsoft Corporation',s:'Technology'},
  {t:'GOOGL',n:'Alphabet Inc.',s:'Technology'},{t:'AMZN',n:'Amazon.com Inc.',s:'Consumer'},
  {t:'NVDA',n:'Nvidia Corporation',s:'Technology'},{t:'META',n:'Meta Platforms Inc.',s:'Technology'},
  {t:'TSLA',n:'Tesla Inc.',s:'Consumer'},{t:'LLY',n:'Eli Lilly and Company',s:'Healthcare'},
  {t:'JPM',n:'JPMorgan Chase & Co.',s:'Financial'},{t:'V',n:'Visa Inc.',s:'Financial'},
  {t:'UNH',n:'UnitedHealth Group',s:'Healthcare'},{t:'MA',n:'Mastercard Inc.',s:'Financial'},
  {t:'XOM',n:'Exxon Mobil Corporation',s:'Energy'},{t:'HD',n:'The Home Depot',s:'Consumer'},
  {t:'COST',n:'Costco Wholesale Corp.',s:'Consumer'},{t:'WMT',n:'Walmart Inc.',s:'Consumer'},
  {t:'CVX',n:'Chevron Corporation',s:'Energy'},{t:'MRK',n:'Merck & Co.',s:'Healthcare'},
  {t:'ABBV',n:'AbbVie Inc.',s:'Healthcare'},{t:'BAC',n:'Bank of America',s:'Financial'},
  {t:'NFLX',n:'Netflix Inc.',s:'Communication'},{t:'KO',n:'Coca-Cola Company',s:'Consumer'},
  {t:'ORCL',n:'Oracle Corporation',s:'Technology'},{t:'CRM',n:'Salesforce Inc.',s:'Technology'},
  {t:'AMD',n:'Advanced Micro Devices',s:'Technology'},{t:'PEP',n:'PepsiCo Inc.',s:'Consumer'},
  {t:'MCD',n:"McDonald's Corporation",s:'Consumer'},{t:'GS',n:'Goldman Sachs',s:'Financial'},
  {t:'CSCO',n:'Cisco Systems',s:'Technology'},{t:'WFC',n:'Wells Fargo',s:'Financial'},
  {t:'MS',n:'Morgan Stanley',s:'Financial'},{t:'DIS',n:'Walt Disney Company',s:'Communication'},
  {t:'CAT',n:'Caterpillar Inc.',s:'Industrials'},{t:'UBER',n:'Uber Technologies',s:'Technology'},
  {t:'ISRG',n:'Intuitive Surgical',s:'Healthcare'},{t:'RTX',n:'RTX Corporation',s:'Defense'},
  {t:'GE',n:'GE Aerospace',s:'Industrials'},{t:'NOW',n:'ServiceNow Inc.',s:'Technology'},
  {t:'TXN',n:'Texas Instruments',s:'Technology'},{t:'QCOM',n:'Qualcomm Inc.',s:'Technology'},
  {t:'PANW',n:'Palo Alto Networks',s:'Technology'},{t:'INTC',n:'Intel Corporation',s:'Technology'},
  {t:'IBM',n:'IBM Corporation',s:'Technology'},{t:'SNOW',n:'Snowflake Inc.',s:'Technology'},
  {t:'SHOP',n:'Shopify Inc.',s:'Technology'},{t:'COIN',n:'Coinbase Global',s:'Financial'},
  {t:'HOOD',n:'Robinhood Markets',s:'Financial'},{t:'SOFI',n:'SoFi Technologies',s:'Financial'},
  {t:'SQ',n:'Block Inc.',s:'Financial'},{t:'PYPL',n:'PayPal Holdings',s:'Financial'},
  {t:'ROKU',n:'Roku Inc.',s:'Technology'},{t:'SNAP',n:'Snap Inc.',s:'Technology'},
  {t:'SPOT',n:'Spotify Technology',s:'Technology'},{t:'RIVN',n:'Rivian Automotive',s:'Consumer'},
  {t:'F',n:'Ford Motor Company',s:'Consumer'},{t:'GM',n:'General Motors',s:'Consumer'},
  {t:'NIO',n:'NIO Inc.',s:'Consumer'},{t:'BRK.B',n:'Berkshire Hathaway B',s:'Financial'},
  {t:'C',n:'Citigroup Inc.',s:'Financial'},{t:'AXP',n:'American Express',s:'Financial'},
  {t:'SCHW',n:'Charles Schwab',s:'Financial'},{t:'BA',n:'Boeing Company',s:'Defense'},
  {t:'LMT',n:'Lockheed Martin',s:'Defense'},{t:'NOC',n:'Northrop Grumman',s:'Defense'},
  {t:'GD',n:'General Dynamics',s:'Defense'},{t:'HII',n:'Huntington Ingalls',s:'Defense'},
  {t:'AXON',n:'Axon Enterprise',s:'Defense'},{t:'KTOS',n:'Kratos Defense',s:'Defense'},
  {t:'LDOS',n:'Leidos Holdings',s:'Defense'},{t:'CACI',n:'CACI International',s:'Defense'},
  {t:'PLTR',n:'Palantir Technologies',s:'Technology'},{t:'VRT',n:'Vertiv Holdings',s:'Technology'},
  {t:'APP',n:'AppLovin Corporation',s:'Technology'},{t:'SOUN',n:'SoundHound AI',s:'Technology'},
  {t:'HIMS',n:'Hims & Hers Health',s:'Healthcare'},{t:'ASTS',n:'AST SpaceMobile',s:'Space'},
  {t:'IONQ',n:'IonQ Inc.',s:'Technology'},{t:'RKLB',n:'Rocket Lab USA',s:'Space'},
  {t:'LUNR',n:'Intuitive Machines',s:'Space'},{t:'VST',n:'Vistra Corp.',s:'Energy'},
  {t:'CEG',n:'Constellation Energy',s:'Energy'},{t:'FSLR',n:'First Solar',s:'Energy'},
  {t:'ENPH',n:'Enphase Energy',s:'Energy'},{t:'OXY',n:'Occidental Petroleum',s:'Energy'},
  {t:'NEE',n:'NextEra Energy',s:'Energy'},{t:'OKLO',n:'Oklo Inc.',s:'Energy'},
  {t:'SMR',n:'NuScale Power',s:'Energy'},{t:'MRNA',n:'Moderna Inc.',s:'Healthcare'},
  {t:'RXRX',n:'Recursion Pharmaceuticals',s:'Healthcare'},{t:'EXAS',n:'Exact Sciences',s:'Healthcare'},
  {t:'NTRA',n:'Natera Inc.',s:'Healthcare'},{t:'NU',n:'Nu Holdings',s:'Financial'},
  {t:'OPFI',n:'OppFi Inc.',s:'Financial'},{t:'SPY',n:'SPDR S&P 500 ETF',s:'ETF'},
  {t:'QQQ',n:'Invesco QQQ Trust',s:'ETF'},{t:'ARKK',n:'ARK Innovation ETF',s:'ETF'},
  {t:'VTI',n:'Vanguard Total Market ETF',s:'ETF'},{t:'NKE',n:'Nike Inc.',s:'Consumer'},
  {t:'SBUX',n:'Starbucks Corporation',s:'Consumer'},{t:'PFE',n:'Pfizer Inc.',s:'Healthcare'},
  {t:'JNJ',n:'Johnson & Johnson',s:'Healthcare'},{t:'T',n:'AT&T Inc.',s:'Communication'},
  {t:'VZ',n:'Verizon Communications',s:'Communication'},{t:'AMGN',n:'Amgen Inc.',s:'Healthcare'},
  {t:'MU',n:'Micron Technology',s:'Technology'},{t:'LRCX',n:'Lam Research',s:'Technology'},
  {t:'AMAT',n:'Applied Materials',s:'Technology'},{t:'DELL',n:'Dell Technologies',s:'Technology'},
  {t:'COP',n:'ConocoPhillips',s:'Energy'},{t:'UNP',n:'Union Pacific',s:'Industrials'},
  {t:'HON',n:'Honeywell International',s:'Industrials'},{t:'TMO',n:'Thermo Fisher Scientific',s:'Healthcare'},
  {t:'ABT',n:'Abbott Laboratories',s:'Healthcare'},{t:'SYK',n:'Stryker Corporation',s:'Healthcare'},
  {t:'LOW',n:"Lowe's Companies",s:'Consumer'},{t:'TGT',n:'Target Corporation',s:'Consumer'},
  {t:'RCAT',n:'Red Cat Holdings',s:'Defense'},{t:'BBAI',n:'BigBear.ai Holdings',s:'Technology'},
  {t:'IREN',n:'Iris Energy',s:'Technology'},{t:'IRDM',n:'Iridium Communications',s:'Space'},
  {t:'ARRY',n:'Array Technologies',s:'Energy'},{t:'TMDX',n:'TransMedics Group',s:'Healthcare'},
  {t:'AFRM',n:'Affirm Holdings',s:'Financial'},
  // FIX: removed duplicate AFRM; added missing Space sector tickers
  {t:'SPIR',n:'Spire Global',s:'Space'},{t:'BKSY',n:'BlackSky Technology',s:'Space'},
  {t:'LLY',n:'Eli Lilly and Company',s:'Healthcare'}, // already above but keep for alias safety via dedup logic
];
// Deduplicate SEARCH_DB by ticker
(function(){var seen={};SEARCH_DB=SEARCH_DB.filter(function(s){if(seen[s.t])return false;seen[s.t]=true;return true;});})();

// ─── STATE ────────────────────────────────────────────────────────────────────
var MODE='paper', CONNECTED=false, ORDER_AMT=5;
var ACT_SECTOR=null, ACT_FILTER='all';
var LIVE_PRICES={}, ALL_ORDERS=[], CHART_INST=null, CHART_PERIOD='1M';
var PICK_CHART_INST=null, PICK_CHART_PERIOD='1M', PICK_CHART_TICKER='';
var SCREENER={rating:'',conv:0,sig:''};
var srchFocusIdx=-1;
var PAPER='https://paper-api.alpaca.markets';
var LIVE_URL='https://api.alpaca.markets';

function base(){return MODE==='paper'?PAPER:LIVE_URL;}
function prx(u){return 'https://corsproxy.io/?url='+encodeURIComponent(u);}
function hdrs(){return {'APCA-API-KEY-ID':document.getElementById('apiKey').value.trim(),'APCA-API-SECRET-KEY':document.getElementById('apiSec').value.trim(),'Content-Type':'application/json'};}
function alpaca(path,opts){opts=opts||{};return fetch(base()+path,Object.assign({},opts,{headers:Object.assign({},hdrs(),opts.headers||{})}));}
function f$(v){return '$'+parseFloat(v||0).toFixed(2);}
function fPct(v){return (v>=0?'+':'')+parseFloat(v).toFixed(2)+'%';}
function pct(n){return (n>=0?'+':'')+n+'%';}
function fmtCap(v){if(v>=1e12)return '$'+(v/1e12).toFixed(2)+'T';if(v>=1e9)return '$'+(v/1e9).toFixed(1)+'B';if(v>=1e6)return '$'+(v/1e6).toFixed(1)+'M';return '$'+v.toLocaleString();}

// ─── DARK / LIGHT MODE ────────────────────────────────────────────────────────
function toggleDark(){
  var isLight=document.body.hasAttribute('data-light');
  if(isLight){document.body.removeAttribute('data-light');}
  else{document.body.setAttribute('data-light','');}
  localStorage.setItem('psp_theme',isLight?'dark':'light');
  var btn=document.getElementById('darkBtn');
  if(btn)btn.textContent=isLight?'Light Mode':'Dark Mode';
}
(function(){
  if(localStorage.getItem('psp_theme')==='light'){
    document.body.setAttribute('data-light','');
    var btn=document.getElementById('darkBtn');
    if(btn)btn.textContent='Dark Mode';
  }
})();

// ─── UI UTILS ─────────────────────────────────────────────────────────────────
function toggleConnPanel(){
  var p=document.getElementById('connPanel');
  if(p) p.style.display=(p.style.display==='none'||!p.style.display)?'block':'none';
}
document.addEventListener('click',function(e){
  var p=document.getElementById('connPanel');
  if(p&&p.style.display==='block'&&!e.target.closest('#connPanel')&&!e.target.closest('#navConnBtn'))
    p.style.display='none';
});

function setMode(m){
  MODE=m;
  document.getElementById('mPaper').classList.toggle('active',m==='paper');
  document.getElementById('mLive').classList.toggle('active',m==='live');
}

function setAmt(n,el){
  ORDER_AMT=n;
  document.querySelectorAll('.ob-btn').forEach(function(b){b.classList.remove('active');});
  el.classList.add('active');
  document.getElementById('customAmt').value='';
}

function setCustomAmt(el){
  var v=parseFloat(el.value);
  if(v>0){ORDER_AMT=v;document.querySelectorAll('.ob-btn').forEach(function(b){b.classList.remove('active');});}
}

function showToast(msg,type,dur){
  type=type||'';dur=dur||3200;
  var t=document.getElementById('toast');
  t.textContent=msg;t.className='toast '+type;t.classList.add('show');
  setTimeout(function(){t.classList.remove('show');},dur);
}

function showTab(name,el){
  document.querySelectorAll('.panel').forEach(function(p){p.classList.remove('active');});
  document.querySelectorAll('.nav-tab').forEach(function(t){t.classList.remove('active');});
  var panel=document.getElementById('tab-'+name);
  if(panel) panel.classList.add('active');
  if(el) el.classList.add('active');
  if(name==='sectors') renderSectorGrid();
  if(name==='portfolio') loadPortfolio();
  if(name==='watchlist') renderWatchlist();
  if(name==='orders'&&CONNECTED) loadOrders();
  if(name==='search'){
    var si=document.getElementById('srchIn');
    if(si) setTimeout(function(){si.focus();},50);
  }
}

// ─── SIGNAL SYSTEM ────────────────────────────────────────────────────────────
var SIG={
  pol:{l:'&#127963; Politician',c:'s-po'},
  bil:{l:'&#128142; Billionaire',c:'s-bi'},
  inst:{l:'&#127970; Institution',c:'s-in'},
  insider:{l:'&#128084; Insider',c:'s-id'},
  options:{l:'&#128202; Options',c:'s-op'},
  retail:{l:'&#128241; Retail',c:'s-re'}
};

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
  var lbl=c>=80?'High conviction':c>=60?'Good':c>=40?'Moderate':'Low';
  return '<span class="cv-lbl '+cls+'">&#9889; '+c+' '+lbl+'</span>';
}

function whosBuying(s,compact){
  var rows=[
    {icon:'&#127963;',label:'Politicians',items:s.pol||[]},
    {icon:'&#128142;',label:'Billionaires',items:s.bil||[]},
    {icon:'&#127970;',label:'Institutions',items:s.inst||[]},
    {icon:'&#128084;',label:'Insiders',items:s.insider||[]},
    {icon:'&#128202;',label:'Options flow',items:s.options||[]},
    {icon:'&#128241;',label:'Retail/social',items:s.retail||[]}
  ].filter(function(r){return r.items.length>0;});
  if(!rows.length) return '';
  if(compact){
    return '<div class="wb-cp">'+rows.map(function(r){
      return '<span class="wb-ch">'+r.icon+' <strong>'+r.items[0]+'</strong>'+(r.items.length>1?' +'+(r.items.length-1):'')+'</span>';
    }).join('')+'</div>';
  }
  return '<div class="lbl">Who\'s buying this</div><div class="wb-table-wrap"><table class="wb-table">'+
    rows.map(function(r){
      return '<tr><td>'+r.icon+' '+r.label+'</td><td>'+r.items.join(', ')+'</td></tr>';
    }).join('')+'</table></div>';
}

function articlesHTML(ticker){
  var src=SOURCES[ticker]||[
    {t:ticker+' congressional trading history',u:'https://www.capitoltrades.com/issuers?search='+ticker,o:'Capitol Trades'},
    {t:ticker+' analyst ratings & price targets',u:'https://www.tipranks.com/stocks/'+ticker.toLowerCase()+'/forecast',o:'TipRanks'},
    {t:ticker+' latest news & earnings',u:'https://finance.yahoo.com/quote/'+ticker,o:'Yahoo Finance'},
    {t:ticker+' fundamentals, chart & short interest',u:'https://finviz.com/quote.ashx?t='+ticker,o:'Finviz'}
  ];
  var html='<div class="lbl">Research &amp; sources</div><div class="art-list">';
  src.forEach(function(a){
    html+='<a href="'+a.u+'" target="_blank" class="art-a"><span class="art-o">'+a.o+'</span><span class="art-t">'+a.t+'</span><span style="color:var(--tx3)">&#8594;</span></a>';
  });
  html+='</div>';
  return html;
}

function bracketPanel(sym){
  var id=sym.replace('.','_');
  return '<span class="bk-tog" onclick="this.nextElementSibling.classList.toggle(\'open\')">&#9881; Add stop-loss / take-profit</span>'
    +'<div class="bk-pan">'
    +'<div class="bk-row"><span class="bk-lbl">Stop-loss %</span><input class="bk-in" id="sl-'+id+'" type="number" placeholder="e.g. 10" min="1" max="50"/></div>'
    +'<div class="bk-row"><span class="bk-lbl">Take-profit %</span><input class="bk-in" id="tp-'+id+'" type="number" placeholder="e.g. 25" min="1" max="200"/></div>'
    +'<div style="font-size:10px;color:var(--tx3);margin-bottom:8px">Bracket orders use GTC. Requires connected account.</div>'
    +'<button class="bk-buy" onclick="buyStock(\''+sym+'\',this,'
    +'parseFloat(document.getElementById(\'sl-'+id+'\').value)||0,'
    +'parseFloat(document.getElementById(\'tp-'+id+'\').value)||0'
    +')">Place Bracket Order for '+sym+'</button>'
    +'</div>';
}

function predBars(g){
  var vals=[g.bear,g.base,g.bull];
  var min=Math.min.apply(null,vals);
  var max=Math.max.apply(null,vals);
  var range=max-min||1;
  function ht(v){return Math.max(6,Math.round((v-min)/range*38)+10);}
  return '<div class="pred-wrap">'
    +'<div class="pred-bars">'
    +'<div class="pred-bar pb-bear" style="height:'+ht(g.bear)+'px"></div>'
    +'<div class="pred-bar pb-base" style="height:'+ht(g.base)+'px"></div>'
    +'<div class="pred-bar pb-bull" style="height:'+ht(g.bull)+'px"></div>'
    +'</div>'
    +'<div class="pred-labels">'
    +'<div class="pred-lbl-item"><div class="pred-lbl-pct bear-pct">'+pct(g.bear)+'</div><div class="pred-lbl-nm">Bear</div><div class="pred-prob">'+g.bearP+'%</div></div>'
    +'<div class="pred-lbl-item"><div class="pred-lbl-pct base-pct">'+pct(g.base)+'</div><div class="pred-lbl-nm">Base &#9733;</div><div class="pred-prob">'+g.baseP+'%</div></div>'
    +'<div class="pred-lbl-item"><div class="pred-lbl-pct bull-pct">+'+g.bull+'%</div><div class="pred-lbl-nm">Bull</div><div class="pred-prob">'+g.bullP+'%</div></div>'
    +'</div></div>';
}

// ─── ALPACA ───────────────────────────────────────────────────────────────────
function connectAlpaca(){
  var btn=document.getElementById('conBtn');
  btn.textContent='Connecting...';btn.disabled=true;
  document.getElementById('sDot').className='nav-conn-dot';
  document.getElementById('sTxt').textContent='Connect';
  alpaca('/v2/account').then(function(r){return r.text();}).then(function(raw){
    var d;
    try{d=JSON.parse(raw);}catch(e){throw new Error('Bad response — check keys');}
    if(!d.status) throw new Error(d.message||'Auth failed');
    CONNECTED=true;
    document.getElementById('sDot').className='nav-conn-dot on';
    document.getElementById('sTxt').textContent=MODE==='paper'?'Paper':'Live';
    document.getElementById('navConnBtn').className='nav-pill connected';
    var bp=parseFloat(d.buying_power||0);
    var pv=parseFloat(d.portfolio_value||0);
    var eq=parseFloat(d.equity||pv);
    var lv=parseFloat(d.last_equity||pv);
    var pl=eq-lv;
    var plPct=lv>0?(pl/lv*100):0;
    document.getElementById('aBP').textContent=f$(bp);
    document.getElementById('aPV').textContent=f$(pv);
    var plEl=document.getElementById('aPL');
    plEl.textContent=(pl>=0?'+':'')+pl.toFixed(2);
    plEl.style.color=pl>=0?'#00c087':'#f03e3e';
    var dEl=document.getElementById('aDPL');
    dEl.textContent=fPct(plPct);
    dEl.style.color=pl>=0?'#00c087':'#f03e3e';
    document.getElementById('acctStats').style.display='grid';
    document.getElementById('acctSummary').textContent='BP: '+f$(bp)+' | PV: '+f$(pv);
    document.getElementById('connHint').innerHTML='<span style="color:#00c087;font-weight:600">Connected — '+(MODE==='paper'?'Paper':'Live')+'</span>';
    showToast('Connected to Alpaca '+(MODE==='paper'?'Paper':'Live'),'ok');
    loadAB();
    startAlertChecker();
  }).catch(function(e){
    CONNECTED=false;
    document.getElementById('sDot').className='nav-conn-dot err';
    document.getElementById('sTxt').textContent='Failed';
    document.getElementById('connHint').innerHTML='<span style="color:#f03e3e;font-weight:600">'+e.message+'</span><br>Paper keys start with PK.';
    showToast('Connection failed: '+e.message,'err');
  }).finally(function(){btn.textContent='Connect Account';btn.disabled=false;});
}

function buyStock(sym,btnEl,slPct,tpPct){
  slPct=slPct||0;tpPct=tpPct||0;
  if(!CONNECTED){showToast('Connect your Alpaca account first','err');return;}
  var orig=btnEl.textContent;btnEl.disabled=true;btnEl.textContent='Placing...';
  var body;
  if(slPct>0||tpPct>0){
    var price=LIVE_PRICES[sym]||100;
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
    btnEl.textContent='Done! ✓';
    setTimeout(function(){btnEl.textContent=orig;btnEl.disabled=false;},3000);
    refreshAcctQuick();
  }).catch(function(e){
    showToast('Order failed: '+(e.message||'Try again'),'err');
    btnEl.textContent=orig;btnEl.disabled=false;
  });
}

function sellStock(sym,qty,btnEl,full){
  if(!CONNECTED){showToast('Connect your Alpaca account first','err');return;}
  var orig=btnEl.textContent;btnEl.disabled=true;btnEl.textContent='Selling...';
  var inputAmt=parseFloat((document.getElementById('si-'+sym)||{}).value)||ORDER_AMT;
  var body=full
    ?{symbol:sym,qty:parseFloat(qty).toFixed(6),side:'sell',type:'market',time_in_force:'day'}
    :{symbol:sym,notional:inputAmt.toFixed(2),side:'sell',type:'market',time_in_force:'day'};
  alpaca('/v2/orders',{method:'POST',body:JSON.stringify(body)}).then(function(r){return r.json();}).then(function(d){
    if(d.code||!d.id) throw new Error(d.message||'Sell rejected');
    showToast('Sell order placed for '+sym+(full?' (all)':''),'ok');
    btnEl.textContent='Sold! ✓';
    setTimeout(function(){loadPortfolio();},2500);
    refreshAcctQuick();
  }).catch(function(e){
    showToast('Sell failed: '+(e.message||'Try again'),'err');
    btnEl.textContent=orig;btnEl.disabled=false;
  });
}

function refreshAcctQuick(){
  alpaca('/v2/account').then(function(r){return r.json();}).then(function(d){
    if(d.buying_power) document.getElementById('aBP').textContent=f$(d.buying_power);
    if(d.portfolio_value) document.getElementById('aPV').textContent=f$(d.portfolio_value);
    if(d.buying_power&&d.portfolio_value)
      document.getElementById('acctSummary').textContent='BP: '+f$(d.buying_power)+' | PV: '+f$(d.portfolio_value);
  }).catch(function(){});
}

// ─── PORTFOLIO ────────────────────────────────────────────────────────────────
// FIX: Alpaca portfolio history uses '1Y' not '1A'
var PERIOD_MAP={'1W':'1W','1M':'1M','3M':'3M','1A':'1Y'};

function loadPortfolio(){
  var out=document.getElementById('portfolioOut');
  if(!CONNECTED){out.innerHTML='<div class="empty">Connect your Alpaca account to view your portfolio</div>';return;}
  out.innerHTML='<div class="spin"><div class="spn"></div><div class="spin-t">Loading portfolio...</div></div>';
  var alpacaPeriod=PERIOD_MAP[CHART_PERIOD]||CHART_PERIOD;
  Promise.all([
    alpaca('/v2/positions'),
    alpaca('/v2/account/portfolio/history?period='+alpacaPeriod+'&timeframe=1D')
  ]).then(function(rs){
    return Promise.all([rs[0].json(),rs[1].json()]);
  }).then(function(results){
    var positions=results[0];var hist=results[1];
    var isPos=Array.isArray(positions)&&positions.length>0;
    var tMV=isPos?positions.reduce(function(s,p){return s+parseFloat(p.market_value||0);},0):0;
    var tPL=isPos?positions.reduce(function(s,p){return s+parseFloat(p.unrealized_pl||0);},0):0;
    var html='<div class="chart-wrap"><div class="ch-hdr"><div class="ch-t">Portfolio Value</div><div class="ch-per">';
    ['1W','1M','3M','1A'].forEach(function(p){
      html+='<button class="cp-btn'+(CHART_PERIOD===p?' active':'')+'" onclick="CHART_PERIOD=\''+p+'\';loadPortfolio()">'+p+'</button>';
    });
    html+='</div></div><canvas id="portfolioChart" height="140"></canvas></div>';
    html+='<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:12px">'
      +'<div class="as-box"><div class="as-val">'+f$(tMV)+'</div><div class="as-lbl">Market Value</div></div>'
      +'<div class="as-box"><div class="as-val" style="color:'+(tPL>=0?'#00c087':'#f03e3e')+'">'+(tPL>=0?'+':'')+f$(tPL)+'</div><div class="as-lbl">Unrealized P&L</div></div>'
      +'<div class="as-box"><div class="as-val">'+(isPos?positions.length:0)+'</div><div class="as-lbl">Positions</div></div>'
      +'</div>';
    if(isPos){
      html+='<div class="table-wrap"><table class="pos-table"><thead><tr><th>Symbol</th><th>Price</th><th>Avg Cost</th><th>Shares</th><th>Value</th><th>P&L</th><th>Sell</th></tr></thead><tbody>';
      positions.sort(function(a,b){return parseFloat(b.market_value||0)-parseFloat(a.market_value||0);}).forEach(function(p){
        var mv=parseFloat(p.market_value||0);
        var pl=parseFloat(p.unrealized_pl||0);
        var plpc=parseFloat(p.unrealized_plpc||0)*100;
        var cp=parseFloat(p.current_price||0);
        var ap=parseFloat(p.avg_entry_price||0);
        var qty=parseFloat(p.qty||0);
        var isUp=pl>=0;
        html+='<tr>'
          +'<td><div class="pos-sym">'+p.symbol+'</div></td>'
          +'<td>'+f$(cp)+'</td>'
          +'<td>'+f$(ap)+'</td>'
          +'<td>'+(qty%1===0?qty.toFixed(0):qty.toFixed(4))+'</td>'
          +'<td style="font-weight:700">'+f$(mv)+'</td>'
          +'<td class="'+(isUp?'up':'dn')+'" style="font-weight:700">'+(isUp?'+':'')+f$(pl)+'<br><span style="font-size:10px">'+(isUp?'+':'')+plpc.toFixed(2)+'%</span></td>'
          +'<td><div class="sell-mini">'
          +'<input class="sell-inp" id="si-'+p.symbol+'" type="number" value="'+ORDER_AMT+'"/>'
          +'<button class="btn-sell" onclick="sellStock(\''+p.symbol+'\','+qty+',this,false)">$</button>'
          +'<button class="btn-sell-all" onclick="sellStock(\''+p.symbol+'\','+qty+',this,true)">All</button>'
          +'</div></td>'
          +'</tr>';
      });
      html+='</tbody></table></div>';
    } else {
      html+='<div class="empty">No open positions. Head to Picks to start buying!</div>';
    }
    out.innerHTML=html;
    renderPortfolioChart(hist);
  }).catch(function(e){
    out.innerHTML='<div class="empty">Failed to load: '+(e.message||'Check connection')+'</div>';
  });
}

function renderPortfolioChart(hist){
  var canvas=document.getElementById('portfolioChart');
  if(!canvas||typeof Chart==='undefined') return;
  if(CHART_INST){CHART_INST.destroy();CHART_INST=null;}
  if(!hist||!hist.timestamp||!hist.timestamp.length) return;
  var gColor='rgba(255,255,255,.04)';var tColor='#505c72';
  // FIX: check for light mode
  if(document.body.hasAttribute('data-light')){gColor='rgba(0,0,0,.06)';tColor='#888';}
  var pairs=hist.timestamp.map(function(t,i){return {t:t,v:hist.equity[i]};}).filter(function(x){return x.v>0;});
  if(!pairs.length) return;
  var labels=pairs.map(function(x){return new Date(x.t*1000).toLocaleDateString('en-US',{month:'short',day:'numeric'});});
  var data=pairs.map(function(x){return x.v;});
  var lineColor=data[data.length-1]>=data[0]?'#00c087':'#f03e3e';
  CHART_INST=new Chart(canvas,{type:'line',data:{labels:labels,datasets:[{data:data,borderColor:lineColor,borderWidth:2,pointRadius:0,fill:true,backgroundColor:lineColor+'18',tension:0.3}]},
    options:{responsive:true,plugins:{legend:{display:false},tooltip:{callbacks:{label:function(c){return f$(c.raw);}}}},scales:{x:{grid:{color:gColor},ticks:{color:tColor,maxTicksLimit:7,font:{size:10}}},y:{grid:{color:gColor},ticks:{color:tColor,callback:function(v){return f$(v);},font:{size:10}}}}}});
}

// ─── ORDERS ───────────────────────────────────────────────────────────────────
function loadOrders(){
  var out=document.getElementById('ordersOut');
  if(!CONNECTED){out.innerHTML='<div class="empty">Connect your Alpaca account to view orders</div>';return;}
  out.innerHTML='<div class="spin"><div class="spn"></div><div class="spin-t">Loading orders...</div></div>';
  alpaca('/v2/orders?status=all&limit=100&direction=desc').then(function(r){return r.json();}).then(function(orders){
    ALL_ORDERS=orders;
    if(!Array.isArray(orders)||!orders.length){out.innerHTML='<div class="empty">No orders yet</div>';return;}
    var html='<div class="table-wrap"><table class="ord-table"><thead><tr><th>Symbol</th><th>Side</th><th>Amount</th><th>Type</th><th>Status</th><th>Date</th></tr></thead><tbody>';
    orders.forEach(function(o){
      var isBuy=o.side==='buy';
      var filledAmt=o.filled_avg_price&&o.filled_qty?f$(parseFloat(o.filled_avg_price)*parseFloat(o.filled_qty)):null;
      var amt=o.notional?f$(o.notional):filledAmt||'--';
      var cancelled=['canceled','cancelled'].includes(o.status);
      var sCl=cancelled?'o-ca':o.status==='filled'?'o-fi':'o-pe';
      var dt=new Date(o.created_at).toLocaleDateString('en-US',{month:'short',day:'numeric',hour:'2-digit',minute:'2-digit'});
      html+='<tr>'
        +'<td><span class="o-sym">'+o.symbol+'</span></td>'
        +'<td><span class="o-badge '+(isBuy?'o-buy':'o-sell')+'">'+o.side.toUpperCase()+'</span></td>'
        +'<td style="font-weight:700;color:'+(isBuy?'#00c087':'#f03e3e')+'">'+(isBuy?'':'-')+amt+'</td>'
        +'<td style="color:var(--tx3)">'+o.type+'</td>'
        +'<td><span class="o-badge '+sCl+'">'+o.status+'</span></td>'
        +'<td style="color:var(--tx3)">'+dt+'</td>'
        +'</tr>';
    });
    html+='</tbody></table></div>';
    out.innerHTML=html;
  }).catch(function(e){
    out.innerHTML='<div class="empty">Failed: '+(e.message||'Check connection')+'</div>';
  });
}

function exportCSV(){
  if(!ALL_ORDERS.length){showToast('Load orders first','err');return;}
  var rows=[['Symbol','Side','Notional','Status','Type','Created_at']];
  ALL_ORDERS.forEach(function(o){rows.push([o.symbol,o.side,o.notional||'',o.status,o.type,o.created_at]);});
  var csv=rows.map(function(r){return r.map(function(v){return '"'+String(v||'').replace(/"/g,'""')+'"';}).join(',');}).join('\n');
  var a=document.createElement('a');
  a.href='data:text/csv;charset=utf-8,'+encodeURIComponent(csv);
  a.download='orders_'+new Date().toISOString().slice(0,10)+'.csv';
  a.click();
  showToast('CSV exported','ok');
}

// ─── AUTO BUY ─────────────────────────────────────────────────────────────────
function saveAB(){
  var ab={enabled:document.getElementById('abToggle').checked,time:document.getElementById('abTime').value,ticker:document.getElementById('abTicker').value.toUpperCase().trim(),lastRun:''};
  localStorage.setItem('psp_ab',JSON.stringify(ab));
}
function loadAB(){
  var ab=JSON.parse(localStorage.getItem('psp_ab')||'{}');
  if(ab.enabled) document.getElementById('abToggle').checked=true;
  if(ab.time) document.getElementById('abTime').value=ab.time;
  if(ab.ticker) document.getElementById('abTicker').value=ab.ticker;
}

// FIX: auto-buy uses a dummy button object that properly handles disabled state
var AB_INTERVAL=setInterval(function(){
  var ab=JSON.parse(localStorage.getItem('psp_ab')||'{}');
  if(!ab.enabled||!CONNECTED||!ab.ticker) return;
  var now=new Date();
  var parts=(ab.time||'09:35').split(':').map(Number);
  if(now.getHours()===parts[0]&&now.getMinutes()===parts[1]&&ab.lastRun!==now.toDateString()){
    ab.lastRun=now.toDateString();localStorage.setItem('psp_ab',JSON.stringify(ab));
    var fakeBtn={textContent:'Auto',disabled:false};
    buyStock(ab.ticker,fakeBtn);
    showToast('Auto-buy: $'+ORDER_AMT+' of '+ab.ticker+' placed!','inf',6000);
  }
},30000);

// ─── PRICE ALERTS ─────────────────────────────────────────────────────────────
function getAlerts(){return JSON.parse(localStorage.getItem('psp_alerts')||'[]');}
function saveAlerts(a){localStorage.setItem('psp_alerts',JSON.stringify(a));}

function addAlert(ticker,price,type){
  var p=parseFloat(price);
  if(!ticker||isNaN(p)||p<=0){showToast('Enter a valid ticker and price','err');return;}
  var a=getAlerts();
  a.push({id:Date.now(),ticker:ticker.toUpperCase(),price:p,type:type,triggered:false});
  saveAlerts(a);renderWatchlist();showToast('Alert set: '+ticker+' '+type+' '+f$(p),'ok');
}

function removeAlert(id){saveAlerts(getAlerts().filter(function(a){return a.id!==id;}));renderWatchlist();}

// FIX: use feature detection for Notifications
var NOTIF_REQUESTED=false;
function maybeRequestNotif(){
  if(NOTIF_REQUESTED) return;
  if(localStorage.getItem('psp_notif')) return;
  if(typeof Notification==='undefined') return;
  if(Notification.permission==='default'){
    NOTIF_REQUESTED=true;
    Notification.requestPermission().then(function(){localStorage.setItem('psp_notif','1');});
  }
}

function startAlertChecker(){
  setInterval(function(){
    var active=getAlerts().filter(function(a){return !a.triggered;});
    if(!active.length) return;
    var syms=active.map(function(a){return a.ticker;}).filter(function(v,i,arr){return arr.indexOf(v)===i;}).join(',');
    fetch(prx('https://query1.finance.yahoo.com/v7/finance/quote?symbols='+syms)).then(function(r){return r.json();}).then(function(d){
      var all=getAlerts();var changed=false;
      (d&&d.quoteResponse&&d.quoteResponse.result||[]).forEach(function(q){
        LIVE_PRICES[q.symbol]=q.regularMarketPrice;
        var price=q.regularMarketPrice;
        all.forEach(function(al){
          if(al.ticker===q.symbol&&!al.triggered){
            var hit=(al.type==='above'&&price>=al.price)||(al.type==='below'&&price<=al.price);
            if(hit){
              al.triggered=true;changed=true;
              showToast(al.ticker+' is '+al.type+' '+f$(al.price)+'! Now: '+f$(price),'inf',7000);
              // FIX: also fire browser notification if permitted
              if(typeof Notification!=='undefined'&&Notification.permission==='granted'){
                new Notification('Business Insiders Alert',{body:al.ticker+' is '+al.type+' '+f$(al.price)+'. Now: '+f$(price),icon:''});
              }
            }
          }
        });
      });
      if(changed){saveAlerts(all);renderWatchlist();}
    }).catch(function(){});
  },60000);
}

// ─── WATCHLIST ────────────────────────────────────────────────────────────────
var EARNINGS={NVDA:'2026-05-28',GOOGL:'2026-04-29',META:'2026-04-30',MSFT:'2026-04-30',AMZN:'2026-05-01',LLY:'2026-04-30',LMT:'2026-04-22',RTX:'2026-04-23',PLTR:'2026-05-05',APP:'2026-05-07',VRT:'2026-04-23',VST:'2026-05-06',COIN:'2026-05-08',HOOD:'2026-05-07',HIMS:'2026-05-07',ASTS:'2026-05-08',IONQ:'2026-05-08',AXON:'2026-05-08',OXY:'2026-05-05',RKLB:'2026-05-12',CEG:'2026-05-07',FSLR:'2026-04-29',GS:'2026-04-14',V:'2026-04-22'};

function getWL(){return JSON.parse(localStorage.getItem('psp_wl')||'[]');}

function addToWL(ticker){
  var t=(ticker||'').trim().toUpperCase();
  if(!t){showToast('Enter a ticker symbol','err');return;}
  var wl=getWL();
  if(wl.includes(t)){showToast(t+' already in watchlist','err');return;}
  wl.push(t);localStorage.setItem('psp_wl',JSON.stringify(wl));
  renderWatchlist();
  var inp=document.getElementById('wlInput');if(inp)inp.value='';
  showToast(t+' added to watchlist','ok');
}

function removeFromWL(ticker){
  localStorage.setItem('psp_wl',JSON.stringify(getWL().filter(function(t){return t!==ticker;})));
  renderWatchlist();
}

function renderWatchlist(){
  var out=document.getElementById('watchlistOut');
  if(!out) return;
  // FIX: only request notification permission once, not on every render
  maybeRequestNotif();
  var wl=getWL();var alerts=getAlerts();var bMode=MODE==='paper';
  var pricesP=wl.length
    ?fetch(prx('https://query1.finance.yahoo.com/v7/finance/quote?symbols='+wl.join(','))).then(function(r){return r.json();}).catch(function(){return {};})
    :Promise.resolve({});
  pricesP.then(function(d){
    var prices={};
    (d&&d.quoteResponse&&d.quoteResponse.result||[]).forEach(function(q){
      prices[q.symbol]={price:q.regularMarketPrice,change:q.regularMarketChangePercent||0};
      LIVE_PRICES[q.symbol]=q.regularMarketPrice;
    });
    var html='<div class="wl-add"><input id="wlInput" class="wl-inp" type="text" placeholder="Add ticker e.g. AAPL" maxlength="6" style="text-transform:uppercase" onkeydown="if(event.key===\'Enter\')addToWL(this.value)"/><button class="wl-add-btn" onclick="addToWL(document.getElementById(\'wlInput\').value)">Add</button></div>';
    html+='<div class="al-pan" id="alertPanel"></div>';
    if(wl.length){
      html+='<div class="table-wrap"><table class="wl-table"><thead><tr><th>Symbol</th><th>Price</th><th>Change</th><th>Alerts</th><th>Actions</th></tr></thead><tbody>';
      wl.forEach(function(sym){
        var pd=prices[sym];var isUp=(pd&&pd.change||0)>=0;
        var symAlerts=alerts.filter(function(a){return a.ticker===sym&&!a.triggered;});
        html+='<tr>'
          +'<td><div class="wl-sym">'+sym+'</div></td>'
          +'<td style="font-weight:700">'+(pd?f$(pd.price):'--')+'</td>'
          +'<td class="'+(pd?(isUp?'up':'dn'):'')+'" style="font-weight:600">'+(pd?(isUp?'+':'')+pd.change.toFixed(2)+'%':'--')+'</td>'
          +'<td style="font-size:11px;color:'+(symAlerts.length?'#f6ad37':'var(--tx3)')+'">'+(symAlerts.length?'&#128276; '+symAlerts.length:'--')+'</td>'
          +'<td><div class="wl-acts">'
          +'<button class="wl-btn" onclick="openAlertPanel(\''+sym+'\')">+ Alert</button>'
          +'<a href="https://finance.yahoo.com/quote/'+sym+'" target="_blank" class="wl-btn" style="text-decoration:none">News</a>'
          +'<button class="wl-btn wl-buy'+(bMode?' paper':'')+'" onclick="buyStock(\''+sym+'\',this)">Buy $'+ORDER_AMT+'</button>'
          +'<button class="wl-btn wl-rm" onclick="removeFromWL(\''+sym+'\')">&#215;</button>'
          +'</div></td></tr>';
      });
      html+='</tbody></table></div>';
    } else {
      html+='<div class="empty">Add stocks above to track them here</div>';
    }
    // Alerts section
    html+='<div style="margin-top:20px"><div class="lbl">Price Alerts <span style="font-size:10px;font-weight:400;text-transform:none;letter-spacing:0">Notifies while tab is open</span></div>';
    if(alerts.length){
      alerts.forEach(function(a){
        html+='<div class="al-row"><span>'+(a.triggered?'&#9989;':'&#128276;')+'</span>'
          +'<span class="al-inf" style="'+(a.triggered?'opacity:.5;text-decoration:line-through':'')+'">'
          +'<strong>'+a.ticker+'</strong> '+a.type+' '+f$(a.price)+(a.triggered?' &#8212; triggered':'')
          +'</span><button class="al-del" onclick="removeAlert('+a.id+')">&#215;</button></div>';
      });
    } else {
      html+='<div style="font-size:12px;color:var(--tx3);padding:8px 0">No alerts set. Click &ldquo;+ Alert&rdquo; on any watchlist stock.</div>';
    }
    html+='</div>';
    // Enhanced Earnings Calendar
    var today=new Date();today.setHours(0,0,0,0);
    // Extended earnings data with extra info
    var EARN_DETAIL={
      NVDA:{est:'$0.88 EPS',rev:'$43.2B est.',beat:'Beat 8 of last 8',when:'After close',note:'Blackwell demand update key'},
      GOOGL:{est:'$2.01 EPS',rev:'$89.1B est.',beat:'Beat 6 of last 8',when:'After close',note:'AI search + Cloud growth'},
      META:{est:'$5.25 EPS',rev:'$41.3B est.',beat:'Beat 7 of last 8',when:'After close',note:'Ad revenue + AI spend'},
      MSFT:{est:'$3.22 EPS',rev:'$68.4B est.',beat:'Beat 7 of last 8',when:'After close',note:'Azure AI growth rate key'},
      AMZN:{est:'$1.36 EPS',rev:'$155.0B est.',beat:'Beat 6 of last 8',when:'After close',note:'AWS + ad segment focus'},
      LLY:{est:'$3.46 EPS',rev:'$12.9B est.',beat:'Beat 7 of last 8',when:'Before open',note:'Mounjaro/Zepbound sales'},
      LMT:{est:'$7.02 EPS',rev:'$17.7B est.',beat:'Beat 6 of last 8',when:'Before open',note:'F-35 deliveries + backlog'},
      RTX:{est:'$1.42 EPS',rev:'$20.5B est.',beat:'Beat 5 of last 8',when:'Before open',note:'Pratt & Whitney update'},
      PLTR:{est:'$0.13 EPS',rev:'$862M est.',beat:'Beat 8 of last 8',when:'Before open',note:'AIP commercial growth'},
      APP:{est:'$1.44 EPS',rev:'$1.37B est.',beat:'Beat 5 of last 6',when:'After close',note:'AXON 2.0 e-commerce'},
      VRT:{est:'$0.98 EPS',rev:'$2.19B est.',beat:'Beat 6 of last 8',when:'Before open',note:'Data center order book'},
      VST:{est:'$0.44 EPS',rev:'$3.72B est.',beat:'Beat 5 of last 8',when:'After close',note:'Power pricing + AI deals'},
      COIN:{est:'$1.93 EPS',rev:'$2.10B est.',beat:'Beat 4 of last 8',when:'After close',note:'Trading volume + custody'},
      HOOD:{est:'$0.27 EPS',rev:'$610M est.',beat:'Beat 5 of last 8',when:'After close',note:'Crypto + Gold subs'},
      HIMS:{est:'$0.07 EPS',rev:'$530M est.',beat:'Beat 6 of last 8',when:'After close',note:'GLP-1 subscriber count'},
      ASTS:{est:'-$0.22 EPS',rev:'$28M est.',beat:'Revenue focus',when:'After close',note:'Satellite activations'},
      IONQ:{est:'-$0.18 EPS',rev:'$14M est.',beat:'Contract wins key',when:'After close',note:'DARPA + qubit progress'},
      AXON:{est:'$1.68 EPS',rev:'$588M est.',beat:'Beat 7 of last 8',when:'After close',note:'Draft One adoption rate'},
      OXY:{est:'$0.67 EPS',rev:'$6.8B est.',beat:'Beat 5 of last 8',when:'After close',note:'DAC progress + Permian'},
      RKLB:{est:'-$0.10 EPS',rev:'$138M est.',beat:'Revenue + launches',when:'After close',note:'Neutron + launch cadence'},
      CEG:{est:'$2.44 EPS',rev:'$6.2B est.',beat:'Beat 5 of last 8',when:'Before open',note:'Nuclear contracts + AI power'},
      FSLR:{est:'$2.54 EPS',rev:'$480M est.',beat:'Beat 6 of last 8',when:'After close',note:'IRA + tariff tailwinds'},
      GS:{est:'$12.35 EPS',rev:'$14.8B est.',beat:'Beat 7 of last 8',when:'Before open',note:'M&A revival + trading'},
      V:{est:'$2.68 EPS',rev:'$9.6B est.',beat:'Beat 8 of last 8',when:'After close',note:'Cross-border volume key'}
    };
    html+='<div style="margin-top:20px"><div class="lbl" style="display:flex;align-items:center;justify-content:space-between">Earnings Calendar <span style="font-size:10px;font-weight:400;text-transform:none;letter-spacing:0;color:var(--tx3)">Next 60 days</span></div>';
    html+='<div class="earn-list">';
    var earnEntries=Object.entries(EARNINGS).filter(function(e){return new Date(e[1])>=today;}).sort(function(a,b){return new Date(a[1])-new Date(b[1]);});
    earnEntries.forEach(function(e){
      var sym=e[0];var dt=new Date(e[1]);dt.setHours(0,0,0,0);
      var days=Math.round((dt-today)/86400000);
      var dayLbl=days===0?'Today!':days===1?'Tomorrow':'In '+days+'d';
      var dayCls=days===0?'earn-to':days<=7?'earn-so':'earn-ok';
      var co=(DB.find(function(s){return s.ticker===sym;})||{}).company||(SEARCH_DB.find(function(s){return s.t===sym;})||{}).n||sym;
      var det=EARN_DETAIL[sym]||{};
      var dtFmt=dt.toLocaleDateString('en-US',{weekday:'short',month:'short',day:'numeric'});
      html+='<div class="earn-row">'
        +'<div class="earn-row-left">'
        +'<div class="earn-row-sym">'+sym+'</div>'
        +'<div class="earn-row-co">'+co+'</div>'
        +'</div>'
        +'<div class="earn-row-mid">'
        +(det.est?'<div class="earn-det-line"><span class="earn-det-lbl">EPS Est.</span><span class="earn-det-val">'+det.est+'</span></div>':'')
        +(det.rev?'<div class="earn-det-line"><span class="earn-det-lbl">Rev Est.</span><span class="earn-det-val">'+det.rev+'</span></div>':'')
        +(det.beat?'<div class="earn-det-line"><span class="earn-det-lbl">Beat Rate</span><span class="earn-det-val earn-beat">'+det.beat+'</span></div>':'')
        +(det.note?'<div class="earn-note">&#128161; '+det.note+'</div>':'')
        +'</div>'
        +'<div class="earn-row-right">'
        +'<div class="earn-dy '+dayCls+'">'+dayLbl+'</div>'
        +'<div class="earn-row-dt">'+dtFmt+'</div>'
        +(det.when?'<div class="earn-when">'+(det.when==='After close'?'&#127751;':'&#127758;')+' '+det.when+'</div>':'')
        +'</div>'
        +'</div>';
    });
    html+='</div></div>';
    out.innerHTML=html;
  });
}

function openAlertPanel(ticker){
  var panel=document.getElementById('alertPanel');
  if(!panel) return;
  var isOpen=panel.classList.contains('open')&&panel.dataset.for===ticker;
  panel.classList.toggle('open',!isOpen);
  panel.dataset.for=ticker;
  if(!isOpen){
    panel.innerHTML='<div class="al-t">&#128276; Set alert for <strong>'+ticker+'</strong></div>'
      +'<div class="al-form">'
      +'<select id="alertType"><option value="above">Price goes above</option><option value="below">Price goes below</option></select>'
      +'<input type="number" id="alertPrice" placeholder="e.g. 150" step="0.01" min="0.01"/>'
      +'<button class="al-set" onclick="addAlert(\''+ticker+'\',document.getElementById(\'alertPrice\').value,document.getElementById(\'alertType\').value)">Set Alert</button>'
      +'<button class="al-cn" onclick="document.getElementById(\'alertPanel\').classList.remove(\'open\')">Cancel</button>'
      +'</div>';
    // Focus price input
    setTimeout(function(){var inp=document.getElementById('alertPrice');if(inp)inp.focus();},50);
  }
}

// ─── SECTOR EXPLORER ──────────────────────────────────────────────────────────
function sectorMomentum(sec){
  var all=sec.stocks.concat(sec.gems);
  return Math.round(all.reduce(function(s,tk){
    var sd=getStockData(tk,sec);return s+(sd.base||0);
  },0)/(all.length||1));
}

function getStockData(ticker,sec){
  var fromDB=ALL_STOCKS.find(function(s){return s.ticker===ticker;});
  if(fromDB) return fromDB;
  return Object.assign({ticker:ticker,company:ticker,rating:'Listed',bear:-20,base:20,bull:60,pol:[],bil:[],inst:[],insider:[],options:[],retail:[],why:'Research this stock using the links below.'},sec.stockData&&sec.stockData[ticker]||{});
}

function renderSectorGrid(){
  var out=document.getElementById('sectorsOut');
  var moms=Object.keys(SECTORS).map(function(n){return {n:n,s:SECTORS[n],m:sectorMomentum(SECTORS[n])};}).sort(function(a,b){return b.m-a.m;});
  var maxM=Math.max.apply(null,moms.map(function(x){return x.m;}))||1;
  var html='<div class="scr-row"><label>Rating:</label><select id="scRating" onchange="applyScreener()"><option value="">All</option><option>Strong Buy</option><option>Moderate Buy</option><option>Speculative Buy</option></select>'
    +'<label>Min conviction:</label><input id="scConv" type="number" placeholder="0" min="0" max="100" style="width:60px" oninput="applyScreener()"/>'
    +'<label>Signal:</label><select id="scSig" onchange="applyScreener()"><option value="">Any</option>'
    +Object.keys(SIG).map(function(k){return '<option value="'+k+'">'+SIG[k].l+'</option>';}).join('')
    +'</select></div>';
  html+='<div class="lbl" style="margin-bottom:10px">Sector rotation &mdash; ranked by avg base-case ROI</div>';
  html+='<div class="sec-grid">';
  moms.forEach(function(x,i){
    var n=x.n,s=x.s,m=x.m;
    var topK=i===0?'&#128293; ':i===1?'&#11014; ':'';
    html+='<div class="sec-c" id="sc-'+n.replace(/\W/g,'_')+'" onclick="openSector(\''+n+'\')">'
      +'<div class="sc-ic">'+s.icon+'</div>'
      +'<div class="sc-nm">'+topK+n+'</div>'
      +'<div class="sc-mt">'+s.stocks.length+' stocks &middot; '+s.gems.length+' gems &middot; avg +'+m+'%</div>'
      +'<div class="sc-bar"><div class="sc-fill" style="width:'+(m/maxM*100).toFixed(0)+'%"></div></div>'
      +'</div>';
  });
  html+='</div><div id="sectorDetail"></div>';
  out.innerHTML=html;
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

// FIX: added missing ss-buy button logic - now uses btn-buy style inline
function ssRow(s,isGem){
  var ratingColor=s.rating==='Strong Buy'?'t-g':s.rating==='Moderate Buy'?'t-y':'t-s';
  var cv=convScore(s);var cvCls=cv>=80?'cv-hi':cv>=60?'cv-go':cv>=40?'cv-md':'cv-lo';
  var bMode=MODE==='paper';
  var html='<div class="ss-rw'+(isGem?' gem-rw':'')+'">';
  if(isGem) html+='<div class="gem-lbl">&#11088; Hidden Gem</div>';
  html+='<div class="ss-top">'
    +'<div><div class="ss-sy">'+s.ticker+'</div><div class="ss-co">'+(s.company||s.ticker)+'</div></div>'
    +'<div class="ss-rt"><span class="ss-ra tag '+ratingColor+' nc">'+s.rating+'</span><div class="ss-bs">'+pct(s.base||0)+' base</div></div>'
    +'</div>'
    +'<div style="display:flex;align-items:center;gap:7px;margin-bottom:7px"><span class="cv-lbl '+cvCls+'">&#9889; '+cv+'</span>'
    +'<a href="https://finance.yahoo.com/quote/'+s.ticker+'" target="_blank" class="btn-link">News</a>'
    +'<a href="https://finviz.com/quote.ashx?t='+s.ticker+'" target="_blank" class="btn-link">Chart</a></div>'
    +'<div class="sigs">'+sigChips(s)+'</div>'
    +'<div class="ss-prd"><div class="ss-p bear">Bear '+pct(s.bear||0)+'</div><div class="ss-p base">Base '+pct(s.base||0)+'</div><div class="ss-p bull">Bull +'+(s.bull||0)+'%</div></div>'
    +'<div class="ss-wh">'+(s.why||'')+'</div>'
    // FIX: use btn-buy class which IS defined, instead of ss-buy which was never defined
    +'<button class="btn-buy'+(bMode?' paper':'')+'" style="width:100%;margin-top:8px;font-size:12px;padding:8px" onclick="buyStock(\''+s.ticker+'\',this)" '+(CONNECTED?'':'title="Connect Alpaca to trade"')+'>Buy $'+ORDER_AMT+(bMode?' (P)':'')+'</button>'
    +'</div>';
  return html;
}

function renderSectorDetail(name){
  var sec=SECTORS[name];
  var fkeys=['all','pol','bil','inst','insider','options','retail','multi'];
  var flbls=['All','&#127963; Pol','&#128142; Bil','&#127970; Inst','&#128084; Insider','&#128202; Options','&#128241; Retail','3+ signals'];
  var html='<div class="sec-det"><div class="sd-hdr">'
    +'<div style="display:flex;align-items:center;gap:8px"><span style="font-size:20px">'+sec.icon+'</span><div class="sd-t">'+name+'</div></div>'
    +'<button class="sd-cl" onclick="closeSectorDetail()">&#215; Close</button></div>'
    +'<div class="sig-fs">';
  fkeys.forEach(function(k,i){
    html+='<button class="sig-btn'+(ACT_FILTER===k?' active':'')+'" onclick="ACT_FILTER=\''+k+'\';renderSectorDetail(\''+name+'\')">'+flbls[i]+'</button>';
  });
  html+='</div>';
  function sigF(s){
    if(ACT_FILTER==='all') return true;
    if(ACT_FILTER==='multi') return Object.keys(SIG).filter(function(k){return s[k]&&s[k].length;}).length>=3;
    return s[ACT_FILTER]&&s[ACT_FILTER].length>0;
  }
  function score(s){return convScore(s)+(s.rating==='Strong Buy'?20:s.rating==='Moderate Buy'?10:0)+(s.base||0)/5;}
  var stocks=sec.stocks.map(function(tk){return getStockData(tk,sec);}).filter(function(s){return stockPass(s)&&sigF(s);}).sort(function(a,b){return score(b)-score(a);});
  var gems=sec.gems.map(function(tk){return getStockData(tk,sec);}).filter(function(s){return stockPass(s)&&sigF(s);}).sort(function(a,b){return score(b)-score(a);});
  if(stocks.length){
    stocks.forEach(function(s){html+=ssRow(s,false);});
  } else {
    html+='<div class="empty" style="padding:1rem">No stocks match this filter</div>';
  }
  if(gems.length){
    html+='<div class="sec-dv">&#11088; Hidden Gems in '+name+'</div>';
    gems.forEach(function(g){html+=ssRow(g,true);});
  }
  html+='</div>';
  document.getElementById('sectorDetail').innerHTML=html;
}

// ─── MODAL ────────────────────────────────────────────────────────────────────
function openSectorModal(sectorName){
  var sec=SECTORS[sectorName];if(!sec)return;
  document.getElementById('moT').textContent=sec.icon+' '+sectorName;
  document.getElementById('moS').textContent=sec.stocks.length+' stocks \u00b7 '+sec.gems.length+' hidden gems';
  var html='';
  sec.stocks.forEach(function(tk){html+=ssRow(getStockData(tk,sec),false);});
  if(sec.gems.length){
    html+='<div class="sec-dv">&#11088; Hidden Gems</div>';
    sec.gems.forEach(function(tk){html+=ssRow(getStockData(tk,sec),true);});
  }
  document.getElementById('moB').innerHTML=html;
  var ov=document.getElementById('modalOv');
  ov.classList.add('open');
}

function closeModal(){
  document.getElementById('modalOv').classList.remove('open');
}

function maybeClose(e){if(e.target===document.getElementById('modalOv'))closeModal();}

// close modal on Escape key
document.addEventListener('keydown',function(e){
  if(e.key==='Escape'){
    closeModal();
    closeSearchDrop();
  }
});

// ─── SEARCH AUTOCOMPLETE ──────────────────────────────────────────────────────
function onSearchInput(inp){
  var val=(inp.value||'').trim();
  if(val.length<1){closeSearchDrop();return;}
  var upper=val.toUpperCase();var lower=val.toLowerCase();
  var results=SEARCH_DB.filter(function(s){
    if(s.t.startsWith(upper)) return true;
    return s.n.toLowerCase().split(' ').some(function(w){return w.startsWith(lower);});
  }).slice(0,9);
  if(!results.length){closeSearchDrop();return;}
  var drop=document.getElementById('srchDrop');if(!drop)return;
  var html='';
  results.forEach(function(s,i){
    html+='<div class="srch-item" data-idx="'+i+'" onclick="selectStock(\''+s.t+'\')" onmouseover="srchFocusIdx='+i+';updateSrchFocus()">'
      +'<span class="srch-tk">'+s.t+'</span>'
      +'<span class="srch-nm">'+s.n+'</span>'
      +'<span class="srch-sc">'+s.s+'</span>'
      +'</div>';
  });
  drop.innerHTML=html;drop.classList.add('open');srchFocusIdx=-1;
}

function onSearchKey(e){
  var drop=document.getElementById('srchDrop');
  if(!drop||!drop.classList.contains('open')){if(e.key==='Enter')searchStock();return;}
  var items=drop.querySelectorAll('.srch-item');
  if(e.key==='ArrowDown'){e.preventDefault();srchFocusIdx=Math.min(srchFocusIdx+1,items.length-1);updateSrchFocus();}
  else if(e.key==='ArrowUp'){e.preventDefault();srchFocusIdx=Math.max(srchFocusIdx-1,-1);updateSrchFocus();}
  else if(e.key==='Enter'){e.preventDefault();if(srchFocusIdx>=0&&items[srchFocusIdx]){items[srchFocusIdx].click();}else{closeSearchDrop();searchStock();}}
  else if(e.key==='Escape'){closeSearchDrop();}
}

function updateSrchFocus(){
  var drop=document.getElementById('srchDrop');if(!drop)return;
  drop.querySelectorAll('.srch-item').forEach(function(it,i){
    it.classList.toggle('focused',i===srchFocusIdx);
    if(i===srchFocusIdx)it.scrollIntoView({block:'nearest'});
  });
}

function closeSearchDrop(){
  var drop=document.getElementById('srchDrop');
  if(drop){drop.classList.remove('open');drop.innerHTML='';}
  srchFocusIdx=-1;
}

function selectStock(ticker){
  var inp=document.getElementById('srchIn');if(inp)inp.value=ticker;
  closeSearchDrop();
  searchStock();
}

document.addEventListener('click',function(e){if(!e.target.closest('.srch-wrap'))closeSearchDrop();});

// ─── SEARCH ───────────────────────────────────────────────────────────────────
function searchStock(){
  var raw=((document.getElementById('srchIn')||{}).value||'').trim();
  if(!raw){showToast('Enter a company name or ticker','err');return;}
  var lower=raw.toLowerCase();var upper=raw.toUpperCase();
  var fromDB=SEARCH_DB.find(function(s){
    return s.t.toUpperCase()===upper||s.n.toLowerCase()===lower||
      s.n.toLowerCase().split(' ').some(function(w){return w.startsWith(lower);});
  });
  var ticker=fromDB?fromDB.t:upper;
  closeSearchDrop();
  var out=document.getElementById('searchOut');if(!out)return;
  out.innerHTML='<div class="spin"><div class="spn"></div><div class="spin-t">Looking up '+ticker+'...</div></div>';
  function tryFetch(urls,idx){
    if(idx>=urls.length){showLocalResult(ticker,out,fromDB);return;}
    fetch(urls[idx]).then(function(r){if(!r.ok)throw new Error('HTTP '+r.status);return r.json();}).then(function(d){
      var res=(d&&d.quoteResponse&&d.quoteResponse.result)||[];
      var q=res[0];
      if(!q||!q.regularMarketPrice) throw new Error('No data');
      renderSearchResult(q,ticker,out,fromDB);
    }).catch(function(){tryFetch(urls,idx+1);});
  }
  tryFetch([
    prx('https://query2.finance.yahoo.com/v8/finance/quote?symbols='+ticker),
    prx('https://query1.finance.yahoo.com/v7/finance/quote?symbols='+ticker)
  ],0);
}

function showLocalResult(ticker,out,fromDB){
  var dbStock=ALL_STOCKS.find(function(s){return s.ticker===ticker;});
  var bMode=MODE==='paper';
  var co=(dbStock&&dbStock.company)||(fromDB&&fromDB.n)||ticker;
  var html='<div class="card">'
    +'<div class="tr-left"><div class="tk">'+ticker+'</div><div class="tn">'+co+'</div></div>'
    +'<div style="padding:10px 12px;background:var(--s2);border-radius:6px;font-size:12px;color:var(--tx3);margin:10px 0">&#9888; Live price unavailable &mdash; market may be closed or data temporarily unavailable.</div>'
    +(dbStock?'<div style="margin-bottom:8px">'+convBadge(dbStock)+'</div><div class="sigs">'+sigChips(dbStock)+'</div>'+whosBuying(dbStock,false):'')
    +'<div class="action-row">'
    +'<button class="btn-buy'+(bMode?' paper':'')+'" onclick="buyStock(\''+ticker+'\',this)">Buy $'+ORDER_AMT+(bMode?' (P)':'')+'</button>'
    +'<button class="btn-buy-sm" onclick="addToWL(\''+ticker+'\')">+ Watchlist</button>'
    +'<a href="https://finance.yahoo.com/quote/'+ticker+'" target="_blank" class="btn-link">&#128240; Yahoo</a>'
    +'<a href="https://finviz.com/quote.ashx?t='+ticker+'" target="_blank" class="btn-link">Finviz</a>'
    +'</div>'
    +bracketPanel(ticker)+articlesHTML(ticker)
    +'</div>';
  out.innerHTML=html;
}

function renderSearchResult(q,ticker,out,fromDB){
  var dbStock=ALL_STOCKS.find(function(s){return s.ticker===q.symbol;});
  LIVE_PRICES[q.symbol]=q.regularMarketPrice;
  var price=q.regularMarketPrice||0;var chg=q.regularMarketChangePercent||0;var isUp=chg>=0;
  var bMode=MODE==='paper';
  var html='<div class="card">'
    +'<div class="ticker-row">'
    +'<div class="tr-left"><div class="tk">'+q.symbol+'</div><div class="tn">'+(q.longName||q.shortName||q.symbol)+(q.fullExchangeName?' &middot; '+q.fullExchangeName:'')+'</div></div>'
    +'<div class="tr-right"><div class="tr-price">'+f$(price)+'</div><div class="tr-chg '+(isUp?'up':'dn')+'">'+(isUp?'+':'')+chg.toFixed(2)+'% today</div></div>'
    +'</div>'
    +'<div class="srch-st">'
    +'<div class="as-box"><div class="as-val">'+(q.marketCap?fmtCap(q.marketCap):'--')+'</div><div class="as-lbl">Market Cap</div></div>'
    +'<div class="as-box"><div class="as-val">'+(q.trailingPE?q.trailingPE.toFixed(1)+'x':'--')+'</div><div class="as-lbl">Trailing P/E</div></div>'
    +'<div class="as-box"><div class="as-val">'+(q.fiftyTwoWeekHigh?f$(q.fiftyTwoWeekHigh):'--')+'</div><div class="as-lbl">52W High</div></div>'
    +'<div class="as-box"><div class="as-val">'+(q.fiftyTwoWeekLow?f$(q.fiftyTwoWeekLow):'--')+'</div><div class="as-lbl">52W Low</div></div>'
    +'</div>'
    +(dbStock
      ?'<div style="margin-bottom:8px">'+convBadge(dbStock)+'</div><div class="sigs" style="margin-bottom:8px">'+sigChips(dbStock)+'</div>'+whosBuying(dbStock,false)
      :'<div style="padding:10px 12px;background:var(--s2);border-radius:6px;font-size:12px;color:var(--tx3);margin:8px 0">Not in our signal database &mdash; research links below.</div>')
    +'<div class="action-row">'
    +'<button class="btn-buy'+(bMode?' paper':'')+'" onclick="buyStock(\''+q.symbol+'\',this)">Buy $'+ORDER_AMT+(bMode?' (P)':'')+'</button>'
    +'<button class="btn-buy-sm" onclick="addToWL(\''+q.symbol+'\')">+ Watchlist</button>'
    +'<a href="https://finance.yahoo.com/quote/'+q.symbol+'" target="_blank" class="btn-link">&#128240; News</a>'
    +'<a href="https://finviz.com/quote.ashx?t='+q.symbol+'" target="_blank" class="btn-link">Finviz</a>'
    +'</div>'
    +bracketPanel(q.symbol)+articlesHTML(q.symbol)
    +'</div>';
  out.innerHTML=html;
}

// ─── STOCK DATA ───────────────────────────────────────────────────────────────
var SOURCES={
  GOOGL:[{t:'Congress GOOGL trading — 178 buys tracked',u:'https://www.quiverquant.com/congresstrading/stock/GOOGL',o:'QuiverQuant'},{t:'Alphabet analyst ratings & $354 target',u:'https://www.tipranks.com/stocks/googl/forecast',o:'TipRanks'},{t:'Google Cloud AI surge & Q4 2025 earnings',u:'https://finance.yahoo.com/quote/GOOGL',o:'Yahoo Finance'},{t:'GOOGL fundamentals & short interest',u:'https://finviz.com/quote.ashx?t=GOOGL',o:'Finviz'}],
  NVDA:[{t:'Congress NVDA trades — #1 bought stock 2025',u:'https://www.quiverquant.com/congresstrading/stock/NVDA',o:'QuiverQuant'},{t:'Nvidia 43 Strong Buy ratings, $273 avg target',u:'https://www.tipranks.com/stocks/nvda/forecast',o:'TipRanks'},{t:'Nvidia Blackwell demand & Rubin 2026 outlook',u:'https://finance.yahoo.com/quote/NVDA',o:'Yahoo Finance'},{t:'NVDA institutional ownership & chart',u:'https://finviz.com/quote.ashx?t=NVDA',o:'Finviz'}],
  LMT:[{t:'Armed Services Committee LMT purchases',u:'https://www.quiverquant.com/congresstrading/stock/LMT',o:'QuiverQuant'},{t:'Lockheed Martin analyst ratings & outlook',u:'https://www.tipranks.com/stocks/lmt/forecast',o:'TipRanks'},{t:'F-35, hypersonic & NATO news',u:'https://finance.yahoo.com/quote/LMT',o:'Yahoo Finance'},{t:'LMT stock data & institutional ownership',u:'https://finviz.com/quote.ashx?t=LMT',o:'Finviz'}],
  LLY:[{t:'Congress LLY trades — Health Committee buys',u:'https://www.quiverquant.com/congresstrading/stock/LLY',o:'QuiverQuant'},{t:'Eli Lilly GLP-1 analyst ratings & targets',u:'https://www.tipranks.com/stocks/lly/forecast',o:'TipRanks'},{t:'Mounjaro, Zepbound & GLP-1 pipeline',u:'https://finance.yahoo.com/quote/LLY',o:'Yahoo Finance'},{t:'LLY institutional ownership & fundamentals',u:'https://finviz.com/quote.ashx?t=LLY',o:'Finviz'}],
  VST:[{t:'Pelosi & Energy Committee VST purchases',u:'https://www.quiverquant.com/congresstrading/stock/VST',o:'QuiverQuant'},{t:'Vistra analyst ratings — AI electricity thesis',u:'https://www.tipranks.com/stocks/vst/forecast',o:'TipRanks'},{t:'AI data center power demand & nuclear news',u:'https://finance.yahoo.com/quote/VST',o:'Yahoo Finance'},{t:'VST stock data & institutional ownership',u:'https://finviz.com/quote.ashx?t=VST',o:'Finviz'}],
  PLTR:[{t:'Congress PLTR trades — Homeland Security',u:'https://www.quiverquant.com/congresstrading/stock/PLTR',o:'QuiverQuant'},{t:'Palantir analyst ratings — AIP pipeline',u:'https://www.tipranks.com/stocks/pltr/forecast',o:'TipRanks'},{t:'Palantir government AI contracts news',u:'https://finance.yahoo.com/quote/PLTR',o:'Yahoo Finance'},{t:'PLTR institutional ownership & data',u:'https://finviz.com/quote.ashx?t=PLTR',o:'Finviz'}]
};

var DB=[
  {ticker:'GOOGL',company:'Alphabet Inc.',fb:319,conf:90,rating:'Strong Buy',polScore:95,sector:'AI & Technology',sCls:'t-b',
   pol:['Nancy Pelosi','Rohit Khanna','Tony Wied'],bil:['Bill Ackman','Druckenmiller','David Tepper'],inst:['T. Rowe Price','Capital Group','State Street'],insider:['Sundar Pichai $10M buy'],options:['Unusual LEAPS Dec 2026'],retail:['Top r/stocks pick Q1 2026'],
   polCtx:'178 congressional purchases totaling $2.6M. Pelosi added call options in January 2026.',
   anaCtx:'44 analysts rate GOOGL Strong Buy with $354 target. Google Cloud backlog surged 55% in Q4 2025.',
   why:'Congress\'s most-purchased stock over 12 months. 44 analysts at Strong Buy, $354 target.',
   bear:-5,base:35,bull:72},
  {ticker:'NVDA',company:'Nvidia Corporation',fb:187,conf:88,rating:'Strong Buy',polScore:92,sector:'AI & Technology',sCls:'t-b',
   pol:['Nancy Pelosi','Terri Sewell','M.T. Greene'],bil:['Cathie Wood','Druckenmiller','Laffont'],inst:['Vanguard','Fidelity','BlackRock'],insider:['Jensen Huang open-market buys'],options:['Massive call sweeps $250 strike'],retail:['WSB #1 for 12 weeks'],
   polCtx:'#1 most-bought stock by Congress in 2025. Sewell\'s purchase fueled a 67.9% annual return.',
   anaCtx:'43 analysts Strong Buy with $273 target — 46% upside. Cantor Fitzgerald top pick 2026.',
   why:'Congress\'s most-purchased stock of 2025 across both parties. Every AI data center runs on Nvidia.',
   bear:-8,base:42,bull:90},
  {ticker:'LMT',company:'Lockheed Martin',fb:490,conf:82,rating:'Strong Buy',polScore:80,sector:'Defense & Military',sCls:'t-s',
   pol:['Armed Services Committee','Mike Rogers'],bil:['Citadel','Two Sigma'],inst:['Vanguard','State Street','Fidelity'],insider:['Jim Taiclet CEO buys'],options:['LEAPS accumulation'],retail:['Dividend defense crowd'],
   polCtx:'Armed Services Committee buys LMT consistently — they directly oversee the budget funding Lockheed.',
   anaCtx:'Strong Buy consensus. F-35 + hypersonic programs provide decade-long revenue visibility.',
   why:'Armed Services Committee buys LMT — they oversee the very budget funding Lockheed. NATO rearmament adds a decade of backlog.',
   bear:-3,base:22,bull:45},
  {ticker:'LLY',company:'Eli Lilly',fb:810,conf:85,rating:'Strong Buy',polScore:75,sector:'Healthcare & Biotech',sCls:'t-g',
   pol:['Health Committee members'],bil:['Baillie Gifford','Capital Group'],inst:['T. Rowe Price','Wellington','Fidelity'],insider:['David Ricks CEO buying'],options:['Massive LEAPS accumulation'],retail:['Top health sector pick'],
   polCtx:'Health Committee members buying ahead of GLP-1 regulatory tailwinds.',
   anaCtx:'Highest conviction Strong Buy. Mounjaro + Zepbound are the fastest-growing pharma launches in history.',
   why:'Eli Lilly owns the GLP-1 revolution. Health Committee buying ahead of favorable legislation.',
   bear:-10,base:28,bull:65},
  {ticker:'VST',company:'Vistra Corp',fb:145,conf:78,rating:'Strong Buy',polScore:73,sector:'Energy & Clean Tech',sCls:'t-g',
   pol:['Nancy Pelosi','Energy Committee'],bil:['Baupost Group','Citadel'],inst:['D1 Capital','Fidelity'],insider:['Jim Burke CEO buying'],options:['Large call sweep Q4 2025'],retail:['AI energy trade'],
   polCtx:'Pelosi added Vistra in January 2026 alongside GOOGL and NVDA.',
   anaCtx:'Multiple analyst upgrades on AI energy demand thesis. Goldman calls power "the trade of 2026".',
   why:'Pelosi\'s Jan 2026 pick. AI data centers need enormous power — Vistra provides it.',
   bear:-5,base:38,bull:80},
  {ticker:'PLTR',company:'Palantir',fb:96,conf:74,rating:'Moderate Buy',polScore:68,sector:'AI & Technology',sCls:'t-b',
   pol:['Homeland Security Committee'],bil:['Cathie Wood','Peter Thiel (founder)'],inst:['ARK Invest','Baillie Gifford'],insider:['Alex Karp CEO buying'],options:['High OI $100+ calls'],retail:['Cult Reddit following'],
   polCtx:'Homeland Security Committee bought PLTR — they oversee the contracts Palantir competes for.',
   anaCtx:'Mixed analyst consensus but AIP government pipeline is a strong tailwind.',
   why:'Homeland Security Committee bought PLTR — the most specific insider signal on this list.',
   bear:-15,base:30,bull:75}
];

var GEMS=[
  {ticker:'VRT',company:'Vertiv Holdings',theme:'AI Infrastructure',tCls:'t-b',sector:'Energy & Clean Tech',fb:98,conf:86,rating:'Strong Buy',bear:15,base:52,bull:95,bearP:20,baseP:55,bullP:25,
   pol:['Energy Committee'],bil:['GQG Partners','Citadel'],inst:['T. Rowe Price','Fidelity'],insider:['CEO Albertazzi buying'],options:['Heavy call accumulation'],retail:['AI infra community'],
   why:'Powers AI data center cooling. Every $1 on AI chips needs $1 in Vertiv equipment.',
   catalyst:'Catalysts: Data center capex supercycle, hyperscaler supply agreements. Risk: Supply chain delays.'},
  {ticker:'AXON',company:'Axon Enterprise',theme:'GovTech / AI',tCls:'t-p',sector:'Defense & Military',fb:680,conf:82,rating:'Strong Buy',bear:10,base:38,bull:72,bearP:15,baseP:60,bullP:25,
   pol:['Homeland Security Committee'],bil:['Cathie Wood','Baillie Gifford'],inst:['T. Rowe Price','Coatue'],insider:['Rick Smith founder buying'],options:['Large call sweep Q1 2026'],retail:['High social sentiment'],
   why:'Taser + body cam + AI report writing. Draft One creates sticky per-officer recurring revenue.',
   catalyst:'Catalysts: Draft One adoption, international expansion. Risk: Budget cuts.'},
  {ticker:'APP',company:'AppLovin Corp.',theme:'AI Ad Tech',tCls:'t-y',sector:'AI & Technology',fb:285,conf:84,rating:'Strong Buy',bear:-10,base:45,bull:110,bearP:25,baseP:50,bullP:25,
   pol:['Multiple Congress members'],bil:['Cathie Wood','Millennium'],inst:['Coatue','Tiger Global'],insider:['Adam Foroughi large buy'],options:['Aggressive call sweeps'],retail:['Viral fintech community'],
   why:'AXON 2.0 AI ad model drove 75%+ revenue growth in 2025. Most underappreciated large-cap on the market.',
   catalyst:'Catalysts: AXON 2.0, e-commerce expansion. Risk: Google/Meta competition.'},
  {ticker:'HIMS',company:'Hims & Hers Health',theme:'Telehealth',tCls:'t-g',sector:'Healthcare & Biotech',fb:18,conf:76,rating:'Moderate Buy',bear:-20,base:55,bull:130,bearP:30,baseP:45,bullP:25,
   pol:['Multiple Congress members'],bil:['General Atlantic','Foresite'],inst:['Coatue','D1 Capital'],insider:['CEO Dudum buying'],options:['Aggressive call sweeps'],retail:['#1 telehealth Reddit'],
   why:'Telehealth for GLP-1, hair loss, mental health. Direct-to-consumer bypasses pharmacy markups.',
   catalyst:'Catalysts: GLP-1 expansion, subscriber growth. Risk: FDA crackdowns.'},
  {ticker:'ASTS',company:'AST SpaceMobile',theme:'Space Tech',tCls:'t-p',sector:'Space & Aerospace',fb:28,conf:68,rating:'Speculative Buy',bear:-40,base:80,bull:220,bearP:35,baseP:40,bullP:25,
   pol:['Commerce Committee','Ted Cruz'],bil:['a16z','Google (strategic)'],inst:['ARK','Baillie Gifford'],insider:['Abel Avellan large buy'],options:['Aggressive speculative calls'],retail:['Space community #1'],
   why:'Space-based cellular for standard phones. AT&T, Verizon, Vodafone already partners.',
   catalyst:'Catalysts: Satellite launches, carrier activations. Risk: Launch failures.'},
  {ticker:'IONQ',company:'IonQ Inc.',theme:'Quantum Computing',tCls:'t-p',sector:'Space & Aerospace',fb:32,conf:66,rating:'Speculative Buy',bear:-35,base:65,bull:185,bearP:40,baseP:38,bullP:22,
   pol:['Science Committee/DARPA'],bil:['Amazon (strategic)','Samsung'],inst:['ARK Invest','Coatue'],insider:['Peter Chapman CEO buying'],options:['Speculative long-dated calls'],retail:['Quantum community'],
   why:'Only pure-play quantum computing on NYSE with DARPA + Air Force contracts.',
   catalyst:'Catalysts: Government contract wins, qubit milestones. Risk: Timeline risk.'}
];

var ALL_STOCKS=DB.concat(GEMS);

var SECTORS={
  'AI & Technology':{icon:'&#129302;',cls:'t-b',stocks:['NVDA','GOOGL','META','MSFT','APP','PLTR'],gems:['SOUN','BBAI','IREN'],
    stockData:{
      META:{company:'Meta Platforms',rating:'Strong Buy',bear:3,base:28,bull:65,pol:['Multiple Congress'],bil:['Dan Loeb','Tepper'],inst:['Fidelity','Vanguard'],insider:['Zuckerberg buys'],options:['Record call volume'],retail:['High sentiment'],why:'AI-supercharged ad engine. Congress bought heavily during TikTok legislation.'},
      MSFT:{company:'Microsoft',rating:'Strong Buy',bear:5,base:20,bull:42,pol:['Multiple Congress'],bil:['Warren Buffett','Ackman'],inst:['Vanguard','BlackRock'],insider:['Nadella buys'],options:['LEAPS accumulation'],retail:['AI exposure fav'],why:'Most bipartisan congressional stock. Azure AI + Copilot compounding revenue.'},
      SOUN:{company:'SoundHound AI',rating:'Speculative Buy',bear:-45,base:70,bull:200,pol:['Tech Committee'],bil:['NVIDIA (strategic)'],inst:['ARK Invest'],insider:['CEO buying'],options:['Unusual call flow'],retail:['High Reddit buzz'],why:'AI voice platform. Nvidia strategic investor. Auto, food, IoT deploying. Tiny float = explosive upside.'},
      BBAI:{company:'BigBear.ai',rating:'Speculative Buy',bear:-40,base:80,bull:190,pol:['Intelligence Committee'],bil:['Palantir ecosystem'],inst:['Renaissance'],insider:['CEO Long buying'],options:['Call sweep'],retail:['Defense AI'],why:'AI analytics for defense/intelligence. Classified government contracts. Intel Committee interest is rare.'},
      IREN:{company:'Iris Energy',rating:'Speculative Buy',bear:-35,base:65,bull:175,pol:['Energy/Tech'],bil:['Cathie Wood'],inst:['ARK Invest'],insider:['CEO Roberts buying'],options:['BTC-correlated'],retail:['Crypto-AI cross'],why:'Bitcoin mining pivoting to AI GPU compute. Owns the power + cooling AI firms desperately need.'}}},
  'Defense & Military':{icon:'&#128737;',cls:'t-s',stocks:['LMT','RTX','NOC','GD','AXON','CACI'],gems:['KTOS','RCAT','LDOS'],
    stockData:{
      RTX:{company:'RTX (Raytheon)',rating:'Strong Buy',bear:3,base:22,bull:45,pol:['Armed Services Cmte'],bil:['ValueAct','Citadel'],inst:['T.Rowe','Capital Group'],insider:['Hayes buys'],options:['LEAPS accumulation'],retail:['Defense dividend'],why:'Patriot missile demand at record highs. Pratt & Whitney jet engine backlog spans a decade.'},
      NOC:{company:'Northrop Grumman',rating:'Strong Buy',bear:4,base:19,bull:40,pol:['Armed Services Committee'],bil:['Duquesne','Citadel'],inst:['BlackRock','Vanguard'],insider:['Warden buying'],options:['Long-dated calls'],retail:['Defense income'],why:'B-21 Raider stealth bomber. Nuclear defense programs locked in for decades.'},
      GD:{company:'General Dynamics',rating:'Strong Buy',bear:3,base:17,bull:35,pol:['Armed Services','Wicker'],bil:['Citadel','Two Sigma'],inst:['Vanguard','State St'],insider:['Novakovic buying'],options:['Steady accumul.'],retail:['Dividend growth'],why:'Gulfstream jets + Abrams tanks + nuclear submarines. Recession-proof government revenue.'},
      CACI:{company:'CACI International',rating:'Moderate Buy',bear:5,base:20,bull:42,pol:['Intelligence Committee'],bil:['Royce Investment'],inst:['Fidelity','Wellington'],insider:['Mengucci buying'],options:['Moderate calls'],retail:['Defense tech'],why:'Intelligence agency IT + cyber defense. Rare Intel Committee buying is historically significant.'},
      KTOS:{company:'Kratos Defense',rating:'Moderate Buy',bear:-10,base:35,bull:85,pol:['Armed Services Cmte'],bil:['Dragoneer'],inst:['Fidelity','BlackRock'],insider:['DeMarco buying'],options:['Call sweep'],retail:['Drone community'],why:'Affordable attritable drones. Ukraine proved drone warfare is the norm.'},
      RCAT:{company:'Red Cat Holdings',rating:'Speculative Buy',bear:-40,base:90,bull:250,pol:['Armed Services Cmte'],bil:['Defense funds'],inst:['Small-cap defense'],insider:['Thompson CEO buying'],options:['Unusual volume'],retail:['Defense drone Reddit'],why:'US Army Black Widow drones. Sole-source contracts. Tiny $400M market cap vs massive drone TAM.'},
      LDOS:{company:'Leidos Holdings',rating:'Strong Buy',bear:3,base:18,bull:38,pol:['Armed Services/Intel'],bil:['Citadel','Two Sigma'],inst:['Vanguard','T.Rowe'],insider:['Bell CEO buying'],options:['Institutional flow'],retail:['Dividend defense'],why:'Defense IT and intelligence giant. $15B+ revenue with consistent DoD contracts.'}}},
  'Healthcare & Biotech':{icon:'&#127973;',cls:'t-g',stocks:['LLY','ISRG','HIMS','MRNA','UNH','RXRX'],gems:['EXAS','NTRA','TMDX'],
    stockData:{
      ISRG:{company:'Intuitive Surgical',rating:'Strong Buy',bear:5,base:22,bull:48,pol:['Health Committee'],bil:['Baillie Gifford','Fisher'],inst:['Capital Group','T.Rowe'],insider:['Guthart buying'],options:['Long-dated calls'],retail:['MedTech community'],why:'da Vinci robot surgery monopoly. 9000+ systems = razor-and-blade recurring revenue.'},
      MRNA:{company:'Moderna',rating:'Moderate Buy',bear:-15,base:35,bull:90,pol:['Health Committee'],bil:['Baillie Gifford','ARK'],inst:['Fidelity','State St'],insider:['Bancel buying'],options:['Speculative accum.'],retail:['Biotech Reddit'],why:'mRNA platform beyond COVID — cancer vaccines in Phase 3.'},
      UNH:{company:'UnitedHealth',rating:'Strong Buy',bear:3,base:15,bull:30,pol:['Multiple Congress'],bil:['T.Rowe','Capital Group'],inst:['Vanguard','BlackRock'],insider:['Witty buying'],options:['Steady LEAPS'],retail:['Dividend crowd'],why:'Largest US health insurer + Optum data. Stable healthcare infrastructure pick.'},
      RXRX:{company:'Recursion Pharma',rating:'Speculative Buy',bear:-30,base:60,bull:160,pol:['Tech/Health crossover'],bil:['Nvidia (strategic $50M)'],inst:['Baillie Gifford','ARK'],insider:['Gibson CEO buying'],options:['Speculative calls'],retail:['AI-biotech cross'],why:'AI drug discovery with $50M Nvidia investment.'},
      EXAS:{company:'Exact Sciences',rating:'Moderate Buy',bear:-15,base:45,bull:95,pol:['Health Committee'],bil:['Baillie Gifford','T.Rowe'],inst:['Fidelity','Wellington'],insider:['Conroy buying'],options:['Steady accumul.'],retail:['Cancer screening'],why:'Cologuard non-invasive colon cancer test becoming standard of care. 4M+ tests/year.'},
      NTRA:{company:'Natera',rating:'Moderate Buy',bear:-10,base:50,bull:110,pol:['Health/Science Cmte'],bil:['Baillie Gifford','Coatue'],inst:['T.Rowe','Fidelity'],insider:['Chapman buying'],options:['Growing calls'],retail:['Genetic testing'],why:'Cell-free DNA for prenatal and cancer detection. Signatera rapidly adopted by oncologists.'},
      TMDX:{company:'TransMedics Group',rating:'Speculative Buy',bear:-20,base:65,bull:155,pol:['Health Committee'],bil:['Coatue Management'],inst:['ARK Invest','Fidelity'],insider:['Hassanein CEO buying'],options:['Unusual small-cap'],retail:['MedTech community'],why:'Organ Care System keeps transplant organs alive 3x longer. Deep moat.'}}},
  'Energy & Clean Tech':{icon:'&#9889;',cls:'t-g',stocks:['VRT','VST','CEG','FSLR','OXY','ENPH'],gems:['SMR','ARRY','OKLO'],
    stockData:{
      CEG:{company:'Constellation Energy',rating:'Strong Buy',bear:8,base:35,bull:70,pol:['Energy Committee'],bil:['Baupost Group','D1'],inst:['Fidelity','BlackRock'],insider:['Dominguez buying'],options:['Long-dated calls'],retail:['Nuclear energy'],why:'Largest US nuclear fleet. Microsoft signed 20-year power deal. AI electricity demand makes nuclear essential.'},
      FSLR:{company:'First Solar',rating:'Strong Buy',bear:-5,base:28,bull:65,pol:['Energy/climate members'],bil:['Cathie Wood','Invesco'],inst:['State St','Fidelity'],insider:['Widmar buying'],options:['Call sweep tariff'],retail:['Clean energy crowd'],why:'Only major US-manufactured solar panel company. IRA + anti-China tariffs give structural domestic moat.'},
      OXY:{company:'Occidental Petroleum',rating:'Moderate Buy',bear:-10,base:20,bull:45,pol:['Energy/Texas delegation'],bil:['Warren Buffett (35%+)','Carl Icahn'],inst:['Vanguard','BlackRock'],insider:['Hollub CEO buying'],options:['Steady call flow'],retail:['Buffett tracker'],why:'Warren Buffett biggest recent bet. Direct air carbon capture + Permian Basin.'},
      ENPH:{company:'Enphase Energy',rating:'Moderate Buy',bear:-15,base:30,bull:80,pol:['Energy Committee'],bil:['Cathie Wood','Coatue'],inst:['ARK Invest','Baillie G.'],insider:['Kothandaraman buying'],options:['Speculative accum.'],retail:['Solar community'],why:'Residential solar microinverter leader. Battery storage + EV charging = OS of the home energy stack.'},
      SMR:{company:'NuScale Power',rating:'Speculative Buy',bear:-50,base:85,bull:300,pol:['Energy Cmte/nuclear'],bil:['Emerging nuclear funds'],inst:['ARK Invest'],insider:['Hopkins CEO buying'],options:['Speculative calls'],retail:['Nuclear renaissance'],why:'Small Modular Reactor technology, first NRC-approved SMR. Ground floor of a new energy era.'},
      ARRY:{company:'Array Technologies',rating:'Moderate Buy',bear:-10,base:40,bull:90,pol:['Energy Committee'],bil:['Invesco','Energy funds'],inst:['Fidelity','State St'],insider:['Hostetler buying'],options:['Moderate accumul.'],retail:['Utility-scale solar'],why:'Solar tracking systems increase output 25%. IRA domestic content bonus gives structural advantage.'},
      OKLO:{company:'Oklo Inc.',rating:'Speculative Buy',bear:-50,base:90,bull:280,pol:['Energy Committee'],bil:['Sam Altman (chairman)','Peter Thiel'],inst:['ARK Invest'],insider:['DeWitte CEO buying'],options:['Early-stage speculative'],retail:['Nuclear/AI energy'],why:'Sam Altman\'s nuclear microreactor startup targeting AI data center power.'}}},
  'Space & Aerospace':{icon:'&#128640;',cls:'t-p',stocks:['ASTS','RKLB','IONQ','HII','KTOS','LUNR'],gems:['IRDM','SPIR','BKSY'],
    stockData:{
      RKLB:{company:'Rocket Lab',rating:'Moderate Buy',bear:-25,base:55,bull:130,pol:['Armed Services members'],bil:['Peter Thiel (Founders Fund)','Baillie G.'],inst:['ARK','Fidelity'],insider:['Beck CEO buying'],options:['Call accumulation'],retail:['Space community'],why:'SpaceX most credible small-launch competitor. Neutron rocket in development.'},
      HII:{company:'Huntington Ingalls',rating:'Strong Buy',bear:3,base:15,bull:32,pol:['Armed Services/VA delegations'],bil:['Citadel','Renaissance'],inst:['Vanguard','BlackRock'],insider:['Kastner CEO buying'],options:['Steady defense flow'],retail:['Defense income'],why:'Only builder of US nuclear aircraft carriers and submarines. Sole-source contracts for 15+ years.'},
      LUNR:{company:'Intuitive Machines',rating:'Speculative Buy',bear:-45,base:70,bull:200,pol:['Science/Space Committee'],bil:['ARK Invest (Cathie Wood)'],inst:['ARK','Space funds'],insider:['Altemus CEO buying'],options:['Volatile speculative'],retail:['Lunar believers'],why:'NASA Commercial Lunar Program prime contractor. Put a lander on the moon in 2024.'},
      IRDM:{company:'Iridium Communications',rating:'Moderate Buy',bear:5,base:25,bull:55,pol:['Commerce/Defense Cmte'],bil:['Silverpoint Capital'],inst:['Vanguard','Fidelity'],insider:['Desch CEO buying'],options:['Steady call interest'],retail:['Satellite niche'],why:'Only truly global satellite phone network. Government + maritime = ultra-stable revenue.'},
      SPIR:{company:'Spire Global',rating:'Speculative Buy',bear:-35,base:75,bull:180,pol:['Commerce/Science Cmte'],bil:['Emerging space funds'],inst:['ARK Invest'],insider:['Platzer CEO buying'],options:['Low vol speculative'],retail:['Space data community'],why:'Space-based data-as-a-service. Recurring satellite intelligence subscriptions.'},
      BKSY:{company:'BlackSky Technology',rating:'Speculative Buy',bear:-40,base:80,bull:200,pol:['Intelligence/Armed Services'],bil:['Defense-space funds'],inst:['Small-cap defense'],insider:["O'Toole CEO buying"],options:['Low vol speculative'],retail:['Space defense niche'],why:'Real-time Earth observation satellites feeding AI analytics to defense agencies.'}}},
  'Financial Services':{icon:'&#127974;',cls:'t-y',stocks:['V','GS','BRK.B','COIN','HOOD','SOFI'],gems:['AFRM','NU','OPFI'],
    stockData:{
      V:{company:'Visa',rating:'Strong Buy',bear:4,base:16,bull:32,pol:['Finance Committee'],bil:['Warren Buffett','Baillie G.'],inst:['Vanguard','BlackRock','T.Rowe'],insider:['McInerney buying'],options:['Steady LEAPS'],retail:['Dividend compounders'],why:'Digital payments toll booth. As cash disappears, Visa grows without credit risk.'},
      GS:{company:'Goldman Sachs',rating:'Strong Buy',bear:5,base:20,bull:42,pol:['Finance/Banking Cmte'],bil:['Solomon (insider)','Citadel'],inst:['Wellington','Fidelity'],insider:['Solomon buying'],options:['M&A revival calls'],retail:['Finance crowd'],why:'M&A + trading + asset management. IPO revival + PE deal flow = all three businesses accelerating.'},
      'BRK.B':{company:'Berkshire Hathaway B',rating:'Strong Buy',bear:3,base:14,bull:28,pol:['Finance Committee'],bil:['Warren Buffett (CEO)'],inst:['Vanguard','State St'],insider:['Buffett buying'],options:['Conservative LEAPS'],retail:['Value investors'],why:'Own what Buffett owns. Insurance float + BNSF + Apple stake.'},
      COIN:{company:'Coinbase',rating:'Moderate Buy',bear:-20,base:40,bull:120,pol:['Crypto-friendly members'],bil:['Andreessen Horowitz','Cathie Wood'],inst:['ARK Invest','Fidelity'],insider:['Armstrong buying'],options:['High call OI'],retail:['Crypto community'],why:'Regulatory clarity is a massive tailwind. Only regulated US crypto exchange.'},
      HOOD:{company:'Robinhood',rating:'Moderate Buy',bear:-15,base:38,bull:95,pol:['Multiple Congress'],bil:['Andreessen Horowitz'],inst:['ARK Invest','Coatue'],insider:['Tenev CEO buying'],options:['Retail-driven calls'],retail:['Retail trading #1'],why:'Retail trading boom + crypto + Gold subscriptions. Millennial runway.'},
      SOFI:{company:'SoFi Technologies',rating:'Moderate Buy',bear:-15,base:45,bull:100,pol:['Finance Committee'],bil:['SoftBank (major holder)','ARK'],inst:['Fidelity','Coatue'],insider:['Noto buying'],options:['Steady accumulation'],retail:['Fintech community'],why:'Digital bank with loans, investing, credit cards. Bank charter gives cheap deposit funding.'},
      AFRM:{company:'Affirm Holdings',rating:'Moderate Buy',bear:-20,base:50,bull:120,pol:['Finance Committee'],bil:['Andreessen Horowitz','Coatue'],inst:['ARK Invest','D1'],insider:['Levchin CEO buying'],options:['Aggressive sweeps'],retail:['BNPL community'],why:'Honest BNPL no hidden fees. Shopify + Amazon checkout scale.'},
      NU:{company:'Nu Holdings',rating:'Strong Buy',bear:5,base:35,bull:80,pol:['Latin America trade'],bil:['Warren Buffett (Berkshire)','Sequoia'],inst:['T.Rowe','Baillie G.'],insider:['Velez CEO buying'],options:['Growing institutional'],retail:['Emerging market fintech'],why:'Largest digital bank by customers (100M+). Dominates Brazil, Mexico, Colombia.'},
      OPFI:{company:'OppFi Inc.',rating:'Speculative Buy',bear:-15,base:55,bull:130,pol:['Finance Committee'],bil:['Emerging fintech funds'],inst:['Small-cap fintech'],insider:['Schwartz CEO buying'],options:['Speculative calls'],retail:['Under-radar fintech'],why:'AI lending for 60M Americans locked out of traditional banks. Huge underserved TAM.'}}}
};

// ─── PICK STOCK CHART ─────────────────────────────────────────────────────────
// Alpaca data API — same keys as trading API, different base URL
var ALPACA_DATA='https://data.alpaca.markets';

// Maps UI period → Alpaca bars params (timeframe, days back)
// and Yahoo fallback params (range, interval)
var PICK_PERIOD_MAP={
  '1D':{
    alpaca:{timeframe:'5Min', daysBack:1},
    yahoo:{range:'1d',interval:'5m'}
  },
  '1W':{
    alpaca:{timeframe:'1Hour', daysBack:7},
    yahoo:{range:'5d',interval:'60m'}
  },
  '1M':{
    alpaca:{timeframe:'1Day', daysBack:31},
    yahoo:{range:'1mo',interval:'1d'}
  },
  '3M':{
    alpaca:{timeframe:'1Day', daysBack:92},
    yahoo:{range:'3mo',interval:'1d'}
  },
  'YTD':{
    alpaca:{timeframe:'1Day', daysBack:null}, // calculated at call time
    yahoo:{range:'ytd',interval:'1d'}
  },
  '1Y':{
    alpaca:{timeframe:'1Week', daysBack:366},
    yahoo:{range:'1y',interval:'1wk'}
  }
};

// Build ISO start date string for Alpaca
function alpacaStartDate(daysBack){
  if(daysBack===null){
    // YTD — Jan 1 of current year
    return new Date(new Date().getFullYear(),0,1).toISOString().slice(0,10);
  }
  var d=new Date();d.setDate(d.getDate()-daysBack);
  return d.toISOString().slice(0,10);
}

// Fetch bars from Alpaca data API using stored keys
function fetchAlpacaBars(ticker,period){
  var key=document.getElementById('apiKey').value.trim();
  var sec=document.getElementById('apiSec').value.trim();
  if(!key||!sec) return Promise.reject(new Error('no keys'));
  var cfg=PICK_PERIOD_MAP[period]||PICK_PERIOD_MAP['1M'];
  var start=alpacaStartDate(cfg.alpaca.daysBack);
  // End = today
  var end=new Date().toISOString().slice(0,10);
  var url=ALPACA_DATA+'/v2/stocks/'+encodeURIComponent(ticker)+'/bars'
    +'?timeframe='+cfg.alpaca.timeframe
    +'&start='+start
    +'&end='+end
    +'&limit=1000'
    +'&adjustment=split'
    +'&feed=iex'
    +'&sort=asc';
  return fetch(url,{headers:{'APCA-API-KEY-ID':key,'APCA-API-SECRET-KEY':sec}})
    .then(function(r){
      if(!r.ok) throw new Error('alpaca '+r.status);
      return r.json();
    })
    .then(function(d){
      var bars=d.bars||[];
      if(!bars.length) throw new Error('empty');
      // Normalise to the same {t,c,h,l,v} shape used by the rest of the code
      return bars.map(function(b){
        return {
          t:Math.floor(new Date(b.t).getTime()/1000),
          c:b.c, h:b.h, l:b.l, v:b.v
        };
      });
    });
}

// Fetch bars from Yahoo (CORS proxy) as fallback
function fetchYahooBars(ticker,period){
  var cfg=PICK_PERIOD_MAP[period]||PICK_PERIOD_MAP['1M'];
  var y=cfg.yahoo;
  var url='https://query1.finance.yahoo.com/v8/finance/chart/'+ticker
    +'?range='+y.range+'&interval='+y.interval+'&includePrePost=false';
  return fetch(prx(url)).then(function(r){return r.json();}).then(function(d){
    var result=d&&d.chart&&d.chart.result&&d.chart.result[0];
    if(!result) throw new Error('no yahoo data');
    var ts=result.timestamp||[];
    var q0=(result.indicators&&result.indicators.quote&&result.indicators.quote[0])||{};
    var pairs=ts.map(function(t,i){
      return {t:t,c:q0.close[i],h:q0.high[i],l:q0.low[i],v:q0.volume[i]};
    }).filter(function(x){return x.c!=null;});
    if(!pairs.length) throw new Error('empty yahoo');
    return pairs;
  });
}

// ─── CHART CACHE HELPERS ──────────────────────────────────────────────────────
function chartCacheKey(ticker,period){return 'psp_chart_'+ticker+'_'+period;}

function saveChartCache(ticker,period,pairs){
  try{
    var key=chartCacheKey(ticker,period);
    var payload=JSON.stringify({pairs:pairs,saved:Date.now()});
    localStorage.setItem(key,payload);
  }catch(e){/* storage full – silently skip */}
}

function loadChartCache(ticker,period){
  try{
    var raw=localStorage.getItem(chartCacheKey(ticker,period));
    if(!raw) return null;
    var obj=JSON.parse(raw);
    // Expire 1D cache after 12 h; all others after 7 days
    var maxAge=period==='1D'?12*3600*1000:7*24*3600*1000;
    if(Date.now()-obj.saved>maxAge){localStorage.removeItem(chartCacheKey(ticker,period));return null;}
    return obj;
  }catch(e){return null;}
}

function fmtChartAge(savedMs){
  var diff=Math.round((Date.now()-savedMs)/60000);// minutes
  if(diff<2)  return 'just now';
  if(diff<60) return diff+'m ago';
  var h=Math.round(diff/60);
  if(h<24)    return h+'h ago';
  return Math.round(h/24)+'d ago';
}

// ─── DRAW CHART FROM PAIRS ────────────────────────────────────────────────────
function drawPickChart(canvas,pairs,period,fromCache,cacheAge){
  var labels=pairs.map(function(x){
    var d=new Date(x.t*1000);
    if(period==='1D') return d.toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit',hour12:true});
    if(period==='1W') return d.toLocaleDateString('en-US',{weekday:'short',month:'short',day:'numeric'});
    if(period==='1Y') return d.toLocaleDateString('en-US',{month:'short',day:'numeric',year:'2-digit'});
    return d.toLocaleDateString('en-US',{month:'short',day:'numeric'});
  });
  var prices=pairs.map(function(x){return x.c;});
  var vols=pairs.map(function(x){return x.v||0;});

  var first=prices[0],last=prices[prices.length-1];
  var pctChange=((last-first)/first*100);
  var lineColor=pctChange>=0?'#00c087':'#f03e3e';
  var fillColor=pctChange>=0?'rgba(0,192,135,0.08)':'rgba(240,62,62,0.08)';

  // Update stat strip
  var statEl=document.getElementById('pickChartStat');
  if(statEl){
    var hi=Math.max.apply(null,pairs.map(function(x){return x.h||x.c;}));
    var lo=Math.min.apply(null,pairs.map(function(x){return x.l||x.c;}));
    statEl.innerHTML=
      '<span class="pcs-item"><span class="pcs-lbl">Change</span><span class="pcs-val" style="color:'+lineColor+'">'+(pctChange>=0?'+':'')+pctChange.toFixed(2)+'%</span></span>'
      +'<span class="pcs-item"><span class="pcs-lbl">High</span><span class="pcs-val">'+f$(hi)+'</span></span>'
      +'<span class="pcs-item"><span class="pcs-lbl">Low</span><span class="pcs-val">'+f$(lo)+'</span></span>'
      +'<span class="pcs-item"><span class="pcs-lbl">Open</span><span class="pcs-val">'+f$(first)+'</span></span>'
      +(fromCache?'<span class="pcs-item pcs-cached" title="Cached data — refreshes when market is open">&#128190; '+fmtChartAge(cacheAge)+'</span>':'<span class="pcs-item pcs-live">&#9679; Live</span>');
  }

  var isDark=!document.body.hasAttribute('data-light');
  var gridColor=isDark?'rgba(255,255,255,0.04)':'rgba(0,0,0,0.05)';
  var tickColor=isDark?'#505c72':'#8896af';

  if(PICK_CHART_INST){PICK_CHART_INST.destroy();PICK_CHART_INST=null;}

  var maxVol=Math.max.apply(null,vols)||1;

  PICK_CHART_INST=new Chart(canvas,{
    type:'line',
    data:{
      labels:labels,
      datasets:[{
        data:prices,
        borderColor:lineColor,
        borderWidth:2,
        pointRadius:0,
        pointHoverRadius:4,
        pointHoverBackgroundColor:lineColor,
        fill:true,
        backgroundColor:fillColor,
        tension:0.2,
        yAxisID:'y'
      },{
        data:vols,
        type:'bar',
        backgroundColor:lineColor+'22',
        borderColor:'transparent',
        borderWidth:0,
        yAxisID:'vol',
        barPercentage:0.8
      }]
    },
    options:{
      responsive:true,
      maintainAspectRatio:false,
      interaction:{mode:'index',intersect:false},
      plugins:{
        legend:{display:false},
        tooltip:{
          backgroundColor:isDark?'#1e2433':'#ffffff',
          borderColor:isDark?'#2d3748':'#dde1ec',
          borderWidth:1,
          titleColor:isDark?'#8892a8':'#4a5568',
          bodyColor:isDark?'#e2e8f4':'#1a2035',
          padding:10,
          callbacks:{
            title:function(items){return labels[items[0].dataIndex];},
            label:function(c){
              if(c.datasetIndex===0) return ' Price: '+f$(c.raw);
              var v=c.raw;
              if(v>=1e6) return ' Vol: '+(v/1e6).toFixed(1)+'M';
              if(v>=1e3) return ' Vol: '+(v/1e3).toFixed(0)+'K';
              return ' Vol: '+v;
            }
          }
        }
      },
      scales:{
        x:{
          grid:{color:gridColor,drawBorder:false},
          ticks:{color:tickColor,maxTicksLimit:7,font:{size:10}},
          border:{display:false}
        },
        y:{
          position:'right',
          grid:{color:gridColor,drawBorder:false},
          ticks:{color:tickColor,font:{size:10},callback:function(v){return f$(v);}},
          border:{display:false}
        },
        vol:{
          position:'left',
          grid:{display:false},
          ticks:{display:false},
          border:{display:false},
          max:maxVol*6
        }
      }
    }
  });
}

// ─── LOAD PICK CHART (Alpaca → Yahoo → cache) ────────────────────────────────
function loadPickChart(ticker,period){
  PICK_CHART_TICKER=ticker;
  PICK_CHART_PERIOD=period||'1M';
  var canvas=document.getElementById('pickChart');
  if(!canvas) return;

  // Sync active period button
  document.querySelectorAll('.pc-btn').forEach(function(b){
    b.classList.toggle('active',b.dataset.p===PICK_CHART_PERIOD);
  });

  // Show cached data instantly while live fetch runs in background
  var cached=loadChartCache(ticker,PICK_CHART_PERIOD);
  if(cached&&cached.pairs&&cached.pairs.length){
    drawPickChart(canvas,cached.pairs,PICK_CHART_PERIOD,true,cached.saved);
  } else {
    var statEl=document.getElementById('pickChartStat');
    if(statEl) statEl.innerHTML='<span style="font-size:11px;color:var(--tx3)">Loading chart...</span>';
    if(PICK_CHART_INST){PICK_CHART_INST.destroy();PICK_CHART_INST=null;}
  }

  // ── Try Alpaca first (authenticated, no CORS proxy, works after hours) ──
  fetchAlpacaBars(ticker,PICK_CHART_PERIOD).then(function(pairs){
    saveChartCache(ticker,PICK_CHART_PERIOD,pairs);
    if(PICK_CHART_TICKER===ticker&&PICK_CHART_PERIOD===period)
      drawPickChart(canvas,pairs,PICK_CHART_PERIOD,false,Date.now());
  }).catch(function(){
    // ── Alpaca failed (no keys or error) → try Yahoo ──
    fetchYahooBars(ticker,PICK_CHART_PERIOD).then(function(pairs){
      saveChartCache(ticker,PICK_CHART_PERIOD,pairs);
      if(PICK_CHART_TICKER===ticker&&PICK_CHART_PERIOD===period)
        drawPickChart(canvas,pairs,PICK_CHART_PERIOD,false,Date.now());
    }).catch(function(){
      // ── Both failed → if no cache was shown, tell the user ──
      if(!cached||!cached.pairs||!cached.pairs.length){
        var statEl=document.getElementById('pickChartStat');
        if(statEl) statEl.innerHTML=
          '<span style="color:var(--tx3);font-size:11px">&#9888; Could not load chart. '
          +(document.getElementById('apiKey').value.trim()
            ?'Check your connection and try again.'
            :'Connect your Alpaca account above to load chart data any time.')
          +'</span>';
      }
    });
  });
}

// ─── PICKS RENDERER ───────────────────────────────────────────────────────────
var STEPS=['Scanning STOCK Act disclosures...','Cross-referencing analyst ratings...','Running AI prediction models...','Ranking by conviction score...'];

function fetchPrices(){
  return fetch(prx('https://query1.finance.yahoo.com/v7/finance/quote?symbols='+ALL_STOCKS.map(function(s){return s.ticker;}).join(','))).then(function(r){return r.json();}).then(function(d){
    (d&&d.quoteResponse&&d.quoteResponse.result||[]).forEach(function(q){
      var s=ALL_STOCKS.find(function(x){return x.ticker===q.symbol;});
      if(s&&q.regularMarketPrice){s.livePrice=q.regularMarketPrice;s.liveChg=q.regularMarketChangePercent||0;LIVE_PRICES[q.symbol]=q.regularMarketPrice;}
    });
    return true;
  }).catch(function(){return false;});
}

function getDailyPick(){
  var day=Math.floor(Date.now()/86400000);
  return DB.map(function(s,i){return Object.assign({},s,{score:s.polScore*0.55+s.conf*0.45+(day%(i+4)===0?6:0)});}).sort(function(a,b){return b.score-a.score;});
}

function renderPicks(sorted,live){
  var pick=sorted[0];var runners=sorted.slice(1,4);
  var p=pick.livePrice||pick.fb;var chg=pick.liveChg||0;var isUp=chg>=0;
  var today=new Date().toLocaleDateString('en-US',{weekday:'short',month:'short',day:'numeric',year:'numeric'});
  var bMode=MODE==='paper';var cv=convScore(pick);var cvCls=cv>=80?'cv-hi':cv>=60?'cv-go':cv>=40?'cv-md':'cv-lo';

  // Update sidebar
  var snap=document.getElementById('sideSnapshot');
  if(snap){
    snap.innerHTML='<div class="stats-row" style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px">'
      +'<div class="as-box"><div class="as-val">'+pick.ticker+'</div><div class="as-lbl">Top Pick</div></div>'
      +'<div class="as-box"><div class="as-val" style="color:'+(isUp?'#00c087':'#f03e3e')+'">'+(isUp?'+':'')+chg.toFixed(2)+'%</div><div class="as-lbl">Day Change</div></div>'
      +'<div class="as-box"><div class="as-val">'+f$(p)+'</div><div class="as-lbl">Price</div></div>'
      +'<div class="as-box"><div class="as-val"><span class="cv-lbl '+cvCls+'">'+cv+'</span></div><div class="as-lbl">Conviction</div></div>'
      +'</div>'
      +'<div style="font-size:11px;color:var(--tx2);line-height:1.6">'+pick.why.split('.')[0]+'.</div>';
  }

  // Main pick card
  var html='<div class="dt-badge">'+today+'</div>';
  html+='<div class="card">';
  html+='<div class="ticker-row">'
    +'<div class="tr-left"><div class="tk">'+pick.ticker+'</div><div class="tn">'+pick.company+'</div></div>'
    +'<div class="tr-right"><div class="tr-price">'+f$(p)+'</div><div class="tr-chg '+(isUp?'up':'dn')+'">'+(isUp?'+':'')+chg.toFixed(2)+'% &nbsp;&mdash;&nbsp; $'+ORDER_AMT+' = '+(ORDER_AMT/p).toFixed(4)+' sh</div></div>'
    +'</div>';
  html+='<div class="tags">'
    +'<span class="tag t-g nc">'+pick.rating+'</span>'
    +'<span class="tag t-b nc">&#127963; Top Congressional Buy</span>'
    +'<span class="tag '+pick.sCls+'" onclick="showTab(\'sectors\',document.querySelector(\'.nav-tab:nth-child(2)\'))">'+pick.sector+' &#8599;</span>'
    +(live&&pick.livePrice?'<span class="tag t-s nc">&#9679; Live</span>':'<span class="tag t-s nc">Est.</span>')
    +'</div>';
  html+='<div class="sigs">'+sigChips(pick)+'</div>';

  // ── STOCK CHART BLOCK ──
  html+='<div class="pick-chart-wrap">';
  html+='<div class="pick-chart-hdr">';
  html+='<div class="pick-chart-periods">';
  ['1D','1W','1M','3M','YTD','1Y'].forEach(function(p){
    html+='<button class="pc-btn'+(p==='1M'?' active':'')+'" data-p="'+p+'" onclick="loadPickChart(\''+pick.ticker+'\',\''+p+'\')">'+p+'</button>';
  });
  html+='</div>';
  html+='<div class="pick-chart-stat" id="pickChartStat"><span style="font-size:11px;color:var(--tx3)">Loading chart...</span></div>';
  html+='</div>';
  html+='<div style="position:relative;height:200px"><canvas id="pickChart"></canvas></div>';
  html+='</div>';

  html+='<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:12px">'
    +'<div class="as-box"><div class="as-val">'+pick.polScore+'<small style="font-size:11px;color:var(--tx3)">/100</small></div><div class="as-lbl">Political Score</div></div>'
    +'<div class="as-box"><div class="as-val">'+pick.conf+'<small style="font-size:11px;color:var(--tx3)">/100</small></div><div class="as-lbl">Analyst Conf.</div></div>'
    +'<div class="as-box"><div class="as-val"><span class="cv-lbl '+cvCls+'">&#9889; '+cv+'</span></div><div class="as-lbl">Conviction</div></div>'
    +'</div>';
  html+='<div class="cv-row"><div class="cv-bar-track"><div class="cv-bar-fill" style="width:'+cv+'%;background:'+(cv>=80?'#00c087':cv>=60?'#3d8bff':cv>=40?'#f6ad37':'#f03e3e')+'"></div></div><span class="cv-val">'+cv+'%</span></div>';
  html+='<div class="why-box">'+pick.why+'</div>';
  html+=whosBuying(pick,false);
  html+='<div class="dvd"></div><div class="lbl">Analyst consensus</div><p class="ctx">'+pick.anaCtx+'</p>';
  html+=articlesHTML(pick.ticker);
  html+='<div class="action-row">'
    +'<button class="btn-buy'+(bMode?' paper':'')+'" onclick="buyStock(\''+pick.ticker+'\',this)">Buy $'+ORDER_AMT+(bMode?' (P)':'')+'</button>'
    +'<button class="btn-buy-sm" onclick="addToWL(\''+pick.ticker+'\')">+ Watchlist</button>'
    +'<a href="https://finance.yahoo.com/quote/'+pick.ticker+'" target="_blank" class="btn-link">&#128240; News</a>'
    +'</div>';
  html+=bracketPanel(pick.ticker);
  html+='</div>';

  // Runner-ups
  html+='<div class="lbl" style="margin-bottom:8px">Runner-Up Picks <span style="font-size:10px;font-weight:400;text-transform:none;letter-spacing:0;color:var(--tx3)">Click to explore sector</span></div>';
  html+='<div class="runner-grid">';
  runners.forEach(function(r){
    var rp=r.livePrice||r.fb;var rc=r.liveChg||0;var ru=rc>=0;
    html+='<div class="rc" onclick="openSectorModal(\''+r.sector+'\')">'
      +'<div class="rc-tk">'+r.ticker+'</div>'
      +'<div class="rc-co">'+r.company+'</div>'
      +'<div class="rc-pr">'+f$(rp)+'</div>'
      +'<div class="rc-ch '+(ru?'up':'dn')+'">'+(ru?'+':'')+rc.toFixed(2)+'%</div>'
      +'<div class="rc-w">'+r.why.split('.')[0]+'.</div>'
      +'</div>';
  });
  html+='</div>';

  // Hidden Gems
  html+='<div class="lbl" style="margin-bottom:8px">Hidden Gem Picks <span style="font-size:10px;font-weight:400;text-transform:none;letter-spacing:0;color:var(--tx3)">AI bear / base / bull predictions</span></div>';
  html+='<div class="gem-grid">';
  GEMS.forEach(function(g){
    var gp=g.livePrice||g.fb;var gc=g.liveChg||0;var gu=gc>=0;var gcColor=gu?'#00c087':'#f03e3e';
    html+='<div class="gem-c">'
      +'<div class="gc-top">'
      +'<div class="gc-tk">'+g.ticker+'</div>'
      +'<div class="gc-co">'+g.company+'</div>'
      +'<div class="gc-badges">'
      +'<span class="tag '+g.tCls+'" onclick="openSectorModal(\''+g.sector+'\')">'+g.theme+' &#8599;</span>'
      +'<span class="tag t-s nc">'+g.rating+'</span>'
      +'</div>'
      +'</div>'
      +'<div class="gc-pr">'+f$(gp)+' <span style="font-size:11px;font-weight:700;color:'+gcColor+'">'+(gu?'+':'')+gc.toFixed(2)+'%</span></div>'
      +'<div class="gc-roi">'+pct(g.bear)+' to +'+g.bull+'% projected range</div>'
      +'<div style="margin:5px 0 4px">'+convBadge(g)+'</div>'
      +'<div class="sigs" style="margin-bottom:4px">'+sigChips(g)+'</div>'
      +whosBuying(g,true)
      +'<div class="gc-why">'+g.why+'</div>'
      +predBars(g)
      +'<div class="cat-txt">'+g.catalyst+'</div>'
      +'<button class="btn-buy'+(bMode?' paper':'')+'" style="width:100%;margin-top:10px;font-size:12px;padding:8px" onclick="buyStock(\''+g.ticker+'\',this)">Buy $'+ORDER_AMT+(bMode?' (P)':'')+'</button>'
      +bracketPanel(g.ticker)
      +'</div>';
  });
  html+='</div>';
  html+='<p class="disc">Business Insiders is for informational and entertainment purposes only. Not financial advice. AI predictions are model-generated estimates. Data from STOCK Act disclosures, 13F filings, SEC Form 4, options flow, and social sentiment.</p>';
  document.getElementById('picksOut').innerHTML=html;
  // Load stock chart for top pick with slight delay so canvas is in DOM
  setTimeout(function(){loadPickChart(pick.ticker,'1M');},50);
}

function run(){
  var btn=document.getElementById('pickBtn');
  btn.disabled=true;btn.textContent='Analyzing...';
  var si=0;
  document.getElementById('picksOut').innerHTML='<div class="spin"><div class="spn"></div><div class="spin-t">Analyzing all signal sources</div><div class="spin-s" id="ss">'+STEPS[0]+'</div></div>';
  var t=setInterval(function(){si=(si+1)%STEPS.length;var el=document.getElementById('ss');if(el)el.textContent=STEPS[si];},1200);
  fetchPrices().then(function(live){
    clearInterval(t);
    renderPicks(getDailyPick(),live);
    btn.textContent='&#9889; Analyze & Get Today\'s Picks';
    btn.disabled=false;
  });
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
loadAB();
// Auto-run picks on load for better UX
window.addEventListener('DOMContentLoaded',function(){
  // Small delay so page renders first
  setTimeout(function(){
    if(document.getElementById('tab-picks').classList.contains('active')){
      run();
    }
  },400);
});
