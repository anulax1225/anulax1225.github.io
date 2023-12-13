$(document).ready(() => {
    $(document).on("click", ".btn-cancel", () => {
        $("body").children(".modal").remove();
    });

    init_btn_modal("#info-cpne", "/assets/pdf/Notes_detaillees_de_Vinayak_Ambigapathy.pdf");
    init_btn_modal("#info-ecole-obligatoire", "/assets/pdf/Attestation_au_terme_de_la_scolarité_obligatoire_de_Vinayak_Ambigapathy.pdf");
    init_section_slide_down('#form-acad', 300, 1000);
    init_section_slide_down('#exp-pro', 140, 1000);
    init_section_slide_down("#projet", 210, 1000);
    init_section_slide_down("#langues", 30, 500);
    init_section_slide_down("#hobbies", 50, 500);
});

function init_btn_modal(tag_id, path) {
    $(tag_id).on("click", () => {
        $("body").prepend(`
        <div class="modal">
            <button class="btn-cancel"><img src="assets/img/cross.png"></button>
            <object data="${path}" type="application/pdf">
                <p>Impossible d'ouvrir le fichier. Télécharger le  <a href="${path}">ici</a> plutot.</p>
            </object>
        </div>
        `);
    });
}

function init_section_slide_down(tag_id, height, time) {
    $(`${tag_id}`).on('click', (e) => {
        if ($(e.target).attr("data-state") === "off") {
            let cont = $(e.target).parent().children(".c-anim");
            cont.css({display: "block"})
            cont.animate({height: `${height}px`}, time);
            $(e.target).attr({ "data-state": "on" });
        } else {
            let cont = $(e.target).parent().children(".c-anim");
            cont.animate({height: "0px"}, time);
            setTimeout(() => {
                cont.css({display: "none"})
            }, time - 200);
            $(e.target).attr({ "data-state": "off" });
        }
    });
}
