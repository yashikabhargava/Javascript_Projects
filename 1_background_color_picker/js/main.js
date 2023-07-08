const colors = document.querySelectorAll('button');
// console.log(colors[0].id)

const changeColor = e => {
    let colorId = e.target.id;
    // console.log(colorId);

    let color;
    if (colorId === 'purple') {
        color = 'rgb(158, 77, 234)';

    } else if(colorId === 'green') {
        color = 'rgb(151, 210, 151)';

    } else if(colorId === 'blue') {
        color = 'rgb(122, 122, 255)';

    } else if(colorId === 'yellow'){
        color = 'rgb(167, 153, 0)';

    } else if(colorId === 'orange'){
        color = 'rgb(255, 176, 31)';

    } else if(colorId === 'red'){
        color = 'rgb(255, 108, 108)';
    }

    document.querySelector('body').style.backgroundColor = color;
    document.querySelector('h1').style.color = 'white';
    document.querySelector('ul').style.backgroundColor = 'white';
}

colors.forEach((element) => element.addEventListener('click', changeColor))
;
