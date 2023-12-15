import React from  "react";
function IfCondition (props){

        const isLoggedIn = props.isLoggedIn;
    
        let greeting;
        if (isLoggedIn) {
            greeting = <h1>Welcome back, User!</h1>;
        } else {
            greeting = <h1>Please sign in</h1>;
        }
    
        return (
            <div>
                {greeting}
            </div>
        );
  
}
export default IfCondition ;
