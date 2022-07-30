const pesoControllers = {};

pesoControllers.create = (req,res) => {
let response={}
let peso_actual_total=[];
let objetivo=[];
let perdieron_peso= 0
let contadorperdio = 0

   
let array_personas= req.body.personas
 
for (let index = 0; index < array_personas.length; index++) {
    const persona = array_personas[index];
    //calcular nota definitiva
    if (persona.peso_inicial < persona.peso_final){
        let peso_actual={}
    peso_actual['nombre'] = persona.nombre;
    peso_actual['peso_subido']=persona.peso_final-persona.peso_inicial;
    peso_actual['estado']="gano"; 
    peso_actual_total.push(peso_actual)
    }
    if (persona.peso_inicial > persona.peso_final){
        let peso_actual={}
    peso_actual['nombre'] = persona.nombre;
    peso_actual['peso_perdido']=persona.peso_inicial-persona.peso_final;
    peso_actual['estado']="perdio"; 
    peso_actual_total.push(peso_actual)
    }

    if (persona.peso_inicial > persona.peso_intermedio ){
        contadorperdio++;
    }

    if (persona.peso_inicial > persona.peso_final && persona.objetivo=="bajar"){
        let objetivo_cumplido={}
        objetivo_cumplido['nombre'] = persona.nombre;
        objetivo_cumplido['peso_perdido']=persona.peso_inicial-persona.peso_final;
        objetivo_cumplido['Objetivo']="Cumplio"; 
        objetivo.push(objetivo_cumplido)
    }
}
response['peso_actual_total']=peso_actual_total
response['Perdieron peso']=contadorperdio
response['objetivo']=objetivo

    res.json(response);
}

module.exports = pesoControllers;