import React, { useEffect, useState } from 'react';
import { createStore } from 'redux';
import { useSelector } from 'react-redux';
import mantrasimg from '../mantra.png';
import breatheimg from '../breathing.png';
import relaximg from '../progressiverelaxation.png';
import {combineReducers} from 'redux';


// initial state can have multiple fields but not multiple store.


const user = {
    id: 0,
    name: '',
    email: 'YYYyyyyyyeeessssssssssEmailll',
    password : 'WoooohhhhhhoooooooooooPassword'
}

const initialState = {
    user
    //  = {
    //     id: 0,
    //     name: '',
    //     email: '',
    //     password : ''
    // }
};

        // const RelaxAction = () => {
        //     return {
        //         type: 'relax'
        //     }
        // }

        // const BreatheAction = () => {
        //     return {
        //         type: 'breathe'
        //     }
        // }

        // const MantraExport = () => {
        //     return {
        //         type: 'mantra'
        //     }
        // }

        // reducer function 
    const AllReducers = (state=initialState, action) => {

        console.log("AllReducers ========== ")
        console.log(action.type);

        console.log("state.user ========== ")
        console.log(state.user);

        // if (action.user) {
            return {
                user: action.type
            };
        // }

            // user: state.user;

            // if (action.type === "decrement") {
            //     return {
            //         counter: state.counter - 1,
            //     };
            // }

            return state;

        // switch(action.type){
        //     case 'breathe':
        //         return ({
        //             id: 3,
        //             name: 'Breathing Meditation',
        //             image: breatheimg,
        //             shortDescription: 'Brief description',
        //             longDiscription: 'this is a long and detailed discription',
        //             timespend: 20,
        //             link: '/',
        //             instructions: [{1: 'Gently breathe deeply in air into your nose ...',
        //                             2: 'feel your abdomen gently expand...',
        //                             3: 'breathe out of your mouth and let it all go.',
        //                             4: 'Gently repeat.'}]
        //         })

        //         case 'mantra':
        //             return ({
        //                 id: 1,
        //                 name: 'Mantra Meditation',
        //                 image: mantrasimg,
        //                 shortDescription: 'Meant for relaxation and to increase focus through repetition of a mantra',
        //                 longDiscription: 'Mentra meditation is the reciting of a word or phrase. This can be done either outloud or in the mind.',
        //                 timespend: 30,
        //                 link: '/MeditationDetailPage',
        //                 instructions: [{id: 1, instruct: 'Take 3 relaxed deep breaths....'},
        //                             {id: 2, instruct: 'Close your eyes....'},
        //                             {id: 3, instruct: 'See yourself on the beach or somewhere in nature with waterfalls in the forest.'},
        //                             {id: 4, instruct: 'Softly repeat this manta: "I Am whole, calm, healthy, strong, caring, respectful, powerful and loving."'}]
        //             })

        //         case 'relax':
        //             return ({
        //                 id: 2,
        //                 name: 'Progressive Relaxation',
        //                 image: relaximg,
        //                 shortDescription: 'Brief description',
        //                 longDiscription: 'this is a long and detailed discription',
        //                 timespend: 55,
        //                 link: '/MeditationDetailPage',
        //                 instructions: [{id: 1, instruct: 'Find yourself a quiet place to relax. This is your time...a time for complete and utter relaxation.'},
        //                     {id: 2, instruct: 'Become aware of your breathing, and notice how your abdomen rises and falls with each breath.'},
        //                     {id: 3, instruct: 'Take a long slow deep breath in through your nose, all the way down into your stomach. Hold the breath for just a moment, and then exhale through your mouth. Allow your breath to carry away all stress and tension as the air floods out of your lungs."'},
        //                     {id: 4, instruct: 'Take another slow breath in through your nose. Fill your lungs completely. Hold it for a moment...and  release the breath through your mouth. Empty your lungs completely.'},
        //                     {id: 5, instruct: 'Take a third deep breath in. Hold it for a moment, and then let it go.'},
        //                     {id: 6, instruct: 'Feel your body now is more relaxed.'},
        //                     {id: 7, instruct: 'During this relaxation, you will gently tense various muscles throughout your body.'},
        //                     {id: 8, instruct: 'Just contract each muscle firmly but gently as you breathe in. At any time if you feel uncomfortable, you can simply relax and breathe normally.'},
        //                     {id: 9, instruct: 'Bring your awareness to your feet and toes. Breathe in deeply through your nose, and as you do, gradually curl your toes down and tense the muscles in the soles of your feet.'},
        //                     {id: 10, instruct: 'Hold your breath for just a few seconds and then release the muscles in your feet as you breathe out. Feel the tension in your feet wash away as you exhale. Notice how different your feet feel when tensed and when they are relaxed.'},
        //                     {id: 11, instruct: 'Now let go of all the tension. Breathe in, raise your wrists towards your shoulders and tighten the muscles in your upper arms.'},
        //                     {id: 12, instruct: 'Hold that breath and that contraction for just a moment...and then gently lower your arms and breathe all the way out.'},
        //                     {id: 13, instruct: 'Feel how relaxing it is to release any tightness and to breathe away all the tension.'}]
        //             })

        //         default:
            // }
                        
            // const allReducers = combineReducers({
            //     // BreatheReducer,
            //     // MantraReducer,
            //     // RelaxReducer
            // });
    };


const store = createStore(AllReducers)
export default store
