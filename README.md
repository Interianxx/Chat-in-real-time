# Chat en Tiempo Real

Este proyecto implementa un sistema de chat en tiempo real utilizando tecnologías modernas que soportan **concurrencia** y **paralelismo**. Está desarrollado con **Node.js**, **Express**, **Socket.IO** y una interfaz basada en **HTML** y **JavaScript**.

---

## 🚀 Instalación y Uso

### **Requisitos previos**
- [Node.js](https://nodejs.org/) (versión 16 o superior)
- Un navegador web moderno (por ejemplo, Chrome o Firefox)

### **Pasos para ejecutar el proyecto**

1. **Clona este repositorio:**
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DEL_PROYECTO>

2. **Instala las dependencias del proyecto**
   ```bash
   npm install

3. **Ejecuta el servidor**
   ```bash
   npm run dev

3. **Abrir el cliente en el navegador**
   - La aplicación estará disponible en http://localhost:3000.

## Aspectos destacados de las tecnologias utilizadas

La parte clave del proyecto es el uso de Socket.IO, que facilita la comunicación bidireccional entre cliente y servidor de forma concurrente.

- Node.js: Ejecuta el servidor, permitiendo manejar múltiples conexiones en paralelo mediante su arquitectura de entrada/salida no bloqueante.

- Socket.IO: Permite la transmisión de mensajes en tiempo real, gestionando la concurrencia entre los clientes conectados.

- Express: Estructura el backend y sirve los archivos estáticos del cliente.

- HTML y JavaScript: Implementan la interfaz del cliente, incluyendo la interacción con el servidor mediante eventos de Socket.IO.

## Como se integra la concurrencia y el paralelismo en esta aplicacion

### Concurrencia

En este proyecto, la concurrencia se observa en la capacidad del servidor para manejar múltiples conexiones de clientes a la vez. Por ejemplo:
- Varios usuarios pueden conectarse simultáneamente al chat.
- Cada usuario puede enviar y recibir mensajes sin bloquear a otros.

### Paralelismo

Aunque Node.js usa un solo hilo, el motor de E/S no bloqueante permite manejar múltiples tareas en paralelo, como:
- Emitir mensajes del cliente al servidor y de regreso a los demás clientes.
- Recuperar archivos estáticos mientras se mantiene abierta la conexión de Socket.IO.

### Ejemplo de uso 

[Ejemplo](https://drive.google.com/file/d/11qZwTFds-9MXlnhuYxIX2DAT_9-ZTkdx/view?usp=sharing)

