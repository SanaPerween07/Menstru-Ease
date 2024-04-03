import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogStoryComponent } from './blog-story.component';

describe('BlogStoryComponent', () => {
  let component: BlogStoryComponent;
  let fixture: ComponentFixture<BlogStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogStoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
