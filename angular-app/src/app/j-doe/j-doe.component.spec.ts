import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JDoeComponent } from './j-doe.component';

describe('JDoeComponent', () => {
  let component: JDoeComponent;
  let fixture: ComponentFixture<JDoeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JDoeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JDoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
