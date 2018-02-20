var FileSaver = require('file-saver');
class DomImageController {

    constructor($q, CommonService){
        this.$q = $q;
        this.CommonService = CommonService;

        if (!HTMLCanvasElement.prototype.toBlob) {
            Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
                value: function (callback, type, quality) {
                    var canvas = this;
                    setTimeout(function () {
                        var binStr = atob(canvas.toDataURL(type, quality).split(',')[1]),
                            len = binStr.length,
                            arr = new Uint8Array(len);

                        for (var i = 0; i < len; i++) {
                            arr[i] = binStr.charCodeAt(i);
                        }

                        callback(new Blob([arr], {type: type || 'image/png'}));
                    });
                }
            });
        }
    }

    $onInit(){
        this.id = this.CommonService.guid();
    }

    $onChanges(changes) {
        if (changes.srcId) {

            this.updateImage();
        }
    }

    $postLink() {
        if (this.srcId) {
            this.updateImage();
        }
    };

    updateImage() {

        let src = document.getElementById(this.srcId);



        let canvas = document.getElementById(`canvas-${this.id}`);
        if (!canvas) {
            console.log("Couldn't find canvas");

            setTimeout(() => {
                this.updateImage();
            }, 1000);
            return;
        }
        if(this.isUpdatingImage){
            return;
        }

        this.isUpdatingImage = true;

        this.computedStyleToInlineStyle(src, {recursive:true});


        canvas.width = src.offsetWidth;
        canvas.height = src.offsetHeight;
        let ctx = canvas.getContext('2d');

        let data = `<svg xmlns="http://www.w3.org/2000/svg" width="${src.offsetWidth}" height="${src.offsetHeight}">` +
            '<foreignObject width="100%" height="100%">' +

            this.html_to_xml(src.innerHTML) +

            '</foreignObject>' +
            '</svg>';

        data = encodeURIComponent(data);


        let img = new Image();

        let newImageId = `image-${this.id}`;

        img.onload = () => {
            ctx.drawImage(img, 0, 0);

            canvas.toBlob( (blob) => {
                let newImg = document.createElement('img'),
                    url = URL.createObjectURL(blob);

                newImg.onload = function () {
                    // no longer need to read the blob so it's revoked
                    URL.revokeObjectURL(url);
                };

                newImg.src = url;
                newImg.id = newImageId;
                newImg.classList.add("rounded");
                let oldImg = document.getElementById(newImageId);
                if (oldImg) {
                    oldImg.remove();
                }

                if(this.showImage) {
                    canvas.insertAdjacentHTML('afterend', newImg.outerHTML);
                }
                FileSaver.saveAs(blob, "SupportedBrowsersTable.png");
                this.isUpdatingImage = false;

            });
        };

        img.src = "data:image/svg+xml;utf8," + data;

    };

    html_to_xml(html) {
        var doc = document.implementation.createHTMLDocument('');
        doc.write(html);

        // You must manually set the xmlns if you intend to immediately serialize
        // the HTML document to a string as opposed to appending it to a
        // <foreignObject> in the DOM
        doc.documentElement.setAttribute('xmlns', doc.documentElement.namespaceURI);

        // Get well-formed markup
        html = (new XMLSerializer).serializeToString(doc.body);
        return html;
    }

    computedStyleToInlineStyle(element, options) {
        if (!element) {
            throw new Error("No element specified.");
        }

        if (!options) {
            options = {};
        }

        if (options.recursive) {
            Array.prototype.forEach.call(element.children, (child) => {
                this.computedStyleToInlineStyle(child, options);
            });
        }

        let computedStyle = getComputedStyle(element);
        for (let i = 0; i < computedStyle.length; i++) {
            let property = computedStyle.item(i);
            if (!options.properties || options.properties.indexOf(property) >= 0) {
                let value = computedStyle.getPropertyValue(property);
                element.style[property] = value;
            }
        }
    }

}

let domImageComponent = {
    bindings: {
        srcId: '@',
        showImage: '<'
    },
    controller: DomImageController,
    template: `<canvas id="canvas-{{$ctrl.id}}" style="display:none;" width="200" height="200"></canvas>`
};

export default domImageComponent;
