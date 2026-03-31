
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";
const SignIn = ()=>{
    const [input,setInput] = useState({
            email:"",
            password:""
    });
    const [loading,setloading] = useState(false);
    const naviate = useNavigate();
    const changeEventHandler = (e)=>{
       setInput({...input,[e.target.name]:e.target.value});
    }
    const signupHadler = async(e)=>{
         e.preventDefault();
         console.log(input);
         try {
            setloading(true);
            const res = await axios.post("http://localhost:8000/api/v1/user/login",input,{
              headers: { 'Content-Type': 'application/json' },
              withCredentials: true
            });
            if(res.data.success)
            {
                setInput({
                    email:"",
                    password:""
                })
               toast.success(res.data.message);
               naviate("/"); 
            }
         } catch (error) {
            console.log(error);
            toast.error("something went wrong"+error);
         } finally{
            setloading(false);
         }

    }
    return (
           <>
           <div className="flex items-center w-screen h-screen justify-center">
           <form onSubmit={signupHadler} action="" className="shadow-xl border-2 flex flex-col gap-5 p-8">
                <span>Sign</span>
                <div className="email">
                <span className="font-medium">User Email</span>
                <Input type="text" placeholder="user Email" onChange={changeEventHandler} value={input.email} name="email"/>
                </div> 
                <div className="password">
                <span className="font-medium">Password</span>
                <Input type="password" placeholder="password" onChange={changeEventHandler} value={input.password} name="password"/>
                </div>
                <Button type="submit">Submit</Button>
                                  <span><Link to="/signup">SignUp</Link></span>

            </form>  
           </div>
        
           </>
    )
}

export default SignIn;