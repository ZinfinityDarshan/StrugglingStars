import { TestBed, inject } from '@angular/core/testing';
import { IntroGuard } from './intro.guard';
describe('IntroGuard', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [IntroGuard]
        });
    });
    it('should ...', inject([IntroGuard], function (guard) {
        expect(guard).toBeTruthy();
    }));
});
//# sourceMappingURL=intro.guard.spec.js.map