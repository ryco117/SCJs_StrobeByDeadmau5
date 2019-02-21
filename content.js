var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            //var replacedText = text.replace(/(\(|\s|^|\,)([a-zA-Z_-]+(\'s?)?)(\)|\s|$|\.|\?|\!|\,)/g, '$1Strobe by Deadmau5$4');

            // https://stackoverflow.com/a/48902765
            var replacedText = text.replace(/(\s|,|^|\(|'|"|\/)([\p{L}-]+)/gu, '$1Strobe by Deadmau5');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
