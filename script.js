const CONTENT = {
1:{title:"Aula 1: Conceitos básicos, variáveis e frequências",sections:[
["O que é Estatística",[
"<b>Definição:</b> ciência que usa métodos quantitativos para planejar, coletar, organizar, descrever, analisar e interpretar dados.",
"<b>Para que serve:</b> apoiar decisões objetivas e previsões em negócios, finanças, qualidade, pesquisa de mercado, saúde e políticas públicas.",
"<b>Dois ramos:</b> a <b>descritiva</b> coleta, organiza e apresenta os dados; a <b>inferencial</b> usa uma amostra para concluir algo sobre a população."]],
["População, amostra e censo",[
"<b>População:</b> todos os elementos do estudo. <b>Amostra:</b> uma parte (subconjunto) dela. <b>Censo:</b> estuda a população inteira, como o do IBGE a cada 10 anos.",
"<b>Parâmetro</b> descreve a população; <b>estatística</b> descreve a amostra (a média de uma amostra é estatística; a média de todos é parâmetro).",
"<b>Exemplo:</b> pesquisa com 3.002 adultos. População = todos os adultos do Brasil; amostra = os 3.002 respondentes."]],
["Dados, informação e variável",[
"<b>Dados</b> são números e fatos puros. <b>Informação</b> é o dado com significado: 5, 6 e 7 viram informação quando são as idades de três crianças.",
"<b>Dados brutos</b> não têm organização. <b>Rol</b> é a sequência ordenada dos dados brutos.",
"<b>Variável:</b> a característica da população que está sendo estudada."]],
["Amostra e erro amostral",[
"Estudar todos costuma ser caro e demorado. Calcula-se a estatística da amostra para estimar o valor da população.",
"<b>Erro amostral:</b> a amostra pode não representar bem a população, por acaso (por exemplo, sorteando valores atípicos).",
"<b>Amostra viciada:</b> erro mais grave. Alguns tipos de elementos tinham mais chance de ser escolhidos (por exemplo, favorecer homens ou casados)."]],
["Tipos de variáveis",[
"<b>Qualitativas</b> (características): <b>nominal</b> não tem ordem (estado civil); <b>ordinal</b> tem ordem (grau de escolaridade).",
"<b>Quantitativas</b> (números): <b>discreta</b> vem de contagem e é inteira (número de filhos); <b>contínua</b> vem de medida e aceita decimais (peso, altura).",
"Só faz sentido calcular média com dados quantitativos."]],
["Distribuição de frequências",[
"<b>fi</b> (absoluta) = quantas vezes o valor aparece. <b>n = Σfi</b> é o total de observações.",
"<b>fri</b> (relativa) = <code>fi / n</code>. Em porcentagem: <code>fi / n × 100</code>. A absoluta não permite comparar grupos de tamanhos diferentes; a relativa permite.",
"<b>Como ler:</b> <code>fi</code> é quantas vezes o valor aparece e <code>n</code> é o total de observações. Dividir fi por n dá a fatia do total (proporção); multiplicar por 100 transforma em porcentagem, que permite comparar grupos de tamanhos diferentes.",
"<b>Fac</b> (acumulada) = soma das fi até a linha. Exemplo: 'quantos funcionários têm até o 2º grau'.",
"<b>Exemplo:</b> 20 funcionários com 1º grau são metade de uma empresa de 40, mas 100% de outra de 20."]],
["Variável contínua em classes",[
"Para variáveis contínuas, agrupam-se os dados em classes de mesma amplitude, de preferência de 5 a 15.",
"<b>Amplitude total:</b> <code>At = Xmax − Xmin</code>. <b>Nº de classes:</b> <code>k = √n</code>. <b>Amplitude da classe:</b> <code>h = At / k</code>.",
"<b>Como ler:</b> <code>Xmax</code> e <code>Xmin</code> são o maior e o menor valor, e a diferença é o tamanho total do intervalo. <code>k</code> é a quantidade de classes (raiz de n, de preferência entre 5 e 15). <code>h</code> é a largura de cada classe: reparte At em k partes iguais.",
"<b>Exemplo:</b> 36 salários de 4,00 a 21,90. At = 17,9; k = 6; h ≈ 3."]]
]},
2:{title:"Aula 2: Métodos gráficos",sections:[
["Por que usar gráficos",[
"Dão visualização imediata da distribuição e mostram concentração e dispersão dos valores.",
"<b>Bom gráfico:</b> chama a atenção, é simples, claro e preciso, não induz ao erro, facilita comparar e destacar tendências, e ilustra o texto que o acompanha."]],
["Cuidado com a escala",[
"Com os mesmos dados de lucro, um gráfico com eixo começando em 0 mostra lucro quase constante; outro com eixo começando em 2,0 e passos de 0,1 parece mostrar crescimento enorme.",
"Escala mal escolhida confunde e leva a conclusões erradas.",
"O software só transforma dados em gráfico. Garantir que ele esteja correto é papel do pesquisador."]],
["Colunas e barras",[
"<b>Colunas:</b> categorias no eixo horizontal e frequências no vertical. <b>Barras:</b> o contrário. Servem para variáveis qualitativas ou quantitativas discretas.",
"<b>Múltiplas:</b> retângulos lado a lado para comparar grupos, como a formação superior por área no Brasil e na Coreia do Sul."]],
["Gráfico de linhas",[
"Liga os pontos de uma série por segmentos de reta. Mostra como uma grandeza varia em relação a outra, como a produção ao longo dos anos. Usa dados quantitativos.",
"<b>Linhas múltiplas:</b> comparam séries, como oferta e demanda de etanol."]],
["Histograma",[
"Representa <b>apenas variável contínua</b> agrupada em classes.",
"Retângulos <b>justapostos</b> (sem espaço). A altura é proporcional à frequência da classe e o ponto médio da base coincide com o ponto médio da classe."]],
["Gráfico de setores (pizza)",[
"Mostra frequências relativas, principalmente de dados qualitativos. A área de cada setor é proporcional à frequência.",
"<b>Ângulo</b> por regra de três: 100% está para 360° como 19% está para x. Então x = 68,4°. Atalho: <code>ângulo = % × 3,6</code>.",
"<b>Como ler:</b> o círculo inteiro tem 360° e representa 100%, então cada 1% vale 3,6°. Multiplicar a porcentagem do setor por 3,6 dá o ângulo dele."]],
["Qual gráfico escolher",[
"<b>Comparar categorias</b> (qualitativa ou discreta): colunas ou barras.",
"<b>Parte de um todo</b> em porcentagem: setores.",
"<b>Variável contínua em classes:</b> histograma.",
"<b>Evolução ou comparação de séries:</b> linhas."]]
]},
3:{title:"Aula 3: Medidas de tendência central e separatrizes",sections:[
["Média aritmética",[
"Soma dos valores dividida pela quantidade: <code>x̄ = Σxi / n</code>. É a mais usada, mas sofre influência de valores extremos.",
"<b>Como ler:</b> <code>Σ</code> (sigma) significa 'somar'; <code>xi</code> é cada valor; <code>n</code> é quantos valores existem. Soma-se tudo e divide-se pela quantidade.",
"<b>Exemplo:</b> 15 vendedores venderam 165 aparelhos no total. Média = 165 / 15 = 11."]],
["Média ponderada",[
"Média em que os valores têm <b>pesos</b>: <code>x̄p = Σ(xi · fi) / Σfi</code>.",
"<b>Como ler:</b> <code>xi</code> é cada valor e <code>fi</code> é o peso dele. Multiplica-se cada valor pelo seu peso, soma-se tudo e divide-se pela soma dos pesos: quem tem peso maior influencia mais o resultado.",
"<b>Exemplo:</b> notas 6, 8, 9 e 5 com pesos 2, 2, 3 e 3. Média = (12 + 16 + 27 + 15) / 10 = 7."]],
["Mediana",[
"Valor central do rol: metade dos dados fica abaixo e metade acima. Notação x̃.",
"<b>Passos:</b> ordenar; se n é ímpar, posição <code>(n + 1) / 2</code>; se n é par, média das posições <code>n/2</code> e <code>n/2 + 1</code>.",
"<b>Como ler:</b> <code>n</code> é o número de dados do rol. Se n é ímpar, existe um único valor central, na posição (n+1)/2. Se n é par, há dois valores centrais, nas posições n/2 e n/2 + 1, e a mediana é a média deles.",
"<b>Exemplos:</b> n = 15 → 8ª posição → 11. n = 14 (pizzas), 7ª e 8ª posições valem 44 e 46 → mediana 45."]],
["Moda",[
"Valor que aparece com mais frequência. Pode haver mais de uma (distribuição <b>bimodal</b>) ou nenhuma.",
"<b>Exemplo:</b> nos aparelhos vendidos, o 12 aparece 4 vezes, então a moda é 12."]],
["Média, mediana ou moda?",[
"Dados 4, 5, 6, 6, 7, 8: média e mediana valem 6. Trocando o 8 por 80, a média vai a 18, mas a mediana e a moda continuam 6.",
"Nenhuma é melhor sempre. Loja de botas: a <b>moda</b> (tamanho 40) orienta o estoque. Portas e balcões: a <b>média</b> da estatura dos adultos.",
"Em distribuições simétricas, as três ficam próximas ou coincidem."]],
["Variável discreta em tabela",[
"<b>Média:</b> <code>Σ(xi · fi) / n</code>. <b>Mediana:</b> acha a posição e localiza o valor pela Fac. <b>Moda:</b> valor de maior fi.",
"<b>Como ler:</b> na tabela, <code>xi</code> é o valor e <code>fi</code> é quantas vezes ele aparece. <code>Σ(xi · fi)</code> faz o papel da soma de todos os dados e <code>n = Σfi</code> é a quantidade total. A Fac (frequência acumulada) mostra em que linha está a posição da mediana.",
"<b>Exemplo (acidentes em 25 dias):</b> média = 315 / 25 = 12,6; mediana = 13º elemento = 15; moda = 15."]],
["Variável contínua em classes",[
"<b>Média:</b> usa o <b>ponto médio</b> da classe como xi: <code>Σ(xi · fi) / n</code>. No exemplo dos salários: R$ 1.492,00.",
"<b>Como ler:</b> no agrupamento os valores exatos se perdem, então cada classe é representada pelo ponto médio, <code>(limite inferior + limite superior) / 2</code>, que entra como xi na média ponderada.",
"<b>Mediana:</b> <code>lMd + [(n/2 − Fac,ant) · h] / fMd</code>. Exemplo: 1.400 + (12,5 − 8) · 200 / 10 = R$ 1.490,00.",
"<b>Onde:</b> <code>lMd</code> = limite inferior da classe da mediana; <code>n/2</code> = posição central; <code>Fac,ant</code> = quantos dados vêm antes dessa classe; <code>(n/2 − Fac,ant)</code> = quantos dados ainda faltam percorrer dentro da classe; <code>h</code> = largura da classe; <code>fMd</code> = frequência da classe. A fração é a 'parte proporcional' que se avança a partir do limite inferior.",
"<b>Moda de Czuber:</b> <code>lMo + [(fMo − fant) · h] / [2fMo − (fant + fpost)]</code>. Exemplo: R$ 1.488,89.",
"<b>Onde:</b> <code>lMo</code> = limite inferior da classe modal (a de maior fi); <code>fMo</code> = frequência dela; <code>fant</code> e <code>fpost</code> = frequências das classes vizinhas; <code>h</code> = largura. A moda é puxada na direção da vizinha mais cheia: quanto maior fpost em relação a fant, mais ela sobe dentro da classe."]],
["Quartis, decis e percentis",[
"<b>Separatrizes</b> dividem o rol em partes iguais: quartis em 4, decis em 10 e percentis em 100. Aqui, usadas com dados agrupados em classes.",
"<b>Posições:</b> Q1 = <code>n/4</code>; Q3 = <code>3n/4</code>; Di = <code>i·n/10</code>; Pi = <code>i·n/100</code>. Q2 é a mediana.",
"<b>Como ler:</b> a posição diz quantos dados ficam 'até' a separatriz. Q1 deixa 25% dos dados abaixo e Q3 deixa 75%. Di divide em 10 partes (i de 1 a 9) e Pi divide em 100 (i de 1 a 99): <code>i</code> é o número da separatriz que se quer e <code>n</code> é o total de dados.",
"<b>Fórmula:</b> igual à da mediana, trocando n/2 pela posição: <code>lClasse + [(posição − Fac,ant) · h] / fClasse</code>.",
"<b>Como ler:</b> é a mesma conta da mediana: <code>lClasse</code> é o limite inferior da classe onde cai a posição; <code>posição − Fac,ant</code> é quanto falta andar dentro da classe; <code>h</code> e <code>fClasse</code> são a largura e a frequência dela."]],
["Exemplo: auditoria de 52 balanços",[
"<b>Q1 = 34 min:</b> 25% dos balanços levam até 34 minutos.",
"<b>Q3 = 52,5 min:</b> 75% levam até 52,5 minutos.",
"<b>D4 = 41 min:</b> 40% levam até 41 minutos. <b>P82 = 54,32 min:</b> 82% levam até 54,32 minutos."]]
]}};
const $=id=>document.getElementById(id),$$=s=>[...document.querySelectorAll(s)];
const store={get(k){try{return localStorage.getItem(k)}catch(e){return null}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};
let mute=store.get("est-mute")==="1";
$("snd").textContent=mute?"🔇":"🔊";
$("snd").onclick=()=>{mute=!mute;store.set("est-mute",mute?"1":"0");$("snd").textContent=mute?"🔇":"🔊"};
function beep(f,d=.12){if(mute)return;try{const c=beep.c||(beep.c=new(window.AudioContext||window.webkitAudioContext)()),o=c.createOscillator(),g=c.createGain();o.frequency.value=f;g.gain.value=.05;o.connect(g);g.connect(c.destination);o.start();o.stop(c.currentTime+d)}catch(e){}}
function burst(x,y,n=16,cols=["#6EB47D","#9DCC9B","#ffffff","#D5E4CF"],spread=90){for(let k=0;k<n;k++){const p=document.createElement("span");p.className="p";const a=Math.random()*6.28,r=spread*(.4+Math.random());p.style.cssText=`left:${x}px;top:${y}px;background:${cols[k%cols.length]};--dx:${Math.cos(a)*r}px;--dy:${Math.sin(a)*r+30}px`;document.body.appendChild(p);setTimeout(()=>p.remove(),950)}}
function tab(n){$(n==="res"?"conteudo":"quiz").scrollIntoView({behavior:"smooth",block:"start"})}

/* Resumos */
const AC={a:"aáàâãä",e:"eéèêë",i:"iíìîï",o:"oóòôõö",u:"uúùûü",c:"cç"};
const rxSrc=q=>q.trim().split("").map(ch=>{const l=ch.toLowerCase();return AC[l]?"["+AC[l]+"]":ch.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("");
const hl=(h,s)=>s?h.replace(new RegExp("(<[^>]+>)|("+s+")","gi"),(m,t,x)=>t?t:"<mark>"+x+"</mark>"):h;
/* Avatares cartoon */
const SK=["#f5d0b0","#e0ac82","#b9805a","#8a5a3c"];
function av(o){const s=SK[o.sk],h=o.hc||"#333";
 const back=o.h==="long"?`<path d="M34 46c-4 24 0 42 10 44l4-34zM86 46c4 24 0 42-10 44l-4-34z" fill="${h}"/>`:o.h==="bun"?`<circle cx="60" cy="17" r="10" fill="${h}"/>`:"";
 const front=o.h==="bald"?"":`<path d="M35 48C33 26 47 21 60 21s27 5 25 27c-4-9-10-14-25-14s-21 5-25 14z" fill="${h}"/>`;
 return `<svg viewBox="0 0 120 120" aria-hidden="true">${back}<path d="M22 120c0-26 16-42 38-42s38 16 38 42z" fill="${o.shirt}"/><rect x="52" y="66" width="16" height="14" rx="6" fill="${s}"/><circle cx="60" cy="48" r="24" fill="${s}"/>${front}<circle cx="51" cy="50" r="3" fill="#2b2b2b"/><circle cx="69" cy="50" r="3" fill="#2b2b2b"/><path d="M52 60q8 7 16 0" stroke="#2b2b2b" stroke-width="2.5" fill="none" stroke-linecap="round"/><circle cx="45" cy="58" r="4" fill="#f28b82" opacity=".35"/><circle cx="75" cy="58" r="4" fill="#f28b82" opacity=".35"/>${o.x||""}</svg>`}
const GL='<g fill="none" stroke="#2b2b2b" stroke-width="2.5"><circle cx="51" cy="50" r="7"/><circle cx="69" cy="50" r="7"/><path d="M58 50h4"/></g>';
const VIS=c=>`<path d="M36 36c6-8 16-10 24-10s18 2 24 10z" fill="${c}"/>`;
const OLD=[
{sk:0,h:"short",hc:"#6b4a2b",shirt:"#a5824a",x:'<ellipse cx="60" cy="31" rx="35" ry="7" fill="#7a5230"/><path d="M42 31c0-16 6-21 18-21s18 5 18 21z" fill="#8f6238"/><g transform="rotate(-15 92 92)"><rect x="80" y="70" width="22" height="34" rx="4" fill="#f3e3b8" stroke="#a5824a" stroke-width="2"/><path d="M84 80h14M84 87h14M84 94h10" stroke="#a5824a" stroke-width="2"/></g>'},
{sk:2,h:"short",hc:"#b8b8b8",shirt:"#4a5a6a",x:GL+'<path d="M52 82l8 4-8 4zM68 82l-8 4 8 4z" fill="#c2564d"/><rect x="48" y="30" width="24" height="8" fill="#2b2b2b"/><path d="M28 28L60 14l32 14-32 14z" fill="#2b2b2b"/><path d="M88 29v16" stroke="#6EB47D" stroke-width="3"/><rect x="80" y="78" width="26" height="30" rx="3" fill="#5b8a72"/><path d="M85 78v30" stroke="#0003" stroke-width="2"/>'},
{sk:1,h:"long",hc:"#2b2b2b",shirt:"#ffffff",x:GL+'<path d="M60 80L48 120M60 80l12 40" stroke="#cfcfcf" stroke-width="2"/><path d="M88 74h8v10l8 16a4 4 0 0 1-4 6H84a4 4 0 0 1-4-6l8-16z" fill="#bfe6d6" stroke="#2b2b2b" stroke-width="2"/>'},
{sk:3,h:"short",hc:"#1f1f1f",shirt:"#ffffff",x:'<path d="M60 80l-5 8 5 26 5-26z" fill="#6EB47D"/><rect x="78" y="76" width="30" height="24" rx="4" fill="#3b3b3b"/><rect x="81" y="79" width="24" height="16" fill="#e9f2f7"/><path d="M84 92l5-5 4 3 6-7" stroke="#2e8b5b" stroke-width="2" fill="none"/>'},
{sk:0,h:"bun",hc:"#7a4a2a",shirt:"#5b8a72",x:VIS("#2e8b5b")+'<rect x="78" y="74" width="28" height="36" rx="5" fill="#3f3f3f"/><rect x="82" y="79" width="20" height="9" rx="2" fill="#cfcfcf"/><path d="M85 96h3M93 96h3M101 96h1M85 103h3M93 103h3" stroke="#6EB47D" stroke-width="4" stroke-linecap="round"/>'},
{sk:1,h:"long",hc:"#8f5a2b",shirt:"#6f8fb0",x:GL+'<circle cx="92" cy="86" r="11" fill="#dff1ff" fill-opacity=".6" stroke="#3f3f3f" stroke-width="4"/><path d="M100 94l10 12" stroke="#3f3f3f" stroke-width="5" stroke-linecap="round"/>'},
{sk:2,h:"short",hc:"#2b2b2b",shirt:"#3f3f3f",x:'<path d="M36 48c0-20 10-28 24-28s24 8 24 28" fill="none" stroke="#6EB47D" stroke-width="4"/><rect x="31" y="46" width="8" height="14" rx="4" fill="#6EB47D"/><path d="M35 60q4 8 16 8" stroke="#6EB47D" stroke-width="3" fill="none"/><path d="M76 106l6-22h26l6 22z" fill="#6f6f6f"/><rect x="72" y="106" width="46" height="5" rx="2" fill="#bdbdbd"/><circle cx="95" cy="94" r="4" fill="#6EB47D"/>'},
{sk:0,h:"long",hc:"#d9a441",shirt:"#8f6238",x:'<rect x="78" y="86" width="30" height="22" rx="4" fill="#a5733f"/><path d="M87 86v-5h12v5" stroke="#5b3b1f" stroke-width="3" fill="none"/><rect x="91" y="94" width="4" height="5" fill="#6EB47D"/>'},
{sk:3,h:"bald",shirt:"#6EB47D",x:'<path d="M34 38c0-14 12-20 26-20s26 6 26 20z" fill="#f2c94c"/><rect x="30" y="36" width="60" height="6" rx="3" fill="#d9a92a"/><rect x="78" y="72" width="28" height="38" rx="4" fill="#c9a26a"/><rect x="84" y="68" width="16" height="7" rx="2" fill="#6f6f6f"/><path d="M84 84l3 3 5-6M84 97l3 3 5-6" stroke="#2e8b5b" stroke-width="2.5" fill="none"/>'},
{sk:1,h:"short",hc:"#5a5a5a",shirt:"#2f4f4f",x:GL+'<circle cx="92" cy="92" r="14" fill="#2e8b5b"/><path d="M85 92l5 5 9-10" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'},
{sk:2,h:"short",hc:"#4a3320",shirt:"#b06a4a",x:'<path d="M92 72v36M80 108h24" stroke="#3f3f3f" stroke-width="4"/><path d="M78 80h28" stroke="#3f3f3f" stroke-width="3"/><path d="M72 94l6-14 6 14zM100 94l6-14 6 14z" fill="#6EB47D"/>'},
{sk:0,h:"short",hc:"#9a9a9a",shirt:"#2b2b2b",x:'<path d="M60 80l-5 8 5 26 5-26z" fill="#c2564d"/><rect x="78" y="74" width="26" height="34" rx="3" fill="#fff" stroke="#8a8a8a" stroke-width="2"/><path d="M83 84h16M83 91h16M83 98h9" stroke="#8a8a8a" stroke-width="2"/><path d="M98 106l10-14 4 3-10 14z" fill="#6EB47D"/>'},
{sk:1,h:"bun",hc:"#2b2b2b",shirt:"#d17a5a",x:'<path d="M78 80l24-10v34L78 94z" fill="#6EB47D" stroke="#3f3f3f" stroke-width="2"/><rect x="72" y="80" width="8" height="14" rx="3" fill="#3f3f3f"/><path d="M108 78q6 9 0 18M112 74q10 13 0 26" stroke="#3f3f3f" stroke-width="2.5" fill="none"/>'},
{sk:3,h:"long",hc:"#3b2a1a",shirt:"#5fbf88",x:VIS("#7cc99b")+'<path d="M84 96h20l-3 14H87z" fill="#c9835a"/><path d="M94 96V80" stroke="#2e8b5b" stroke-width="3"/><path d="M94 86c-12 0-14-10-14-10s12-2 14 10zM94 82c12 0 14-10 14-10s-12-2-14 10z" fill="#5fbf88"/>'}
];
const FR='<rect x="74" y="72" width="38" height="38" rx="6" fill="#fff" stroke="#8a8a8a" stroke-width="2"/>';
const BD=t=>FR+`<text x="93" y="98" text-anchor="middle" font-size="${t.length>2?15:24}" font-weight="700" font-family="Georgia,serif" fill="#3f3f3f">${t}</text>`;
const BARS=FR+'<path d="M80 105h26" stroke="#8a8a8a" stroke-width="2"/><rect x="80" y="92" width="6" height="13" fill="#6EB47D"/><rect x="89" y="84" width="6" height="21" fill="#6f6f6f"/><rect x="98" y="78" width="6" height="27" fill="#2e8b5b"/>';
const LINE=FR+'<path d="M79 100l9-12 8 6 11-16" stroke="#c2564d" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
const PIE='<circle cx="93" cy="91" r="19" fill="#6EB47D"/><path d="M93 91V72a19 19 0 0 1 18 14z" fill="#6f6f6f"/><path d="M93 91l-16 11a19 19 0 0 1-3-11z" fill="#2e8b5b"/>';
const V=(i,o)=>({...OLD[i],...o});
const AVS=[
V(1,{sk:0,hc:"#9a9a9a"}),V(5,{sk:2}),V(3,{sk:1,h:"long",hc:"#2b2b2b"}),V(2,{sk:0,h:"short",hc:"#6b4a2b"}),
{sk:3,h:"short",hc:"#1f1f1f",shirt:"#6f8fb0",x:GL+BD("Var")},
{sk:1,h:"bun",hc:"#7a4a2a",shirt:"#8f6238",x:BD("fi")},
{sk:2,h:"short",hc:"#2b2b2b",shirt:"#5b8a72",x:VIS("#6EB47D")+BD("√n")},
{sk:0,h:"long",hc:"#d9a441",shirt:"#4a5a6a",x:BARS},
V(5,{sk:3,h:"short",hc:"#3b2a1a",shirt:"#a5824a"}),
{sk:1,h:"short",hc:"#5a5a5a",shirt:"#3f3f3f",x:BARS},
{sk:0,h:"bun",hc:"#2b2b2b",shirt:"#6f8fb0",x:LINE},
{sk:2,h:"bald",shirt:"#6EB47D",x:GL+BD("Hist")},
{sk:3,h:"long",hc:"#3b2a1a",shirt:"#d17a5a",x:PIE},
V(8,{sk:1,h:"bun",hc:"#4a3320"}),
{sk:0,h:"short",hc:"#6b4a2b",shirt:"#5b8a72",x:BD("x̄")},
V(10,{sk:1,shirt:"#8a6fb0"}),
{sk:2,h:"long",hc:"#2b2b2b",shirt:"#a5824a",x:GL+BD("Md")},
{sk:3,h:"short",hc:"#1f1f1f",shirt:"#2f4f4f",x:BD("Mo")},
{sk:1,h:"short",hc:"#8f5a2b",shirt:"#4a5a6a",x:GL+BD("?")},
V(4,{sk:3,h:"short",hc:"#1f1f1f"}),
{sk:0,h:"bun",hc:"#9a6a2b",shirt:"#3f3f3f",x:VIS("#6f6f6f")+BD("Cz")},
{sk:2,h:"short",hc:"#4a3320",shirt:"#6EB47D",x:BD("Q")},
V(9,{sk:0,hc:"#2b2b2b"})
];
const AV=AVS.map(av);
const SAY=["Estatística transforma dados em decisões.","População inteira ou só uma amostra? Eis a questão.","Dado é número solto; informação tem significado.","Amostra boa representa bem a população.","Nominal, ordinal, discreta ou contínua: qual é a sua?","Frequência relativa é a que permite comparar.","Raiz de n dá o número de classes.","Gráfico bom mostra a tendência de uma olhada.","Cuidado com a escala: ela pode enganar!","Colunas ou barras: só trocam os eixos.","A linha conta a história ao longo do tempo.","Histograma: retângulos colados, só para contínuas.","Pizza: 1% vale 3,6 graus.","Antes de desenhar, escolha o gráfico certo.","Soma tudo e divide por n.","Pesos diferentes, importância diferente.","A mediana fica bem no meio do rol.","A moda é a campeã de frequência.","Valores extremos puxam a média, não a mediana.","Na tabela: multiplique xi por fi e divida por n.","Em classes, o ponto médio representa o grupo.","Quartis, decis e percentis: fatias do rol.","Na auditoria, 25% dos balanços saem em até 34 minutos."];
let studied=[];try{studied=JSON.parse(store.get("est-studied")||"[]")}catch(e){}
let chap=0,query="";
const ALL=[];Object.keys(CONTENT).forEach(c=>CONTENT[c].sections.forEach((s,i)=>ALL.push({id:c+"-"+i,c:+c,n:ALL.length,t:s[0],b:s[1]})));
function prog(){$$("#side [data-id]").forEach(b=>b.classList.toggle("ok",studied.includes(b.dataset.id)));const n=studied.length;$("progT").textContent=n+" de "+ALL.length+" seções estudadas";$("progB").style.width=(n/ALL.length*100)+"%"}
function render(){
 const src=rxSrc(query),re=src&&new RegExp(src,"i");
 const list=ALL.filter(s=>(!chap||s.c===chap)&&(!re||re.test(s.t+" "+s.b.join(" ").replace(/<[^>]+>/g,""))));
 $("count").textContent=query?(list.length?list.length+" seção(ões) encontrada(s)":""):"";
 let h="",last=0;
 list.forEach(s=>{
  if(s.c!==last){last=s.c;h+=`<div class="ch"><h2>${CONTENT[s.c].title}</h2><button class="pill go" data-c="${s.c}">Praticar ⚡</button></div>`}
  h+=`<details data-id="${s.id}" class="${studied.includes(s.id)?"done":""}" ${query?"open":""}><summary><i class="mini">${AV[s.n]}</i><span>${hl(s.t,src)}</span><i class="tick">✔</i></summary><div class="body"><div class="who"><span class="big">${AV[s.n]}</span><p class="bub">${SAY[s.n]}</p></div><ul>${s.b.map(t=>`<li>${hl(t,src)}</li>`).join("")}</ul><button class="dn">${studied.includes(s.id)?"Estudado ✔":"Marcar como estudado"}</button></div></details>`});
 $("sections").innerHTML=h||`<div class="empty">Nada encontrado para "<b></b>". Tente outra palavra ou mude o filtro.</div>`;
 const b=$("sections").querySelector(".empty b");if(b)b.textContent=query;
 $("clr").hidden=!query;$("exp").textContent="Expandir tudo";side(list);prog();
}
$("q").oninput=e=>{query=e.target.value;render();if(query&&scrollY<$("conteudo").offsetTop-60)tab("res")};
$("clr").onclick=()=>{$("q").value="";query="";render();$("q").focus()};
$$("#chips .chip").forEach(b=>b.onclick=()=>{chap=+b.dataset.c;$$("#chips .chip").forEach(x=>x.setAttribute("aria-pressed",x===b));render()});
$("exp").onclick=()=>{const ds=$$("#sections details"),open=ds.some(d=>!d.open);ds.forEach(d=>d.open=open);$("exp").textContent=open?"Recolher tudo":"Expandir tudo"};
$("sections").onclick=e=>{
 const d=e.target.closest("details");
 if(e.target.classList.contains("dn")){const id=d.dataset.id,on=!studied.includes(id);studied=on?[...studied,id]:studied.filter(x=>x!==id);store.set("est-studied",JSON.stringify(studied));d.classList.toggle("done",on);e.target.textContent=on?"Estudado ✔":"Marcar como estudado";if(on){const r=e.target.getBoundingClientRect();burst(r.left+40,r.top,10);beep(520)}prog()}
 if(e.target.classList.contains("go")){setScope(+e.target.dataset.c);tab("quiz")}
};
document.addEventListener("keydown",e=>{if(e.key==="/"&&document.activeElement.tagName!=="INPUT"){e.preventDefault();$("q").focus()}});
render();

/* Quiz */
const R=(a,b)=>a+Math.floor(Math.random()*(b-a+1)),pick=a=>a[R(0,a.length-1)];
const fm=x=>String(+(+x).toFixed(2)).replace(".",",");
const num=s=>parseFloat(String(s).replace(",","."));
const shuffle=a=>{a=a.slice();for(let k=a.length-1;k>0;k--){const j=Math.floor(Math.random()*(k+1));[a[k],a[j]]=[a[j],a[k]]}return a};
const sum=a=>a.reduce((x,y)=>x+y,0);
const uniq=(n,lo,hi)=>shuffle(Array.from({length:hi-lo+1},(_,i)=>lo+i)).slice(0,n);
const med=a=>{const s=a.slice().sort((x,y)=>x-y),n=s.length;return n%2?s[(n-1)/2]:(s[n/2-1]+s[n/2])/2};
const tb=(h,rows)=>"<table><tr>"+h.map(x=>"<th>"+x+"</th>").join("")+"</tr>"+rows.map(r=>"<tr>"+r.map(x=>"<td>"+x+"</td>").join("")+"</tr>").join("")+"</table>";
const cls=(L,h,f)=>tb(["Classe","fi"],L.map((l,i)=>[l+" a "+(l+h),f[i]]));
function mk(a,q,right,wrongs,steps,tbl=""){
 const S=t=>typeof t==="number"?fm(t):String(t);right=S(right);
 const seen=new Set([right]),w=[];
 wrongs.forEach(([t,y])=>{t=S(t);if(!seen.has(t)){seen.add(t);w.push({t,ok:false,why:y})}});
 const sf=right.replace(/[\d.,\-]/g,"");
 for(let d=1;w.length<3;d++){const t=fm(num(right)+d*(num(right)>9?1:.5))+sf;if(!seen.has(t)){seen.add(t);w.push({t,ok:false,why:"Resultado de um erro de conta. Refaça os passos abaixo com calma."})}}
 return {a,q,tbl,steps,opts:shuffle([{t:right,ok:true},...w.slice(0,3)])};
}
const G={1:[],2:[],3:[]};
const TP=["Qualitativa nominal","Qualitativa ordinal","Quantitativa discreta","Quantitativa contínua"];
const DF=["tem categorias sem ordem","tem categorias com ordem natural","vem de uma contagem (só inteiros)","vem de uma medida (aceita decimais)"];
const VR=[["Estado civil",0,"não há ordem entre solteiro, casado e viúvo"],["Marca de jeans",0,"são nomes de categorias, sem ordem"],["Gênero",0,"são categorias sem ordem"],["Raça de animais",0,"são categorias sem ordem"],["Grau de escolaridade",1,"fundamental, médio e superior têm ordem"],["Patente militar",1,"as patentes seguem uma hierarquia"],["Tamanho de camisetas (P, M, G)",1,"P, M e G têm ordem"],["Classe social",1,"as classes têm ordem"],["Número de filhos",2,"é contado: 0, 1, 2..."],["Número de acidentes de trânsito",2,"é contado em inteiros"],["Número de livros de uma biblioteca",2,"é contado em inteiros"],["Número de ações negociadas",2,"é contado em inteiros"],["Peso de lutadores",3,"é medido e aceita decimais"],["Altura de jogadores de vôlei",3,"é medida e aceita decimais"],["Consumo mensal de energia elétrica",3,"é medido, não contado"],["Espessura de folhas de papel",3,"é medida e aceita decimais"]];
G[1].push(()=>{const [n,t,r]=pick(VR);return mk(1,"Classifique a variável: "+n+".",TP[t],TP.filter((_,i)=>i!==t).map(x=>[x,x+" é quando a variável "+DF[TP.indexOf(x)]+". Aqui, "+r+"."]),["Pergunte: a resposta é categoria ou número? "+(t<2?"É categoria, então é qualitativa.":"É número, então é quantitativa."),t<2?"Existe ordem natural entre as categorias? "+(t?"Sim: ordinal.":"Não: nominal."):"Vem de contagem ou de medida? "+(t===2?"Contagem (inteiros): discreta.":"Medida (decimais): contínua."),"Neste caso, "+r+". Resposta: "+TP[t]+"."])});
G[1].push(()=>{const n=pick([20,25,40,50]),f=R(3,n/2|0),p=f/n*100;return mk(1,"Em "+n+" funcionários, "+f+" têm ensino superior. Qual é a frequência relativa percentual?",fm(p)+"%",[[fm(f/n)+"%","Essa é a proporção (fi/n). Falta multiplicar por 100 para virar porcentagem."],[fm(n/f*100)+"%","Você inverteu a divisão. O certo é fi dividido por n."],[f+"%","Esse é o valor de fi (frequência absoluta), não o percentual."]],["fri(%) = fi / n × 100","fi = "+f+" e n = "+n,f+" / "+n+" × 100 = "+fm(p)+"%"])});
G[1].push(()=>{const k=pick([4,5,6,7,8,9]),n=k*k,h=pick([2,3,4,5]),mn=R(5,40),mx=mn+h*k;return mk(1,"Foram observados n = "+n+" valores, de "+mn+" a "+mx+". Usando k = √n, qual é a amplitude de cada classe (h)?",h,[[mx-mn,"Essa é a amplitude total At = Xmax − Xmin. Falta dividir por k."],[(mx-mn)/n,"Você dividiu At por n. Divide-se pelo número de classes k."],[k,"Esse é o número de classes k, não a amplitude h."]],["k = √n = √"+n+" = "+k,"At = "+mx+" − "+mn+" = "+(mx-mn),"h = At / k = "+(mx-mn)+" / "+k+" = "+h])});
G[1].push(()=>{const f=[R(5,15),R(5,15),R(5,15),R(3,10),R(2,8)],t=R(1,3),n=sum(f),ac=sum(f.slice(0,t+1));return mk(1,"Em "+n+" caixas, anotou-se o nº de peças defeituosas. Quantas caixas têm até "+t+" peça(s) defeituosa(s)?",ac,[[f[t],"Esse é só o fi da linha "+t+". 'Até "+t+"' pede a frequência acumulada."],[n,"Esse é o total de caixas. 'Até "+t+"' não inclui as linhas maiores."],[ac-f[t],"Você parou uma linha antes: faltou somar o fi de "+t+"."]],["'Até "+t+"' = soma dos fi de 0 até "+t,f.slice(0,t+1).join(" + ")+" = "+ac,"Resposta: "+ac+" caixas."],tb(["Peças defeituosas (xi)","Caixas (fi)"],f.map((v,i)=>[i,v])))});
G[2].push(()=>{const p=R(5,45);return mk(2,"Em um gráfico de setores, uma categoria representa "+p+"% dos dados. Qual é o ângulo do setor?",fm(p*3.6)+"°",[[p+"°","Você confundiu porcentagem com graus. O círculo tem 360°, não 100°."],[fm(p*36)+"°","Erro de casa decimal: cada 1% vale 3,6°, não 36°."],[fm((100-p)*3.6)+"°","Esse é o ângulo do restante (100% − "+p+"%), não da categoria."]],["Regra de três: 100% ↔ 360°",p+"% ↔ x","x = "+p+" × 360 / 100 = "+fm(p*3.6)+"°"])});
G[2].push(()=>{const c=["A","B","C","D"],f=c.map(()=>R(5,30)),n=sum(f),k=R(0,3),a=f[k]/n*360;return mk(2,"Os dados abaixo serão representados em um gráfico de setores. Qual o ângulo do setor da categoria "+c[k]+"?",fm(a)+"°",[[fm(f[k]/n*100)+"°","Esse é o percentual da categoria, não o ângulo. Multiplique a proporção por 360."],[fm(f[k]*3.6)+"°","3,6° vale para 1% e não para 1 unidade de fi."],[fm(360/f[k])+"°","Você inverteu a conta. O certo é (fi / n) × 360."]],["n = "+f.join(" + ")+" = "+n,"Proporção da categoria "+c[k]+" = "+f[k]+" / "+n,"Ângulo = "+f[k]+" / "+n+" × 360 = "+fm(a)+"°"],tb(["Categoria","fi"],c.map((v,i)=>[v,f[i]])))});
G[2].push(()=>{const rg=["Sudeste","Sul","Nordeste","Centro-Oeste","Norte"],v=[R(15,22)*100,R(9,15)*100,R(8,13)*100,R(2,5)*100,R(2,4)*100],n=sum(v),k=R(0,4),p=v[k]/n*100;return mk(2,"O gráfico de colunas mostra o nº de emissoras de rádio por região. Que porcentagem do total está na região "+rg[k]+"?",fm(p)+"%",[[fm(v[k]/n)+"%","Essa é a proporção. Para virar porcentagem, multiplique por 100."],[fm(v[k]/(n-v[k])*100)+"%","Você comparou com as outras regiões (n − fi). Deve-se dividir pelo TOTAL."],[fm(v[k]/Math.max(...v)*100)+"%","Você comparou com a maior região, não com o total."]],["Total = "+v.join(" + ")+" = "+n,"fr(%) = fi / n × 100",v[k]+" / "+n+" × 100 = "+fm(p)+"%"],tb(["Região","Emissoras"],rg.map((r,i)=>[r,v[i]])))});
G[3].push(()=>{const n=pick([5,6,8]);let d;do{d=Array.from({length:n},()=>R(2,20))}while(sum(d)%n);const s=sum(d),m=s/n;return mk(3,"Calcule a média aritmética dos dados: "+d.join(", ")+".",m,[[med(d),"Esse valor é a mediana (valor central), não a média."],[s,"Essa é só a soma. Falta dividir por n."],[s/(n-1),"Você dividiu por "+(n-1)+", mas são n = "+n+" valores."],[Math.max(...d),"Esse é o maior valor, não a média."]],["Some todos: "+d.join(" + ")+" = "+s,"Conte os valores: n = "+n,"x̄ = "+s+" / "+n+" = "+fm(m)])});
G[3].push(()=>{const n=pick([7,9,11]),d=uniq(n,1,40),s=d.slice().sort((a,b)=>a-b),p=(n+1)/2,m=s[p-1];return mk(3,"Determine a mediana dos dados: "+d.join(", ")+".",m,[[d[p-1],"Você pegou o "+p+"º valor da lista sem ordenar. A mediana exige o rol (dados ordenados)."],[sum(d)/n,"Essa é a média, não a mediana."],[s[p],"Errou a posição por uma casa. Com n = "+n+", a posição é (n+1)/2 = "+p+"."],[Math.max(...d),"Esse é o maior valor, não o central."]],["Ordene (rol): "+s.join(", "),"n = "+n+" é ímpar → posição (n+1)/2 = "+p,"A "+p+"ª posição vale "+m+". Mediana = "+m+"."])});
G[3].push(()=>{const n=pick([6,8,10]),d=uniq(n,1,40),s=d.slice().sort((a,b)=>a-b),a=s[n/2-1],b=s[n/2],m=(a+b)/2;return mk(3,"Determine a mediana dos dados: "+d.join(", ")+".",m,[[a,"Esse é só o "+n/2+"º valor. Com n par, faz-se a média dos dois centrais."],[b,"Esse é só o "+(n/2+1)+"º valor. Com n par, faz-se a média dos dois centrais."],[sum(d)/n,"Essa é a média, não a mediana."],[s[n/2+1],"Posição errada: as centrais são n/2 e n/2 + 1."]],["Ordene (rol): "+s.join(", "),"n = "+n+" é par → posições n/2 = "+n/2+" e n/2 + 1 = "+(n/2+1),"Valores centrais: "+a+" e "+b,"Mediana = ("+a+" + "+b+") / 2 = "+fm(m)])});
G[3].push(()=>{const m=R(2,20),o=uniq(8,1,25).filter(x=>x!==m).slice(0,5),d=shuffle([m,m,m,...o]);return mk(3,"Qual é a moda dos dados: "+d.join(", ")+"?",m,[[med(d),"Essa é a mediana, não a moda."],[sum(d)/d.length,"Essa é a média, não a moda."],[3,"Esse é quantas vezes o valor se repete (frequência), não o valor da moda."],[Math.max(...d),"Esse é o maior valor, não o mais frequente."]],["Conte quantas vezes cada valor aparece.",m+" aparece 3 vezes; os demais, 1 vez.","Moda = "+m+" (o valor, não a contagem)."])});
G[3].push(()=>{const w=pick([[2,2,3,3],[1,2,3],[2,3,5],[1,1,2],[3,3,4]]),x=w.map(()=>R(4,10)),sw=sum(w),sp=sum(x.map((v,i)=>v*w[i])),m=sp/sw;return mk(3,"Notas: "+x.join(", ")+", com pesos "+w.join(", ")+", respectivamente. Qual é a média ponderada?",m,[[sum(x)/x.length,"Essa é a média simples: ela ignora os pesos."],[sp,"Essa é só a soma dos produtos. Falta dividir pela soma dos pesos."],[sp/x.length,"Você dividiu por "+x.length+" (quantidade de notas). Divide-se pela soma dos pesos, "+sw+"."]],["Multiplique cada nota pelo peso: "+x.map((v,i)=>v+"×"+w[i]).join(" + ")+" = "+sp,"Some os pesos: "+w.join(" + ")+" = "+sw,"x̄p = "+sp+" / "+sw+" = "+fm(m)])});
G[3].push(()=>{const x=[0,1,2,3,4],f=x.map(()=>R(1,8)),n=sum(f),sp=sum(x.map((v,i)=>v*f[i])),m=sp/n;return mk(3,"A tabela mostra o número de acidentes por dia em "+n+" dias. Qual é o número médio de acidentes por dia?",m,[[sum(x)/x.length,"Essa é a média simples dos xi: ignora as frequências."],[sp,"Essa é só Σ(xi·fi). Falta dividir por n."],[x[f.indexOf(Math.max(...f))],"Esse é o valor mais frequente (moda), não a média."]],["Multiplique cada xi pela fi: "+x.map((v,i)=>v+"×"+f[i]).join(" + ")+" = "+sp,"n = Σfi = "+n,"x̄ = "+sp+" / "+n+" = "+fm(m)],tb(["Acidentes (xi)","Dias (fi)"],x.map((v,i)=>[v,f[i]])))});
G[3].push(()=>{const x=[1,2,3,4,5],f=x.map(()=>R(2,9));if(sum(f)%2===0)f[R(0,4)]++;const n=sum(f),p=(n+1)/2;let c=0;const ac=f.map(v=>c+=v),m=x[ac.findIndex(a=>a>=p)];return mk(3,"Qual é a mediana do número de defeitos por peça nesta tabela?",m,[[3,"Esse é o valor do meio da coluna xi. A mediana usa a posição entre as "+n+" observações."],[x[f.indexOf(Math.max(...f))],"Esse é o valor de maior frequência (moda), não a mediana."],[sum(x.map((v,i)=>v*f[i]))/n,"Essa é a média, não a mediana."]],["n = Σfi = "+n+" (ímpar) → posição (n+1)/2 = "+p,"Frequência acumulada: "+x.map((v,i)=>v+"→"+ac[i]).join(", "),"A posição "+p+" cai na linha xi = "+m+". Mediana = "+m],tb(["Defeitos (xi)","Peças (fi)"],x.map((v,i)=>[v,f[i]])))});
G[3].push(()=>{const x=[0,5,10,15,20],f=uniq(5,1,12),mx=Math.max(...f),m=x[f.indexOf(mx)];return mk(3,"Qual é a moda da distribuição abaixo?",m,[[mx,"Esse é o maior fi (a frequência). A moda é o VALOR xi que tem essa frequência."],[sum(x.map((v,i)=>v*f[i]))/sum(f),"Essa é a média, não a moda."],[x[2],"Esse é o valor do meio da coluna xi. A moda é o de maior frequência."]],["Procure a maior frequência fi.","Maior fi = "+mx+", na linha xi = "+m,"Moda = "+m],tb(["xi","fi"],x.map((v,i)=>[v,f[i]])))});
G[3].push(()=>{const h=pick([10,20,200,500,1000]),a=h*pick([1,2,3,5]),b=a+h;return mk(3,"Qual é o ponto médio da classe "+a+" a "+b+"?",(a+b)/2,[[h,"Essa é a amplitude da classe (b − a)."],[a,"Esse é o limite inferior da classe."],[b,"Esse é o limite superior da classe."]],["Ponto médio = (limite inferior + limite superior) / 2","("+a+" + "+b+") / 2","= "+fm((a+b)/2)])});
G[3].push(()=>{const h=pick([10,20]),s=pick([0,10,20,30]),f=Array.from({length:4},()=>R(2,9)),L=f.map((_,i)=>s+i*h),P=L.map(l=>l+h/2),n=sum(f),sp=sum(P.map((p,i)=>p*f[i])),m=sp/n;return mk(3,"Calcule a média da distribuição em classes abaixo.",m,[[sum(P)/4,"Média simples dos pontos médios: ignora as frequências."],[sp,"Essa é só Σ(xi·fi). Falta dividir por n."],[sum(L.map((l,i)=>l*f[i]))/n,"Você usou o limite inferior. O representante da classe é o ponto médio."]],["Pontos médios: "+P.join(", "),"Σ(xi·fi) = "+P.map((p,i)=>p+"×"+f[i]).join(" + ")+" = "+sp,"n = "+n,"x̄ = "+sp+" / "+n+" = "+fm(m)],cls(L,h,f))});
G[3].push(()=>{const h=pick([10,20]),s=pick([0,10,20,30]),f=Array.from({length:4},()=>R(3,10)),L=f.map((_,i)=>s+i*h),n=sum(f),ac=[];let c=0;f.forEach(v=>ac.push(c+=v));const p=n/2,k=ac.findIndex(a=>a>=p),fa=k?ac[k-1]:0,m=L[k]+(p-fa)*h/f[k];return mk(3,"Calcule a mediana da distribuição em classes abaixo.",m,[[L[k]+(n-fa)*h/f[k],"Você usou n na fórmula. Deve-se usar n/2."],[L[k],"Esse é só o limite inferior da classe: falta somar a parte proporcional."],[L[k]+(p-ac[k])*h/f[k],"Você usou a Fac da própria classe. Deve-se usar a Fac ANTERIOR."],[L[k]+h/2,"Esse é o ponto médio da classe mediana, não o valor pela fórmula."]],["n/2 = "+n+"/2 = "+fm(p),"Fac: "+ac.join(", ")+". A classe da mediana é "+L[k]+" a "+(L[k]+h)+" (primeira com Fac ≥ "+fm(p)+")","lMd = "+L[k]+"; Fac anterior = "+fa+"; h = "+h+"; fMd = "+f[k],"Md = "+L[k]+" + ("+fm(p)+" − "+fa+") × "+h+" / "+f[k]+" = "+fm(m)],cls(L,h,f))});
G[3].push(()=>{let f,mx;do{f=Array.from({length:5},()=>R(2,14));mx=Math.max(...f)}while(!(f.indexOf(mx)>0&&f.indexOf(mx)<4&&f.filter(v=>v===mx).length===1));const h=pick([10,20]),s=pick([0,10,20]),L=f.map((_,i)=>s+i*h),k=f.indexOf(mx),fa=f[k-1],fp=f[k+1],m=L[k]+(mx-fa)*h/(2*mx-(fa+fp));return mk(3,"Calcule a moda de Czuber da distribuição abaixo.",m,[[L[k]+h/2,"Esse é o ponto médio da classe modal: uma aproximação, não a fórmula de Czuber."],[L[k],"Esse é só o limite inferior da classe modal."],[L[k]+(mx-fa)*h/(mx+fp),"Denominador errado. É 2·fMo − (fant + fpost)."]],["Classe modal = a de maior fi ("+mx+"): "+L[k]+" a "+(L[k]+h),"fant = "+fa+"; fpost = "+fp+"; h = "+h+"; lMo = "+L[k],"Mo = "+L[k]+" + ("+mx+" − "+fa+") × "+h+" / [2×"+mx+" − ("+fa+" + "+fp+")]","Mo = "+fm(m)],cls(L,h,f))});
G[3].push(()=>{let f;do{f=[R(4,14),R(4,14),R(4,14)];f.push(40-sum(f))}while(f[3]<3);const SP=pick([["Q1",.25,"n/4"],["Q3",.75,"3n/4"],["D4",.4,"4·n/10"],["D7",.7,"7·n/10"],["P35",.35,"35·n/100"],["P90",.9,"90·n/100"]]),h=pick([10,20]),s=pick([0,10,20]),L=f.map((_,i)=>s+i*h),ac=[];let c=0;f.forEach(v=>ac.push(c+=v));const pos=SP[1]*40,k=ac.findIndex(a=>a>=pos),fa=k?ac[k-1]:0,m=L[k]+(pos-fa)*h/f[k];return mk(3,"Na distribuição abaixo (n = 40), calcule "+SP[0]+".",m,[[pos,"Essa é a posição, não o valor. O valor sai da fórmula."],[L[k],"Esse é só o limite inferior da classe: falta a parte proporcional."],[L[k]+(pos-ac[k])*h/f[k],"Você usou a Fac da própria classe. Deve-se usar a Fac ANTERIOR."],[L[k]+h/2,"Esse é o ponto médio da classe, não o valor pela fórmula."]],["Posição de "+SP[0]+" = "+SP[2]+" = "+fm(pos),"Fac: "+ac.join(", ")+". A classe é "+L[k]+" a "+(L[k]+h),"Valor = "+L[k]+" + ("+fm(pos)+" − "+fa+") × "+h+" / "+f[k],SP[0]+" = "+fm(m)],cls(L,h,f))});
G[3].push(()=>{const n=pick([40,50,60,80,100,200]),SP=pick([["Q1",.25,"n/4"],["Q3",.75,"3n/4"],["D4",.4,"4·n/10"],["D8",.8,"8·n/10"],["P25",.25,"25·n/100"],["P82",.82,"82·n/100"]]),pos=SP[1]*n;return mk(3,"Em uma distribuição com n = "+n+", em qual posição está "+SP[0]+"?",pos,[[n/2,"Essa é a posição da mediana (n/2)."],[SP[1]*100,"Esse é o percentual ("+fm(SP[1]*100)+"%). A posição vem de multiplicar pelo total n."],[n-pos,"Essa é a posição do complemento (n menos a posição)."]],[SP[0]+" usa a posição "+SP[2],"Substitua n = "+n,"Posição = "+fm(pos)])});
const LUC=tb(["Empresa","Lucro (US$ mi)"],[["Banc One","1.427,0"],["CPC Intl.","580,0"],["Tyson Foods","87,0"],["Hewlett-Packard","2.586,0"],["Intel","5.157,0"],["Northrup","234,0"],["Seagate Tech.","213,3"],["Unisys","49,7"],["Westvaco","212,2"],["Woolworth","168,7"]]);
const ERR=tb(["Erros (xi)","Dias (fi)"],[[5,3],[6,3],[7,4],[8,4],[9,1],[10,5],[11,2],[12,9],[14,3],[15,3],[16,2],[18,1]]);
const FIL=tb(["Nº de filhos (xi)","Funcionários (fi)"],[[0,19],[1,4],[2,9],[3,3],[5,1]]);
const SAL=tb(["Classe (s.m.)","fi"],[["4 a 7",7],["7 a 10",11],["10 a 13",6],["13 a 16",6],["16 a 19",4],["19 a 22",2]]);
const RAD=tb(["Região","Emissoras"],[["Sudeste",2128],["Sul",1524],["Nordeste",1328],["Centro-Oeste",454],["Norte",330]]);
const LAM=tb(["Duração (h)","Nº de lâmpadas"],[["400 a 500",28],["500 a 600",36],["600 a 700",48],["700 a 800",60],["800 a 900",50],["900 a 1000",38]]);
const ALT=tb(["Altura (cm)","Alunos (fi)"],[["150 a 160",2],["160 a 170",15],["170 a 180",18],["180 a 190",18],["190 a 200",16],["200 a 210",4]]);
const RAC=tb(["Aumento (kg)","Animais (fi)"],[["0 a 2",5],["2 a 4",7],["4 a 6",20],["6 a 8",16],["8 a 10",7],["10 a 12",5]]);
const AUD=tb(["Tempo (min)","Balanços (fi)"],[["9 a 19",3],["19 a 29",5],["29 a 39",10],["39 a 49",14],["49 a 59",20]]);
const FOR=tb(["Edições lidas (xi)","Assinantes (fi)"],[[0,15],[1,10],[2,30],[3,45],[4,50],[5,350]]);
const C=[
[1,"Qual ramo da Estatística usa uma amostra para concluir algo sobre a população?","Estatística inferencial",[["Estatística descritiva","A descritiva só coleta, organiza e apresenta os dados; não generaliza."],["Censo","Censo estuda a população inteira, então não precisa inferir."],["Rol","Rol é só a lista de dados ordenados, não um ramo."]],["Descritiva: organiza e apresenta.","Inferencial: generaliza da amostra para a população.","A pergunta fala em concluir sobre a população, logo é a inferencial."]],
[1,"A renda média calculada em uma amostra de assalariados é:","Uma estatística",[["Um parâmetro","Parâmetro é a medida da população inteira."],["Um censo","Censo é um tipo de pesquisa, não uma medida."],["Uma variável qualitativa","Renda é numérica, então é quantitativa."]],["Veja de onde vem o número: de uma amostra.","Medida da amostra = estatística; medida da população = parâmetro.","Logo, é uma estatística."]],
[1,"Uma amostra é viciada quando:","Alguns tipos de elementos tinham mais chance de ser escolhidos",[["Ela é muito pequena","Tamanho pequeno gera erro amostral, mas o vício é tendência na escolha."],["Foi sorteada ao acaso","O sorteio aleatório busca justamente evitar o vício."],["Reúne a população inteira","Isso seria um censo."]],["Vício = tendência na seleção.","Exemplo: favorecer homens ou casados na escolha.","Por isso a amostra deixa de representar a população."]],
[1,"Os números 5, 6 e 7, sem nenhum contexto, são:","Dados",[["Informação","Só viram informação ao ganhar significado, como as idades de três crianças."],["Parâmetros","Parâmetro é uma medida da população."],["Variáveis","Variável é a característica estudada, e aqui nem sabemos qual é."]],["Números soltos, sem significado, são dados.","Com contexto (idades de três crianças) viram informação.","Sem contexto, são apenas dados."]],
[1,"Por que a frequência absoluta não serve para comparar grupos?","O mesmo valor tem significados diferentes conforme o total n",[["Porque não é um número inteiro","Ela é um número inteiro (contagem)."],["Porque só vale para variáveis contínuas","Vale para qualquer variável."],["Porque a soma dela é sempre 100","A soma de fi é n. É a relativa percentual que soma 100."]],["20 de 40 é metade; 20 de 20 é tudo.","A mesma frequência absoluta tem pesos diferentes.","A relativa (fi/n) corrige isso, pois usa o mesmo total (100%)."]],
[1,"Quantas classes são sugeridas ao agrupar dados contínuos?","Entre 5 e 15",[["Entre 1 e 3","Poucas classes perdem informação."],["Mais de 30","Classes demais não resumem os dados."],["Exatamente 2","Duas classes perdem muita informação."]],["Classes demais: não há resumo.","Classes de menos: perde-se informação.","A sugestão é de 5 a 15 classes, de mesma amplitude."]],
[2,"Qual é a principal vantagem do gráfico sobre a tabela?","Visualização imediata da distribuição",[["Mostra mais casas decimais","Quem mostra valores exatos é a tabela."],["Dispensa coletar dados","O gráfico depende de dados coletados."],["Elimina a escala","A escala continua sendo essencial."]],["Gráficos usam formas visuais.","Isso mostra concentração e dispersão rapidamente.","Por isso a vantagem é a visualização imediata."]],
[2,"Qual a diferença entre gráfico de colunas e de barras?","Os eixos de categorias e de frequências são trocados",[["Colunas só usam dados contínuos","Ambos servem a dados qualitativos ou discretos."],["Barras só mostram porcentagens","Podem mostrar frequências absolutas ou relativas."],["Não há nenhuma diferença","Há: a orientação dos eixos."]],["Colunas: categorias na horizontal, frequência na vertical.","Barras: categorias na vertical, frequência na horizontal.","Só a orientação muda."]],
[2,"Um eixo vertical que começa em 2,0, com passos de 0,1, faz uma pequena variação parecer:","Um crescimento enorme",[["Constante","Constante é o efeito de começar em zero com passos grandes."],["Uma queda","Os dados continuam subindo; só parecem crescer mais."],["Impossível de ler","É legível, só é enganoso."]],["Escala pequena amplia as diferenças.","Os mesmos dados parecem crescer muito.","Por isso a escala deve ser escolhida com cuidado."]],
[2,"O histograma representa:","Variável contínua agrupada em classes",[["Variável qualitativa nominal","Para qualitativas usam-se colunas, barras ou setores."],["Qualquer série ao longo do tempo","Séries temporais usam gráfico de linhas."],["Apenas porcentagens de um todo","Isso é o gráfico de setores."]],["Histograma = distribuição de variável contínua.","Os dados precisam estar em classes.","Retângulos justapostos, com altura proporcional à frequência."]],
[2,"Para comparar oferta e demanda de etanol ao longo dos anos, o melhor gráfico é:","Linhas múltiplas",[["Setores","Setores mostram partes de um todo em um instante."],["Histograma","Histograma é para variável contínua em classes."],["Barras simples","Barras simples mostram uma única série por categoria."]],["São duas séries ao longo do tempo.","Linhas ligam os pontos e mostram a tendência.","Linhas múltiplas permitem comparar as duas séries."]],
[2,"O gráfico de setores (pizza) é mais usado para:","Dados qualitativos em porcentagem (partes de um todo)",[["Séries de tempo","Séries de tempo usam linhas."],["Variável contínua em classes","Isso é histograma."],["Comparar muitos grupos lado a lado","Isso é colunas ou barras múltiplas."]],["Cada setor é uma parte do total.","As áreas são proporcionais às frequências relativas.","Serve principalmente para dados qualitativos."]],
[2,"Sobre softwares gráficos, é correto afirmar que:","Só traduzem dados em gráfico; verificar a correção é papel do pesquisador",[["Garantem que o gráfico está certo","Eles não avaliam se a escala ou o tipo estão adequados."],["Escolhem a melhor escala sozinhos","A escolha é do pesquisador."],["Eliminam a necessidade de interpretar","A interpretação continua necessária."]],["O software desenha o que você pede.","Ele não julga se a mensagem está correta.","A responsabilidade é de quem produz o gráfico."]],
[3,"Em 4, 5, 6, 6, 7 e 80, qual medida é menos afetada pelo 80?","A mediana",[["A média","A média sobe de 6 para 18 com o valor extremo."],["A soma","A soma aumenta bastante com o 80."],["A amplitude","A amplitude passa a depender do 80."]],["A média usa todos os valores, então o 80 a puxa.","A mediana usa só a posição central (valor 6).","Logo, a mediana quase não muda."]],
[3,"Uma distribuição com duas modas é chamada de:","Bimodal",[["Simétrica","Simetria é sobre o formato, não sobre o número de modas."],["Ponderada","Ponderada é um tipo de média."],["Amodal","Amodal seria sem moda."]],["Moda é o valor mais frequente.","Se dois valores empatam, há duas modas.","Esse caso é a distribuição bimodal."]],
[3,"O segundo quartil (Q2) coincide com:","A mediana",[["A moda","A moda é o mais frequente, não uma posição."],["A média","A média pode ser diferente de Q2."],["O primeiro decil","D1 deixa 10% abaixo; Q2 deixa 50%."]],["Q2 divide os dados em 50% e 50%.","A mediana também divide em 50% e 50%.","Logo, Q2 = mediana."]],
[3,"A média ponderada é a indicada quando:","Os valores têm pesos diferentes",[["Todos os valores têm o mesmo peso","Nesse caso, a média simples basta."],["Há duas modas","Isso não define o tipo de média."],["Os dados são qualitativos","Média exige dados quantitativos."]],["Média ponderada: Σ(xi·fi) / Σfi.","Os pesos dão importâncias diferentes aos valores.","Usa-se quando os pesos são distintos."]],
[3,"Para dados em classes, qual valor representa cada classe no cálculo da média?","O ponto médio",[["O limite inferior","Subestima o valor de cada classe."],["O limite superior","Superestima o valor de cada classe."],["A amplitude","Amplitude é o tamanho da classe, não um valor dos dados."]],["Dados em classes perdem o valor exato.","Usa-se um representante: o ponto médio (a + b) / 2.","Depois, calcula-se a média ponderada com as fi."]],
[3,"A moda de Czuber usa as frequências de quais classes?","Modal, anterior e posterior",[["Primeira e última","As classes extremas não entram na fórmula."],["Mediana e modal","Czuber não usa a classe da mediana."],["Acumulada e relativa","Ele usa frequências absolutas das vizinhas da modal."]],["Identifique a classe modal (maior fi).","Pegue fant (anterior) e fpost (posterior).","Mo = l + (fMo − fant)·h / [2fMo − (fant + fpost)]."]],
[3,"Dizer que P82 = 54,32 minutos significa que:","82% dos valores são de até 54,32 minutos",[["82 valores são iguais a 54,32","P82 é medida de posição percentual, não contagem."],["82% dos valores estão acima de 54,32","Acima ficam os 18% restantes."],["A média é 54,32 minutos","Percentil não é média."]],["O percentil Pi deixa i% dos dados abaixo.","P82 deixa 82% até esse valor.","Os outros 18% ficam acima."]],
/* Exercícios das apostilas (fixos) */
[1,"Classifique a variável: número de pessoas favoráveis à reforma tributária.","Quantitativa discreta",[["Qualitativa ordinal","Ordinal é categoria com ordem (como escolaridade). Aqui o resultado é uma contagem de pessoas."],["Quantitativa contínua","Contínua vem de medida e aceita decimais. Não existe 3,5 pessoa."],["Qualitativa nominal","Nominal é categoria sem ordem. Aqui o dado é um número obtido por contagem."]],["Pergunte: o resultado é categoria ou número? É número (quantidade de pessoas).","Vem de contagem ou de medida? Contagem, só inteiros.","Contagem de inteiros = quantitativa discreta."]],
[1,"Classifique a variável: vida útil de lâmpadas (em horas).","Quantitativa contínua",[["Quantitativa discreta","Discreta é contagem. Vida útil é medida (pode ser 512,4 h)."],["Qualitativa ordinal","Ordinal é categoria com ordem. Horas são números medidos."],["Qualitativa nominal","Nominal é categoria sem ordem. Horas são números medidos."]],["Pergunte: categoria ou número? É número (horas).","Vem de contagem ou de medida? Medida, aceita decimais.","Medida = quantitativa contínua."]],
[1,"Na amostra da Fortune 500 abaixo, que porcentagem de empresas teve lucro acima de US$ 100 milhões?","80%",[["20%","Esse é o percentual das que NÃO passaram de 100 (2 de 10). A pergunta é sobre as acima."],["8%","Você usou a contagem 8 sem dividir por n e multiplicar por 100."],["70%","Faltou contar uma empresa: confira cada linha com lucro maior que 100."]],["Marque os lucros acima de 100: 1.427; 580; 2.586; 5.157; 234; 213,3; 212,2; 168,7 (8 empresas).","As de 87,0 e 49,7 ficam de fora. n = 10.","fri(%) = 8 / 10 × 100 = 80%."],LUC],
[1,"Em 40 dias contou-se o nº de erros de impressão de um jornal (tabela). Qual a porcentagem de dias com pelo menos 15 erros?","15%",[["7,5%","Você contou só os dias com exatamente 15 erros (3 dias). 'Pelo menos 15' inclui 15, 16 e 18."],["85%","Esse é o percentual de dias com MENOS de 15 erros (o complemento)."],["6%","Esse é o número de dias (6), sem dividir por n = 40 e multiplicar por 100."]],["'Pelo menos 15' = 15 ou mais: valores 15, 16 e 18.","Some as fi: 3 + 2 + 1 = 6 dias.","6 / 40 × 100 = 15%."],ERR],
[1,"Na tabela de 36 funcionários, qual a frequência acumulada relativa (%) até 2 filhos?","88,89%",[["25,00%","Essa é só a fri% da linha de 2 filhos (9/36). 'Até 2' soma as linhas 0, 1 e 2."],["32%","32 é a frequência acumulada absoluta (Fac). Falta dividir por n = 36 e multiplicar por 100."],["63,89%","Você parou em 1 filho (23/36). Faltou somar a linha de 2 filhos."]],["'Até 2 filhos' = linhas 0, 1 e 2.","Fac = 19 + 4 + 9 = 32 funcionários.","32 / 36 × 100 = 88,89%."],FIL],
[1,"Na tabela de salários de 36 funcionários, quantos recebem menos de 13,00 s.m.?","24",[["6","Essa é só a fi da classe de 10 a 13. 'Menos de 13' acumula as classes anteriores."],["30","Esse é o acumulado até 16 s.m., uma classe a mais."],["18","Esse é o acumulado até 10 s.m., uma classe a menos."]],["'Menos de 13' = classes 4–7, 7–10 e 10–13.","Fac = 7 + 11 + 6 = 24.","Resposta: 24 funcionários (66,67% do total)."],SAL],
[2,"Se o nº de emissoras de rádio por região (tabela) fosse representado em um gráfico de setores, qual seria o ângulo da região Sul?","95,2°",[["26,4°","Esse é o percentual (26,4%), não o ângulo. Falta multiplicar a proporção por 360."],["90°","90° seria exatamente 25% do total. A região Sul tem um pouco mais (26,4%)."],["132,9°","Esse é o ângulo do Sudeste (2128). A pergunta é sobre o Sul."]],["n = 2128 + 1524 + 1328 + 454 + 330 = 5764.","Proporção do Sul = 1524 / 5764 ≈ 0,2644 (26,44%).","Ângulo = 0,2644 × 360 ≈ 95,2°. Logo, é maior que 90°."],RAD],
[2,"Na tabela de emissoras de rádio por região, que porcentagem do total está na região Norte?","5,73%",[["0,06%","Essa é a proporção (330/5764). Para virar porcentagem, multiplique por 100."],["6,07%","Você dividiu pelas outras regiões (5434). O certo é dividir pelo TOTAL (5764)."],["15,51%","Você comparou com a maior região (Sudeste, 2128), não com o total."]],["Total n = 5764.","fr(%) = fi / n × 100","330 / 5764 × 100 ≈ 5,73%."],RAD],
[2,"Do lixo diário no Brasil, 148.800 t das 240.000 t vêm de 'outros materiais'. Qual o ângulo desse setor em um gráfico de setores?","223,2°",[["62°","62 é o percentual (148.800/240.000). Não confunda % com graus: o círculo tem 360°."],["90°","90° corresponde ao papel (60.000 t = 25%), não a 'outros materiais'."],["136,8°","Esse é o ângulo do restante (38% × 3,6). A pergunta é sobre 'outros materiais'."]],["Proporção = 148.800 / 240.000 = 0,62 (62%).","Ângulo = 0,62 × 360","= 223,2°."]],
[2,"Para mostrar a participação de homens e mulheres no mercado de trabalho em 1975, 1985, 1995, 2005 e 2015, o gráfico mais adequado é:","Linhas múltiplas",[["Setores","Setores mostram partes de um todo em um único momento. Aqui há evolução no tempo."],["Histograma","Histograma é só para variável contínua agrupada em classes."],["Colunas simples","Colunas simples mostram uma única série. Aqui são duas (homens e mulheres)."]],["Há tempo no eixo horizontal: pense em linhas.","Há duas séries (homens e mulheres) para comparar.","Duas séries ao longo do tempo = linhas múltiplas."]],
[2,"Ao construir o histograma da vida útil das 260 lâmpadas (tabela), qual classe terá a barra mais alta?","700 a 800 (60 lâmpadas)",[["900 a 1000 (38 lâmpadas)","Essa é a última classe, mas não a de maior frequência."],["800 a 900 (50 lâmpadas)","É a segunda maior frequência. A mais alta é a de 60."],["400 a 500 (28 lâmpadas)","Essa é a menor frequência da tabela: a barra mais baixa."]],["No histograma, a altura é proporcional à frequência fi.","Procure o maior fi: 60.","Ele está na classe 700 a 800."],LAM],
[3,"Salários semanais (R$) de 20 operários: 155, 140, 140, 140, 180, 140, 165, 140, 200, 140, 140, 140, 155, 240, 165, 180, 190, 205, 225, 230. Qual é a mediana?","160",[["155","Esse é só o 10º valor do rol. Como n = 20 é par, faz-se a média do 10º e do 11º."],["165","Esse é só o 11º valor do rol. Falta a média com o 10º (155)."],["170,5","Essa é a média aritmética, não a mediana."]],["Rol: 140 (8 vezes), 155, 155, 165, 165, 180, 180, 190, 200, 205, 225, 230, 240.","n = 20 é par: posições n/2 = 10 e n/2 + 1 = 11, valores 155 e 165.","Mediana = (155 + 165) / 2 = 160."]],
[3,"Taxas de juros (%) de 15 ações: 2,65; 2,01; 1,98; 1,85; 2,71; 2,59; 2,06; 2,60; 2,62; 2,61; 2,50; 2,63; 2,64; 2,55; 2,57. Qual é a taxa modal?","Não existe moda (nenhum valor se repete)",[["2,59","Esse valor é a mediana (8º do rol), não a moda."],["2,44","Essa é a média, não a moda."],["2,71","Esse é o maior valor, não o mais frequente."]],["Moda = valor que mais se repete.","Verifique repetições: nenhum valor aparece duas vezes.","Sem repetição, não há moda. (A média ≈ 2,44 e a mediana = 2,59 existem normalmente.)"]],
[3,"Na distribuição das alturas de 73 alunos (tabela), calcule a mediana.","180,83",[["185","Esse é o ponto médio da classe da mediana, não o valor pela fórmula."],["180","Esse é só o limite inferior da classe: falta a parte proporcional."],["201,11","Você usou n (73) na fórmula. Deve-se usar n/2 = 36,5."]],["n/2 = 73/2 = 36,5.","Fac: 2, 17, 35, 53, 69, 73. A primeira com Fac ≥ 36,5 é a de 180 a 190.","lMd = 180; Fac anterior = 35; h = 10; fMd = 18.","Md = 180 + (36,5 − 35) × 10 / 18 ≈ 180,83 cm."],ALT],
[3,"Na distribuição das alturas de 73 alunos (tabela), calcule a média.","180,89",[["180,83","Essa é a mediana. A média usa os pontos médios e todas as frequências."],["13.205","Essa é só Σ(xi·fi). Falta dividir por n = 73."],["180","Média simples dos pontos médios: ignora as frequências."]],["Pontos médios: 155, 165, 175, 185, 195, 205.","Σ(xi·fi) = 155×2 + 165×15 + 175×18 + 185×18 + 195×16 + 205×4 = 13.205","x̄ = 13.205 / 73 ≈ 180,89 cm."],ALT],
[3,"Na distribuição do ganho de peso de 60 animais (tabela), calcule a moda de Czuber.","5,53",[["5","Esse é o ponto médio da classe modal: uma aproximação, não a fórmula de Czuber."],["4","Esse é só o limite inferior da classe modal."],["4,72","Denominador errado: é 2·fMo − (fant + fpost), e não fMo + fpost."]],["Classe modal = maior fi (20): 4 a 6.","lMo = 4; fMo = 20; fant = 7; fpost = 16; h = 2.","Mo = 4 + (20 − 7) × 2 / [2×20 − (7 + 16)]","Mo = 4 + 26 / 17 ≈ 5,53 kg."],RAC],
[3,"Numa turma com 20 moças (média 9,2) e 50 rapazes (média 7,8), qual é a média da turma toda?","8,2",[["8,5","Essa é a média simples (9,2 + 7,8) / 2. Ela ignora que há mais rapazes."],["574","Essa é só a soma dos produtos (20×9,2 + 50×7,8). Falta dividir por 70."],["7,8","Essa é a média dos rapazes. As moças também entram no cálculo."]],["Média ponderada: os pesos são os tamanhos dos grupos (20 e 50).","Σ = 20×9,2 + 50×7,8 = 184 + 390 = 574; Σ pesos = 70.","574 / 70 = 8,2."]],
[3,"Na auditoria de 52 balanços (tabela), calcule o 3º quartil (Q3).","52,5",[["39","Essa é a posição (3n/4 = 39), não o valor. O valor sai da fórmula."],["49","Esse é só o limite inferior da classe de Q3: falta a parte proporcional."],["34","Esse é o Q1 (25% dos dados), não o Q3."]],["Posição de Q3 = 3n/4 = 3×52/4 = 39.","Fac: 3, 8, 18, 32, 52. A classe é de 49 a 59.","lQ3 = 49; Fac anterior = 32; h = 10; f = 20.","Q3 = 49 + (39 − 32) × 10 / 20 = 52,5 min."],AUD],
[3,"Na auditoria de 52 balanços (tabela), calcule o 4º decil (D4).","41",[["20,8","Essa é a posição (4n/10), não o valor."],["39","Esse é só o limite inferior da classe de D4."],["31","Você usou a Fac da própria classe (32). Deve-se usar a Fac ANTERIOR (18)."]],["Posição de D4 = 4×52/10 = 20,8.","Fac: 3, 8, 18, 32, 52 → classe de 39 a 49.","lD4 = 39; Fac anterior = 18; h = 10; f = 14.","D4 = 39 + (20,8 − 18) × 10 / 14 = 41 min (40% dos balanços levam até 41 min)."],AUD],
[3,"Na amostra de 500 assinantes (tabela), qual é o número médio de edições lidas?","4,31",[["5","Esse é o valor da mediana e da moda, não da média."],["2,5","Média simples dos xi: ignora as frequências."],["2.155","Essa é só Σ(xi·fi). Falta dividir por n = 500."]],["Σ(xi·fi) = 0×15 + 1×10 + 2×30 + 3×45 + 4×50 + 5×350 = 2.155","n = 500","x̄ = 2.155 / 500 = 4,31. (Mediana e moda valem 5: a média é puxada pelos poucos que leram menos.)"],FOR]
];
const H4=tb(["Classe","fi"],[["0 a 10",4],["10 a 20","?"],["20 a 30",12],["30 a 40",8]]);
const H5=cls([20,30,40,50,60],10,[5,9,14,6,2]);
const H9=cls([2,4,6,8,10],2,[5,12,18,10,5]);
const H=[
[3,"As notas bimestrais têm pesos 2, 2, 3 e 3. Um aluno tirou 6,0; 8,0 e 9,0 nos três primeiros bimestres. Qual a nota mínima no 4º bimestre para fechar com média final 7,5?","6,67",[["7,0","Essa é a conta com média simples (4 × 7,5 − 23). Aqui os bimestres têm pesos diferentes."],["20","Esse é o que falta nos pontos ponderados (75 − 55). Falta dividir pelo peso do 4º bimestre (3)."],["7,5","Igualar a nota à meta só funcionaria se todas as notas anteriores já fossem 7,5."]],["Para média 7,5 com Σpesos = 10, os pontos ponderados somam 7,5 × 10 = 75.","Já obtidos: 2×6 + 2×8 + 3×9 = 12 + 16 + 27 = 55.","Faltam 75 − 55 = 20 pontos, que vêm do 4º bimestre com peso 3.","Nota = 20 / 3 ≈ 6,67."]],
[3,"A média de 8 salários é R$ 3.000. Um salário de R$ 9.000 sai e outro entra no lugar, e a nova média dos 8 passa a ser R$ 2.500. Qual o salário que entrou?","R$ 5.000",[["R$ 2.500","Esse é o valor da nova média, não do salário que entrou. Ele só sai da diferença entre as somas."],["R$ 6.500","Você fez 9.000 − 2.500. A diferença entre as médias vale para a SOMA, não para um único valor."],["R$ 500","Essa é a diferença entre as médias (3.000 − 2.500), e não o salário."]],["Soma inicial = 8 × 3.000 = 24.000.","Tirando o de 9.000, restam 15.000 (7 salários).","Soma nova = 8 × 2.500 = 20.000.","Salário que entrou = 20.000 − 15.000 = R$ 5.000."]],
[3,"Dados: 12, 15, 15, 18, 20, 22, 95. Se o valor 95 for trocado por 25, o que acontece com as medidas?","Só a média muda (≈ 28,14 para ≈ 18,14)",[["Média e mediana mudam","A mediana é o 4º valor do rol e continua 18: ela só depende da posição, não do valor extremo."],["Média, mediana e moda mudam","A moda continua 15 (repete duas vezes) e a mediana continua 18."],["Nenhuma medida muda","A média usa todos os valores, então muda: 197/7 ≈ 28,14 antes e 127/7 ≈ 18,14 depois."]],["Antes: moda 15, mediana 18, média 197 / 7 ≈ 28,14.","Depois (rol 12, 15, 15, 18, 20, 22, 25): moda 15, mediana 18, média 127 / 7 ≈ 18,14.","A mediana e a moda resistem a valores extremos; a média não."]],
[3,"A distribuição abaixo tem n = 42 observações e a fi da 2ª classe está ilegível. Calcule a mediana.","19,44",[["15","Esse é o ponto médio da classe da mediana, não o valor pela fórmula."],["9,44","Você usou a Fac da própria classe (22). Deve-se usar a Fac ANTERIOR (4)."],["31,11","Você usou n (42) na fórmula. Deve-se usar n/2 = 21."]],["fi da 2ª classe = 42 − (4 + 12 + 8) = 18.","Fac: 4, 22, 34, 42. n/2 = 21 cai na classe 10 a 20 (primeira com Fac ≥ 21).","lMd = 10; Fac anterior = 4; h = 10; fMd = 18.","Md = 10 + (21 − 4) × 10 / 18 ≈ 19,44."],H4],
[3,"Calcule a moda de Czuber da distribuição abaixo.","43,85",[["46,15","Você trocou fant por fpost no numerador. É (fMo − fant) que entra, e não (fMo − fpost)."],["45","Esse é o ponto médio da classe modal. Como a classe anterior é mais cheia que a posterior, a moda fica abaixo do ponto médio."],["42,63","Denominador incompleto: é 2·fMo − (fant + fpost), e você subtraiu só um dos vizinhos."]],["Classe modal = maior fi (14): 40 a 50.","lMo = 40; fMo = 14; fant = 9; fpost = 6; h = 10.","Mo = 40 + (14 − 9) × 10 / [2×14 − (9 + 6)] = 40 + 50 / 13","Mo ≈ 43,85 (abaixo de 45, pois fant > fpost)."],H5],
[3,"Qual das igualdades entre separatrizes é verdadeira?","Q2 = D5 = P50 = mediana",[["Q3 = D8 = P75","Q3 e P75 coincidem (75%), mas D8 deixa 80% abaixo, então D8 = P80."],["Q1 = D3 = P25","Q1 e P25 coincidem (25%), mas D3 deixa 30% abaixo, então D3 = P30."],["D1 = P1 = Q1","D1 = P10 e Q1 = P25: nenhum deles é P1."]],["Converta tudo para percentual: Qi = i·25%, Di = i·10%, Pi = i%.","Q2 = 50%, D5 = 50% e P50 = 50%.","Os três deixam 50% dos dados abaixo, por isso coincidem com a mediana."]],
[2,"Os lucros (em milhões) foram 2,0 em julho e 2,4 em dezembro. Em um gráfico de linhas com o eixo vertical começando em 1,9, o lucro de dezembro parece quantas vezes o de julho, e qual o crescimento real?","Parece 5 vezes maior; crescimento real de 20%",[["Parece 1,2 vez maior; crescimento real de 20%","Isso seria com o eixo começando em zero. Com o eixo em 1,9 a diferença visual é ampliada."],["Parece 5 vezes maior; crescimento real de 400%","A aparência (5×) engana, mas o crescimento real é 0,4 / 2,0 = 20%."],["Parece 4 vezes maior; crescimento real de 20%","4 é a diferença (0,5 − 0,1) entre as alturas. A comparação é uma razão: 0,5 / 0,1 = 5."]],["Altura visual de julho = 2,0 − 1,9 = 0,1; de dezembro = 2,4 − 1,9 = 0,5.","Razão visual = 0,5 / 0,1 = 5 vezes.","Crescimento real = (2,4 − 2,0) / 2,0 = 20%.","Escala que não começa em zero exagera a diferença."]],
[2,"Em um gráfico de setores, A mede 90°, B mede 150° e C mede o restante. Se C representa 1.200 unidades, qual é o total e quanto vale B?","Total 3.600; B = 1.500",[["Total 4.800; B = 2.000","Você tratou C como 25%. C mede 120°, ou seja, 1/3 do círculo."],["Total 3.600; B = 900","900 é o valor de A (90° = 25%). B mede 150°."],["Total 1.200; B = 1.500","1.200 é só o valor de C, não o total."]],["C = 360° − 90° − 150° = 120° = 1/3 do círculo.","Se 1/3 vale 1.200, o total é 1.200 × 3 = 3.600.","B = 150 / 360 × 3.600 = 1.500."]],
[1,"Na distribuição de salários (n = 50) abaixo, supondo que os valores se espalham uniformemente dentro de cada classe, qual a porcentagem estimada de funcionários que ganha menos de 7 s.m.?","52%",[["34%","Essa é a porcentagem até 6 s.m. (17/50). Falta a parte da classe de 6 a 8 até o 7."],["70%","Esse é o acumulado até 8 s.m. (35/50), a classe inteira de 6 a 8."],["36%","Essa é só a porcentagem da classe de 6 a 8 (18/50)."]],["Até 6 s.m.: 5 + 12 = 17 funcionários.","7 está na metade da classe 6 a 8, que tem 18: metade = 9.","Total estimado = 17 + 9 = 26 de 50.","26 / 50 × 100 = 52%."],H9],
[3,"O grupo A tem 30 pessoas com média 70. O grupo B tem 20 pessoas. A média dos dois grupos juntos é 74. Qual a média do grupo B?","80",[["78","Essa é a conta de média simples (2 × 74 − 70). Os grupos têm tamanhos diferentes."],["1.600","Essa é a diferença entre as somas (3.700 − 2.100). Falta dividir por 20."],["74","Essa é a média geral. B precisa estar acima dela para compensar o grupo A."]],["Soma total = 50 × 74 = 3.700.","Soma de A = 30 × 70 = 2.100.","Soma de B = 3.700 − 2.100 = 1.600.","Média de B = 1.600 / 20 = 80."]]
];
let hard=0,qtyC=10,scope=0,qty=10,qi=0,cur=null,pts=0,combo=0,maxc=0,hits=0,tw,locked=true,used={},log=[],queue=[],endT;
function showBest(){const b=store.get("est-best-"+(hard?"h":"")+scope);$("best").textContent=(hard?"HARD: questões difíceis, pontos em dobro. ":"")+(b?"Recorde neste conteúdo: "+b+" pontos":"")}
function setScope(c){scope=c;$$("#qSeg .chip").forEach(x=>x.setAttribute("aria-pressed",+x.dataset.c===c));showBest()}
$$("#qSeg .chip").forEach(b=>b.onclick=()=>setScope(+b.dataset.c));
$$("#qLvl .chip").forEach(b=>b.onclick=()=>{hard=+b.dataset.h;$$("#qLvl .chip").forEach(x=>x.setAttribute("aria-pressed",x===b));showBest()});
$$("#qQty .chip").forEach(b=>b.onclick=()=>{qty=+b.dataset.n;qtyC=qty;$$("#qQty .chip").forEach(x=>x.setAttribute("aria-pressed",x===b))});
const show=id=>["qSetup","qPlay","qEnd"].forEach(x=>$(x).hidden=x!==id);
function countTo(el,to){const from=parseInt(el.dataset.v||0);el.dataset.v=to;const t0=performance.now();(function f(n){const p=Math.min((n-t0)/500,1);el.textContent=Math.round(from+(to-from)*p);if(p<1)requestAnimationFrame(f)})(t0)}
function nextQ(){
 if(hard){const hp=H.filter(r=>!scope||r[0]===scope);if(!queue.length)queue=shuffle(hp);return mk(...queue.pop())}
 const pool=C.filter(r=>!scope||r[0]===scope),gens=scope?G[scope]:[...G[1],...G[2],...G[3]];
 if(pool.length&&(!gens.length||Math.random()<.5)){if(!queue.length)queue=shuffle(pool);return mk(...queue.pop())}
 return pick(gens)();
}
const ol=s=>"<ol>"+s.map(x=>"<li>"+x+"</li>").join("")+"</ol>";
function start(){
 qty=qtyC;if(hard){const hq=H.filter(r=>!scope||r[0]===scope).length;qty=Math.min(qty||hq,hq)}
 qi=0;pts=0;combo=0;maxc=0;hits=0;used={};log=[];queue=[];
 $("hPts").dataset.v=0;$("hPts").textContent=0;$("hA").textContent=0;$("hC").textContent="x0";$("hCombo").classList.remove("hot");
 $("nodes").innerHTML=qty?"<i></i>".repeat(qty):"";$("nodes").hidden=!qty;
 $("l5").disabled=false;resetEnd();show("qPlay");ask();
}
function ask(){
 cur=nextQ();locked=false;
 $$("#nodes i").forEach((n,k)=>n.classList.toggle("cur",k===qi));
 $("qNum").textContent="questao_"+String(qi+1).padStart(2,"0")+(qty?" / "+qty:"")+(hard?" [HARD]":"");
 $("qFb").hidden=true;$("next").hidden=true;$("qTbl").innerHTML=cur.tbl;$("qOpts").innerHTML="";
 clearInterval(tw);let n=0;$("qText").textContent="";
 tw=setInterval(()=>{$("qText").textContent=cur.q.slice(0,++n);if(n>=cur.q.length)clearInterval(tw)},8);
 cur.opts.forEach((o,k)=>{const b=document.createElement("button");b.className="opt";b.innerHTML="<kbd>"+(k+1)+"</kbd><span></span>";b.lastChild.textContent=o.t;b.onclick=()=>answer(k);$("qOpts").appendChild(b)});
}
function answer(k){
 if(locked)return;locked=true;clearInterval(tw);
 const q=cur,o=q.opts[k],right=q.opts.find(x=>x.ok),hit=o.ok;$("qText").textContent=q.q;
 const btns=$$("#qOpts .opt");btns.forEach((b,x)=>{b.disabled=true;if(q.opts[x].ok)b.classList.add("ok");else if(x===k)b.classList.add("bad")});
 const r=btns[k].getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2;
 if(hit){combo++;maxc=Math.max(maxc,combo);hits++;$("hA").textContent=hits;const g=(100+(combo-1)*25)*(hard?2:1);pts+=g;countTo($("hPts"),pts);burst(cx,cy,18);beep(660);beep(880,.15);
  const f=document.createElement("div");f.className="fl";f.textContent="+"+g;f.style.cssText="left:"+cx+"px;top:"+cy+"px";document.body.appendChild(f);setTimeout(()=>f.remove(),1000)}
 else{combo=0;$("term").classList.remove("shake");void $("term").offsetWidth;$("term").classList.add("shake");beep(180,.25)}
 $("hC").textContent="x"+combo;$("hCombo").classList.toggle("hot",combo>=3);
 const nd=$$("#nodes i")[qi];if(nd){nd.classList.remove("cur");nd.classList.add(hit?"y":"n")}
 log.push({q:q.q,hit,steps:q.steps});
 $("qFb").hidden=false;
 $("qFb").innerHTML=hit?"<b>Correto!</b><details><summary>Ver resolução</summary>"+ol(q.steps)+"</details>":"<b>Não foi dessa vez.</b><div class='ftabs' role='tablist'><button class='ft on' data-t='why' role='tab' aria-selected='true'>❌ Por que não é essa</button><button class='ft' data-t='stp' role='tab' aria-selected='false'>🧠 Raciocínio certo</button></div><div class='why tp' data-p='why'><b>Por que não era \""+o.t+"\":</b> "+o.why+"</div><div class='stp tp' data-p='stp' hidden><b>Passo a passo até \""+right.t+"\":</b>"+ol(q.steps)+"</div>";
 $("next").hidden=false;$("next").textContent=qty&&qi===qty-1?"Ver resultado":"Próxima";$("next").focus();
}
$("qFb").onclick=e=>{const b=e.target.closest(".ft");if(!b)return;$$("#qFb .ft").forEach(x=>{const on=x===b;x.classList.toggle("on",on);x.setAttribute("aria-selected",on)});$$("#qFb .tp").forEach(x=>x.hidden=x.dataset.p!==b.dataset.t)};
$("next").onclick=()=>{qi++;qty&&qi>=qty?finish():ask()};
function fifty(){if(locked||used.f)return;used.f=1;$("l5").disabled=true;shuffle($$("#qOpts .opt").filter((b,x)=>!cur.opts[x].ok)).slice(0,2).forEach(b=>b.classList.add("gone"));beep(400)}
$("l5").onclick=fifty;
function resetEnd(){const b=$("endBtn");clearTimeout(endT);delete b.dataset.c;b.textContent="⏹ Encerrar quiz"}
$("endBtn").onclick=()=>{const b=$("endBtn");if(b.dataset.c){resetEnd();clearInterval(tw);log.length?finish():(show("qSetup"),showBest())}else{b.dataset.c=1;b.textContent="Confirmar encerramento";endT=setTimeout(resetEnd,3000)}};
document.addEventListener("keydown",e=>{
 if($("qPlay").hidden||document.activeElement.tagName==="INPUT")return;const k=e.key.toLowerCase();
 if(!locked&&"1234".includes(k)&&k&&+k<=cur.opts.length)answer(+k-1);
 else if(k==="f")fifty();
 else if(locked&&(k==="enter"||k===" ")&&!$("next").hidden&&document.activeElement!==$("next")){e.preventDefault();$("next").click()}
});
function finish(){
 const a=log.length,pct=Math.round(hits/a*100);
 countTo($("endScore"),pts);$("eH").textContent=hits+"/"+a;$("eC").textContent="x"+maxc;$("eP").textContent=pct+"%";
 $("rank").textContent=pct>=90?"🏆 Mestre da Estatística":pct>=70?"📊 Analista":pct>=50?"🌱 Estagiário promissor":"📚 Calouro em treino";
 $("rev").innerHTML=log.map(l=>"<li><details><summary>"+(l.hit?"✅":"❌")+" "+l.q+"</summary>"+ol(l.steps)+"</details></li>").join("");
 const prev=parseInt(store.get("est-best-"+(hard?"h":"")+scope)||"0");if(pts>prev)store.set("est-best-"+(hard?"h":"")+scope,pts);
 show("qEnd");
 if(pct>=70)for(let k=0;k<6;k++)setTimeout(()=>burst(innerWidth*(.15+Math.random()*.7),innerHeight*.3,24,undefined,220),k*180);
}
$("start").onclick=start;
$("again").onclick=()=>{show("qSetup");showBest()};
$("toSum").onclick=()=>tab("res");
showBest();

/* Navegação, lateral e parallax */
const nav=$("nav"),lks=$$("#nav .lk");
const navScroll=()=>nav.classList.toggle("solid",scrollY>40);
addEventListener("scroll",navScroll,{passive:true});navScroll();
const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)lks.forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+e.target.id))}),{rootMargin:"-45% 0px -50% 0px"});
["home","conteudo","quiz"].forEach(id=>so.observe($(id)));
$("home").addEventListener("mousemove",e=>{const x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;$$("#bg [data-d]").forEach(g=>{const d=+g.dataset.d;if(!g.hasAttribute("transform")){g.style.transform=`translate(${-x*d}px,${-y*d}px)`}})});
function side(list){
 let h="",last=0;
 list.forEach(s=>{if(s.c!==last){last=s.c;h+=`<div class="gl">Aula ${s.c}</div>`}h+=`<button data-id="${s.id}" class="${studied.includes(s.id)?"ok":""}">${s.t}</button>`});
 $("side").innerHTML=h||'<div class="gl">Sem resultados</div>';
 side.o&&side.o.disconnect();
 side.o=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){$$("#side button").forEach(b=>b.classList.toggle("act",b.dataset.id===e.target.dataset.id));const a=$("side").querySelector(".act");if(a&&innerWidth<=860)$("side").scrollTo({left:a.offsetLeft-40,behavior:"smooth"})}}),{rootMargin:"-30% 0px -60% 0px"});
 $$("#sections details").forEach(d=>side.o.observe(d));
}
$("side").onclick=e=>{const b=e.target.closest("button");if(!b)return;const d=$("sections").querySelector(`details[data-id="${b.dataset.id}"]`);if(!d)return;d.open=true;d.scrollIntoView({behavior:"smooth",block:"start"});d.classList.remove("fl2");void d.offsetWidth;d.classList.add("fl2")};
$("q").addEventListener("keydown",e=>{if(e.key==="Escape"&&query)$("clr").click()});
render();
const bgBlur=()=>{const b=Math.min(scrollY/(innerHeight*.9),1)*14;document.documentElement.style.setProperty("--bl",b.toFixed(1)+"px")};
addEventListener("scroll",bgBlur,{passive:true});bgBlur();
