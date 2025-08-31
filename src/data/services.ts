export interface Service {
  id: string;
  title: string;
  /** HTML string renderizable en el layout */
  description: string;
  highlights: string[];
  image: string; // ruta en /public
}

const services: Service[] = [
  {
    id: "seguridad-higiene",
    title: "Seguridad e Higiene Ocupacional",
    description: `
      <p>
        En todo centro de trabajo donde existan colaboradores, la autoridad laboral establece
        tres rubros principales sujetos a inspección y cumplimiento:
      </p>
      <ol>
        <li><strong>Condiciones de trabajo y prestaciones de ley</strong>, que garantizan el respeto a los derechos laborales de los empleados.</li>
        <li><strong>Capacitación y adiestramiento</strong>, tanto en funciones del puesto como en <em>seguridad e higiene</em> laboral.</li>
        <li><strong>Condiciones de seguridad e higiene</strong>, enfocadas en prevenir accidentes y enfermedades de trabajo.</li>
      </ol>
      <p>
        En <strong>Proyeckta Consultores</strong> ofrecemos apoyo especializado principalmente en el
        segundo y tercer rubro, asegurando que tu organización cumpla con la normatividad vigente, minimice riesgos y promueva un ambiente laboral seguro y eficiente.
      </p>
    `,
    highlights: [
      "Cumplimiento en capacitación laboral.",
      "Fortalecimiento en seguridad e higiene.",
      "Asesoría en procesos de inspección laboral.",
      "Asegurar entornos laborales seguros y eficientes."
    ],
    image: "/img/services/servicio_1_2.jpg"
  },
  {
    id: "proteccion-civil",
    title: "Promoción y capacitacion en temas de auditorias de cliente nacionales e internacionales",
    description: `
      <p>
        En <strong>Proyeckta Consultores</strong> aseguramos que el cumplimiento de tu centro de trabajo sea integral. 
        Brindamos recomendaciones específicas que garantizan hasta un <strong>100% de conformidad</strong> con la normatividad aplicable, 
        elaboramos la documentación necesaria para auditorías de clientes nacionales e internacionales y te acompañamos en todo el proceso de verificación.
      </p>
      <p>
        También ofrecemos <strong>dictaminación de criterios de cumplimiento</strong> o, en su caso, 
        asesoría para que obtengas dictámenes satisfactorios emitidos por <strong>Unidades de Verificación (UV)</strong> 
        acreditadas ante la <em>Entidad Mexicana de Acreditación (EMA)</em> y aprobadas por la <em>Secretaría del Trabajo y Previsión Social (STPS)</em>.
      </p>
      <p>
        Para proporcionarte capacitación en materia de seguridad e higiene, contamos con registro ante la STPS como 
        <strong>Agente Capacitador Externo (DC5)</strong>, lo que nos faculta para emitir 
        <a href="https://dc-3.mx/wp-content/uploads/2021/10/Formato-DC3.pdf" target="_blank" rel="noopener noreferrer">constancias DC3</a> 
        que acreditan habilidades laborales en seguridad e higiene.
      </p>
      <p>
        Actualmente, la normatividad de la STPS contempla <strong>44 Normas Oficiales Mexicanas de Seguridad y Salud en el Trabajo</strong>. 
        Contamos con el registro de cursos correspondientes a cada norma, incluyendo las de organización, salud y seguridad ocupacional.
      </p>
    `,
    highlights: [
      "Documentación completa para auditorías de clientes nacionales e internacionales.",
      "Asesoría en dictaminación y acompañamiento ante Unidades de Verificación acreditadas.",
      "Capacitación con validez oficial como DC5 y emisión de constancias DC3 en materia de seguridad e higiene.",
      "Programas alineados a las NOMs de la STPS, garantizando cumplimiento y competitividad empresarial."
    ],
    image: "/img/services/servicio_2_2.jpg"
  },
  {
    id: "gestion-ambiental",
    title: "Gestión Ambiental",
    description: `
      <p>
        En <strong>Proyeckta Consultores</strong> te apoyamos en la gestión de trámites de 
        <strong>cumplimiento ambiental</strong> en sus diferentes niveles de competencia: municipal, estatal y federal. 
        Nos encargamos de que tu empresa cuente con la documentación, permisos y registros necesarios para operar en conformidad con la normatividad vigente.
      </p>
      <p>
        Ofrecemos acompañamiento en materia de <strong>emisiones a la atmósfera</strong>, incluyendo la elaboración de la 
        <em>Cédula de Operación Anual (COA)</em>, estudios de laboratorio y permisos relacionados.  
        Asimismo, gestionamos trámites de <strong>Impacto Ambiental</strong> como Manifestaciones de Impacto Ambiental (MIA), 
        informes preventivos, DTU y sus modificaciones, exenciones y avisos.
      </p>
      <p>
        También damos soporte en el <strong>manejo de residuos peligrosos y de manejo especial</strong>, 
        mediante registros y planes de manejo autorizados, además de otros trámites ambientales específicos 
        que requiera tu sector.
      </p>
    `,
    highlights: [
      "Gestión integral de trámites ambientales ante dependencias municipales, estatales y federales.",
      "Elaboración de la COA y permisos en materia de atmósfera, con estudios y reportes técnicos especializados.",
      "Asesoría y tramitación de MIA’s, informes preventivos, DTU y modificaciones de impacto ambiental.",
      "Registros y planes de manejo de residuos peligrosos y de manejo especial para asegurar el cumplimiento normativo."
    ],
    image: "/img/services/servicio_3_2.jpg"
  },
  {
    id: "certificaciones",
    title: "Programa de Capacitación de Brigadas de Emergencia",
    description: `
      <p>
        En <strong>Proyeckta Consultores</strong> te apoyamos en el cumplimiento de las 
        <strong>recomendaciones establecidas por la autoridad de Protección Civil</strong> y de la 
        <a href="https://dof.gob.mx/normasOficiales/4228/stps/stps.htm" target="_blank" rel="noopener noreferrer">
          NOM-002-STPS-2010
        </a>, enfocada en la prevención y atención de emergencias relacionadas con incendios.  
      </p>
      <p>
        Contamos con personal registrado ante la autoridad competente, lo que nos faculta para 
        <strong>emitir dictámenes de responsabilidad civil</strong> a través de los 
        <em>Responsables Oficiales de Protección Civil (ROPC)</em>.  
      </p>
      <p>
        Nuestro servicio incluye el seguimiento y la capacitación de brigadas de emergencia, 
        garantizando que tu organización esté preparada para responder de manera efectiva a 
        situaciones de riesgo y cumpla con la normatividad vigente.
      </p>
    `,
    highlights: [
      "Capacitación especializada para brigadas de emergencia en cumplimiento con la NOM-002-STPS-2010.",
      "Dictámenes oficiales de responsabilidad civil emitidos por ROPC acreditados.",
      "Acompañamiento integral en el seguimiento y aplicación de programas de Protección Civil.",
      "Garantía de cumplimiento normativo ante autoridades municipales, estatales y federales."
    ],
    image: "/img/services/servicio_1_1.jpg"
  }
];

export default services;
