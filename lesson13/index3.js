function User () {
	this.talk = function ( key ) {
		document.write ( `<p>${key}: <b>${this [ key ]}</b></p>` )
	}
}

User.createNewUser = function ( params ) {
	var user = new this;
	for ( var key in params )
		user [ key ] = params [ key ]
	return user
};

var visitor = User.createNewUser ( {
	name: 'migrant',
	timeVisit: new Date ().toLocaleString ()
} );

visitor.talk ( 'name' );
visitor.talk ( 'timeVisit' );

var currentUser = User.createNewUser ( {
	name: prompt ( 'What is your name?' ),
	age: prompt ( 'How old are you?' ),
	id: Math.round ( Math.random () * 100000000 ),
	posts: {},
	registered: new Date ().toLocaleString ().split ( ', ' ),
	write: function ( text ) {
		this.posts = Object.assign ( this.posts, {
			[ new Date ().toLocaleString () ]: text
		} )
	}
} );

currentUser.talk ( 'name' );
currentUser.talk ( 'registered' );
currentUser.write ( `I'm here since ${new Date ().toLocaleString ()}` );