var menuItem = document.querySelectorAll('.item-menu')

function seletor(){
    menuItem.forEach((item)=>  
    item.classList.remove('atv')
    )
    this.classList.add('atv')
}

menuItem.forEach((item)=> 
    item.addEventListener('click', seletor)
)

var btnExp = document.querySelector('#btn.expnd')
var menulat = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function(){

    menulat.classList.toggle('expandir')
})

document.getElementById('meusEditaisBtn').addEventListener('click', function() {
    window.alert('Você clicou em "Meus Editais"');
});


document.getElementById('source-date').textContent = new Date().toLocaleDateString('pt-BR');

document.querySelectorAll('.approve').forEach(button => {
    button.addEventListener('click', () => {
        alert('Proposta aprovada!');
    });
});

document.querySelectorAll('.reject').forEach(button => {
    button.addEventListener('click', () => {
        alert('Proposta reprovada!');
    });
});

document.getElementById('order-btn').addEventListener('click', () => {
    alert('Ordenar por qualidade: mais alta');
});
