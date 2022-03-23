import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CustomizeComponent } from './customize.component';

describe('CustomizeComponent', () => {
  let component: CustomizeComponent;
  let fixture: ComponentFixture<CustomizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomizeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('setBold() should set boldStyle to bold', () => {
    component.setBold();
    expect(component.boldStyle).toEqual('bold');
  });


  [{ a: 5, b: 2, expected: 5 }, {a: 4, b: 7, expected: 7},{a: 3, b: 3, expected: 3}].forEach((testcase) => {
    it(`testMaxNumber() should return ${testcase.expected} when call with ${testcase.a ,testcase.b}`, () => {
      const result = component.testMaxNumber(testcase.a, testcase.b);
      expect(result).toEqual(testcase.expected);
    });
  });



  ///HTML Test
  ///1 testeaza textul de pe buton
  it('should have Bold in "Bold button"' , () => {
    const btn = fixture.debugElement.nativeElement.querySelector('#bold-btn');
    expect(btn.innerHTML).toBe('Bold');
  });


  ///2 testeaza actiunea unui buton
  it('should set italicStyle when Italic button is clicked', () => {
    // expect(component.italicStyle).toBeUndefined(); doar daca variabila italicStile nu este definita ca string gol
    const btn = fixture.debugElement.nativeElement.querySelector('#italic-btn');
    btn.click();
    expect(component.italicStyle).toBe('italic');
  });
});


