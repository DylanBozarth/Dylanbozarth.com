import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { Homepage } from '../pages/homepage';


export const Slider = () => (
    <AwesomeSlider >
    <div><Homepage /></div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    </AwesomeSlider>
)