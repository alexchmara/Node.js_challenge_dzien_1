const args = process.argv;


for (let i = 2; i < args.length; i++) {
	let hurry = parseInt(args[i])
    let barry = setTimeout (() => {
       console.log(hurry)
    }, hurry*1000);

