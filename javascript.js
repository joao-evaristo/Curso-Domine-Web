//Na inicialização do documento, é necessário que alguma tecla no layout do teclado receba o foco afim de digitação do usuário ser recebida no documento
document.onload = document.getElementById("C").focus()
//Constantes que mapeiam as teclas pelo id
const button0 = document.getElementById("0")
const button1 = document.getElementById("1")
const button2 = document.getElementById("2")
const button3 = document.getElementById("3")
const button4 = document.getElementById("4")
const button5 = document.getElementById("5")
const button6 = document.getElementById("6")
const button7 = document.getElementById("7")
const button8 = document.getElementById("8")
const button9 = document.getElementById("9")
const buttonC = document.getElementById("C")
const buttonDiv = document.getElementById("div")
const buttonMulti = document.getElementById("mult")
const buttonSub = document.getElementById("sub")
const buttonAdd = document.getElementById("add")
const buttonEqual = document.getElementById("equal")
const buttonPoint = document.getElementById("point")
const buttonPorcentage = document.getElementById("porcentage")
const buttontBackspace = document.getElementById("backspace")

//Eventos que são disparados ao pressionar cada tecla
button0.addEventListener('click', function(){mostrarDisplay('0')}, false)
button1.addEventListener('click', function(){mostrarDisplay('1')}, false)
button2.addEventListener('click', function(){mostrarDisplay('2')}, false)
button3.addEventListener('click', function(){mostrarDisplay('3')}, false)
button4.addEventListener('click', function(){mostrarDisplay('4')}, false)
button5.addEventListener('click', function(){mostrarDisplay('5')}, false)
button6.addEventListener('click', function(){mostrarDisplay('6')}, false)
button7.addEventListener('click', function(){mostrarDisplay('7')}, false)
button8.addEventListener('click', function(){mostrarDisplay('8')}, false)
button9.addEventListener('click', function(){mostrarDisplay('9')}, false)
buttonC.addEventListener('click', function(){mostrarDisplay('C')}, false)
buttonDiv.addEventListener('click', function(){mostrarDisplay('/')}, false)
buttonMulti.addEventListener('click', function(){mostrarDisplay('*')}, false)
buttonSub.addEventListener('click', function(){mostrarDisplay('-')}, false)
buttonAdd.addEventListener('click', function(){mostrarDisplay('+')}, false)
buttonEqual.addEventListener('click', function(){mostrarDisplay('=')}, false)
buttonPoint.addEventListener('click', function(){mostrarDisplay('.')}, false)
buttonPorcentage.addEventListener('click', function(){mostrarDisplay('%')}, false)
buttontBackspace.addEventListener('click', function(){mostrarDisplay('backspace')}, false)

//Constante que contem as possibilidades de teclas necessárias para o script a serem pressionadas no teclado
const keyCodes = {
	8: 'backspace / delete',
	12: 'clear',
	13: 'enter',
	46: 'delete',
	48: '0',
	49: '1',
	50: '2',
	51: '3',
	52: '4',
	53: '5',
	54: '6',
	55: '7',
	56: '8',
	57: '9',
	96: 'numpad 0',
	97: 'numpad 1',
	98: 'numpad 2',
	99: 'numpad 3',
	100: 'numpad 4',
	101: 'numpad 5',
	102: 'numpad 6',
	103: 'numpad 7',
	104: 'numpad 8',
	105: 'numpad 9',
	106: 'multiply',
	107: 'add',
	109: 'subtract',
	110: 'decimal point',
	111: 'divide',
	160: '^',
	170: '*',
	187: 'equal sign',
	194: 'numpad period (chrome)',
	219: 'open bracket',
	221: 'close bracket / å',
	251: 'unlock trackpad (Chrome/Edge)',
};

//Função paara saber a tecla que foi digitada no teclado pelo usuário pelo usuário
function teclaDigitada(e){
	var keynum
	var keypress
	if(e.keyCode){      
		keynum = e.keyCode
		keypress = keyCodes[keynum]
	}
	pressionarTecla(keypress)
}

//Função que irá receber a tecla que foi pressionada e pressionar ela no teclado
function pressionarTecla(key){


	switch(key){
		case "0":
			button0.click()
			button0.focus()
			break
		case "1":
			button1.click()
			button1.focus()
			break
		case "2":
			button2.click()
			button2.focus()
			break
		case "3":
			button3.click()
			button3.focus()
			break
		case "4":
			button4.click()
			button4.focus()
			break
		case "5":
			button5.click()
			button5.focus()
			break
		case "6":
			button6.click()
			button6.focus()
			break
		case "7":
			button7.click()
			button7.focus()
			break
		case "8":
			button8.click()
			button8.focus()
			break
		case "9":
			button9.click()
			button9.focus()
			break
		case "clear":
			buttonC.click()
			buttonC.focus()
			break
		case "divide":
			buttonDiv.click()
			buttonDiv.focus()
			break
		case "multiply":
			buttonMulti.click()
			buttonMulti.focus()
			break
		case "subtract":
			buttonSub.click()
			buttonSub.focus()
			break
		case "add":
			buttonAdd.click()
			buttonAdd.focus()
			break
		case "equal sign":
			buttonEqual.click()
			buttonEqual.focus()
			break
		case "decimal point":
			buttonPoint.click()
			buttonPoint.focus()
			break
		case "backspace / delete":
			buttontBackspace.click()
			buttontBackspace.focus()
			break
	}
}

//Declaração de variáveis que serão usadas na função mostrarDisplay
var lista = ['0']
var igual = false//Variável usada para saber se o igual foi o último operando. É necessário saber isso pois se a tecla enter tiver sido pressionada anteriormente e se pressiona ela novamente, a operação será realizada de forma recursiva.
var operacaoMemoria = null
/*Função que irá exibir o número digitado no display e armazenar os números e operandos na lista. As operações de soma, subtração, multiplicação e divisão funcionam de forma semelhante
ja insruções de porcentagem, igual, limpar, backspace, ponto e qualquer outra tecla digitada são exclusivas.*/
function mostrarDisplay(key){
	switch(key){
		//No caso do clear "C" a calculadora limpa o display, seta o operacaoMemoria para null e esvazia a lista deixando-a com 0.
		case 'C':
			document.getElementById('display').value = ""//Limpar display
			operacaoMemoria = null
			lista = ['0']
			break
		//O backspace irá reduzir um número no display e pegar o último elemento da lista, reduzir um caractere e substituir o último com essa alteração
		case 'backspace':
			document.getElementById('display').value = (document.getElementById('display').value).substr(0, (document.getElementById('display').value).length - 1)//O display passa a receber uma substring, que vai do primeiro caractere ao tamanho-1, do valor atual de 
			let ultimoDaLista = lista[(lista.length) -1]
			if (ultimoDaLista != operacaoMemoria){//Aqui são feitas as alterações na lista. Caso o último elemento da lista seja diferente de um operando o último será substituído de forma semelhante ao display
				ultimoDaLista = ultimoDaLista.substr(0, ultimoDaLista.length - 1)
				lista.splice((lista.length) -1, 1, ultimoDaLista)
			}
			break
		//O '+', caso não haja operação operação na memória, irá adicionar o '+' como operação na memória. Também, caso o último elemento não seja um operando, irá adicionar um operando no final da lista.
		case '+':
			if(igual == true){//Caso o igual foi a última tecla a ser pressionada lista passa a receber apenas o último elemento da lista, que seria o resultado de operações anteriores, e assim continuara fazendo operações com o resultado.
					lista = (lista.reverse()).slice(-1)
				}
			if (operacaoMemoria != null) {//Caso já haja algum operando na memória, será exibido no display o resultado da operação até o momento ao pressionar a tecla '+'
					let listaTransformada = operacao(lista)
					document.getElementById('display').value = listaTransformada
			}
			else{//Caso contrário, o display será esvaziado para inserção do próximo elemento
				document.getElementById('display').value = ""
			}
			adicionarOperandoNaMemoria(lista, operacaoMemoria, key)//Essa função, declarada na linha 335, que irá adicionar a operação na memória e na lista
			break
		//Semelhante a '+'
		case '-':
			if(igual == true){
				lista = (lista.reverse()).slice(-1)
			}
			if (operacaoMemoria != null) {
				let listaTransformada = operacao(lista)
				document.getElementById('display').value = listaTransformada
			}
			else{
				document.getElementById('display').value = ""
			}
			adicionarOperandoNaMemoria(lista, operacaoMemoria, key)
			break
		//Semelhante a '+'
		case '*':
			if(igual == true){
				lista = (lista.reverse()).slice(-1)
			}
			if (operacaoMemoria != null) {
				let listaTransformada = operacao(lista)
				document.getElementById('display').value = listaTransformada
			}
			else{
				document.getElementById('display').value = ""
			}
			adicionarOperandoNaMemoria(lista, operacaoMemoria, key)
			break
		//Semelhante a '+'
		case '/':
			if(igual == true){
					lista = (lista.reverse()).slice(-1)
				}
			
			if (operacaoMemoria != null) {
				let listaTransformada = operacao(lista)
				document.getElementById('display').value = listaTransformada
			}
			else{
				document.getElementById('display').value = ""
			}
			adicionarOperandoNaMemoria(lista, operacaoMemoria, key)
			break
		//O '%' irá pegar o valor atual do display, dividir por 100 e atualizar o valor do display por esse novo. Também irá retirar o último índice da lista, que era o número antes da operação, e substitui-lo pelo valor do display
		case '%':
			if(igual == true){//Semelhante ao que ocorre em '+'
				lista = (lista.reverse()).slice(-1)
			}
			document.getElementById('display').value = document.getElementById('display').value /100
			lista.pop()
			lista.push(document.getElementById('display').value)
			break
		/*O '=' irá realizar as operações que estão na lista e então exibir no display. Ele irá modificar a lista de operações, que agora pássara a receber o resultado atual + última operação a ser feita na lista + último número da operação anterior.
		Isso é últil para caso o usuário deseje continuar realizando uma operação de forma recursiva, bastando para isso pressionar o '=' quantas vezes desejar realizar a operação.*/
		case '=':
			if (document.getElementById('display').value == "") {//Caso não haja nada no display, o display passa a ser zero
				document.getElementById('display').value = 0
			}
			else{//Do contrário será realizada a operação na lista e após isso a lista passa a receber apenas os dois últimos elementos, isso é, um operando + um número. Posteriormente, o resultado das operações é incluido na primeira nova posição da lista, ficando resultado + operação + número. Enquanto o igual for pressionado essa operação se repete
				let listaTransformada = operacao(lista)
				lista = lista.slice(-2)
				lista.unshift(listaTransformada.toString())
				document.getElementById('display').value = listaTransformada//Display recebe o resultado
				operacaoMemoria = null
				igual = true//Igual agora passa a ser true, sinalizando que ele foi a última entrada na calculadora
			}
			break
		/*O '.' irá acrescentar o decimal no número atual. Caso não haja nada no display, o display passa a receber "0." assim como a lista. O mesmo acontece caso o igual seja igual a true, começando assim uma nova entrada esvaziando a lista e adicionando "0.". 
		Caso o valor do display já contenha '.', nada é feito e o valor permanece o mesmo. Caso contrário, o valor do display recebe um ponto e o último valor da lista também recebe um ponto*/
		case '.':
			if (document.getElementById('display').value == ""){
				document.getElementById('display').value = '0.'
				lista.push('0.')
			}
			else if(igual == true){
				igual = false
				document.getElementById('display').value = '0.'
				lista = []
				lista.push('0.')
			}
			else if((document.getElementById('display').value).includes('.')){
				document.getElementById('display').value = document.getElementById('display').value
			}
			else{
				document.getElementById('display').value += key//Display recebe ponto
				let tamanho = lista.length
				let ultimo = lista[tamanho-1]
				let novoUltimo = ultimo
				novoUltimo += key
				lista.splice(tamanho-1, 1, novoUltimo)//O último elemento da lista passa a receber o último valor + '.'
			}
			break
		/*Aqui serve para qualquer número digitado. Caso o igual seja true ou o display esteja com valor 0, o display passa a receber o número de entrada e a lista é esvaziada e é acrescentado apenas o valor de entrada. Isso serve para
		começar uma nova entrada após se calcular uma operação ou caso seja o primeiro número digitado. Caso o último elemento da lista seja uma operação ou a lista tenha um tamanho 0, o display passa a receber o valor da entrada e essa entrada é incluída na lista.
		Caso contrário, o valor da entrada é concatenado ao display e o último valor da lista recebe o último valor concatenado com a entrada.*/
		default:
			let tamanho = lista.length
			let ultimo = lista[tamanho-1]
			if (document.getElementById('display').value === '0' || igual == true) {
				document.getElementById('display').value = key
				lista = []
				lista.push(key)
				igual = false
			}
			else if(ultimo == operacaoMemoria || tamanho == 0){
				document.getElementById('display').value = ''
				document.getElementById('display').value += key
				lista.push(key)
			}
			else{
				document.getElementById('display').value += key
				let novoUltimo = ultimo
				novoUltimo += key
				lista.splice(tamanho-1, 1, novoUltimo)//A última posição recebe o último valor concatenado com a entrada
			}
			break
	}
}

/*Função que ira adicionar o operando na memória e atribui-lo ao operacaoMemoria. Há essa necessidade pois antes de adicionar um operando
na memória, primeiro devemos saber se já não há outro na última posição e se a lista não está vazia. Além disso, a função também serve
para setar igual para false*/
function adicionarOperandoNaMemoria(lista, operacaoMem, operando){
	this.igual = false
	let tamanho = lista.length
	let ultimo = lista[tamanho-1]
	if(ultimo != operacaoMem && tamanho != 0){
		lista.push(operando)
		this.operacaoMemoria = operando
	}
}

/*Função usada para calcular o resulta de uma lista com números e operações. Aqui foi necessário a criação e uso dessa função pois
a função nativa eval() segue a ordem de operadores matemáticos contido na string. Como na calculadora deseja-se segui a ordem
cronológica da lista, essa função realiza a operação entre os três primeiros elementos da lista, um número, um operando e o outro
número envolvido na operação. Posteriormente, o primeiro número da lista passará a ser o resultado da operação anterior*/
function operacao(lista){
	let resultado
	let listaDeOperacao = lista.slice()//Afim de não alterar a lista original passada como paramêtro, uma cópia auxiliar dela é feita
	for(var i = 0; i<((listaDeOperacao.length)-1); i+2){
		let num1 = parseFloat(listaDeOperacao[0])
		let operando = listaDeOperacao[1]
		let num2
		if(listaDeOperacao[2] != undefined && listaDeOperacao[2] != null){
		 num2 = parseFloat(listaDeOperacao[2])
		}
		else{
			num2 = 0
		}
		switch(operando){
			case '+':
				resultado = num1+num2
				break
			case '-':
				resultado = num1-num2
				break
			case '*':
				resultado = num1*num2
				break
			case '/':
				resultado = num1/num2
				break
		}
		resultado = resultado.toString()
		listaDeOperacao.splice(0, 3, resultado)
	}
	return resultado
}
