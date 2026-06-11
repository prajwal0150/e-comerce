
export async function Login(req, res){
    const {name, email, password}= req.body;
    if (!email || !name || !password){
        return res.status(400).json({message:'All field required'})
    }

    try{
        const user= await User.findone({email});
        if (!user){
            return res.status(401).json({message: "Invalid email or password"});

        }
        return req.status(200).json({
        message: "login succeed",
        user:{
            id:user._id,
            email: user.email,
            name: user.name
        }
    });
    }catch (err){
        console.err("login error:", err.message);
        return res.status(500).json({message: "Internal serever error."});
    }
    
}
