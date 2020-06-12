import React from 'react';

import Particles from 'react-particles-js';


export const Stars = () => (

    <Particles className="backgroundclass"
    params={{
	    "particles": {
	        "number": {
	            "value": 190,
	            "density": {
	                "enable": true,
	                "value_area": 2000
	            }
	        },
	        "line_linked": {
	            "enable": true,
	            "opacity": 0.02
	        },
	        "move": {
	            "direction": "right",
	            "speed": 0.18
	        },
	        "size": {
	            "value": 1.9
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