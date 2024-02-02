# Membuat Micro-Service

Pada directory src buat directory berikut:

```
services/micro-services
```

Di dalam directory tersebut buat directory sesuai nama service.

Buka directory tersebut lalu jalankan command berikut:

```
ng g s <NAMA-SERVICE>
```

# Contoh Micro-Service: Integrasi Dengan OpenAI

```
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
        *handle response
      },
      error:(err) => {
        *handle error
      }
    })
  }

}
```

# Contoh Penggunaan Micro-Service Di Components

Import service sebagai berikut:

```
import { OpenAiService } from '../services/micro-services/openai/open-ai.service';
```

Deklarasikan service di @Component Providers sebagai berikut:

```
@Component({
  ...
  
  providers: [OpenAiService]
})
```

Buat Constructor pada class component sebagai berikut:

```
constructor(private openAiService: OpenAiService) { }
```
