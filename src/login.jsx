import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Login = () => {
    return (
        <div>
            {<Header />}
            <div className="center">

                <form>

                    <div class="form-outline mb-4">
                        <input type="email" id="form2Example1" class="form-control" />
                        <label class="form-label" for="form2Example1">Email address</label>
                    </div>


                    <div class="form-outline mb-4">
                        <input type="password" id="form2Example2" class="form-control" />
                        <label class="form-label" for="form2Example2">Password</label>
                    </div>


                    


                    <button type="button" class="btn btn-primary btn-dark mb-4">Sign in</button>


                    <div class="text-center">
                        <p>Not a member? <a href="#!">Register</a></p>

                    </div>
                </form>
            </div>

            {<Footer />}
        </div>
    )
}

export default Login
