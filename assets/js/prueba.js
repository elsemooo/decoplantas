const textXD = `

                
    
        
Cactus
    
    
    
        
Cacti Plant




Aloe Vera




Suculenta




planta verde


`

const linkWhatsApp = (array) => {
    if(array == null){
        return alert('debe de añadir algo al carrito')
    }else{
        let element = [];
        const regex = /\w*\S\s[a-z]*|\w.*/ig;
        for (let i = 0; i < array.length; i++){
            element.push( array[i] )
        }
        const str = element.join( '' )
        const arr = str.match( regex )
        console.log(arr)
        return quitSaltoDeLinea(arr);
    }
}
const quitSaltoDeLinea = (array2) =>{
    let arr = [];
    for (let i = 0; i < array2.length; i++) {
        let productArr = array2[i].split('');
        if(productArr[productArr.length - 1] == '\n'){
            productArr.splice(-1, 1)
        }
        arr.push(productArr.join(''))
    }
    let arrSinDuplicados = [...new Set(arr)]
    let arrOrdenado = arr.sort();
    let arrFinal = [];
    arrOrdenado.map(a => {
        let strSeparado = a.split(' ');
        arrFinal.push(strSeparado.join('%20'))})
    console.log(arrFinal)
    return textFinal(arrFinal.sort());
}
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
            current = arr[i];
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