const elBoss = {
    nombre: "Jose Luis",
    edad: 194,
    poderes: [
      {
        nombre: "Paranoia",
        description: "intentandome escapar de esta paranoia",
        imagenes: [
          {
            imagen1: {
              url: "has conseguido acceder a la primera imagen de la paranoia",
            },
          },
          {
            imagen2: {
              url: "has conseguido acceder a la segunda imagen de la paranoia",
            },
          },
        ],
      },
      {
        nombre: "Petrificasió",
        description: "Te mira y te petrifica",
        imagenes: [
          {
            imagen1: {
              url: "has conseguido acceder a la primera imagen de la petrificasió",
            },
          },
          {
            imagen2: {
              url: "has conseguido acceder a la segunda imagen de la petrificasió",
            },
          },
        ],
      },
      {
        nombre: "Fuego",
        description: "Pues eso, fuego",
        imagenes: [
          {
            imagen1: {
              url: "has conseguido acceder a la primera imagen del fueguito",
            },
          },
          {
            imagen2: {
              url: "has conseguido acceder a la segunda imagen del fueguito",
            },
          },
        ],
      },
    ],
    familiares: [
      {
        nombre: "Julian",
        edad: 342,
        parentesco: "Primo",
      },
      {
        nombre: "Paquito",
        edad: 312,
        parentesco: "Tío",
      },
      {
        nombre: "Emma",
        edad: 13,
        parentesco: "Sobrina",
      },
      {
        nombre: "Julia",
        edad: 100,
        parentesco: "Hermana",
      },
    ],
    reto: [
      [
        {
          sigueElReto: [
            {
              sigueElReto2: {
                sigueElReto3: {
                  pareceQueSabesBucearEntreObjetos: {
                    definitivamenteSabes: [
                      "Jose",
                      "Luis,",
                      "te",
                      "miro",
                      "y",
                      23121,
                      "te",
                      "destruyo",
                      {
                        mensajeFinal:
                          "Enhorabuena!, si has llegado hasta aquí te costará mucho menos tratar los datos de la pokeapi en el proyecto final de JavaScript!",
                      },
                    ],
                  },
                },
              },
            },
          ],
        },
      ],
    ],
  };
  let jefe = [];
  
  
  
  
  
  
  
  
  
  // EJERCICIO
  
  // tenemos un objeto llamado elBoss, como hemos visto en clase con ejemplos muy sencillitos
  // podemos recorrer arrays... bucear entre objetos... y tratar datos.
  // Lo que tendrás que hacer a continuación solo es complicar un poco más lo que hemos visto antes,
  // pero por mucho que te pueda asustar elBoss, es lo mismo!
  
  // Requisitos para matar a elBoss
  
  // vamos a imaginarnos que vamos a hablar con el mediante console.logs, cada vez que pongamos
  // un console.log será como hablar con el.
  
  // entonces: // le vamos a decir = console.log()
  // 1: le vamos a decir "{su nombre}, te conozco y no me das ningún miedo!";
  
  console.log(`${elBoss.nombre}, te conozco y no me das ningún miedo!`);
  
  // 2: le vamos a decir "conozco tus poderes y lo que hacen!"
  
  console.log(`conozco tus poderes y lo que hacen!`);
  
  // 3: le vamos a decir "tu primer poder es {su primer poder} y hace {la descripción de su poder}"
  
  console.log("tu primer poder es " + elBoss.poderes[0].nombre + "y hace" + elBoss.poderes[0].description)

  //"tu segundo poder es {su segundo poder} y hace {la descripción de su poder}"
  //"tu tercero poder es {su tercero poder} y hace {la descripción de su poder}"
  
  for (let step = 0; step < elBoss.poderes.length; step++) {
    console.log(
      `tu poder es ${elBoss.poderes[step].nombre} y hace ${elBoss.poderes[step].description}`
    );
  }
  
  // 4: le vamos a decir "También se tu punto más debil, tus familiares, y les conozco..."
  
  console.log("También se tu punto más debil, tus familiares, y les conozco...");
  
  // "conozco a tu {parentesco del primer familiar} {nombre del primer familiar}"
  // "conozco a tu {parentesco del segundo familiar} {nombre del segundo familiar}"
  // "conozco a tu {parentesco del tercero familiar} {nombre del tercero familiar}"
  // "y conozco a tu {parentesco del cuarto familiar} {nombre del cuarto familiar}"
  
  for (let step = 0; step < elBoss.familiares.length; step++) {
    console.log(
      `conozco a tu ${elBoss.familiares[step].parentesco} ${elBoss.familiares[step].nombre}`
    );
  }
  
  // 5: para matarlo tendrás que superar el reto y para ello tendrás que decirle las palabras
  // mágicas para que el mensaje quede tal que así "Jose luis, te miro y te destruyo".
  
  for (let step = 0; step < elBoss.reto.length; step++) {
  
    // console.log(elBoss.reto[step]);
  
    for (let stap = 0; stap < elBoss.reto[step].length; stap++) {
      
      // console.log(
      //   elBoss.reto[step][stap].sigueElReto[0].sigueElReto2.sigueElReto3
      //     .pareceQueSabesBucearEntreObjetos.definitivamenteSabes
      // );
  
      for (
        let stop = 0;
        stop <
        elBoss.reto[step][stap].sigueElReto[0].sigueElReto2.sigueElReto3
          .pareceQueSabesBucearEntreObjetos.definitivamenteSabes.length;
        stop++
      ) {
        if (
          typeof elBoss.reto[step][stap].sigueElReto[0].sigueElReto2.sigueElReto3
            .pareceQueSabesBucearEntreObjetos.definitivamenteSabes[stop] ===
          "string"
        ) {
          jefe.push(
            elBoss.reto[step][stap].sigueElReto[0].sigueElReto2.sigueElReto3
              .pareceQueSabesBucearEntreObjetos.definitivamenteSabes[stop]
          );
        }
      }
    }
  }
  
  // Por último, como bonus, mostraremos por pantalla las urls de todas las imágenes de los poderes.
  
  // haremos la media de las edades de los familiares de elBoss.
  
  // y mostraremos por pantalla el mensajeFinal.
  
  console.log(jefe);
  
  
  
  // // EJERCICIO
  
  // console.log(`${elBoss.nombre}, te conozco y no me das ningún miedo!`)
  
  // console.log(`${elBoss.nombre}, conozco tus poderes y lo que hacen!`)
  
  // elBoss.poderes.forEach((poder,index) => {
  //   index === 0 ? console.log(`tu primer poder es ${poder.nombre} y hace ${poder.description}`):
  //   index === 1 ? console.log(`tu segundo poder es ${poder.nombre} y hace ${poder.description}`):
  //   index === 2 ? console.log(`tu tercer poder es ${poder.nombre} y hace ${poder.description}`):
  //   console.log(`tu siguiente poder es ${poder.nombre} y hace ${poder.description}`)
  // })
  
  
  // for (const familiar of elBoss.familiares) {
  //   console.log(`conozco a tu ${familiar.parentesco} ${familiar.nombre}`);
  // }
  
  
  // let bossMessage = elBoss.reto[0][0].sigueElReto[0].sigueElReto2.sigueElReto3.pareceQueSabesBucearEntreObjetos.definitivamenteSabes
  // let finalMessage = [];
  // for (const element of bossMessage) {
  //   typeof element === 'string' && finalMessage.push(element);
  // }
  // console.log(finalMessage.join(' '));
  
  
  
  // for (const poder of elBoss.poderes) {
  //   for (const imagen of poder.imagenes) {
  //     imagen.imagen1 && console.log(imagen.imagen1.url);
  //     imagen.imagen2 && console.log(imagen.imagen2.url);
  //   }
  // }
  
  
  // console.log("la media de los familiares es", elBoss.familiares.reduce((acc, familiar) => acc + familiar.edad, 0) / elBoss.familiares.length )
  
  
  
  // for (const element of bossMessage) {
  //   typeof element === 'object' && console.log(element.mensajeFinal);
  // }
  