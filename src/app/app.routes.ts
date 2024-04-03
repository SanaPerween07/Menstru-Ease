import { Routes } from '@angular/router';
import { TrackerComponent } from './components/pages/tracker/tracker.component';
import { DashboardComponent } from './components/landingPage/dashboard/dashboard.component';
import { LoginComponent } from './components/pages/login/login.component';
import { BookingComponent } from './components/pages/booking/booking.component';
import { BlogStoryComponent } from './components/pages/blog-story/blog-story.component';
import { FooterComponent } from './components/landingPage/footer/footer.component';
import { ServicesComponent } from './components/landingPage/services/services.component';
import { BlogsComponent } from './components/landingPage/blogs/blogs.component';
import { HeroSectionComponent } from './components/landingPage/hero-section/hero-section.component';
import { ShareComponent } from './components/landingPage/share/share.component';
import { SignUpComponent } from './components/pages/sign-up/sign-up.component';
import { HomeComponent } from './components/landingPage/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',
  component: HomeComponent,
  children: [
    { path: '', component: DashboardComponent },
    { path: '', component: ShareComponent },
    { path: '', component: HeroSectionComponent },
    { path: '', component: BlogsComponent },
    { path: '', component: ServicesComponent },
    { path: '', component: FooterComponent },
  ]},
  { path: 'login', component: LoginComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'tracker', component: TrackerComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'blogStory', component: BlogStoryComponent },
];
