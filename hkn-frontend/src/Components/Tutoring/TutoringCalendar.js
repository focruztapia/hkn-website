import React, { Component } from 'react';

import WeekCalendar, { Event } from 'react-week-calendar';
import moment from 'moment';
import './calendarStyle.css';
import './Tutoring.scss';
import TutoringEvent from './TutoringEvent';

const M = 1;
const T = 2;
const W = 3;
const R = 4;
const F = 5;

export default class TutoringCalendar extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            lastUid: 4,
               selectedIntervals: [
                {uid: 1, start: this.createMoment({ h: 12, m: 0, d: M}), end: this.createMoment({ h: 13, m: 0, d: M}), value: "Andrew, Ben", highlighted: []}, 
                {uid: 2, start: this.createMoment({ h: 12, m: 0, d: T}), end: this.createMoment({ h: 13, m: 0, d: T}), value: "Marie, Ben", highlighted: []}, 
                {uid: 3, start: this.createMoment({ h: 12, m: 0, d: W}), end: this.createMoment({ h: 13, m: 0, d: W}), value: "Brianna, Zefyr", highlighted: []}, 
                {uid: 4, start: this.createMoment({ h: 12, m: 0, d: R}), end: this.createMoment({ h: 13, m: 0, d: R}), value: "Brianna, Zefyr", highlighted: []}, 
                {uid: 5, start: this.createMoment({ h: 12, m: 0, d: F}), end: this.createMoment({ h: 13, m: 0, d: F}), value: "Achinthya, Sahil", highlighted: []}, 
                {uid: 6, start: this.createMoment({ h: 13, m: 0, d: M}), end: this.createMoment({ h: 14, m: 0, d: M}), value: "Andrew, Achinthya", highlighted: []}, 
                {uid: 7, start: this.createMoment({ h: 13, m: 0, d: T}), end: this.createMoment({ h: 14, m: 0, d: T}), value: "Marie", highlighted: []}, 
                {uid: 8, start: this.createMoment({ h: 13, m: 0, d: W}), end: this.createMoment({ h: 14, m: 0, d: W}), value: "Stan", highlighted: []}, 
                {uid: 9, start: this.createMoment({ h: 13, m: 0, d: R}), end: this.createMoment({ h: 14, m: 0, d: R}), value: "Justin", highlighted: []}, 
                {uid: 10, start: this.createMoment({ h: 13, m: 0, d: F}), end: this.createMoment({ h: 14, m: 0, d: F}), value: "Justin", highlighted: []}, 
                {uid: 11, start: this.createMoment({ h: 14, m: 0, d: M}), end: this.createMoment({ h: 15, m: 0, d: M}), value: "Beryl", highlighted: []}, 
                {uid: 12, start: this.createMoment({ h: 14, m: 0, d: T}), end: this.createMoment({ h: 15, m: 0, d: T}), value: "Evelyn", highlighted: []}, 
                {uid: 13, start: this.createMoment({ h: 14, m: 0, d: W}), end: this.createMoment({ h: 15, m: 0, d: W}), value: "Stan", highlighted: []}, 
                {uid: 14, start: this.createMoment({ h: 14, m: 0, d: R}), end: this.createMoment({ h: 15, m: 0, d: R}), value: "Kayla", highlighted: []}, 
                {uid: 15, start: this.createMoment({ h: 14, m: 0, d: F}), end: this.createMoment({ h: 15, m: 0, d: F}), value: "Anthony", highlighted: []}, 
                {uid: 16, start: this.createMoment({ h: 15, m: 0, d: M}), end: this.createMoment({ h: 16, m: 0, d: M}), value: "Beryl", highlighted: []}, 
                {uid: 17, start: this.createMoment({ h: 15, m: 0, d: T}), end: this.createMoment({ h: 16, m: 0, d: T}), value: "Evelyn", highlighted: []}, 
                {uid: 18, start: this.createMoment({ h: 15, m: 0, d: W}), end: this.createMoment({ h: 16, m: 0, d: W}), value: "Kenneth", highlighted: []}, 
                {uid: 19, start: this.createMoment({ h: 15, m: 0, d: R}), end: this.createMoment({ h: 16, m: 0, d: R}), value: "Kayla", highlighted: []}, 
                {uid: 20, start: this.createMoment({ h: 15, m: 0, d: F}), end: this.createMoment({ h: 16, m: 0, d: F}), value: "Anthony", highlighted: []}, 
                {uid: 21, start: this.createMoment({ h: 16, m: 0, d: M}), end: this.createMoment({ h: 17, m: 0, d: M}), value: "Rafael", highlighted: []}, 
                {uid: 22, start: this.createMoment({ h: 16, m: 0, d: T}), end: this.createMoment({ h: 17, m: 0, d: T}), value: "Dylan", highlighted: []}, 
                {uid: 23, start: this.createMoment({ h: 16, m: 0, d: W}), end: this.createMoment({ h: 17, m: 0, d: W}), value: "Kenneth", highlighted: []}, 
                {uid: 24, start: this.createMoment({ h: 16, m: 0, d: R}), end: this.createMoment({ h: 17, m: 0, d: R}), value: "Gillian", highlighted: []}, 
                {uid: 25, start: this.createMoment({ h: 16, m: 0, d: F}), end: this.createMoment({ h: 17, m: 0, d: F}), value: "Natalie", highlighted: []}, 
                {uid: 26, start: this.createMoment({ h: 17, m: 0, d: M}), end: this.createMoment({ h: 18, m: 0, d: M}), value: "Robert", highlighted: []}, 
                {uid: 27, start: this.createMoment({ h: 17, m: 0, d: T}), end: this.createMoment({ h: 18, m: 0, d: T}), value: "Nico", highlighted: []}, 
                {uid: 28, start: this.createMoment({ h: 17, m: 0, d: W}), end: this.createMoment({ h: 18, m: 0, d: W}), value: "Abbas", highlighted: []}, 
                {uid: 29, start: this.createMoment({ h: 17, m: 0, d: R}), end: this.createMoment({ h: 18, m: 0, d: R}), value: "Gillian", highlighted: []}, 
                {uid: 30, start: this.createMoment({ h: 17, m: 0, d: F}), end: this.createMoment({ h: 18, m: 0, d: F}), value: "Natalie", highlighted: []}, 
                {uid: 31, start: this.createMoment({ h: 18, m: 0, d: M}), end: this.createMoment({ h: 19, m: 0, d: M}), value: "Robert", highlighted: []}, 
                {uid: 32, start: this.createMoment({ h: 18, m: 0, d: T}), end: this.createMoment({ h: 19, m: 0, d: T}), value: "Nico", highlighted: []}, 
                {uid: 33, start: this.createMoment({ h: 18, m: 0, d: W}), end: this.createMoment({ h: 19, m: 0, d: W}), value: "Abbas", highlighted: []}, 
                {uid: 34, start: this.createMoment({ h: 18, m: 0, d: R}), end: this.createMoment({ h: 19, m: 0, d: R}), value: "Cody", highlighted: []}, 
                {uid: 35, start: this.createMoment({ h: 18, m: 0, d: F}), end: this.createMoment({ h: 19, m: 0, d: F}), value: "Cody", highlighted: []}]
        }
    }

    updateHighlighted=(uids)=>{
        var changedIntervals=this.state.selectedIntervals; 
        for(const[key,value] of Object.entries(changedIntervals)){
            changedIntervals[key].highlighted = uids; //update which ones should be highlighted
        }
        this.setState({selectedIntervals: changedIntervals}); //update the state
    }

    createMoment = (props) => {
        const monday = this.getMonday();
        const adjust = props.d - 1;
        const res = monday.set('hour', props.h).set('minute', props.m).add(adjust, 'd')
        return res;
    }

    getMonday = () => {
        const today = moment().weekday();
        if (today === 1) {
            return today;
        }
        const adjust = 1 - today;
        return moment().add(adjust, 'days').startOf('day');
    }

    render(){
        return(
            <div className="TutoringCalendar">
               
                <WeekCalendar 
                    scaleUnit={60}
                    startTime={moment({h: 12, m: 0})}
                    endTime={moment({h: 18, m: 30})}
                    dayFormat='dddd'
                    scaleFormat='h:mm A'
                    firstDay={this.getMonday()}
                    numberOfDays="5"
                    cellHeight={80}
                    selectedIntervals={this.state.selectedIntervals}
                    eventComponent={TutoringEvent}
                    eventSpacing={0}
        />
            
            </div>
        )
    };
}