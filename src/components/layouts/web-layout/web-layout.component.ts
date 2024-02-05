import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WebSidebarComponent } from "../web-sidebar/web-sidebar.component";
import { WebHeaderComponent } from "../web-header/web-header.component";

@Component({
    selector: 'app-web-layout',
    standalone: true,
    templateUrl: './web-layout.component.html',
    styleUrl: './web-layout.component.scss',
    imports: [RouterOutlet, WebSidebarComponent, WebHeaderComponent]
})
export class WebLayoutComponent {

}
