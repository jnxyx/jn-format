module.exports = function jnformat(args) {
    var result = this;
    if (arguments.length > 0) {
        if (arguments.length == 1 && typeof (args) == "object") {
            for (var key in args) {
                if (args[key] !== undefined) {
                    var reg = new RegExp("({" + key + "})", "g");
                    result = result.replace(reg, args[key]);
                }
            }
        } else {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] !== undefined) {
                    var reg1 = new RegExp("({[" + i + "]})", "g");
                    result = result.replace(reg1, arguments[i]);
                }
            }
        }
    }
    return result;
}