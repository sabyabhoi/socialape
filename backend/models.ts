type id = {
	$oid: String,
};

export interface UserSchema {
	_id: id,
	name: String,
	password: String,
};

export interface PostSchema {
	_id: id,
	title: String,
	author: id,
	createdOn: Date,
	content: String,  
};