import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { PhotoLibrary } from '@ionic-native/photo-library/ngx';
var TabsPage = /** @class */ (function () {
    function TabsPage(bottomSheet) {
        this.bottomSheet = bottomSheet;
    }
    TabsPage.prototype.openBottomSheet = function () {
        console.log('reaching here');
        this.bottomSheet.open(BottomSheetOverviewExampleSheet);
    };
    TabsPage = tslib_1.__decorate([
        Component({
            selector: 'app-tabs',
            templateUrl: 'tabs.page.html',
            styleUrls: ['tabs.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [MatBottomSheet])
    ], TabsPage);
    return TabsPage;
}());
export { TabsPage };
var BottomSheetOverviewExampleSheet = /** @class */ (function () {
    function BottomSheetOverviewExampleSheet(bottomSheetRef, photoLibrary) {
        this.bottomSheetRef = bottomSheetRef;
        this.photoLibrary = photoLibrary;
    }
    BottomSheetOverviewExampleSheet.prototype.openLink = function (event) {
        this.bottomSheetRef.dismiss();
        event.preventDefault();
    };
    BottomSheetOverviewExampleSheet.prototype.getImages = function () {
        var _this = this;
        this.photoLibrary.requestAuthorization().then(function () {
            _this.photoLibrary.getLibrary().subscribe({
                next: function (library) {
                    library.forEach(function (libraryItem) {
                        console.log(libraryItem.id); // ID of the photo
                        console.log(libraryItem.photoURL); // Cross-platform access to photo
                        console.log(libraryItem.thumbnailURL); // Cross-platform access to thumbnail
                        console.log(libraryItem.fileName);
                        console.log(libraryItem.width);
                        console.log(libraryItem.height);
                        console.log(libraryItem.creationDate);
                        console.log(libraryItem.latitude);
                        console.log(libraryItem.longitude);
                        console.log(libraryItem.albumIds); // array of ids of appropriate AlbumItem, only of includeAlbumsData was used
                    });
                },
                error: function (err) { console.log('could not get photos'); },
                complete: function () { console.log('done getting photos'); }
            });
        })
            .catch(function (err) { return console.log('permissions weren\'t granted'); });
    };
    BottomSheetOverviewExampleSheet = tslib_1.__decorate([
        Component({
            selector: 'bottom-sheet-overview-example-sheet',
            templateUrl: 'bottom-sheet-overview-example-sheet.html',
            styleUrls: ['tabs.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [MatBottomSheetRef, PhotoLibrary])
    ], BottomSheetOverviewExampleSheet);
    return BottomSheetOverviewExampleSheet;
}());
export { BottomSheetOverviewExampleSheet };
//# sourceMappingURL=tabs.page.js.map