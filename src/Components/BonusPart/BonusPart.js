import React from 'react';

const BonusPart = () => {
    return (
        <div>
            <div class="container p-4 mt-4">
                <h2 class="text-center text-primary">How React Works?</h2>
                <p class="text-justify">

                    React allows you to re-construct your DOM in JavaScript and only push changes to the DOM that have actually happened.We don't want React to brute-force its way through by maintaining a replica of the DOM using virtual DOM in JavaScript and diffing it to any changes before applying it to the real DOM. In fact, React performs a sloppy reconciliation. React would make the fewest modifications necessary, attempting to reuse elements, properties, and even styles whenever possible.
                </p>
            </div>
            <div class="container p-4 mt-4">
                <h2 class="text-center text-primary">How useState Works?</h2>
                <p class="text-justify">

                    useState is a Hook (function) that enables state variables to be used in functional components.
                    React keeps track of these state variables and makes sure they're up to current on subsequent component re-renders.
                    It returns a pair of values: the current state and an update function.It lets us keep local state in a function component.
                </p>
            </div>
        </div>
    );
};

export default BonusPart;