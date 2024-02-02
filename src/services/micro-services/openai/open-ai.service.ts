import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpenAiService {

  url: string = "https://api.openai.com/v1/"
  httpHeaders = new HttpHeaders().set("Authorization", "Bearer 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")

  constructor(private httpClient: HttpClient) { }

  testChatGpt() {
    this.httpClient.post(`${this.url}chat/completions`, {
      model: 'gpt-3.5-turbo',
      messages: [{role: 'user', content: 'hallo'}]
    }, {headers: this.httpHeaders}).subscribe({
      next:(resp) => {
        console.log(resp)
      },
      error:(err) => {
        console.log(err)
      }
    })
  }

}
