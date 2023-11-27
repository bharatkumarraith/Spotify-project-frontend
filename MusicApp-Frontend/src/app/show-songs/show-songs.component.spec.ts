import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSongsComponent } from './show-songs.component';

describe('ShowSongsComponent', () => {
  let component: ShowSongsComponent;
  let fixture: ComponentFixture<ShowSongsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowSongsComponent]
    });
    fixture = TestBed.createComponent(ShowSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
