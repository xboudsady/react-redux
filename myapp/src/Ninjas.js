import React, { Component } from 'react';

// This is a UI based component, so we can use a function component, we're not storing state
const Ninjas = ({ninjas}) => {
    // const ninjaList = ninjas.map(ninja => {
    //     if (ninja.age > 20) {
    //         return (
    //             <div className="ninja" key={ninja.id}>
    //                 <div>Name: {ninja.name}</div>
    //                 <div>Age: {ninja.age}</div>
    //                 <div>Belt: {ninja.belt}</div>
    //             </div>
    //         )
    //     } else {
    //         return null
    //     }
    // });

    const ninjaList = ninjas.map(ninja => {
        return ninja.age > 20 ? (
            <div className="ninja" key={ninja.id}>
                <div>Name: {ninja.name}</div>
                <div>Age: {ninja.age}</div>
                <div>Belt: {ninja.belt}</div>
            </div>
        ) : null
    })

    return(
        <div className="ninja-list">
            { ninjaList }
        </div>
    )
    
}

export default Ninjas;