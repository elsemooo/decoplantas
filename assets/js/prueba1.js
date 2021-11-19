array_elements = [
    'Cacti%20Plant',
    'Cacti%20Plant',
    'Cactus',
    'Cactus',
    'Cactus',
    'Cactus'
];
function textFinal(arr) {
    let nDeProductos = []
    let textoFinal = ['hola%20vengo%20de%20la%20tienda%20online%20me%20gustaria%20pedir%20esto%20',];
    let current = null;
    let cnt = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != current) {
            if (cnt > 0) {
                textoFinal.push(`%20${cnt}%20${current},`);
            }
            nDeProductos.push([current, cnt])
            current = array_elements[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    if (cnt > 0) {
        textoFinal.push(`%20${cnt}%20${current},`);
        nDeProductos.push([current, cnt])

    }
    nDeProductos.shift()
    textoFinal.push('%20muchas%20gracias%20por%20atenderme%20')
    // console.log(textoFinal.join(''))
    let linkFinal = `https://api.whatsapp.com/send/?phone=51981203309&text=${textoFinal.join('')}&app_absent=0`
    console.log(linkFinal)
    return linkFinal;
}
textFinal(array_elements)