//creates a form that users use to choose player mode(two players or single(Vs computer))
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
    // function that asigns the mode name to player_mode_select based on user's choice
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
        // when clicked, player_mode_select == player mode selected
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

/*automatically asigns marker to the last player(player 2 or computer) 
based on player1's choice*/

const player_two_marker_auto = () => {
        if (player_details_array[1] == "X") {
            player_marker = "O"
        } else {
            player_marker = "X"
        }
        return player_marker
    }
    //form for selecting a marker
const chooseMarker = function() {
    if (player_one_counter < 1) {
        const choose_marker_div = document.querySelector("#choose_marker")
        const choose_marker = document.createElement("div")
        choose_marker.setAttribute("id", "marker_contents")
        const choose_marker_text = document.createElement("h3")
        choose_marker_text.textContent = "Select Marker"
        const option_X = document.createElement("button")
        option_X.textContent = "X"
        const option_O = document.createElement("button")
        option_O.textContent = "O"
        choose_marker_div.appendChild(choose_marker)
        choose_marker.appendChild(choose_marker_text)
        choose_marker.appendChild(option_X)
        choose_marker.appendChild(option_O)



        option_X.addEventListener("click", () => {
            player_marker = "X"
            select()
        })
        option_O.addEventListener("click", () => {
                player_marker = "O"
                select()

            })
            /*when clicked, checks the value of play mode, if it's "two players mode",
            name form is brought out again else the game starts */
        const select = () => {
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
                gameBoard.gameStratergy()
                console.log(player_details_array);

            }
        }
    } else {
        player_two_marker_auto()
        player_one_marker()
        gameBoard.startGame()
        gameBoard.gameStratergy()
    }


}
let player_one_counter = 0;
let player = "";
/* when called, it checks if the get name form has been called once already, if yes, 
it changes player value to player 2 and "player 2 enter name is displayed"  else it's not called at all. */
const get_player_name_form = function() {
    if (player_one_counter < 1) {
        player = "Player 1:"

    } else {
        player = "Player 2:"
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
        //name creating function using factory
    const player_one_name = () => {
        const player1 = player_name_fact(player_form_input_value)
        player_details_array.push(player1.name)
        return player_details_array;
    }
}

//Helps calculate the winner logic
const multi = (a, b, c) => {
    return Number(a) * Number(b) * Number(c);
}

const gameBoard = (function() {
    //creates the tic-tac-toe interface
    const board_main = document.querySelector("#board")
    const sub_main = document.createElement("div")
    const text_sub = document.createElement("div")
    const startGame = () => {
            sub_main.setAttribute("id", "sub")

            text_sub.setAttribute("id", "text_sub")
            const player1_marker_text = document.createElement("h2")
            player1_marker_text.textContent = `${player_details_array[0]} Marker: ${player_details_array[1]}`
            const player2_marker_text = document.createElement("h2")
            player2_marker_text.textContent = `${player_details_array[2]} Marker: ${player_details_array[3]}`
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
            board_main.appendChild(text_sub)
            text_sub.appendChild(player1_marker_text)
            text_sub.appendChild(player2_marker_text)
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

        }
        /* this is where the game margic happens */
    const gameStratergy = () => {
        let game_turn_counter = 0;
        let player_one_array = [];
        let player_two_array = [];
        let computer_choice = "1";
        let choice = ""
        player_one_multi = 0;
        player_two_multi = 0;
        let winner_count = 0;
        //when part of the board is clicked
        sub_main.addEventListener("click", (e) => {
            if (e.target.textContent == "") {

                /*if game_turn _counter == 0, means player1's turn and get player1's marker
                from player_details_array else it's player2's turn */
                if (game_turn_counter == 0) {
                    e.target.textContent = player_details_array[1];
                    player_one_array.push(e.target.id)
                    console.log(player_one_array);

                    /*checks play mode's value, if it's single player(Vs computer), computer 
                    will automatically input it's random choice else will wait for player 2 */
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
                //game logic based on multiplication of all winning positions else log "It's a tie"
                if (winner_count == 5) {

                    player_one_multi = multi(player_one_array[0], player_one_array[1], player_one_array[2])
                    if (player_one_multi == 28 || player_one_multi == 80 || player_one_multi == 162 || player_one_multi == 6 ||
                        player_one_multi == 120 || player_one_multi == 504 || player_one_multi == 105 || player_one_multi == 45) {
                        winner = player_details_array[0] + " " + "Wins "
                        winner_count = 0;
                        player_one_multi = 0;
                        player_two_multi = 0;
                        player_one_array = []
                        player_two_array = []
                        winner_popup()
                    }
                } else if (winner_count == 6) {
                    player_one_multi = multi(player_one_array[0], player_one_array[1], player_one_array[2])
                    player_two_multi = multi(player_two_array[0], player_two_array[1], player_two_array[2])
                    console.log(player_one_multi, player_two_multi);

                    if (player_one_multi == 28 || player_one_multi == 80 || player_one_multi == 162 || player_one_multi == 6 ||
                        player_one_multi == 120 || player_one_multi == 504 || player_one_multi == 105 || player_one_multi == 45) {
                        winner = player_details_array[0] + " " + "Wins"
                        winner_count = 0;
                        player_one_multi = 0;
                        player_two_multi = 0;
                        player_one_array = []
                        player_two_array = []
                        winner_popup()
                    } else if (player_two_multi == 28 || player_two_multi == 80 || player_two_multi == 162 || player_two_multi == 6 ||
                        player_two_multi == 120 || player_two_multi == 504 || player_two_multi == 105 || player_two_multi == 45) {
                        winner = player_details_array[2] + " " + "Wins"
                        winner_count = 0;
                        player_one_multi = 0;
                        player_two_multi = 0;
                        player_one_array = []
                        player_two_array = []
                        winner_popup()
                    } else {
                        winner = "It's a tie"
                        winner_count = 0;
                        player_one_multi = 0;
                        player_two_multi = 0;
                        player_one_array = []
                        player_two_array = []
                        winner_popup()
                    }
                }
                winner_count += 1;
            }
        })
    }
    let winner = ""
    const winner_popup = () => {
        overlay()
        const popup_main = document.getElementById("popup_main")
        const winner_popup_div = document.createElement("div")
        winner_popup_div.setAttribute("id", "popup_div")
        const winner_text = document.createElement("h2")
        winner_text.textContent = winner;
        const restart_btn = document.createElement("button")
        restart_btn.textContent = "Restart Game"
        popup_main.appendChild(winner_popup_div)
        winner_popup_div.appendChild(winner_text)
        winner_popup_div.appendChild(restart_btn)

        restart_btn.addEventListener("click", () => {
            popup_main.removeChild(winner_popup_div)
            restart()
            startGame()
        })
    }
    const restart = () => {
        sub_main.innerHTML = ""
        text_sub.innerHTML = ""
        game_turn_counter = 0;
        overlay()




    }



    return { startGame, gameStratergy, winner_popup }
})()

const overlay = () => {
    const overlay_main = document.querySelector("#background_overlay")
    overlay_main.classList.toggle("show")
}





window.onload = () => {
    choose_mode()
}