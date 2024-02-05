import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { OpenAiService } from '../services/micro-services/openai/open-ai.service';
import { WebLayoutComponent } from "../components/layouts/web-layout/web-layout.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    providers: [OpenAiService],
    imports: [CommonModule, RouterOutlet, HttpClientModule, WebLayoutComponent, CommonModule]
})

export class AppComponent {
  title = 'chatGPT';

  constructor(private openAiService: OpenAiService) { }

  // ngOnInit() {
  //   this.openAiService.testChatGpt()
  // }


}
