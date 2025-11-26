# Lista de Tareas en React — Añadir, Completar y Borrar Tareas

Este proyecto es una aplicación sencilla de lista de tareas (To-Do List) desarrollada con **React**, donde puedes añadir nuevas tareas, marcarlas como realizadas, eliminarlas individualmente o borrar toda la lista con un solo clic.


## Detalles importantes

- Toda la aplicación se renderiza dinámicamente mediante **componentes de React**.
- El proyecto utiliza **estados (`useState`)** para gestionar:
  - El contenido del input
  - La lista de tareas
  - Las tareas marcadas como completadas
- El proyecto inicia con **varias tareas predefinidas**, pensadas para:
  - Mostrar rápidamente el funcionamiento.
  - Permitir probar la aplicación sin necesidad de escribir tareas desde cero.
  - Usar el botón **"Nueva lista"**, que elimina toda la lista para empezar desde cero.
- El diseño utiliza **CSS personalizado**, sin librerías externas adicionales.

## Funcionalidades principales

### 1. Añadir tareas
- El usuario puede escribir una tarea en el campo de texto.
- Se puede añadir una tarea de **dos formas**:
  - Pulsando el botón **"Enviar"**
  - Pulsando la tecla **Enter**
- Al añadir una tarea:
  - Se agrega a la lista.
  - El campo de texto se vacía automáticamente.
  - Si el input está vacío, se muestra una alerta.

### 2. Marcar tareas como completadas
- Al hacer clic sobre una tarea, esta se marca como completada.
- Las tareas completadas se muestran con un estilo tachado.
- Si se vuelve a hacer clic, la tarea se desmarca.

### 3. Eliminar tareas individuales
- Cada tarea incluye un botón **"X"** para eliminarla.
- Al borrar una tarea:
  - La lista se actualiza correctamente.
  - Los índices del estado de tareas completadas se reajustan para mantener la coherencia.

### 4. Contador de tareas pendientes
- Debajo de la lista se muestra cuántas tareas quedan sin completar.
- El número se actualiza automáticamente al completar o eliminar tareas.

### 5. Vaciar toda la lista
- Botón **"Nueva lista"**:
  - Elimina TODAS las tareas (incluyendo las predefinidas).
  - Reinicia también el estado interno de tareas completadas.
- Perfecto para comenzar desde cero.

## Cómo usar la aplicación:

- Escribe una tarea en el campo de texto.
- Añádela pulsando Enter o el botón "Enviar".
- Haz clic sobre una tarea para marcarla o desmarcarla.
- Pulsa "X" para borrar una tarea concreta.
- Usa "Nueva lista" para vaciar todo (incluyendo las tareas predefinidas).
- Revisa el contador de tareas pendientes bajo la lista.

## Notas

- El estado done controla cuáles tareas están completadas, usando sus índices.
- Al eliminar una tarea, los índices del estado done se reajustan para mantener la coherencia.
- El CSS incluye detalles como tachado personalizado, sombras, iconos SVG y efectos hover.

## Mejoras sugeridas

- Añadir la posibilidad de editar tareas existentes.
- Implementar animaciones al añadir, borrar o completar tareas.
- Incluir filtros: todas, completadas, pendientes.
- Validar tareas duplicadas o añadir límites de caracteres.