
import Cl_fijo from "./Cl_fijo.js";

let profesorFijo = new Cl_fijo("CARLOS", 25, 100);
let profesorFilo2 = new Cl_fijo("CAROLINA", 40, 90);

let salida = document.getElementById("salida");

salida.innerHTML = `El nombre del profesor es ${profesorFijo.nombre}<br>
El bono del profesor es ${profesorFijo.bono}<br>
El sueldo del profesor es ${profesorFijo.suelda}<br>
El ingreso total del profesor es ${profesorFijo.ingresoTotal()}<br>
El nombre del profesor es ${profesorFilo2.nombre}<br>
El bono del profesor es ${profesorFilo2.bono}<br>
El sueldo del profesor es ${profesorFilo2.suelda}<br>
El ingreso total del profesor es ${profesorFilo2.ingresoTotal()}`