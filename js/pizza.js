$(function(){
    renderPizza(com.dawgpizza.menu.pizzas);
    renderDrink(com.dawgpizza.menu.drinks);
    renderDessert(com.dawgpizza.menu.desserts);
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
        clone.find('.prices').html("$" + this.prices[0] + "/$" +
                                  this.prices[1] + "/$" + this.prices[2]);
    
        clone.removeClass('template');
        if (this.vegetarian == true) {
            meatContainer.append(clone);
        }
        else {
            veggieContainer.append(clone);
        }

    });
}


function renderDrink(entries) {
    var template = $('.templateDrinks');
    var drinksContainer = $('.drinks-container');
    var clone;

    drinksContainer.empty();

    $.each(entries, function(){
        clone = template.clone();
        clone.find('.name').html(this.name);
         clone.find('.prices').html("$" + this.price);
        clone.removeClass('template');
        drinksContainer.append(clone);
    });
}

function renderDessert(entries) {
    var template = $('.templateDesserts');
    var dessertsContainer = $('.desserts-container');
    var clone;

    dessertsContainer.empty();

    $.each(entries, function(){
       
        clone = template.clone();
        clone.find('.name').html(this.name);
        clone.find('.prices').html("$" + this.price);
       
        clone.removeClass('template');
        dessertsContainer.append(clone);
    });
}