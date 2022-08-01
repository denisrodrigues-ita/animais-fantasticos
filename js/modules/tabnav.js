export default function initTabNav() {
    document.documentElement.className += ' js';

    const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
    const tabContent = document.querySelectorAll('[data-tab="content"] section');
    tabContent[0].classList.add('ativo');

    if (tabMenu.length && tabContent.length) {
        function activeTab(index) {
            tabContent.forEach(item => item.classList.remove('ativo'));
            const direcao = tabContent[index].dataset.anime;
            tabContent[index].classList.add('ativo', direcao);
        }

        tabMenu.forEach((item, index) => {
            item.addEventListener('click', () => {
                activeTab(index);
            })
        });
    }
}