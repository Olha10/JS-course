class HttpError extends Error {
    constructor(response) {
   super(`${response.status} for ${response.url}`);
   this.name = 'HttpError';
  this.response = response;
}
};


function loadJson1(url) {
      return fetch(url)
        .then(response => {
         if (response.status == 200) {
           return response.json();
         } else {
            throw new HttpError(response);
         }
   });
};

async function loadJson(url){
    let myPromise = new Promise(function(myResolve, myReject){
        let response = fetch(url);
        response.json = function(){
            if (response.status == 200){
                myResolve(response.response);
            } else {
                myResolve(HttpError(response));
            }
        };
        response.send();
    });  
   let content = await myPromise;
   console.log(content);
};
loadJson(url);

async function demoGithubUser() {
    let name = prompt("Enter a name?", "iliakan");
    try {
        let content = await loadJson(`https://api.github.com/users/${name}`);
        console.log(content);
    } catch (err) {
        if (err instanceof HttpError && err.response.status == 404){
            alert("No such user, please reenter.");
            return demoGithubUser();
        } else {
            console.log(err);
        }
    } 
  };
  
  demoGithubUser();