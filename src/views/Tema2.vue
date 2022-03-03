<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
       span 2
      h1 Planeación del reclutamiento
    
    .row.mb-5
      .col-12.col-md-4.col-lg-4.mb-2
        p La planeación en las empresas es un proceso utilizado para crear objetivos de la función del personal y para desarrollar estrategias adecuadas para lograr esos objetivos. El proceso de planeación se caracteriza por seguir un modelo adecuado que comprende objetivos organizacionales, pronósticos, planes, programas y evaluación. A continuación, se estudiará el reclutamiento y su planeación.
      .col-12.col-md-4.col-lg-4.align-items-center.mb-2
        figure
          img.conten1-3(src='@/assets/curso/tema2/t2-1.png', alt='imagen 2-1')
      .col-12.col-md-4.col-lg-4
        p Como se mencionó anteriormente, el reclutamiento es un conjunto de procedimientos usados en el proceso de convocatoria de personas aptas para un determinado tipo de actividad. Antes de entrar en más detalle en la planeación, es importante conocer el proceso que se da para el reclutamiento. A continuación, los siguientes procesos:

    .tarjeta.tarjeta--azul.p-4.mb-5
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0.align-items-center
            .justify-center
              h3 Vacante o nuevo puesto de trabajo 
              p Esto puede darse porque se crea un nuevo puesto dentro de la empresa o porque queda libre (por renuncias, despidos, ascensos, transferencias) un determinado puesto.
  
          .col-md-6
            figure.justify-center
              img.img450(src='@/assets/curso/tema2/t2-2.png', alt='Imagen 2-2')
        .row
          .col-md-6.mb-4.mb-md-0.align-items-center
            .justify-center
              h3 Se notifica a necesidad - Recursos Humanos 
              p El proceso de reclutamiento puede estar a cargo de la dependencia de recursos humanos o por terceros como lo son las agencias de empleo. A partir de ahí, se debe analizar la importancia del puesto dentro de la empresa y se determina los responsables del reclutamiento. 
  
          .col-md-6
            figure.justify-center
              img.img450(src='@/assets/curso/tema2/t2-3.png', alt='Imagen 2-3')
        .row
          .col-md-6.mb-4.mb-md-0.align-items-center
            .justify-center
              h3 Descripción del puesto de trabajo 
              p Se deben precisar las funciones que deberá cumplir, los objetivos y competencias necesarias para llevar a cabo las labores.
  
          .col-md-6
            figure.justify-center
              img.img450(src='@/assets/curso/tema2/t2-4.png', alt='Imagen 2-4')
        .row
          .col-md-6.mb-4.mb-md-0.align-items-center
            .justify-center
              h3 Perfil del candidato
              p Aquí se describen las características y competencias que deben tener los postulantes. Entre estas se encuentran los estudios, el idioma, cambio de residencia, entre otros. 
  
          .col-md-6
            figure.justify-center
              img.img450(src='@/assets/curso/tema2/t2-5.png', alt='Imagen 2-5')
        .row
          .col-md-6.mb-4.mb-md-0.align-items-center
            .justify-center
              h3 Medios de reclutamiento
              p Este puede ser de reclutamiento interno o de reclutamiento externo. El primero, se le brinda la oportunidad a los empleados internos que tienen cierta experiencia en la empresa y, el segundo, al reclutamiento por medio de redes sociales, radio, periódico, bolsas de empleo, entre otras.

          .col-md-6
            figure.justify-center
              img.img450(src='@/assets/curso/tema2/t2-6.png', alt='Imagen 2-6')
        .row
          .col-md-6.mb-4.mb-md-0.align-items-center
            .justify-center
              h3 Recepción de la información 
              p Aquí se recibe toda información de las personas interesadas, entre esto tenemos el currículum vitae (hoja de vida) o carta de presentación, que deberá ser evaluada para el proceso de selección. 

          .col-md-6
            figure.justify-center
              img.img450(src='@/assets/curso/tema2/t2-7.png', alt='Imagen 2-7')
    div.mb-5
      p Por otra parte, existen varias fuentes de reclutamiento que se utilizan en múltiples medios. Estas fuentes permiten conocer un proceso de reclutamiento y estas pueden variar según su tipo, entre estas se encuentran:

      p El 
        span.text-black reclutamiento interno 
        | se realiza por comunicación interpersonal o por medios de comunicación interna como e-mail, carteleras, boletines informativos, entre otros. 

      p En relación al 
        span.text-black reclutamiento externo 
        | se utiliza una gran cantidad de fuentes, entre estas:          

    .row.justify-center
      .col-lg-5
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/a.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              h2 Anuncios
              p Las empresas realizan anuncios en medios gráficos y audiovisuales en los que informan sobre su oferta laboral.
      .col-lg-5
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/b.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              h2 Base de datos
              p Las empresas manejan información que es almacenada en bases de datos que permiten en el momento de un reclutamiento acudir a esta información. La recepción de esta información suele darse por sitios web o e-mail. 

    .row.justify-center
      .col-lg-5
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/c.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              h2 Bolsas de empleo
              p Las empresas por medio de universidades u organizaciones que manejan bolsa de empleos solicitan la búsqueda correspondiente al perfil o la vacante. 
      .col-lg-5
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/d.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              h2 Ferias de empleo
              p Algunas empresas acuden a ferias de empleo donde convergen también personas en búsqueda de empleo. De esta forma se realiza la búsqueda laboral.
    
    .row.justify-center
      .col-lg-5
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/e.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              h2 Página web o blog de la empresa
              p Muchas empresas realizan sus procesos de reclutamiento a través de su página web o blog. Esto se da en multinacionales o empresas grandes.  
      .col-lg-5
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/f.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              h2 Portales de empleo
              p Las empresas suben su búsqueda a estos portales, son sitios web especializados en la búsqueda de empleo. Aquí todas las personas que apliquen al perfil pueden enviar su solicitud o postularse. 
    
    .row.justify-center
      .col-lg-5
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/g.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              h2 Recomendaciones
              p Aquí los contactos interpersonales que se dan dentro de la empresa muchas veces ocupan el puesto o vacante. Esto se da por recomendaciones de los mismos empleados y ocurre por lo general, en empresas pequeñas.   
      .col-lg-5
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/h.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              h2 Redes sociales
              p Las empresas suelen comunicar sus ofertas laborales a través de sus redes sociales. Existen varias redes sociales muy conocidas como Facebook, LinkedIn, WhatsApp, entre otras, que por medio de formularios o e-mail se pueden postular las personas interesadas. 
    
    .row.mb-5.justify-center
      .col-lg-5
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/i.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              h2 Consultoras
              p Las consultoras o agencias de recursos humanos se encargan de realizar el proceso de reclutamiento y selección de personal en muchas empresas. Estas utilizan varias de las fuentes mencionadas anteriormente para difundir el proceso de reclutamiento. 
    
    div.mb-3
      p En la planeación del reclutamiento se tiene en cuenta algunos aspectos que se deben definir, entre estos se encuentran: 
      .row.mb-5
        .col-sm.mb-5.mb-sm-0
          ol.lista-ol--cuadro
            li 
              .lista-ol--cuadro__vineta
                span 1
              | Quien se hace responsable del proceso de reclutamiento.
            li 
              .lista-ol--cuadro__vineta
                span 2
              | El periodo de tiempo estipulado para el proceso de reclutamiento (designación, capacitación del personal, desempeño de tareas, entre otras).
            li 
              .lista-ol--cuadro__vineta
                span 3
              | La metodología para el reclutamiento que permita la selección correcta del personal.
    
    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          h2.mb-0.text-center Para determinar el personal necesario para la empresa por medio de la planeación se requiere que la planificación del reclutamiento esté detallada meticulosamente. A continuación, se encuentran algunos puntos importantes para la planeación: 
        .col-lg-8
          .bloque-texto-a__texto.p-4
            ul.lista-ul.p-3
              li
                ul
                  li 
                    i.fas.fa-angle-right
                    span Determinar la responsabilidad del reclutamiento.
                  li 
                    i.fas.fa-angle-right
                    span Hacer uso de las fuentes de reclutamiento. 
                  li 
                    i.fas.fa-angle-right
                    span Guardar las solicitudes recibidas para la vacante. 
                  li 
                    i.fas.fa-angle-right
                    span Evaluar a los solicitantes mediante los criterios necesarios para ocupar el cargo. 
                  li 
                    i.fas.fa-angle-right
                    span Selección y capacitación del personal adecuado. 
                  li 
                    i.fas.fa-angle-right
                    span Designación formal del personal a su cargo y su asignación de actividades. 

    .row.mb-5
      .col-12.col-md-4.col-lg-4.mb-2
        p Después del proceso de planeación del reclutamiento se debe realizar la selección del personal. Estos términos se encuentran estrechamente unidos, pero son dos procesos totalmente diferentes. Por un lado, el reclutamiento de personal es el proceso mediante el cual se identifica la vacante y el perfil del cargo. Después de esto se realiza la difusión de la información en las diferentes esferas sociales,  
      .col-12.col-md-4.col-lg-4.mb-2
        figure.justify-center
          img.img350(src='@/assets/curso/tema2/t2-8.png', alt='imagen 2-8')
      .col-12.col-md-4.col-lg-4
        p a través de las diferentes fuentes con el objetivo de convocar y reclutar candidatos.
          span.colortext1 Por otra parte, la selección de personal es después del proceso de reclutamiento, aquí se dan varias etapas que se encargan de la selección entre todos los candidatos del más idóneo. Este proceso de selección se realiza a través de las siguientes pautas: 
    
    .row.mb-5
      .col-12.col-md-8.col-lg-8
        figure.justify-center
          img.img900(src='@/assets/curso/tema2/t2-21.png', alt='imagen 2-21')
      .col-12.col-md-4.col-lg-4
        figure.justify-center
          img.img250(src='@/assets/curso/tema2/t2-9.png', alt='imagen 2-9')
    
    separador

    #t2_1.titulo-segundo.color-secundario.mb-5
      h2 2.1.	Perfil del cargo y ocupacional 

    p En este apartado es importante que las empresas o el área asignada como responsable del proceso defina muy bien el perfil del cargo. Su definición no debe ser exagerada y en cambio debe ser aterrizada a la necesidad y funciones que exige o amerita la vacante mencionada por la empresa. Para su construcción o definición es importante responderse una serie de interrogantes que permitirán definir de manera adecuada el perfil del cargo, estos interrogantes son: 

    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema2/t2-10.svg', alt='Imagen 2-10')
          
      .tarjeta.color-acento-contenido.p-3(x="41%" y="8%" numero="")
        p.text-center ¿Se justifica el cargo?
      .tarjeta.color-acento-contenido.p-3(x="66%" y="8%" numero="")
        p.text-center ¿Para qué?
      .tarjeta.color-acento-contenido.p-3(x="89%" y="19%" numero="")
        p.text-center ¿Cuál es su misión y resultados?
      .tarjeta.color-acento-contenido.p-3(x="48%" y="31%" numero="")
        p.text-center ¿Cuáles son los principales criterios de selección?
      .tarjeta.color-acento-contenido.p-3(x="73%" y="46%" numero="")
        p.text-center ¿Cuál sería el candidato ideal?
      .tarjeta.color-acento-contenido.p-3(x="43%" y="59%" numero="")
        p.text-center ¿Cuáles son sus responsabilidades?
      .tarjeta.color-acento-contenido.p-3(x="89%" y="64%" numero="")
        p.text-center ¿Qué competencias necesita demostrar?
      .tarjeta.color-acento-contenido.p-3(x="59%" y="78%" numero="")
        p.text-center ¿Cuál sería su talento principal y cómo lo identificamos?
    
    div.mb-5
      p Un perfil del cargo, también llamado perfil ocupacional o vacante, es un método de recopilación de los requisitos y cualificaciones personales exigidos para el desempeño satisfactorio de las tareas de un empleado dentro de la empresa, entre los requisitos más comunes se encuentran:

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img.cont9bgr
        figure.justify-center
          img.img250(src='@/assets/curso/tema2/t2-11.svg', alt='Imagen 2-11')
      .bloque-texto-g__texto.p-4
        ul.lista-ul.p-3
          li
            ul
              li 
                i.fas.fa-angle-right
                span Nivel de estudios.
              li 
                i.fas.fa-angle-right
                span Experiencia.
              li 
                i.fas.fa-angle-right
                span Funciones del cargo o vacante.
              li 
                i.fas.fa-angle-right
                span Requisitos de instrucción y conocimientos.
              li 
                i.fas.fa-angle-right
                span Aptitudes y características de personalidad.

    .row.mb-5
      .col-12.col-md-8.col-lg-8
        p Como se mencionó anteriormente, el perfil del cargo y ocupacional es la descripción general de las características actitudinales, habilidades y destrezas que un trabajador debe desempeñar de manera eficiente en el cargo o puesto de trabajo. La creación de los perfiles ocupacionales permite el análisis y descripción de los cargos que necesita la empresa, y es aquí, donde se inicia el proceso de reclutamiento y selección del personal. 
        p Por otra parte, existe un conjunto de estándares que describen cómo se compone un perfil del cargo y ocupacional, que responden a un desempeño óptimo del trabajador. Entre estos se tienen: 
      .col-12.col-md-4.col-lg-4
        figure.justify-center
          img.img300(src='@/assets/curso/tema2/t2-12.png', alt='Imagen 2-12')
    
    .row.mb-5
      .col-12.col-md-4.col-lg-4
        figure.justify-center
          img.img450(src='@/assets/curso/tema2/t2-13.svg', alt='Imagen 2-13')
      .col-12.col-md-8.col-lg-8
        figure.justify-center
          img.img900(src='@/assets/curso/tema2/t2-22.png', alt='Imagen 2-22')
    
    p.mb-3 Al momento de elaborar o construir un perfil del cargo y ocupacional, se debe tener presente al menos las siguientes etapas:

    PasosA.color-acento-botones.mb-5(tipo="n")
      .row
        .col-md-6.mb-4.mb-md-0.mt-5
          h3 La etapa 1. 
          p Consiste en identificar las funciones propias del cargo, aquí se puede emplear la descripción y el análisis de cargos.
        .col-md-6
          figure.justify-center
            img.img250(src='@/assets/curso/tema2/t2-14.svg', alt='Imagen 2-14')
      .row
        .col-md-6
          figure.justify-center
            img.img250(src='@/assets/curso/tema2/t2-15.svg', alt='Imagen 2-15')
        .col-md-6.mb-4.mb-md-0.mt-5
          h3 La etapa 2.  
          p Permite describir las competencias básicas requeridas, aquí es importante tener en cuenta su formación profesional y otros niveles educativos. 
        
      .row
        .col-md-6.mb-4.mb-md-0.align-items-center
          h3 La etapa 3.   
          p Describir las competencias generales en relación a:
            ul.lista-ul.p-3
              li
                ul
                  li 
                    i.fas.fa-angle-right
                    span Funciones del trabajo: lo que debe saber hacer, qué problemas resolverá y cómo.
                  li 
                    i.fas.fa-angle-right
                    span Requerimientos del trabajo: experiencia laboral, certificación, edad, esfuerzo físico, idiomas, actitudes sociales y participativas, formación académica, cualidades psicofísicas, adaptativas y habilidades.
                  li 
                    i.fas.fa-angle-right
                    span Condiciones medioambientales: condiciones atmosféricas, lugar del trabajo, riesgos, clima, contaminación, entorno laboral, remuneraciones, entre otras.
                  li 
                    i.fas.fa-angle-right
                    span Relaciones: es importante el contacto, comunicación y relaciones con otras personas, con los jefes, supervisores y subordinados.
        .col-md-6
          figure.justify-center
            img.img250(src='@/assets/curso/tema2/t2-16.svg', alt='Imagen 2-16')

      .row
        .col-md-6
          figure.justify-center
            img.img250(src='@/assets/curso/tema2/t2-17.svg', alt='Imagen 2-17')
        .col-md-6.mb-4.mb-md-0.mt-5
          h3 La etapa 4.
          p Permite describir las competencias técnicas específicas del cargo. 
        
    separador

    #t2_2.titulo-segundo.color-secundario.mb-5
      h2 2.2.	Fuentes de provisión de personal
    
    div.mb-5
      p En toda empresa el área de recursos humanos debe saber elegir muy bien las fuentes de provisión de personal o de reclutamiento. Estas deben contar con canales o portales que permitan la publicación de ofertas, que su software pueda permitir el ejercicio de reclutamiento y sea de mucha ayuda para el proceso de la empresa.  
      p En las fuentes de provisión de personal se encuentran las de reclutamiento interno y reclutamiento externo. A continuación, conocerá un poco de cada una de estas: 
    
    div.mb-5.cont6bgr.p-3
      span.text-black Fuentes de reclutamiento interno. 
      | Consiste en cubrir una vacante, reubicando a cierto empleado que ya pertenece a la empresa. Este proceso de selección se realiza de forma interna y puede llegar a ser positivo para la empresa, debido a la reducción de costos al no realizar un proceso externo. Es preciso mencionar que a veces de forma interna se dan recomendaciones de personas cercanas o conocidas por algún empleado. 
    
    div.mb-5
      p Cuando la empresa decide realizar el proceso de selección interna, podemos encontrar diversas fuentes de provisión de personal, entre estas encontramos: 
    
    .row.mb-5
      .col-12.col-md-8.col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Base de datos de empleados")
            .col-md-12.mb-4.mb-md-0
              p Aquellos que forman parte de la empresa y otros que han pasado por ella.
          .row(titulo="Base de datos de antiguos candidatos")  
            .col-md-12.mb-4.mb-md-0
              p Aquí se buscan candidatos en la base de datos y no de los que hacen parte de la empresa. 
          .row(titulo="Enlaces sindicales")  
            .col-md-12.mb-4.mb-md-0
              p Enlace sindical o delegado de personal que representa los intereses de los empleados. 
          .row(titulo="Referidos")  
            .col-md-12.mb-4.mb-md-0
              p Las personas de la empresa recomiendan a una persona de su entorno.
          .row(titulo="Recontratación")  
            .col-md-12.mb-4.mb-md-0
              p Cuando por algún motivo externo (disminución de la demanda, etc.) la persona fue despedida, pero se hace necesario volver a contratarla porque conoce los procesos y sabe cómo es su trabajo. 
          .row(titulo="Planes de crecimiento")  
            .col-md-12.mb-4.mb-md-0
              p Mediante un crecimiento profesional se evalúa cuál trabajador puede encajar en la nueva vacante. 

      .col-12.col-md-4.col-lg-4      
        figure.justify-center
            img.img300(src='@/assets/curso/tema2/t2-18.png', alt='Imagen 2-18')
    
    div.mb-5.cont6bgr.p-3
      span.text-black Fuentes de reclutamiento externo.  
      | Son aquellas que no pertenecen a la empresa, verá más en la siguiente infografía animada.
    
    .row.mb-5
      .col-12.col-md-6.col-lg-6
        figure.justify-center
            img.img300(src='@/assets/curso/tema2/t2-19.png', alt='Imagen 2-19')
      .col-12.col-md-6.col-lg-6
        h3.text-center.colortext1 Ventajas de las fuentes de reclutamiento externo
        p La fuentes de reclutamiento externo se buscan a través de servicios de empleo, Internet o por medio de otras entidades encargadas de externalizar el proceso. Algunas de las ventajas de las fuentes de reclutamiento externo son las principales virtudes, como: 
        .cajon.cont11bgr.p-4.mb-4
           ol.lista-ol
            li 
              span.text-bold 1. 
              | Acceso a una gran variedad y diversidad cantidad de talento
            li 
              span.text-bold 2. 
              | Se ahorra en formación, los nuevos candidatos cuentan con un nivel de formación adecuada al cargo. 
            li 
              span.text-bold 3. 
              | Fomenta la competitividad y la diversidad
            li 
              span.text-bold 4. 
              | Se genera un ambiente de trabajo diferente. Aquí se incorporan nuevas ideas, métodos y herramientas que conozca el nuevo trabajador.

    .row.mb-5
      .col-12.col-md-6.col-lg-6
        h3.text-center.colortext1 Principales fuentes de reclutamiento externo
        p Sin embargo, para el proceso de selección externo encontramos las siguientes fuentes, es importante mencionar que de la elección de estas fuentes depende asegurar un proceso de calidad. Aquí encontramos las siguientes: 
        .cajon.cont11bgr.p-4.mb-4
           ol.lista-ol
            li 
              span.text-bold 1. 
              | Portales de empleo: aquí es importante tener en cuenta la calidad del portal de empleo, entre mayor sea, mejor será el proceso de reclutamiento. 
            li 
              span.text-bold 2. 
              | Redes sociales: además de permitirnos comunicarnos y compartir información también nos permiten generar valor de marca.
            li 
              span.text-bold 3. 
              | Eventos: estos se especializan en el sector. Aquí se asegura de que el candidato está enfocado en lo que se busca y en el sector.
            li 
              span.text-bold 4. 
              | Bolsas de empleo: aquí encontramos a universidades y escuelas donde algunas suelen contar con bolsas de empleo. En este tipo de fuente brinda la oportunidad a perfiles que están empezando en el mundo laboral.
            li 
              span.text-bold 5. 
              | Ferias de empleo: se realizan con el fin de analizar el talento de primera mano y atraer perfiles más específicos.
            li 
              span.text-bold 6. 
              | Blog o página de empleo de la empresa: permite subir las distintas ofertas junto con los valores corporativos.
            li 
              span.text-bold 7. 
              | Contenido multimedia: vídeos en YouTube que describan lo que es trabajar con la empresa. 
      .col-12.col-md-6.col-lg-6
        figure.justify-center
            img.img600(src='@/assets/curso/tema2/t2-20.png', alt='Imagen 2-20')
    
    separador

    #t2_3.titulo-segundo.color-secundario.mb-5
      h2 2.3.	Convocatoria
    
    div.mb-5
      p Es un anuncio o un escrito con el cual se convoca a un determinado evento o acontecimiento que se dará; a veces se emplea el sinónimo de la palabra citación. Entonces, se puede decir que la convocatoria es una especie de llamado público que un individuo, empresa u organización realiza con algún objetivo determinado. El lenguaje que se utiliza en las convocatorias debe ser formal porque estas se dirigen a un público general de diferentes edades y es importante generar confianza y respeto desde el primer momento. 
      p Ahora, vea las fases del proceso y las partes de una convocatoria:
    
    .titulo-quinto.color-acento-contenido
      h3 En lo que respecta a las fases del proceso para revisar convocatorias y aplicar se encuentran 
    
    figure
      img.img900(src='@/assets/curso/tema2/t2-23.svg', alt='Imagen 2-23')
    
    .titulo-quinto.color-acento-contenido
      h3 Por otro lado, se encuentran las partes de una convocatoria, estas deben contener
    
    figure
      img.img900(src='@/assets/curso/tema2/t2-24.svg', alt='Imagen 2-24')
    
    div.mb-5
      p A continuación, se mencionan algunos pasos y requisitos para publicar una convocatoria: 
    

    .row.justify-center
      .col-lg-5
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/a.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              p Elegir un buen nombre para la convocatoria.
      .col-lg-5
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/b.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              p Explica clara y brevemente de qué trata la convocatoria, aquí se debe orientar al usuario hacia los objetivos de la misma.   

    .row.justify-center
      .col-lg-5
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/c.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              p Utilizar una imagen destacada de buena calidad (fotos, gráficos, etc.). 
      .col-lg-5
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/d.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              p Descripción de la convocatoria.
    
    .row.justify-center
      .col-lg-5
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/e.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              p Incluir el e-mail de contacto para consultas o aclarar dudas de la convocatoria. 
      .col-lg-5
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/f.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              p Debe haber claridad en los textos que permitan saber cuáles son las expectativas de la convocatoria. 
    
    .row.justify-center
      .col-lg-5
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/g.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              p 7.	Si es necesario agregar descripción, premio, si la convocatoria tiene al final una premiación.    
      .col-lg-5
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/h.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              p Asegurarse de que las fechas se encuentren bien (día, mes, año). 
    
    .row.mb-5.justify-center
      .col-lg-5
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/i.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              p Si la convocatoria lleva etapas es importante verificar que las fechas estén correctas. 
      .col-lg-5
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/j.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              p Si existe la necesidad de anexar algún material de contenido, que este sea en formato PDF. 

    .row.mb-5.justify-center
      .col-lg-5
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/k.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              p Se deben mencionar las bases y condiciones de la convocatoria.  
      .col-lg-5
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/l.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              p Tener en cuenta la zona horaria, si esta depende de etapas y tiene alguna interacción con personas del exterior.  

 




      
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
