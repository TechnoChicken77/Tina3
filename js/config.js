function generateConfig(buttonId) {
    document.getElementById(buttonId).addEventListener("click", function() {
        let warn_action_select = document.getElementById("warn_action")
        var json_obj = {
            "mod_enabled" : document.getElementById("mod_enabled").checked,
            "mod_role" : document.getElementById("mod_role").value,
            "max_warns" : parseInt(document.getElementById("max_warns").value),
            "warn_action" : warn_action_select.options[warn_action_select.selectedIndex].value,
            "warn_action_value" : parseInt(document.getElementById("warn_action_value").value)
        }
        json_string = JSON.stringify(json_obj, null, 0)
        console.log(json_string);

        let notification = new Notification("New configuration is copied to your clipboard")
        notification.close()

        navigator.clipboard.writeText(json_string)
    });
}

function limitRange(input_id, min, max) {
    let input = document.getElementById(input_id)
    input.addEventListener("input", function() {
        let val = parseInt(input.value)
        console.log(val);
        if(val > max) { input.value = max }
        else if(val < min) { input.value = min }
    });
}

limitRange("max_warns", 3, 9)
limitRange("warn_action_value", 1, 30)

generateConfig("generateButton")