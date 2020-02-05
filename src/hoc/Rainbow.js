import React from 'react'

const Rainbow = (WrappedComponent) =>{

        const colours = ['red', 'pink', 'orange', 'blue', 'green', 'yellow'];
        const randomColour = colours[ Math.floor(Math.random() * 5) ];
        const className = randomColour +'-text';
        //les props que recoient le wrappedComponent
        //Ci le component enveloppérecoit des props alors hada tahow les recoit
        return (props) => {
            return(
                <div className={className}>
                    <WrappedComponent/>
                </div>
            )
        }
}

export default Rainbow;