include("constants.js")
function log(userobj, text) {
    if (!userobj)
        print(preLogMessage + text)
    else
        print(userobj, preLogMessage + text)
}
var commands = {
    buscarsalas: function (userobj, command) {
        if (!Channels.enabled) {
            log(userobj, "La búsqueda de salas está desactivada.")
            return
        };
        var query = command.split(" ")[1];
        if (!query) {
            log(userobj, "Por favor, especifique una consulta.")
            return
        }
        var collection = Channels.search(query);
        if (collection.length == 0) {
            log(userobj, "No se encontraron salas de chat con la consulta: " + query)
            return
        }
        log(userobj, collection.length + " Resultados de la búsqueda")
        for (var i = 0; i < collection.length; i++) {
            print(userobj, "Chatroom: [" + collection[i].name + "](" + collection[i].externalIp + "," + collection[i].port + ")");
        }
    },
    helpbuscarsalas: function (userobj) {
        log(userobj, "Busca salas de chat disponibles. Uso: #buscarsalas <consulta>")
    }
}