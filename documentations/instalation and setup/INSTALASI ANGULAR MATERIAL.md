# Install Angular Material

Buka direktori project yang hendak dipasang Angular Material, lalu jalankan command berikut:

```
ng add @angular/material
```

# Contoh Penggunaan Component Dari Angular Material

Import component dari Angular Material yang hendak digunakan, sebagai berikut:

```
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule ({
  imports: [
    MatSlideToggleModule,
  ]
})
class AppModule {}
```
Lalu gunakan pada halaman html yang terintegrasi dengan component tersebut, sebagai berikut:

```
<mat-slide-toggle>Toggle me!</mat-slide-toggle>
```
