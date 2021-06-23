import React, { useState, useEffect } from 'react'





const AgeCounter = () => {
    const [ age, setAge ] = useState(20);
    useEffect(() => {
        // console.log('useEffect hook ran - age', age);
    }, [age]);
    return (
        <div>
            <button onClick={() => setAge( age +1)}> {age} + </button> 
        </div>
    )
}

export default AgeCounter
