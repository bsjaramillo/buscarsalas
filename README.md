# Inbizio Buscar Salas
Este script realiza la búsqueda de salas y devuelve los resultados en un formato específico para ser detectado en Inbizio.
El formato es el siguiente
```
Chatroom: [Nombre de la sala](192.168.100.5,54321)
```
Este formato es detectado únicamente utilizando:
- La función *print* del ambiente javascript.
- El comando emote */me formato*
