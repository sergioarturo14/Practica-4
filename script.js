let menu, bebida;

menu = prompt("Tipo de menú: tacos, postre, carne ");

switch (menu) {
    case 'tacos':
        let tipoTacos = prompt("¿Desea tacos de pastor o bistec?");
        if (tipoTacos === 'pastor') {
            console.log("Aquí están sus tacos de pastor.");
        } else if (tipoTacos === 'bistec') {
            console.log("Aquí están sus tacos de bistec.");
        } else {
            console.log("Opción de tacos no válida.");
        }
        break;
  case 'postre':
    let tipoPostre = prompt("¿Desearia pastel de chocolate o gelatina?");
    if (tipoPostre === 'pastor') {
        console.log("Aquí están sus tacos de pastor.");
    } else if (tipoTacos === 'bistec') {
        console.log("Aquí están sus tacos de bistec.");
    } else {
        console.log("Opción de tacos no válida.");
    }
    break;
    case 'carne':
        bebida = "¿Desea tomar una bebida con su carne?";
        break;
    default:
        bebida = "Elija entre tacos, postre o carne.";
}

alert(bebida);
