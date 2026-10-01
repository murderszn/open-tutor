
(function(){
var T=[
["I don't get why 1/2 + 1/3 isn't 2/5.","Good thing to question. Cut a pizza in halves, then in thirds. Can you add slices of different sizes? What would you change so every slice is the same size?"],
["What should we do on Monday?","Monday has a math block on fractions, 30 minutes of reading, and a STEM project. I linked each folder. Commit your math notes before lunch so your parent can review them."],
["Summarize the math folder.","The math folder has six assignments and a fractions reference sheet. Three are marked done. Unit 4 hasn't been started, so that's the next one to open."],
["What's the weather today?","I checked the live forecast. It cools off after 3 pm, so bring a jacket for the walk. You could plan outdoor science for the morning and check the schedule with your parent."]];
var log=document.getElementById('log'),picks=document.getElementById('picks'),busy=0;
function add(c,who,txt){var d=document.createElement('div');d.className='m '+c;d.innerHTML='<b></b><span></span>';d.firstChild.textContent=who;d.lastChild.textContent=txt;log.appendChild(d);return d}
function ask(i,btn){if(busy)return;busy=1;
[].forEach.call(picks.children,function(b){b.setAttribute('aria-pressed',b===btn)});
log.innerHTML='';add('s','Mia','@Vibe '+T[i][0]);var w=add('v','Vibe','Thinking...');
setTimeout(function(){w.lastChild.textContent=T[i][1];busy=0},600)}
T.forEach(function(t,i){var b=document.createElement('button');b.type='button';b.textContent=t[0];b.setAttribute('aria-pressed','false');b.onclick=function(){ask(i,b)};picks.appendChild(b)});
ask(0,picks.children[0]);
document.querySelectorAll('[data-copy]').forEach(function(b){b.onclick=function(){
try{navigator.clipboard.writeText(b.getAttribute('data-copy')).then(function(){b.textContent='Copied'},function(){b.textContent='Select and copy'})}catch(e){b.textContent='Select and copy'}
setTimeout(function(){b.textContent='Copy address'},1800)}});
})();
