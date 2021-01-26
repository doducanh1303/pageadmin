import React from 'react';
import Particles from 'react-particles-js';

function Backgroud() {
    return (
        <div>
            <Particles
                params={{
                    "particles": {
                        "line_linked": {
                            "color": "#FFFFFF"
                        },
                        "number": {
                            "value": 150
                        },
                        "size": {
                            "value": 5
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": false,
                                "mode": "repulse"
                            }
                        }
                    }
                }}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "1000px",

                }}
            />
        </div>
    )
}
export default Backgroud;