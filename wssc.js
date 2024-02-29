console.info("Javascript Loaded");

if(jQuery("#attach .v-toolbar__content .hidden-sm-and-down")[0]) {
	console.log("its there");
	
	let div = document.createElement("div");
	div.className="v-btn__content";
	div.append( document.createTextNode("Lessons"))
    let lessonA = document.createElement("a");
    lessonA.href="/programs/swim-lessons-signup/";
    lessonA.className="font-weight-medium v-btn v-btn--flat v-btn--router theme--light";
    lessonA.append(div);
    jQuery("#attach .v-toolbar__content .hidden-sm-and-down")[0].append(lessonA);
}
