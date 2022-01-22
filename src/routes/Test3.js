import '../App.css';

export const Test3 = () => {

  const comments = [
    {
      text: "Sure Brian, what's the issue?",
      timestamp: "2021-07-21T01:26:03+0000",
      author: "Sandra Johnson",
      id: "bf90fabb-d736-4354-a2ec-2a8675e5e2d9",
      avatarColor: "#fdd835",
    },
    {
      text: "That worked! Thank you Alice!",
      timestamp: "2021-07-21T02:43:25+0000",
      author: "Brian Dodd",
      id: "f7d247dd-e227-4fa3-988c-e953138ca6a5",
      avatarColor: "#43a047",
    },
    {
      text: "I'm having trouble with my computer, can anyone help me with it?",
      timestamp: "2021-07-20T12:08:03+0000",
      author: "Brian Dodd",
      id: "2eb94419-8a98-47ab-8d2f-f54ea08d7a6b",
      avatarColor: "#43a047",
    },
    {
      text: "Did you try turning it off and turning it back on again?",
      timestamp: "2021-07-21T02:40:07+0000",
      author: "Alice Chu",
      id: "92171b81-2b6e-4d50-b336-782f9cd709a0",
      avatarColor: "#1e88e5",
    },
  ];

  return (
    <div>
      <h4>Style a list of comments</h4>
      <p>
        This list of comments isn't ready for production, since it's completely
        unstyled. Make the following changes without modifying the data or the Test3 component.
      </p>
      <ul>
        <li>
          The list should have a solid black border and 20px of space between
          the border and the comments, on every side
        </li>
        <li>
          Each comment should have 15 pixels of space in between it and the next
          comment
        </li>
        <li>
          Each comment should have a light gray border, a 4 pixel border radius,
          and 10px of padding
        </li>
        <li>
          Add a circular user avatar to each comment to the left of the author's
          name and the text of the comment
        </li>
        <li>
          The avatar should have the background color specified in the comment's
          data, and should contain the user's first and last initial in
          uppercase
        </li>
        <li>The comments should be in descending order by their timestamp</li>
      </ul>
      <CommentList comments={comments} />
    </div>
  );
};


const CommentList = (props) => {

  //convert timestamp to integer and sort in descending order
  let comments = props.comments.sort((a,b) => new Date(b.timestamp).getTime() -  new Date(a.timestamp).getTime())

  //format date
  const formatDate = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';

    hours = hours % 12;
    hours = hours ? hours : 12; 
    minutes = minutes < 10 ? '0'+minutes : minutes;
    let strTime = hours + ':' + minutes + ' ' + ampm;

    return (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
  }

  return (
    <div className="commentList">
      {comments.map((c) =>  { 
        const date = new Date(c.timestamp);
        
          return (
            <Comment 
              key={c.id} 
              text={c.text} 
              author={c.author} 
              bgColor={c.avatarColor}
              timestamp={formatDate(date)} />
          )
        }
      )}
    </div>
  );
};


const Comment = (props) => {
  //split name and grab initials of first and last
  let names = props.author.split(' ');
  let initials = names[0].charAt(0) + names[1].charAt(0)

  return (
    <div className="comment">
       {/* avatar */}
      <div className="avatar" style={{backgroundColor: props.bgColor}}>
        <h3>{initials}</h3>
      </div>
      {/* comment info */}
      <div className="commentData">
        <div className="author">{props.author}</div>
        <div>{props.text}</div>
        <div className="timestamp">{props.timestamp}</div>
      </div>
    </div>
  );
};
