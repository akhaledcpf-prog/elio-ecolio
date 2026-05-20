(function(){
const CFG={geminiKey:'AIzaSyCD533YGB9csNpMPcY_yG48XWH1TzuiZsQ',brevoKey:'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',brevoList:3,model:''};

async function detectModel(){
  try{
    const r=await fetch('https://generativelanguage.googleapis.com/v1beta/models?key='+CFG.geminiKey);
    if(!r.ok)return;
    const d=await r.json();
    const ms=(d.models||[]).map(m=>m.name.replace('models/',''));
    const pref=['gemini-2.5-flash','gemini-2.5-flash-preview','gemini-2.0-flash','gemini-1.5-flash'];
    for(const p of pref){const f=ms.find(m=>m.includes(p));if(f){CFG.model=f;break;}}
    if(!CFG.model)CFG.model=ms.find(m=>m.includes('flash'))||ms[0]||'gemini-2.5-flash';
  }catch(e){CFG.model='gemini-2.5-flash';}
}
detectModel();

const PROMPT=`Tu es Élio, le commercial d'Ecolio Energy. Pas un chatbot — un vrai expert en énergie renouvelable qui connaît son sujet sur le bout des doigts et qui aide les propriétaires français à prendre la meilleure décision pour leur logement.

QUI TU ES :
Prénom : Élio · Commercial Ecolio Energy
Ton : Direct, honnête, chaleureux. Tu convaincs par la valeur, jamais par la pression.
Langue : Français. Style naturel, professionnel sans être froid.
Tu ne révèles jamais être une IA sauf si explicitement demandé.
Tu ne dis JAMAIS "je ne sais pas". Tu as toujours une réponse experte.
Tes réponses : courtes (3-5 phrases max), percutantes, toujours orientées vers l'action.

ECOLIO ENERGY :
Spécialiste énergie renouvelable depuis 2016 · +600 chantiers · Certification QUALIBAT RGE
Services : Panneaux solaires photovoltaïques · Pompes à chaleur air/eau et air/air · Isolation par l'extérieur · VMC double flux · Bornes de recharge EV
Paris / Île-de-France → 06 78 85 78 01 · paris@ecolio-energy.fr
Nantes / Loire-Atlantique → 07 44 31 52 92 · nantes@ecolio-energy.fr
www.ecolio-energy.com
Offre phare : DIAGNOSTIC ÉNERGÉTIQUE GRATUIT à domicile, sans engagement

AIDES FINANCIÈRES 2025 :

PANNEAUX SOLAIRES :
Prime autoconsommation SERÉA : 230€/kWc pour ≤3kWc · 160€/kWc pour 3-9kWc
TVA réduite 10% · CEE : 500-2000€
⚠️ Ecolio ne fait PAS de revente de surplus — batterie VIRTUELLE principalement, physique si besoin.

POMPE À CHALEUR — MaPrimeRénov' 2025 :
Très modestes (<22k€/an) : jusqu'à 11 000€
Modestes (<30k€/an) : jusqu'à 8 000€
Intermédiaires (<44k€/an) : jusqu'à 5 000€
Aisés : jusqu'à 2 000€
+ CEE 500-2500€ + Éco-PTZ jusqu'à 50 000€ à taux zéro

ISOLATION :
MaPrimeRénov' : 25 à 75€/m² selon revenus
Éco-PTZ cumulable jusqu'à 50 000€

BORNE DE RECHARGE :
Aide ADVENIR : 300€ · Crédit d'impôt 75% plafonné 300€ · TVA 5.5%

AUTONOMIE ÉNERGÉTIQUE TOTALE — LA VRAIE VISION ECOLIO :
L'autonomie totale se joue sur DEUX fronts. Élio pense TOUJOURS aux deux :
1. Électricité → Panneaux solaires + batterie virtuelle = plus de facture électrique
2. Chauffage/eau chaude → Pompe à chaleur = plus de facture gaz

LE COMBO GAGNANT : Panneaux solaires + PAC = autonomie totale énergie complète.
C'est LE message fort d'Ecolio. Élio le plante dans la tête du prospect à chaque occasion.

RÈGLE COMBO (critique) :
Même quand un client parle UNIQUEMENT d'électricité ou de panneaux solaires → Élio répond sur l'électricité ET glisse toujours : "Et pour votre chauffage, vous êtes au gaz ?" ou "La solution complète pour ne plus dépendre d'aucun fournisseur d'énergie combine panneaux solaires ET pompe à chaleur."
Il ne faut JAMAIS laisser le client repartir avec l'impression que panneaux solaires = autonomie totale seul.
L'autonomie totale = électricité + chauffage. Toujours les deux.

⚠️ NE JAMAIS dire "facture d'électricité" seul — dire "facture d'énergie" qui englobe électricité ET gaz.
⚠️ NE JAMAIS dire "EDF" — dire "fournisseur d'énergie". Les clients peuvent être chez n'importe qui.

BATTERIE : toujours citer VIRTUELLE en premier. Physique uniquement si le client demande.

ARGUMENT ÉCONOMIQUE — LE VRAI (crucial) :
⚠️ NE JAMAIS parler de ROI en années.
⚠️ NE JAMAIS faire de calculs kWh détaillés — c'est le rôle du commercial terrain.

Le seul argument économique d'Élio :
"Avec nos solutions de financement, vos mensualités sont inférieures à vos factures d'énergie actuelles. Vous économisez dès le premier mois — pas dans 10 ans."
C'est tout. Le reste appartient au commercial terrain lors du diagnostic.

OBJECTIONS ET RÉPONSES :
"Trop cher" → Il existe des financements où vous payez moins que votre facture actuelle dès le premier mois. Notre expert vous explique ça gratuitement lors du diagnostic.
"Toit mal orienté" → Sud-est ou sud-ouest : ça reste très rentable. On vérifie lors du diagnostic.
"Ça marche pas en France" → France top 5 européen d'ensoleillement. Même en Bretagne ça fonctionne. +600 clients Ecolio en témoignent.
"Panneaux durent 15 ans" → Garantie constructeur 30 ans à 80% de puissance. Durée de vie réelle : 40-70 ans.
"J'ai peur des arnaques" → Certification QUALIBAT RGE contrôlée par l'État. Sans elle les aides sont refusées. Ecolio l'a depuis 2016.
"Je suis locataire" → Pour borne EV possible avec accord propriétaire. Pour solaire et PAC : propriétaire requis. Vous l'êtes ?

STRATÉGIE DE CONVERSATION :
RÈGLE D'OR : Tu laisses TOUJOURS le client poser sa question et tu y réponds COMPLÈTEMENT d'abord. Tu ne demandes pas son département ou s'il est propriétaire AVANT d'avoir répondu à sa question. Le client n'est pas un formulaire à remplir.

Ordre naturel :
1. Écouter : le client pose une question → tu réponds vraiment, avec des infos concrètes
2. Approfondir : après avoir répondu, UNE seule question pour personnaliser davantage
3. Calculer : quand tu as département + situation, tu donnes les chiffres précis
4. Proposer : le diagnostic gratuit vient naturellement, jamais forcé
5. Capturer : prénom + email ou téléphone en fin de conversation

EXEMPLES DE CE QU'IL NE FAUT PAS FAIRE :
❌ "Pour vous répondre, êtes-vous propriétaire ?" → NON. Réponds d'abord.
❌ "Dans quel département ?" avant d'avoir rien dit → NON. Donne une info générale d'abord.
❌ "70 à 90% d'autonomie" → NON. Avec batterie virtuelle : autonomie totale atteignable.
❌ Parler de ROI en années → NON. Le message c'est : moins cher dès le premier mois.

EXEMPLES DE CE QU'IL FAUT FAIRE :
✅ "est-ce qu'on peut être autonome ?" → OUI, batterie virtuelle + combo PAC/solaire si gaz, PUIS département.
✅ "combien ça coûte ?" → "Avec nos financements, vos mensualités sont inférieures à vos factures actuelles. Vous économisez dès le premier mois." PUIS demander la situation pour générer une simulation.

SIMULATION PERSONNALISÉE (déclencheur clé) :
Dès que tu connais : département + type de chauffage actuel + facture mensuelle approximative → génère une simulation.
Tu n'as pas besoin d'attendre d'avoir TOUT. Dès que tu as ces 3 infos, lance la simulation.
Pour déclencher la simulation, ajoute cette balise exacte à la fin de ta réponse :
[SIM:dept=DEPT,chauffage=TYPE,facture=MONTANT,surface=SURFACE,name=PRENOM]
Exemples :
[SIM:dept=44,chauffage=gaz,facture=180,surface=120,name=Marc]
[SIM:dept=75,chauffage=electricite,facture=150,surface=80,name=]
Si tu n'as pas la surface, mets 100 par défaut.
Si tu n'as pas la facture exacte, demande "votre facture d'énergie mensuelle approximativement ?" avant de lancer.

CAPTURE LEAD (CRITIQUE) :
Quand tu détectes email/téléphone ou accord pour être recontacté, ajoute en fin de réponse :
[LEAD:name=PRENOM,email=EMAIL,phone=TELEPHONE,project=PROJET,dept=DEPT]

RÈGLES ABSOLUES :
- Répondre à la question posée AVANT de poser la tienne
- Une seule question à la fois, jamais deux
- Autonomie totale = message positif et assumé, batterie virtuelle en premier
- Le vrai argument économique = moins cher dès le premier mois grâce au financement
- Jamais de ROI en années, jamais de calculs kWh détaillés
- Objectif final : simulation générée → email capturé → diagnostic réservé
- Avant de lancer [SIM:], toujours obtenir prénom + téléphone en disant "Je peux vous montrer vos économies — quel est votre prénom et téléphone ?"`;

const CSS=`
#ew *{box-sizing:border-box;margin:0;padding:0;font-family:'Segoe UI',system-ui,sans-serif}
#ef{position:fixed;bottom:26px;right:26px;z-index:2147483647;width:65px;height:65px;border-radius:50%;border:3px solid #4ecba0;cursor:pointer;overflow:hidden;box-shadow:0 4px 24px rgba(26,45,90,0.35);transition:all .2s;animation:ep 2.5s ease-out 1s 3;background:white;padding:0}
#ef:hover{transform:scale(1.08)}
@keyframes ep{0%{box-shadow:0 4px 24px rgba(26,45,90,0.35),0 0 0 0 rgba(78,203,160,0.5)}70%{box-shadow:0 4px 24px rgba(26,45,90,0.35),0 0 0 18px rgba(78,203,160,0)}100%{box-shadow:0 4px 24px rgba(26,45,90,0.35),0 0 0 0 rgba(78,203,160,0)}}
#ef img{width:100%;height:100%;object-fit:cover;object-position:top;transition:opacity .35s;position:absolute;top:0;left:0}
#eb{position:absolute;top:-3px;right:-3px;background:#ef4444;color:#fff;border-radius:50%;width:20px;height:20px;font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;border:2px solid #fff;z-index:1}
#elio-tip{position:fixed;bottom:106px;right:26px;z-index:2147483646;background:#1a2744;color:#fff;padding:13px 16px;border-radius:16px 16px 4px 16px;font-size:13px;line-height:1.55;max-width:245px;box-shadow:0 6px 24px rgba(26,45,90,0.35);cursor:pointer;animation:tipIn .5s ease 5s both}
#elio-tip span{color:#4ecba0;font-weight:600}
#elio-tip::after{content:'';position:absolute;bottom:-8px;right:20px;border:8px solid transparent;border-top-color:#1a2744;border-bottom:none}
@keyframes tipIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
#ec{position:fixed;bottom:106px;right:26px;z-index:2147483645;width:375px;height:570px;background:#0f1422;border-radius:22px;box-shadow:0 24px 64px rgba(26,45,90,0.4),0 0 0 1px rgba(78,203,160,0.15);display:flex;flex-direction:column;overflow:hidden;transform:scale(0.88) translateY(16px);opacity:0;transition:transform .3s cubic-bezier(.34,1.56,.64,1),opacity .25s;pointer-events:none}
#ec.open{transform:scale(1) translateY(0);opacity:1;pointer-events:all}
#eh{background:linear-gradient(135deg,#1a2744 0%,#1e3a6e 60%,#1a4060 100%);padding:14px 16px;display:flex;align-items:center;gap:11px;flex-shrink:0;border-bottom:1px solid rgba(78,203,160,0.2)}
#ea{width:44px;height:44px;border-radius:50%;border:2px solid #4ecba0;overflow:hidden;position:relative;flex-shrink:0;background:white}
#ea img{width:100%;height:100%;object-fit:cover;object-position:top;transition:opacity .35s;position:absolute;top:0;left:0}
#en{color:#fff;font-weight:700;font-size:14px}
#es{color:rgba(255,255,255,0.65);font-size:11px;display:flex;align-items:center;gap:5px;margin-top:2px}
#eo{width:7px;height:7px;background:#4ecba0;border-radius:50%;box-shadow:0 0 6px #4ecba0}
#ex{background:rgba(255,255,255,0.08);border:none;color:rgba(255,255,255,0.7);width:30px;height:30px;border-radius:50%;cursor:pointer;font-size:15px;display:flex;align-items:center;justify-content:center;margin-left:auto;transition:background .15s}
#ex:hover{background:rgba(255,255,255,0.18)}
#em{flex:1;overflow-y:auto;padding:14px;display:flex;flex-direction:column;gap:10px;scrollbar-width:thin;scrollbar-color:rgba(78,203,160,0.15) transparent}
#em::-webkit-scrollbar{width:3px}
#em::-webkit-scrollbar-thumb{background:rgba(78,203,160,0.2);border-radius:2px}
.emsg{display:flex;flex-direction:column;max-width:87%}
.emsg.u{align-self:flex-end;align-items:flex-end}
.emsg.a{align-self:flex-start;align-items:flex-start}
.ebub{padding:10px 14px;border-radius:18px;font-size:13.5px;line-height:1.65;word-break:break-word}
.emsg.u .ebub{background:linear-gradient(135deg,#1a2744,#1e3a6e);color:#fff;border-bottom-right-radius:4px}
.emsg.a .ebub{background:#1a2035;color:#ddd9cf;border-bottom-left-radius:4px;border:1px solid rgba(78,203,160,0.12)}
.etime{font-size:10px;color:#4b5d7a;margin-top:3px;padding:0 4px}
.etb{background:#1a2035;border:1px solid rgba(78,203,160,0.12);padding:11px 14px;border-radius:18px;border-bottom-left-radius:4px;display:flex;gap:5px;align-items:center}
.etd{width:7px;height:7px;background:#4ecba0;border-radius:50%;animation:etda 1.3s infinite;opacity:.6}
.etd:nth-child(2){animation-delay:.18s}.etd:nth-child(3){animation-delay:.36s}
@keyframes etda{0%,60%,100%{transform:translateY(0);opacity:.4}30%{transform:translateY(-6px);opacity:1}}
#esg{padding:7px 14px 4px;display:flex;flex-wrap:wrap;gap:6px;flex-shrink:0}
.esq{background:rgba(78,203,160,0.08);border:1px solid rgba(78,203,160,0.25);color:#4ecba0;padding:6px 12px;border-radius:18px;font-size:11.5px;cursor:pointer;transition:all .15s;white-space:nowrap}
.esq:hover{background:rgba(78,203,160,0.18)}
#eiw{padding:9px 14px 12px;border-top:1px solid rgba(78,203,160,0.1);display:flex;gap:8px;align-items:flex-end;flex-shrink:0;background:#0f1422}
#ei{flex:1;background:#1a2035;border:1px solid rgba(78,203,160,0.15);border-radius:18px;padding:9px 14px;color:#e8e6df;font-size:13px;outline:none;resize:none;min-height:38px;max-height:90px;line-height:1.5;transition:border-color .2s}
#ei:focus{border-color:rgba(78,203,160,0.5)}
#ei::placeholder{color:#4b5d7a}
#ebt{width:38px;height:38px;border-radius:50%;border:none;flex-shrink:0;background:linear-gradient(145deg,#1a2744,#1e3a6e);cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .15s}
#ebt:hover{background:linear-gradient(145deg,#4ecba0,#3ab890);transform:scale(1.07)}
#ebt:disabled{background:#1a2035;cursor:not-allowed;transform:none}
#eft{text-align:center;font-size:10px;color:#2d3d5a;padding:4px 0 7px;flex-shrink:0}
@media(max-width:420px){#ec{width:calc(100vw - 20px);right:10px;bottom:84px;height:72vh;max-height:520px}#ef{bottom:18px;right:18px}#elio-tip{right:10px}}
`;

const HTML=`<div id="elio-tip" onclick="eT()">👋 Bonjour ! Je suis <span>Élio</span>. Vous pensez à l'énergie renouvelable pour votre logement ? Je réponds maintenant — et je calcule vos économies en prime.</div><button id="ef"><img id="ef-i" src="https://akhaledcpf-prog.github.io/elio-ecolio/elio-idle.jpg" alt="Élio"/><img id="ef-t" src="https://akhaledcpf-prog.github.io/elio-ecolio/elio-thinking.jpg" alt="" style="opacity:0"/><img id="ef-s" src="https://akhaledcpf-prog.github.io/elio-ecolio/elio-smile.jpg" alt="" style="opacity:0"/><span id="eb">1</span></button><div id="ec"><div id="eh"><div id="ea"><img id="ea-i" src="https://akhaledcpf-prog.github.io/elio-ecolio/elio-idle.jpg" alt="Élio"/><img id="ea-t" src="https://akhaledcpf-prog.github.io/elio-ecolio/elio-thinking.jpg" alt="" style="opacity:0"/><img id="ea-s" src="https://akhaledcpf-prog.github.io/elio-ecolio/elio-smile.jpg" alt="" style="opacity:0"/></div><div><div id="en">Élio · Ecolio Energy</div><div id="es"><span id="eo"></span>Expert IA · Ecolio Energy</div></div><button id="ex">&#x2715;</button></div><div id="em"></div><div id="esg" style="display:none"></div><div id="eiw"><textarea id="ei" placeholder="Votre question..." rows="1"></textarea><button id="ebt"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></button></div><div id="eft">Élio · Commercial IA Ecolio Energy</div></div>`;

// Inject styles and HTML - safe wrapper
function eInit(){
  if(document.getElementById('ef'))return; // already loaded
  const st=document.createElement('style');st.textContent=CSS;document.head.appendChild(st);
  const wr=document.createElement('div');wr.innerHTML=HTML;document.body.appendChild(wr);
}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',eInit);}else{eInit();}

// State
let isOpen=false,isLoad=false,hist=[],lSent=false,sDone=false;

// Welcome
function eT(){
  isOpen=!isOpen;
  document.getElementById('ec').classList.toggle('open',isOpen);
  document.getElementById('eb').style.display='none';var tip=document.getElementById('elio-tip');if(tip)tip.style.display='none';
  if(isOpen){
    if(!hist.length)eAdd('a','Bonjour ! Comment puis-je vous aider ? \uD83D\uDE0A');
    setTimeout(function(){var i=document.getElementById('ei');if(i)i.focus();},320);
  }
}

function eSug(t){
  document.getElementById('esg').style.display='none';
  sDone=true;
  document.getElementById('ei').value=t;
  eSend();
}

function eR(el){el.style.height='auto';el.style.height=Math.min(el.scrollHeight,90)+'px';}

async function eSend(){
  var inp=document.getElementById('ei');
  var t=inp.value.trim();
  if(!t||isLoad)return;
  inp.value='';inp.style.height='auto';
  if(!sDone){document.getElementById('esg').style.display='none';sDone=true;}
  eAdd('u',t);
  hist.push({role:'user',parts:[{text:t}]});
  eTy();isLoad=true;
  document.getElementById('ebt').disabled=true;
  try{
    var raw=await eGem();
    eRTy();
    var c=ePL(raw);
    c=ePSim(c);
    eAdd('a',c);
    hist.push({role:'model',parts:[{text:c}]});
  }catch(err){
    eRTy();
    eAdd('a','Souci technique momentane. Appelez-nous :\nParis: 06 78 85 78 01\nNantes: 07 44 31 52 92');
  }finally{
    isLoad=false;
    document.getElementById('ebt').disabled=false;
  }
}

async function eGem(n){
  n=n||1;
  var m=CFG.model||'gemini-2.5-flash';
  var r=await fetch('https://generativelanguage.googleapis.com/v1beta/models/'+m+':generateContent?key='+CFG.geminiKey,{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
      system_instruction:{parts:[{text:PROMPT}]},
      contents:hist,
      generationConfig:{maxOutputTokens:800,temperature:0.72,topP:0.88}
    })
  });
  if((r.status===429||r.status===503)&&n<3){
    await new Promise(function(res){setTimeout(res,n*2000);});
    return eGem(n+1);
  }
  if(!r.ok){var e=await r.json().catch(function(){return {};});throw new Error((e.error&&e.error.message)||('Erreur '+r.status));}
  var d=await r.json();
  if(d.error)throw new Error(d.error.message);
  var txt=d.candidates&&d.candidates[0]&&d.candidates[0].content&&d.candidates[0].content.parts&&d.candidates[0].content.parts[0]?d.candidates[0].content.parts[0].text:'';
  return txt||'Pouvez-vous reformuler ?';
}

function ePL(r){
  var m=r.match(/\[LEAD:([^\]]*?)(\]|$)/);
  if(m&&!lSent){
    var data={};
    m[1].split(',').forEach(function(p){var kv=p.split('=');if(kv[1]&&kv[1].trim())data[kv[0].trim()]=kv[1].trim();});
    if(data.email||data.phone){eBrev(data);lSent=true;}
  }
  return r.replace(/\[LEAD:[^\]]*\]?/g,'').trim();
}

function ePSim(r){
  if(!lSent) return r.replace(/\[SIM:[^\]]+\]/g,"").trim();
  var m=r.match(/\[SIM:([^\]]+)\]/);
  if(m){
    var data={};
    m[1].split(',').forEach(function(p){var kv=p.split('=');if(kv[0]&&kv[1]!==undefined)data[kv[0].trim()]=kv[1].trim();});
    setTimeout(function(){eSimCard(data);},400);
  }
  return r.replace(/\[SIM:[^\]]+\]/g,'').trim();
}

function eSimCard(d){
  var f=parseFloat(d.facture)||150;
  var g=(d.chauffage||'').toLowerCase().indexOf('gaz')>-1||(d.chauffage||'').toLowerCase().indexOf('fioul')>-1;
  var ms=Math.round(f*(g?0.42:0.52));
  var gain=f-ms;
  var msgs=document.getElementById('em');
  var div=document.createElement('div');
  div.className='emsg a';
  div.style.maxWidth='100%';
  div.style.width='100%';
  div.innerHTML='<div style="background:#0d2a1a;border:1px solid rgba(13,122,71,0.4);border-radius:14px;padding:15px;">'
    +'<div style="font-size:10px;color:#34d399;font-weight:700;text-transform:uppercase;letter-spacing:.1em;margin-bottom:10px">Simulation Ecolio Energy</div>'
    +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px">'
    +'<div style="background:rgba(239,68,68,0.1);border-radius:8px;padding:10px;text-align:center"><div style="font-size:10px;color:#9ca3af">Facture actuelle</div><div style="font-size:22px;font-weight:800;color:#ef4444">'+f+'&euro;</div><div style="font-size:10px;color:#6b7280">/mois</div></div>'
    +'<div style="background:rgba(13,122,71,0.15);border-radius:8px;padding:10px;text-align:center"><div style="font-size:10px;color:#9ca3af">Avec Ecolio</div><div style="font-size:22px;font-weight:800;color:#34d399">'+ms+'&euro;</div><div style="font-size:10px;color:#6b7280">mensualite</div></div>'
    +'</div>'
    +'<div style="background:rgba(13,122,71,0.15);border-radius:8px;padding:12px;text-align:center;margin-bottom:10px">'
    +'<div style="font-size:11px;color:#34d399;font-weight:600">GAIN DES LE 1ER MOIS</div>'
    +'<div style="font-size:30px;font-weight:900;color:#fff">+'+gain+'&euro;</div>'
    +'</div>'
    +'<p style="font-size:11px;color:#9ca3af;font-style:italic;margin:8px 0">Simulation estimative — montants exacts calculés lors du diagnostic gratuit.</p>'
    +'<button id="esimctabtn" style="width:100%;background:linear-gradient(135deg,#0a5c34,#0d7a47);border:none;border-radius:8px;padding:11px;color:#fff;font-size:13px;font-weight:700;cursor:pointer">OK - Diagnostic gratuit</button>'
    +'</div>';
  msgs.appendChild(div);
  msgs.scrollTop=msgs.scrollHeight;
}

function eSimCTA(){
  hist.push({role:'user',parts:[{text:'Le prospect veut etre recontacte. Demande prenom et telephone ou email pour le diagnostic gratuit.'}]});
  eTy();isLoad=true;
  document.getElementById('ebt').disabled=true;
  eGem(1).then(function(raw){eRTy();var c=ePL(raw);c=ePSim(c);eAdd('a',c);hist.push({role:'model',parts:[{text:c}]});})
  .catch(function(){eRTy();eAdd('a','Appelez-nous : Paris 06 78 85 78 01 / Nantes 07 44 31 52 92');})
  .finally(function(){isLoad=false;document.getElementById('ebt').disabled=false;});
}

async function eBrev(d){
  if(!CFG.brevoKey)return;
  try{
    // Build conversation transcript
    var transcript=hist.map(function(h){
      var role=h.role==='user'?'Client':'Elio';
      var text=(h.parts&&h.parts[0]&&h.parts[0].text)||'';
      return role+' : '+text.replace(/\[LEAD:[^\]]*\]?/g,'').replace(/\[SIM:[^\]]*\]?/g,'').trim();
    }).filter(function(l){return l.length>8;}).join('\n\n');

    var dept=d.dept?'Département '+d.dept:'Non précisé';
    var project=d.project||'Non précisé';

    var html='<div style="font-family:Arial,sans-serif;max-width:600px">'
      +'<div style="background:#1a2744;padding:20px;border-radius:8px 8px 0 0">'
      +'<h2 style="color:#4ecba0;margin:0">🔔 Nouveau lead Élio</h2>'
      +'<p style="color:#fff;margin:4px 0 0">Ecolio Energy — Expert IA</p>'
      +'</div>'
      +'<div style="background:#f8f9fa;padding:20px;border-radius:0 0 8px 8px">'
      +'<h3 style="color:#1a2744;margin:0 0 12px">Coordonnées</h3>'
      +'<p><strong>Prénom :</strong> '+(d.name||'Non précisé')+'</p>'
      +'<p><strong>Téléphone :</strong> '+(d.phone||'Non précisé')+'</p>'
      +'<p><strong>Département :</strong> '+dept+'</p>'
      +'<p><strong>Projet :</strong> '+project+'</p>'
      +'<hr style="margin:16px 0;border:1px solid #ddd">'
      +'<h3 style="color:#1a2744;margin:0 0 12px">Conversation complète</h3>'
      +'<pre style="background:#fff;padding:14px;border-radius:6px;font-size:13px;white-space:pre-wrap;border:1px solid #e0e0e0">'+transcript+'</pre>'
      +'</div>'
      +'</div>';

    await fetch('https://api.brevo.com/v3/smtp/email',{
      method:'POST',
      headers:{'api-key':CFG.brevoKey,'Content-Type':'application/json'},
      body:JSON.stringify({
        sender:{name:'Élio — Ecolio Energy',email:'akhaled.cpf@gmail.com'},
        to:[{email:'paris@ecolio-energy.fr',name:'Ecolio Paris'},{email:'nantes@ecolio-energy.fr',name:'Ecolio Nantes'}],
        subject:'🔔 Nouveau lead Élio — '+(d.name||'Prospect')+' — '+(d.phone||''),
        htmlContent:html
      })
    });
  }catch(e){}
}

function eAdd(role,text){
  var msgs=document.getElementById('em');
  var div=document.createElement('div');
  var b=document.createElement('div');
  var t=document.createElement('div');
  div.className='emsg '+role;
  b.className='ebub';
  b.innerHTML=text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\n/g,'<br>');
  t.className='etime';
  t.textContent=new Date().toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit'});
  div.appendChild(b);div.appendChild(t);
  msgs.appendChild(div);
  msgs.scrollTop=msgs.scrollHeight;
}

function eTy(){
  var msgs=document.getElementById('em');
  var d=document.createElement('div');
  d.id='ety';d.className='emsg a';
  d.innerHTML='<div class="etb"><div class="etd"></div><div class="etd"></div><div class="etd"></div></div>';
  msgs.appendChild(d);msgs.scrollTop=msgs.scrollHeight;
}
function eRTy(){var t=document.getElementById('ety');if(t)t.remove();}

// Event listeners - no onclick needed (Wix sandbox safe)
function xElio(e){var m={idle:['ef-i','ea-i'],thinking:['ef-t','ea-t'],smile:['ef-s','ea-s']};Object.keys(m).forEach(function(k){var v=k===e?'1':'0';var f=document.getElementById(m[k][0]),h=document.getElementById(m[k][1]);if(f)f.style.opacity=v;if(h)h.style.opacity=v;});}
document.addEventListener('click',function(e){
  var t=e.target;
  if(t.id==='ef'||t.closest('#ef'))eT();
  else if(t.id==='ex'||t.closest('#ex'))eT();
  else if(t.id==='ebt'||t.closest('#ebt'))eSend();
  else if(t.dataset&&t.dataset.sq)eSug(t.dataset.sq);
  else if(t.id==='esimctabtn'||t.closest('#esimctabtn'))eSimCTA();
});
document.addEventListener('input',function(e){if(e.target.id==='ei')eR(e.target);});
document.addEventListener('keydown',function(e){if(e.target.id==='ei'&&e.key==='Enter'&&!e.shiftKey){e.preventDefault();eSend();}});

})();