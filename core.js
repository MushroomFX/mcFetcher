const mcFetcher = {
    getData : function(user){
        var url = `https://api.mojang.com/users/profiles/minecraft/${user}`
        console.log(url)
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.send();
        xhr.onload = () => {
            const data = JSON.parse(xhr.response);
            document.body.write(data);
        };

    //     fetch(url)
    // .then(result => result.json())
    // .then(({ player }) => {
    //     // Log the player's username
    //     console.log(player.name)
    // })

    },
}