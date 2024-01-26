$(document).ready(() => {
    $(document).on("click", ".btn-cancel", () => {
        $("body").children(".modal").remove();
    });
    $('#now').text(format_DD_MM_YYYY_now());
    init_btn_modal("#info-cpne", "assets/pdf/Bulletin_Scolaire_de_Vinayak_Ambigapathy.pdf");
    init_btn_modal("#info-ecole-obligatoire", "assets/pdf/Attestation_au_terme_de_la_scolarité_obligatoire_de_Vinayak_Ambigapathy.pdf");
    init_section_slide_down('#form-acad', 430, 1000);
    init_section_slide_down('#exp-pro', 180, 1000);
    init_section_slide_down("#projet", 280, 1000);
    init_section_slide_down("#langues", 40, 500);
    init_section_slide_down("#hobbies", 50, 500);
});

function format_DD_MM_YYYY_now() {
    let today = new Date();
    let day = today.getDay();
    let mouth = today.getDate();
    if (day < 10) {
        day = "0" + day; 
    }
    if (mouth < 10) {
        mouth = "0" + mouth;
    }

    return  day + '/' + mouth + '/' + today.getFullYear()
}

function init_btn_modal(tag, path) {
    $(tag).on("click", () => {
        $("body").prepend(`
        <div class="modal">
            <button class="btn-cancel"><img src="assets/img/cross.png" alt="photo d'une croix"></button>
            <object data="${path}" type="application/pdf">
                <p>Impossible d'ouvrir le fichier. Télécharger le  <a href="${path}">ici</a> plutot.</p>
            </object>
        </div>
        `);
    });
}

function init_section_slide_down(tag, height, time) {
    toggle_slide_down($(tag), height, time);
    $(`${tag}`).on('click', (e) => {
        toggle_slide_down($(e.target), height, time);
    });
}

function toggle_slide_down(tag, height, time) {
    if (tag.attr("data-state") === "off") {
        let cont = tag.parent().children(".c-anim");
        cont.css({ display: "block" })
        cont.animate({ height: `${height}px` }, time, () => {
		cont.css({height: "100%"});
	});
        tag.attr({ "data-state": "on" });
    } else {
        let cont = tag.parent().children(".c-anim");
        cont.animate({ height: "0px" }, time);
        setTimeout(() => {
            cont.css({ display: "none" })
        }, time - 200);
        tag.attr({ "data-state": "off" });
    }
}
