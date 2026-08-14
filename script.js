const form = document.getElementById("rapport-form");
const confirmation = document.getElementById("confirmation");
const fichePreview = document.getElementById("fiche-preview");
const ficheDownload = document.getElementById("fiche-download");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    confirmation.classList.remove("show");
    return;
  }

  confirmation.classList.add("show");
  confirmation.scrollIntoView({ behavior: "smooth", block: "center" });

  generateFiche(
    form.grade.value,
    form.matricule.value,
    form.regiment.value,
    form.date_visite.value,
    form.genre.value,
    form.poids.value,
    form.taille.value,
    form.acuite_gauche.value,
    form.acuite_droite.value,
    form.soin_oeil_type.value,
    form.soin_oeil_cote.value,
    form.amygdales.value,
    form.ganglions.value,
    form.soin_buccal.value,
    form.reflex_gauche.value,
    form.reflex_droite.value,
    form.pression.value,
    form.frequence_cardiaque.value,
    form.matricule_medecin.value,
    form.regiment_medecin.value,
    form.grade_medecin.value,
    form.acuite_auditive_gauche.value,
    form.acuite_auditive_droite.value,
    form.soin_tympan_type.value,
    form.soin_tympan_cote.value
  ).then(function (canvas) {
    var dataUrl = canvas.toDataURL("image/png");
    fichePreview.src = dataUrl;
    fichePreview.hidden = false;
    ficheDownload.href = dataUrl;
    ficheDownload.hidden = false;
  });
});
