export interface Service {
  id: string;
  title: string;
  /** HTML string renderizable en el layout */
  description: string;
  highlights: string[];
  image: string; // ruta en /public
  carousel : string[];
}

const services: Service[] = [
  {
    id: "seguridad-higiene",
    title: "",
    description: `
      
    `,
    highlights: [
      
    ],
    image: "",
    carousel : [
      
    ]
  },
  {
    id: "proteccion-civil",
    title: "",
    description: `
      
    `,
    highlights: [
      
    ],
    image: "",
    carousel : [
      
    ]
  },
  {
    id: "gestion-ambiental",
    title: "",
    description: `
      
    `,
    highlights: [
      
    ],
    image: "",
    carousel : [
      
    ]
  },
  {
    id: "certificaciones",
    title: "",
    description: `
      
    `,
    highlights: [
      
    ],
    image: "",
    carousel : [
      
    ]
  }
];

export default services;
