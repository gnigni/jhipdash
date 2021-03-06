/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { JhiEventManager } from 'ng-jhipster';

import { JhipdashTestModule } from '../../../test.module';
import { SonarComponentDeleteDialogComponent } from '../../../../../../main/webapp/app/entities/sonar-component/sonar-component-delete-dialog.component';
import { SonarComponentService } from '../../../../../../main/webapp/app/entities/sonar-component/sonar-component.service';

describe('Component Tests', () => {

    describe('SonarComponent Management Delete Component', () => {
        let comp: SonarComponentDeleteDialogComponent;
        let fixture: ComponentFixture<SonarComponentDeleteDialogComponent>;
        let service: SonarComponentService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [JhipdashTestModule],
                declarations: [SonarComponentDeleteDialogComponent],
                providers: [
                    SonarComponentService
                ]
            })
            .overrideTemplate(SonarComponentDeleteDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(SonarComponentDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(SonarComponentService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        spyOn(service, 'delete').and.returnValue(Observable.of({}));

                        // WHEN
                        comp.confirmDelete(123);
                        tick();

                        // THEN
                        expect(service.delete).toHaveBeenCalledWith(123);
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
