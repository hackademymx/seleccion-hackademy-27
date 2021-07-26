// hackacademy 
const df = require("./data.json");
const arregloFechaDeVida= df.data.map( x => x.birthYear);
const arregloFechaDeMuerte = df.data.map( x => x.deathYear);
const tamaño = arregloFechaDeMuerte.length;

const picomasalto = (fvida, fmuerte, n) =>
{
    // Ordeanado los arreglos
    fvida.sort((a, b) =>  a - b);
    fmuerte.sort((a, b) => a - b);
    // cconcurrecias indica la cantidad de cconcurrecias por año
    let cconcurrecias = 1, maxcconcurrencias = 1, año = fvida[0];
    // indices para los arreglos Fechadevida y FechadeMuerte
    let i = 1, j = 0;
    //ciclo para procesar todos los datos ya ordenados
    while (i < n && j < n){
      if (fvida[i] <= fmuerte[j]){
          cconcurrecias++;
          // actualizando maxcconcurrencias si las cconcurrecias actules es mayor que max cconcurrecias 
          if (cconcurrecias > maxcconcurrencias){
              maxcconcurrencias = cconcurrecias;
              // asiganado el año en el inidice del arregloFechaDeVida donde se cumple la condicion anterior
              año = fvida[i];
          }
          //incremento del indice del arregloFechaDeVida
          i++; 
      }
        // caso contrario cconcurrecias - 1 cuando el arregloFechaDeVida[i] >= arregloFechaDeMuerte[i]
      else{ 
          cconcurrecias--;
          j++;
      }
    }
    console.log("No. de ocurrencias = " + maxcconcurrencias + " Año:  " + año);
}
picomasalto(arregloFechaDeVida, arregloFechaDeMuerte, tamaño)
 
 
