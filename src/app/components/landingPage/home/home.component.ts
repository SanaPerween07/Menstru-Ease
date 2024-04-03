import { Component } from '@angular/core';
import { ServicesComponent } from "../services/services.component";
import { BlogsComponent } from "../blogs/blogs.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { ShareComponent } from "../share/share.component";
import { HeroSectionComponent } from "../hero-section/hero-section.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [ServicesComponent, 
        BlogsComponent, 
        DashboardComponent,
        ShareComponent, 
        HeroSectionComponent, 
        FooterComponent]
})
export class HomeComponent {

}
