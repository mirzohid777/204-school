const studentsData = [
  {
    id: "AB1234567",
    name: "Sherzod",
    surname: "Abdullayev",
    birthDate: "30.05.2009",
    address: "Yashnabot Birlashgan",
    parentName: "Maxmudova Dilbar",
    parentSurname: "Maxmudov Rasuljon",
    homePhone: "+998 97-100-30-16",
    photo: "S",
  },
  {
    id: "AB2345678",
    name: "Navro'z",
    surname: "Alisherov",
    birthDate: "26.03.2009",
    address: "Yashnabot Tuman",
    parentName: "Marufjoniva Dilrabo",
    parentSurname: "Maminov Farhodbek",
    homePhone: "+998 99-180-07-10",
    photo: "N",
  },
  {
    id: "AB3456789",
    name: "Fuzeil",
    surname: "Arsenov",
    birthDate: "30.04.2009",
    address: "Aviasozlar 3-7-17",
    parentName: "Jurayeva Dilnoza",
    parentSurname: "",
    homePhone: "+998 50-706-39-013",
    photo: "F",
  },
  {
    id: "AB4567890",
    name: "Rahmatulloh",
    surname: "Boymirzaev",
    birthDate: "25.06.2009",
    address: "Toshkent sh. Parkent 448-50-honadan",
    parentName: "Xoshmurodova Barno",
    parentSurname: "Tursunov Urol",
    homePhone: "+998 90-954-84-21",
    photo: "R",
  },
  {
    id: "AB5678901",
    name: "Davlatova",
    surname: "Laziza",
    birthDate: "23.12.2009",
    address: "Olmoz 76-77-15g 6-honadon",
    parentName: "Davlatova Dilafruz",
    parentSurname: "Davlatov Hatib",
    homePhone: "+998 99-840-59-94",
    photo: "L",
  },
  {
    id: "AB6789012",
    name: "Mirg'olib",
    surname: "Gofurov",
    birthDate: "05.11.2009",
    address: "Aviasozlar 2 58-uy",
    parentName: "Tosheva Gulchexra",
    parentSurname: "",
    homePhone: "+998 90-124-81-87",
    photo: "M",
  },
  {
    id: "AB7890123",
    name: "Nozanin",
    surname: "Ismoilova",
    birthDate: "04.08.2009",
    address: "Lisunova 4-35-69 uy",
    parentName: "Ismoilova Nodira",
    parentSurname: "Qurbonov Sarvar",
    homePhone: "+998 90-124-81-87",
    photo: "N",
  },
  {
    id: "AB8901234",
    name: "Jamshid",
    surname: "Isomiddinov",
    birthDate: "26.08.2009",
    address: "Aviasozlar 4-2",
    parentName: "Safarova Gulfera",
    parentSurname: "",
    homePhone: "+998 91-119-90-75",
    photo: "J",
  },
  {
    id: "AB9012345",
    name: "Temur",
    surname: "Jalolov",
    birthDate: "05.10.2009",
    address: "Yshnabot CHigil 11 uy",
    parentName: "Jabbarova  Rajabibi",
    parentSurname: "Majidov Hasan",
    homePhone: "+998 99-487-73-33",
    photo: "T",
  },
  {
    id: "AB0123456",
    name: "Shohsafar",
    surname: "Jarqinov",
    birthDate: "01.02.2010",
    address: "Parkent ko'chasi 31 uy",
    parentName: "Sultonova Manzura",
    parentSurname: "Sultonov Komil",
    homePhone: "+998 90-032-17-75",
    photo: "SH",
  },
  {
    id: "AB1357924",
    name: "Komil",
    surname: "Komiljonov",
    birthDate: "23.12.2008",
    address: "Tuzel donishmand 1-1",
    parentName: "Komiljonova Nozima",
    parentSurname: "Komiljonov Ubaydullo'",
    homePhone: "+998 99-805-30-34",
    photo: "K",
  },
  {
    id: "AB2468013",
    name: "Azim",
    surname: "Kamilov",
    birthDate: "01.08.2009",
    address: "Navruzobod 45-13",
    parentName: "Turaqulova Dilshoda",
    parentSurname: "Turaqulov Sherzod",
    homePhone: "+998 97-002-17-87",
    photo: "A",
  },
  {
    id: "AB3579135",
    name: "Nodirber",
    surname: "Naimov",
    birthDate: "22.06.2009",
    address: "Qorasuv 13-87",
    parentName: "Xusinova Fotima",
    parentSurname: "Sadullayiv Nematjon",
    homePhone: "+998 99-177-35-57",
    photo: "N",
  },
  {
    id: "AB4680246",
    name: "Mehriniso",
    surname: "Normuminova",
    birthDate: "22.01.2009",
    address: "Qorasuv 29-35-uy",
    parentName: "Fayzeyiva Maftuna",
    parentSurname: "Turdimurodov Nurillo",
    homePhone: "+998 93-819-77-01",
    photo: "M",
  },
  {
    id: "AB5791357",
    name: "Azimjon",
    surname: "Normurodov",
    birthDate: "06.10.2009",
    address: "Yashnabot Parvoz 71-46",
    parentName: "Mahamatqulova Nargiza",
    parentSurname: "Berdiyorov G'ayrat",
    homePhone: "+998 91-788-20-79",
    photo: "A",
  },
  {
    id: "AB6802468",
    name: "Xurshid",
    surname: "Omonqulov",
    birthDate: "07.01.2009",
    address: "Aviasozlar 2.6-42 uy",
    parentName: "Xudoyberdiva sh",
    parentSurname: "Umirzoqov Farxod",
    homePhone: "+998 95-045-48-44",
    photo: "X",
  },
  {
    id: "AB7913579",
    name: "Bexruz",
    surname: "Qudratov",
    birthDate: "20.06.2009",
    address: "Aviasozlar 4-45-15",
    parentName: "Ubaydullaiva Nodira",
    parentSurname: "Allanazarov Boboxon",
    homePhone: "+998 90-009-99-40",
    photo: "B",
  },
  {
    id: "AB8024680",
    name: "Zulhumor",
    surname: "Raximova",
    birthDate: "23.05.2010",
    address: "Yashnabot Beshariq 4-tor 9-uy",
    parentName: "Rahimova Malika",
    parentSurname: "Rahimov Lutfulla",
    homePhone: "+998 94-657-89-01",
    photo: "Z",
  },
  {
    id: "AB9135791",
    name: "Gulhayo",
    surname: "Ro'ziyeva",
    birthDate: "14.10.2009",
    address: "Aviasozlar 4-20-37 uy",
    parentName: "Pirimova Dilbar",
    parentSurname: "Ochilov O'tkir",
    homePhone: "+998 99-334-82-60",
    photo: "G",
  },
  {
    id: "AB0246802",
    name: "Jasmina",
    surname: "Samiyeva",
    birthDate: "18.03.2010",
    address: "Yashnabot qorasuv 29-27 uy",
    parentName: "Nosirova Gulnoza",
    parentSurname: "Izzatov Umidjon",
    homePhone: "+998 93-336-26-13",
    photo: "J",
  },
  {
    id: "AB1357913",
    name: "Xadicha",
    surname: "Shavqiyeva",
    birthDate: "20.07.2009",
    address: "Aviasozlar 4-4-5",
    parentName: "Ataboyeva Muhtaram",
    parentSurname: "Malikov Alisher",
    homePhone: "+998 93-590-09-21",
    photo: "X",
  },
  {
    id: "AB2468024",
    name: "Mirzohid",
    surname: "Shermanov",
    birthDate: "03.02.2010",
    address: "qorasuv 4-12 uy",
    parentName: "Eshmurodova Malohat",
    parentSurname: "Shermanov Akrom",
    homePhone: "+998 90-354-44-99",
    photo: "M",
  },
  {
    id: "AB3579136",
    name: "Muxlisa",
    surname: "To'rayiva",
    birthDate: "16.03.2009",
    address: "Aviasozlar 1-116-14 uy",
    parentName: "Nuroliyeva Dilbar",
    parentSurname: "Godoev Akmal",
    homePhone: "+998 90-909-58-19",
    photo: "M",
  },
  {
    id: "AB4680247",
    name: "Sug'diyona",
    surname: "To'rayiva",
    birthDate: "18.06.2009",
    address: "Aviasozlar 115-140 uy",
    parentName: "Rajabova Dildora",
    parentSurname: "Godeov Mansur",
    homePhone: "+998 94-048-48-60",
    photo: "S",
  },
  {
    id: "AB5791358",
    name: "Ulug'bek",
    surname: "Ubaydullayiv",
    birthDate: "04.02.2009",
    address: "Yashnabot Beshariq 4-tor 9-uy",
    parentName: "Rahimova Malika",
    parentSurname: "Rahimova Dilshod",
    homePhone: "+998 94-657-90-30",
    photo: "U",
  },
  {
    id: "AB6802469",
    name: "Nursulton",
    surname: "Zulfiqorov",
    birthDate: "23.09.2009",
    address: "Aviasozlar 4-36-58",
    parentName: "Aripbayevna Guljamol",
    parentSurname: "To'ychiyev Farxod",
    homePhone: "+998 94-616-20-85",
    photo: "N",
  },
  {
    id: "AB7913580",
    name: "Shahzoda",
    surname: "Athamova",
    birthDate: "30.04.2009",
    address: "Aviasozlar 1-17-27",
    parentName: "Irgashiva Sevara",
    parentSurname: "Shakirov Sardor",
    homePhone: "+998 99-882-03-37",
    photo: "Sh",
  },
  {
    id: "AB7913510",
    name: "Sevinch",
    surname: "Shavkatova",
    birthDate: "21.04.2009",
    address: "Aviasozlar 1-13-115",
    parentName: "Tursaxatova Gulsara",
    parentSurname: "Sharapov Akmal",
    homePhone: "+998 99-729-85-13",
    photo: "S",
  },
  {
    id: "AB7913581",
    name: "Sunnat",
    surname: "Sobirov",
    birthDate: "22.10.2009",
    address: "Aviasozlar 3-3-45",
    parentName: "Xudayarova Erkinoy",
    parentSurname: "Shomurodov Ulug'bek",
    homePhone: "+998 90-920-62-46",
    photo: "S",
  },
];

let currentStudents = [...studentsData];

function renderStudents(students) {
  const grid = document.getElementById("studentsGrid");

  if (students.length === 0) {
    grid.innerHTML = `
      <div class="no-results" style="text-align: center; padding: 60px 20px; color: #64748b;">
        <div style="font-size: 48px; margin-bottom: 20px;">🏫</div>
        <h3 style="font-size: 24px; margin-bottom: 10px;">Hech qanday o'quvchi topilmadi</h3>
        <p>Qidiruv so'zini o'zgartiring yoki filterni qaytadan sozlang</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = students
    .map(
      (student, index) => `
        <div class="student-card" onclick="showStudentDetails('${student.id}')">
          <div class="student-info">
            <span class="student-number">${index + 1}.</span>
            <span class="student-name">${student.name} ${student.surname}</span>
          </div>
          <span class="student-arrow">›</span>
        </div>
      `
    )
    .join("");
}

function searchStudents() {
  const searchTerm = document
    .getElementById("searchInput")
    .value.toLowerCase()
    .trim();
  const sortBy = document.getElementById("sortSelect").value;

  let filteredStudents = studentsData;

  if (searchTerm) {
    filteredStudents = studentsData.filter(
      (student) =>
        student.name.toLowerCase().includes(searchTerm) ||
        student.surname.toLowerCase().includes(searchTerm) ||
        `${student.name} ${student.surname}`
          .toLowerCase()
          .includes(searchTerm) ||
        student.id.toLowerCase().includes(searchTerm)
    );
  }

  filteredStudents.sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name.localeCompare(b.name);
      case "id":
        return a.id.localeCompare(b.id);
      case "birth":
        const yearA = parseInt(a.birthDate.split(".")[2]);
        const yearB = parseInt(b.birthDate.split(".")[2]);
        return yearA - yearB;
      default:
        return 0;
    }
  });

  currentStudents = filteredStudents;
  renderStudents(currentStudents);
}

function resetSearch() {
  document.getElementById("searchInput").value = "";
  document.getElementById("sortSelect").value = "name";
  currentStudents = [...studentsData];
  renderStudents(currentStudents);
}

function calculateAge(birthDate) {
  const [day, month, year] = birthDate.split(".").map(Number);
  const birth = new Date(year, month - 1, day);
  const today = new Date();

  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }

  return age;
}

function showStudentDetails(studentId) {
  const student = studentsData.find((s) => s.id === studentId);
  if (!student) return;

  const modalBody = document.getElementById("modalBody");
  modalBody.innerHTML = `
    <div class="modal-student-info">
      <div class="modal-avatar">${student.photo}</div>
      <div class="modal-name">${student.name} ${student.surname}</div>
      <div class="modal-id">ID: ${student.id}</div>
    </div>

    <div class="info-grid">
      <div class="info-section">
        <div class="info-title">👤 Shaxsiy ma'lumotlar</div>
        <div class="info-item">
          <span class="info-label">To'liq ismi</span>
          <div class="info-value">${student.name} ${student.surname}</div>
        </div>
        <div class="info-item">
          <span class="info-label">ID raqami</span>
          <div class="info-value">${student.id || "Kiritilmagan"}</div>
        </div>
        <div class="info-item">
          <span class="info-label">Tug'ilgan sanasi</span>
          <div class="info-value">${student.birthDate}</div>
        </div>
        <div class="info-item">
          <span class="info-label">Yoshi</span>
          <div class="info-value">${calculateAge(student.birthDate)} yosh</div>
        </div>
      </div>

      <div class="info-section">
        <div class="info-title">🏠 Uy ma'lumotlari</div>
        <div class="info-item">
          <span class="info-label">Uy manzili</span>
          <div class="info-value">${student.address || "Kiritilmagan"}</div>
        </div>
        <div class="info-item">
          <span class="info-label">Uy telefoni</span>
          <div class="info-value">${student.homePhone}</div>
        </div>
      </div>

      <div class="info-section" style="grid-column: 1/-1;">
        <div class="info-title">👨‍👩‍👧‍👦 Ota-ona ma'lumotlari</div>
        <div class="info-item">
          <span class="info-label">Ona ismi</span>
          <div class="info-value">${student.parentName}</div>
        </div>
        <div class="info-item">
          <span class="info-label">Ota ismi</span>
          <div class="info-value">${student.parentSurname}</div>
        </div>
      </div>
    </div>
  `;

  document.getElementById("studentModal").style.display = "block";
}

function closeModal() {
  document.getElementById("studentModal").style.display = "none";
}

document
  .getElementById("searchInput")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      searchStudents();
    }
  });

document.getElementById("searchInput").addEventListener("input", function () {
  if (this.value.trim() === "") {
    resetSearch();
  }
});

document
  .getElementById("sortSelect")
  .addEventListener("change", searchStudents);

document.getElementById("studentModal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeModal();
  }
});

renderStudents(currentStudents);

const translations = {
  uz: {
    schoolTitle: "204 MAKTAB 10 E",
    studentList: "Bolalar Ro'yxati",
    searchPlaceholder: "Ism yoki familiya kiriting...",
    sortName: "Ism bo'yicha",
    sortId: "ID bo'yicha",
    sortBirth: "Tug'ilgan yil bo'yicha",
    btnSearch: "Qidirish",
    btnClear: "Tozalash",
    modalTitle: "O'quvchi ma'lumotlari",
  },
  ru: {
    schoolTitle: "204 ШКОЛА 10 Е",
    studentList: "Список детей",
    searchPlaceholder: "Введите имя или фамилию...",
    sortName: "По имени",
    sortId: "По ID",
    sortBirth: "По году рождения",
    btnSearch: "Поиск",
    btnClear: "Очистить",
    modalTitle: "Информация об ученике",
  },
  en: {
    schoolTitle: "204 SCHOOL 10 E",
    studentList: "Students List",
    searchPlaceholder: "Enter first or last name...",
    sortName: "By Name",
    sortId: "By ID",
    sortBirth: "By Birth Year",
    btnSearch: "Search",
    btnClear: "Clear",
    modalTitle: "Student Information",
  },
};

function changeLanguage() {
  const lang = document.getElementById("languageSelect").value;

  document.querySelectorAll("[data-translate]").forEach((el) => {
    const key = el.getAttribute("data-translate");
    if (translations[lang] && translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });

  document.querySelectorAll("[data-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-placeholder");
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute("placeholder", translations[lang][key]);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  changeLanguage();
});
