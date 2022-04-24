var define=require('readline-sync');
var l=[]
var fs=require("fs")
function option(){
    input=define.questionInt("press 1 for signup\npress 2 for login\npress\nenter : ");
    if(input===1){
        return signup()
    }else if(input===2){
        return login()
    }
    function signup(){
        if(fs.existsSync("create.txt")){ 
        
            Name_ = define.question("name: ")
            pass = define.question("password: ")
            d = fs.readFileSync("create.txt", 'utf-8')
            let indicator = true;
            for(data of d.split("\n")){
                if(data.includes(Name_) && data.includes(pass)){
                    indicator = false;
                    console.log('here we go.')
                    console.log("already present")
                    option()
                }
            }
            if (indicator){
                city=define.question("enter the city name : ")
                let space=("\n")
                fs.appendFileSync("create.txt",`[${Name_},${city},${pass}]${space}`)
                console.log("!!!!!!!!!!!!!!!successfuly created!!!!!!!!!!!!!!")


                
            } 
            
            option()
        }else{
            fs.writeFileSync("create.txt")
            signup()
        }
    }
    function  login(){
        Name = define.question("name: ")
        pass2 = define.question("password: ")
        d = fs.readFileSync("create.txt", 'utf-8')
        
        for(data of d.split("\n")){
            if (data.includes(Name) && data.includes(pass2)){
                console.log("!!!!!!!!!1success!!!!!!!!!!!!!!")
                console.log(data)
            }
        }
    }
}
option()
