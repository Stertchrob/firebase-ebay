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

        var hollander = $("#input1").val().trim();


        var partNumber = $("#input2").val().trim();
        if (partNumber == "") window.alert("error, must fill out part number.");
        if (partNumber == "") throw (err);

        var manufacturer = $("#input3").val().trim();
        if (manufacturer == "") window.alert("error, must fill out manufacturer");
        if (manufacturer == "") throw (err);

        var type = $("#input4").val().trim();
        if (type == "") window.alert("error, must fill out manufacturer");
        if (type == "") throw (err);

        var startPrice = $("#input5").val().trim();
        if (startPrice == "") window.alert("error, must fill out manufacturer");
        if (startPrice == "") throw (err);

        var buyitNow = $("#input6").val().trim();
        if (buyitNow == "") window.alert("error, must fill out manufacturer");
        if (buyitNow == "") throw (err);

        var action = "add";
        var category = "33716"; 
        var title = "";
        var conditionId = 3000;
        var bulbsIncluded = "";
        var hardwareincluded = "";
        var description = "Used, being liquadated from Wheels America, Sold as is.";
        var format = "FixedPrice";
        var duration = "GTC";
        var quantity = 1;
        var paypalAccepted = 1;
        var paypalEmail = "";
        var location = "Dallas, Tx";
        var shippingType = "";
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
            conditionID: conditionId,
            brand: brand,
            mpn: partNumber,
            BulbsIncluded: bulbsIncluded,
            HardwareIncluded: hardwareincluded,
            description: description,
            format: format,
            duration: duration,
            startPrice: startPrice,
            BuyitNow: buyitNow,
            quantity: quantity,
            PayPalAccepted: paypalAccepted,
            PayPalEmail: paypalEmail,
            location: location,
            ShippingType: shippingType,
            DispatchTime: dispatchTime,
            ReturnsAcceptedOption: returnsacceptedOption,
            ReturnsWithinOption: returnswithinOption,
            RefundOption: refundOption,
            UseTaxTable: usetaxTable,
            ShippingProfileName: shippingprofileName,
            ReturnProfileName: returnprofileName,
            PaymentProfileName: paymentprofileName
        }
        database.ref().push(newHollander);
        
        $("#input1").val("");
        $("#input2").val("");
        $("#input3").val("");
        $("#input6").val("");
        $("#input9").val("");
        $("#input10").val("");
    });