import Tools1 from "../src/assets/tools/js.png";
import Tools2 from "../src/assets/tools/typescript.png";
import Tools3 from "../src/assets/tools/php.png";
import Tools4 from "../src/assets/tools/tailwind.png";
import Tools5 from "../src/assets/tools/bootstrap.png";
import Tools6 from "../src/assets/tools/reactjs.png";
import Tools7 from "../src/assets/tools/vuejs.png";
import Tools8 from "../src/assets/tools/nodejs.png";
import Tools9 from "../src/assets/tools/expressjs.png";
import Tools10 from "../src/assets/tools/adonis.png";
import Tools11 from "../src/assets/tools/laravel.png";
import Tools12 from "../src/assets/tools/ci.png";
import Tools13 from "../src/assets/tools/mysql.png";
import Tools14 from "../src/assets/tools/github.png";
import Tools15 from "../src/assets/tools/vscode.png";
import Tools16 from "../src/assets/tools/laragon.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Javascript",
    ket: "language",
    dad: "100",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "Typescript",
    ket: "language",
    dad: "200",
    url: "https://www.typescriptlang.org/",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "PHP",
    ket: "language",
    dad: "300",
    url: "https://www.php.net/",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "framework",
    dad: "400",
    url: "https://tailwindcss.com/",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "framework",
    dad: "500",
    url: "https://getbootstrap.com/",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "React JS",
    ket: "framework",
    dad: "600",
    url: "https://reactjs.org/",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Vue JS",
    ket: "framework",
    dad: "700",
    url: "https://vuejs.org/",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Node JS",
    ket: "runtime",
    dad: "800",
    url: "https://nodejs.org/",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Express JS",
    ket: "framework",
    dad: "900",
    url: "https://expressjs.com/",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Adonis JS",
    ket: "framework",
    dad: "1000",
    url: "https://adonisjs.com/",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Laravel",
    ket: "framework",
    dad: "1100",
    url: "https://laravel.com/",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "CodeIgniter",
    ket: "framework",
    dad: "1200",
    url: "https://codeigniter.com/",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "MySQL",
    ket: "database",
    dad: "1300",
    url: "https://www.mysql.com/",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "Github",
    ket: "repository",
    dad: "1200",
    url: "https://github.com/",
  },
  {
    id: 16,
    gambar: Tools15,
    nama: "Visual Studio Code",
    ket: "codeEditor",
    dad: "1500",
    url: "https://code.visualstudio.com/",
  },
  {
    id: 16,
    gambar: Tools16,
    nama: "Laragon",
    ket: "devEnv",
    dad: "1600",
    url: "https://laragon.org/",
  },
];

import Proyek1 from "../src/assets/projects/refoodapp.png";
import Proyek2 from "../src/assets/projects/hackjog.png";
import Proyek3 from "../src/assets/projects/crime-detection.png";
import Proyek4 from "../src/assets/projects/ratetol.png";
import Proyek5 from "../src/assets/projects/clone_trello.png";
import Proyek6 from "../src/assets/projects/digital_library.png";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Refood App",
    desk: "Refood app adalah apilikasi Pemesanan Makanan Berbasis website dengan firut Rekomendasi Menu Makanan",
    tools: [
      "Javascript",
      "Node JS",
      "React Js",
      "Tailwind CSS",
      "Express",
      "MySQL",
    ],
    dad: "200",
    url_demo: "",
    url_project: "https://github.com/muhammadisa-n/fe-tugas-akhir",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Hackjog (Internship Project)",
    desk: "Hackjog adalah senbuah website untuk memberikan informasi tentang Hackjog Event",
    tools: ["Javascript", "Node JS", "Vue Js", "Express JS", "MySQL"],
    dad: "300",
    url_demo: "",
    url_project: "https://github.com/muhammadisa-n/hackjog-landingpage",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Crime Detection",
    desk: "Crime Detection adalah aplikasi berbasis mobile untuk mendeteksi jenis kejahatan",
    tools: ["Python", "Flask", "Mysql"],
    dad: "400",
    url_demo: "",
    url_project: "https://github.com/muhammadisa-n/crime-detection-api",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Rate Tol",
    desk: "Rate Tol adalah aplikasi berbasis website untuk mendeteksi tarif tol berdasrkan jenis kendaraan",
    tools: ["Python", "Flask", "Mysql"],
    dad: "500",
    url_demo: "",
    url_project: "https://github.com/muhammadisa-n/RateTol-Flask",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Clone Trello",
    desk: "Membuat website seperi Trello",
    tools: ["Javascript", "Node JS", "React", "Express JS", "MySQL"],
    dad: "600",
    url_demo: "",
    url_project: "https://github.com/muhammadisa-n/clone-trello-app",
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "Digital Library",
    desk: "Webiste ini merupakan website manajemen perpustakaan",
    tools: ["PHP", "Laravel", "Bootstrap", "MySQL"],
    dad: "700",
    url_demo: "https://dev.muhammad-isa.my.id/library",
    url_project: "https://github.com/muhammadisa-n/Digital-Library-Laravel-10",
  },
];
