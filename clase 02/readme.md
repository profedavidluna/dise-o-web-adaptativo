# 👟 Proyecto Práctico: Air Max Nova - Diseño Web Adaptable

Este proyecto es un ejercicio fundamental para dominar el **Diseño Web Adaptable (Responsive Web Design)** utilizando HTML y, principalmente, **CSS Media Queries**.

El objetivo es transformar la estructura HTML base en **tres _layouts_ visualmente distintos** (Móvil, Tablet y Desktop) para ofrecer una experiencia de usuario única en cada dispositivo, emulando el estilo moderno y dinámico de marcas como Nike.

---

## 🎯 Objetivos del Ejercicio

1.  **Mobile First:** Aplicar los estilos base del CSS (sin _Media Queries_) para que el _layout_ se vea y funcione correctamente en el ancho de pantalla más pequeño (móvil).
2.  **Definición de Breakpoints:** Implementar las _Media Queries_ en los puntos de quiebre definidos para transformar la apariencia de la página.
3.  **Experiencia Diferenciada (UX):** No solo escalar el contenido, sino cambiar la disposición de los elementos para optimizar la interacción en cada dispositivo (ej. navegación con hamburguesa en móvil, 2 columnas en tablet, _grid_ complejo en desktop).

---

## 💻 Estructura del Proyecto

El repositorio contiene los siguientes archivos:

| Archivo | Rol | Tarea Principal |
| :--- | :--- | :--- |
| `index.html` | Estructura HTML | **No Modificar**. Céntrate en las clases CSS existentes. |
| `styles.css` | Hoja de Estilos | **Aquí va todo tu código CSS.** (Donde aplicarás los _Media Queries_). |
| `README.md` | Documentación | (El archivo que estás leyendo). |

---

## 📐 Breakpoints a Implementar

Deberás utilizar la propiedad `@media screen and` en tu archivo `styles.css` para aplicar los siguientes cambios de diseño en los puntos de quiebre específicos.

### 📱 1. Móvil (Base)

* **Ancho:** `< 601px` (Estilos CSS Base).
* **Navegación:** Mostrar el **icono de hamburguesa** (`.mobile-menu-button`). Ocultar el menú horizontal (`.desktop-menu`).
* **Hero:** Contenido y imagen apilados verticalmente (1 columna).
* **Features:** Las 3 características apiladas (1 columna).

### ↔️ 2. Tablet

* **Breakpoint:** A partir de **`min-width: 601px`**.

```css
/* LAYOUT PARA TABLET */
@media screen and (min-width: 601px) {
    /* Ocultar hamburguesa, mostrar menú horizontal */
    /* Hero en 2 columnas (imagen a un lado, texto al otro) */
    /* Features en 2 columnas */
}
### 🖥️ 3. Desktop
Breakpoint: A partir de min-width: 1025px.

/* LAYOUT PARA DESKTOP */
@media screen and (min-width: 1025px) {
    /* Aumentar significativamente el tamaño del título principal (`.product-title`) */
    /* Hero a pantalla completa o con uso creativo del espacio */
    /* Features en 3 columnas iguales usando CSS Grid */
}

### ✅ Criterios de Éxito
**El proyecto se considera completo y exitoso cuando:**
*La página se ve profesional y estilizada en el diseño base (Móvil).
*Al cambiar el ancho de la ventana del navegador, el layout cambia drásticamente en 601px y 1025px.
*Los cambios son intencionales y mejoran la usabilidad en cada dispositivo (ej: la navegación cambia de hamburguesa a horizontal).
*El código CSS está organizado y las Media Queries están definidas correctamente.

**¡Éxito con tu diseño! Recuerda que un buen diseño adaptable mejora la usabilidad y la percepción de marca.**