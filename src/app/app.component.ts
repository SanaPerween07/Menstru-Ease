import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./components/landingPage/footer/footer.component";
import { NavbarComponent } from "./components/landingPage/navbar/navbar.component";
import { DashboardComponent } from "./components/landingPage/dashboard/dashboard.component";
import { ShareComponent } from "./components/landingPage/share/share.component";
import { ServicesComponent } from "./components/landingPage/services/services.component";
import { HeroSectionComponent } from "./components/landingPage/hero-section/hero-section.component";
import { BlogsComponent } from "./components/landingPage/blogs/blogs.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [NavbarComponent,
        RouterOutlet,
        FooterComponent,
        DashboardComponent,
        ShareComponent,
        ServicesComponent,
        HeroSectionComponent, BlogsComponent
        
      ]
})
export class AppComponent {
  title = 'myApp';
}
