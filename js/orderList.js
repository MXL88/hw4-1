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

        $(clone.find('.small')).attr("data-price", "$" + this.prices[0]);
        $(clone.find('.small')).attr("data-name", this.name);

        $(clone.find('.med')).attr("data-price", "$" + this.prices[1]);
        $(clone.find('.med')).attr("data-name", this.name);

        $(clone.find('.large')).attr("data-price", "$" + this.prices[2]);
        $(clone.find('.large')).attr("data-name", this.name);

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


