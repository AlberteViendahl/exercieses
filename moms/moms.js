/* Lav en funktion der modtager to argumenter, beloeb og moms. Funktionen skal console.logge beløbet med momsen lagt til. (moms er i procent)
Lav moms som et default parameter sat til 25. */

/* Her har jeg sat den default til 25 */
const momss = 25;

/* Kalder på funktionen */
showBeloeb (300)

function showBeloeb (beloeb , moms = momss) {
const beloebMedmoms = beloeb + (beloeb * moms / 100);
console.log("Beløbet bliver " + beloebMedmoms);
}



