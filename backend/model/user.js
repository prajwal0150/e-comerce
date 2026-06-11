import mangoose from 'mangoose';
const {Schema, model}= mangoose;

const userSchema= new Schema(
    {
        name:{type: String, required: true},
        password:{type: String, required: true},
        email:{type: String, required: true}
    },
    {timestamp: true}

);
export default userModel= mpdel('User', userSchema);