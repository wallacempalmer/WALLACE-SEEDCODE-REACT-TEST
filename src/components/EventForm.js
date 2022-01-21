import '../App.css';
import React, { useState, useEffect } from 'react';

/*
 * event form - user enters event and selects who they want to invite
 * 1. on page load fetch the list of invitable people
 * 2. create the event planner
 *      - X - see if initial data is loading 
 *      - X - name their event
 *      - X - see a full list of everone who can be invited
 *      - X - click a button to create the event 
 *      - X - create more events after submitting an event, without having to refresh the page
 *      - X - see if the data is submitting
 *      - X - know if there was an error creating the event, or fetching the initial data
 * 3. post the event data to http://test.seedcode.com/createEvent.
 */

const EventForm = (props) => {
    //state
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [people, setPeople] = useState(null);
    const [eventName, setEventName] = useState('');
    
    //on page load fetch the list of invitable people
    useEffect(() => { 
        getPeople()
        setError(null)
        setSuccess(null)
    },[])

    /*
     * http functions
     */
    const getPeople = async () => {
        setIsLoading(true)
        console.log('Fetch Loading...')
        await fetch('http://test.seedcode.com/getPeople')
            .then(response => response.json())
            .then(data => {
                setPeople(data)
                setIsLoading(false)
                console.log('Fetch Complete')
            }).catch(e => {
                console.log('Fetch Failed: ', e.message)
                setError(e.message)
                setSuccess(null)
                setIsLoading(false) 
            })
    }

    const postEvent = async () => {
        let guests = []
        let didSelectGuest = false;

        //add guests 
        people.forEach(person => {
            if (person.isChecked) {
                guests.push({name:  person.name})
                didSelectGuest = true;
            }
        });
        
        //check for guests
        if(!didSelectGuest) {
            alert('You need to select guests');
            return;
        }

        setIsLoading(true)

        const options = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({ 
                event: eventName, 
                guests 
            })
        }

        //post request
        await fetch('http://test.seedcode.com/createEvent', options)
            .then(response => {
                console.log('response: ', response)
                //reset data
                setPeople(null)
                setEventName('')
                setError(null)
                setIsLoading(false) 
                setSuccess('Event Created')
                //reload people
                getPeople()
            }).catch(e => {
                console.log('post error: ', e.message)
                setError(e.message)
                setSuccess(null)
                setIsLoading(false) 
            });
    }

    /*
     * form functions
     */

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!eventName) {
            alert('Add Event Name')
            return;
        }
        //remove any error messages
        if (success) {
            setSuccess(null)
        }
        if (error) {
            setError(null)
        }

        //http post
        postEvent()
    }

    const handleChecboxChange = (event, data) => {
        const person = data.person;
        const isChecked = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        
        //update people array with new checkbox value
        let newArr = [...people];
        newArr[person.id] = {
            id: person.id, 
            name: person.name, 
            isChecked: isChecked
        }
        setPeople(newArr)

    }

    //show load spinner
    if (isLoading) {
        return (
            <div className='loader'></div> 
        )
    }

    return (
        <div>  
            <h2>Event Form</h2>
            <form onSubmit={handleSubmit}>
                {/* name event */}
                <div>
                    <label> Event Name: </label>
                    <input 
                        type='text' 
                        name='event-name' 
                        value={eventName} 
                        onChange={event => setEventName(event.target.value)} />
                </div>
                <br />
                {/* invite list */}
                <div>
                    <div className='inviteLabel'>
                        <label> Invite Guests: </label> 
                    </div>
                    { people && (
                        people.map(person => {
                            return (
                                <div className='guestContainer' key={person.id}>
                                    {person.name}
                                    <input 
                                        type='checkbox' 
                                        checked={(person.isChecked) ? true : false}
                                        onChange={(event) => handleChecboxChange(event, { person })}
                                        />
                                </div>
                            )
                        }))}
                </div>
                <br />
                <input type='submit' value='Submit' />
            </form>

            {/*  show http errors */}
            {error && (
                <p className='errorMsg'>Error: {error}</p>
            )}
            {/*  show http success */}
            {success && (
                <p className='successMsg'>Success: {success}</p>
            )}
        </div>
    )
}

export default EventForm;