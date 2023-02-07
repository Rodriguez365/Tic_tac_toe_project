const choose_mode = function() {
    const choose_mode = document.querySelector("#choose_mode")
    const choose_mode_div = document.createElement("div")
    const choose_mode_text = document.createElement("h3")
    choose_mode_text.textContent = "Please Choose Game Mode"
    const two_players_mode = document.createElement("button")
    two_players_mode.textContent = "two players"
    const single_player_mode = document.createElement("button")
    single_player_mode.textContent = "Man Vs Computer"
    choose_mode.appendChild(choose_mode_div)
    choose_mode_div.appendChild(choose_mode_text)
    choose_mode_div.appendChild(two_players_mode)
    choose_mode_div.appendChild(single_player_mode)

    const selected = function() {
        const select_mode = document.createElement("button")
        select_mode.textContent = "Okay"
        choose_mode_div.appendChild(select_mode)

        select_mode.addEventListener("click", () => {
            if (player_mode_select === "two players") {
                playMode.twoplayers()
                choose_mode.removeChild(choose_mode_div)
            } else {
                playMode.singlePlayer()
                choose_mode.removeChild(choose_mode_div)
            }
        })
    }


    let player_mode_select = ""
    two_players_mode.addEventListener("click", () => {
        player_mode_select = "two players"
        selected()
    })
    single_player_mode.addEventListener("click", () => {
        player_mode_select = "single player"
        selected()
    })


}
const playMode = (function() {
    const twoplayers = () => {
        get_player_details_form()
    }
    const singlePlayer = () => {
        get_player_details_form()
    }
    return {
        twoplayers,
        singlePlayer
    }
})()


let player_one_marker = "";
let playerDetailsArray = []

const playerName = (name) => {
    return { name }
}
const playerMarker = (marker) => {
    return { marker }
}

const chooseMarker = function() {
    const choose_marker_div = document.querySelector("#choose_marker")
    const choose_marker = document.createElement("div")
    const option_X = document.createElement("button")
    option_X.textContent = "X"
    const option_O = document.createElement("button")
    option_O.textContent = "O"
    const select = document.createElement("button")
    select.textContent = "Okay"
    choose_marker_div.appendChild(choose_marker)
    choose_marker.appendChild(option_X)
    choose_marker.appendChild(option_O)
    choose_marker.appendChild(select)

    option_X.addEventListener("click", () => player_one_marker = "X")
    option_O.addEventListener("click", () => player_one_marker = "O")
    select.addEventListener("click", () => {
        playerOneMarker()
        choose_marker_div.removeChild(choose_marker)

    })
    const playerOneMarker = () => {
        const player1 = playerMarker(player_one_marker)
        playerDetailsArray.push(player1.marker)
        return playerDetailsArray[1];
    }
}
const get_player_details_form = function() {

    const form = document.querySelector("#player_form")
    const form_div = document.createElement("div")
    const detail_name = document.createElement("h3")
    detail_name.textContent = "Enter Name"
    const player_form_input = document.createElement("input");
    const select_name = document.createElement("button")
    select_name.textContent = "Okay"
    form.appendChild(form_div)
    form_div.appendChild(detail_name)
    form_div.appendChild(player_form_input);
    form_div.appendChild(select_name)
    let player_form_input_value = player_form_input.value = "";
    select_name.addEventListener("click", () => {
        player_form_input_value = player_form_input.value;
        console.log(player_form_input_value);
        playerOneName()
        chooseMarker()
        form.removeChild(form_div)
    })
    const playerOneName = () => {
        const player1 = playerName(player_form_input_value)
        playerDetailsArray.push(player1.name)
        return playerDetailsArray[0];
    }
}








const gameBoard = (function() {
    const startGame = () => {

    }
    const winner = () => {

    }
    return { startGame, winner }
})()

const button = document.querySelector("#sub");
button.addEventListener("click", (e) => {
    e.target.textContent = player_one_marker;
});
window.onload = () => {
    choose_mode()
}