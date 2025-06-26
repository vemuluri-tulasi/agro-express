import User from "../models/User.js";

const postApiSignups = async (req, res) => {
    const { name, email, address, password, mobile } = req.body;

  try {
    const newUser = new User({
      name: name,
      email: email,
      password: password,
      mobile: mobile,
      address: address,
    });

    const savedUser = await newUser.save();

    res.send({
      success: true,
      data: savedUser,
      message: "Signup successfully !!!",
    })
  } 
  catch (e) {
    res.send({
      success: false,
      message: e.message,
    });
  }
};

const postApiLogins = async(req,res)=>{
    try{
        const {email,password}=req.body;

        if(!email||!password){
            return res.send({
                success:false,
                message:"please fill all section"
            })
        }
        const response =await User.findOne({email:email,password:password});
    
       if(response){
        res.send(
            {
                success:true,
                data:response,
                message:"login successfuly!!!"
            }
        )
       }else{
        res.send({
            success:false,
            message:"Please correct email and password."
        })
       }
    }catch(e){
        res.send({
            success:false,
            message:e.message
        })
    }
   
}

export { postApiSignups, postApiLogins };

