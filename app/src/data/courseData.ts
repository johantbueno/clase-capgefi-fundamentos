// Datos del curso - Fundamentos de Planificación y Gestión de la Inversión Pública

export interface Unit {
  id: number;
  title: string;
  subtitle: string;
  content: Section[];
}

export interface Section {
  id: string;
  title: string;
  type: 'text' | 'list' | 'cards' | 'timeline' | 'matrix' | 'tree';
  content?: string;
  items?: ListItem[];
  cards?: CardItem[];
  timelineItems?: TimelineItem[];
  matrix?: MatrixData;
}

export interface ListItem {
  title: string;
  description: string;
}

export interface CardItem {
  title: string;
  description: string;
  icon?: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface MatrixData {
  headers: string[];
  rows: string[][];
}

export const courseInfo = {
  title: "Fundamentos de Planificación y Gestión de la Inversión Pública del Estado",
  subtitle: "Diplomado en Hacienda e Inversión Pública",
  institution: "Centro de Capacitación en Política y Gestión Fiscal (CAPGEFI)",
  facilitator: "Johan Tapia PhD",
  linkedin: "https://www.linkedin.com/in/johan-tapia-192183281/",
  duration: "15 horas",
  schedule: "Miércoles y Lunes | 9:00 a.m. - 12:00 p.m.",
  objective: "Conocer el proceso de planificación y gestión de la inversión pública, el marco legal regulatorio No. 498-06; así como, los objetivos, alcance, los elementos que la componen y la interrelación existente entre cada uno de ellos.",
  vision: "Lograr una visión amplia, enmarcada dentro de una gestión de proyectos de inversión eficiente, ética y transparente"
};

export const units: Unit[] = [
  {
    id: 1,
    title: "Unidad I",
    subtitle: "El Sistema Nacional de Planificación e Inversión Pública en la República Dominicana",
    content: [
      {
        id: "u1-contexto",
        title: "Contexto Histórico: Origen y Práctica de la Planificación hasta 2006",
        type: "timeline",
        timelineItems: [
          {
            year: "1965",
            title: "Ley 55 del 22 de noviembre de 1965",
            description: "Estableció el Sistema Nacional de Planificación Económica, Social y Administrativa, creando el Consejo Nacional de Desarrollo como órgano rector de la planificación en República Dominicana."
          },
          {
            year: "Pre-Reforma",
            title: "Contexto Pre-Reforma",
            description: "Durante cuatro décadas, el sistema de planificación dominicano operaba con un enfoque centrado en el corto plazo, desarticulado de los procesos presupuestarios y con escasa participación ciudadana."
          },
          {
            year: "2006",
            title: "Reforma de 2006",
            description: "La Ley 55 de 1965 fue derogada por la Ley 498-06 el 28 de diciembre de 2006, transformando radicalmente la planificación e inversión pública."
          }
        ]
      },
      {
        id: "u1-limitaciones",
        title: "Limitaciones del Sistema Anterior",
        type: "list",
        items: [
          { title: "Falta de articulación", description: "Entre planificación y presupuesto" },
          { title: "Planificación centralizada", description: "Sin participación territorial" },
          { title: "Débil seguimiento", description: "Y evaluación de resultados" },
          { title: "Escasa transparencia", description: "En la asignación de recursos" },
          { title: "Baja priorización", description: "De proyectos de inversión pública" }
        ]
      },
      {
        id: "u1-reforma",
        title: "La Reforma de 2006: Transformación del Estado",
        type: "cards",
        cards: [
          {
            title: "Ley 496-06",
            description: "Crea el Ministerio de Economía, Planificación y Desarrollo (MEPyD) como órgano rector del Sistema Nacional de Planificación. (28 de diciembre de 2006)"
          },
          {
            title: "Ley 498-06",
            description: "Crea el Sistema Nacional de Planificación e Inversión Pública (SNPIP), estableciendo principios, órganos, procesos e instrumentos de planificación. (28 de diciembre de 2006)"
          },
          {
            title: "Ley 494-06",
            description: "Crea la Secretaría de Estado de Hacienda, fortaleciendo la gestión financiera del Estado y su articulación con la planificación. (27 de diciembre de 2006)"
          }
        ]
      },
      {
        id: "u1-leyes-comp",
        title: "Otras Leyes Complementarias",
        type: "list",
        items: [
          { title: "Ley 423-06", description: "Orgánica de Presupuesto del Sector Público" },
          { title: "Ley 6-06", description: "De Crédito Público" },
          { title: "Ley 567-05", description: "De la Tesorería Nacional" },
          { title: "Ley 340-06", description: "De Compras y Contrataciones" }
        ]
      },
      {
        id: "u1-objetivo-reforma",
        title: "Objetivo de la Reforma",
        type: "text",
        content: "Establecer un sistema de Gestión para Resultados en el Desarrollo (GpRD) que oriente la inversión pública hacia la mejora de las condiciones de vida de la población y el logro de un desarrollo sostenible eficaz y eficiente."
      },
      {
        id: "u1-concepto",
        title: "¿Qué es Planificar?",
        type: "text",
        content: "Planificar es pensar antes de actuar... pensar de manera sistemática. Es el intento por gobernar el futuro e imponerse a sus circunstancias: lo contrario de improvisar. — Carlos Matus"
      },
      {
        id: "u1-preguntas",
        title: "Las Preguntas Clave de la Planificación",
        type: "cards",
        cards: [
          { title: "1. ¿Qué se quiere lograr?", description: "Objetivos - Definir metas claras y medibles" },
          { title: "2. ¿Cómo lograrlo?", description: "Planes de acción y recursos - Establecer estrategias" },
          { title: "3. ¿Cuándo?", description: "Plazo temporal - Establecer cronogramas" }
        ]
      },
      {
        id: "u1-elementos",
        title: "Elementos de la Planificación",
        type: "cards",
        cards: [
          { title: "Misión", description: "Propósito fundamental de la organización. Razón de ser que define qué hace la institución, para quién y qué la hace única." },
          { title: "Visión", description: "Imagen deseada del futuro. Estado al que aspira llegar la organización en un horizonte temporal definido." },
          { title: "Objetivos", description: "Resultados deseados que marcan la dirección de las decisiones administrativas y forman criterios para medir logros." },
          { title: "Planes", description: "Documentos que explican cómo alcanzar las metas, asignación de recursos, calendarios y acciones necesarias." },
          { title: "Políticas", description: "Directrices generales destinadas a orientar y enmarcar la toma de decisiones coherentes con los objetivos." },
          { title: "Procedimientos", description: "Conjunto de pasos sucesivos que dan los gerentes para responder a problemas estructurados." },
          { title: "Programas/Proyectos", description: "Conjunto de planes diseñados para una actividad o período específico, orientados a resultados concretos." },
          { title: "Presupuestos", description: "Cuantificación en términos monetarios de los planes. Guía de planificación y dispositivo de control." }
        ]
      },
      {
        id: "u1-snipp",
        title: "Sistema Nacional de Planificación e Inversión Pública (SNPIP)",
        type: "text",
        content: "El SNPIP está integrado por el conjunto de principios, normas, órganos y procesos a través de los cuales se fijan las políticas, objetivos, metas y prioridades del desarrollo económico y social, evaluando su cumplimiento. Promulgada el 28 de diciembre de 2006."
      },
      {
        id: "u1-componentes",
        title: "Componentes del SNPIP",
        type: "cards",
        cards: [
          { title: "1. Principios Rectores", description: "Jerarquía, complementariedad, coherencia, consistencia, participación, transparencia" },
          { title: "2. Normas Legales", description: "Ley 498-06, Reglamentos, Normas Técnicas, Instructivos" },
          { title: "3. Órganos del Sistema", description: "Consejo de Gobierno, MEPyD, UIPyD, Consejos Territoriales" },
          { title: "4. Procesos", description: "Direccionamiento estratégico, Planificación institucional, Inversión pública, Territorial" },
          { title: "5. Instrumentos", description: "END, PNPSP, Planes Sectoriales, Institucionales y Territoriales" }
        ]
      },
      {
        id: "u1-principios",
        title: "Principios Rectores del SNPIP",
        type: "cards",
        cards: [
          { title: "Jerarquía", description: "Los instrumentos de planificación se ordenan según su nivel estratégico, desde la visión de largo plazo hasta los planes operativos." },
          { title: "Complementariedad", description: "Los diferentes instrumentos se complementan mutuamente para conformar un sistema integral de planificación." },
          { title: "Coherencia", description: "Los planes deben ser coherentes entre sí y con los objetivos de desarrollo establecidos en la Estrategia Nacional." },
          { title: "Consistencia", description: "Los objetivos, metas y recursos deben ser consistentes con las capacidades institucionales y financieras disponibles." },
          { title: "Participación", description: "La sociedad civil participa en la formulación, ejecución, auditoría y evaluación de las políticas públicas." },
          { title: "Transparencia", description: "Acceso a la información, rendición de cuentas y veeduría social en todos los procesos del sistema." },
          { title: "Flexibilidad", description: "Capacidad de adaptación a cambios en el contexto nacional e internacional sin perder el rumbo estratégico." },
          { title: "Sostenibilidad", description: "Las políticas y proyectos deben ser sostenibles económica, social y ambientalmente en el largo plazo." }
        ]
      },
      {
        id: "u1-ambitos",
        title: "Ámbitos de Aplicación del SNPIP",
        type: "cards",
        cards: [
          { title: "1. Planificación Global", description: "Nivel estratégico del Estado. Define la visión de país a largo plazo y establece los objetivos nacionales de desarrollo que orientan la acción de todo el sector público." },
          { title: "2. Planificación Institucional", description: "Nivel organizacional. Cada institución define su contribución al logro de los objetivos nacionales mediante planes estratégicos institucionales (PEI)." },
          { title: "3. Planificación Sectorial", description: "Nivel sectorial. Agrupa instituciones con funciones similares (salud, educación, infraestructura) para coordinar políticas y optimizar recursos." },
          { title: "4. Planificación Territorial", description: "Nivel regional y local. Adapta las políticas nacionales a las realidades regionales, provinciales y municipales, promoviendo el desarrollo equilibrado del territorio." }
        ]
      },
      {
        id: "u1-instrumentos-nivel",
        title: "Instrumentos por Nivel",
        type: "list",
        items: [
          { title: "Global", description: "Estrategia Nacional de Desarrollo (END), PNPSP" },
          { title: "Institucional", description: "Planes Estratégicos Institucionales (PEI)" },
          { title: "Sectorial", description: "Planes Estratégicos Sectoriales" },
          { title: "Territorial", description: "Planes Estratégicos Territoriales" }
        ]
      },
      {
        id: "u1-procesos",
        title: "Procesos de Planificación en el SNPIP",
        type: "cards",
        cards: [
          { title: "1. Direccionamiento Estratégico del Estado", description: "Definición de la visión de país a largo plazo y los objetivos estratégicos nacionales. Incluye la formulación de la Estrategia Nacional de Desarrollo (END) y su actualización periódica. Horizonte: 20+ años | Revisión: cada 10 años" },
          { title: "2. Planificación Institucional y Presupuesto", description: "Elaboración de los Planes Estratégicos Institucionales (PEI) y su articulación con el presupuesto anual. Cada institución define objetivos, resultados, productos y recursos necesarios. Horizonte: 3-4 años | Actualización: anual" },
          { title: "3. Proceso de Inversión Pública", description: "Formulación, evaluación, priorización y seguimiento de proyectos de inversión pública mediante el Sistema Nacional de Inversión Pública (SNIP), asegurando rentabilidad social. Ciclo completo: perfil → ejecución → operación" },
          { title: "4. Planificación Territorial", description: "Adaptación de las políticas nacionales a las realidades territoriales mediante planes regionales, provinciales y municipales, con participación de Consejos de Desarrollo. Horizonte: 4 años | Revisión: anual" }
        ]
      },
      {
        id: "u1-seguimiento",
        title: "Procesos de Monitoreo y Evaluación",
        type: "cards",
        cards: [
          { title: "Evaluación de Procesos", description: "Mide la ejecución de actividades y el uso de recursos (eficiencia)." },
          { title: "Evaluación de Resultados", description: "Mide el logro de productos y resultados inmediatos (eficacia)." },
          { title: "Evaluación de Impacto", description: "Mide los efectos a largo plazo en la población (efectividad)." }
        ]
      },
      {
        id: "u1-indicadores",
        title: "Indicadores de Desempeño (SMART)",
        type: "list",
        items: [
          { title: "Específicos", description: "Claros y bien definidos" },
          { title: "Mensurables", description: "Cuantificables" },
          { title: "Alcanzables", description: "Realistas y viables" },
          { title: "Relevantes", description: "Alineados con objetivos" },
          { title: "Temporales", description: "Con plazos definidos" }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Unidad II",
    subtitle: "Estructura del Sistema Nacional de Planificación e Inversión Pública",
    content: [
      {
        id: "u2-consejo",
        title: "Consejo de Gobierno: Máxima Instancia de Planificación",
        type: "text",
        content: "El Consejo de Gobierno es el órgano superior de planificación del Estado, encargado de aprobar los instrumentos de planificación nacional y orientar la gestión pública hacia el logro de los objetivos de desarrollo. Sustituye al antiguo Consejo Nacional de Desarrollo (Ley 55-65)."
      },
      {
        id: "u2-atribuciones",
        title: "Atribuciones Principales del Consejo de Gobierno",
        type: "list",
        items: [
          { title: "1. Aprobar la END", description: "Estrategia Nacional de Desarrollo" },
          { title: "2. Aprobar el PNPSP", description: "Plan Nacional Plurianual del Sector Público" },
          { title: "3. Lineamientos estratégicos", description: "Aprobar los lineamientos para la elaboración de planes" },
          { title: "4. Definir prioridades", description: "Prioridades nacionales de inversión pública" },
          { title: "5. Evaluar cumplimiento", description: "Evaluar el cumplimiento de objetivos y metas de desarrollo" },
          { title: "6. Coordinar articulación", description: "Coordinar la articulación entre planificación y presupuesto" }
        ]
      },
      {
        id: "u2-composicion",
        title: "Composición del Consejo de Gobierno",
        type: "cards",
        cards: [
          { title: "Presidente", description: "Presidente de la República" },
          { title: "Vicepresidente", description: "Vicepresidente de la República" },
          { title: "Miembros", description: "Secretarios de Estado, Directores de instituciones clave" },
          { title: "Secretario Técnico", description: "Ministro de Economía, Planificación y Desarrollo" }
        ]
      },
      {
        id: "u2-reuniones",
        title: "Frecuencia de Reuniones",
        type: "text",
        content: "El Consejo de Gobierno se reúne ordinariamente cada tres meses y extraordinariamente cuando lo convoque el Presidente de la República o lo soliciten la mayoría de sus miembros."
      },
      {
        id: "u2-comision",
        title: "Comisión Técnica Delegada",
        type: "text",
        content: "La Comisión Técnica Delegada es el órgano de apoyo técnico al Consejo de Gobierno, encargado de preparar los asuntos que se someterán a consideración del Consejo y hacer seguimiento a las decisiones adoptadas."
      },
      {
        id: "u2-responsabilidades",
        title: "Responsabilidades de la Comisión Técnica Delegada",
        type: "list",
        items: [
          { title: "Preparación de Documentos", description: "Elaborar y revisar los instrumentos de planificación antes de su presentación al Consejo de Gobierno" },
          { title: "Análisis Técnico", description: "Evaluar la coherencia, consistencia y viabilidad de propuestas de políticas públicas y proyectos" },
          { title: "Seguimiento", description: "Monitorear el cumplimiento de acuerdos del Consejo de Gobierno y proponer acciones correctivas" },
          { title: "Coordinación", description: "Articular el trabajo entre diferentes instituciones para garantizar coherencia en la gestión pública" }
        ]
      },
      {
        id: "u2-comision-comp",
        title: "Composición de la Comisión Técnica Delegada",
        type: "cards",
        cards: [
          { title: "Coordinador", description: "Ministro de Economía, Planificación y Desarrollo" },
          { title: "Miembro", description: "Ministro de Hacienda - Articulación planificación-presupuesto" },
          { title: "Miembros", description: "Directores de áreas clave del MEPyD: Planificación, Inversión Pública, Desarrollo Territorial" }
        ]
      },
      {
        id: "u2-territoriales",
        title: "Consejos Territoriales de Desarrollo",
        type: "text",
        content: "Los Consejos Territoriales de Desarrollo son órganos de participación ciudadana que promueven la planificación territorial participativa, adaptando las políticas nacionales a las realidades regionales, provinciales y municipales."
      },
      {
        id: "u2-funciones-ter",
        title: "Funciones Principales de los Consejos Territoriales",
        type: "list",
        items: [
          { title: "Formular planes", description: "Formular planes estratégicos territoriales" },
          { title: "Priorizar proyectos", description: "Priorizar proyectos de inversión territoriales" },
          { title: "Promover participación", description: "Promover la participación ciudadana en la planificación" },
          { title: "Articular políticas", description: "Articular políticas nacionales con realidades locales" },
          { title: "Monitorear", description: "Monitorear el desarrollo territorial" },
          { title: "Coordinar", description: "Coordinar con gobiernos locales y sociedad civil" }
        ]
      },
      {
        id: "u2-niveles-ter",
        title: "Niveles Territoriales",
        type: "cards",
        cards: [
          { title: "Consejos Regionales", description: "Agrupan varias provincias con características similares para coordinar políticas de desarrollo regional. 10 Regiones Únicas de Planificación" },
          { title: "Consejos Provinciales", description: "Operan a nivel provincial articulando las políticas regionales con las municipalidades. 32 provincias + Distrito Nacional" },
          { title: "Consejos Municipales", description: "Planifican el desarrollo local con participación de la sociedad civil y autoridades municipales. 158 municipios" }
        ]
      },
      {
        id: "u2-mepyd",
        title: "Ministerio de Economía, Planificación y Desarrollo (MEPyD)",
        type: "text",
        content: "Creado por la Ley 496-06 como órgano rector del Sistema Nacional de Planificación e Inversión Pública (SNPIP), responsable de formular y coordinar la planificación nacional del desarrollo. (28 de diciembre de 2006)"
      },
      {
        id: "u2-atrib-mepyd",
        title: "Atribuciones Principales del MEPyD",
        type: "list",
        items: [
          { title: "Formular la END", description: "Estrategia Nacional de Desarrollo" },
          { title: "Elaborar el PNPSP", description: "Plan Nacional Plurianual del Sector Público" },
          { title: "Regular el SNIP", description: "Sistema Nacional de Inversión Pública" },
          { title: "Coordinar cooperación", description: "Coordinar la cooperación internacional" },
          { title: "Ordenamiento territorial", description: "Promover el ordenamiento territorial" },
          { title: "Programación macroeconómica", description: "Realizar programación macroeconómica" }
        ]
      },
      {
        id: "u2-estructura",
        title: "Estructura Organizativa del MEPyD",
        type: "cards",
        cards: [
          { title: "1. Despacho del Ministro", description: "Dirección superior y representación" },
          { title: "2. Viceministerios", description: "Planificación, Desarrollo Económico y Social" },
          { title: "3. Direcciones Generales", description: "Inversión Pública, Ordenamiento Territorial, Cooperación Internacional" }
        ]
      },
      {
        id: "u2-uipyd",
        title: "Unidades Institucionales de Planificación y Desarrollo (UIPyD)",
        type: "text",
        content: "Las UIPyD son órganos creados en cada institución pública responsables de coordinar los procesos de planificación institucional, articular los planes con el SNPIP y garantizar el enfoque de gestión para resultados."
      },
      {
        id: "u2-funciones-uipyd",
        title: "Funciones Principales de las UIPyD",
        type: "list",
        items: [
          { title: "1. Formular PEI", description: "Formular y actualizar el Plan Estratégico Institucional" },
          { title: "2. Coordinar proyectos", description: "Coordinar la formulación de proyectos de inversión pública" },
          { title: "3. Articular PEI-Presupuesto", description: "Articular el PEI con el presupuesto institucional" },
          { title: "4. Seguimiento y evaluación", description: "Realizar el seguimiento y evaluación del PEI" },
          { title: "5. Coordinar", description: "Coordinar con el MEPyD y otros organismos" },
          { title: "6. Capacitar", description: "Capacitar al personal en planificación y gestión" }
        ]
      },
      {
        id: "u2-ubicacion",
        title: "Ubicación y Dependencia de las UIPyD",
        type: "cards",
        cards: [
          { title: "Ubicación Organizativa", description: "Dependen directamente de la máxima autoridad institucional (Ministro, Director, etc.)" },
          { title: "Vinculación Funcional", description: "Se coordinan técnicamente con el MEPyD para asegurar coherencia con el SNPIP" },
          { title: "Personal", description: "Profesionales especializados en planificación, economía, administración pública" }
        ]
      },
      {
        id: "u2-organigrama",
        title: "Organigrama del SNPIP",
        type: "cards",
        cards: [
          { title: "CONSEJO DE GOBIERNO", description: "Máxima Instancia de Planificación" },
          { title: "COMISIÓN TÉCNICA DELEGADA", description: "Apoyo Técnico al Consejo de Gobierno" },
          { title: "MEPyD", description: "Órgano Rector del SNPIP" },
          { title: "UIPyD", description: "Nivel Institucional - Ministerios, Direcciones, Instituciones Autónomas" },
          { title: "CONSEJOS TERRITORIALES", description: "Nivel Territorial - Regionales, Provinciales, Municipales" }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Unidad III",
    subtitle: "Los Instrumentos de la Planificación",
    content: [
      {
        id: "u3-end",
        title: "Estrategia Nacional de Desarrollo (END) 2030",
        type: "text",
        content: "La END 2030 es el instrumento rector de planificación nacional, aprobada por Ley 1-12 (2012), que define la visión de país a largo plazo y establece los ejes estratégicos, objetivos y líneas de acción para el desarrollo sostenible. Aprobada el 25 de julio de 2012."
      },
      {
        id: "u3-vision",
        title: "Visión de la Nación 2030",
        type: "text",
        content: '"República Dominicana es un país próspero, donde las personas viven dignamente, apegadas a valores éticos y en el marco de una democracia participativa que garantiza el Estado social y democrático de derecho..."'
      },
      {
        id: "u3-estructura",
        title: "Estructura de la END 2030",
        type: "cards",
        cards: [
          { title: "1. Estado Social y Democrático de Derecho", description: "Administración pública eficiente, seguridad ciudadana, democracia participativa" },
          { title: "2. Igualdad de Derechos y Oportunidades", description: "Educación, salud, equidad de género, cohesión territorial, vivienda digna" },
          { title: "3. Economía Sostenible, Integradora y Competitiva", description: "Macroeconomía sostenible, competitividad, innovación, empleo decente" },
          { title: "4. Sociedad Ambientalmente Sostenible", description: "Gestión ambiental, cambio climático, gestión de riesgos, energías renovables" }
        ]
      },
      {
        id: "u3-dato",
        title: "Dato Clave",
        type: "text",
        content: "La END contempla 4 ejes estratégicos, 19 objetivos generales, 58 objetivos específicos y 460 líneas de acción."
      },
      {
        id: "u3-eje1",
        title: "Eje 1: Estado Social y Democrático de Derecho",
        type: "list",
        items: [
          { title: "Administración pública eficiente y transparente", description: "" },
          { title: "Imperio de la ley y seguridad ciudadana", description: "" },
          { title: "Democracia participativa", description: "" },
          { title: "Seguridad y convivencia pacífica", description: "" },
          { title: "Fortalecimiento institucional y gobernabilidad democrática", description: "" }
        ]
      },
      {
        id: "u3-eje2",
        title: "Eje 2: Igualdad de Derechos y Oportunidades",
        type: "list",
        items: [
          { title: "Educación de calidad para todos", description: "" },
          { title: "Salud y seguridad social integral", description: "" },
          { title: "Igualdad de derechos y oportunidades", description: "" },
          { title: "Cohesión territorial y vivienda digna", description: "" },
          { title: "Reducción de pobreza y desigualdad social", description: "" }
        ]
      },
      {
        id: "u3-eje3",
        title: "Eje 3: Economía Sostenible, Integradora y Competitiva",
        type: "list",
        items: [
          { title: "Macroeconomía sostenible", description: "" },
          { title: "Competitividad e innovación", description: "" },
          { title: "Empleos suficientes y dignos", description: "" },
          { title: "Infraestructura y logística", description: "" },
          { title: "Crecimiento económico con equidad", description: "" }
        ]
      },
      {
        id: "u3-eje4",
        title: "Eje 4: Sociedad Ambientalmente Sostenible",
        type: "list",
        items: [
          { title: "Gestión ambiental sostenible", description: "" },
          { title: "Adaptación al cambio climático", description: "" },
          { title: "Gestión integral de riesgos", description: "" },
          { title: "Energías renovables", description: "" },
          { title: "Desarrollo sostenible y resiliencia", description: "" }
        ]
      },
      {
        id: "u3-pnpsp",
        title: "Plan Nacional Plurianual del Sector Público (PNPSP)",
        type: "text",
        content: "El PNPSP es el instrumento de planificación de mediano plazo (4 años) que define y organiza el aporte del sector público a la concreción de la END, estableciendo prioridades, objetivos, metas y requerimientos de recursos."
      },
      {
        id: "u3-contenido-pnpsp",
        title: "Contenido del PNPSP",
        type: "list",
        items: [
          { title: "Prioridades nacionales", description: "De corto y mediano plazo" },
          { title: "Objetivos, metas e indicadores", description: "Por sector e institución" },
          { title: "Programas y proyectos", description: "De inversión priorizados" },
          { title: "Requerimientos de recursos", description: "Financieros" },
          { title: "Metodología", description: "De seguimiento y evaluación" },
          { title: "Actualización", description: "Anual obligatoria" }
        ]
      },
      {
        id: "u3-proceso-pnpsp",
        title: "Proceso de Elaboración del PNPSP",
        type: "list",
        items: [
          { title: "1. El MEPyD prepara", description: "La propuesta de prioridades" },
          { title: "2. Consulta", description: "Con instituciones y Consejos Territoriales" },
          { title: "3. Revisión", description: "Por la Comisión Técnica Delegada" },
          { title: "4. Aprobación", description: "Por el Consejo de Gobierno (antes del 31 de mayo)" }
        ]
      },
      {
        id: "u3-vinculacion",
        title: "Vinculación con el Presupuesto",
        type: "text",
        content: "El PNPSP actualizado es utilizado por el Ministerio de Hacienda para la elaboración de la política presupuestaria anual y la fijación de topes institucionales de gasto. Los proyectos de inversión incluyen estudios de preinversión y puesta en marcha."
      },
      {
        id: "u3-sectoriales",
        title: "Planes Estratégicos Sectoriales",
        type: "text",
        content: "Los Planes Estratégicos Sectoriales operacionalizan la END en cada sector específico (salud, educación, infraestructura, etc.), coordinando las políticas y acciones de instituciones con funciones similares para optimizar recursos y evitar duplicidades."
      },
      {
        id: "u3-contenido-sec",
        title: "Contenido de los Planes Sectoriales",
        type: "list",
        items: [
          { title: "1. Diagnóstico Sectorial", description: "Situación actual, problemas y desafíos del sector" },
          { title: "2. Objetivos Estratégicos", description: "Metas alineadas con la END y el PNPSP" },
          { title: "3. Líneas de Acción", description: "Estrategias específicas por subsector" },
          { title: "4. Programas y Proyectos", description: "Iniciativas prioritarias de inversión" },
          { title: "5. Indicadores y Metas", description: "Sistema de medición de resultados" },
          { title: "6. Requerimientos de Recursos", description: "Financiamiento necesario para el sector" }
        ]
      },
      {
        id: "u3-sectores",
        title: "Sectores Prioritarios",
        type: "list",
        items: [
          { title: "Salud", description: "" },
          { title: "Educación", description: "" },
          { title: "Infraestructura", description: "" },
          { title: "Agricultura", description: "" },
          { title: "Energía", description: "" },
          { title: "Seguridad", description: "" },
          { title: "Medio Ambiente", description: "" },
          { title: "Tecnología", description: "" }
        ]
      },
      {
        id: "u3-pei",
        title: "Planes Estratégicos Institucionales (PEI)",
        type: "text",
        content: "Los Planes Estratégicos Institucionales (PEI) son instrumentos de planificación organizacional que definen la contribución de cada institución al logro de objetivos nacionales, estableciendo su marco estratégico, objetivos, resultados, productos y recursos necesarios."
      },
      {
        id: "u3-proceso-pei",
        title: "Proceso de Elaboración del PEI",
        type: "list",
        items: [
          { title: "1. Análisis de Situación", description: "Diagnóstico institucional (fortalezas, debilidades)" },
          { title: "2. Definición del Marco Estratégico", description: "Misión, visión, valores institucionales" },
          { title: "3. Establecimiento de Objetivos", description: "Alineados con la END y PNPSP" },
          { title: "4. Identificación de Resultados y Productos", description: "Cadena de valor pública institucional" },
          { title: "5. Asignación de Recursos", description: "Presupuesto necesario para el PEI" },
          { title: "6. Aprobación y Socialización", description: "Por la máxima autoridad institucional" }
        ]
      },
      {
        id: "u3-estructura-pei",
        title: "Estructura del PEI",
        type: "cards",
        cards: [
          { title: "Marco Estratégico", description: "Misión, Visión, Valores institucionales" },
          { title: "Objetivos Estratégicos", description: "Metas institucionales alineadas con la END" },
          { title: "Resultados Esperados", description: "Impactos en la población beneficiaria" },
          { title: "Productos y Servicios", description: "Bienes y servicios que entrega la institución" }
        ]
      },
      {
        id: "u3-territoriales",
        title: "Planes Estratégicos Territoriales",
        type: "text",
        content: "Los Planes Estratégicos Territoriales adaptan las políticas nacionales a las realidades regionales, provinciales y municipales, promoviendo un desarrollo equilibrado que aproveche las potencialidades de cada territorio y reduzca disparidades."
      },
      {
        id: "u3-contenido-ter",
        title: "Contenido de los Planes Territoriales",
        type: "list",
        items: [
          { title: "1. Diagnóstico Territorial", description: "Características socioeconómicas, ambientales, culturales" },
          { title: "2. Visión de Desarrollo Territorial", description: "Imagen deseada del territorio a mediano plazo" },
          { title: "3. Objetivos y Metas Territoriales", description: "Alineados con la END y PNPSP" },
          { title: "4. Estrategias de Desarrollo", description: "Aprovechamiento de potencialidades locales" },
          { title: "5. Proyectos Prioritarios", description: "Inversión pública territorial priorizada" },
          { title: "6. Mecanismos de Participación", description: "Consejos Territoriales de Desarrollo" }
        ]
      },
      {
        id: "u3-niveles-ter",
        title: "Niveles Territoriales",
        type: "cards",
        cards: [
          { title: "Planes Regionales", description: "10 Regiones Únicas de Planificación (RUP). Coordinan políticas de desarrollo regional." },
          { title: "Planes Provinciales", description: "32 provincias + Distrito Nacional. Articulan políticas regionales con municipios." },
          { title: "Planes Municipales", description: "158 municipios. Planificación del desarrollo local con participación ciudadana." }
        ]
      },
      {
        id: "u3-transversales",
        title: "Políticas Transversales de la END",
        type: "text",
        content: "Las Políticas Transversales son enfoques que deben incorporarse en todos los planes, programas y proyectos públicos, independientemente del sector o nivel territorial, para garantizar coherencia con los valores y principios de la END 2030."
      },
      {
        id: "u3-7-politicas",
        title: "Las Siete Políticas Transversales",
        type: "cards",
        cards: [
          { title: "Derechos Humanos", description: "Identificar situaciones de discriminación y adoptar acciones para la equidad" },
          { title: "Enfoque de Género", description: "Identificar discriminación entre hombres y mujeres, promover equidad de género" },
          { title: "Sostenibilidad Ambiental", description: "Criterios de gestión ambiental y manejo adecuado de riesgos" },
          { title: "Cohesión Territorial", description: "Dimensión territorial en políticas públicas, desarrollo equilibrado" },
          { title: "Participación Social", description: "Espacios de corresponsabilidad ciudadana, transparencia y rendición de cuentas" },
          { title: "Uso de TICs", description: "Tecnologías de información para mejorar gestión pública y transparencia" }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Unidad IV",
    subtitle: "Otras Temáticas Relevantes Vinculadas al SNPIP",
    content: [
      {
        id: "u4-articulacion",
        title: "Articulación Inter-Sistémica",
        type: "text",
        content: "El SNPIP no opera de manera aislada. Está estrechamente relacionado con otros sistemas administrativos del Estado que conforman el Sistema Integrado de Gestión Financiera (SIGEF) y la administración pública."
      },
      {
        id: "u4-sistemas",
        title: "Sistemas Interrelacionados",
        type: "cards",
        cards: [
          { title: "Presupuesto", description: "Asignación de recursos" },
          { title: "Crédito Público", description: "Financiamiento proyectos" },
          { title: "Tesorería", description: "Ejecución de pagos" },
          { title: "Contabilidad", description: "Registro transacciones" },
          { title: "Compras Públicas", description: "Adquisición bienes y servicios" },
          { title: "RRHH", description: "Gestión del talento humano" },
          { title: "Bienes Nacionales", description: "Administración activos" },
          { title: "Control Interno", description: "Fiscalización y auditoría" }
        ]
      },
      {
        id: "u4-puntos",
        title: "Puntos de Articulación Clave",
        type: "list",
        items: [
          { title: "Planificación ↔ Presupuesto", description: "Los planes se traducen en asignaciones presupuestarias. El PNPSP informa el presupuesto plurianual." },
          { title: "Inversión Pública ↔ Crédito Público", description: "Los proyectos priorizados en el SNIP son financiados mediante operaciones de crédito." },
          { title: "Proyectos ↔ Compras Públicas", description: "La ejecución de proyectos requiere contrataciones públicas reguladas por la Ley 340-06." },
          { title: "Planificación ↔ Control Interno", description: "El seguimiento a planes y proyectos es auditado por el Sistema de Control Interno." }
        ]
      },
      {
        id: "u4-sigef",
        title: "Sistema Integrado de Gestión Financiera (SIGEF)",
        type: "text",
        content: "El Sistema Integrado de Gestión Financiera del Estado articula planificación, presupuesto, tesorería, contabilidad y crédito público en una plataforma tecnológica unificada."
      },
      {
        id: "u4-gprd",
        title: "Gestión para Resultados en el Desarrollo (GpRD)",
        type: "text",
        content: "La Nueva Gestión Pública (NGP) en República Dominicana adopta el enfoque de Gestión para Resultados en el Desarrollo (GpRD), que orienta la inversión pública hacia la mejora de las condiciones de vida de la población y el logro de objetivos medibles."
      },
      {
        id: "u4-ciclo",
        title: "Ciclo de la GpRD",
        type: "list",
        items: [
          { title: "1. Planificación Estratégica", description: "Definición de objetivos y metas (END, PNPSP, PEI)" },
          { title: "2. Programación Presupuestaria", description: "Asignación de recursos a prioridades" },
          { title: "3. Ejecución y Seguimiento", description: "Implementación y monitoreo de actividades" },
          { title: "4. Evaluación de Resultados", description: "Medición de impactos en la población" },
          { title: "5. Rendición de Cuentas", description: "Información pública y transparencia" }
        ]
      },
      {
        id: "u4-vinculacion",
        title: "Vinculación Planificación-Presupuesto",
        type: "cards",
        cards: [
          { title: "Programación Macroeconómica", description: "El MEPyD realiza proyecciones económicas antes del 31 de marzo para informar la política fiscal." },
          { title: "Topes Presupuestarios", description: "El PNPSP define topes institucionales de gasto que el Ministerio de Hacienda utiliza para elaborar el presupuesto." },
          { title: "Priorización de Inversiones", description: "Solo proyectos registrados y priorizados en el SNIP pueden incluirse en el presupuesto." },
          { title: "Seguimiento Financiero", description: "El sistema de información del SNIP está interconectado con el SIGEF para seguimiento físico-financiero." }
        ]
      },
      {
        id: "u4-cooperacion",
        title: "SNPIP y Cooperación Internacional",
        type: "text",
        content: "El SNPIP articula la gestión de la cooperación internacional con la planificación nacional, asegurando que los recursos externos se alineen con las prioridades de desarrollo establecidas en la END y el PNPSP."
      },
      {
        id: "u4-funciones-coop",
        title: "Funciones del MEPyD en Cooperación",
        type: "list",
        items: [
          { title: "1. Coordinación Nacional", description: "Ente rector de la cooperación internacional" },
          { title: "2. Alineación Estratégica", description: "Vincula cooperación con END y PNPSP" },
          { title: "3. Seguimiento y Evaluación", description: "Monitorea proyectos de cooperación" },
          { title: "4. Articulación Interinstitucional", description: "Coordina con instituciones receptoras" },
          { title: "5. Información y Transparencia", description: "Sistema de información de cooperación" }
        ]
      },
      {
        id: "u4-paris",
        title: "Compromisos de París (2005)",
        type: "text",
        content: "República Dominicana suscribió los principios de París sobre Eficacia de la Ayuda al Desarrollo, que promueven:"
      },
      {
        id: "u4-principios-paris",
        title: "Principios de París",
        type: "cards",
        cards: [
          { title: "Apropiación", description: "Los países socios lideran su desarrollo" },
          { title: "Alineación", description: "La cooperación se adapta a prioridades nacionales" },
          { title: "Armonización", description: "Coordinación entre donantes" },
          { title: "Resultados", description: "Orientación a logros medibles" },
          { title: "Responsabilidad", description: "Transparencia mutua" }
        ]
      },
      {
        id: "u4-socios",
        title: "Principales Socios de Cooperación",
        type: "text",
        content: "BID, Banco Mundial, FMI, PNUD, Unión Europea, USAID, JICA, entre otros. La cooperación se orienta a sectores priorizados en la END. La Dirección General de Cooperación Internacional del MEPyD coordina la cooperación bilateral y multilateral."
      },
      {
        id: "u4-metas",
        title: "SNPIP y Metas Presidenciales",
        type: "text",
        content: "El SNPIP articula las metas presidenciales y compromisos de gobierno con la planificación nacional, asegurando que las promesas electorales y prioridades del ejecutivo se traduzcan en planes, programas y proyectos concretos."
      },
      {
        id: "u4-caracteristicas",
        title: "Características de las Metas Presidenciales",
        type: "cards",
        cards: [
          { title: "Priorización Estratégica", description: "Selección de objetivos con mayor impacto en la población y alineados con la END." },
          { title: "Medición de Resultados", description: "Indicadores claros y metas cuantificables para evaluar el cumplimiento." },
          { title: "Transparencia", description: "Información pública sobre avances mediante portales de transparencia." },
          { title: "Responsabilidad Institucional", description: "Asignación clara de responsables por meta en cada institución." }
        ]
      },
      {
        id: "u4-proceso-metas",
        title: "Proceso de Priorización de Metas",
        type: "list",
        items: [
          { title: "1. Definición de Prioridades", description: "El Presidente establece metas estratégicas" },
          { title: "2. Artículo en el PNPSP", description: "El MEPyD incorpora metas en el plan plurianual" },
          { title: "3. Asignación Presupuestaria", description: "El Ministerio de Hacienda asigna recursos" },
          { title: "4. Ejecución y Seguimiento", description: "Las instituciones implementan y reportan avances" },
          { title: "5. Evaluación y Rendición", description: "Informes periódicos al Consejo de Gobierno" }
        ]
      },
      {
        id: "u4-balance",
        title: "Balance entre Metas y END",
        type: "text",
        content: "Las metas presidenciales deben coexistir armónicamente con los objetivos de la END, complementando prioridades de corto plazo sin descuidar metas de largo plazo. El Consejo de Ministros Extendido revisa periódicamente el cumplimiento de metas presidenciales."
      },
      {
        id: "u4-cadena",
        title: "Cadena de Valor Pública",
        type: "text",
        content: "La Cadena de Valor Pública es una metodología de programación y análisis que representa la actividad del sector público, identificando los resultados que se procuran obtener, así como los productos, procesos y recursos organizados con este propósito."
      },
      {
        id: "u4-componentes-cadena",
        title: "Componentes de la Cadena",
        type: "cards",
        cards: [
          { title: "Recursos", description: "Humanos, financieros, tecnológicos, físicos" },
          { title: "Insumos", description: "Materiales, servicios, información para producir" },
          { title: "Procesos/Operaciones", description: "Actividades transformadoras para generar productos" },
          { title: "Productos", description: "Bienes y servicios entregados a la población" },
          { title: "Resultados", description: "Efectos inmediatos en beneficiarios" },
          { title: "Impacto", description: "Contribución al desarrollo nacional" }
        ]
      },
      {
        id: "u4-ventajas",
        title: "Ventajas del Modelo de Cadena de Valor",
        type: "list",
        items: [
          { title: "Ordenamiento y Consistencia", description: "Permite ordenar y hacer consistente el contenido de los diversos instrumentos de planificación" },
          { title: "Vinculación Presupuestaria", description: "Facilita preparar los instrumentos para su vinculación con el presupuesto y otros procesos" },
          { title: "Identificación de Indicadores", description: "Favorece la identificación de indicadores vinculados a procesos de producción y resultados" },
          { title: "Claridad en Responsabilidades", description: "Define claramente qué produce cada institución y qué resultados espera lograr" }
        ]
      },
      {
        id: "u4-productos",
        title: "Productos Terminales e Intermedios",
        type: "text",
        content: "Los productos terminales son bienes o servicios que la institución entrega a la población o a otras instituciones públicas. Constituyen la 'razón de ser' de la institución. Los productos intermedios son bienes o servicios que la institución genera pero que se consumen dentro de la organización para producir productos terminales."
      },
      {
        id: "u4-ejemplos-ter",
        title: "Ejemplos de Productos Terminales",
        type: "list",
        items: [
          { title: "Atención médica", description: "" },
          { title: "Educación escolar", description: "" },
          { title: "Construcción carreteras", description: "" },
          { title: "Servicios turísticos", description: "" },
          { title: "Inmunizaciones", description: "" },
          { title: "Asistencia técnica", description: "" }
        ]
      },
      {
        id: "u4-ejemplos-int",
        title: "Ejemplos de Productos Intermedios",
        type: "list",
        items: [
          { title: "Materiales gastables", description: "" },
          { title: "Cemento y agregados", description: "" },
          { title: "Combustible", description: "" },
          { title: "Madera", description: "" },
          { title: "Equipos de oficina", description: "" },
          { title: "Servicios internos", description: "" }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Unidad V",
    subtitle: "El Ciclo de Vida de un Proyecto",
    content: [
      {
        id: "u5-definicion",
        title: "¿Qué es un Proyecto de Inversión Pública?",
        type: "text",
        content: "Un proyecto de inversión pública es una intervención planificada por el sector público que tiene como objetivo generar beneficios para la sociedad a través de la creación, mejora o mantenimiento de activos públicos."
      },
      {
        id: "u5-caracteristicas",
        title: "Características de un Proyecto de Inversión Pública",
        type: "cards",
        cards: [
          { title: "Objetivo Social y Económico", description: "Satisfacer necesidades colectivas y fomentar desarrollo" },
          { title: "Financiamiento Público", description: "Recursos del Estado planificados en el presupuesto" },
          { title: "Planificación y Evaluación", description: "Estudios de preinversión y control de gestión" },
          { title: "Impacto Significativo", description: "Empleo, infraestructura y servicios" },
          { title: "Plazo Definido", description: "Diseño, construcción, operación y mantenimiento" },
          { title: "Rentabilidad Social", description: "Sostenibilidad - Resultados duraderos para el desarrollo nacional" }
        ]
      },
      {
        id: "u5-vs",
        title: "Proyectos vs. Obras de Mantenimiento",
        type: "cards",
        cards: [
          { title: "Proyecto de Inversión", description: "• Objetivo: Desarrollo social y económico\n• Alcance: Amplio, impacto significativo\n• Plazo: Mediano-largo plazo\n• Beneficios: Desarrollo sostenible, empleo\n• Riesgo: Regulado y supervisado" },
          { title: "Obra de Mantenimiento", description: "• Objetivo: Reparaciones puntuales\n• Alcance: Limitado, áreas puntuales\n• Plazo: Corto, acción inmediata\n• Beneficios: Mejora temporal\n• Riesgo: Mínimo, control operativo" }
        ]
      },
      {
        id: "u5-rentabilidad",
        title: "Rentabilidad Social",
        type: "text",
        content: "La rentabilidad de proyectos públicos no se mide solo en términos financieros, sino también en términos de impacto social y bienestar general de la población."
      },
      {
        id: "u5-ciclo",
        title: "Fases del Ciclo de Vida de un Proyecto",
        type: "text",
        content: "El ciclo de vida de un proyecto sintetiza todas las etapas que este debe surtir desde su concepción hasta la evaluación del cumplimiento de sus objetivos. Comprende tres fases principales con etapas específicas."
      },
      {
        id: "u5-fases",
        title: "Fases Principales",
        type: "cards",
        cards: [
          { title: "1. Preinversión", description: "Perfil → Prefactibilidad → Factibilidad" },
          { title: "2. Inversión", description: "Ejecución → Seguimiento → Control" },
          { title: "3. Operación y Mantenimiento", description: "Funcionamiento → Mantenimiento → Evaluación" }
        ]
      },
      {
        id: "u5-perfil",
        title: "Etapa de Preinversión: Perfil del Proyecto",
        type: "text",
        content: "El perfil del proyecto es el documento preliminar que identifica la idea del proyecto, su justificación, objetivos aproximados, beneficiarios estimados y primer análisis de riesgos. Se elabora con información existente sin investigaciones de terreno."
      },
      {
        id: "u5-carac-perfil",
        title: "Características del Perfil",
        type: "list",
        items: [
          { title: "Basado en Información Secundaria", description: "Utiliza datos existentes, estadísticas, estudios previos sin investigación de campo" },
          { title: "Estimaciones Globales", description: "Presenta cifras aproximadas de inversiones, costos e impactos sin detalles precisos" },
          { title: "Juicio de Expertos", description: "Se apoya en la experiencia y conocimiento de especialistas en el tema" }
        ]
      },
      {
        id: "u5-contenido-perfil",
        title: "Contenido del Perfil",
        type: "list",
        items: [
          { title: "1. Identificación del Proyecto", description: "Nombre, código, institución proponente" },
          { title: "2. Situación Problemática", description: "Descripción del problema que resuelve" },
          { title: "3. Objetivos Generales", description: "Propósito central del proyecto" },
          { title: "4. Beneficiarios", description: "Población objetivo estimada" },
          { title: "5. Alternativas de Solución", description: "Opciones preliminares para resolver el problema" },
          { title: "6. Inversiones Estimadas", description: "Estimación global de recursos necesarios" }
        ]
      },
      {
        id: "u5-prefact",
        title: "Etapa de Preinversión: Prefactibilidad",
        type: "text",
        content: "El estudio de prefactibilidad profundiza la investigación iniciada en el perfil, utilizando principalmente información de fuentes secundarias para definir con mayor precisión las variables principales del proyecto."
      },
      {
        id: "u5-carac-prefact",
        title: "Características de la Prefactibilidad",
        type: "list",
        items: [
          { title: "Mayor Profundidad Analítica", description: "Análisis más detallado que el perfil, pero sin el rigor de la factibilidad" },
          { title: "Información Secundaria Principal", description: "Se basa en estudios, estadísticas y datos existentes, con algunas visitas de campo" },
          { title: "Estimaciones Proyectadas", description: "Proyecciones de inversiones, costos e ingresos con mayor precisión que el perfil" }
        ]
      },
      {
        id: "u5-contenido-prefact",
        title: "Contenido del Estudio de Prefactibilidad",
        type: "list",
        items: [
          { title: "1. Análisis de Demanda", description: "Estimación de beneficiarios y necesidades" },
          { title: "2. Análisis de Oferta", description: "Capacidad actual vs. demanda proyectada" },
          { title: "3. Estudio de Alternativas", description: "Opciones técnicas y locacionales" },
          { title: "4. Estimación de Inversiones", description: "Cálculos más precisos de recursos necesarios" },
          { title: "5. Costos de Operación", description: "Estimación de gastos recurrentes" },
          { title: "6. Análisis de Riesgos", description: "Identificación de factores críticos" }
        ]
      },
      {
        id: "u5-fact",
        title: "Etapa de Preinversión: Factibilidad",
        type: "text",
        content: "El estudio de factibilidad es el documento técnico más completo de la etapa de preinversión. Se elabora sobre la base de información primaria precisa, con cálculos financieros y económicos demostrativos que permiten tomar la decisión final de inversión."
      },
      {
        id: "u5-carac-fact",
        title: "Características de la Factibilidad",
        type: "list",
        items: [
          { title: "Información Primaria Precisa", description: "Investigación de campo, levantamiento de datos directos, censos, encuestas" },
          { title: "Cálculos Financieros Detallados", description: "Flujo de caja, VAN, TIR, punto de equilibrio, sensibilidad" },
          { title: "Evaluación Económico-Social", description: "Análisis de costos y beneficios sociales, externalidades, impacto en el desarrollo" }
        ]
      },
      {
        id: "u5-contenido-fact",
        title: "Contenido del Estudio de Factibilidad",
        type: "list",
        items: [
          { title: "1. Estudio de Mercado", description: "Demanda, oferta, precios, comercialización" },
          { title: "2. Estudio Técnico", description: "Tamaño, localización, ingeniería, organización" },
          { title: "3. Estudio Ambiental", description: "Impacto ambiental y medidas de mitigación" },
          { title: "4. Estudio Financiero", description: "Inversiones, costos, ingresos, flujo de caja" },
          { title: "5. Evaluación Económica", description: "VAN, TIR, beneficio social" },
          { title: "6. Análisis de Riesgos", description: "Identificación, evaluación y mitigación" }
        ]
      },
      {
        id: "u5-mml",
        title: "El Marco Lógico: Herramienta de Planificación",
        type: "text",
        content: "La Metodología del Marco Lógico (MML) es una herramienta para la planificación, seguimiento y evaluación de proyectos y programas. Permite estructurar la lógica del proyecto de manera sistemática y coherente."
      },
      {
        id: "u5-estructura-mml",
        title: "Estructura de la MML",
        type: "cards",
        cards: [
          { title: "Resumen Narrativo", description: "Descripción de objetivos en cuatro niveles: Fin, Propósito, Componentes, Actividades" },
          { title: "Indicadores", description: "Variables medibles que permiten verificar el logro de objetivos (cantidad, calidad, tiempo)" },
          { title: "Medios de Verificación", description: "Fuentes de información para comprobar el cumplimiento de indicadores" },
          { title: "Supuestos", description: "Factores externos necesarios para el éxito del proyecto, fuera del control de la institución" }
        ]
      },
      {
        id: "u5-etapas-mml",
        title: "Etapas de Construcción de la MML",
        type: "list",
        items: [
          { title: "Etapa 1: Identificación", description: "Análisis de involucrados, árbol de problemas, árbol de objetivos, análisis de alternativas" },
          { title: "Etapa 2: Planificación", description: "Construcción de la Matriz de Marco Lógico (MML) con objetivos, indicadores, medios de verificación y supuestos" }
        ]
      },
      {
        id: "u5-matriz",
        title: "Matriz de Marco Lógico: Estructura",
        type: "text",
        content: "La Matriz de Marco Lógico (MML) es una matriz de cuatro filas por cuatro columnas que presenta un resumen completo del proyecto, mostrando la lógica vertical (causa-efecto) y horizontal (verificación)."
      },
      {
        id: "u5-niveles",
        title: "Niveles de Objetivos (Filas)",
        type: "cards",
        cards: [
          { title: "Fin (Nivel Superior)", description: "Contribución del proyecto al desarrollo nacional (relacionado con la END)" },
          { title: "Propósito (Objetivo Central)", description: "Beneficio directo para los beneficiarios (lo que el proyecto espera lograr)" },
          { title: "Componentes (Resultados)", description: "Productos o servicios que el proyecto entrega para lograr el propósito" },
          { title: "Actividades (Acciones)", description: "Tareas específicas para producir los componentes" }
        ]
      },
      {
        id: "u5-logica",
        title: "Lógica Vertical",
        type: "text",
        content: "Si se realizan las actividades (y se cumplen supuestos) → se producen los componentes → se logra el propósito → se contribuye al fin."
      },
      {
        id: "u5-arbol",
        title: "Árbol de Problemas y Árbol de Objetivos",
        type: "text",
        content: "El árbol de problemas es una herramienta que permite identificar y analizar los problemas que afectan a una situación específica, estableciendo relaciones de causa-efecto entre ellos. El árbol de objetivos se construye transformando los problemas del árbol de problemas en objetivos positivos, mostrando los medios y fines necesarios para alcanzar la situación deseada."
      },
      {
        id: "u5-pasos-arbol",
        title: "Pasos para Construir el Árbol de Problemas",
        type: "list",
        items: [
          { title: "1. Identificar el problema central", description: "" },
          { title: "2. Identificar causas directas (abajo)", description: "" },
          { title: "3. Identificar efectos directos (arriba)", description: "" },
          { title: "4. Establecer relaciones causa-efecto", description: "" }
        ]
      },
      {
        id: "u5-snip",
        title: "Sistema Nacional de Inversión Pública (SNIP)",
        type: "text",
        content: "El Sistema Nacional de Inversión Pública (SNIP) es el subsistema del SNPIP que regula el proceso de formulación, evaluación, priorización, seguimiento y evaluación de proyectos de inversión pública en República Dominicana."
      },
      {
        id: "u5-procesos-snip",
        title: "Procesos del SNIP",
        type: "list",
        items: [
          { title: "1. Formulación", description: "Perfil, prefactibilidad, factibilidad" },
          { title: "2. Evaluación", description: "Análisis técnico, económico, social" },
          { title: "3. Priorización", description: "Selección de proyectos viables" },
          { title: "4. Aprobación", description: "Inclusión en el presupuesto" },
          { title: "5. Ejecución", description: "Implementación del proyecto" },
          { title: "6. Seguimiento y Evaluación", description: "Monitoreo físico-financiero" }
        ]
      },
      {
        id: "u5-sistema-info",
        title: "Sistema de Información del SNIP",
        type: "cards",
        cards: [
          { title: "Registro de Proyectos", description: "Banco de proyectos de inversión pública con información completa de cada iniciativa" },
          { title: "Seguimiento Físico-Financiero", description: "Monitoreo del avance de proyectos en ejecución, reportes periódicos" },
          { title: "Evaluación de Resultados", description: "Sistema de evaluación ex-post de proyectos completados" },
          { title: "Transparencia", description: "Información pública accesible a través de portales del MEPyD" }
        ]
      },
      {
        id: "u5-responsable",
        title: "Responsable del SNIP",
        type: "text",
        content: "El MEPyD, a través de la Dirección General de Inversión Pública, es el órgano rector del SNIP. El SNIP está interconectado con el SIGEF para seguimiento presupuestario."
      },
      {
        id: "u5-normas",
        title: "Normas Técnicas del SNIP",
        type: "text",
        content: "Las Normas Técnicas del SNIP establecen el orden normativo y procesal que facilita la gestión y ejecución de proyectos de inversión pública, definiendo requisitos, procedimientos y responsabilidades."
      },
      {
        id: "u5-documentos",
        title: "Documentos del SNIP",
        type: "list",
        items: [
          { title: "Guía Metodológica General", description: "Marco conceptual y procedimientos para la formulación de proyectos" },
          { title: "Normas Técnicas por Sector", description: "Lineamientos específicos para sectores (infraestructura, salud, educación, etc.)" },
          { title: "Instructivos Operativos", description: "Procedimientos detallados para registro, evaluación y seguimiento" },
          { title: "Formatos Estándar", description: "Plantillas uniformes para presentación de proyectos" }
        ]
      },
      {
        id: "u5-requisitos",
        title: "Requisitos Exigibles",
        type: "list",
        items: [
          { title: "Formulación Completa", description: "Perfil, prefactibilidad o factibilidad según el caso" },
          { title: "Matriz de Marco Lógico", description: "Estructura lógica del proyecto con indicadores" },
          { title: "Análisis de Alternativas", description: "Comparación de opciones técnicas y locacionales" },
          { title: "Evaluación Económica", description: "VAN, TIR social, costo-beneficio" },
          { title: "Análisis de Riesgos", description: "Identificación y mitigación de riesgos" },
          { title: "Sostenibilidad", description: "Análisis de operación y mantenimiento" }
        ]
      },
      {
        id: "u5-cumplimiento",
        title: "Cumplimiento Obligatorio",
        type: "text",
        content: "El cumplimiento de las Normas Técnicas es obligatorio para todas las instituciones públicas. Los proyectos que no cumplan los requisitos no pueden registrarse en el SNIP ni incluirse en el presupuesto. Las Normas Técnicas son actualizadas periódicamente por el MEPyD para mejorar los procesos."
      }
    ]
  }
];

export const quizQuestions = [
  {
    id: 1,
    question: "¿Qué ley creó el Sistema Nacional de Planificación e Inversión Pública (SNPIP)?",
    options: [
      "Ley 55-65",
      "Ley 496-06",
      "Ley 498-06",
      "Ley 494-06"
    ],
    correct: 2,
    explanation: "La Ley 498-06, promulgada el 28 de diciembre de 2006, creó el SNPIP, estableciendo principios, órganos, procesos e instrumentos de planificación."
  },
  {
    id: 2,
    question: "¿Cuál es el órgano superior de planificación del Estado?",
    options: [
      "MEPyD",
      "Consejo de Gobierno",
      "Comisión Técnica Delegada",
      "UIPyD"
    ],
    correct: 1,
    explanation: "El Consejo de Gobierno es el órgano superior de planificación del Estado, encargado de aprobar los instrumentos de planificación nacional."
  },
  {
    id: 3,
    question: "¿Qué instrumento es el de mayor jerarquía en la planificación nacional?",
    options: [
      "PNPSP",
      "PEI",
      "END 2030",
      "Planes Sectoriales"
    ],
    correct: 2,
    explanation: "La END 2030 (Estrategia Nacional de Desarrollo) es el instrumento rector de planificación nacional, aprobada por Ley 1-12 en 2012."
  },
  {
    id: 4,
    question: "¿Cuántos ejes estratégicos tiene la END 2030?",
    options: [
      "3 ejes",
      "4 ejes",
      "5 ejes",
      "6 ejes"
    ],
    correct: 1,
    explanation: "La END 2030 contempla 4 ejes estratégicos: Estado Social y Democrático de Derecho, Igualdad de Derechos y Oportunidades, Economía Sostenible, y Sociedad Ambientalmente Sostenible."
  },
  {
    id: 5,
    question: "¿Qué significa UIPyD?",
    options: [
      "Unidad Internacional de Planificación y Desarrollo",
      "Unidad Institucional de Planificación y Desarrollo",
      "Unión de Instituciones de Planificación y Desarrollo",
      "Unidad de Inversión Pública y Desarrollo"
    ],
    correct: 1,
    explanation: "UIPyD significa Unidades Institucionales de Planificación y Desarrollo, órganos creados en cada institución pública para coordinar los procesos de planificación institucional."
  },
  {
    id: 6,
    question: "¿Cuál es el horizonte temporal de la END?",
    options: [
      "4 años",
      "10 años",
      "20+ años",
      "3 años"
    ],
    correct: 2,
    explanation: "La END tiene un horizonte de 20+ años y se revisa cada 10 años, mientras que el PNPSP tiene un horizonte de 4 años."
  },
  {
    id: 7,
    question: "¿Qué es el SNIP?",
    options: [
      "Sistema Nacional de Inversión Privada",
      "Sistema Nacional de Inversión Pública",
      "Sistema Nacional de Instrumentos de Planificación",
      "Sistema Nacional de Indicadores de Proyectos"
    ],
    correct: 1,
    explanation: "El SNIP (Sistema Nacional de Inversión Pública) es el subsistema del SNPIP que regula el proceso de formulación, evaluación, priorización, seguimiento y evaluación de proyectos de inversión pública."
  },
  {
    id: 8,
    question: "¿Cuáles son las etapas de preinversión en orden correcto?",
    options: [
      "Factibilidad → Prefactibilidad → Perfil",
      "Perfil → Prefactibilidad → Factibilidad",
      "Prefactibilidad → Perfil → Factibilidad",
      "Perfil → Factibilidad → Prefactibilidad"
    ],
    correct: 1,
    explanation: "Las etapas de preinversión en orden correcto son: Perfil → Prefactibilidad → Factibilidad. Cada etapa reduce la incertidumbre y profundiza el análisis."
  },
  {
    id: 9,
    question: "¿Qué significa MML?",
    options: [
      "Matriz de Marco Lógico",
      "Metodología del Marco Lógico",
      "Modelo de Medición de Logros",
      "Método de Monitoreo de Proyectos"
    ],
    correct: 1,
    explanation: "MML significa Metodología del Marco Lógico, una herramienta para la planificación, seguimiento y evaluación de proyectos y programas."
  },
  {
    id: 10,
    question: "¿Cuántas Regiones Únicas de Planificación (RUP) tiene República Dominicana?",
    options: [
      "8 regiones",
      "10 regiones",
      "12 regiones",
      "15 regiones"
    ],
    correct: 1,
    explanation: "República Dominicana tiene 10 Regiones Únicas de Planificación (RUP), además de 32 provincias + Distrito Nacional y 158 municipios."
  },
  {
    id: 11,
    question: "¿Qué ley creó el MEPyD?",
    options: [
      "Ley 498-06",
      "Ley 496-06",
      "Ley 494-06",
      "Ley 1-12"
    ],
    correct: 1,
    explanation: "La Ley 496-06, promulgada el 28 de diciembre de 2006, creó el Ministerio de Economía, Planificación y Desarrollo (MEPyD) como órgano rector del SNPIP."
  },
  {
    id: 12,
    question: "¿Cuál de estos NO es un principio rector del SNPIP?",
    options: [
      "Jerarquía",
      "Centralización",
      "Participación",
      "Transparencia"
    ],
    correct: 1,
    explanation: "La centralización NO es un principio rector del SNPIP. Los principios rectores son: Jerarquía, Complementariedad, Coherencia, Consistencia, Participación, Transparencia, Flexibilidad y Sostenibilidad."
  },
  {
    id: 13,
    question: "¿Qué es el PNPSP?",
    options: [
      "Plan Nacional de Proyectos Sociales Prioritarios",
      "Plan Nacional Plurianual del Sector Público",
      "Programa Nacional de Planificación Sectorial Pública",
      "Proyecto Nacional de Presupuesto Social y Productivo"
    ],
    correct: 1,
    explanation: "El PNPSP (Plan Nacional Plurianual del Sector Público) es el instrumento de planificación de mediano plazo (4 años) que define y organiza el aporte del sector público a la concreción de la END."
  },
  {
    id: 14,
    question: "¿Cuántas políticas transversales tiene la END 2030?",
    options: [
      "5 políticas",
      "6 políticas",
      "7 políticas",
      "8 políticas"
    ],
    correct: 2,
    explanation: "La END 2030 tiene 7 políticas transversales: Derechos Humanos, Enfoque de Género, Sostenibilidad Ambiental, Cohesión Territorial, Participación Social, Uso de TICs."
  },
  {
    id: 15,
    question: "¿Qué significa GpRD?",
    options: [
      "Gestión para Resultados en el Desarrollo",
      "Gestión de Proyectos de Desarrollo",
      "Gestión Pública de Recursos y Desarrollo",
      "Gestión de Programas de Desarrollo Regional"
    ],
    correct: 0,
    explanation: "GpRD significa Gestión para Resultados en el Desarrollo, el enfoque que orienta la inversión pública hacia la mejora de las condiciones de vida de la población."
  }
];

export const resources = {
  legal: [
    { title: "Ley 496-06", description: "Crea el Ministerio de Economía, Planificación y Desarrollo (MEPyD)" },
    { title: "Ley 498-06", description: "Crea el Sistema Nacional de Planificación e Inversión Pública (SNPIP)" },
    { title: "Ley 1-12", description: "Estrategia Nacional de Desarrollo 2030 (END)" },
    { title: "Ley 340-06", description: "Compras y Contrataciones Públicas" },
    { title: "Decreto 231-07", description: "Reglamento Orgánico Funcional del MEPyD" },
    { title: "Decreto 493-07", description: "Reglamento de Aplicación de la Ley 498-06" }
  ],
  technical: [
    { title: "Normas Técnicas del SNIP - MEPyD", description: "" },
    { title: "Guía Metodológica General para Formulación de Proyectos", description: "" },
    { title: "Metodología del Marco Lógico - ILPES/CEPAL", description: "" },
    { title: "Informes de Avance END - MEPyD", description: "" },
    { title: "Plan Nacional Plurianual - MEPyD", description: "" }
  ],
  online: [
    { title: "MEPyD", description: "www.mepyd.gob.do" },
    { title: "MapaInversiones", description: "mapainversiones.gob.do" },
    { title: "Portal SNIP", description: "snip.mepyd.gob.do" }
  ]
};
