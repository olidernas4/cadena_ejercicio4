let nombre = "andres" 
let apellido = "narvaez"
let estudiante = `hola ${nombre} ${apellido}bienvenido`
console.log(estudiante)


let estudianteMayus = estudiante
console.log(estudianteMayus.toLocaleLowerCase())
console.log(input.toUpperCase())

console.log(estudianteMayus.trimStart().length)
console.log(estudiante.trim().length)

console.log(estudiante.trimEnd().length)


// empieza con una palabra
console.log(nombre.startsWith("a"))

// texto final
console.log(apellido.endsWith("z"))


let texto_largo = "los animeles anda de a cinco los humanos igual"
//AL utilizar la expresión regular /g (global), reemp laza todas Las instancias
console.Log(texto_largo.replace(/los/g,'cinco'))


let trimEstudiante = estudiante.split(" ").join("");
let boolEstudiante = estudiante.includes(nombre);
console.log(boolEstudiante)