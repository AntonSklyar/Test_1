// let div = document.querySelectorAll('.one');
// console.log(div);
// //div.style.background = 'red';
//
// for (let i = 0; i < div.length; i = i + 1) {
//     console.log((div[i]));
//     div[i].style.background = 'red';
//     div[i].onclick = two;
// }
// console.log('FINISH')
//
// function two(){
//     console.log('work!')
// }
//
// let b = document.getElementsByClassName('one');
// let c = document.getElementsByTagName('div');
// console.log(b);
// console.log(c);
//
// for (let i = 0; i < b.length; i++) {
//     b[i].style.border = '1px solid blue';
// }


// let inputIn = document.querySelector('.input-in');
// let button = document.querySelector('button');
//
// button.onclick = function (){
//     console.log(inputIn.value);
//     inputIn.value = '';
// }

document.querySelector('button').onclick = () => {
    let r = document.querySelectorAll('input[type="radio"]');
    console.log(r);
    for (let i = 0; i < r.length; i++) {
        if (r[i].checked) {
            console.log(r[i].value);
        }
    }
}