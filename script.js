// Actualización de idioma por botón
const flagIcon = document.getElementById('flag-icon');
let currentLang = 'es';
document.getElementById('language-toggle').addEventListener('click', () => {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    updateLanguage(currentLang);
});

// Textos en diferentes idiomas
let currentEducationAnimationText = 0;
const EducationAnimationTexts = {
    es:{
        0: "",
        1: "Estudié ingeniería informática en la USAL, desarrollé competencias fundamentales en programación, resolución de problemas y trabajo en equipo...",
        2: "Luego cursé un master de Desarrollo de Videojuegos en la UCM, motivado por unir mi formación técnica con mi vocación personal...",
        3: "¡Y ahora me siento preparado y dispuesto a dar forma a estos mundos virtuales a través de código!",
    },
    en: {
        0: "",
        1: "I studied computer engineering at USAL, I developed fundamental skills in programming, problem solving and teamwork...",
        2: "Then I studied a Development games master's degree at UCM, motivated by combining my technical training with my personal vocation...",
        3: "And now I feel ready and willing to shape these virtual worlds through code!",
    }
}

const ProjectTranslationTexts = {
    es: {
        CasoGrave: {
            0: "Este videojuego fue el primero de los que hice, fue el que me animó a empezar a hacer videojuegos de manera activa " +
                "y cada vez más profesional.\nEste videojuego es el resultado de la asignatura \"Animación Digital\" en la carrera de " +
                "Ingeniería Informática, en la cual conseguí una matrícula de honor.",
            1: "Conseguí meter muchos easter eggs dentro del videojuego, uno de ellos era por si algún colega quería copiarme la idea " +
                "o el mapa del juego, ya que se me ocurrió poner mi nombre y apellidos como el propio mapa.",
            2: "Hay otros muchos easter eggs, además de mucho cariño, ya que fue, y sigue siendo el juego del que más orgulloso estoy.",
            3: "Es un plataformas sencillo, donde controlas a una chica que puede controlar la gravedad en la cueva gracias a un dispositivo" +
                " que se parece a una pistola (es una pistola). \nTiene unas cuantas mecánicas, como que al disparar en una pared atrae los objetos," +
                " tiene coleccionables en forma de mejora para el personaje y no es demasiado largo de pasar, pero hay alguna zona de parkour exigente.\n" +
                "Si te animas a probarlo te dejo el enlace a itch.io!",
            4: "ENLACE A ITCH.IO"
        },
        PrimeroDeClase: {
            0: "Esto es mi trabajo de fin de grado de la carrera de Ingeniería Informática. Es un RPG con preguntas de informática reales " +
                "para facilitar el estudio del temario a las personas que le gustan los videojuegos y les cuesta aprender por otros métodos.",
            1:  "Este proyecto supuso un logro, ya que conseguí sincronizar una página web con una base de datos y el juego, de manera que " +
                "puedas iniciar sesión dentro de la página web y enviar tus propias preguntas con su respuesta correcta para que " +
                "posteriormente aparezcan en el juego.\nNo sin realizar un análisis previo de la pregunta por uno de los admins, " +
                "que no queremos que esto se llene de basura.",
            2:  "Y para cumplimentar la parte de RPG también puedes enviar eventos personalizados que modifiquen valores internos del " +
                "jugador, el cual deberá tenerlos controlados si quiere ganar la partida, ya que el reto del juego es llegar a " +
                "graduarse sin suspender ningún examen.",
            3: "Este es el videojuego que peor quedó en estética, ya que tuve que utilizar recursos gratuitos y IA para el arte del juego, " +
                "además que no pude dedicarle todo el tiempo que quise a mejorar el videojuego, ya que tenía que hacer la página web y " +
                "manejar toda la sincronización con la base de datos.",
            4:  "Te dejo el link de la página por si le quieres echar un vistazo:",
            5:  "ENLACE A LA PÁGINA"
        },
        TheAbyss: {
            0: "Este fue mi primer videojuego echo en 2 semanas para una GameJam, en este caso para la \"Confounding Calendar\" de itch.io.",
            1: "Es un escape room donde controlas a un pez con botas dentro de una mansión tenebrosa.",
            2: "El jugador tiene la posibilidad de cambiar entre el color de la luz que su pez genera, mostrando diferentes versiones " +
                "del sitio en el que se encuentra, y utilizar su ingenio para resolver un puzle sencillo y conseguir salir.",
            3: "Fue un videojuego divertido de hacer, ya que me encanta llevar la ambientación de horror a un videojuego.",
            4: "Este fue el primer videojuego que hice con un equipo, donde aprendí a repartir tareas, recursos, tiempo y a " +
                "tratar con más personas para poder sacar algo adelante.",
            5: "ENLACE A ITCH.IO"
        },
        TowerOfBubble: {
            0: "Videojuego de estrategia tower defense creado en la Global Game Jam en 3 días.\nSiguiendo los requerimientos de la JAM " +
                "teníamos que hacer un juego con temática de \"Burbujas\", y se decidió tomar a los Amish como personajes dentro " +
                "de una burbuja social que defienden sus creencias mediante una torre que los científicos quieren destrozar.",
            1: "Tiene una curva de dificultad elevada, ya que por cada oleada vienen más enemigos y más fuertes, dependiendo " +
                "únicamente de ti y tu movilidad para mejorar a tus seguidores y hacer frente a estos enemigos.",
            2: "Aquí le empecé a coger cariño a hacer juegos en Jams, ya que es una experiencia de desarrollo muy rápida donde " +
                "consigues tener un proyecto viable en poco tiempo y puedes compartir esta experiencia con tus compañeros.",
            3: "Logramos sacar este juego entre 6 personas y estuvimos casi hasta el último momento hasta lograr algo que mantuvo " +
                "a las personas que se atrevieron a probarlo enganchadas para ver quién era el que acababa con mayor puntuación.",
            4: "ENLACE A ITCH.IO"
        },
        JustTwinBeaver: {
            0: "Este proyecto también fue desarrollado con motivo de una Jam, en este caso la \"ComJamOn\" de 2025, cuyo tema era \"Ramas\"",
            1: "El desarrollo de este proyecto fue arduo e irregular, ya que estaba principalmente pensado para las personas del grado de " +
                "videojuegos en lugar de los del máster, ya que caía justo en fecha de una entrega importante, mientras que los del grado " +
                "acababan de terminar los exámenes, pero un compañero y yo nos hinchamos de valor y fuimos a por ello.",
            2: "Es un videojuego para dos jugadores, donde cada uno controla a uno de los dos castores hermanos que quiere mantener a flote " +
                "su presa y destrozar la del otro, recogiendo ramas para fortalecerla o lanzando latas para destrozarla.",
            3: "Es un juego sencillo el cual solo tuvimos 1 día y medio para desarrollar.",
            4: "ENLACE A ITCH.IO"
        },
        Dreadbone: {
            0: "Este es el proyecto desarrollado durante el máster de desarrollo de videojuegos con un equipo de más de 10 personas.",
            1: "Este proyecto es al que más tiempo y esfuerzo he dedicado, consiguiendo aprender mucho de diversas ramas del desarrollo, " +
                "como puede ser el apartado de Tools o Optimizado, que pueden pasar más desapercibidos",
            2: "Este juego se basa en un espíritu que está atado a la isla donde se lleva a cabo el juego. De pronto aparece un explorador " +
                "y el espíritu debe ayudarle a traspasar los diversos peligros que se vaya encontrando para que este le pueda salvar.",
            3: "La jugabilidad se basa en un juego tercera persona con plano cenital, las mecánicas beben un poco de diferentes géneros " +
                "como puede ser Plataformas, Puzle, RPG o estrategia.",
            4: "Ha sido toda una proeza técnica mantener el comportamiento de la IA del explorador para que parezca despistado, pero no " +
                "frustrante para el jugador.",
            5: "Dando lugar a un vertical slice de mundo totalmente nuevo, con una historia rebosante de trasfondo narrativo donde tienes " +
                "que guiar a un personaje que no controlas hasta el final del nivel, logrando crear el ambiente esperado en la mente del " +
                "jugador.",
            6: "ENLACE A STEAM"
        },
        Helltech: {
            0: "Este juego que pretende ser una mezcla entre Doom y Ghostrunner todavía se encuentra en desarrollo",
            1: "Se encuentra en una fase muy temprana de su creación.",
            2: "Este proyecto comenzó como un ejercicio opcional dentro del máster de desarrollo de videojuegos junto con el master de " +
                "diseño de videojuegos para tener la posibilidad de realizar un juego sin la supervisión de los tutores como se hizo " +
                "en el proyecto principal de cada grupo, en mi caso Dreadbone.",
        },
    },
    en: {
        CasoGrave: {
            0: "This video game was the first one I made, it was the one that encouraged me to start making video games actively " +
                "and increasingly professionally.\nThis video game is the result of the \"Digital Animation\" subject in Computers " +
                "Engineering degree, in which I earned a first-class honors.",
            1:  "I managed to include a lot of easter eggs inside the video game, one of the was in case any of my friends wanted to " +
                "copy my idea or the game map, since I decided to include my first and last name as the map itself.",
            2: "There are many other easter eggs, as well as a lot of love, since it was, and continues to be, the game I am most proud of.",
            3: "It's a simple platformer where you control a girl who can control gravity inside of the cave thanks to a device that looks " +
                "like a gun (it is a gun). \nIt has a few mechanics, such as shooting at a wall to attract objects, " +
                "It has collectibles in the form of character upgrades and it's not too long to complete, but there are some challenging parkour sections.\n" +
                "If you're up for it, here's the itch.io link!",
            4: "LINK TO ITCH.IO"
        },
        PrimeroDeClase: {
            0: "This is my final year project for my Computer Engineering degree. It's an RPG with real computing questions " +
                "in order to make studying the course easier for the people who enjoy video games and find it difficult to learn through other methods.\n",
            1:  "This project was an achievement, I managed to synchronize a website with a database and the video game, so you can " +
                "log in a session inside the website and send your own questions with it's correct answer to appear later in the game. \n" +
                "Not before realizing a previous analysis of that question by one of the admins, we don't want this to get filled with garbage.",
            2:  "And to fulfill the RPG part you can also send custom events that modify the player's internal values, which should " +
                "keep under control if the player wants to win the game, since the challenge is to graduate without failing any exam.",
            3:  "This is the game with the worst aesthetic, since I had to use free resources and IA for the game art, " +
                "plus I couldn't dedicate all the time I wanted to improve the game, since I had to make the website and " +
                "manage all the synchronization with the database.",
            4:  "I'll let you the page link if you want to take a look:",
            5:  "LINK TO THE WEB"
        },
        TheAbyss: {
            0: "This was my first video game made in 2 weeks for a GameJam, in this case it was for the \"Confounding Calendar\" from itch.io.",
            1:  "It's an escape room where you control a fish with boots inside of a dark mansion.",
            2:  "The player has the ability to switch between the color of the light that the fish generates, showing different versions " +
                "of the place they are in, and use their intelligence to solve a simple puzzle and escape the mansion.",
            3:  "It was a pleasure game to develop, I love the horror setting inside a video game and making it real.",
            4:  "This was my first video game made with a team, where I learned to distribute tasks, resources, time and " +
                "to treat with people in order to get something forward.",
            5:  "LINK TO ITCH.IO"
        },
        TowerOfBubble: {
            0:  "Strategy tower defense video game made for the Global Game Jam in 3 days.\nFollowing the JAM requirements " +
                "we needed to make a game with \"Bubble\" theme, and it was decided to take Amish as characters inside " +
                "of a social bubble trying to defend their beliefs through a tower that scientists want to destroy.",
            1:  "The game has a very steep difficulty curve, as each wave brings more and stronger enemies, depending " +
                "on only you and your mobility to improve your followers and face these enemies.",
            2:  "At this moment I started to develop a passion for making games in Jams, as it's a very fast development experience where " +
                "you manage to have a viable project in short time and you can share this experience with your colleagues.",
            3:  "We manage to get this game out with six people and we worked almost until the last moment to come up with something " +
                "that kept the player who dared to try the game hooked to see who could finish the game with the highest score.",
            4: "LINK TO ITCH.IO"
        },
        JustTwinBeaver: {
            0:  "This project was also developed with a Jam reason, in this case it was the \"ComJamOn\" from 2025, which the theme was \"Branches\"",
            1:  "The development of this project was hard and irregular, since it was primarily thought to people from the video game degree " +
                "instead of the video game master's degree, it was just in the deadline of an important submission, while the students from the degree " +
                "had just finished their exams, but a classmate and I filled with courage and went for it. ",
            2:  "It's a two players video game, where each one controls one of the twin beavers that wants to keep his dam on float " +
                "and destroy his brother's, taking branches to strengthen it or throwing cans to destroy it.",
            3:  "It's a simple game which we only had 1 day and a half to develop it.",
            4: "LINK TO ITCH.IO"
        },
        Dreadbone: {
            0:  "This is the project developed during the video game development master's degree with a team of more than 10 people.",
            1:  "This project is the one that I dedicate more time and effort, learning a lot of diverse branches of the development, " +
                "such as Tools or Optimization sections, which can go more unnoticed.",
            2:  "This game is about a spirit chained to the island where the game take place. Suddenly an explorer appears, and the spirit " +
                "must help him trespassing diverse dangers he encounters in order to let the explorer save him.",
            3:  "The gameplay is based in a third person with zenithal view, the mechanics take a bit from different genres such as " +
                "Platforms, Puzzle, RPG or Strategy.",
            4:  "It was quite a technical achievement to keep the explorer AI behaviour so he appears clueless, but not frustrating " +
                "to the player.",
            5:  "Taking place a vertical slice of a brand new world, with a history full of narrative background where you need to " +
                "guide a character you don't control until the end of the level, creating just exactly the wanted ambience in the player's mind.",
            6: "LINK TO STEAM"
        },
        Helltech: {
            0:  "This game that pretends to be a mix between Doom and Ghostrunner is still under development.",
            1:  "It's on a very early phase of its creation.",
            2:  "This project started and an optional exercise inside the video game development master's degree along with video game " +
                "design master's degree to have the possibility to make a game without the tutors supervision, as it was done with the " +
                "main project on each group, Dreadbone in my case.",
        },
    }
}

const SkillsTranslationTexts = {
    es: {
        0: "Creatividad",
        1: "Iniciativa",
        2: "Mentalidad de crecer",
        3: "Capacidad de aprender",
        4: "Diligencia",
        5: "Dinamismo",
        6: "Amabilidad",
        7: "Simpatía",
        8: "Curiosidad",
        9: "Proactividad",
        10: "Manejo de herramientas informáticas",
        11: "Capacidad de trabajar en equipo",
    },
    en: {
        0: "Creativity",
        1: "Initiative",
        2: "Grow up mentality",
        3: "Ability to learn",
        4: "Diligence",
        5: "Dynamism",
        6: "Kindness",
        7: "Sympathy",
        8: "Curiosity",
        9: "Proactivity",
        10: "Computing tools handling",
        11: "Ability to do teamwork",
    }
};

const translations = {
    es: {
        flag_name: " Español",
        flag: "assets/spainflag.png",
        alt: "Español",
        name_desc: "Desarrollador de videojuegos",
        inicio: "Inicio",
        sobre_mi: "Sobre mí",
        educacion: "Educación",
        proyectos: "Proyectos",
        habilidades: "Habilidades",
        contacto: "Contacto",
        contacto_mail_text: "¿Quieres contactar conmigo? ¡Mándame un correo!",
        contacto_mail_button: "Enviar email",
        contacto_CV_text: "¿Quieres saber un poco más de mi? ¡Échale un vistazo a mi CV!",
        contacto_CV_espanol: "CV en español",
        contacto_CV_ingles: "CV en inglés",
        footer_text: "© 2025 Víctor Herrero Gil | Desarrollador de videojuegos",
        title_about_me: "Sobre mí",
        title_education: "Educación",
        title_projects: "Proyectos",
        title_abilities: "Habilidades",
        title_contact: "Contacto",
        about_me_text: "\n" +
            "Soy un apasionado por el mundo de los videojuegos, tanto en su faceta de jugador como en la de creador.\n" +
            "\n" +
            "Desde siempre me ha fascinado la capacidad que tienen los videojuegos para construir mundos, contar historias y generar experiencias únicas, y esa pasión ha sido el motor que ha guiado todo mi recorrido académico y profesional.\n" +
            "\n" +
            "A lo largo de mi trayectoria he trabajado en diversos proyectos de videojuegos, lo que me ha permitido ocupar diferentes puestos y comprender de manera global todo el ciclo de desarrollo.\n" +
            "\n" +
            "Esta experiencia me ha dado no solo una visión integral del trabajo en equipo multidisciplinar, sino también la capacidad de adaptarme a distintos roles y aportar soluciones creativas y técnicas según las necesidades del proyecto.\n" +
            "\n" +
            "Además de mi faceta técnica, he tenido la oportunidad de participar en proyectos de cara al público, como ser presentador en galas benéficas, experiencias que me han ayudado a desarrollar habilidades de comunicación, seguridad en la expresión oral y capacidad para conectar con la audiencia, cualidades que también aplico en entornos profesionales y de trabajo colaborativo.\n" +
            "\n" +
            "Me defino como una persona trabajadora, motivada y con iniciativa, siempre dispuesta a ayudar, proponer mejoras y resolver problemas con eficacia.\n " +
            "\n" +
            "Considero que el trabajo en equipo es un pilar fundamental, ya que creo firmemente que la colaboración y la comunicación son la base para crear videojuegos de calidad.\n",
        conocimientos_title: "Conocimientos",
        aptitudes_title: "Aptitudes",
    },
    en: {
        flag_name: " English",
        flag: "assets/UKflag.png",
        alt: "English",
        name_desc: "Videogame developer",
        inicio: "Home",
        sobre_mi: "About me",
        educacion: "Education",
        proyectos: "Projects",
        habilidades: "Abilities",
        contacto: "Contact",
        contacto_mail_text: "Do you want to contact me? Send me an email!",
        contacto_mail_button: "Send email",
        contacto_CV_text: "Do you want to know a bit more about me? Check out my CV!",
        contacto_CV_espanol: "CV in spanish",
        contacto_CV_ingles: "CV in english",
        footer_text: "© 2025 Víctor Herrero Gil | Videogame developer",
        title_about_me: "About me",
        title_education: "Education",
        title_projects: "Projects",
        title_abilities: "Abilities",
        title_contact: "Contact",
        about_me_text: "\n" +
            "I am passionate about the world of video games, both as a player and as a creator.\n" +
            "\n" +
            "I've always been fascinated by video games' ability to build worlds, tell stories, and generate unique experiences, and that passion has been the driving force behind my entire academic and professional journey.\n" +
            "\n" +
            "Throughout my career, I've worked on various video game projects, which has allowed me to hold different positions and gain a comprehensive understanding of the entire development cycle.\n" +
            "\n" +
            "This experience has given me not only a comprehensive understanding of multidisciplinary teamwork, but also the ability to adapt to different roles and provide creative and technical solutions tailored to the needs of the project.\n" +
            "\n" +
            "In addition to my technical side, I've had the opportunity to participate in public-facing projects, such as hosting charity galas. These experiences have helped me develop communication skills, confidence in speaking, and the ability to connect with audiences—qualities I also apply in professional and collaborative work environments.\n" +
            "\n" +
            "I define myself as a hard-working, motivated, and proactive person, always willing to help, propose improvements, and solve problems effectively.\n " +
            "\n" +
            "I consider teamwork to be a fundamental pillar, as I firmly believe that collaboration and communication are the foundation for creating quality video games.\n",
        conocimientos_title: "Knowledge",
        aptitudes_title: "Skills",
    }
}

function updateLanguage(lang) {
    const flag_name = document.getElementById('language-inner-text');
    const name_desc = document.getElementById('text-name-desc');
    const inicio = document.getElementById('text-inicio');
    const sobre_mi = document.getElementById('text-sobre-mi');
    const educacion = document.getElementById('text-educacion');
    const proyectos = document.getElementById('text-proyectos');
    const habilidades = document.getElementById('text-habilidades');
    const contacto = document.getElementById('text-contacto');
    const contacto_mail_text = document.getElementById('contacto-mail-text');
    const contacto_mail_button = document.getElementById('contacto-mail-button');
    const contacto_CV_text = document.getElementById('contacto-CV-text');
    const contacto_CV_espanol = document.getElementById('contacto-CV-espanol');
    const contacto_CV_ingles = document.getElementById('contacto-CV-ingles');
    const footer_text = document.getElementById('footer-text');
    const title_about_me = document.getElementById('title-about-me');
    const title_education = document.getElementById('title-education');
    const title_projects = document.getElementById('title-projects');
    const title_abilities = document.getElementById('title-abilities');
    const title_contact = document.getElementById('title-contact');
    const about_me_text = document.getElementById('about-me-text');
    const labelText = document.getElementById('labelText');
    const road_image_desc_1 = document.getElementById('road-image-desc-1');
    const road_image_desc_2 = document.getElementById('road-image-desc-2');
    const road_image_desc_3 = document.getElementById('road-image-desc-3');
    const conocimientos_title = document.getElementById('conocimientos-title');
    const aptitudes_title = document.getElementById('aptitudes-title');
    const aptitude_0 = document.getElementById('aptitude_0');
    const aptitude_1 = document.getElementById('aptitude_1');
    const aptitude_2 = document.getElementById('aptitude_2');
    const aptitude_3 = document.getElementById('aptitude_3');
    const aptitude_4 = document.getElementById('aptitude_4');
    const aptitude_5 = document.getElementById('aptitude_5');
    const aptitude_6 = document.getElementById('aptitude_6');
    const aptitude_7 = document.getElementById('aptitude_7');
    const aptitude_8 = document.getElementById('aptitude_8');
    const aptitude_9 = document.getElementById('aptitude_9');
    const aptitude_10 = document.getElementById('aptitude_10');
    const aptitude_11 = document.getElementById('aptitude_11');

    flag_name.textContent = translations[lang].flag_name;
    flagIcon.src = translations[lang].flag;
    flagIcon.alt = translations[lang].alt;
    name_desc.innerText = translations[lang].name_desc;
    inicio.innerText = translations[lang].inicio;
    sobre_mi.innerText = translations[lang].sobre_mi;
    educacion.innerText = translations[lang].educacion;
    proyectos.innerText = translations[lang].proyectos;
    habilidades.innerText = translations[lang].habilidades;
    contacto.innerText = translations[lang].contacto;
    contacto_mail_text.innerText = translations[lang].contacto_mail_text;
    contacto_mail_button.innerText = translations[lang].contacto_mail_button;
    contacto_CV_text.innerText = translations[lang].contacto_CV_text;
    contacto_CV_espanol.innerText = translations[lang].contacto_CV_espanol;
    contacto_CV_ingles.innerText = translations[lang].contacto_CV_ingles;
    footer_text.innerText = translations[lang].footer_text;
    title_about_me.innerText = translations[lang].title_about_me;
    title_education.innerText = translations[lang].title_education;
    title_projects.innerText = translations[lang].title_projects;
    title_abilities.innerText = translations[lang].title_abilities;
    title_contact.innerText = translations[lang].title_contact;
    about_me_text.innerText = translations[lang].about_me_text;
    labelText.innerText = EducationAnimationTexts[lang][currentEducationAnimationText];
    road_image_desc_1.innerText = EducationAnimationTexts[lang][1];
    road_image_desc_2.innerText = EducationAnimationTexts[lang][2];
    road_image_desc_3.innerText = EducationAnimationTexts[lang][3];
    conocimientos_title.innerText = translations[lang].conocimientos_title;
    aptitudes_title.innerText = translations[lang].aptitudes_title;
    aptitude_0.innerText = SkillsTranslationTexts[lang][0];
    aptitude_1.innerText = SkillsTranslationTexts[lang][1];
    aptitude_2.innerText = SkillsTranslationTexts[lang][2];
    aptitude_3.innerText = SkillsTranslationTexts[lang][3];
    aptitude_4.innerText = SkillsTranslationTexts[lang][4];
    aptitude_5.innerText = SkillsTranslationTexts[lang][5];
    aptitude_6.innerText = SkillsTranslationTexts[lang][6];
    aptitude_7.innerText = SkillsTranslationTexts[lang][7];
    aptitude_8.innerText = SkillsTranslationTexts[lang][8];
    aptitude_9.innerText = SkillsTranslationTexts[lang][9];
    aptitude_10.innerText = SkillsTranslationTexts[lang][10];
    aptitude_11.innerText = SkillsTranslationTexts[lang][11];

    if (history.replaceState) {
        const url = new URL(window.location);
        url.searchParams.set('lang', lang);
        history.replaceState(null, '', url.toString());
    }
}

// Menú hamburguesa
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuToggle.classList.toggle("active");
});

// Aparición de las habilidades la primera vez que se pasa por ellas
const habilidadesSectionKnowledge = document.getElementById('skills-grid-knowledge');
const habilidadesSectionAptitudes = document.getElementById('skills-grid-aptitudes');
const skillItemsKnowledge = habilidadesSectionKnowledge.querySelectorAll('.skill-item');
const skillItemsAptitudes = habilidadesSectionAptitudes.querySelectorAll('.skill-item');
let skillsKnowledgeAnimated = false;

const habilidadesKnowledgeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !skillsKnowledgeAnimated) {
            skillsKnowledgeAnimated = true;

            skillItemsKnowledge.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('visible');
                }, index * 300); // cada item aparece 300ms después del anterior
            });

            observer.unobserve(entry.target); // Deja de observar después de animar una vez
        }
    });
}, {
    threshold: 0.4 // Aparece cuando al menos el 40% de la sección es visible
});

habilidadesKnowledgeObserver.observe(habilidadesSectionKnowledge);

let skillsAptitudesAnimated = false;
const habilidadesAptitudesObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !skillsAptitudesAnimated) {
            skillsAptitudesAnimated = true;

            skillItemsAptitudes.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('visible');
                }, index * 300); // cada item aparece 300ms después del anterior
            });

            observer.unobserve(entry.target); // Deja de observar después de animar una vez
        }
    });
}, {
    threshold: 0.4 // Aparece cuando al menos el 40% de la sección es visible
});

habilidadesAptitudesObserver.observe(habilidadesSectionAptitudes);

// Aplica animaciones al hacer scroll
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
        }
    });
}, {threshold: 0.1});

sections.forEach(section => observer.observe(section));

// Hover en proyectos para cambiar fondo de sección
const projectCards = document.querySelectorAll('.project-card');
const sectionVideo = document.getElementById('section-video');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const videoSrc = card.getAttribute('data-video');
        if (videoSrc) {
            sectionVideo.src = videoSrc;
            sectionVideo.style.opacity = '0.4';
        }
    });
    card.addEventListener('mouseleave', () => {
        sectionVideo.style.opacity = '0';
    });
});

// Sticky nav
const banner = document.getElementById("banner");
const nav = document.getElementById("main-nav");

window.addEventListener("scroll", () => {
    const bannerHeight = banner.offsetHeight;
    if (window.scrollY > bannerHeight) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
});

const modal = document.getElementById('project-modal');
const modalClose = document.querySelector('.modal-close');
const modalHide = document.querySelector('.modal-hide');
const modalContent = document.getElementById('modal-content');
let modalHidden = false;
const modalBody = document.getElementById('modal-body');

// Contenidos por proyecto
const projectData = {
    "Caso Grave": {
        es: `<h2 class="modal-title">Caso Grave</h2>
                <p class="modal-text">`+ ProjectTranslationTexts["es"]["CasoGrave"][0] +`</p>
                <img src="assets/ProjectImages/CasoGrave/CasoGraveImg1.jpg" alt="Imagen Caso Grave 1">
                <p class="modal-text">`+ ProjectTranslationTexts["es"]["CasoGrave"][1] +`</p>
                <img src="assets/ProjectImages/CasoGrave/CasoGraveImg2.jpg" alt="Imagen Caso Grave 2">
                <p class="modal-text">`+ ProjectTranslationTexts["es"]["CasoGrave"][2] +`</p>
                <img src="assets/ProjectImages/CasoGrave/CasoGraveImg3.jpg" alt="Imagen Caso Grave 3">
                <p class="modal-text">`+ ProjectTranslationTexts["es"]["CasoGrave"][3] +`</p>
                <a href="https://v-the-dev.itch.io/caso-grave" class="modal-text">`+ ProjectTranslationTexts["es"]["CasoGrave"][4] +`</a>`,
        en: `<h2 class="modal-title">Caso Grave</h2>
                <p class="modal-text">`+ ProjectTranslationTexts["en"]["CasoGrave"][0] +`</p>
                <img src="assets/ProjectImages/CasoGrave/CasoGraveImg1.jpg" alt="Imagen Caso Grave 1">
                <p class="modal-text">`+ ProjectTranslationTexts["en"]["CasoGrave"][1] +`</p>
                <img src="assets/ProjectImages/CasoGrave/CasoGraveImg2.jpg" alt="Imagen Caso Grave 2">
                <p class="modal-text">`+ ProjectTranslationTexts["en"]["CasoGrave"][2] +`</p>
                <img src="assets/ProjectImages/CasoGrave/CasoGraveImg3.jpg" alt="Imagen Caso Grave 3">
                <p class="modal-text">`+ ProjectTranslationTexts["en"]["CasoGrave"][3] +`</p>
                <a href="https://v-the-dev.itch.io/caso-grave" class="modal-text">`+ ProjectTranslationTexts["en"]["CasoGrave"][4] +`</a>`
    },
    "Primero de clase": {
        es: `<h2 class="modal-title">Primero de clase</h2>
                <p class="modal-text">`+ ProjectTranslationTexts["es"]["PrimeroDeClase"][0] +`</p>
                <img src="assets/ProjectImages/PrimeroDeClase/PrimeroDeClaseImg1.jpg" alt="Imagen Primero de clase 1">
                <p class="modal-text">`+ ProjectTranslationTexts["es"]["PrimeroDeClase"][1] +`</p>
                <img src="assets/ProjectImages/PrimeroDeClase/PrimeroDeClaseImg2.jpg" alt="Imagen Primero de clase 2">
                <img src="assets/ProjectImages/PrimeroDeClase/PrimeroDeClaseImg3.jpg" alt="Imagen Primero de clase 3">
                <p class="modal-text">`+ ProjectTranslationTexts["es"]["PrimeroDeClase"][2] +`</p>
                <img src="assets/ProjectImages/PrimeroDeClase/PrimeroDeClaseImg4.jpg" alt="Imagen Primero de clase 4">
                <p class="modal-text">`+ ProjectTranslationTexts["es"]["PrimeroDeClase"][3] +`</p>
                <img src="assets/ProjectImages/PrimeroDeClase/PrimeroDeClaseImg5.jpg" alt="Imagen Primero de clase 5">
                <p class="modal-text">`+ ProjectTranslationTexts["es"]["PrimeroDeClase"][4] +`</p>
                <a href="https://primero-de-clase.web.app/" class="modal-text">`+ ProjectTranslationTexts["es"]["PrimeroDeClase"][5] +`</a>`,
        en: `<h2 class="modal-title">Primero de clase</h2>
                <p class="modal-text">`+ ProjectTranslationTexts["en"]["PrimeroDeClase"][0] +`</p>
                <img src="assets/ProjectImages/PrimeroDeClase/PrimeroDeClaseImg1.jpg" alt="Imagen Primero de clase 1">
                <p class="modal-text">`+ ProjectTranslationTexts["en"]["PrimeroDeClase"][1] +`</p>
                <img src="assets/ProjectImages/PrimeroDeClase/PrimeroDeClaseImg2.jpg" alt="Imagen Primero de clase 2">
                <img src="assets/ProjectImages/PrimeroDeClase/PrimeroDeClaseImg3.jpg" alt="Imagen Primero de clase 3">
                <p class="modal-text">`+ ProjectTranslationTexts["en"]["PrimeroDeClase"][2] +`</p>
                <img src="assets/ProjectImages/PrimeroDeClase/PrimeroDeClaseImg4.jpg" alt="Imagen Primero de clase 4">
                <p class="modal-text">`+ ProjectTranslationTexts["en"]["PrimeroDeClase"][3] +`</p>
                <img src="assets/ProjectImages/PrimeroDeClase/PrimeroDeClaseImg5.jpg" alt="Imagen Primero de clase 5">
                <p class="modal-text">`+ ProjectTranslationTexts["en"]["PrimeroDeClase"][4] +`</p>
                <a href="https://primero-de-clase.web.app/" class="modal-text">`+ ProjectTranslationTexts["en"]["PrimeroDeClase"][5] +`</a>`
    },
    "The Abyss": {
        es: `<h2 class="modal-title">The Abyss</h2>
                <p class="modal-text">`+ ProjectTranslationTexts["es"]["TheAbyss"][0] +`</p>
                <img src="assets/ProjectImages/TheAbyss/TheAbyssImg1.jpg" alt="Imagen The Abyss 1">
                <p class="modal-text">`+ ProjectTranslationTexts["es"]["TheAbyss"][1] +`</p>
                <img src="assets/ProjectImages/TheAbyss/TheAbyssImg2.jpg" alt="Imagen The Abyss 2">
                <p class="modal-text">`+ ProjectTranslationTexts["es"]["TheAbyss"][2] +`</p>
                <img src="assets/ProjectImages/TheAbyss/TheAbyssImg3.jpg" alt="Imagen The Abyss 3">
                <p class="modal-text">`+ ProjectTranslationTexts["es"]["TheAbyss"][3] +`</p>
                <img src="assets/ProjectImages/TheAbyss/TheAbyssImg4.jpg" alt="Imagen The Abyss 4">
                <p class="modal-text">`+ ProjectTranslationTexts["es"]["TheAbyss"][4] +`</p>
                <a href="https://patatinpatatan.itch.io/the-abyss" class="modal-text">`+ ProjectTranslationTexts["es"]["TheAbyss"][5] +`</a>`,
        en: `<h2 class="modal-title">The Abyss</h2>
                <p class="modal-text">`+ ProjectTranslationTexts["en"]["TheAbyss"][0] +`</p>
                <img src="assets/ProjectImages/TheAbyss/TheAbyssImg1.jpg" alt="Imagen The Abyss 1">
                <p class="modal-text">`+ ProjectTranslationTexts["en"]["TheAbyss"][1] +`</p>
                <img src="assets/ProjectImages/TheAbyss/TheAbyssImg2.jpg" alt="Imagen The Abyss 2">
                <p class="modal-text">`+ ProjectTranslationTexts["en"]["TheAbyss"][2] +`</p>
                <img src="assets/ProjectImages/TheAbyss/TheAbyssImg3.jpg" alt="Imagen The Abyss 3">
                <p class="modal-text">`+ ProjectTranslationTexts["en"]["TheAbyss"][3] +`</p>
                <img src="assets/ProjectImages/TheAbyss/TheAbyssImg4.jpg" alt="Imagen The Abyss 4">
                <p class="modal-text">`+ ProjectTranslationTexts["en"]["TheAbyss"][4] +`</p>
                <a href="https://patatinpatatan.itch.io/the-abyss" class="modal-text">`+ ProjectTranslationTexts["en"]["TheAbyss"][5] +`</a>`
    },
    "Tower of Bubble": {
        es: `<h2 class="modal-title">Tower of Bubble</h2>
                <p class="modal-text">`+ ProjectTranslationTexts["es"]["TowerOfBubble"][0] +`</p>
                <img src="assets/ProjectImages/TowerOfBubble/TowerOfBubbleImg1.jpg" alt="Imagen Tower of Bubble 1">
                <p class="modal-text">`+ ProjectTranslationTexts["es"]["TowerOfBubble"][1] +`</p>
                <img src="assets/ProjectImages/TowerOfBubble/TowerOfBubbleImg2.jpg" alt="Imagen Tower of Bubble 2">
                <p class="modal-text">`+ ProjectTranslationTexts["es"]["TowerOfBubble"][2] +`</p>
                <img src="assets/ProjectImages/TowerOfBubble/TowerOfBubbleImg3.jpg" alt="Imagen Tower of Bubble 3">
                <p class="modal-text">`+ ProjectTranslationTexts["es"]["TowerOfBubble"][3] +`</p>
                <a href="https://german-gabari-llorens.itch.io/tower-of-bubble" class="modal-text">`+ ProjectTranslationTexts["es"]["TowerOfBubble"][4] +`</a>`,
        en: `<h2 class="modal-title">Tower of Bubble</h2>
                <p class="modal-text">`+ ProjectTranslationTexts["en"]["TowerOfBubble"][0] +`</p>
                <img src="assets/ProjectImages/TowerOfBubble/TowerOfBubbleImg1.jpg" alt="Imagen Tower of Bubble 1">
                <p class="modal-text">`+ ProjectTranslationTexts["en"]["TowerOfBubble"][1] +`</p>
                <img src="assets/ProjectImages/TowerOfBubble/TowerOfBubbleImg2.jpg" alt="Imagen Tower of Bubble 2">
                <p class="modal-text">`+ ProjectTranslationTexts["en"]["TowerOfBubble"][2] +`</p>
                <img src="assets/ProjectImages/TowerOfBubble/TowerOfBubbleImg3.jpg" alt="Imagen Tower of Bubble 3">
                <p class="modal-text">`+ ProjectTranslationTexts["en"]["TowerOfBubble"][3] +`</p>
                <a href="https://german-gabari-llorens.itch.io/tower-of-bubble" class="modal-text">`+ ProjectTranslationTexts["en"]["TowerOfBubble"][4] +`</a>`
    },
    "Just Twin Beaver": {
        es: `<h2 class="modal-title">Just Twin Beaver</h2>
                <p class="modal-text">`+ ProjectTranslationTexts["es"]["JustTwinBeaver"][0] +`</p>
                <img src="assets/ProjectImages/JustTwinBeaver/JustTwinBeaverImg1.jpg" alt="Imagen Just Twin Beaver 1">
                <p class="modal-text">`+ ProjectTranslationTexts["es"]["JustTwinBeaver"][1] +`</p>
                <img src="assets/ProjectImages/JustTwinBeaver/JustTwinBeaverImg2.jpg" alt="Imagen Just Twin Beaver 2">
                <p class="modal-text">`+ ProjectTranslationTexts["es"]["JustTwinBeaver"][2] +`</p>
                <img src="assets/ProjectImages/JustTwinBeaver/JustTwinBeaverImg3.jpg" alt="Imagen Just Twin Beaver 3">
                <p class="modal-text">`+ ProjectTranslationTexts["es"]["JustTwinBeaver"][3] +`</p>
                <a href="https://panchospeech.itch.io/just-twin-beaver" class="modal-text">`+ ProjectTranslationTexts["es"]["JustTwinBeaver"][4] +`</a>`,
        en: `<h2 class="modal-title">Just Twin Beaver</h2>
                <p class="modal-text">`+ ProjectTranslationTexts["en"]["JustTwinBeaver"][0] +`</p>
                <img src="assets/ProjectImages/JustTwinBeaver/JustTwinBeaverImg1.jpg" alt="Imagen Just Twin Beaver 1">
                <p class="modal-text">`+ ProjectTranslationTexts["en"]["JustTwinBeaver"][1] +`</p>
                <img src="assets/ProjectImages/JustTwinBeaver/JustTwinBeaverImg2.jpg" alt="Imagen Just Twin Beaver 2">
                <p class="modal-text">`+ ProjectTranslationTexts["en"]["JustTwinBeaver"][2] +`</p>
                <img src="assets/ProjectImages/JustTwinBeaver/JustTwinBeaverImg3.jpg" alt="Imagen Just Twin Beaver 3">
                <p class="modal-text">`+ ProjectTranslationTexts["en"]["JustTwinBeaver"][3] +`</p>
                <a href="https://panchospeech.itch.io/just-twin-beaver" class="modal-text">`+ ProjectTranslationTexts["en"]["JustTwinBeaver"][4] +`</a>`
    },
    "Dreadbone": {
        es: `<h2 class="modal-title">Dreadbone</h2>
            <p class="modal-text">`+ ProjectTranslationTexts["es"]["Dreadbone"][1] +`</p>
            <img src="assets/ProjectImages/Dreadbone/DreadboneImg1.jpg" alt="Imagen Dreadbone 1">
            <p class="modal-text">`+ ProjectTranslationTexts["es"]["Dreadbone"][0] +`</p>
            <img src="assets/ProjectImages/Dreadbone/DreadboneImg2.jpg" alt="Imagen Dreadbone 2">
            <p class="modal-text">`+ ProjectTranslationTexts["es"]["Dreadbone"][2] +`</p>
            <img src="assets/ProjectImages/Dreadbone/DreadboneImg3.jpg" alt="Imagen Dreadbone 3">
            <p class="modal-text">`+ ProjectTranslationTexts["es"]["Dreadbone"][3] +`</p>
            <img src="assets/ProjectImages/Dreadbone/DreadboneImg4.jpg" alt="Imagen Dreadbone 4">
            <p class="modal-text">`+ ProjectTranslationTexts["es"]["Dreadbone"][4] +`</p>
            <img src="assets/ProjectImages/Dreadbone/DreadboneImg5.jpg" alt="Imagen Dreadbone 5">
            <p class="modal-text">`+ ProjectTranslationTexts["es"]["Dreadbone"][5] +`</p>
            <a href="https://store.steampowered.com/app/3587460/Dreadbone/" class="modal-text">`+ ProjectTranslationTexts["es"]["Dreadbone"][6] +`</a>`,
        en: `<h2 class="modal-title">Dreadbone</h2>
            <p class="modal-text">`+ ProjectTranslationTexts["en"]["Dreadbone"][0] +`</p>
            <img src="assets/ProjectImages/Dreadbone/DreadboneImg1.jpg" alt="Imagen Dreadbone 1">
            <p class="modal-text">`+ ProjectTranslationTexts["en"]["Dreadbone"][1] +`</p>
            <img src="assets/ProjectImages/Dreadbone/DreadboneImg2.jpg" alt="Imagen Dreadbone 2">
            <p class="modal-text">`+ ProjectTranslationTexts["en"]["Dreadbone"][2] +`</p>
            <img src="assets/ProjectImages/Dreadbone/DreadboneImg3.jpg" alt="Imagen Dreadbone 3">
            <p class="modal-text">`+ ProjectTranslationTexts["en"]["Dreadbone"][3] +`</p>
            <img src="assets/ProjectImages/Dreadbone/DreadboneImg4.jpg" alt="Imagen Dreadbone 4">
            <p class="modal-text">`+ ProjectTranslationTexts["en"]["Dreadbone"][4] +`</p>
            <img src="assets/ProjectImages/Dreadbone/DreadboneImg5.jpg" alt="Imagen Dreadbone 5">
            <p class="modal-text">`+ ProjectTranslationTexts["en"]["Dreadbone"][5] +`</p>
            <a href="https://store.steampowered.com/app/3587460/Dreadbone/" class="modal-text">`+ ProjectTranslationTexts["en"]["Dreadbone"][6] +`</a>`,
    },
    "Helltech": {
        es: `<h2 class="modal-title">Helltech</h2>
                <p class="modal-text">`+ ProjectTranslationTexts["es"]["Helltech"][0] +`</p>
                <img src="assets/ProjectImages/Helltech/HelltechImg1.jpg" alt="Imagen Helltech 1">
                <p class="modal-text">`+ ProjectTranslationTexts["es"]["Helltech"][1] +`</p>
                <img src="assets/ProjectImages/Helltech/HelltechImg2.jpg" alt="Imagen Helltech 2">
                <p class="modal-text">`+ ProjectTranslationTexts["es"]["Helltech"][2] +`</p>`,
        en: `<h2 class="modal-title">Helltech</h2>
                <p class="modal-text">`+ ProjectTranslationTexts["en"]["Helltech"][0] +`</p>
                <img src="assets/ProjectImages/Helltech/HelltechImg1.jpg" alt="Imagen Helltech 1">
                <p class="modal-text">`+ ProjectTranslationTexts["en"]["Helltech"][1] +`</p>
                <img src="assets/ProjectImages/Helltech/HelltechImg2.jpg" alt="Imagen Helltech 2">
                <p class="modal-text">`+ ProjectTranslationTexts["en"]["Helltech"][2] +`</p>`
    },
};

const sectionVideoOpened = document.getElementById('section-video-opened');

// Evento para abrir el modal al hacer clic en una tarjeta
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('h3').textContent.trim();
        modalBody.innerHTML = projectData[title][currentLang] || "<p>Información no disponible.</p>";
        modal.classList.add('active');
        
        const videoSrc = card.getAttribute('data-video');
        if (videoSrc) {
            sectionVideoOpened.src = videoSrc;
            sectionVideoOpened.style.opacity = '0.3';
        }
    });
});

// Cerrar al hacer clic en la cruz
modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
    sectionVideoOpened.style.opacity = '0';
    modalHidden = false;
    modalHide.innerHTML = `<svg height="122px" viewBox="0 0 150 122" width="30px" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#8800ff" d="M65.7,97.3C36.5,97.3,13.2,80,2.1,53.9c11.2-26.1,34.5-43.4,63.6-43.4c29.1,0,52.5,17.3,63.7,43.4  
                                                C118.2,80,94.8,97.3,65.7,97.3L65.7,97.3L65.7,97.3z M65.7,86.9c23.1,0,43-13.5,52.3-33c-9.3-19.5-29.2-33-52.3-33  
                                                c-23,0-42.9,13.5-52.2,33C22.7,73.4,42.6,86.9,65.7,86.9L65.7,86.9L65.7,86.9z M41.5,53.9c0-13.4,10.8-24.2,24.1-24.2  
                                                c13.4,0,24.2,10.9,24.2,24.2c0,13.4-10.9,24.2-24.2,24.2C52.3,78.1,41.5,67.2,41.5,53.9L41.5,53.9L41.5,53.9z M67.1,47.8  
                                                c0,4.2,3.3,7.6,7.6,7.6c4.1,0,7.5-3.4,7.5-7.6c0-4.1-3.3-7.5-7.5-7.5C70.5,40.3,67.1,43.6,67.1,47.8L67.1,47.8L67.1,47.8z"/>
                                    <line x1="10" y1="10" x2="123" y2="95" stroke="#800080" stroke-width="12" stroke-linecap="round"/>
                                </svg>`;
    modalContent.style.opacity = '1';
    sectionVideoOpened.style.opacity = '0.4';
});

// Cerrar al hacer clic fuera del contenido
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        if(modalHidden){
            modalHidden = false;
            modalHide.innerHTML = `<svg height="122px" viewBox="0 0 150 122" width="30px" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#8800ff" d="M65.7,97.3C36.5,97.3,13.2,80,2.1,53.9c11.2-26.1,34.5-43.4,63.6-43.4c29.1,0,52.5,17.3,63.7,43.4  
                                                C118.2,80,94.8,97.3,65.7,97.3L65.7,97.3L65.7,97.3z M65.7,86.9c23.1,0,43-13.5,52.3-33c-9.3-19.5-29.2-33-52.3-33  
                                                c-23,0-42.9,13.5-52.2,33C22.7,73.4,42.6,86.9,65.7,86.9L65.7,86.9L65.7,86.9z M41.5,53.9c0-13.4,10.8-24.2,24.1-24.2  
                                                c13.4,0,24.2,10.9,24.2,24.2c0,13.4-10.9,24.2-24.2,24.2C52.3,78.1,41.5,67.2,41.5,53.9L41.5,53.9L41.5,53.9z M67.1,47.8  
                                                c0,4.2,3.3,7.6,7.6,7.6c4.1,0,7.5-3.4,7.5-7.6c0-4.1-3.3-7.5-7.5-7.5C70.5,40.3,67.1,43.6,67.1,47.8L67.1,47.8L67.1,47.8z"/>
                                    <line x1="10" y1="10" x2="123" y2="95" stroke="#800080" stroke-width="12" stroke-linecap="round"/>
                                </svg>`;
            modalContent.style.opacity = '1';
            sectionVideoOpened.style.opacity = '0.4';
        }
        else{
            modal.classList.remove('active');
            sectionVideoOpened.style.opacity = '0';
        }
    }
});

// Esconder el texto
modalHide.addEventListener('click', () => {
    if(modalHidden){
        modalHidden = false;
        modalHide.innerHTML = `<svg height="122px" viewBox="0 0 150 122" width="30px" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#8800ff" d="M65.7,97.3C36.5,97.3,13.2,80,2.1,53.9c11.2-26.1,34.5-43.4,63.6-43.4c29.1,0,52.5,17.3,63.7,43.4  
                                                C118.2,80,94.8,97.3,65.7,97.3L65.7,97.3L65.7,97.3z M65.7,86.9c23.1,0,43-13.5,52.3-33c-9.3-19.5-29.2-33-52.3-33  
                                                c-23,0-42.9,13.5-52.2,33C22.7,73.4,42.6,86.9,65.7,86.9L65.7,86.9L65.7,86.9z M41.5,53.9c0-13.4,10.8-24.2,24.1-24.2  
                                                c13.4,0,24.2,10.9,24.2,24.2c0,13.4-10.9,24.2-24.2,24.2C52.3,78.1,41.5,67.2,41.5,53.9L41.5,53.9L41.5,53.9z M67.1,47.8  
                                                c0,4.2,3.3,7.6,7.6,7.6c4.1,0,7.5-3.4,7.5-7.6c0-4.1-3.3-7.5-7.5-7.5C70.5,40.3,67.1,43.6,67.1,47.8L67.1,47.8L67.1,47.8z"/>
                                    <line x1="10" y1="10" x2="123" y2="95" stroke="#800080" stroke-width="12" stroke-linecap="round"/>
                                </svg>`;
        modalContent.style.opacity = '1';
        sectionVideoOpened.style.opacity = '0.4';
    }
    else{
        modalHidden = true;
        modalHide.innerHTML = `<svg height="122px" viewBox="0 0 150 122" width="30px" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#8800ff" d="M65.7,97.3C36.5,97.3,13.2,80,2.1,53.9c11.2-26.1,34.5-43.4,63.6-43.4c29.1,0,52.5,17.3,63.7,43.4  
                                        C118.2,80,94.8,97.3,65.7,97.3L65.7,97.3L65.7,97.3z M65.7,86.9c23.1,0,43-13.5,52.3-33c-9.3-19.5-29.2-33-52.3-33  
                                        c-23,0-42.9,13.5-52.2,33C22.7,73.4,42.6,86.9,65.7,86.9L65.7,86.9L65.7,86.9z M41.5,53.9c0-13.4,10.8-24.2,24.1-24.2  
                                        c13.4,0,24.2,10.9,24.2,24.2c0,13.4-10.9,24.2-24.2,24.2C52.3,78.1,41.5,67.2,41.5,53.9L41.5,53.9L41.5,53.9z M67.1,47.8  
                                        c0,4.2,3.3,7.6,7.6,7.6c4.1,0,7.5-3.4,7.5-7.6c0-4.1-3.3-7.5-7.5-7.5C70.5,40.3,67.1,43.6,67.1,47.8L67.1,47.8L67.1,47.8z"/>
                               </svg>`;
        modalContent.style.opacity = '0.25';
        sectionVideoOpened.style.opacity = '1';
    }
    
})

// Avance animación flecha
gsap.registerPlugin(ScrollTrigger);

const path_base = document.querySelector('#road-base');
const path_base_Length = path_base.getTotalLength();

path_base.style.strokeDasharray = path_base_Length;
path_base.style.strokeDashoffset = path_base_Length;
const navHeight = nav.offsetHeight;
document.addEventListener("DOMContentLoaded", () => {
    ScrollTrigger.matchMedia({
        "(min-width: 842px) and (min-height: 801px)": function() {
            gsap.to(path_base, {
                strokeDashoffset: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: "#educacion",
                    start: "top top",
                    end: "+=2000",
                    scrub: 1,
                    pinSpacing: true,
                    invalidateOnRefresh:  true,
                    pin: true,
                }
            })
        
            // Animaciones que se activan en puntos específicos
            gsap.to("#label1", {
                opacity: 1,
                scrollTrigger: {
                    trigger: ".pin-spacer",
                    start: `top+=${navHeight + 730} center`,
                    end: "+=0 center",
                    scrub: true,
                    invalidateOnRefresh: true,
                    onEnter: () => {currentEducationAnimationText = 1;
                                            document.getElementById("labelText").innerHTML = EducationAnimationTexts[currentLang][currentEducationAnimationText];},
                    onEnterBack: () => {currentEducationAnimationText = 0;
                                            document.getElementById("labelText").innerHTML = EducationAnimationTexts[currentLang][currentEducationAnimationText];}
                }
            });
            
            gsap.to("#label2", {
                opacity: 1,
                scrollTrigger: {
                    trigger: ".pin-spacer",
                    start: `top+=${navHeight + 1600} center`,
                    end: "+=0 center",
                    scrub: true,
                    invalidateOnRefresh: true,
                    onEnter: () => {currentEducationAnimationText = 2;
                                            document.getElementById("labelText").innerHTML = EducationAnimationTexts[currentLang][currentEducationAnimationText];},
                    onEnterBack: () => {currentEducationAnimationText = 1;
                                                document.getElementById("labelText").innerHTML = EducationAnimationTexts[currentLang][currentEducationAnimationText];}
                }
            });
            
            gsap.to("#label3", {
                opacity: 1,
                scrollTrigger: {
                    trigger: ".pin-spacer",
                    start: `top+=${navHeight + 2220} center`,
                    end: "+=0 center",
                    scrub: true,
                    invalidateOnRefresh: true,
                    onEnter: () => {currentEducationAnimationText = 3;
                                            document.getElementById("labelText").innerHTML = EducationAnimationTexts[currentLang][currentEducationAnimationText];},
                    onEnterBack: () => {currentEducationAnimationText = 2;
                                                document.getElementById("labelText").innerHTML = EducationAnimationTexts[currentLang][currentEducationAnimationText];}
                }
            });
        }
    });
});

// Idioma de la página web
// Idioma por URL
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const langParam = params.get('lang');

    if (langParam === 'en' || langParam === 'es') {
        currentLang = langParam;
        updateLanguage(currentLang);
    }
});
