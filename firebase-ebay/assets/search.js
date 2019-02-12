// Initialize Firebase
var config = {
    apiKey: "AIzaSyCO4lGYm0fTspSfQKg1Fw0sLjKYSsJED7o",
    authDomain: "misc-ebay.firebaseapp.com",
    databaseURL: "https://misc-ebay.firebaseio.com",
    projectId: "misc-ebay",
    storageBucket: "misc-ebay.appspot.com",
    messagingSenderId: "890461329983"
};
firebase.initializeApp(config);

var database = firebase.database();
$("#enterbutton").on("click", function(event) {
    event.preventDefault();

    var hollander = $("#input6").val().trim();
    
    
    var partNumber = $("#input1").val().trim();
    if (partNumber == "") window.alert("error, must fill out every field");
    if (partNumber == "") throw (err);

    var manufacturer = $("#input2").val().trim();
    if (manufacturer == "") window.alert("error, must fill out every field");
    if (manufacturer == "") throw (err);

    var type = $("#input3").val().trim();
    if (type == "") window.alert("error, must fill out every field");
    if (type == "") throw (err);

    var startPrice = $("#input9").val().trim();
    if (startPrice == "") window.alert("error, must fill out every field");
    if (startPrice == "") throw (err);

    var buyitNow = $("#input10").val().trim();
    if (buyitNow == "") window.alert("error, must fill out every field");
    if (buyitNow == "") throw (err);

    var action = "add";
    var category = 181678;
    var title = brand + " " + partNumber; 
    var conditionId = 3000;
    var brand = manufacturer;
    var description = "Used, being liquadated from Wheels America, Sold as is.";
    var format = "FixedPrice";
    var duration = "GTC";
    var quantity = "1";
    var paypalAccepted = "1";
    var paypalEmail = "dallas.texas.wheels@gmail.com";
    var location = "Dallas, Tx";
    var shippingType = "Flat";
    var dispatchTime = "2";
    var returnsacceptedOption = "ReturnsAccepted";
    var returnswithinOption = "Days_30";
    var refundOption = "MoneyBack";
    var usetaxTable = "1";
    var shippingprofileName = "wadallas";
    var returnprofileName = "wadallas";
    var paymentprofileName = "wadallas";

    var newHollander = {
        action: action,
        category: category,
        title: title,
        conditionId: conditionId,
        brand: brand,
        mpn: partNumber, 
        description: description,
        format: format,
        duration: duration,
        quantity: quantity,
        paypalaccepted: paypalAccepted,
        paypalemail: paypalEmail,
        location: location,
        startprice: startPrice,
        buyitnow: buyitNow,
        shippingtype: shippingType,
        dispatchtime: dispatchTime,
        returnsacceptedoption: returnsacceptedOption,
        returnswithinoption: returnswithinOption,
        refundoption: refundOption,
        usetaxtable: usetaxTable,
        shippingprofilename: shippingprofileName,
        returnprofilename: returnprofileName,
        paymentprofilename: paymentprofileName,
        
    }
    database.ref().push(newHollander);
    
    $("#input1").val("");
    $("#input2").val("");
    $("#input3").val("");
    $("#input6").val("");
    $("#input9").val("");
    $("#input10").val("");

});



    