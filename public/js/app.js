let self = this;

$("#open_menu").click(function () {
    if ($("#open_menu").hasClass("i_close")) {
        $("#menu_lateral").addClass("closed_menu");
        $("#open_menu").addClass("i_menu");
        $("#open_menu").removeClass("i_close");
        $("#open_menu").addClass("icon");
    } else {
        $("#menu_lateral").removeClass("closed_menu");
        $("#open_menu").removeClass("i_menu");
        $("#open_menu").addClass("i_close");
        $("#open_menu").removeClass("icon");
    }
});

$("#container").click(function () {
    if ($("#open_menu").hasClass("i_close")) {
        $("#menu_lateral").addClass("closed_menu");
        $("#open_menu").addClass("i_menu");
        $("#open_menu").removeClass("i_close");
        $("#open_menu").addClass("icon");
    }
});

$("#open_menu_responsive").click(function () {
    if ($("#open_menu").hasClass("i_close")) {
        $("#menu_lateral").addClass("closed_menu");
        $("#open_menu").addClass("i_menu");
        $("#open_menu").removeClass("i_close");
        $("#open_menu").addClass("icon");
    } else {
        $("#menu_lateral").removeClass("closed_menu");
        $("#open_menu").removeClass("i_menu");
        $("#open_menu").addClass("i_close");
        $("#open_menu").removeClass("icon");
    }
});

$("#slcOrdenar").click(function () {
    if ($("#slcOrdenar").hasClass("open")) {
        $("#slcOrdenar").removeClass("open");
    } else {
        self.CerrarFiltros();
        $("#slcOrdenar").addClass("open");
    }
});
$("#slcFecha").click(function () {
    if ($("#slcFecha").hasClass("open")) {
        $("#slcFecha").removeClass("open");
    } else {
        self.CerrarFiltros();
        $("#slcFecha").addClass("open");
    }
});
$("#slcCategoria").click(function () {
    if ($("#slcCategoria").hasClass("open")) {
        $("#slcCategoria").removeClass("open");
    } else {
        self.CerrarFiltros();
        $("#slcCategoria").addClass("open");
    }
});

$("#slcRegion").click(function () {
    if ($("#slcRegion").hasClass("open")) {
        $("#slcRegion").removeClass("open");
    } else {
        self.CerrarFiltros();
        $("#slcRegion").addClass("open");
    }
});
$("#slcDistrito").click(function () {
    if ($("#slcDistrito").hasClass("open")) {
        $("#slcDistrito").removeClass("open");
    } else {
        self.CerrarFiltros();
        $("#slcDistrito").addClass("open");
    }
});

$("#slcExperiencia").click(function () {
    if ($("#slcExperiencia").hasClass("open")) {
        $("#slcExperiencia").removeClass("open");
    } else {
        self.CerrarFiltros();
        $("#slcExperiencia").addClass("open");
    }
});

$("#slcSalario").click(function () {
    if ($("#slcSalario").hasClass("open")) {
        $("#slcSalario").removeClass("open");
    } else {
        self.CerrarFiltros();
        $("#slcSalario").addClass("open");
    }
});
$("#slcJornada").click(function () {
    if ($("#slcJornada").hasClass("open")) {
        $("#slcJornada").removeClass("open");
    } else {
        self.CerrarFiltros();
        $("#slcJornada").addClass("open");
    }
});
$("#slcContrato").click(function () {
    if ($("#slcContrato").hasClass("open")) {
        $("#slcContrato").removeClass("open");
    } else {
        self.CerrarFiltros();
        $("#slcContrato").addClass("open");
    }
});

$("#slcDiscapacidad").click(function () {
    if ($("#slcDiscapacidad").hasClass("open")) {
        $("#slcDiscapacidad").removeClass("open");
    } else {
        self.CerrarFiltros();
        $("#slcDiscapacidad").addClass("open");
    }
});
function CerrarFiltros() {
    if ($("#slcOrdenar").hasClass("open")) {
        $("#slcOrdenar").removeClass("open");
    }

    if ($("#slcFecha").hasClass("open")) {
        $("#slcFecha").removeClass("open");
    }

    if ($("#slcCategoria").hasClass("open")) {
        $("#slcCategoria").removeClass("open");
    }

    if ($("#slcRegion").hasClass("open")) {
        $("#slcRegion").removeClass("open");
    }

    if ($("#slcDistrito").hasClass("open")) {
        $("#slcDistrito").removeClass("open");
    }

    if ($("#slcExperiencia").hasClass("open")) {
        $("#slcExperiencia").removeClass("open");
    }

    if ($("#slcSalario").hasClass("open")) {
        $("#slcSalario").removeClass("open");
    }

    if ($("#slcJornada").hasClass("open")) {
        $("#slcJornada").removeClass("open");
    }

    if ($("#slcContrato").hasClass("open")) {
        $("#slcContrato").removeClass("open");
    }

    if ($("#slcDiscapacidad").hasClass("open")) {
        $("#slcDiscapacidad").removeClass("open");
    }
}

$("#options_1").click(function () {
    if ($("#list_1").hasClass("show")) {
        $("#list_1").removeClass("show");
    } else {
        $("#list_1").addClass("show");
    }
});
$("#options_2").click(function () {
    if ($("#list_2").hasClass("show")) {
        $("#list_2").removeClass("show");
    } else {
        $("#list_2").addClass("show");
    }
});

$("#more_1").click(function () {
    if ($("#more_list_1").hasClass("show")) {
        $("#more_list_1").removeClass("show");
    } else {
        $("#more_list_1").addClass("show");
    }
});

$(document).ready(function () {
    // Add smooth scrolling to all links
    $("#oferta_i").on("click", function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top,
                },
                800,
                function () {
                    window.location.hash = hash;
                }
            );

            self.Deseleccionar();
            $("#oferta_i").addClass("sel");
        }
    });
    $("#empresa_i").on("click", function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top,
                },
                800,
                function () {
                    window.location.hash = hash;
                }
            );
            self.Deseleccionar();
            $("#empresa_i").addClass("sel");
        }
    });
    $("#evaluaciones_i").on("click", function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top,
                },
                800,
                function () {
                    window.location.hash = hash;
                }
            );
        }
        self.Deseleccionar();
        $("#evaluaciones_i").addClass("sel");
    });
    $("#similares_i").on("click", function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top,
                },
                800,
                function () {
                    window.location.hash = hash;
                }
            );
        }
        self.Deseleccionar();
        $("#similares_i").addClass("sel");
    });
});

function Deseleccionar() {
    $("#oferta_i").removeClass("sel");
    $("#empresa_i").removeClass("sel");
    $("#evaluaciones_i").removeClass("sel");
    $("#salarios_i").removeClass("sel");
    $("#similares_i").removeClass("sel");
}
