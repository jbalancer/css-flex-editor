function id(a){
	return document.getElementById(a);
}

function cElem(a){
	return document.getElementsByClassName(a);
}

function checkBox(data){
	var check = document.getElementsByClassName(data.check),
		inputFlexVal = document.querySelectorAll('.' + data.input + ' .to_flex'),
		preCon = document.getElementById('preview_css_container').querySelector('div.scroll'),
		preIt = document.getElementById('preview_css_items').querySelector('div.scroll'),
		demoFlex = document.getElementById('flex_demo');

	for (var i = 0; i < check.length; i++) {

		var box = document.createElement('span');
		box.classList.add('checkbox_item_nochecked');
		check[i].appendChild(box);

		function checkFunction(){
			var checkVal = this.querySelector('span'),
				checkValAll = this.parentNode.querySelectorAll('span');

			if (checkVal.classList.value === 'checkbox_item_nochecked') {

				for (var x = 0; x < checkValAll.length; x++) {
					checkValAll[x].classList.remove('checkbox_item_checked');
					checkValAll[x].classList.add('checkbox_item_nochecked');					
				}				

				checkVal.classList.remove('checkbox_item_nochecked');
				checkVal.classList.add('checkbox_item_checked');

				checkVal.setAttribute('data-check','checked');
				data.css[this.parentNode.querySelector('h1').textContent] = this.querySelector('p').textContent;

				this.parentNode.getElementsByClassName('items')[0].style.backgroundColor = '#4B57C7';				

			}else{

				checkVal.classList.remove('checkbox_item_checked');
				checkVal.classList.add('checkbox_item_nochecked');

				checkVal.setAttribute('data-check','nochecked');
				delete data.css[this.parentNode.querySelector('h1').textContent];

				this.parentNode.getElementsByClassName('items')[0].style.backgroundColor = '#CC4656';				

			}
			preIt.innerHTML = null;
			preCon.innerHTML = null;

			for(var key in flexbox){
				if (key == 'display' || key == 'flex-direction' || key == 'justify-content' || key == 'align-content' || key == 'align-items' || key == 'flex-wrap') {
					preCon.innerHTML += key + ': ' + flexbox[key] + ';' + "\n";

						if (key == 'display') {
							id('flex_demo').style.display = flexbox[key];
						}

						if (key == 'flex-direction') {
							id('flex_demo').style.flexDirection = flexbox[key];
						}

						if (key == 'justify-content') {
							id('flex_demo').style.justifyContent = flexbox[key];
						}

						if (key == 'align-content') {
							id('flex_demo').style.webkitAlignContent = flexbox[key];
							id('flex_demo').style.alignContent = flexbox[key];
						}

						if (key == 'align-items') {
							id('flex_demo').style.alignItems = flexbox[key];
						}

						if (key == 'flex-wrap') {
							id('flex_demo').style.flexWrap = flexbox[key];
						}

				}else{
						if (key == 'flex-basis') {
							preIt.innerHTML += key + ': ' + flexbox[key] + 'px;' + "\n";
						}else{
							preIt.innerHTML += key + ': ' + flexbox[key] + ';' + "\n";
						}

						for (var k = 0; k < cElem('flex_elem_demo').length; k++) {

							if (key == 'flex-basis') {
								cElem('flex_elem_demo')[k].style.flexBasis = flexbox[key] + 'px';
							}

							if (key == 'flex-grow') {
								cElem('flex_elem_demo')[k].style.flexGrow = flexbox[key];
							}

							if (key == 'flex-shrink') {
								cElem('flex_elem_demo')[k].style.flexShrink = flexbox[key];
							}

							if (key == 'align-self') {
								cElem('flex_elem_demo')[k].style.alignSelf = flexbox[key];
							}

							if (key == 'order') {
								cElem('flex_elem_demo')[k].style.order = flexbox[key];
							}

						}												
					}
			}

		}

		for (var a = 0; a < inputFlexVal.length; a++) {
			inputFlexVal[a].addEventListener('keyup', function(){

				if (!this.value) {

					delete data.css[this.parentNode.parentNode.parentNode.querySelector('h1').textContent];
					this.parentNode.parentNode.parentNode.getElementsByClassName('items')[0].style.backgroundColor = '#CC4656';

				}else{

					data.css[this.parentNode.parentNode.parentNode.querySelector('h1').textContent] = this.value;
					this.parentNode.parentNode.parentNode.getElementsByClassName('items')[0].style.backgroundColor = '#4B57C7';

				}

				preIt.innerHTML = null;
				preCon.innerHTML = null;

				for(var key in flexbox){
					if (key == 'display' || key == 'flex-direction' || key == 'justify-content' || key == 'align-content' || key == 'align-items' || key == 'flex-wrap') {

						preCon.innerHTML += key + ': ' + flexbox[key] + ';' + "\n";

						if (key == 'display') {
							id('flex_demo').style.display = flexbox[key];
						}

						if (key == 'flex-direction') {
							id('flex_demo').style.flexDirection = flexbox[key];
						}

						if (key == 'justify-content') {
							id('flex_demo').style.justifyContent = flexbox[key];
						}

						if (key == 'align-content') {
							id('flex_demo').style.webkitAlignContent = flexbox[key];
							id('flex_demo').style.alignContent = flexbox[key];
						}

						if (key == 'align-items') {
							id('flex_demo').style.alignItems = flexbox[key];
						}

						if (key == 'flex-wrap') {
							id('flex_demo').style.flexWrap = flexbox[key];
						}

					}else{

						if (key == 'flex-basis') {
							preIt.innerHTML += key + ': ' + flexbox[key] + 'px;' + "\n";
						}else{
							preIt.innerHTML += key + ': ' + flexbox[key] + ';' + "\n";
						}				

						for (var k = 0; k < cElem('flex_elem_demo').length; k++) {

							if (key == 'flex-basis') {
								cElem('flex_elem_demo')[k].style.flexBasis = flexbox[key] + 'px';
							}

							if (key == 'flex-grow') {
								cElem('flex_elem_demo')[k].style.flexGrow = flexbox[key];
							}

							if (key == 'flex-shrink') {
								cElem('flex_elem_demo')[k].style.flexShrink = flexbox[key];
							}

							if (key == 'align-self') {
								cElem('flex_elem_demo')[k].style.alignSelf = flexbox[key];
							}

							if (key == 'order') {
								cElem('flex_elem_demo')[k].style.order = flexbox[key];
							}

						}												
					}
				}

			});
		}		

		if (!data.bind || data.bind == undefined || data.bind == ' ' || data.bind == false || data.bind == null) {
			check[i].addEventListener(data.listener, checkFunction);				
		}else{
			var checker = document.getElementsByClassName(data.bind);
			checker[i].addEventListener(data.listener, checkFunction);			
		}
	}
}

var flexbox = {},
	element = {};

checkBox({
	check: 'checkbox', //---Класс элемента - который должен стать Чекбоксом
	listener: 'click', //---Событие для выбора
	bind: 'ch_i',	   //---Если есть, То при клике на какой Родительский-Класс должно произойти выбор
	css: flexbox,	   //---Объект с правилами CSS FLEXBOX
	input: 'items'     //---Класс-Родителя с полем для значений, т.е. с Input или Textarea
});

function wh(a){
	return +((window.innerHeight * a) / 100);
}

id('flex_elements').style.height = wh(100) + 'px';
id('body').style.height = wh(100) + 'px';
id('preview_content').style.height = wh(70) + 'px';
id('preview_css_container').style.height = wh(30) + 'px';
id('preview_css_items').style.height = wh(30) + 'px';

window.addEventListener('resize', function(){
	id('flex_elements').style.height = wh(100) + 'px';
	id('body').style.height = wh(100) + 'px';
	id('preview_content').style.height = wh(70) + 'px';
	id('preview_css_container').style.height = wh(30) + 'px';
	id('preview_css_items').style.height = wh(30) + 'px';
});

function createDemos(){
	this.querySelector('div').id = 'load';
	cElem('posa')[0].style.display = 'block';

	document.querySelector('#preview_content > div').style.backgroundColor = '#fff';
	document.querySelector('#ph').style.display = 'none';

	setTimeout(function(){
		cElem('loadergenb')[0].querySelector('div').removeAttribute('id');
		cElem('posa')[0].style.display = 'none';
	},1800);

	function fed(a,q){
		return cElem('others')[a].querySelector(q);
	}

	id('flex_demo').innerHTML = null;

	var quantity;

	if (!fed(5,'input').value || typeof parseInt(fed(5,'input').value) != 'number') {
		quantity = 10;
	}else{
		quantity = fed(5,'input').value;
	}

	for (var i = 0; i < quantity; i++) {

		var demoElem = document.createElement('div');

		demoElem.classList.add('flex_elem_demo');
		demoElem.textContent = fed(4,'input').value;

		if (!fed(0,'input').value) {
			demoElem.style.minWidth = 100 + 'px';
			element['min-width'] = 100 + 'px';
		}else{
			demoElem.style.minWidth = fed(0,'input').value;
			element['min-width'] = fed(0,'input').value;
		}

		if (!fed(1,'input').value) {
			demoElem.style.minHeight = 100 + 'px';
			element['min-height'] = 100 + 'px';
		}else{
			demoElem.style.minHeight = fed(1,'input').value;
			element['min-height'] = fed(1,'input').value;
		}

		if (!fed(2,'input').value) {
			demoElem.style.margin = 5 + 'px';
			element['margin'] = 5 + 'px';
		}else{
			demoElem.style.margin = fed(2,'input').value;
			element['margin'] = fed(2,'input').value;
		}

		if (!fed(3,'input').value) {
			demoElem.style.padding = 30 + 'px' + 0 + ' ' + 0 + ' ' + 0;
			element['padding'] = 30 + 'px' + 0 + ' ' + 0 + ' ' + 0;
		}else{
			demoElem.style.padding = fed(3,'input').value;
			element['padding'] = fed(3,'input').value;
		}

		id('flex_demo').appendChild(demoElem);
	}

	if (!fed(4,'input').value || fed(4,'input').value == 'nums') {
		for (var i = 0; i < cElem('flex_elem_demo').length; i++) {
			cElem('flex_elem_demo')[i].innerText = i + 1;
		}	
	}

}

id('genb').addEventListener('click', createDemos);