class BasePage {
    protected url:string;

    constructor (url:string){
        this.url = url
    }

    describe(): string{
        return `You are on Page: ${this.url}`
    }
}

class LoginPage extends BasePage {
    constructor(){
            super("https://test.com/login")
        //Super keyword is used inside a child (derived) class to call the constructor and methods of its parent (base) class.
    }
}

const login = new LoginPage(); 
console.log(login.describe())