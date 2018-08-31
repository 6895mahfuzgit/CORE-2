/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { TestvaluesComponent } from './testvalues.component';

let component: TestvaluesComponent;
let fixture: ComponentFixture<TestvaluesComponent>;

describe('testvalues component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ TestvaluesComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(TestvaluesComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});