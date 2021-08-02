import './style.css';
function component(){
    const element=document.createElement('div');
    element.innerHTML='hello';
    element.classList.add('hello');
    console.log("hello 123")
    return element;
}
document.body.appendChild(component())