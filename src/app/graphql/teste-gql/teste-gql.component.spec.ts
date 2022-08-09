import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteGqlComponent } from './teste-gql.component';

describe('TesteGqlComponent', () => {
  let component: TesteGqlComponent;
  let fixture: ComponentFixture<TesteGqlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesteGqlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TesteGqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
