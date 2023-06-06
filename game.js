players1_name = localStorage.getItem("player1_name");
players2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

setTimeout(SetStuff, 500)

function SetStuff()
{
    document.getElementById("player1_name").innerHTML = players1_name +  ": ";
    document.getElementById("player2_name").innerHTML = players2_name +  ": ";

    document.getElementById("player1_score").innerHTML = player1_score;
    document.getElementById("player2_score").innerHTML = player2_score;

    document.getElementById("player_question").innerHTML = "Question Turn - " + players1_name;
    document.getElementById("player_answer").innerHTML = "Answer Turn - " + players2_name;
}