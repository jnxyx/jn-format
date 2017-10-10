/*!
 * jn-format <https://github.com/jnxyx/jn-format>
 *
 * Copyright (c) 2016-2017, Yun Xiang Xu.
 * Licensed under the MIT License.
 */

module.exports = function jnFormat(args) {
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