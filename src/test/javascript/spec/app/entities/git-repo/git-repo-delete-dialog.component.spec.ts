/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { JhiEventManager } from 'ng-jhipster';

import { JhipdashTestModule } from '../../../test.module';
import { GitRepoDeleteDialogComponent } from '../../../../../../main/webapp/app/entities/git-repo/git-repo-delete-dialog.component';
import { GitRepoService } from '../../../../../../main/webapp/app/entities/git-repo/git-repo.service';

describe('Component Tests', () => {

    describe('GitRepo Management Delete Component', () => {
        let comp: GitRepoDeleteDialogComponent;
        let fixture: ComponentFixture<GitRepoDeleteDialogComponent>;
        let service: GitRepoService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [JhipdashTestModule],
                declarations: [GitRepoDeleteDialogComponent],
                providers: [
                    GitRepoService
                ]
            })
            .overrideTemplate(GitRepoDeleteDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(GitRepoDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(GitRepoService);
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
