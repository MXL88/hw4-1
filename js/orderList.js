$(function(){
    renderPizza(com.dawgpizza.menu.pizzas);
    // renderDrink(com.dawgpizza.menu.drinks);
    // renderDessert(com.dawgpizza.menu.desserts);
});

function renderPizza(entries) {
    var template = $('.templatePizza');
    var meatContainer = $('.meat-container');
    var veggieContainer = $('.veggie-container');
    var clone;
    var button = $('.add-to-cart');

    meatContainer.empty();
    veggieContainer.empty();

    $.each(entries, function(){
       
        clone = template.clone();
        clone.find('.name').html(this.name);
        clone.find('.description').html(this.description);
        // clone.find('.prices').html("$" + this.prices[0] + "/$" +
        //                           this.prices[1] + "/$" + this.prices[2]);
        clone.find('.price1').html("$" + this.prices[0]);
        //clone.find('.data-price').html(this.prices[0]);

        document.getElementById("small").setAttribute("data-type", this.prices[0]);
        document.getElementById("med").setAttribute("data-type", this.prices[1]);
        document.getElementById("big").setAttribute("data-type", this.prices[2]);

        document.getElementById("small").setAttribute("data-name", this.name);
        document.getElementById("med").setAttribute("data-name", this.name);
        document.getElementById("big").setAttribute("data-name", this.name);

        document.getElementById("small").setAttribute("data-size", "12");
        document.getElementById("med").setAttribute("data-size", "14");
        document.getElementById("big").setAttribute("data-size", "17");


        clone.find('.price2').html("$" + this.prices[1]);
        clone.find('.price3').html("$" + this.prices[2]);

        clone.removeClass('template');
        if (this.vegetarian == true) {
            veggieContainer.append(clone);
        }
        else {
            meatContainer.append(clone);
        }


        //clone.find('price1').html().setAttribute("value",this.prices[0]); 
    });
          //clone.find('.price1').html().setAttribute("price", this.prices[0]);
    
        
}


