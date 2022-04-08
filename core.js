const mcFetcher = {
    getData : function(user){
        var url = `https://api.mojang.com/users/profiles/minecraft/${user}`
        console.log(url)
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.send();
        xhr.onload = () => {
            const data = JSON.parse(xhr.response);
            console.log(data);
        };
    },
}