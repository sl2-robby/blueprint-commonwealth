import { Component } from '@angular/core';
import { HeaderContentComponent } from "../../components/contents/header-content/header-content.component";
import {MatButtonModule} from '@angular/material/button';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-chat-ai',
    standalone: true,
    templateUrl: './chat-ai.component.html',
    styleUrl: './chat-ai.component.scss',
    imports: [HeaderContentComponent, MatButtonModule, FormsModule, ReactiveFormsModule, CommonModule]
})
export class ChatAiComponent {
  title = 'chat-ai';

  promtInput = new FormControl('');
  policy: string =''

  onClickGenerate() {
    if (typeof this.promtInput.value === 'string') {
      this.policy = this.promtInput.value
    }

  }
}
