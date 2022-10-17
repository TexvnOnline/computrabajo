<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Listado</title>

    <!-- Fonts -->
    <link href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

    <!-- Added-->
    <link rel="stylesheet" href="{{ asset('css/views/main.css') }}" />
    <link rel="stylesheet" href="{{ asset('css/header_buscador.css') }}">
    <link rel="stylesheet" href="{{ asset('css/menu_lateral.css') }}">

</head>

<body>
    <!-- HEADER SUPERIOR -->
    <header id="header_menu" class="header_web ">
        <div class="container">
            <a title="Computrabajo" href="/">
                <img class="cep_logo" src="{{ asset('img/logos/logoct.svg') }}" srcset="{{ asset('img/logos/logoct.svg') }}" alt="Computrabajo Perú" data-header-candidatos="">
            </a>
            <div data-box-search-container="" class="box_search_content ">
                <div id="slider-container-outer">
                    <div id="slider-container">
                        <div class="box_search slider-item sel" data-position="1" data-box-search-inputs-container="" data-autocomplete-add-classes-when-opening-target="">
                            <div>
                                <div class="field_input_icon posRel mb0" data-type-search="prof-cat" data-input-focusable-container="">
                                    <form autocomplete="off" class="cont">
                                        <span class="icon i_find"></span>
                                        <!-- <input id="prof-cat-search-input" type="search" placeholder="Cargo o categoría" autocomplete="off" data-autocomplete-method="POST" data-autocomplete-url="/ajax/geticonquerysuggest" data-autocomplete-icondesign-enable="true" data-autocomplete-idholder="prof-cat-search-input-holder" data-autocomplete-add-classes-when-opening="b_radius_search_input" data-autocomplete-openonclick="true" data-autocomplete-show-summary="true" data-autocomplete-summary-latest-searches-lit="Últimas búsquedas" data-autocomplete-summary-generic-lit="Empleos más demandados" data-searchbox-query-baseprofurl="/trabajo-de-" data-autocomplete-select-first-ocurrence="false" data-input-focusable="" value="atencion al cliente"> -->
                                        <input id="prof-cat-search-input" type="search" placeholder="Cargo o categoría" autocomplete="off" data-autocomplete-icondesign-enable="true" data-autocomplete-idholder="prof-cat-search-input-holder" data-autocomplete-add-classes-when-opening="b_radius_search_input" data-autocomplete-openonclick="true" data-autocomplete-show-summary="true" data-autocomplete-select-first-ocurrence="false" data-input-focusable="">

                                        <span id="prof-cat-clean-button" onclick="" class="btn_click hide"><span class="icon i_close"></span></span>
                                    </form>
                                </div>
                                <div class="field_input_icon posRel bl1 mb0" data-type-search="place" data-input-focusable-container="">
                                    <form autocomplete="off" class="cont">
                                        <span class="icon i_address"></span>
                                        <!-- <input id="place-search-input" type="search" placeholder="Lugar" autocomplete="off" data-autocomplete-method="POST" data-autocomplete-url="/ajax/geticonplacessuggest" data-autocomplete-icondesign-enable="true" data-autocomplete-idholder="place-search-input-holder" data-autocomplete-openonclick="true" data-searchbox-query-baseplaceurl="/empleos-en-" data-searchbox-query-concatplaceurl="-en-" data-searchbox-query-place-replacewordurl="/empleos" data-autocomplete-select-first-ocurrence="false" data-input-focusable="" value=""> -->
                                        <input id="place-search-input" type="search" placeholder="Lugar" autocomplete="off" data-autocomplete-icondesign-enable="true" data-autocomplete-idholder="place-search-input-holder" data-autocomplete-openonclick="true" data-input-focusable="" value="">
                                        <input id="place-search-input-holder" type="hidden" value="">
                                        <span id="place-clean-button" onclick="" class="btn_click hide"><span class="icon i_close"></span></span>
                                    </form>
                                </div>
                            </div>
                            <button id="search-button" class="b_primary rounded mlAuto">
                                <span class="icon i_search"></span>
                                <span>Buscar empleos</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <script>
                window.searchBoxPreload = 'false' === 'true';
            </script>

            <div id="publish_offers_link" class="links">
                <a href="#" class="publish_free" rel="nofollow"> ¡Publica ofertas gratis!</a>
                <a href="#" class="b_primary_inv ">Crear CV</a>
            </div>

            <div class="hide show_t">
                <a href="#" class="b_primary hide">Crear CV</a>
                <span class="icon i_menu" id="open_menu_responsive"></span>
            </div>
        </div>
        <div class="show_t w100">
            <div class="box_search w100_m" data-lite-box-search="">
                <span data-lite-box-search="" data-lite-box-search-text="" data-lite-box-search-text-separator="en">¿Qué empleo buscas?</span>
                <span data-lite-box-search=""><span class="icon i_search"></span></span>
            </div>
        </div>
    </header>

    <!-- HEADER LATERAL -->
    <div class="header_lateral" id="menu_lateral_container">
        <div class="menu_lateral closed_menu" id="menu_lateral">
            <div id="menu_lateral_items_container">
                <span class="cp icon i_menu" id="open_menu"></span>

                <div class="info">
                    <div>
                        <span class="icon i_avatar cp new" id="open_menu_avatar"></span>
                        <div>
                            <p>Ingresa y encuentra empleo con una mejor experiencia</p>
                            <a data-access-menu="" href="#" class="b_primary">Ingresar</a>
                            <a href="#" rel="nofollow" class="b_primary b_google">Continúa con Google</a>
                        </div>
                    </div>
                </div>

                <div>
                    <a data-menu-icon="" href="#" class="sel">
                        <span class="icon i_search"></span>
                        <span style="margin-top: -36px;">Buscar ofertas</span>
                    </a>
                    <a data-menu-icon="" data-access-menu="">
                        <span class="icon i_post"></span>
                        <span class="" style="margin-top: -77.594px;">Mis postulaciones</span>
                        <span class="tooltip" style="margin-top: -77.594px;">
                            <span class="fwB fs16 mb10 dB">Mis postulaciones</span>
                            <span>Accede con tu cuenta a Computrabajo y haz un seguimiento de todos tus procesos de selección.</span>
                        </span>
                    </a>
                    <a data-menu-icon="" data-access-menu="">
                        <span class="icon i_fav"></span>
                        <span style="margin-top: -77.594px;">Mis favoritos</span>
                        <span class="tooltip" style="margin-top: -77.594px;">
                            <span class="fwB fs16 mb10 dB">Mis favoritos</span>
                            <span>Accede con tu cuenta a Computrabajo y marca como favoritos todos los empleos que desees guardar.</span>
                        </span>
                    </a>
                    <a data-menu-icon="" data-access-menu="">
                        <span class="icon i_alerts"></span>
                        <span class="" style="margin-top: -77.594px;">Mis Alertas</span>
                        <span class="tooltip" style="margin-top: -77.594px;">
                            <span class="fwB fs16 mb10 dB">Mis Alertas</span>
                            <span>Accede con tu cuenta a Computrabajo y crea alertas de empleo. Te avisaremos con nuevas ofertas.</span>
                        </span>
                    </a>
                </div>
                <div class="hidden">
                    <a href="#" class="opacity">Buscar empresas</a>
                    <a href="#" class="opacity">Salarios</a>
                    <a href="#" class="opacity">Reclutadores</a>
                    <a href="#" rel="nofollow" class="opacity">Publica ofertas gratis</a>
                    <p class="rrss">Consejos para encontrar empleo</p>
                    <div class="icons_rrss">
                        <a href="#" rel="noopener noreferrer nofollow" aria-label="Facebook"><span class="icon i_fb"></span></a>
                        <a href="#" rel="noopener noreferrer nofollow" aria-label="Instagram"><span class="icon i_instagram"></span></a>
                        <a href="#" rel="noopener noreferrer nofollow" aria-label="TikTok"><span class="icon i_tiktok"></span></a>

                        <a href="#" rel="noopener noreferrer nofollow" aria-label="Blog"><span class="icon i_blog"></span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- CONTENIDO -->
    <main id="container">

        <input type="hidden" id="gtm_targeting_categoria" value="17">
        <input type="hidden" id="gtm_targeting_departamento" value=" ">
        <input type="hidden" id="gtm_afs_query" value="trabajos de atencion al cliente">
        <input type="hidden" id="gtm_afs_page" value="1">
        <input type="hidden" id="gtm_afs_elements" value="20">

        <div id="partial-popup-access"></div>
        <div class="container mt10">
        </div>
        <div class="box_border menu_top">
            <div class="container">
                <div class="filters">
                    <div class="box_btn_alert">
                        <div class="btn_alert shadow_off" data-create-alert-icon="">
                            <span id="b_alert_txt" class="descrip" data-create-alert="">Crear alerta</span>
                            <span class="icon i_alert small"></span>
                        </div>
                    </div>

                    <div class="field_select_links short small" id="slcOrdenar">
                        <p>Ordenar</p>
                        <ul class="list">
                            <li>
                                <a class="buildLink" href="#">Relevancia</a>
                            </li>
                            <li>
                                <a class="buildLink" href="#">Fecha</a>
                            </li>
                            <li>
                                <a class="buildLink" href="#">Salario</a>
                            </li>
                        </ul>
                    </div>

                    <div class="field_select_links small" id="slcFecha">
                        <p>Fecha</p>
                        <ul class="list">
                            <li>
                                <a class="buildLink " rel="nofollow">Urgente</a>
                                <span class="tag">3.831</span>
                            </li>
                            <li>
                                <a class="buildLink " rel="nofollow">Desde ayer</a>
                                <span class="tag">1.280</span>
                            </li>
                            <li>
                                <a class="buildLink " rel="nofollow">Últimos 3 días</a>
                                <span class="tag">2.341</span>
                            </li>
                            <li>
                                <a class="buildLink " rel="nofollow">Última semana</a>
                                <span class="tag">4.427</span>
                            </li>
                            <li>
                                <a class="buildLink " rel="nofollow">Últimos 15 días</a>
                                <span class="tag">6.992</span>
                            </li>
                            <li>
                                <a class="buildLink " rel="nofollow">Último mes</a>
                                <span class="tag">9.590</span>
                            </li>
                        </ul>
                    </div>
                    <div class="field_select_links small" data-link-facet="" id="slcCategoria">
                        <p>Categoría</p>
                        <ul class="list">
                            <li>
                                <a class="" href="#" title="Avisos de trabajo de Atención a clientes">Atención a clientes</a>
                                <span class="tag">4.391</span>
                            </li>
                            <li>
                                <a class="" href="#" title="Avisos de trabajo de Ventas">Ventas</a>
                                <span class="tag">2.617</span>
                            </li>
                            <li>
                                <a class="" href="#" title="Avisos de trabajo de CallCenter / Telemercadeo">CallCenter / Telemercadeo</a>
                                <span class="tag">2.149</span>
                            </li>
                            <li>
                                <a class="" href="#" title="Avisos de trabajo de Otros">Otros</a>
                                <span class="tag">408</span>
                            </li>
                            <li>
                                <a class="" href="#" title="Avisos de trabajo de Hostelería / Turismo">Hostelería / Turismo</a>
                                <span class="tag">377</span>
                            </li>
                            <li>
                                <a class="" href="#" title="Avisos de trabajo de Administración / Oficina">Administración / Oficina</a>
                                <span class="tag">366</span>
                            </li>
                            <li>
                                <a class="" href="#" title="Avisos de trabajo de Almacén / Logística / Transporte">Almacén / Logística / Transporte</a>
                                <span class="tag">355</span>
                            </li>
                            <li>
                                <a class="" href="#" title="Avisos de trabajo de Servicios Generales, Aseo y Seguridad ">Servicios Generales, Aseo y Seguridad </a>
                                <span class="tag">351</span>
                            </li>
                            <li>
                                <a class="" href="#" title="Avisos de trabajo de Medicina / Salud">Medicina / Salud</a>
                                <span class="tag">226</span>
                            </li>
                            <li>
                                <a class="" href="#" title="Avisos de trabajo de Informática / Telecomunicaciones">Informática / Telecomunicaciones</a>
                                <span class="tag">198</span>
                            </li>
                            <li>
                                <a class="" href="#" title="Avisos de trabajo de Contabilidad / Finanzas">Contabilidad / Finanzas</a>
                                <span class="tag">184</span>
                            </li>
                            <li>
                                <a class="" href="#" title="Avisos de trabajo de Mantenimiento y Reparaciones Técnicas">Mantenimiento y Reparaciones Técnicas</a>
                                <span class="tag">184</span>
                            </li>
                            <li>
                                <a class="" href="#" title="Avisos de trabajo de Producción / Operarios / Manufactura">Producción / Operarios / Manufactura</a>
                                <span class="tag">182</span>
                            </li>
                            <li>
                                <a class="" href="#" title="Avisos de trabajo de Mercadotecnia / Publicidad / Comunicación">Mercadotecnia / Publicidad / Comunicación</a>
                                <span class="tag">97</span>
                            </li>
                            <li>
                                <a class="" href="#" title="Avisos de trabajo de Ingeniería">Ingeniería</a>
                                <span class="tag">79</span>
                            </li>
                            <li>
                                <a class="" href="#" title="Avisos de trabajo de Recursos Humanos">Recursos Humanos</a>
                                <span class="tag">65</span>
                            </li>
                            <li>
                                <a class="" href="#" title="Avisos de trabajo de Construcción y obra">Construcción y obra</a>
                                <span class="tag">28</span>
                            </li>
                            <li>
                                <a class="" href="#" title="Avisos de trabajo de Compras / Comercio Exterior">Compras / Comercio Exterior</a>
                                <span class="tag">25</span>
                            </li>
                            <li>
                                <a class="" href="#" title="Avisos de trabajo de Legal / Asesoría">Legal / Asesoría</a>
                                <span class="tag">19</span>
                            </li>
                            <li>
                                <a class="" href="#" title="Avisos de trabajo de Diseño / Artes gráficas">Diseño / Artes gráficas</a>
                                <span class="tag">18</span>
                            </li>
                            <li>
                                <a class="" href="#" title="Avisos de trabajo de Investigación y Calidad">Investigación y Calidad</a>
                                <span class="tag">17</span>
                            </li>
                            <li>
                                <a class="" href="#" title="Avisos de trabajo de Dirección / Gerencia">Dirección / Gerencia</a>
                                <span class="tag">8</span>
                            </li>
                            <li>
                                <a class="" href="#" title="Avisos de trabajo de Docencia">Docencia</a>
                                <span class="tag">4</span>
                            </li>
                        </ul>
                    </div>
                    <div class="field_select_links small" id="slcRegion">
                        <p>Región</p>
                        <ul class="list">
                            <li>
                                <a class="" href="#" title="Avisos de empleo en Lima">Lima</a>
                                <span class="tag">8.945</span>
                            </li>
                            <li>
                                <a class="" href="#" title="Avisos de empleo en Arequipa">Arequipa</a>
                                <span class="tag">541</span>
                            </li>
                            <li>
                                <a class="" href="#" title="Avisos de empleo en La Libertad">La Libertad</a>
                                <span class="tag">451</span>
                            </li>
                            <li>
                                <a class="" href="#" title="Avisos de empleo en Callao">Callao</a>
                                <span class="tag">407</span>
                            </li>
                            <li>
                                <a class="" href="#" title="Avisos de empleo en Lambayeque">Lambayeque</a>
                                <span class="tag">251</span>
                            </li>
                            <li>
                                <a class="" href="#" title="Avisos de empleo en Piura">Piura</a>
                                <span class="tag">239</span>
                            </li>
                            <li>
                                <a class="" href="#" title="Avisos de empleo en Ica">Ica</a>
                                <span class="tag">231</span>
                            </li>
                            <li>
                                <a class="" href="#" title="Avisos de empleo en Cusco">Cusco</a>
                                <span class="tag">219</span>
                            </li>
                            <li>
                                <a class="" href="#" title="Avisos de empleo en Junin">Junin</a>
                                <span class="tag">184</span>
                            </li>
                            <li>
                                <a class="" href="#" title="Avisos de empleo en Ancash">Ancash</a>
                                <span class="tag">151</span>
                            </li>
                            <li>
                                <a class="" href="#" title="Avisos de empleo en Puno">Puno</a>
                                <span class="tag">121</span>
                            </li>
                            <li>
                                <a class="" href="#" title="Avisos de empleo en Cajamarca">Cajamarca</a>
                                <span class="tag">101</span>
                            </li>
                            <li>
                                <a class="" href="#" title="Avisos de empleo en San Martin">San Martin</a>
                                <span class="tag">82</span>
                            </li>
                            <li>
                                <a class="" href="#" title="Avisos de empleo en Moquegua">Moquegua</a>
                                <span class="tag">62</span>
                            </li>
                            <li>
                                <a class="" href="#" title="Avisos de empleo en Huanuco">Huanuco</a>
                                <span class="tag">59</span>
                            </li>
                            <li>
                                <a class="" href="#" title="Avisos de empleo en Tacna">Tacna</a>
                                <span class="tag">59</span>
                            </li>
                            <li>
                                <a class="" href="#" title="Avisos de empleo en Ayacucho">Ayacucho</a>
                                <span class="tag">42</span>
                            </li>
                            <li>
                                <a class="" href="#" title="Avisos de empleo en Tumbes">Tumbes</a>
                                <span class="tag">38</span>
                            </li>
                            <li>
                                <a class="" href="#" title="Avisos de empleo en Ucayali">Ucayali</a>
                                <span class="tag">36</span>
                            </li>
                            <li>
                                <a class="" href="#" title="Avisos de empleo en Loreto">Loreto</a>
                                <span class="tag">35</span>
                            </li>
                            <li>
                                <a class="" href="#" title="Avisos de empleo en Madre De Dios">Madre De Dios</a>
                                <span class="tag">28</span>
                            </li>
                            <li>
                                <a class="" href="#" title="Avisos de empleo en Apurimac">Apurimac</a>
                                <span class="tag">19</span>
                            </li>
                            <li>
                                <a class="" href="#" title="Avisos de empleo en Pasco">Pasco</a>
                                <span class="tag">14</span>
                            </li>
                            <li>
                                <a class="" href="#" title="Avisos de empleo en Amazonas">Amazonas</a>
                                <span class="tag">11</span>
                            </li>
                            <li>
                                <a class="" href="#" title="Avisos de empleo en Huancavelica">Huancavelica</a>
                                <span class="tag">7</span>
                            </li>
                        </ul>
                    </div>
                    <div class="field_select_links small" id="slcDistrito">
                        <p>Distrito</p>
                        <ul class="list">
                            <li>
                                <a class="" href="#" title="Avisos de empleo en Lima">Lima</a>
                                <span class="tag">2.828</span>
                            </li>
                            <li>
                                <a class="" href="#" title="Avisos de empleo en Miraflores">Miraflores</a>
                                <span class="tag">465</span>
                            </li>
                            <li>
                                <a class="" href="#" title="Avisos de empleo en Ate">Ate</a>
                                <span class="tag">452</span>
                            </li>
                            <li>
                                <a class="" href="#" title="Avisos de empleo en San Isidro">San Isidro</a>
                                <span class="tag">442</span>
                            </li>
                            <li>
                                <a class="" href="#" title="Avisos de empleo en Lince">Lince</a>
                                <span class="tag">392</span>
                            </li>
                            <li>
                                <a class="" href="#" title="Avisos de empleo en Arequipa">Arequipa</a>
                                <span class="tag">372</span>
                            </li>
                            <li>
                                <a class="" href="#" title="Avisos de empleo en Trujillo">Trujillo</a>
                                <span class="tag">364</span>
                            </li>
                            <li>
                                <a class="" href="#" title="Avisos de empleo en Santiago De Surco">Santiago De Surco</a>
                                <span class="tag">314</span>
                            </li>
                            <li>
                                <a class="" href="#" title="Avisos de empleo en Callao">Callao</a>
                                <span class="tag">304</span>
                            </li>
                        </ul>
                    </div>
                    <div class="field_select_links small" id="slcExperiencia">
                        <p>Experiencia</p>
                        <ul class="list">
                            <li>
                                <a class="" href="#" title="Avisos de trabajo sin experiencia">Sin Experiencia</a>
                                <span class="tag">2.793</span>
                            </li>
                            <li>
                                <a class="buildLink" href="#">1 año</a>
                                <span class="tag">2.933</span>
                            </li>
                            <li>
                                <a class="buildLink" href="#">2 años</a>
                                <span class="tag">990</span>
                            </li>
                            <li>
                                <a class="buildLink" href="#">3-4 años</a>
                                <span class="tag">397</span>
                            </li>
                            <li>
                                <a class="buildLink" href="#">5-10 años</a>
                                <span class="tag">88</span>
                            </li>
                            <li>
                                <a class="buildLink" href="#">Más de 10 años</a>
                                <span class="tag">14</span>
                            </li>
                        </ul>
                    </div>
                    <div class="field_select_links small" id="slcSalario">
                        <p>Salario</p>
                        <ul class="list">
                            <li>
                                <span class="buildLink">Menos de S./750</span>
                            </li>
                            <li>
                                <span class="buildLink">Más de S./750</span>
                            </li>
                            <li>
                                <span class="buildLink">Más de S./1500</span>
                            </li>
                            <li>
                                <span class="buildLink">Más de S./3000</span>
                            </li>
                            <li>
                                <span class="buildLink">Más de S./6000</span>
                            </li>
                            <li>
                                <span class="buildLink">Más de S./10000</span>
                            </li>
                        </ul>
                    </div>
                    <div class="field_select_links small" id="slcJornada">
                        <p>Tipo de jornada</p>
                        <ul class="list">
                            <li>
                                <span class="buildLink" href="#">Tiempo completo</span>
                                <span class="tag">10.681</span>
                            </li>
                            <li>
                                <a class="" href="#">Tiempo parcial</a>
                                <span class="tag">1.413</span>
                            </li>
                            <li>
                                <a class="" href="#">Desde casa</a>
                                <span class="tag">153</span>
                            </li>
                            <li>
                                <a class="" href="#">Por horas</a>
                                <span class="tag">87</span>
                            </li>
                            <li>
                                <a class="" href="#">Beca/Prácticas</a>
                                <span class="tag">14</span>
                            </li>
                        </ul>
                    </div>
                    <div class="field_select_links small" id="slcContrato">
                        <p>Tipo de contrato</p>
                        <ul class="list">
                            <li>
                                <a class="buildLink " href="#">Contrato por Inicio o Incremento de Actividad</a>
                                <span class="tag">6.107</span>
                            </li>
                            <li>
                                <a class="buildLink " href="#">Contrato por Necesidades del Mercado</a>
                                <span class="tag">2.660</span>
                            </li>
                            <li>
                                <a class="buildLink " href="#">Contrato a Plazo Indeterminado</a>
                                <span class="tag">1.709</span>
                            </li>
                            <li>
                                <a class="buildLink " href="#">Contrato por Obra Determinada o Servicio Específico</a>
                                <span class="tag">859</span>
                            </li>
                            <li>
                                <a class="buildLink " href="#">Contrato de Temporada</a>
                                <span class="tag">440</span>
                            </li>
                            <li>
                                <a class="buildLink " href="#">Contrato Intermitente</a>
                                <span class="tag">252</span>
                            </li>
                            <li>
                                <a class="buildLink " href="#">Contrato Ocasional</a>
                                <span class="tag">120</span>
                            </li>
                            <li>
                                <a class="buildLink " href="#">Contrato de Suplencia</a>
                                <span class="tag">78</span>
                            </li>
                            <li>
                                <a class="buildLink " href="#">Contrato de Emergencia</a>
                                <span class="tag">71</span>
                            </li>
                            <li>
                                <a class="buildLink " href="#">Convenio de Prácticas</a>
                                <span class="tag">45</span>
                            </li>
                            <li>
                                <a class="buildLink " href="#">Contrato por Reconversion Empresarial</a>
                                <span class="tag">7</span>
                            </li>
                        </ul>
                    </div>
                    <div class="field_select_links small" id="slcDiscapacidad">
                        <p>Discapacidad</p>
                        <ul class="list">
                            <li>
                                <a class="buildLink " href="#">Sí</a>
                            </li>
                            <li>
                                <a class="buildLink " href="#">No</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="dFlex dIB_m w100_m">
                    <div id="offersGridOfferContainer" class="box_grid parrilla_oferta">
                        <h1 class="title_page">
                            <span class="fwB">12.380</span>
                            Ofertas de trabajo de atencion al cliente
                        </h1>



                        <article class="box_offer " data-blind="false" data-lc="ListOffers-Score5-1" data-offers-grid-offer-item-container="">
                            <div class="w100">
                                <div class="list_dot mb5 mrB">
                                    <span class="fc_urgent">Se precisa Urgente</span>
                                    <span class="fc_dest">Empleo destacado</span>
                                </div>
                                <h1 class="fs18 fwB"><a class="js-o-link fc_base" href="/detalle">Asesor/con o sin experiencia Atención al Cliente /8 Am a 4 pm</a></h1>
                                <p class="fs16 fc_base mt5 mb5">
                                    <a class="fc_base hover it-blank" href="/empresa_1" target="_blank" offer-grid-article-company-url="">GSS</a>

                                    <span class="ml10 mr10"><span class="star"></span> 3,9</span>

                                    Lima, Santa Anita
                                </p>
                                <p class="fs13 fc_aux">Hace 3 minutos</p>
                            </div>

                            <div class="w20 pr15 pl15 hide_m">
                                <img class="lazy" data-original="https://ii.ct-stc.com/3/logos/empresas/2022/05/10/b4f82c53ada2407dbcf7151239720thumbnail.png" title="GSS" src="https://ii.ct-stc.com/3/logos/empresas/2022/05/10/b4f82c53ada2407dbcf7151239720thumbnail.png">
                            </div>
                            <div class="opt_dots" id="options_1">
                                <div class="opt_bubble" id="list_1">
                                    <a label-ga="Shortcuts_postular">
                                        <span class="icon i_postular mr10 vb"></span>
                                        Postular
                                    </a>
                                    <span class="dB fc_base it-blank cp mb5" label-ga="Shortcuts_favoritos">
                                        <span class="icon i_fav mr10 vb"></span>
                                        Guardar en Mis favoritos
                                    </span>
                                    <span class="dB fc_base it-blank cp " label-ga="Shortcuts_denunciar">
                                        <span class="icon i_report mr10 vb"></span>
                                        Denunciar empleo
                                    </span>
                                </div>
                            </div>

                        </article>


                        <article class="box_offer " data-id="B49F3F5E4A04552361373E686DCF3405" data-blind="false" id="B49F3F5E4A04552361373E686DCF3405" data-lc="ListOffers-Score5-2" data-offers-grid-offer-item-container="">
                            <div class="w100">
                                <div class="list_dot mb5 mrB">
                                </div>
                                <h1 class="fs18 fwB"><a class="js-o-link fc_base" href="/ofertas-de-trabajo/oferta-de-trabajo-de-asesores-de-atencion-al-cliente-ingreso-a-planilla-sueldo-fijo-bono-de-300turno-tarde-modalidad-presencial-en-lince-call-center-en-lince-B49F3F5E4A04552361373E686DCF3405#lc=ListOffers-Score5-2">Asesores de Atención al Cliente/ Ingreso a Planilla + Sueldo Fijo + bono de 300/Turno Tarde</a></h1>
                                <p class="fs16 fc_base mt5 mb5">
                                    <a class="fc_base hover it-blank" href="https://pe.computrabajo.com/empresas/ofertas-de-trabajo-de-fortel-customer-experience-F042E94E648A37FD" target="_blank" offer-grid-article-company-url="">FORTEL CUSTOMER EXPERIENCE</a>

                                    <span class="ml10 mr10"><span class="star"></span> 3,8</span>

                                    Lima, Lince
                                </p>
                                <p class="fs13 fc_aux">Hace 7 minutos</p>
                            </div>

                            <div class="w20 pr15 pl15 hide_m">
                                <img class="lazy" data-original="https://ii.ct-stc.com/3/logos/empresas/2019/04/05/74596cf32e924251829c213723120thumbnail.png" title="FORTEL CUSTOMER EXPERIENCE" src="https://ii.ct-stc.com/3/logos/empresas/2019/04/05/74596cf32e924251829c213723120thumbnail.png">
                            </div>
                            <div class="opt_dots" id="options_2">
                                <div class="opt_bubble" id="list_2">
                                    <a label-ga="Shortcuts_postular">
                                        <span class="icon i_postular mr10 vb"></span>
                                        Postular
                                    </a>
                                    <span class="dB fc_base it-blank cp mb5" label-ga="Shortcuts_favoritos">
                                        <span class="icon i_fav mr10 vb"></span>
                                        Guardar en Mis favoritos
                                    </span>
                                    <span class="dB fc_base it-blank cp " label-ga="Shortcuts_denunciar">
                                        <span class="icon i_report mr10 vb"></span>
                                        Denunciar empleo
                                    </span>
                                </div>
                            </div>

                        </article>

                        <div id="dfpgrid27"></div>
                        <div id="dfpgrid1_1" class="mb10"></div>

                        <div class="dFlex vm_fx tj_fx mtB">
                            <span class="b_primary_inv fwB disabled w48 cp">Anterior</span>
                            <span class="b_primary w48 buildLink cp" title="Siguiente">Siguiente</span>
                        </div>

                        <div id="dfpgrid28" style="font-weight: normal; text-align: center; display: block; padding-top: 20px"></div>
                        <div class="mtB mbB">
                            <p class="fs16 mb10">Empleos similares</p>
                            <a class="mb10 tag link" href="#"><span>Asesores/as</span></a>
                            <a class="mb10 tag link" href="#"><span>Valet parking</span></a>
                            <a class="mb10 tag link" href="#"><span>Técnico/a</span></a>
                            <a class="mb10 tag link" href="#"><span>Auxiliar de almacén</span></a>
                            <a class="mb10 tag link" href="#"><span>Técnico/a de soporte</span></a>
                            <a class="mb10 tag link" href="#"><span>Agentes de seguridad</span></a>
                            <a class="mb10 tag link" href="#"><span>Servicio al cliente</span></a>
                            <a class="mb10 tag link" href="#"><span>Operario/a</span></a>
                            <a class="mb10 tag link" href="#"><span>Agente de ventas</span></a>
                            <a class="mb10 tag link" href="#"><span>Ejecutivo de ventas</span></a>
                            <a class="mb10 tag link" href="#"><span>Atención al cliente</span></a>
                            <a class="mb10 tag link" href="#"><span>Operario/a de producción</span></a>
                            <a class="mb10 tag link" href="#"><span>Impulsadoras</span></a>
                            <a class="mb10 tag link" href="#"><span>Counter</span></a>
                            <a class="mb10 tag link" href="#"><span>Anfitriones</span></a>
                        </div>



                        <!-- <footer>
                            <div class="footer_c" id="secfooter">
                                <div class="container">
                                    <div class="info_footer">
                                        Copyright 2014 - 2022 DGNET LTD.
                                        <br>
                                        <span class="buildLink cp"  rel="nofollow">Aviso legal</span><span> / </span><span class="buildLink cp" data-path="https://pe.computrabajo.com/privacidad/" rel="nofollow">privacidad</span>
                                        <br>
                                    </div>
                                    <div class="icons_app">

                                        <div class="android_app" id="it-app-google">
                                            <a href="#" target="_blank" rel="noopener noreferrer nofollow">
                                                <img id="android" class="lazy" data-original="/c/img/es-419_generic_rgb_wo_45.svg" alt="Disponible en Google Play" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC">
                                            </a>
                                        </div>


                                        <div class="ios_app" id="it-app-itunes">
                                            <a href="https://itunes.apple.com/es/app/computrabajo-ofertas-empleo/id1093787284?mt=8" target="_blank" rel="noopener noreferrer nofollow">
                                                <img id="ios" alt="Consíguela en AppStore" class="lazy" data-original="/c/img/ios_app.svg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC">
                                            </a>
                                        </div>





                                        <div class="android_app huawei_app" id="divHuaweiApp">
                                            <a href="https://appgallery.huawei.com/#/app/C102560361" target="_blank" rel="noopener noreferrer nofollow">
                                                <img class="lazy" data-original="/c/img/huawei_app.svg" alt="Disponible en Huawei AppGallery" style="height:40px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC">
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </footer> -->
                    </div>

                    <div class="box_detail">
                        <p class="title_offer fs21 fwB lh1_2">Atención al cliente en minimarket</p>
                        <div class="header_detail">
                            <div>
                                <p class="fwB fs16">Miraflores</p>
                                <div class="mb5 mt5 fs16">
                                    <a href="#" target="_blank">COESTI S.A.</a>
                                    <span class="star"></span>
                                    <span class="fwB">4,1</span>

                                    <span>Miraflores, Lima</span>
                                </div>
                            </div>
                            <div class="logo_company">
                                <a href="#"><img src="https://ii.ct-stc.com/3/logos/empresas/2020/12/03/1ced6c4ba6e14179bcab181136832thumbnail.png" alt="COESTI S.A. logo"></a>
                            </div>
                        </div>
                        <div class="box_buttons">
                            <a class="b_primary big" href="/detalle">Postularme</a>
                            <button class="b_icon b_heart ml10" aria-label="Add favorite">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -28 512.001 512" height="22" width="22">
                                    <path d="m256 455.515625c-7.289062 0-14.316406-2.640625-19.792969-7.4375-20.683593-18.085937-40.625-35.082031-58.21875-50.074219l-.089843-.078125c-51.582032-43.957031-96.125-81.917969-127.117188-119.3125-34.644531-41.804687-50.78125-81.441406-50.78125-124.742187 0-42.070313 14.425781-80.882813 40.617188-109.292969 26.503906-28.746094 62.871093-44.578125 102.414062-44.578125 29.554688 0 56.621094 9.34375 80.445312 27.769531 12.023438 9.300781 22.921876 20.683594 32.523438 33.960938 9.605469-13.277344 20.5-24.660157 32.527344-33.960938 23.824218-18.425781 50.890625-27.769531 80.445312-27.769531 39.539063 0 75.910156 15.832031 102.414063 44.578125 26.191406 28.410156 40.613281 67.222656 40.613281 109.292969 0 43.300781-16.132812 82.9375-50.777344 124.738281-30.992187 37.398437-75.53125 75.355469-127.105468 119.308594-17.625 15.015625-37.597657 32.039062-58.328126 50.167969-5.472656 4.789062-12.503906 7.429687-19.789062 7.429687zm-112.96875-425.523437c-31.066406 0-59.605469 12.398437-80.367188 34.914062-21.070312 22.855469-32.675781 54.449219-32.675781 88.964844 0 36.417968 13.535157 68.988281 43.882813 105.605468 29.332031 35.394532 72.960937 72.574219 123.476562 115.625l.09375.078126c17.660156 15.050781 37.679688 32.113281 58.515625 50.332031 20.960938-18.253907 41.011719-35.34375 58.707031-50.417969 50.511719-43.050781 94.136719-80.222656 123.46875-115.617188 30.34375-36.617187 43.878907-69.1875 43.878907-105.605468 0-34.515625-11.605469-66.109375-32.675781-88.964844-20.757813-22.515625-49.300782-34.914062-80.363282-34.914062-22.757812 0-43.652344 7.234374-62.101562 21.5-16.441406 12.71875-27.894532 28.796874-34.609375 40.046874-3.453125 5.785157-9.53125 9.238282-16.261719 9.238282s-12.808594-3.453125-16.261719-9.238282c-6.710937-11.25-18.164062-27.328124-34.609375-40.046874-18.449218-14.265626-39.34375-21.5-62.097656-21.5zm0 0" fill="#0D3878"></path>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -28 512.00002 512" height="22" width="22">
                                    <path d="m471.382812 44.578125c-26.503906-28.746094-62.871093-44.578125-102.410156-44.578125-29.554687 0-56.621094 9.34375-80.449218 27.769531-12.023438 9.300781-22.917969 20.679688-32.523438 33.960938-9.601562-13.277344-20.5-24.660157-32.527344-33.960938-23.824218-18.425781-50.890625-27.769531-80.445312-27.769531-39.539063 0-75.910156 15.832031-102.414063 44.578125-26.1875 28.410156-40.613281 67.222656-40.613281 109.292969 0 43.300781 16.136719 82.9375 50.78125 124.742187 30.992188 37.394531 75.535156 75.355469 127.117188 119.3125 17.613281 15.011719 37.578124 32.027344 58.308593 50.152344 5.476563 4.796875 12.503907 7.4375 19.792969 7.4375 7.285156 0 14.316406-2.640625 19.785156-7.429687 20.730469-18.128907 40.707032-35.152344 58.328125-50.171876 51.574219-43.949218 96.117188-81.90625 127.109375-119.304687 34.644532-41.800781 50.777344-81.4375 50.777344-124.742187 0-42.066407-14.425781-80.878907-40.617188-109.289063zm0 0" fill="#f5597c"></path>
                                </svg>
                            </button>
                            <div class="b_icon ml10 dFlex posRel">
                                <button aria-label="Share button">
                                    <span class="icon i_share small"></span>
                                </button>
                                <div class="opt_bubble small">
                                    <span class="dB fc_base cp">
                                        <span class="icon i_whatsapp mr10"></span>Whatsapp
                                    </span>
                                    <span class="dB fc_base cp">
                                        <span class="icon i_fb mr10"></span>Facebook
                                    </span>
                                    <span class="dB fc_base cp">
                                        <span class="icon i_twitter mr10"></span>Twitter
                                    </span>
                                    <span class="dB fc_base cp">
                                        <span class="icon i_copy_link mr10"></span>Copiar enlace
                                    </span>
                                </div>
                                <span id="copylinkToast" class="tag save hide" style="opacity: 0;" data-txt-ok="Enlace copiado"></span>
                            </div>
                            <div class="b_icon ml10  dFlex posRel" id="more_1">
                                <button aria-label="See more options">
                                    <span class="b_dots"></span>
                                </button>
                                <div class="opt_bubble small" id="more_list_1">
                                    <span class="dB fc_base cp" data-create-alert="splitgriddetail-moreoptions">
                                        <span class="icon i_alert mr10"></span>
                                        Recibir ofertas similares
                                    </span>
                                    <span target="_blank" class="dB fc_base buildLink cp">
                                        <span class="icon i_print mr10"></span>
                                        Imprimir
                                    </span>
                                    <span class="dB fc_base cp" shortcut-report="">
                                        <span class="icon i_report mr10"></span>
                                        Denunciar empleo
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div id="dfpgrid29" class="tc ptB"></div>
                        <div>
                            <div>

                                <div class="fs14 mb10">
                                    <div class="mbB">
                                        <span class="tag base mb10">Contrato a Plazo Indeterminado</span>
                                        <span class="tag base mb10">Tiempo completo</span>
                                    </div>
                                </div>
                                <div class="fs16">
                                    Es tu oportunidad!<br><br>Nuestra gran Familia, líder en hidrocarburos se encuentra en la búsqueda de personal dispuesto a laborar con ENERGÍA Y PASIÓN en la posición VENDEDOR DE MINIMERCADO desempeñando las siguientes funciones:<br><br>FUNCIONES:<br><br>Atención al cliente<br><br>Preparación de comida rápida<br><br>Reposición de productos<br><br>Manejo y cuadre de caja<br><br>Venta de promociones<br><br>Inventarios<br><br>Aseo del lugar de trabajo<br><br>REQUISITOS:<br><br>Secundaria Completa<br><br>Disponibilidad para laborar en horarios rotativos<br><br>Contar con disponibilidad de laborar en el distrito de Miraflores<br><br>BENEFICIOS:<br><br>Ingreso a planilla con beneficios acordes a ley<br><br>Vacaciones<br><br>CTS<br><br>Asignación Familiar<br><br>Incentivos por ventas<br>
                                </div>
                                <p class="fwB fs18 mtB mb10">Requerimientos</p>
                                <ul class="fs16 disc mbB">
                                    <li class="mb5">Educación mínima: Educación Secundaria</li>
                                    <li class="mb5">Disponibilidad de viajar: No</li>
                                    <li class="mb5">Disponibilidad de cambio de residencia: No</li>
                                </ul>
                                <p class="fc_aux fs13">Hace 1 minuto (actualizada)</p>
                                <div class="dFlex tc_fx mtB">
                                    <a class="b_primary big">Postularme</a>
                                    <button class="b_icon b_heart ml10" aria-label="Add favorite">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -28 512.001 512" height="22" width="22">
                                            <path d="m256 455.515625c-7.289062 0-14.316406-2.640625-19.792969-7.4375-20.683593-18.085937-40.625-35.082031-58.21875-50.074219l-.089843-.078125c-51.582032-43.957031-96.125-81.917969-127.117188-119.3125-34.644531-41.804687-50.78125-81.441406-50.78125-124.742187 0-42.070313 14.425781-80.882813 40.617188-109.292969 26.503906-28.746094 62.871093-44.578125 102.414062-44.578125 29.554688 0 56.621094 9.34375 80.445312 27.769531 12.023438 9.300781 22.921876 20.683594 32.523438 33.960938 9.605469-13.277344 20.5-24.660157 32.527344-33.960938 23.824218-18.425781 50.890625-27.769531 80.445312-27.769531 39.539063 0 75.910156 15.832031 102.414063 44.578125 26.191406 28.410156 40.613281 67.222656 40.613281 109.292969 0 43.300781-16.132812 82.9375-50.777344 124.738281-30.992187 37.398437-75.53125 75.355469-127.105468 119.308594-17.625 15.015625-37.597657 32.039062-58.328126 50.167969-5.472656 4.789062-12.503906 7.429687-19.789062 7.429687zm-112.96875-425.523437c-31.066406 0-59.605469 12.398437-80.367188 34.914062-21.070312 22.855469-32.675781 54.449219-32.675781 88.964844 0 36.417968 13.535157 68.988281 43.882813 105.605468 29.332031 35.394532 72.960937 72.574219 123.476562 115.625l.09375.078126c17.660156 15.050781 37.679688 32.113281 58.515625 50.332031 20.960938-18.253907 41.011719-35.34375 58.707031-50.417969 50.511719-43.050781 94.136719-80.222656 123.46875-115.617188 30.34375-36.617187 43.878907-69.1875 43.878907-105.605468 0-34.515625-11.605469-66.109375-32.675781-88.964844-20.757813-22.515625-49.300782-34.914062-80.363282-34.914062-22.757812 0-43.652344 7.234374-62.101562 21.5-16.441406 12.71875-27.894532 28.796874-34.609375 40.046874-3.453125 5.785157-9.53125 9.238282-16.261719 9.238282s-12.808594-3.453125-16.261719-9.238282c-6.710937-11.25-18.164062-27.328124-34.609375-40.046874-18.449218-14.265626-39.34375-21.5-62.097656-21.5zm0 0" fill="#0D3878"></path>
                                        </svg>

                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -28 512.00002 512" height="22" width="22">
                                            <path d="m471.382812 44.578125c-26.503906-28.746094-62.871093-44.578125-102.410156-44.578125-29.554687 0-56.621094 9.34375-80.449218 27.769531-12.023438 9.300781-22.917969 20.679688-32.523438 33.960938-9.601562-13.277344-20.5-24.660157-32.527344-33.960938-23.824218-18.425781-50.890625-27.769531-80.445312-27.769531-39.539063 0-75.910156 15.832031-102.414063 44.578125-26.1875 28.410156-40.613281 67.222656-40.613281 109.292969 0 43.300781 16.136719 82.9375 50.78125 124.742187 30.992188 37.394531 75.535156 75.355469 127.117188 119.3125 17.613281 15.011719 37.578124 32.027344 58.308593 50.152344 5.476563 4.796875 12.503907 7.4375 19.792969 7.4375 7.285156 0 14.316406-2.640625 19.785156-7.429687 20.730469-18.128907 40.707032-35.152344 58.328125-50.171876 51.574219-43.949218 96.117188-81.90625 127.109375-119.304687 34.644532-41.800781 50.777344-81.4375 50.777344-124.742187 0-42.066407-14.425781-80.878907-40.617188-109.289063zm0 0" fill="#f5597c"></path>
                                        </svg>
                                    </button>
                                </div>
                                <div class="dFlex vm_fx tc_fx mtB tc mt0_m">
                                    <div class="mr15 ml15">
                                        <span target="_blank" class="buildLink cp">
                                            <span class="icon i_print_b mr10"></span>Imprimir
                                        </span>
                                    </div>
                                    <div class="mr15 ml15">
                                        <span class="icon i_report_b mr10"></span><span class="cp">Denunciar empleo</span>
                                    </div>
                                    <div class="mr15 ml15">
                                        <span class="icon i_alert_b mr10"></span><span class="cp" data-create-alert="splitgriddetail-downapplybutton">Recibir ofertas similares</span>
                                    </div>
                                </div>
                            </div>

                            <div class="ptB bt1 mtB">


                                <p class="fs18 mb20 fwB">Acerca de&nbsp;COESTI S.A.</p>
                                <div class="dFlex vm_fx mb10">
                                    <div>
                                        <a href="#" target="_blank">
                                            <img src="https://ii.ct-stc.com/3/logos/empresas/2020/12/03/1ced6c4ba6e14179bcab181136832thumbnail.png" alt="COESTI S.A. logo">
                                        </a>
                                    </div>
                                    <div id="it-followbtn" class="mlAuto mt5">

                                        <div>
                                            <button class="b_primary_inv tiny wAuto" title="Click aquí para seguir a COESTI S.A.">
                                                + Seguir
                                            </button>
                                        </div>
                                        <span class="b_primary_inv tiny wAuto cp hide">
                                            Volver a enviar
                                        </span>
                                        <div class="hide">
                                            <button class="b_primary_inv tiny wAuto">
                                                Dejar de seguir
                                            </button>
                                        </div>


                                    </div>

                                </div>
                                <p>
                                    Nacimos con una clara orientación de satisfacer las necesidades de cada uno de los miles de clientes que atendemos día a día, llegando a ellos a través de nuestras Estaciones de Servicio a nivel nacional.<br>
                                </p>

                            </div>
                            <div class="ptB bt1 mtB">

                                <div class="mb40">
                                    <p class="fs18 mb20 fwB">Evaluación general</p>
                                    <div class="cols full_d tLayoutFix mbB">
                                        <div>
                                            <div class="dFlex vm_fx">
                                                <div class="pr10 mbB_m">
                                                    <p class="fs50 fwB lh1 tc">4,05</p>
                                                    <span class="stars">
                                                        <span style="width:81.00001%"></span>
                                                    </span>
                                                    <p class="fc_aux mt5 fs16">113&nbsp;Evaluaciones</p>
                                                </div>
                                                <ul class="graphic_bar w100 plB prB pAll0_m mbB_m">

                                                    <li class="cols mt10 mb10">
                                                        <div class="w1 pr15 fs11">5</div>
                                                        <div class="w100" '="">
		                <span class="bar small w100_m">
			                <span class="bg_5" '="" style="width:80%"></span>
                                                            <p class="result fs11 fc_aux">39%</p>
                                                            </span>
                                                        </div>
                                                    </li>

                                                    <li class="cols mt10 mb10">
                                                        <div class="w1 pr15 fs11">4</div>
                                                        <div class="w100" '="">
		                <span class="bar small w100_m">
			                <span class="bg_4" '="" style="width:76%"></span>
                                                            <p class="result fs11 fc_aux">37%</p>
                                                            </span>
                                                        </div>
                                                    </li>

                                                    <li class="cols mt10 mb10">
                                                        <div class="w1 pr15 fs11">3</div>
                                                        <div class="w100" '="">
		                <span class="bar small w100_m">
			                <span class="bg_3" '="" style="width:39%"></span>
                                                            <p class="result fs11 fc_aux">19%</p>
                                                            </span>
                                                        </div>
                                                    </li>

                                                    <li class="cols mt10 mb10">
                                                        <div class="w1 pr15 fs11">2</div>
                                                        <div class="w100" '="">
		                <span class="bar small w100_m">
			                <span class="bg_2" '="" style="width:6%"></span>
                                                            <p class="result fs11 fc_aux">3%</p>
                                                            </span>
                                                        </div>
                                                    </li>

                                                    <li class="cols mt10 mb10">
                                                        <div class="w1 pr15 fs11">1</div>
                                                        <div class="w100" '="">
		                <span class="bar small w100_m">
			                <span class="bg_1" '="" style="width:4%"></span>
                                                            <p class="result fs11 fc_aux">2%</p>
                                                            </span>
                                                        </div>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                        <div>
                                            <ul class="cols tLayoutFix mt15 tc">
                                                <li class="pl10 pr10 vt mbB_m">
                                                    <div class="posRel">

                                                        <div style="height:80px" class="graf_pie">
                                                            <div class="chartjs-size-monitor" style="position: absolute; inset: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;">
                                                                <div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                                                                    <div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div>
                                                                </div>
                                                                <div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                                                                    <div style="position:absolute;width:200%;height:200%;left:0; top:0"></div>
                                                                </div>
                                                            </div>
                                                            <div class="chartjs-size-monitor" style="position: absolute; inset: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;">
                                                                <div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                                                                    <div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div>
                                                                </div>
                                                                <div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                                                                    <div style="position:absolute;width:200%;height:200%;left:0; top:0"></div>
                                                                </div>
                                                            </div>
                                                            <div class="chartjs-size-monitor" style="position: absolute; inset: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;">
                                                                <div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                                                                    <div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div>
                                                                </div>
                                                                <div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                                                                    <div style="position:absolute;width:200%;height:200%;left:0; top:0"></div>
                                                                </div>
                                                            </div>
                                                            <input type="hidden" class="canvas_data" value="{
  &quot;sourceArray&quot;: [
    79.2,
    20.8
  ]
}">
                                                            <div class="chartjs-size-monitor" style="position: absolute; inset: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;">
                                                                <div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                                                                    <div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0">
                                                                    </div>
                                                                </div>
                                                                <div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                                                                    <div style="position:absolute;width:200%;height:200%;left:0; top:0">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <canvas width="66" height="80" style="display: block; width: 66px; height: 80px;" class="chartjs-render-monitor canvas_visual"></canvas>
                                                        </div>

                                                        <div class="info_donut fs18 fwB half">3,96</div>
                                                    </div>
                                                    <p class="fc_aux fs13 lh1_2">Ambiente de trabajo</p>
                                                </li>
                                                <li class="pl10 pr10 vt mbB_m">
                                                    <div class="posRel">

                                                        <div style="height:80px" class="graf_pie">
                                                            <div class="chartjs-size-monitor" style="position: absolute; inset: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;">
                                                                <div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                                                                    <div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div>
                                                                </div>
                                                                <div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                                                                    <div style="position:absolute;width:200%;height:200%;left:0; top:0"></div>
                                                                </div>
                                                            </div>
                                                            <div class="chartjs-size-monitor" style="position: absolute; inset: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;">
                                                                <div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                                                                    <div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div>
                                                                </div>
                                                                <div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                                                                    <div style="position:absolute;width:200%;height:200%;left:0; top:0"></div>
                                                                </div>
                                                            </div>
                                                            <div class="chartjs-size-monitor" style="position: absolute; inset: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;">
                                                                <div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                                                                    <div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div>
                                                                </div>
                                                                <div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                                                                    <div style="position:absolute;width:200%;height:200%;left:0; top:0"></div>
                                                                </div>
                                                            </div>
                                                            <input type="hidden" class="canvas_data" value="{
  &quot;sourceArray&quot;: [
    75.4,
    24.6
  ]
}">
                                                            <div class="chartjs-size-monitor" style="position: absolute; inset: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;">
                                                                <div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                                                                    <div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0">
                                                                    </div>
                                                                </div>
                                                                <div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                                                                    <div style="position:absolute;width:200%;height:200%;left:0; top:0">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <canvas width="66" height="80" style="display: block; width: 66px; height: 80px;" class="chartjs-render-monitor canvas_visual"></canvas>
                                                        </div>

                                                        <div class="info_donut fs18 fwB half">3,77</div>
                                                    </div>
                                                    <p class="fc_aux fs13 lh1_2">Salario y prestaciones</p>
                                                </li>
                                                <li class="pl10 pr10 vt mbB_m">
                                                    <div class="posRel">

                                                        <div style="height:80px" class="graf_pie">
                                                            <div class="chartjs-size-monitor" style="position: absolute; inset: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;">
                                                                <div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                                                                    <div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div>
                                                                </div>
                                                                <div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                                                                    <div style="position:absolute;width:200%;height:200%;left:0; top:0"></div>
                                                                </div>
                                                            </div>
                                                            <div class="chartjs-size-monitor" style="position: absolute; inset: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;">
                                                                <div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                                                                    <div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div>
                                                                </div>
                                                                <div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                                                                    <div style="position:absolute;width:200%;height:200%;left:0; top:0"></div>
                                                                </div>
                                                            </div>
                                                            <div class="chartjs-size-monitor" style="position: absolute; inset: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;">
                                                                <div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                                                                    <div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div>
                                                                </div>
                                                                <div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                                                                    <div style="position:absolute;width:200%;height:200%;left:0; top:0"></div>
                                                                </div>
                                                            </div>
                                                            <input type="hidden" class="canvas_data" value="{
  &quot;sourceArray&quot;: [
    72.2,
    27.8
  ]
}">
                                                            <div class="chartjs-size-monitor" style="position: absolute; inset: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;">
                                                                <div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                                                                    <div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0">
                                                                    </div>
                                                                </div>
                                                                <div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                                                                    <div style="position:absolute;width:200%;height:200%;left:0; top:0">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <canvas width="66" height="80" style="display: block; width: 66px; height: 80px;" class="chartjs-render-monitor canvas_visual"></canvas>
                                                        </div>

                                                        <div class="info_donut fs18 fwB half">3,61</div>
                                                    </div>
                                                    <p class="fc_aux fs13 lh1_2">Oportunidades de carrera</p>
                                                </li>
                                                <li class="pl10 pr10 vt mbB_m">
                                                    <div class="posRel">

                                                        <div style="height:80px" class="graf_pie">
                                                            <div class="chartjs-size-monitor" style="position: absolute; inset: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;">
                                                                <div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                                                                    <div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div>
                                                                </div>
                                                                <div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                                                                    <div style="position:absolute;width:200%;height:200%;left:0; top:0"></div>
                                                                </div>
                                                            </div>
                                                            <div class="chartjs-size-monitor" style="position: absolute; inset: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;">
                                                                <div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                                                                    <div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div>
                                                                </div>
                                                                <div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                                                                    <div style="position:absolute;width:200%;height:200%;left:0; top:0"></div>
                                                                </div>
                                                            </div>
                                                            <div class="chartjs-size-monitor" style="position: absolute; inset: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;">
                                                                <div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                                                                    <div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div>
                                                                </div>
                                                                <div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                                                                    <div style="position:absolute;width:200%;height:200%;left:0; top:0"></div>
                                                                </div>
                                                            </div>
                                                            <input type="hidden" class="canvas_data" value="{
  &quot;sourceArray&quot;: [
    74.8,
    25.2
  ]
}">
                                                            <div class="chartjs-size-monitor" style="position: absolute; inset: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;">
                                                                <div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                                                                    <div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0">
                                                                    </div>
                                                                </div>
                                                                <div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                                                                    <div style="position:absolute;width:200%;height:200%;left:0; top:0">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <canvas width="66" height="80" style="display: block; width: 66px; height: 80px;" class="chartjs-render-monitor canvas_visual"></canvas>
                                                        </div>

                                                        <div class="info_donut fs18 fwB half">3,74</div>
                                                    </div>
                                                    <p class="fc_aux fs13 lh1_2">Director general</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <span class="tag bg_info big fs18 w100_m mtB_m tc"><strong>93%</strong> profesionales&nbsp;recomiendan trabajar aquí</span>
                                </div>


                                <div class="mb40">
                                    <div class="pt10 pb10 mbB">
                                        <p class="fs18">
                                            <span class="stars">
                                                <span style="width:80%;"></span>
                                            </span>

                                            <span class="fwB ml10">Cajero retailer </span>
                                        </p>
                                        <p class="list_dot fc_aux mb10">
                                            <span>Actual empleado</span>
                                            <span>Lima</span>
                                            <span>Octubre, 2022</span>
                                        </p>
                                        <p class="mb10">Me parece una empresa bien organizada. Creo que ella busca el bienestar de trabajador aun que no se logra del todo a causa de sus mismos colaboradores. El sistema es bueno, son los colaboradores los que fallan. Pero en general me parece una empresa justa que entre otras cosas cuida a sus colaboradores.</p>

                                        <p class="mb10">
                                            <strong class="fc_aux mr5">Lo mejor</strong>
                                            <span>Su organización</span>
                                        </p>

                                        <p class="fc_ok"><span class="icon i_like mr10 vb"></span>Recomienda trabajar aquí</p>


                                    </div>
                                    <div class="pt10 pb10 mbB">
                                        <p class="fs18">
                                            <span class="stars">
                                                <span style="width:40%;"></span>
                                            </span>

                                            <span class="fwB ml10">Cajera en tienda listo , COESTI</span>
                                        </p>
                                        <p class="list_dot fc_aux mb10">
                                            <span>Actual empleado</span>
                                            <span>La Libertad</span>
                                            <span>Octubre, 2022</span>
                                        </p>
                                        <p class="mb10">Buena empresa con un excelente atención al cliente .</p>
                                        <p class="fc_ok"><span class="icon i_like mr10 vb"></span>Recomienda trabajar aquí</p>


                                    </div>
                                    <div class="pt10 pb10 mbB">
                                        <p class="fs18">
                                            <span class="stars">
                                                <span style="width:100%;"></span>
                                            </span>

                                            <span class="fwB ml10">Encargado</span>
                                        </p>
                                        <p class="list_dot fc_aux mb10">
                                            <span>Antiguo empleado</span>
                                            <span>Lima</span>
                                            <span>Septiembre, 2022</span>
                                        </p>
                                        <p class="mb10">Es una empresa muy buena , excelente un lugar cálido y de familia . Buena</p>

                                        <p class="mb10">
                                            <strong class="fc_aux mr5">Lo mejor</strong>
                                            <span>El trabajo en equipo</span>
                                        </p>
                                        <p class="mb10">
                                            <strong class="fc_aux mr5">A mejorar</strong>
                                            <span>Que dieran refrigerio a los trabajadores.</span>
                                        </p>

                                        <p class="fc_ok"><span class="icon i_like mr10 vb"></span>Recomienda trabajar aquí</p>
                                    </div>

                                    <a class="b_primary_inv mtB" href="#" title="Mostrar las 113 evaluaciones" target="_blank">Mostrar las 113 evaluaciones</a>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div class="box_detail animating hide">
                        <div class="box_animating mt20" style="width: 55%; height: 15px;">
                            <div class="bg_animating"></div>
                        </div>
                        <div class="box_animating mt10" style="width: 15%; height: 15px;">
                            <div class="bg_animating"></div>
                        </div>
                        <div class="box_animating mt10" style="width: 35%; height: 15px;">
                            <div class="bg_animating"></div>
                        </div>
                        <div class="box_animating mt10" style="width: 80%; height: 20px;">
                            <div class="bg_animating"></div>
                        </div>
                        <div class="box_animating mt10" style="width: 80%; height: 20px;">
                            <div class="bg_animating"></div>
                        </div>
                        <div class="box_animating mt10" style="width: 60%; height: 15px;">
                            <div class="bg_animating"></div>
                        </div>
                        <div class="box_animating mt10" style="width: 60%; height: 15px;">
                            <div class="bg_animating"></div>
                        </div>
                        <div class="box_animating mt10" style="width: 55%; height: 15px;">
                            <div class="bg_animating"></div>
                        </div>
                        <div class="box_animating mt10" style="width: 40%; height: 15px;">
                            <div class="bg_animating"></div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </main>

    <!-- Jquery-->
    <script src="{{asset('vendors/jquery/jquery.js') }}"></script>
    <!-- Funcionalidades-->
    <script src="{{asset('js/app.js') }}"></script>
    <!-- Librerias-->
    <script src="{{asset('vendors/commons/charts.js')}}"></script>
    <script src="{{asset('vendors/commons/searchbox.js')}}"></script>
</body>

</html>
