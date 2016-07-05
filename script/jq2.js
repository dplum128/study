$(function () {
    var $message = $("#message");
    var $yesbtn = $("#yesbtn");
    var $nobtn = $("#nobtn");
    var $scene = $("#scene");
    var currentScene = 1;

    function makeDecision(decision) {
        if (currentScene === 1) {
            currentScene = 2;
        } else if (currentScene === 2) {
            currentScene = (decision === 1 ? 8 : 3);
        } else if (currentScene === 3) {
            currentScene = (decision === 1 ? 4 : 5);
        } else if (currentScene === 5) {
            currentScene = (decision === 1 ? 6 : 7);
        } else if (currentScene === 8) {
            currentScene = (decision === 1 ? 9 : 10);
        }
        renderScreen();
    }

    function renderScreen() {
        if (currentScene === 1) {
            $message.text("Click '乾啦!' to understand.");
            $yesbtn.text("乾啦!");
            $nobtn.hide();
        } else {
            $message.text("Please choose 1 or 2.");
            $yesbtn.text("1");
            $nobtn.text("2");
            $nobtn.show();
        }
        var url = "images/jq2/" + currentScene + ".jpg";
        $scene.attr("src", url);
    }

    $yesbtn.click(function () {
        makeDecision(1);
    });

    $nobtn.click(function () {
        makeDecision(2);
    });

    renderScreen();

});
