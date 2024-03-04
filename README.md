# ATM

	Para la carga de datos sobre la Base de Datos las indicaciones se encuentran dentro de ATMDBContext.cs en el proyecto BackEnd

	-Implementacion de errores:
		Desde Angular se ha de implementar que al recibir desde el BackEnd un error de tipo BadRequest o 500 se redirija a al component error.html
		el cual ademas tendria las funcionalidades para volver hacia atras

	-Cantidad de Intentos:
		En dicho case puede ser implementado desde Angular manejando un contador en el login-pin el cual manejara que al llegar a 4 enviase una peticion de PUT a la tarjeta indicada de manera que se actualice, teniendo ademas el metodo correspondiente en el backEnd que actualizaria el estado de la tarjeta

	-Retiro con Actualizacion:
		En dicho caso principalmente se plantea una mejora ya que el modulo se encuentra funcional desde el front pero es limitado ante la cantidad a solicitar.
		El valor optimo seria implementar que los valores por teclado puedan manejarse desde un input o manejar una estructura form desde html 