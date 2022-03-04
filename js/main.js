const gridElement = document.getElementById("griglia");        //parent

const creaGriglia = () => {
    const elemento = document.createElement("div");
    elemento.className ="numero";
    elemento.innerHTML = 1;                                                        // mi sono creato un div nella griglia,  a questo div li vado a d assegnare la classe custom
    elemento.classList.add("box1")                             // chiamata box-1 e con il return me la vado a restituire 
    return elemento;                                              
}



for ( let i = 0; i < 100; i++){
    const quadrato = creaGriglia ();

    quadrato. addEventListener ("click", function(){
        this.classList.toggle("active")

    })
    gridElement.appendChild(quadrato);
}