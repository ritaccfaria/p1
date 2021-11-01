// RitaFaria 2021



// ------------------
// TROCAR DE MODO


// ir buscar botão
let mode = document.querySelector("header img");

// definir função da troca
function changeColor() {
  
  // ir buscar classes dos dois modos
  let bg = document.querySelector("body");
  let privacy = document.querySelector(".privacy");
  let transparency = document.querySelector(".transp");

  // se estiver na classe modo dark...	
  if (bg.className == "dark") {
	// trocar para classe modo light
    bg.className = "light";
	// trocar imagem do botão
    mode.setAttribute("src", "images/icon-dark.png")
	// desligar elementos classe privacy  
	privacy.style.display = "none";
	// ligar elementos classe transparency
	transparency.style.display = "block";
	  
  // vice versa  
  } else if (bg.className == "light") {
    bg.className = "dark";
    mode.setAttribute("src", "images/icon-light.png")
	privacy.style.display = "block";
	transparency.style.display = "none";  
  }
}

// ativar função com click no botão
mode.addEventListener("click", changeColor);





// ---------------
// PRIVACY


// arrays de coordenadas
let x = ["20vw","30vw", "60vw", "50vw", "70vw", "5vw", "10vw", "40vw"];
let y = ["50vh","40vh", "80vh", "50vh", "60vh", "70vh", "30vh", "50vh"];

// arrays de fontes/tamanhos
let font = ["Trilby", "Vesterbro", "Exquise", "Roslindale",  "BluuSuuperstar"];
let size = ["3vw", "3.5vw", "2vw", "4.5vw", "4vw"];

let rn;
let rn2;
let privArea;

// ir buscar area da palavra
privArea = document.querySelector(".privacy h1");


// função para mudar caracteristicas
function escape() {
	
	// ir buscar numero entre 0 e 7
	rn = Math.floor(Math.random() * 8);
	// ir buscar outro numero aleatorio entre 0 e 4
	rn2 = Math.floor(Math.random() * 5);
	
	console.log(rn, rn2);
	
	// atribuir fonte/tamanho/coordenadas atraves dos numeros aleatorios
	privArea.style.fontFamily = font[rn2] + ", serif";
	privArea.style.fontSize = size[rn2];	
	privArea.style.left = x[rn];
	privArea.style.top = y[rn];
	
	// voltar opacidade para o normal (transição está definida no css)
	privArea.style.opacity = 1;
	
	// desbloquear
	lock = false;
	
}



let lock = false;

// função para fazer transição fade out da palavra
function fadeOut() {
	if (lock == false) {
	// baixar opacidade	
	privArea.style.opacity = 0;
	// ativar função principal de mudança de posição passado um tempo
	setTimeout(escape, 325);
	// bloquear para não ativar função várias vezes
	lock = true;
	}
}


// ativar função de fade out quando o cursor passa na palavra
privArea.addEventListener("mousemove", fadeOut);






// --------------------------
// TRANSPARENCY



// FONTE 1

// ir buscar h1
let titulo1 = document.querySelector('#title1');
// ir buscar conteudo texto do h1
let txt = titulo1.textContent;
// apagar h1
titulo1.remove();
 
// criar contentor div
let container = document.createElement('div');
// ir buscar cada letra da palavra
for(let i = 0; i < txt.length; i++) {
	
	// criar span para cada letra
    let tel = document.createElement('span');
	// atribuir classes
    tel.classList.add("letter");
    tel.classList.add("line1normal");
    // criar o text node com uma letra
    let teltxt = document.createTextNode(txt[i]);
	// inserir no span
    tel.appendChild(teltxt);
	// inserir span no div
    container.appendChild(tel);
}

// ir buscar contentor para colocar o div
let page = document.querySelector('#page');

// criar 2 clones (para ter sempre 3 h1s a passar em scroll)
let cln1 = container.cloneNode(true);
let cln2 = container.cloneNode(true);

// colocar o container + clones na ordem correta, intercalados com os elementos "p"
let ref1 = document.querySelector("#page p:nth-of-type(1)")
let ref2 = document.querySelector("#page p:nth-of-type(2)")
let ref3 = document.querySelector("#page p:nth-of-type(3)")
page.insertBefore(container, ref1);
page.insertBefore(cln1, ref2);
page.insertBefore(cln2, ref3);


// ir buscar todos os span (letra)
let ltrs = document.querySelectorAll('.letter');
// ativar função quando passa o cursor
ltrs.forEach(function(el) {
    el.addEventListener('mouseover', change);
});


// função para mudar fonte
function change(e) {
	
	// variações na fonte
    e.target.style = 'transition: all 0.3s';    
    e.target.classList.add("line1weight");
	
	// voltar ao normal passado um tempo
    setTimeout( () => {
        e.target.style = 'transition: all 1s';
        e.target.classList.remove("line1weight");
    	e.target.classList.add("line1normal");
    }, 400);
}




// REPETIÇÃO DO MESMO PROCESSO PARA CADA LINHA DE TEXTO




// FONTE 2

let titulo2 = document.querySelector('#title2');
let txt2 = titulo2.textContent;
titulo2.remove();
 
let container2 = document.createElement('div');

for(let i = 0; i < txt2.length; i++) {
	
    let tel2 = document.createElement('span');
    tel2.classList.add("letter2");
    tel2.classList.add("line2normal");
    let teltxt2 = document.createTextNode(txt2[i]);
    tel2.appendChild(teltxt2);
    container2.appendChild(tel2);
}

let page2 = document.querySelector('#page2');

let cln1_2 = container2.cloneNode(true);
let cln2_2 = container2.cloneNode(true);

let ref1_2 = document.querySelector("#page2 p:nth-of-type(1)")
let ref2_2 = document.querySelector("#page2 p:nth-of-type(2)")
let ref3_2 = document.querySelector("#page2 p:nth-of-type(3)")
page2.insertBefore(container2, ref1_2);
page2.insertBefore(cln1_2, ref2_2);
page2.insertBefore(cln2_2, ref3_2);


let ltrs2 = document.querySelectorAll('.letter2');

ltrs2.forEach(function(el) {
    el.addEventListener('mouseover', change2);
});


function change2(e) {
	
    e.target.style = 'transition: all 0.3s';    
    e.target.classList.add("line2after");
	
    setTimeout( () => {
        e.target.style = 'transition: all 1s';
        e.target.classList.remove("line2after");
    	e.target.classList.add("line2normal");
    }, 400);

}




// FONTE 3

let titulo3 = document.querySelector('#title3');
let txt3 = titulo3.textContent;
titulo3.remove();
 
let container3 = document.createElement('div');

for(let i = 0; i < txt3.length; i++) {
	
    let tel3 = document.createElement('span');
    tel3.classList.add("letter3");
    tel3.classList.add("line3normal");
    let teltxt3 = document.createTextNode(txt3[i]);
    tel3.appendChild(teltxt3);
    container3.appendChild(tel3);
}

let page3 = document.querySelector('#page3');

let cln1_3 = container3.cloneNode(true);
let cln2_3 = container3.cloneNode(true);

let ref1_3 = document.querySelector("#page3 p:nth-of-type(1)")
let ref2_3 = document.querySelector("#page3 p:nth-of-type(2)")
let ref3_3 = document.querySelector("#page3 p:nth-of-type(3)")
page3.insertBefore(container3, ref1_3);
page3.insertBefore(cln1_3, ref2_3);
page3.insertBefore(cln2_3, ref3_3);


let ltrs3 = document.querySelectorAll('.letter3');

ltrs3.forEach(function(el) {
    el.addEventListener('mouseover', change3);
});


function change3(e) {
	
    e.target.style = 'transition: all 0.8s';    
    e.target.classList.add("line3after");
	
    setTimeout( () => {
        e.target.style = 'transition: all 2s';
        e.target.classList.remove("line3after");
    	e.target.classList.add("line3normal");
    }, 700);
}




// FONTE 4

let titulo4 = document.querySelector('#title4');
let txt4 = titulo4.textContent;
titulo4.remove();
 
let container4 = document.createElement('div');

for(let i = 0; i < txt4.length; i++) {
	
    let tel4 = document.createElement('span');
    tel4.classList.add("letter4");
    tel4.classList.add("line4normal");
    let teltxt4 = document.createTextNode(txt4[i]);
    tel4.appendChild(teltxt4);
    container4.appendChild(tel4);
}

let page4 = document.querySelector('#page4');

let cln1_4 = container4.cloneNode(true);
let cln2_4 = container4.cloneNode(true);

let ref1_4 = document.querySelector("#page4 p:nth-of-type(1)")
let ref2_4 = document.querySelector("#page4 p:nth-of-type(2)")
let ref3_4 = document.querySelector("#page4 p:nth-of-type(3)")
page4.insertBefore(container4, ref1_4);
page4.insertBefore(cln1_4, ref2_4);
page4.insertBefore(cln2_4, ref3_4);


let ltrs4 = document.querySelectorAll('.letter4');

ltrs4.forEach(function(el) {
    el.addEventListener('mouseover', change4);
});


function change4(e) {
	
    e.target.style = 'transition: all 0.5s';    
    e.target.classList.add("line4after");
	
    setTimeout( () => {
        e.target.style = 'transition: all 2s';
        e.target.classList.remove("line4after");
    	e.target.classList.add("line4normal");
    }, 700);
}

