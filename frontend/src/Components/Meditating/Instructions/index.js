import React, { useEffect, useState } from "react";

const MeditationInstructions = (props) => {

    // Data from the source database, JSON, etc......
    const [meditations, setMeditation] = useState ([

        {
            id: 1,
            name: 'Mantra Meditation',
            instructions: {1: 'Take 3 relaxed deep breaths....',
                            2: 'Close your eyes....',
                            3: 'See yourself on the beach or somewhere in nature with waterfalls in the forest.',
                            4: 'Softly repeat this manta: "I Am whole, calm, healthy, strong, caring, respectful, powerful and loving."'},
        },
        {
            id: 2,
            name: 'Progressive Relaxation',
            instructions: {1: 'Find yourself a quiet place to relax. This is your time...a time for complete and utter relaxation.',
                            2: 'Become aware of your breathing, and notice how your abdomen rises and falls with each breath.',
                            3: 'Take a long slow deep breath in through your nose, all the way down into your stomach. Hold the breath for just a moment, and then exhale through your mouth. Allow your breath to carry away all stress and tension as the air floods out of your lungs."',
                            4: 'Take another slow breath in through your nose. Fill your lungs completely. Hold it for a moment...and  release the breath through your mouth. Empty your lungs completely.',
                            5: 'Take a third deep breath in. Hold it for a moment, and then let it go.',
                            6: 'Feel your body now is more relaxed.',
                            7: 'During this relaxation, you will gently tense various muscles throughout your body.',
                            8: 'Just contract each muscle firmly but gently as you breathe in. At any time if you feel uncomfortable, you can simply relax and breathe normally.',
                            9: 'Bring your awareness to your feet and toes. Breathe in deeply through your nose, and as you do, gradually curl your toes down and tense the muscles in the soles of your feet.',
                            10: 'Hold your breath for just a few seconds and then release the muscles in your feet as you breathe out. Feel the tension in your feet wash away as you exhale. Notice how different your feet feel when tensed and when they are relaxed.',
                            11: 'Now let go of all the tension. Breathe in, raise your wrists towards your shoulders and tighten the muscles in your upper arms.',
                            12: 'Hold that breath and that contraction for just a moment...and then gently lower your arms and breathe all the way out.',
                            13: 'Feel how relaxing it is to release any tightness and to breathe away all the tension.'},

        },
        {
            id: 3,
            name: 'Breathing Meditation',
            instructions: {1: 'Gently breathe deeply in air into your nose ...',
                            2: 'feel your abdomen gently expand...',
                            3: 'breathe out of your mouth and let it all go.',
                            4: 'Gently repeat.'},
        }
    ])




        const meditation = props.meditation;

        


}

export default MeditationInstructions;