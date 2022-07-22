// // retorne no console todas as imagens do site
// const $img = document.getElementsByTagName('img');
// console.log($img);


// // Retorne no console apenas as imagens que começaram com a palavra imagem
// const $img2 = document.querySelectorAll('img[src^="img/imagem"]');
// console.log($img2);


// // Selecione todos os links internos do site 
// const $linkInterno = document.querySelectorAll('a[href^="#"]');
// console.log($linkInterno);


// // Selecione o primeiro h2 dentro de .animais-descricao
// const $h2 = document.querySelector('.animais-descricao h2');
// console.log($h2);


// // Selecione o ultimo p do site
// const $lastP = document.querySelectorAll('p');
// console.log($lastP[--$lastP.length]);
// // Mostre no console cada paragrafo do site
// const $allP = document.querySelectorAll('p');
// console.log($allP);


// // Mostre os textos dos paragrafos no console
// $allP.forEach(p => console.log(p.textContent));


// // Adicione a classe ativo a todos os itens do menu
// const $menu = document.querySelectorAll('.menu a');
// $menu.forEach(item => item.classList.add('ativo'));
// console.log($menu);
// // Remover a classe ativo de todos os itens do menu e manter apenas no primeiro
// $menu.forEach(item => item.classList.remove('ativo'))
// $menu[0].classList.add('ativo');
// console.log($menu);



// // Verifique se as imagens possuem o atributo alt
// const $img = document.querySelectorAll('img');
// $img.forEach(item => {
//     const temAlt = item.hasAttribute('alt')
//     console.log(temAlt)
// });


// // Modifique o href do link externo no menu 
// const $linkExterno = document.querySelector('.menu a[href^="https"]');
// $linkExterno.setAttribute('target', '_black')
// $linkExterno.setAttribute('href', 'https://www.google.com')
// console.log($linkExterno);


// // Verifique a distância da primeira imagem em relação ao topo da página
// const $img = document.querySelector('img');
// const imgTop = $img.offsetTop;
// console.log(imgTop)


// // Retorne a soma da largura de todas as imagens
// function somaImagem() {
//     const $imgs = document.querySelectorAll('img');
//     let totalWidth = 0;
//     $imgs.forEach(img => {
//         totalWidth += img.offsetWidth;
//     });
//     console.log(totalWidth);
// }
// window.onload = function () {
//     somaImagem();
// }


// // Verifique se os links da página possuem o minimo recomendado para telas tulizadas com o dedo (48px/48px de acordo com o google)
// const $menuLinks = document.querySelectorAll('nav a');
// $menuLinks.forEach(item => {
//     const linkWidth = item.offsetWidth;
//     const linkHeight = item.offsetHeight;
//     if (linkWidth <= 48 && linkHeight <= 48) {
//         console.log(item, ' não adquado ao mobile')
//     } else {
//         console.log(item, ' adquado ao mobile')
//     }
// });


// // Se o browser for menor que 720px, adicione a classe menu-mobile ao menu
// if (window.innerWidth < 720) {
//     const $menuWidth = document.querySelector('.menu');
//     $menuWidth.classList.add('menu-mobile');
// }


// // Quando o usuário clicar nos links internos do site, adicione a classe ativo ao tiem clicado e remova dos demais itens caso eles possuam a mesma. Previna o comportamento padrão desses itens.
// const $linkInternos = document.querySelectorAll('a[href^="#"]');
// function addAtivo(event) {
//     event.preventDefault();
//     $linkInternos.forEach(link => link.classList.remove('ativo'));
//     event.currentTarget.classList.add('ativo');
// }
// $linkInternos.forEach(link => link.addEventListener('click', addAtivo));


// // Selecione todos os elementos do site a partir do body, ao clique mostre exatamente os elementos que estão sendo clicados.
// const $body = document.querySelectorAll('body *');
// function mostraElemento(event) {
//     console.log(event.currentTarget);
// }
// $body.forEach(elemento => elemento.addEventListener('click', mostraElemento));
// // Utilizando o código anterior, ao invéz de mostrar no console, remova o elemento que está sendo clicado, o método remove() remove um elemento.
// function removeElemento(event) {
//     event.currentTarget.remove();
// } 
// $body.forEach(elemento => elemento.addEventListener('click', removeElemento));


// // Se o usuário clicar na tecla 't' o texto do site é aumentado
// const $html = document.querySelector('html');
// function handleClickT(event) {
//     if ((event.key === 't') || (event.key === 'T')) {
//         $html.classList.add('texto-maior')
//     }
//     if ((event.key === 's') || (event.key === 'S')) {
//         $html.classList.remove('texto-maior')
//     }
// }
// window.addEventListener('keydown', handleClickT);


// // Duplique o menu e adicione ele ao copyright
// const $menu = document.querySelector('.menu');
// const $copy = document.querySelector('.copy')
// const cloneMenu = $menu.cloneNode(true);
// $copy.appendChild(cloneMenu)


// // Selecione o primeiro DT da dl de Faq
// const $faq = document.querySelector('.faq');
// const firstDt = $faq.querySelector('dt');
// // Selecione o DD referente ao primeiro DT
// const nextDd = firstDt.nextElementSibling;
// // Substitua o conteudo de faq pelo de .animais
// const $animais = document.querySelector('.animais');
// $faq.innerHTML = $animais.innerHTML

