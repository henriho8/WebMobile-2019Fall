//function requestListener(){
//    console.log(this.responseText);
//}


function getGithubInfo(user) {
    //1. Create an instance of XMLHttpRequest class and send a GET request using it.
    // The function should finally return the object(it now contains the response!)

    const url = "https://api.github.com/users/" + user;
    const con = new XMLHttpRequest();
    //con.addEventListener("load", requestListener)
    con.open('GET', url, false);
    con.send();
    return con;
}


function showUser(user) {
    //2. set the contents of the h2 and the two div elements in the div '#profile' with the user content

    $('#profile h2').html(user.login);
    $('#profile .avatar').html("<img src=" + user.avatar_url +  ", alt = 'avatar'>");

    /*$('#profile .avatar').html("img src=" + user.avatar_url + ", alt = "avatar">"); */
    /* $('#profile').append("<div class='user_name'>" + user.username + "</div>");*/

    $('#profile').append("<div class='id'>"  + user.id + "</div>");
    $('#profile').append("<a href=\"" + user.html_url + "\">" + user.html_url + "</a>");
}

function noSuchUser(username) {
    //3. set the elements such that a suitable message is displayed

    $('#profile h2').html("No such user: " + username);
    $('#profile .avatar').html("<img src='https://avatars0.githubusercontent.com/u/705559?s=200' , alt='@IDK' , width='100' , height='100'>");
    $('#profile .information').html("No such user " + username);

}

$(document).ready(function () {
    $(document).on('keypress', '#username', function (e) {
        //check if the enter(i.e return) key is pressed
        if (e.which == 13) {
            //get what the user enters
            username = $(this).val();
            //reset the text typed in the input
            $(this).val("");
            //get the user's information and store the respsonse
            response = getGithubInfo(username);
            //if the response is successful show the user's details
            if (response.status == 200) {
                showUser(JSON.parse(response.responseText));
                //else display suitable message
            } else {
                noSuchUser(username);
            }
        }
    })
});
