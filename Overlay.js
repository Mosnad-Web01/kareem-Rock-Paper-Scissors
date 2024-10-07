let overlay = document.getElementById("Overlay")
let rulesCard = document.getElementById("rulecard")
let closeRuleWindowBtn = document.getElementById("Close_btn")
let rulesButton = document.getElementById("rules_btn")


closeRuleWindowBtn.addEventListener("click" , ()=> {
    overlay.style.display = "none"
    rulesCard.style.display = "none"
})

rulesButton.addEventListener("click" , ()=> {
        overlay.style.display = "block"
    rulesCard.style.display = "flex"
})

