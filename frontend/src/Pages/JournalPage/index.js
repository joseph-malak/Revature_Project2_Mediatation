
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';
import NavbarLogged from '../../Components/NavbarLogged';
import { useSelector } from 'react-redux';

const JournalPage = () => {

    const user = useSelector(state => state.user);

    const [journals, setJournals]  = useState([]);

// const journalHandler = (e) => {
//     e.preventDefault();
//     axios.get("http://localhost:9001/journals", user.id)
//     .then(response => setJournals(response.data))
//     .catch(error => {
//         console.error(error);
//     })
// };

    console.log("user.id ====================");
    console.log(user.id);
    useEffect(() => {
        const source = `http://localhost:9001/journals/${user.id}`;
        console.log(source);
        axios.post(`http://localhost:9001/journals/${user.id}`)
        // .then(output => console.log(output))
        .then((response) => setJournals(response.data))
        .catch(error => console.error(error));
    });


    return (
        <div>
            <NavbarLogged />

            <div className='journalwrapper text-justify table-bordered table-primary' >
                <table class="table table-striped ">
                    <thead>
                        <tr>
                        <th scope="col-xs-1">Journal Entry</th>
                        </tr>
                    </thead>
                    <tbody>
                        {journals.map(journal => <tr>{journal.journalnotes}</tr> )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default JournalPage
