import React from 'react';

const Login =(props)=> {
    const { 
email,
setEmail,
pass,
setPass,
asAcc,
setAsAcc,
handerLogin,
handerSignUp,
emailErr,
passErr
    }=props;
    return (
        <section className="login">
            
            <div className="loginContainer">
                <h2 className="loginHead">Welcome to movie Library </h2>
                <p className="loginSub">by K E KRISHNA PRASAD (MCA at BMSCE)</p>
               
                <label>Username</label>
                <input type="text" autoFocus required value={email} onChange={e=> setEmail(e.target.value)}/>
                <p className="errorMsg">{emailErr}</p>
                <label>Password</label>
                <input type="password" required value={pass} onChange={e => setPass(e.target.value)} />
                <p className="errorMsg">{passErr}</p>
                <div className="btnContainer">
                    {asAcc?(
                        <>
                        <button onClick={handerLogin}>Sign in</button>
                        <p>Don't have an account ? <span onClick={()=>setAsAcc(!asAcc)}>Sign up</span></p>
                        </>
                    ):(
                            <>
                                <button onClick={handerSignUp}>Sign up</button>
                                <p>Have an account ?<span onClick={() => setAsAcc(!asAcc)}>Sign in</span></p>
                            </>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Login
