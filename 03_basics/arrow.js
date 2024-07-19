const user = {
    username: "kartikay",
    price: 999,

    welcomemessage: function() {
        console.log(`Welcome ${this.username}`);
        console.log(this)
    }
}
user.welcomemessage()
user.username = "sam"
user.welcomemessage()