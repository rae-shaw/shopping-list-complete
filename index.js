

$(".shopping-list").on('click', ".shopping-item-toggle", function(event){

	console.log( (this));
	
	console.log( $(this).closest('li').find('.shopping-item') );
	$(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
});

$(".shopping-list").on('click', ".shopping-item-delete", function(event){

	console.log(this);
	
	$(this).closest('li').remove('li');
});

$('#js-shopping-list-form').on('click', 'button', function(){
	
	event.preventDefault();

	var new_item = $('#shopping-list-entry').val();

	console.log(new_item);

        $('.shopping-list').append( `<li>
        	<span class="shopping-item shopping-item">${new_item}</span>
        	<div class="shopping-item-controls"><button class="shopping-item-toggle">
        	<span class="button-label">check</span>
        		</button><button class="shopping-item-delete">
        			<span class="button-label">delete</span>
        		</button>
        	</div>
        </li>`);
  

	console.log('clicked!');

	
});