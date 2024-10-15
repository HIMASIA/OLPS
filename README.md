## Cara Clone Repositori

Ikuti langkah-langkah di bawah ini untuk *clone* repositori ini ke komputer lokal kamu:

1. **Salin URL Repositori**
   
URL repositori ini adalah:

  https://github.com/HIMASIA/OLPS.git

2. **Buka Terminal atau Git Bash**

jika menggunakan vs code bisa tekan [ctrl + shift + `]

3. **Clone Repositori**

Jalankan perintah berikut untuk menyalin repositori ini ke komputer lokal kamu:

      git clone https://github.com/HIMASIA/OLPS.git

Setelah proses clone selesai, masuk ke direktori proyek dengan perintah:

      cd OLPS

# Cara Melakukan Push Perubahan

   Setelah melakukan perubahan pada proyek, ikuti langkah-langkah berikut untuk mengirim perubahan tersebut ke repositori GitHub:
    
   Gunakan perintah berikut untuk melihat perubahan apa saja yang sudah dilakukan pada file proyek:
    
      git status
1. buat branch baru di project **local** kamu dengan perintah
    ```
    git checkout -b <nama_branch>
    ```

    Dengan format penamaan : 
    \<tipe>/\<task>

    tipe commit :
    - **feat**: tipe feat digunakan ketika develope fitur
    - **fix**: digunakan untuk fixing bug atau issue
    - **core**: digunakan untuk core apps yang tidak berkaitan dengan task di scrum board
    - **refactor**: digunakan untuk optimasi code tanpa ada logical algorithm yang berubah
 Contoh 1 :
    ```
    git checkout -b feat/create-and-integrate-todo-list-page
    
    ```

    Contoh 2 :
    ```
    git checkout -b refactor/optimazion-logic-on-login-api
    
    ```

    Contoh 3 :
    ```
    git checkout -b fix/fixing-bug-in-todo-api
    
    ```

    Implementasi :
    ![Create New Branch](./images/new-branch.png)

1. setelah branch dibuat, silahkan lanjut developing feature sesuai dengan task

1. setelah fitur yang dibuat selesai, silahkan commit dulu perubahan kalian secara local dengan cara
    - add ke staging area seluruh file yang kalian ubah dengan cara :
    ```
    git add .
    ```
    - commit perubahan dengan cara dan dengan pesan commit yang disesuaikan dengan fitur yang kalian buat :
    ```
    git commit -m "<pesan_commit>"
    ```

    Contoh 1 : 
    ```
    git commit -m "feat: create and integrate todo list page"
    ```

    Contoh 2 :
    ```
    git commit -m "refactor: optimazion logic on login api"
    
    ```

    Contoh 3 :
    ```
    git commit -b "fix: fixing bug in todo api"
    
    ```

    Implementasi : 
    ![Commit Changes](./images/commit.png)

1. Push ke repo 
    - Untuk push ke repo, gunakan command berikut :
    ```
    git push origin <nama_branch>
    ```

    Contoh 1 :
    ```
    git push origin feat/create-and-integrate-todo-list-page
    
    ```

    Contoh 2 :
    ```
    git push origin refactor/optimazion-logic-on-login-api
    
    ```

    Contoh 3 :
    ```
    git push origin fix/fixing-bug-in-todo-api
    
    ```

    Implementasi :
    ![Push ke Repo](./images/push.png)

1. Setelah branch di push ke repo, buat pull request dan pastikan hal hal berikut :
    - Add diri sendiri sebagai assignee
    - Pastikan tujuan branch adalah branch **development**
    - Add user (@catursetyono) sebagai reviewer
    - jika code yang kalian push berkaitan dengan task yang ada di scrum board, koneksikan pull request kalian dengan task di scrum board

    Implementasi : 
    1. Buat pull request dengan klik tombol create di menu seperti dibawah :
    ![Buat PR](./images/pr-1.png)
    1. ubah branch tujuan menjadi **development** dan branch asal yaitu branch yang kalian kerjakan
    ![Buat PR](./images/pr-2.png)
    1. tambahkan reviewer ke @catursetyono dan asignee adalah kalian sebagai yang mengerjakan
    ![Buat PR](./images/pr-3.png)
    1. koneksikan pull request ke task yang kalian selesaikan sehingga task tersebut otomatis selesai di scrum boardnya
    ![Buat PR](./images/pr-4.png)
    1. sehingga contoh hasil akhir kurang lebih akan seperti ini :
    ![Buat PR](./images/pr-5.png)

### Happy Hacking Guys!

  
