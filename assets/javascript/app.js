var number = 30;
var $correct = 0;
var $incorrect = 0;
var $noSelect = 0;
var intervalId;


$("#stop").on("click", stop);

$("#start").on("click", run);

function run() {
    $("#start").addClass("hidden");
    $("#timer").removeClass("hidden");
    $("#questions").removeClass("hidden");
    $("#stop").removeClass("hidden");

    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}


function decrement() {


    number--;


    $("#timer").text("Time Remaining: " + number + " seconds");



    if (number === 0) {

        stop();

    }
}

function stop() {
    $("#start").addClass("hidden");
    $("#timer").addClass("hidden");
    $("#questions").addClass("hidden");
    $("#stop").addClass("hidden");
    $("#results").removeClass("hidden");

    clearInterval(intervalId);

    // || customRadioInline3 === true || customRadioInline6 === true || customRadioInline7 === true || customRadioInline10 === true

    if (customRadioInline1.checked === true) {
        $correct++;
        $("#correct").text("Correct Answers: " + $correct)
        console.log("correct " + $correct)
        console.log("incorrect " + $incorrect)
    }
    
    if (customRadioInline2.checked === true) {
        $incorrect++;
        $("#incorrect").text("Incorrect Answers: " + $incorrect)
        console.log("correct " + $correct)
        console.log("incorrect " + $incorrect)
    }
    
    if (customRadioInline3.checked === true) {
        $correct++;
        $("#correct").text("Correct Answers: " + $correct)
        console.log("correct " + $correct)
        console.log("incorrect " + $incorrect)
    }

    if (customRadioInline4.checked === true) {
        $incorrect++;
        $("#incorrect").text("Incorrect Answers: " + $incorrect)
        console.log("correct " + $correct)
        console.log("incorrect " + $incorrect)
    }

    if (customRadioInline5.checked === true) {
        $incorrect++;
        $("#incorrect").text("Incorrect Answers: " + $incorrect)
        console.log("correct " + $correct)
        console.log("incorrect " + $incorrect)
    }

    if (customRadioInline6.checked === true) {
        $correct++;
        $("#correct").text("Correct Answers: " + $correct)
        console.log("correct " + $correct)
        console.log("incorrect " + $incorrect)
    }

    if (customRadioInline7.checked === true) {
        $correct++;
        $("#correct").text("Correct Answers: " + $correct)
        console.log("correct " + $correct)
        console.log("incorrect " + $incorrect)
    }

    if (customRadioInline8.checked === true) {
        $incorrect++;
        $("#incorrect").text("Incorrect Answers: " + $incorrect)
        console.log("correct " + $correct)
        console.log("incorrect " + $incorrect)
    }

    if (customRadioInline9.checked === true) {
        $incorrect++;
        $("#incorrect").text("Incorrect Answers: " + $incorrect)
        console.log("correct " + $correct)
        console.log("incorrect " + $incorrect)
    }

    if (customRadioInline10.checked === true) {
        $correct++;
        $("#correct").text("Correct Answers: " + $correct)
        console.log("correct " + $correct)
        console.log("incorrect " + $incorrect)
    }

    if (customRadioInline1.checked === false && customRadioInline2.checked === false) {
        $noSelect++;
        $("#noSelect").text("Questions not Answered: " + $noSelect)
        console.log("correct " + $correct)
        console.log("incorrect " + $incorrect)
        console.log("no select " + $noSelect)
    }

    if (customRadioInline3.checked === false && customRadioInline4.checked === false) {
        $noSelect++;
        $("#noSelect").text("Questions not Answered: " + $noSelect)
        console.log("correct " + $correct)
        console.log("incorrect " + $incorrect)
        console.log("no select " + $noSelect)
    }

    if (customRadioInline5.checked === false && customRadioInline6.checked === false) {
        $noSelect++;
        $("#noSelect").text("Questions not Answered: " + $noSelect)
        console.log("correct " + $correct)
        console.log("incorrect " + $incorrect)
        console.log("no select " + $noSelect)
    }

    if (customRadioInline7.checked === false && customRadioInline8.checked === false) {
        $noSelect++;
        $("#noSelect").text("Questions not Answered: " + $noSelect)
        console.log("correct " + $correct)
        console.log("incorrect " + $incorrect)
        console.log("no select " + $noSelect)
    }

    if (customRadioInline9.checked === false && customRadioInline10.checked === false) {
        $noSelect++;
        $("#noSelect").text("Questions Not Answered: " + $noSelect)
        console.log("correct " + $correct)
        console.log("incorrect " + $incorrect)
        console.log("no select " + $noSelect)
    }

}