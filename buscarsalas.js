include("utils.js")
function onLoad() {
    log(null, "by " + scriptAuthor + " - \x06" + scriptVersion)
}
function onCommand(userobj, command, target, args) {
    var cmd = command.split(" ")[0];
    cmd = cmd.toLowerCase();
    if (cmd in commands) {
        commands[cmd](userobj, command)
    }
}
function onHelp(userobj) {
    log(userobj, "#helpbuscarsalas")
}
