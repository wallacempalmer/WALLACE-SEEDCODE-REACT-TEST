export const Test1 = () => {
  return (
    <div>
      <h4>Create a simple event planner</h4>
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
        <li>Know who is selected and who isn't</li>
        <li>Deselect people if they accidentally select them</li>
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
    </div>
  );
};
