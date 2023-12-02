import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return ( <
        Typewriter options = {
            {
                strings: [
                    "Begin Your Mental Health Empowerment",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 25,

            }
        }
        />
    );
}

export default Type;