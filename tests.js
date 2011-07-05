module('Initialization');

test('Notify has loaded',function() {
	expect(2);
	ok($.notify,'Notify is not loaded.');
	ok(container = $.notifyinit(), 'Container does not exist.');
});


module('Creation');

test('Create a notification',function() {
	expect(3);
	var notify = $.notify('Hello World');
	ok(notify,'Notification not created');
	ok(notify.is(":visible"), 'Notification is not showing');
	equals($('.ui-widget-content',notify).text(),"Hello World",'The text should say Hello World');
});

test('Default Events are bound',function() {
	var notify = $.notify('Events');
	var events = notify.data('events');
	ok(events.mouseout, 'Mouseout not bound');
	ok(events.mouseover, 'Mouseover not bound');
	ok(events.mousedown, 'Mousedown not bound');
	ok(events.close, 'Close not bound');
})

module('Events');



