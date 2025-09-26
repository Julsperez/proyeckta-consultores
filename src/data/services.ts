export interface Service {
  id: string;
  title: string;
  webUrl?: string;
  /** HTML string renderizable en el layout */
  description: string;
  highlights: string[];
  advantages: string[];
  image: string; // ruta en /public
  carousel : string[];
}

const services: Service[] = [
  {
    id: "ambiente-laboral",
    title: "Estudios de ambiente laboral",
    webUrl: "https://drive.google.com/drive/folders/1tRMlll66rtqg8gyJNe09YvWqLWkooPdE",
    description: `
      Nos comprometemos a que tu centro de trabajo cuente con un entorno laboral seguro, saludable y conforme a la normativa vigente. Para lograrlo, desarrollamos diagnósticos integrales, elaboramos la documentación requerida y brindamos asesoría personalizada que facilita la atención de auditorías o revisiones por parte de organismos públicos.
      Asimismo, te acompañamos en la evaluación de las condiciones laborales y en la implementación de medidas correctivas, con el propósito de que obtengas dictámenes favorables emitidos por Unidades de Verificación acreditadas por la EMA y reconocidas por la STPS.
    `,
    highlights: [
      "Estudios acreditados y aprobados por los organismos correspondientes.",
      "Diagnósticos integrales que detectan áreas de riesgo antes de que se conviertan en problemas.",
      "Elaboración completa de la documentación exigida en auditorías y revisiones.",
      "Asesoría personalizada para responder eficazmente ante organismos públicos.",
      "Acompañamiento en la implementación de medidas correctivas."
    ],
    advantages: [
      "Aseguras un entorno laboral seguro y conforme a la normatividad.",
      "Reduces riesgos de sanciones y observaciones en auditorías.",
      "Recibes respaldo técnico especializado durante todo el proceso.",
      "Garantizas que tus evidencias y documentos tengan validez oficial."
    ],
    image: "img/servicios/servicio_1_1.jpg",
    carousel : [
      "img/servicios/servicio_1_1.jpg",
      "img/servicios/servicio_1_2.jpg",
      "img/servicios/servicio_1_3.jpg",
      "img/servicios/servicio_1_4.jpg",
      "img/servicios/servicio_1_5.jpg",
      "img/servicios/servicio_1_6.jpg",
    ]
  },
  {
    id: "capacitacion",
    title: "Capacitación en normatividad.",
    webUrl: "https://drive.google.com/drive/folders/154efMencMb9a93ucClCWXDaZS1EBxuNA",
    description: `
      Nos enfocamos en fortalecer las competencias de los trabajadores mediante programas de capacitación diseñados conforme a la normatividad vigente y las necesidades específicas de tu centro de trabajo. Elaboramos planes de formación, generamos la documentación que respalda cada curso y damos seguimiento a la aplicación práctica de los conocimientos adquiridos, impulsando mejoras en el desempeño y la productividad.
    `,
    highlights: [
      "Programas de capacitación diseñados a la medida de tu centro de trabajo.",
      "Planes de formación con contenido práctico y actualizado.",
      "Documentación oficial que respalda cada curso impartido.",
      "Seguimiento para verificar la aplicación real de los conocimientos."
    ],
    advantages: [
      "Incrementas la productividad y el desempeño de tus trabajadores.",
      "Obtienes constancias de capacitación con validez oficial.",
      "Adaptamos los programas a tu giro y necesidades específicas.",
      "Cumples con los requisitos de la STPS en materia de capacitación."
    ],
    image: "img/servicios/servicio_2_1.jpg",
    carousel : [
      "img/servicios/servicio_2_1.jpg",
      "img/servicios/servicio_2_2.jpg",
      "img/servicios/servicio_2_3.jpg",
      "img/servicios/servicio_2_4.jpg",
      "img/servicios/servicio_2_5.jpg",
      "img/servicios/servicio_2_6.jpg",
    ]
  },
  {
    id: "primeros-auxilios",
    title: "Primeros auxilios",
    description: `
      Nos enfocamos en fortalecer la preparación de los trabajadores mediante programas de capacitación en primeros auxilios, diseñados conforme a la normatividad vigente y a las necesidades específicas de cada centro de trabajo. Desarrollamos planes de entrenamiento prácticos, generamos la documentación que respalda cada curso y damos seguimiento a la correcta aplicación de los conocimientos adquiridos, contribuyendo a mejorar la respuesta ante emergencias y la seguridad en el entorno laboral.
    `,
    highlights: [
      "Cursos prácticos de primeros auxilios adaptados a tu entorno laboral.",
      "Instructores certificados y con experiencia en emergencias reales.",
      "Material y documentación oficial que avala cada capacitación.",
      "Simulacros y prácticas para reforzar la preparación del personal."
    ],
    advantages: [
      "Tu personal estará preparado para responder ante emergencias.",
      "Reducirás riesgos y posibles consecuencias graves en accidentes.",
      "Cumplirás con la normatividad en materia de seguridad y salud laboral.",
      "Generarás un ambiente de trabajo más seguro y confiable."
    ],
    image: "img/servicios/servicio_3_1.jpg",
    carousel : [
      "img/servicios/servicio_3_1.jpg",
      "img/servicios/servicio_3_2.jpg",
      "img/servicios/servicio_3_3.jpg",
      "img/servicios/servicio_3_4.jpg"

    ]
  }
];

export default services;
