/*jshint esversion: 6 */
(window.onload = function(){
    "use strict";
    
    document.getElementById('add_account_form').addEventListener('submit', function(e){
        // prevent from refreshing the page on submit
        e.preventDefault();
        // read form elements

        let firstname = document.getElementById("firstname_box").value;
        let lastname = document.getElementById("lastname_box").value;
        let balancebox = document.getElementById("balance_box").value;
        let image = document.getElementById("image_url_box").value;

        mongo.createDB();
        mongo.addFace(firstname, lastname, balancebox, image);

        // clean form
        document.getElementById("add_account_form").reset();
    });

}());