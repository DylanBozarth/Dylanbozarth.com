import React from 'react';

import Particles from 'react-particles-js';


export const Stars = () => (

    <Particles className="backgroundclass"
    params={{
	    "particles": {
	        "number": {
	            "value": 240,
	            "density": {
	                "enable": true,
	                "value_area": 2000
	            }
	        },
	        "line_linked": {
	            "enable": false,
	            "opacity": 0.05
	        },
	        "move": {
	            "direction": "right",
	            "speed": 1
	        },
	        "size": {
	            "value": 2.5
	        },
	        "opacity": {
	            "anim": {
	                "enable": true,
	                "speed": 1,
	                "opacity_min": 0.05
	            }
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onclick": {
	                "enable": true,
	                "mode": "push"
	            }
	        },
	        "modes": {
	            "push": {
	                "particles_nb": 1
	            }
	        }
	    },
	    "retina_detect": true
	}} />


)