import React from "react";

const arr = [
  {
    id: 1,
    topic: 'Hypertext Markup Language',
    about: `Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web
            browser.It can be assisted by technologies such as Cascading Style Sheets(CSS) and scripting languages such as
            JavaScript.`
  },
  {
    id: 2,
    topic: 'Cascading Style Sheet',
    about: `Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a
            markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and
            JavaScript.`
  },
  {
    id: 3,
    topic: 'JavaScript',
    about: `JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript
            specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket
            syntax, dynamic typing, prototype-based object-orientation, and first-class functions.`
  }
];

class ListItems extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentTab: null,
    };
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(id) {
    const num = Number(event.target.id);
    this.setState({currentTab: id});
   if(this.state.currentTab === num){
     this.setState({
       isClicked: false,
      currentTab: null
    });
   } else {
     this.setState({
       currentTab: id
     });
   }
  }

  render() {
    const list = this.props.list;
    const toggle = this.state.currentTab ? 'view' : 'hidden';
      const listItems = list.map((lists) =>
      <li key={lists}>
        <div class="full">
          <h1 id={lists.id} onClick={ () => this.handleClick(lists.id)}>{lists.topic}</h1>
            {this.state.currentTab === lists.id  &&
         (<p className={toggle}>{lists.about}</p>)
         }
        </div>
      </li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }
}

export default class Accordion extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (<div class='container'>
              <div class='row'></div>
                <div class='full'>
                 <ListItems list={arr} />
               </div>
          </div>)

  }
}
