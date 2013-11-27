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

    meatContainer.empty();
    veggieContainer.empty();

    $.each(entries, function(){

       
        clone = template.clone();
        clone.find('.name').html(this.name);
        clone.find('.description').html(this.description);

        clone.find('.price1').html("$" + this.prices[0]);
        clone.find('.price2').html("$" + this.prices[1]);
        clone.find('.price3').html("$" + this.prices[2]);

        $('.small').attr("data-price", this.prices[0]);
        $('.small').attr("data-name", this.name);

        $('.med').attr("data-price", this.prices[1]);
        $('.med').attr("data-name", this.name);

        $('.large').attr("data-price", this.prices[2]);
        $('.large').attr("data-name", this.name);

    
        // clone.find('.data-price').html(this.prices[0]);
        // clone.find('.med').html("data-price", this.prices[1]);
        // clone.find('.big').html("data-price", this.prices[2]);


        // clone.find('.small').html("data-name", this.name);
        // clone.find('.med').html("data-name", this.name);
        // clone.find('.big').html("data-name", this.name);

        // // clone.find('.small').html("data-size", "12");
        // clone.find('.med').html("data-size", "14");
        // clone.find('.big').html("data-size", "17");

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


