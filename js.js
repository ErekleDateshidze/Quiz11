
var people = ["George", "Michael", "Sam", "John", "James"]

for (var i = 0; i < people.length; i++) {
    document.write(people[i] + " </br> ")

}




var numbers = [15, 53, 22, 198, 10, 28, 16, 70, 33, 951]

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == !0) {
        document.write(numbers[i] + " </br> ");
    }
}

var arr = [15, 53, 22, 198, 10, 28, 16, 70, 33, 951]

var odd = arr.filter((n) => n % 2 == !0);
document.write(odd + "  </br> ");


function display(x, func) {
    var message = func(x);
    document.write(message);
}

function priceMessage(price) {
    if (price > 50)
        return "Expensive" + "  </br> ";
    else if (price > 20 && price < 50)
        return "Average" + "  </br> ";
    else if (price < 20)
        return "Low" + "  </br> ";
}

display(19, priceMessage);
display(21, priceMessage);
display(51, priceMessage);





//შექმენიტ ფუნქცია სადაც ერთ ფუნქციას გამოიყენებთ
//მოერე ფუნქციის პარამეტრად და
//if else მეშვეობით დაბეჭდეთ რამე
//ინფორმაცია (მაგ:
//თუ რამე ნივთის ფასი მაღაზიაში
//არის 50 ლარზე მეტი ესეიგი ძვირია
//თუ 20-50 დიაპაზონშია მოქცეული
//საშუალო თუ ნაკლები იაფი