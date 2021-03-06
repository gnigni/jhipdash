/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { JhipdashTestModule } from '../../../test.module';
import { GitRepoDetailComponent } from '../../../../../../main/webapp/app/entities/git-repo/git-repo-detail.component';
import { GitRepoService } from '../../../../../../main/webapp/app/entities/git-repo/git-repo.service';
import { GitRepo } from '../../../../../../main/webapp/app/entities/git-repo/git-repo.model';

describe('Component Tests', () => {

    describe('GitRepo Management Detail Component', () => {
        let comp: GitRepoDetailComponent;
        let fixture: ComponentFixture<GitRepoDetailComponent>;
        let service: GitRepoService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [JhipdashTestModule],
                declarations: [GitRepoDetailComponent],
                providers: [
                    GitRepoService
                ]
            })
            .overrideTemplate(GitRepoDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(GitRepoDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(GitRepoService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new HttpResponse({
                    body: new GitRepo(123)
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.gitRepo).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
