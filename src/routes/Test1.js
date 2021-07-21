export const Test1 = () => {
  return (
    <div>
      <h4>Make a form for creating events</h4>
      <p>
        You've been tasked with creating a simple form for creating events. The user needs to title the event and select who they want to invite.
        A dedicated designer will be handling the styling, so don't worry about making it pretty.
      </p>
      <p>
        On page load, fetch the list of invitable people from
        http://test.seedcode.com/getPeople using the javascript Fetch API.
        Create the event planner inside this page. Once the event is ready, POST
        the new event's data to http://test.seedcode.com/createEvent.
      </p>
      <h5>The user should be able to:</h5>
      <ul>
        <li>See if the initial data is loading</li>
        <li>Name their event</li>
        <li>See a full list of everyone who can be invited</li>
        <li>Select the people they want to invite</li>
        <li>Click a button to create the event</li>
        <li>
          Create more events after submitting an event, without having to
          refresh the page
        </li>
        <li>See if the data is submitting</li>
        <li>
          Know if there was an error creating the event, or fetching the initial
          data
        </li>
      </ul>
      <h5>
        The user should not be able to:
      </h5>
      <ul>
        <li>
          Create an event without a name
        </li>
        <li>Create an event without any invitees</li>
      </ul>

    </div>
  );
};
