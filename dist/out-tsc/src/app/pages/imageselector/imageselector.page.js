import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
var ImageselectorPage = /** @class */ (function () {
    function ImageselectorPage(imagePicker) {
        this.imagePicker = imagePicker;
    }
    ImageselectorPage.prototype.getImages = function () {
        var _this = this;
        this.options = {
            // Android only. Max images to be selected, defaults to 15. If this is set to 1, upon
            // selection of a single image, the plugin will return it.
            //maximumImagesCount: 3,
            // max width and height to allow the images to be.  Will keep aspect
            // ratio no matter what.  So if both are 800, the returned image
            // will be at most 800 pixels wide and 800 pixels tall.  If the width is
            // 800 and height 0 the image will be 800 pixels wide if the source
            // is at least that wide.
            width: 200,
            //height: 200,
            // quality of resized image, defaults to 100
            quality: 25,
            // output type, defaults to FILE_URIs.
            // available options are 
            // window.imagePicker.OutputType.FILE_URI (0) or 
            // window.imagePicker.OutputType.BASE64_STRING (1)
            outputType: 1
        };
        this.imageResponse = [];
        this.imagePicker.getPictures(this.options).then(function (results) {
            for (var i = 0; i < results.length; i++) {
                _this.imageResponse.push('data:image/jpeg;base64,' + results[i]);
            }
        }, function (err) {
            alert(err);
        });
    };
    ImageselectorPage.prototype.ngOnInit = function () {
    };
    ImageselectorPage = tslib_1.__decorate([
        Component({
            selector: 'app-imageselector',
            templateUrl: './imageselector.page.html',
            styleUrls: ['./imageselector.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ImagePicker])
    ], ImageselectorPage);
    return ImageselectorPage;
}());
export { ImageselectorPage };
//# sourceMappingURL=imageselector.page.js.map