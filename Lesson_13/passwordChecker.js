let password = prompt('Enter your password');
class PassCheckController {
    static passwordChecker() {
        let regex = /\w{6,}/g;
        if(regex.test(password)){
            PassCheckModel.showCorrectPassword();
        } else {
            PassCheckModel.showIncorrectPassword();
        }
    }
}
class PassCheckModel {
    static showCorrectPassword() {
        console.log(password + ' is correct password');
    }
    static showIncorrectPassword() {
        console.log(password + ' is not correct password');
    }

}
PassCheckController.passwordChecker();
