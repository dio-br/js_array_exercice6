let monTab = ['pomme', 'fraise', 'melon', 'citron']

let firstElement = monTab.shift();
console.log(monTab);

let lasElement = monTab.pop()
console.log(monTab);

let ajoutFin = monTab.push(`orange`)
console.log(monTab);

let ajoutDebut = monTab.unshift(`kiwi`)
console.log(monTab);

let majuscule = monTab[1].toUpperCase()
console.log(majuscule);

let ordre = monTab.reverse();
console.log(monTab);

// 2 

let chiffres = [4, 5, 2, 1, 3]

let ordonner = chiffres.sort();
console.log(chiffres);

let chaine = chiffres.toString();
console.log(chaine);

console.log(chiffres.sort());

// 3

let valentin = []

let koko = valentin.push('1','2','3','4','5','6','7','8','10','11')
console.log(valentin);

console.log(valentin.length, valentin);

let index = valentin.indexOf(0,8)
console.log(valentin);