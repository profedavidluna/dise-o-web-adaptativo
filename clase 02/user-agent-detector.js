document.addEventListener('DOMContentLoaded', () => {
    const userAgent = navigator.userAgent;
    const messageElement = document.getElementById('detection-message');
    
    // 1. Obtener el valor del parámetro de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const viewOverride = urlParams.get('view'); // Obtiene el valor de 'view'
    
    let version = 'desktop'; 
    let styleSheetName = 'styles-desktop.css';

    // 2. Lógica de Simulación (PRIORIDAD AL PARÁMETRO URL)
    
    if (viewOverride) {
        // El parámetro existe, simular la versión
        switch (viewOverride.toLowerCase()) {
            case 'mobile':
            case 'movil':
                version = 'móvil (Simulado)';
                styleSheetName = 'styles-mobile.css';
                break;
            case 'tablet':
                version = 'tablet (Simulado)';
                styleSheetName = 'styles-tablet.css';
                break;
            case 'desktop':
                version = 'desktop (Simulado)';
                styleSheetName = 'styles-desktop.css';
                break;
            default:
                // Si el valor no es reconocido, usa el default 'desktop'
                console.warn(`Valor de 'view' no reconocido: ${viewOverride}. Usando Desktop.`);
        }
    } else {
        // 3. Lógica de Detección Real (Fallback si no hay parámetro)
        
        const tabletRegex = /iPad|Android.*Tablet|Touch.*Tablet/i;
        const mobileRegex = /Android|iPhone|iPod|BlackBerry|IEMobile|Opera Mini|Mobile/i;

        if (tabletRegex.test(userAgent)) {
            version = 'tablet (Detectado)';
            styleSheetName = 'styles-tablet.css';
        } else if (mobileRegex.test(userAgent)) {
            version = 'móvil (Detectado)';
            styleSheetName = 'styles-mobile.css';
        }
        // Si no coincide con ninguno, mantiene el default: 'desktop (Detectado)'
    }

    // 4. Mostrar el Mensaje de Detección (Actualización del DOM)
    messageElement.innerHTML = `
        ✅ **VERSIÓN CARGADA:**
        Se ha seleccionado la **VERSIÓN ${version.toUpperCase()}**.
        Cargando: <code>${styleSheetName}</code>
    `;
    
    // 5. Carga Dinámica de la Hoja de Estilos
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = styleSheetName;
    
    document.head.appendChild(link);
});