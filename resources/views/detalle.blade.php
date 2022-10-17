<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Detalle</title>

    <!-- Fonts -->
    <link href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

    <!-- Added-->
    <link rel="stylesheet" href="{{ asset('css/views/detalle.css') }}" />
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
    <div id="partial-popup-access"></div>
    <main class="detail_fs" id="container">

        <span itemtype="http://schema.org/JobPosting">
            <meta itemprop="title" content="Despacho de Combustible - Ica">
            <meta itemprop="description" content="Es tu oportunidad!<br/>Si quieres pertenecer al Grupo Primax y formar parte de un equipo lleno de energía y pasión te invitamos a postular a la posición de DESPACHO DE COMBUSTIBLE para que cumplas las siguientes funciones:<br/><br/>Funciones:<br/>- Atención al clientes de manera oportuna en despachando combustible.<br/>- Controlar los vouchers, vales y efectivo de las ventas de los dispensadores que le son asignados.<br/>- Realizar el reporte de ventas al término del turno (Cuadre de caja).<br/>- Cumplir con las normas de seguridad y salud en el trabajo.<br/>- Mantener la EESS limpia y ordenada.<br/><br/>Requisitos:<br/>- Secundaria Completa.<br/>- Experiencia en atención al cliente (deseable)<br/>- Manejo de caja (deseable)<br/>- Disponibilidad para laborar en turno tarde  (3:00 pm - 11:00 pm)<br/>- Disponibilidad para laborar en Av. Los Maestros - Ica<br/><br/>Beneficios:<br/>- Ingreso a planilla.<br/>- Comisiones por ventas<br/>- Beneficios acorde a ley.<br/>- Asignación familiar.<br/>-Requerimientos- Educación mínima: Educación Secundaria<br/>Disponibilidad de viajar: No<br/>Disponibilidad de cambio de residencia: No<br/>">
            <meta itemprop="image" content="https://ii.ct-stc.com/3/logos/empresas/2020/12/03/1ced6c4ba6e14179bcab181136832thumbnail.png">
            <meta itemprop="industry" content="Venta al consumidor">
            <meta itemprop="datePosted" content="2022-10-01">
            <meta itemprop="employmentType" content="FULL_TIME"><span itemprop="jobLocation" itemscope="" itemtype="http://schema.org/Place"><span itemprop="address" itemscope="" itemtype="http://schema.org/PostalAddress">
                    <meta itemprop="addressLocality" content="Ica">
                    <meta itemprop="addressRegion" content="Ica">
                    <meta itemprop="addressCountry" content="Perú">
                </span></span><span itemprop="hiringOrganization" itemscope="" itemtype="http://schema.org/Organization">
                <meta itemprop="name" content="COESTI S.A.">
            </span><span itemprop="identifier" itemscope="" itemtype="http://schema.org/PropertyValue">
                <meta itemprop="value" content="32FD4DEAFBD2966061373E686DCF3405">
            </span>
            <meta itemprop="url" content="https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-despacho-de-combustible-ica-en-ica-32FD4DEAFBD2966061373E686DCF3405">
        </span>

        <div class="container">
            <div class="dFlex vm_fx mbB">
                <div id="back_to_list" class="pag_back hide_m">
                    <a class="box_border" href="/">
                        <span class="icon i_back mr5"></span>
                        <span class="dIB fc_base">Volver al listado</span>
                    </a>
                </div>


            </div>
            <h1 class="fwB fs24 mb5 box_detail w100_m">Despacho de Combustible - Ica</h1>
            <p class="fs16">COESTI S.A. - Ica, Ica</p>
        </div>
        <div class="box_border menu_top dFlex">
            <div class="container">
                <div class="box_sticky">

                </div>
                <div class="box_detail fl w100_m">
                    <div class="menu_switch posSticky top0 pl0 pr0 w100">
                        <nav>
                            <a class="sel" href="#oferta" id="oferta_i">Oferta</a>
                            <a class="hide_d" href="#empresa" id="empresa_i">Empresa</a>
                            <a class="hide_d" href="#evaluaciones" id="evaluaciones_i">Evaluaciones</a>
                            <a class="hide_d" href="#similares" id="similares_i">Ofertas similares</a>
                        </nav>
                    </div>
                    <section id="oferta"></section>
                    <div class="mb40 pb40 bb1">

                        <h3 class="fwB fs18 mb20">Descripción de la oferta</h3>
                        <div class="mbB">
                            <span class="tag base mb10">Contrato a Plazo Indeterminado</span>
                            <span class="tag base mb10">Tiempo completo</span>
                        </div>
                        <p class="mbB">Es tu oportunidad!<br><br>Si quieres pertenecer al Grupo Primax y formar parte de un equipo lleno de energía y pasión te invitamos a postular a la posición de DESPACHO DE COMBUSTIBLE para que cumplas las siguientes funciones:<br><br>Funciones:<br><br>- Atención al clientes de manera oportuna en despachando combustible.<br><br>- Controlar los vouchers, vales y efectivo de las ventas de los dispensadores que le son asignados.<br><br>- Realizar el reporte de ventas al término del turno (Cuadre de caja).<br><br>- Cumplir con las normas de seguridad y salud en el trabajo.<br><br>- Mantener la EESS limpia y ordenada.<br><br>Requisitos:<br><br>- Secundaria Completa.<br><br>- Experiencia en atención al cliente (deseable)<br><br>- Manejo de caja (deseable)<br><br>- Disponibilidad para laborar en turno tarde (3:00 pm - 11:00 pm)<br><br>- Disponibilidad para laborar en Av. Los Maestros - Ica<br><br>Beneficios:<br><br>- Ingreso a planilla.<br><br>- Comisiones por ventas<br><br>- Beneficios acorde a ley.<br><br>- Asignación familiar.<br></p>

                        <p class="fwB fs18 mtB mb10">Requerimientos</p>
                        <ul class="disc mbB">
                            <li class="mb10">Educación mínima: Educación Secundaria</li>
                            <li class="mb10">Disponibilidad de viajar: No</li>
                            <li class="mb10">Disponibilidad de cambio de residencia: No</li>
                        </ul>

                        <p class="fc_aux fs13">Hace 34 minutos (actualizada)</p>
                        <div class="posSticky_m bottom0 bg_white pAllB_m mtB">
                            <div class="w40 dFlex tc_fx mAuto w100_m">
                                <a href="#" class="b_primary big w100">Postularme</a>
                                <button class="b_heart ml10 js_click_btn_heart " aria-label="Add favorite">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -28 512.001 512" height="22" width="22">
                                        <path d="m256 455.515625c-7.289062 0-14.316406-2.640625-19.792969-7.4375-20.683593-18.085937-40.625-35.082031-58.21875-50.074219l-.089843-.078125c-51.582032-43.957031-96.125-81.917969-127.117188-119.3125-34.644531-41.804687-50.78125-81.441406-50.78125-124.742187 0-42.070313 14.425781-80.882813 40.617188-109.292969 26.503906-28.746094 62.871093-44.578125 102.414062-44.578125 29.554688 0 56.621094 9.34375 80.445312 27.769531 12.023438 9.300781 22.921876 20.683594 32.523438 33.960938 9.605469-13.277344 20.5-24.660157 32.527344-33.960938 23.824218-18.425781 50.890625-27.769531 80.445312-27.769531 39.539063 0 75.910156 15.832031 102.414063 44.578125 26.191406 28.410156 40.613281 67.222656 40.613281 109.292969 0 43.300781-16.132812 82.9375-50.777344 124.738281-30.992187 37.398437-75.53125 75.355469-127.105468 119.308594-17.625 15.015625-37.597657 32.039062-58.328126 50.167969-5.472656 4.789062-12.503906 7.429687-19.789062 7.429687zm-112.96875-425.523437c-31.066406 0-59.605469 12.398437-80.367188 34.914062-21.070312 22.855469-32.675781 54.449219-32.675781 88.964844 0 36.417968 13.535157 68.988281 43.882813 105.605468 29.332031 35.394532 72.960937 72.574219 123.476562 115.625l.09375.078126c17.660156 15.050781 37.679688 32.113281 58.515625 50.332031 20.960938-18.253907 41.011719-35.34375 58.707031-50.417969 50.511719-43.050781 94.136719-80.222656 123.46875-115.617188 30.34375-36.617187 43.878907-69.1875 43.878907-105.605468 0-34.515625-11.605469-66.109375-32.675781-88.964844-20.757813-22.515625-49.300782-34.914062-80.363282-34.914062-22.757812 0-43.652344 7.234374-62.101562 21.5-16.441406 12.71875-27.894532 28.796874-34.609375 40.046874-3.453125 5.785157-9.53125 9.238282-16.261719 9.238282s-12.808594-3.453125-16.261719-9.238282c-6.710937-11.25-18.164062-27.328124-34.609375-40.046874-18.449218-14.265626-39.34375-21.5-62.097656-21.5zm0 0" fill="#0D3878"></path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -28 512.00002 512" height="22" width="22">
                                        <path d="m471.382812 44.578125c-26.503906-28.746094-62.871093-44.578125-102.410156-44.578125-29.554687 0-56.621094 9.34375-80.449218 27.769531-12.023438 9.300781-22.917969 20.679688-32.523438 33.960938-9.601562-13.277344-20.5-24.660157-32.527344-33.960938-23.824218-18.425781-50.890625-27.769531-80.445312-27.769531-39.539063 0-75.910156 15.832031-102.414063 44.578125-26.1875 28.410156-40.613281 67.222656-40.613281 109.292969 0 43.300781 16.136719 82.9375 50.78125 124.742187 30.992188 37.394531 75.535156 75.355469 127.117188 119.3125 17.613281 15.011719 37.578124 32.027344 58.308593 50.152344 5.476563 4.796875 12.503907 7.4375 19.792969 7.4375 7.285156 0 14.316406-2.640625 19.785156-7.429687 20.730469-18.128907 40.707032-35.152344 58.328125-50.171876 51.574219-43.949218 96.117188-81.90625 127.109375-119.304687 34.644532-41.800781 50.777344-81.4375 50.777344-124.742187 0-42.066407-14.425781-80.878907-40.617188-109.289063zm0 0" fill="#f5597c"></path>
                                    </svg>
                                </button>

                            </div>
                        </div>

                        <div class="dFlex vm_fx tc_fx mt15 tc mt0_m">
                            <div class="mr15 ml15 posRel">
                                <a data-create-alert="downapplybutton">
                                    <span class="icon i_alert mr5 "></span>
                                    Avísame con ofertas similares
                                </a>
                            </div>
                            <div class="mr15 ml15">
                                <span class="icon i_report"></span>
                                <a title="Denunciar empleo">
                                    Denunciar empleo
                                </a>
                            </div>

                            <section id="empresa"></section>
                        </div>
                    </div>

                    <div class="mt20 mb20 tc">
                        <div class="mb40 tc"></div>
                    </div>


                    <div class="mb40 pb40 bb1">
                        <p class="fs18 mb20 fwB">Acerca de&nbsp;COESTI S.A.</p>
                        <p>
                            Nacimos con una clara orientación de satisfacer las necesidades de cada uno de los miles de clientes que atendemos día a día, llegando a ellos a través de nuestras Estaciones de Servicio a nivel nacional.<br>
                        </p>
                        <section id="evaluaciones"></section>
                    </div>


                    <div>
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
                                                    <canvas width="74" height="80" style="display: block; width: 74px; height: 80px;" class="chartjs-render-monitor canvas_visual"></canvas>
                                                </div>

                                                <div class="info_donut fs18 fwB half">3,96</div>
                                            </div>
                                            <p class="fc_aux fs13 lh1_2">Ambiente de trabajo</p>
                                        </li>
                                        <li class="pl10 pr10 vt mbB_m">
                                            <div class="posRel">

                                                <div style="height:80px" class="graf_pie">
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
                                                    <canvas width="74" height="80" style="display: block; width: 74px; height: 80px;" class="chartjs-render-monitor canvas_visual"></canvas>
                                                </div>

                                                <div class="info_donut fs18 fwB half">3,77</div>
                                            </div>
                                            <p class="fc_aux fs13 lh1_2">Salario y prestaciones</p>
                                        </li>
                                        <li class="pl10 pr10 vt mbB_m">
                                            <div class="posRel">

                                                <div style="height:80px" class="graf_pie">
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
                                                    <canvas width="74" height="80" style="display: block; width: 74px; height: 80px;" class="chartjs-render-monitor canvas_visual"></canvas>
                                                </div>

                                                <div class="info_donut fs18 fwB half">3,61</div>
                                            </div>
                                            <p class="fc_aux fs13 lh1_2">Oportunidades de carrera</p>
                                        </li>
                                        <li class="pl10 pr10 vt mbB_m">
                                            <div class="posRel">

                                                <div style="height:80px" class="graf_pie">
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
                                                    <canvas width="74" height="80" style="display: block; width: 74px; height: 80px;" class="chartjs-render-monitor canvas_visual"></canvas>
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


                        <section id="similares"></section>
                    </div>

                    <div>
                        <p class="fwB fs18 mb20">Ofertas similares</p>
                        <article class="box_border hover dFlex vm_fx mbB cp bClick mB_neg_m mb0_m">
                            <div class="w100">
                                <h1 class="fs18 fwB"><a class="js-o-link fc_base" href="#" title="Empleo de Chinawok Plaza Sol de Ica // Counter // Medio Tiempo // Acercarte y postula">Chinawok Plaza Sol de Ica // Counter // Medio Tiempo // Acercarte y postula</a></h1>
                                <p class="fs16 fc_base mt5 mb10">
                                    <a class="fc_base hover it-blank" href="#">NG Restaurants</a>
                                    - Ica, Ica
                                </p>
                                <p class="fc_aux t_word_wrap mb10 hide_m">Somos NGR, holding gastronómico del Grupo Intercorp, operamos con las marcas: Bembos, Chinawok, Don Belisario, Dunkin...</p>
                                <p class="fs13 fc_aux">Hace 26 minutos</p>
                            </div>
                            <div class="w15 pl15 hide_m">
                                <img class="lazy" data-original="https://ii.ct-stc.com/3/logos/empresas/2022/09/15/087c789c9b6340c9a17e145054926thumbnail.png" title="NG Restaurants">
                            </div>
                        </article>
                        <article class="box_border hover dFlex vm_fx mbB cp bClick mB_neg_m mb0_m">
                            <div class="w100">
                                <h1 class="fs18 fwB"><a class="js-o-link fc_base" href="#" title="Empleo de Despachador de Combustible">Despachador de Combustible</a></h1>
                                <p class="fs16 fc_base mt5 mb10">
                                    <a class="fc_base hover it-blank" href="#">Grupo Copetrol </a>
                                    - Ica, Ica
                                </p>
                                <p class="fc_aux t_word_wrap mb10 hide_m">Grifo Gaspetrol ubicado en Av. Fernando León de Vivero esq /Psje Los Angeles - Ica (Ref. Cementerio viejo Sarak) ...</p>
                                <p class="fs13 fc_aux">Hace 1 hora</p>
                            </div>
                        </article>

                    </div>

                </div>

                <div class="fr pt10 box_resume hide_m">
                    <nav id="pagination1" class="pag_numeric tr_fx mb10"></nav>
                    <div class="box_border">
                        <div class="info_company dFlex vm_fx mb10">

                            <div class="logo_company">
                                <a class="js-o-link" href="#" target="_blank">
                                    <img src="https://ii.ct-stc.com/3/logos/empresas/2020/12/03/1ced6c4ba6e14179bcab181136832thumbnail.png" alt="COESTI S.A. logo">
                                </a>
                            </div>

                            <div class="w100">
                                <a class="dIB fs16 js-o-link" href="#" target="_blank">COESTI S.A.</a>
                                <div class="mb5 mt5 fs16"><span class="star"></span> 4,05</div>
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

                                    <div class="box posAbs right0 z10 mt10 mr30 hide">
                                        <span class="icon i_close"></span>
                                        <div>
                                            <div>
                                                <p class="fs16 tc"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div class="dIB fs13 fc_ok vm mb5">
                            <span class="icon i_verificada mr5"></span>
                            Empresa verificada
                        </div>

                        <p class="fwB fs18">Despacho de Combustible</p>
                        <p class="fs16">Ica, Ica</p>

                        <div class="mt15 mb15">
                        </div>
                        <div class="dFlex">
                            <a class="b_primary big w100">Postularme</a>
                            <button class="b_heart ml10 js_click_btn_heart " aria-label="Add favorite">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -28 512.001 512" height="22" width="22">
                                    <path d="m256 455.515625c-7.289062 0-14.316406-2.640625-19.792969-7.4375-20.683593-18.085937-40.625-35.082031-58.21875-50.074219l-.089843-.078125c-51.582032-43.957031-96.125-81.917969-127.117188-119.3125-34.644531-41.804687-50.78125-81.441406-50.78125-124.742187 0-42.070313 14.425781-80.882813 40.617188-109.292969 26.503906-28.746094 62.871093-44.578125 102.414062-44.578125 29.554688 0 56.621094 9.34375 80.445312 27.769531 12.023438 9.300781 22.921876 20.683594 32.523438 33.960938 9.605469-13.277344 20.5-24.660157 32.527344-33.960938 23.824218-18.425781 50.890625-27.769531 80.445312-27.769531 39.539063 0 75.910156 15.832031 102.414063 44.578125 26.191406 28.410156 40.613281 67.222656 40.613281 109.292969 0 43.300781-16.132812 82.9375-50.777344 124.738281-30.992187 37.398437-75.53125 75.355469-127.105468 119.308594-17.625 15.015625-37.597657 32.039062-58.328126 50.167969-5.472656 4.789062-12.503906 7.429687-19.789062 7.429687zm-112.96875-425.523437c-31.066406 0-59.605469 12.398437-80.367188 34.914062-21.070312 22.855469-32.675781 54.449219-32.675781 88.964844 0 36.417968 13.535157 68.988281 43.882813 105.605468 29.332031 35.394532 72.960937 72.574219 123.476562 115.625l.09375.078126c17.660156 15.050781 37.679688 32.113281 58.515625 50.332031 20.960938-18.253907 41.011719-35.34375 58.707031-50.417969 50.511719-43.050781 94.136719-80.222656 123.46875-115.617188 30.34375-36.617187 43.878907-69.1875 43.878907-105.605468 0-34.515625-11.605469-66.109375-32.675781-88.964844-20.757813-22.515625-49.300782-34.914062-80.363282-34.914062-22.757812 0-43.652344 7.234374-62.101562 21.5-16.441406 12.71875-27.894532 28.796874-34.609375 40.046874-3.453125 5.785157-9.53125 9.238282-16.261719 9.238282s-12.808594-3.453125-16.261719-9.238282c-6.710937-11.25-18.164062-27.328124-34.609375-40.046874-18.449218-14.265626-39.34375-21.5-62.097656-21.5zm0 0" fill="#0D3878"></path>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -28 512.00002 512" height="22" width="22">
                                    <path d="m471.382812 44.578125c-26.503906-28.746094-62.871093-44.578125-102.410156-44.578125-29.554687 0-56.621094 9.34375-80.449218 27.769531-12.023438 9.300781-22.917969 20.679688-32.523438 33.960938-9.601562-13.277344-20.5-24.660157-32.527344-33.960938-23.824218-18.425781-50.890625-27.769531-80.445312-27.769531-39.539063 0-75.910156 15.832031-102.414063 44.578125-26.1875 28.410156-40.613281 67.222656-40.613281 109.292969 0 43.300781 16.136719 82.9375 50.78125 124.742187 30.992188 37.394531 75.535156 75.355469 127.117188 119.3125 17.613281 15.011719 37.578124 32.027344 58.308593 50.152344 5.476563 4.796875 12.503907 7.4375 19.792969 7.4375 7.285156 0 14.316406-2.640625 19.785156-7.429687 20.730469-18.128907 40.707032-35.152344 58.328125-50.171876 51.574219-43.949218 96.117188-81.90625 127.109375-119.304687 34.644532-41.800781 50.777344-81.4375 50.777344-124.742187 0-42.066407-14.425781-80.878907-40.617188-109.289063zm0 0" fill="#f5597c"></path>
                                </svg>
                            </button>

                        </div>
                    </div>

                </div>

                <div class="box_side fr hide_m mtB">

                    <div class="pbB tc lateral_ad"></div>

                    <div class="pAllB">
                        <a class="dB w100 mb15">
                            <span class="icon i_alert mr5 vb"></span>
                            Avísame con ofertas similares
                        </a>
                        <a class="dB w100 mb15">
                            <span class="icon i_report mr5 vb"></span>
                            Denunciar empleo
                        </a>
                        <a class="dB w100 mb15 buildLink" title="Imprimir" target="_blank">
                            <span class="icon i_print mr5 vb"></span>
                            Imprimir
                        </a>

                    </div>
                    <div class="pAllB">
                        <p class="fs18 mb20 fwB">Búsquedas relacionadas</p>
                        <a class="mb10 tag link" href="#" title="Ver todos los avisos en  Ica">
                            <span>Ver todos los avisos en Ica</span>
                        </a>
                        <a class="mb10 tag link" href="#" title="Empleos en Ica">
                            <span>Empleos en Ica</span>
                        </a>
                        <a class="mb10 tag link" href="#" title="Empleos de Atención a clientes">
                            <span>Empleos de Atención a clientes</span>
                        </a>

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
