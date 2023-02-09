const choose_mode = function() {
    const choose_mode = document.querySelector("#choose_mode")
    const choose_mode_div = document.createElement("div")
    choose_mode_div.setAttribute("id", "choose_mode_contents")
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
    let select_count = 0;
    const selected = function() {
        if (select_count < 1) {
            const select_mode = document.createElement("button")
            select_mode.textContent = "Okay"
            choose_mode_div.appendChild(select_mode)
            select_count += 1;

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
    }

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
        get_player_name_form()

    }
    const singlePlayer = () => {
        get_player_name_form()

    }
    return {
        twoplayers,
        singlePlayer
    }
})()


let player_marker = "";
let player_details_array = []
let player_mode_select = ""
const player_name_fact = (name) => {
    return { name }
}
const player_marker_fact = (marker) => {
    return { marker }
}

const player_one_marker = () => {
    const player1 = player_marker_fact(player_marker)
    player_details_array.push(player1.marker)
    console.log(player_details_array);
}

const player_two_marker_auto = () => {
    if (player_details_array[1] == "X") {
        player_marker = "O"
    } else {
        player_marker = "X"
    }
    return player_marker
}
const chooseMarker = function() {
    if (player_one_counter < 1) {
        const choose_marker_div = document.querySelector("#choose_marker")
        const choose_marker = document.createElement("div")
        choose_marker.setAttribute("id", "marker_contents")
        const option_X = document.createElement("button")
        option_X.textContent = "X"
        const option_O = document.createElement("button")
        option_O.textContent = "O"
        const okay_btn_div = document.createElement("div")
        const select = document.createElement("button")
        select.textContent = "Okay"
        choose_marker_div.appendChild(choose_marker)
        choose_marker.appendChild(option_X)
        choose_marker.appendChild(option_O)
        choose_marker.appendChild(okay_btn_div)
        okay_btn_div.appendChild(select)

        option_X.addEventListener("click", () => {
            player_marker = "X"
        })
        option_O.addEventListener("click", () => {
            player_marker = "O"

        })
        select.addEventListener("click", () => {
            if (player_mode_select == "two players") {
                player_one_marker()
                choose_marker_div.removeChild(choose_marker)
                get_player_name_form()

            } else {
                player_one_marker()
                choose_marker_div.removeChild(choose_marker)
                player_details_array.push("Computer")
                player_details_array.push(player_two_marker_auto())
                gameBoard.startGame()
                console.log(player_details_array);

            }
        })
    } else {
        player_two_marker_auto()
        player_one_marker()
        gameBoard.startGame()
    }


}
let player_one_counter = 0;
let player = "";
const get_player_name_form = function() {
    if (player_one_counter < 1) {
        player = "player 1:"

    } else {
        player = "player 2:"
    }
    const form = document.querySelector("#player_form")
    const form_div = document.createElement("div")
    form_div.setAttribute("id", "name_form")
    const detail_name = document.createElement("h3")
    detail_name.textContent = player + " " + "Enter Name"
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
        player_one_name()
        chooseMarker()
        form.removeChild(form_div)
        player_one_counter += 1;

    })
    const player_one_name = () => {
        const player1 = player_name_fact(player_form_input_value)
        player_details_array.push(player1.name)
        return player_details_array;
    }
}

const multi = (a, b, c) => {
    return Number(a) * Number(b) * Number(c);
}

const gameBoard = (function() {
    const startGame = () => {
        const board_main = document.querySelector("#board")
        const sub_main = document.createElement("div")
        sub_main.setAttribute("id", "sub")
        const first_row = document.createElement("div")
        first_row.setAttribute("id", "first")
        const first_row_box_one = document.createElement("div")
        first_row_box_one.setAttribute("id", "1")
        const first_row_box_two = document.createElement("div")
        first_row_box_two.setAttribute("id", "2")
        const first_row_box_three = document.createElement("div")
        first_row_box_three.setAttribute("id", "3")
        const second_row = document.createElement("div")
        second_row.setAttribute("id", "second")
        const second_row_box_one = document.createElement("div")
        second_row_box_one.setAttribute("id", "4")
        const second_row_box_two = document.createElement("div")
        second_row_box_two.setAttribute("id", "5")
        const second_row_box_three = document.createElement("div")
        second_row_box_three.setAttribute("id", "6")
        const third_row = document.createElement("div")
        third_row.setAttribute("id", "third")
        const third_row_box_one = document.createElement("div")
        third_row_box_one.setAttribute("id", "7")
        const third_row_box_two = document.createElement("div")
        third_row_box_two.setAttribute("id", "8")
        const third_row_box_three = document.createElement("div")
        third_row_box_three.setAttribute("id", "9")
        board_main.appendChild(sub_main)
        sub_main.appendChild(first_row)
        sub_main.appendChild(second_row)
        sub_main.appendChild(third_row)
        first_row.appendChild(first_row_box_one)
        first_row.appendChild(first_row_box_two)
        first_row.appendChild(first_row_box_three)
        second_row.appendChild(second_row_box_one)
        second_row.appendChild(second_row_box_two)
        second_row.appendChild(second_row_box_three)
        third_row.appendChild(third_row_box_one)
        third_row.appendChild(third_row_box_two)
        third_row.appendChild(third_row_box_three)

        let game_turn_counter = 0;
        const player_one_array = [];
        const player_two_array = [];
        let choice_reference = 0;
        let computer_choice = "1";
        let choice = ""
        let winner_count = 0;

        sub_main.addEventListener("click", (e) => {
            if (e.target.textContent == "") {
                winner_count += 1;
                if (game_turn_counter == 0) {
                    e.target.textContent = player_details_array[1];
                    player_one_array.push(e.target.id)
                    console.log(player_one_array);
                    if (player_mode_select == "single player") {
                        choice = "1,2,3,4,5,6,7,8,9".split(",");
                        computer_choice = choice[Math.floor(Math.random() * choice.length)];
                        computer_target = document.getElementById(computer_choice)
                        console.log(computer_choice);
                        while (computer_target.textContent != "" && winner_count < 9) {
                            computer_choice = choice[Math.floor(Math.random() * choice.length)];
                            computer_target = document.getElementById(computer_choice)
                        }

                        computer_target.textContent = player_details_array[3]
                        player_two_array.push(computer_choice)
                        console.log(player_two_array);
                        winner_count += 1;

                    } else {
                        game_turn_counter += 1;
                    }

                } else {
                    e.target.textContent = player_details_array[3];
                    game_turn_counter -= 1;
                    player_two_array.push(e.target.id)
                    console.log(player_two_array);
                }
                if (winner_count == 5) {
                    let player_one_multi = multi(player_one_array[0], player_one_array[1], player_one_array[2])
                    if (player_one_multi == 28 || player_one_multi == 80 || player_one_multi == 162 || player_one_multi == 6 ||
                        player_one_multi == 120 || player_one_multi == 504 || player_one_multi == 205 || player_one_multi == 45) {
                        console.log("player 1 wins");
                    }
                } else if (winner_count == 6) {
                    let player_one_multi = multi(player_one_array[0], player_one_array[1], player_one_array[2])
                    let player_two_multi = multi(player_two_array[0], player_two_array[1], player_two_array[2])
                    console.log(player_one_multi, player_two_multi);

                    if (player_one_multi == 28 || player_one_multi == 80 || player_one_multi == 162 || player_one_multi == 6 ||
                        player_one_multi == 120 || player_one_multi == 504 || player_one_multi == 205 || player_one_multi == 45) {
                        console.log("player 1 wins");
                    } else if (player_two_multi == 28 || player_two_multi == 80 || player_two_multi == 162 || player_two_multi == 6 ||
                        player_two_multi == 120 || player_two_multi == 504 || player_two_multi == 205 || player_two_multi == 45) {
                        console.log("player 2 wins");
                    } else {
                        console.log("its a tie");
                    }
                }
            }
        })

    }



    const stratergy = () => {


    }
    return { startGame, stratergy }
})()




window.onload = () => {
    choose_mode()
}