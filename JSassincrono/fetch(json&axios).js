fetch('pessoas.json')
.then(value => value.json())
.then(json => console.log(json))
.catch(err => console.log( `erro`))