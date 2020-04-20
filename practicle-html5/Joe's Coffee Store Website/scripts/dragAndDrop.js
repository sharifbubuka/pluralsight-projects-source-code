function addDnDHandlers(){
    var coffeeimages = document.getElementsByClassName('productarticlewide');
    var shoppingcartdropzone = document.getElementById('shoppingcart');
    var shoppingcart = document.querySelectorAll('#shoppingcart ul')[0];

    for (var i = 0; i < coffeeimages.length; i++){
        coffeeimages[i].addEventListener("dragstart", function(ev){
            ev.dataTransfer.effectAllowed = 'copy';
            ev.dataTransfer.setData("Text", this.getAttribute("id"));
        }, false);
    }

    shoppingcartdropzone.addEventListener("dragover", function(ev){
        if(ev.preventDefault)
            ev.preventDefault();
        ev.dataTransfer.dropEffect = "copy";
        return false;
    }, false);

    shoppingcartdropzone.addEventListener("drop", function(ev){
        if(ev.stopPropagation)
            ev.stopPropagation();

            var coffeeid = ev.dataTransfer.getData("Text");
            var element = document.getElementById(coffeeid);

            addCoffeeToShoppingCart(element, coffeeid);
            ev.stopPropagation();

            return false;
    }, false);

    function addCoffeeToShoppingCart(item, id){
        var html = id + " " + item.getAttribute('data-price');

        var liElement = document.createElement('li');
        liElement.innerHTML = html;
        shoppingcart.appendChild(liElement);
    }






}