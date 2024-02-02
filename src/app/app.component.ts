import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { OpenAiService } from '../services/micro-services/openai/open-ai.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [OpenAiService]
})

export class AppComponent {
  title = 'chatGPT';

  constructor(private openAiService: OpenAiService) { }

  ngOnInit() {
    this.openAiService.testChatGpt()
  }


}
