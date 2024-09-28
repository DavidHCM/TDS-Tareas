const {Schema, model, SchemaTypes} = require('mongoose');

const userSchema = new Schema({
    name: {type: SchemaTypes.String, required: true},
    email: {type: SchemaTypes.String, required: true},
    password: {type: SchemaTypes.String, required: true},
    role: {type: SchemaTypes.String, default: 'user'},
    status: {type: SchemaTypes.String, require: false} // new, active, inactive, deleted, archived
});

const user = model('users', userSchema);
export default user;