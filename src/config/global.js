export default {
  global: {
    componenteFormativo:
      'Planeación y convocatoria para el reclutamiento de personal',
    descripcionCurso:
      'Los contenidos propuestos en este componente de formación permiten conocer la planeación para el reclutamiento de personal según competencias y a través de redes sociales. Para su desarrollo se estudiará la conceptualización, la planeación, los tipos de repositorio, las plataformas y tipos de convocatorias. ',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Contextualización de la empresa',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Normatividad de la empresa',
            hash: 't1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Vacante, reclutamiento y requisición',
            hash: 't1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Técnicas de selección de talento humano',
            hash: 't1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Planeación del reclutamiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Perfil del cargo y ocupacional ',
            hash: 't2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Fuentes de provisión de personal',
            hash: 't2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Convocatoria',
            hash: 't2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Nuevas técnicas de selección de talento humano 5.0',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Internet de las cosas ',
            hash: 't3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Redes sociales ',
            hash: 't3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Sistemas de información ',
            hash: 't3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Repositorios ',
            hash: 't3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Plataformas',
            hash: 't3_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Díaz, L., Rodríguez, M. & Olvera, M. (2014). Reclutamiento y selección a través de las redes sociales Facebook y LinkedIn: (análisis preliminar). Oikos: Revista de la Escuela de Administración y Economía, 18(38), p. 37-61.  ',
    },
    {
      referencia:
        'Jiménez, K. & Montt, P. (2014). Efectividad de los sitios de redes sociales como fuente de atracción en el proceso de reclutamiento. ',
    },
    {
      referencia:
        'Moreno, A. (2015). Nuevos métodos de reclutamiento del personal.',
    },
    {
      referencia:
        'Mukiur, R. (2016). Reclutamiento a través de las redes sociales: Reclutamiento 3.0. Opción: Revista de Ciencias Humanas y Sociales, (10), p. 135-151. ',
    },
    {
      referencia:
        'Rodríguez, S. (2019). Convocatoria para la contratación de personal para la promoción de empleo joven e implantación de la garantía. Doctoral Dissertation, Universidad de Valladolid.',
    },
    {
      referencia:
        'Real Academia Española. (2021). Diccionario de la lengua española, 23.ª ed., [versión 23.4 en línea]. ',
      link: 'https://dle.rae.es.',
    },
  ],
  glosario: [
    {
      termino: 'Contexto',
      significado:
        'Entorno físico o de situación, político, histórico, cultural o de cualquier otra índole, en el que se considera un hecho.',
    },
    {
      termino: 'Convocatoria',
      significado:
        'Es un llamado público que un individuo, empresa u organización, realizan con algún objetivo determinado.',
    },
    {
      termino: 'Planeación',
      significado:
        'Es un proceso utilizado para crear objetivos de la función del personal y para desarrollar estrategias adecuadas para lograr esos objetivos.',
    },
    {
      termino: 'Redes sociales',
      significado:
        'Son plataformas digitales conformadas por individuos con diferentes intereses, actividades o relaciones en común. Estas permiten la comunicación e intercambio de información entre las personas.',
    },
  ],
  complementario: [
    {
      texto:
        'Ladino, A. & Orozco, D.  (2008). Modelo de reclutamiento y selección de talento humano por competencias para niveles directivo de la organización. Scientia et Technica, 2(39).  ',
      tipo: 'Documento',
      link:
        'https://revistas.utp.edu.co/index.php/revistaciencia/article/view/3231 ',
    },
    {
      texto:
        'Mukiur, R. (2016). Reclutamiento a través de las redes sociales: reclutamiento 3.0. Opción: Revista de Ciencias Humanas y Sociales, (10), p. 135-151.',
      tipo: 'Documento',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=5875160 ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Anderson Ferney Archila Calixto',
        cargo: 'Experto temático',
        centro:
          'Centro de la Industria de la Empresa y los Servicios - CIES - Regional Norte de Santander ',
      },
      {
        nombre: 'Paola Andrea Quintero Aguilar',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Paula Andrea Taborda Ortiz',
        cargo: 'Evaluadora instruccional',
        centro: 'Diseño y metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Marcela Alarcon Granados',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Andrés Díaz Pinto',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Rosa Milena Gómez Caballero',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jaime Enrique Díaz Reyes ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Estefani Daniela Gallo Cortés',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Eugenia Mejía López',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
