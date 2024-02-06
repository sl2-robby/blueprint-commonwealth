# Membuat Reusable Component

Pada direktori yang diinginkan, jalankan command berikut:

```
ng g c <COMPONENT-NAME>
```

> Catatan: pada aplikasi ini, reusable component disimpan pada direktori "components/contets".

# Contoh Penggunaan Reusable Component

Import component yang hendak digunakan, sebagai berikut:

```
import { namaComponent } from <DIREKTORI-COMPONENT>;

@NgModule ({
  imports: [
    namaComponent,
  ]
})
class AppModule {}
```
Lalu gunakan pada halaman html yang terintegrasi dengan component tersebut, sebagai berikut:

```
<app-nama-component></app-nama-component>
```
