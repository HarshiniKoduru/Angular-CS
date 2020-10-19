import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CasestudyComponent } from './casestudy.component';
import { TableDataService } from '../table-data.service';
const file = new File(['realestate'], 'realestate.xlsx', { type: 'text/plain' });
const myevent = { target: { files: [new File(['realestate'], 'realestate.xlsx', { type: 'text/plain' })] } }
const myevent1 = { target: { files: [] } }
describe('CasestudyComponent', () => {
  let component: CasestudyComponent;
  let fixture: ComponentFixture<CasestudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CasestudyComponent],
      providers: [TableDataService],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasestudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onFileSelect', () => {
    component.onFileSelect(myevent);
    fixture.detectChanges();
    expect(component.selectedFile.name).toEqual(file.name);
  });

  it('should call onFileSelect selectedFile empty', () => {
    component.onFileSelect(myevent1);
    fixture.detectChanges();
    expect(component.selectedFile).toEqual("");
  });

  it('should call getCustomers', () => {
    component.getCustomers();
    fixture.detectChanges();
    expect(component.hasFloodRisk).toBeFalsy();
  });

  it('should call uploadFile', () => {
    component.uploadFile();
    fixture.detectChanges();
    expect(component.hasFloodRisk).toBeFalsy();
  });
});
