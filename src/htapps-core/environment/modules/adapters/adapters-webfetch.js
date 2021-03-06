var fetch = function(target, attributes, presetResult) {
    if(!attributes) attributes = {};
    if(!attributes.headers) attributes["headers"] = {};
    if(!attributes.headers["Content-Type"]) attributes["Content-Type"] = "application/json";
    if(!attributes.method) attributes["method"] = "GET";
    if(!attributes.body) attributes["body"] = {};
    if(!presetResult) presetResult = "";

    return {
        then: function(callback) {
            window.external.WebFetch(
                target,
                attributes.method,
                attributes.headers["Content-Type"],
                JSON.stringify(attributes.headers),
                JSON.stringify(attributes.body),
                callback,
                presetResult
            );
            return {
                then: function(callback) {
                    return fetch(target, attributes, presetResult).then(callback)
                }
            }
        }
    }

}