module('Initialization');

test('Notify has loaded',function() {
	expect(2);
	ok($.notify,'Notify is not loaded.');
	ok(container = $.notifyinit(), 'Container does not exist.');
});


module('Default Creation');

test('Create a notification',function() {
	expect(3);
	var notify = $.notify('Hello World');
	ok(notify,'Notification not created');
	ok(notify.is(":visible"), 'Notification is not showing');
	equals($('.ui-widget-content',notify).text(),"Hello World",'The text should say Hello World');
});

test('Default events are bound',function() {
	expect(8);
	var notify = $.notify('Events');
	var events = notify.data('events');
	ok(events.mouseout, 'Mouseout not bound');
		equals(events.mouseout.length,1,"Only one mouseout should be bound");
	ok(events.mouseover, 'Mouseover not bound');
		equals(events.mouseover.length,1,"Only one mouseover should be bound");
	ok(events.mousedown, 'Mousedown not bound');
		equals(events.mousedown.length,1,"Only one mousedown should be bound");
	ok(events.close, 'Close not bound');
		equals(events.close.length,1,"Only one close should be bound");
})

module('Configurations');

test('Altering the default settings',function() {
	
	var notify = $.notify('Change Config',{mode:'after',appearance:1});
	ok(notify.data('settings'),'Settings are missing');
	equals(notify.data('settings').mode,'after','Mode unchanged');

});

