---
title: Cómo desinstalar el nuevo Microsoft Edge en Windows con PowerShell
date: 2022-05-22T21:40:13.587Z
tags:
  - microsoft
  - edge
	- terminal
category: trucos
---

Microsoft habló mucho sobre el nuevo Microsoft Edge, que tiene el mismo nombre que su antecesor. Esto se debe a que actualmente está basado en Chromium y tiene un diseño y funcionamiento muy similar a Google Chrome, el rey indiscutible de la navegación web.

## Pasos para desinstalar microsoft edge

1. Abrimos PowerShell como como administrador

2. A continuación, escribimos el siguiente comando
```powershell
get-appxpackage *edge*
```

_De toda la información que se muestra, debemos seleccionar y copiar al portapapeles la que se muestra en PackageFullName en el apartado Microsoft.MicrosoftEdge.Stable._

![Powershell](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/le8tbquz57slypdhaaby.png)


3. Seguidamente, volemos a la línea de comandos y utilizamos el siguiente comando
```powershell
Remove-appxpackage <PackageFullName>
```

4. En <PackageFullName> debemos pegar el texto que hemos copiado al portapapeles y que, en este caso sería:
```powershell
Remove-appxpackage Microsoft.MicrosoftEdge.Stable_108.0.1462.76_neutral__8wekyb3d8bbwe
```

¡Y ya estaría! Con esto hemos logrado forzar la desinstalación de Microsoft Edge.

## Evitar que Microsoft Edge se instale a través de las actualizaciones de Windows

Aunque lo hayas desinstalado, Microsoft puede volver a intentar instalar Edge en tu ordenador a través de las actualizaciones de Windows. Siguiendo estos pasos, podrás evitar que Windows reinstale Edge en tu ordenador en la próxima actualización. Podrás utilizar el Microsoft Edge Chromium Blocker Toolkit, que podrás encontrar en la web, para establecer una clave del registro con un nuevo valor (esto puedes hacerlo con las siguientes instrucciones o de forma manual, es decir, sin descargar nada).

1. Primero, inicia el editor de registro. Esto puede hacerse a través de la ventana “Ejecutar”, que se abre pulsando [Windows] + [R]. Introduce el comando “regedit.exe” y pulsa [Enter].

![Paso 1](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0fks9aionl7y9za6t6z2.png)

2. Confirma la solicitud de control de la cuenta de usuario con el botón “Sí”. Ahora, ve a HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft y crea una nueva clave haciendo clic con el botón derecho.

![Paso 2](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/x0lt4z87y2pma77wqsw8.png)

Paso 3. Nombra esta nueva clave “EdgeUpdate”. Ahora, selecciona “EdgeUpdate” y haz clic en cualquier zona de la derecha para abrir el menú. Selecciona “Nuevo” > “Valor DWORD (32 bits)”. Utiliza “DoNotUpdateToEdgeWithChromium” como nombre del valor.

![Paso 3](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8d1pebf11evgu251yuil.png)

Paso 4. Por defecto, el DWORD tiene valor “0”. Puedes cambiar esto haciendo doble clic en el nombre del valor e introduciendo el valor “1” en la ventana de edición. A continuación, confirma haciendo clic en “Aceptar”.

Esto evitará la implementación y reinstalación automática de Microsoft Edge.
