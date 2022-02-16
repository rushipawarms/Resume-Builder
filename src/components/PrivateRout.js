import React from 'react'
import { connect } from 'react-redux'
import { isEmpty, isLoaded } from 'react-redux-firebase'
import { Redirect, Route } from 'react-router-dom'

function PrivateRout({auth,component:Component,...restProps}) {
  return (
   <Route
       {...restProps} render={(Props)=>(
           isLoaded(auth) && !isEmpty(auth)?
           <Component {...Props} />:<Redirect to='/'/>
       )

       }
   />
  )
}
const mapStateToProps=(state)=>{
    return{ 
        auth:state.firebase.auth
    }

}
export default connect(mapStateToProps) (PrivateRout)