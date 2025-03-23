const btnmenu = document.getElementById('btnmenu');
const menu = document.getElementById('menu');

btnmenu.addEventListener('click', function() {
    if (menu.classList.contains('option')) {
        menu.classList.remove('option');
        btnmenu.textContent = "ocultar menu";
    } else {
        menu.classList.add('option');
        btnmenu.textContent = "mostrar menu";
    }
});
