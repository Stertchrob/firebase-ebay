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

    var partNumber = $("#input1").val().trim();
    if (partNumber == "") window.alert("error, must fill out every field");
    if (partNumber == "") throw (err);

    var manufacturer = $("#input2").val().trim();
    if (manufacturer == "") window.alert("error, must fill out every field");
    if (manufacturer == "") throw (err);

    var material = $("#input3").val().trim();
    if (material == "") window.alert("Put 'N/A', if the item doesn't have a second part number");
    if (material == "") throw (err);

    var shank = $("#input4").val().trim();
    if (shank == "") window.alert("error, must fill out every field");
    if (shank == "") throw (err);

    var hollander = $("#input6").val().trim();
    

    var diameter = $("#input7").val().trim();
    if (diameter == "") window.alert("error, must fill out every field");
    if (diameter == "") throw (err);

    var flutes = $("#input8").val().trim();
    if (flutes == "") window.alert("error, must fill out every field");
    if (flutes == "") throw (err);

    var action = "Add";
    var category = 104242;
    var title = manufacturer + partNumber + flutes + " Flute";
    var conditionId = 3000;
    var description = "Used, being liquadated from Wheels America, Sold as is.";
    var format = "FixedPrice";
    var duration = "GTC";
    var startPrice = $("#input9").val().trim();;
    var buyitnowPrice = $("#input10").val().trim();;
    var quantity = 1;
    var paypalAccept = "1";
    var paypalEmail = "dallas.texas.wheels@gmail.com";
    var location = "Dallas, Tx";
    var shippingType = "Flat";
    var shippingService = "UPSGround";
    var shippingserviceCost = "$0.00"
    var dispatchTime = "2";
    var returnsAccepted = "ReturnsAccepted";
    var returnswithinOption = "Days_30";
    var shippingCost = "seller";
    var refundOption = "MoneyBack";
    var Table = 1; 
    var shippingprofileName = "wadallas";
    var returnprofileName = "wadallas";
    var paymentprofileName = "wadallas";

    var newHollander = {
        hollander: hollander,
        action: action, 
        category: category,
        title: title,
        condition: conditionId,
        material: material,
        mpn: partNumber,
        brand: manufacturer,
        flutes: flutes,
        cutting_diameter: diameter,
        shank_diameter: shank,
        description: description,
        format: format,
        duration: duration,
        startprice: startPrice,
        buyitnowprice: buyitnowPrice,
        quantity: quantity,
        paypalaccepted: paypalAccept,
        paypalemail: paypalEmail,
        location: location,
        shippingtype: shippingType,
        shippingService: shippingService,
        shippingserviceCost: shippingserviceCost,
        dispatchtimemax: dispatchTime,
        returnsaccepted: returnsAccepted,
        returnswithinoption: returnswithinOption,
        ShippingCostPaidByOption: shippingCost,
        refundoption: refundOption,
        UseTaxTable: Table,
        shippingprofilename: shippingprofileName,
        returnprofilename: returnprofileName,
        paymentprofilename: paymentprofileName
    }
    database.ref().push(newHollander);

    $("#input1").val("");
    $("#input2").val("");
    $("#input3").val("");
    $("#input4").val("");
    $("#input5").val("");
    $("#input6").val("");
    $("#input7").val("");
    $("#input8").val("");
    $("#input9").val("");
    $("#input10").val("");

    console.log(newHollander);
});