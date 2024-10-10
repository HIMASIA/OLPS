## Cara Clone Repositori

Ikuti langkah-langkah di bawah ini untuk *clone* repositori ini ke komputer lokal kamu:

1. **Salin URL Repositori**
   
URL repositori ini adalah:

      https://github.com/HIMASIA/FE-OLP.git

2. **Buka Terminal atau Git Bash**

jika menggunakan vs code bisa tekan [ctrl + shift + `]

3. **Clone Repositori**

Jalankan perintah berikut untuk menyalin repositori ini ke komputer lokal kamu:

      git clone https://github.com/HIMASIA/FE-OLP.git

Setelah proses clone selesai, masuk ke direktori proyek dengan perintah:

      cd FE-OLP

# Cara Melakukan Push Perubahan

   Setelah melakukan perubahan pada proyek, ikuti langkah-langkah berikut untuk mengirim perubahan tersebut ke repositori GitHub:
    
   Gunakan perintah berikut untuk melihat perubahan apa saja yang sudah dilakukan pada file proyek:
    
      git status

   Buat Branch baru
   
      git checkout -b fitur-baru 
      
   ----> (fitur-baru = nama branch yang sesuai dengan perubahan ex = modify-nav)
    
      git add .

   Buat keterangan commit yang jelas
    
      git commit -m "Menambahkan fitur baru"

   Push Perubahan yang sudah kamu buat :
    
      git push origin fitur-baru
   
   ----> (sesuaikan dengan nama branch yang kamu buat)

   Tarik Jika terjadi konflik 
   
      git pull origin main


