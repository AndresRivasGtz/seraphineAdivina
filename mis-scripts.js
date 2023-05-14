//Desplegar imagen subida por el usuario
function display(event)
	    {
	    	let input_image = document.getElementById("input_image");
		    input_image.src = URL.createObjectURL(event.target.files[0]);

		    console.log(input_image.src);
		    let d=document.querySelector(".path"); 
		    d.textContent+=input_image.src;
        }
//Mostrar a que animal(clase) pertenece la imagen subida
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function

async function predict_animal()
{
    let input = document.getElementById("input_image");
	// Apoyo: Repetir el preprocesamiento realizado en el cuaderno
	// https://js.tensorflow.org/api/latest/#image.resizeNearestNeighbor
    let imageproc = tf.browser.fromPixels(input).resizeNearestNeighbor([224,224]).expandDims(0).div(255.0)
	console.log("Finalización del preprocesamiento de la imagen")

    const model = await tf.loadLayersModel('./tensorflowjs-model/model.json');
    pred = model.predict(imageproc)
    pred.print()
    console.log("Finalización de predicción")

    //Declaración del arreglo con las clases de nuestro modelo
	animals = ["abeja", "camarones", "caracol", "catarina", "escarabajo", "hormiga", "libelula", "luciernaga", "mantis", "oruga"]
	//Determinar cúal elemento del arreglo tiene mayor valor para asignarle a esa clase la salida final
	pred.data()
	    .then((data) => {console.log(data)
	    	max_val = -1
	    	max_val_index = -1
			for(let i=0;i<data.length;i++)
			{
				if(data[i] > max_val)
				{
					max_val = data[i]
					max_val_index = i
				}
			}
			
			//barrita va a ser usada para cambiar el texto del valor del porcentaje y para poner verde el ganador
			var barrita;
			switch(max_val_index){
				case 0:
					barrita = document.getElementById("cardAbeja");
					barrita.style.background="linear-gradient(to left top, rgba(21, 221, 37, 0.5), rgba(12, 172, 38, 0.2))"
					break;
				
				case 1:
					barrita = document.getElementById("cardCamaron");
					barrita.style.background="linear-gradient(to left top, rgba(21, 221, 37, 0.5), rgba(12, 172, 38, 0.2))"
					break;
				
				case 2:
					barrita = document.getElementById("cardCaracol");
					barrita.style.background="linear-gradient(to left top, rgba(21, 221, 37, 0.5), rgba(12, 172, 38, 0.2))"
					break;
				
				case 3:
					barrita = document.getElementById("cardCatarina");
					barrita.style.background="linear-gradient(to left top, rgba(21, 221, 37, 0.5), rgba(12, 172, 38, 0.2))"
					break;

				case 4:
					barrita = document.getElementById("cardEscarabajo");
					barrita.style.background="linear-gradient(to left top, rgba(21, 221, 37, 0.5), rgba(12, 172, 38, 0.2))"
					break;

				case 5:
					barrita = document.getElementById("cardHormiga");
					barrita.style.background="linear-gradient(to left top, rgba(21, 221, 37, 0.5), rgba(12, 172, 38, 0.2))"
					break;

				case 6:
					barrita = document.getElementById("cardLibelula");
					barrita.style.background="linear-gradient(to left top, rgba(21, 221, 37, 0.5), rgba(12, 172, 38, 0.2))"
					break;

				case 7:
					barrita = document.getElementById("cardLuciernaga");
					barrita.style.background="linear-gradient(to left top, rgba(21, 221, 37, 0.5), rgba(12, 172, 38, 0.2))"
					break;

				case 8:
					barrita = document.getElementById("cardMantis");
					barrita.style.background="linear-gradient(to left top, rgba(21, 221, 37, 0.5), rgba(12, 172, 38, 0.2))"
					break;

				case 9:
					barrita = document.getElementById("cardOruga");
					barrita.style.background="linear-gradient(to left top, rgba(21, 221, 37, 0.5), rgba(12, 172, 38, 0.2))"
					break;
			}

			var cont = 0;
			barrita = document.getElementById("porAbeja");
			barrita.innerHTML = "" + data[cont]*100 + " %";
			barrita = document.getElementById("progressAbeja");
			barrita.style.width = ""+ data[cont]*100 +"%"
			cont++

			barrita = document.getElementById("porCamaron");
			barrita.innerHTML = "" + data[cont]*100 + " %";
			barrita = document.getElementById("progressCamaron");
			barrita.style.width = ""+ data[cont]*100 +"%"
			cont++

			barrita = document.getElementById("porCaracol");
			barrita.innerHTML = "" + data[cont]*100 + " %";
			barrita = document.getElementById("progressCaracol");
			barrita.style.width = ""+ data[cont]*100 +" %"
			cont++

			barrita = document.getElementById("porCatarina");
			barrita.innerHTML = "" + data[cont]*100 + "%";
			barrita = document.getElementById("progressCatarina");
			barrita.style.width = ""+ data[cont]*100 +" %"
			cont++

			barrita = document.getElementById("porEscarabajo");
			barrita.innerHTML = "" + data[cont]*100 + " %";
			barrita = document.getElementById("progressEscarabajo");
			barrita.style.width = ""+ data[cont]*100 +"%"
			cont++

			barrita = document.getElementById("porHormiga");
			barrita.innerHTML = "" + data[cont]*100 + " %";
			barrita = document.getElementById("progressHormiga");
			barrita.style.width = ""+ data[cont]*100 +"%"
			cont++

			barrita = document.getElementById("porLibelula");
			barrita.innerHTML = "" + data[cont]*100 + " %";
			barrita = document.getElementById("progressLibelula");
			barrita.style.width = ""+ data[cont]*100 +"%"
			cont++

			barrita = document.getElementById("porLuciernaga");
			barrita.innerHTML = "" + data[cont]*100 + " %";
			barrita = document.getElementById("progressLuciernaga");
			barrita.style.width = ""+ data[cont]*100 +"%"
			cont++

			barrita = document.getElementById("porMantis");
			barrita.innerHTML = "" + data[cont]*100 + " %";
			barrita = document.getElementById("progressMantis");
			barrita.style.width = ""+ data[cont]*100 +"%"
			cont++

			barrita = document.getElementById("porOruga");
			barrita.innerHTML = "" + data[cont]*100 + " %";
			barrita = document.getElementById("progressOruga");
			barrita.style.width = ""+ data[cont]*100 +"%"
			cont++

			ANIMAL_DETECTADO = animals[max_val_index]
			console.log("<p>El animal detectado y su probabilidad corresponden a</p><p>Animal detectado: " + ANIMAL_DETECTADO + " ( " + (max_val*100).toFixed(2) + "% probabilidad )</p>");
	});
	
}