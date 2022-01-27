import todo from "../img/portImages/todo.png";
import js1 from "../img/portImages/adivina-el-numero.png";
import candy from "../img/portImages/candy-machine.png";
import old from "../img/portImages/oldanime.png";
import mr from "../img/portImages/mr-empanada.png";
import under from "../img/portImages/under-construction.png";

const portfolios = [
  {
    id: 1,
    category: "React",
    image: todo,
    link1: "https://github.com/Filipchi/Todo-app",
    link2: "https://filipchi.github.io/Todo-app/",
    title: "ToDo - App",
    text: "A basic ToDo app using React.js",
  },
  {
    id: 2,
    category: "Javascript",
    image: js1,
    link1: "https://github.com/Filipchi/AdivinarNumero",
    link2: "https://filipchi.github.io/AdivinarNumero/",
    title: "¡Adivina el Número!",
    text: "A basic game using JavaScript",
  },
  {
    id: 3,
    category: "Mobile",
    image: old,
    link1: "https://gitlab.com/g2e7/oldanime1/-/tree/master",
    link2: "https://gitlab.com/g2e7/oldanime1/-/tree/master",
    title: "Oldanime",
    text: "Mobile App Streaming focused on Anime",
  },
  {
    id: 4,
    category: "Vue",
    image: mr,
    link1: "https://github.com/Grupo1postventas/MrEmpanada-MEVN",
    link2: "https://mrempanada2.herokuapp.com/",
    title: "Mr. Empanada",
    text: "Web application using MEVN Stack",
  },
  {
    id: 5,
    category: "Java",
    image: candy,
    link1: "https://github.com/Filipchi/CandyMachine_code",
    link2: "https://filipchi.github.io/CandyMachine_page/",
    title: "Candy Machine",
    text: "OOP practice in Java",
  },
  {
    id: 6,
    category: "Flask",
    image: under,
    link1: "https://github.com/ppjcode",
    link2: "https://github.com/ppjcode",
    title: "BirdPy",
    text: "Application using Flask",
  },
];

export default portfolios;
