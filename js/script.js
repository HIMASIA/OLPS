import { anggota } from './dataAnggota.js';

const teamContainer = document.querySelector('.team_container');

// Fungsi untuk membuat kartu anggota
function createCard(member) {
  return `
    <div class="col-lg-3 col-sm-6">
      <div class="box">
        <div class="img-box">
          <img src="${member.img}" class="img1" alt="${member.name}" />
        </div>
        <div class="detail-box">
          <h5>${member.name}</h5>
          <p>${member.divisi}</p>
        </div>
        <div class="social_box">
          <a href="${member.linkedin}" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
          <a href="${member.git}" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
          <a href="${member.ig}" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>
  `;
}

// Looping data anggota dan menambahkannya ke team_container
anggota.forEach((member) => {
  teamContainer.innerHTML += createCard(member);
});
