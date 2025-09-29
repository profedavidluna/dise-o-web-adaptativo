# 🔍 Actividad Avanzada: Detección de Agente de Usuario (Adaptive Web Design)

Este ejercicio práctico se enfoca en el **Diseño Web Adaptativo (Adaptive Web Design o A-RWD)**, un enfoque donde la lógica de la aplicación decide qué *layout* enviar al cliente *antes* de que se cargue la página, basándose en la información del dispositivo.

Utilizaremos **JavaScript** para leer el Agente de Usuario (`User-Agent`) del navegador y simular cómo un servidor determinaría si cargar la versión móvil o la de escritorio del sitio.

---

## 🎯 Objetivos de Aprendizaje

1.  Comprender la diferencia conceptual entre **Responsive Web Design (RWD)** y **Adaptive Web Design (A-RWD)**.
2.  Aprender a acceder a la información del navegador mediante `navigator.userAgent`.
3.  Aplicar lógica de programación (Regex) para clasificar el dispositivo (Móvil vs. Escritorio).
4.  Manipular el DOM de JavaScript para cargar dinámicamente recursos (hojas de estilo).

---

## 🛠️ Tareas a Realizar

Deberás trabajar principalmente en el archivo **`user-agent-detector.js`** y asegurar la correcta configuración en `index.html`.

### 1. Configuración HTML

Asegúrate de que tu `index.html` cumpla con lo siguiente:

* **Desvincular la hoja de estilos global** (`styles.css` del ejercicio anterior).
* Incluir el `<div id="detection-message">` al inicio del `<body>` para mostrar el resultado de la detección.
* Enlazar el script `user-agent-detector.js` al final del `<body>`.

### 2. Creación de Estilos de Prueba

Crea dos hojas de estilos mínimas para confirmar visualmente el éxito de la detección:

* **`styles-mobile.css`**: Define un `background-color` de color **cálido/rojo** para el `<body>`.
* **`styles-desktop.css`**: Define un `background-color` de color **frío/verde** para el `<body>`.

### 3. Implementación de la Lógica (`user-agent-detector.js`)

Escribe el código JavaScript siguiendo estos pasos:

| Paso | Descripción | Pista |
| :--- | :--- | :--- |
| **A. Detección** | Crea una expresión regular (`mobileRegex`) que busque palabras clave comunes en el `userAgent` (ej: `Android`, `iPhone`, `Mobile`, `Tablet`). | Usa `navigator.userAgent` |
| **B. Clasificación** | Utiliza una estructura `if` para determinar si el `userAgent` coincide con la regex móvil. Asigna un nombre de archivo CSS (`styles-mobile.css` o `styles-desktop.css`) basado en el resultado. | La versión por defecto debe ser `desktop`. |
| **C. Notificación** | Actualiza el contenido del `div#detection-message` para informar al usuario qué versión se detectó y qué archivo CSS se va a cargar. | Usa `document.getElementById('detection-message').innerHTML = ...` |
| **D. Carga Dinámica** | **Crea un nuevo elemento `<link>`**, asigna sus atributos (`rel`, `type`, `href`) y adjúntalo al elemento `<head>` del documento. | Usa `document.createElement('link')` y `document.head.appendChild()`. |

---

## ✅ Criterios de Éxito

El ejercicio se considera exitoso si:

1.  **Detección Correcta:** Al abrir la página en un navegador móvil (o usando la **vista de dispositivo** del inspector), se detecta la versión `MÓVIL`.
2.  **Carga Correcta:** El `background-color` de la página cambia al color **cálido/rojo** (confirmando la carga de `styles-mobile.css`).
3.  **Mensaje Claro:** El `div#detection-message` muestra la versión de sitio y el archivo CSS que ha sido cargado.
4.  **Diferencia de Entorno:** Al abrir la página en un navegador de escritorio, se detecta la versión `DESKTOP` y el fondo es **frío/verde**.

---

**¡Este es un ejercicio crucial para entender las estrategias modernas de desarrollo web!**