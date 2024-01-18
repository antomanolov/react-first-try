import { useState } from "react";

function MakeTable({ name, content = [], buttonType }) {
    return (
        <>
            <ul>
                <h1>{name}</h1>
                {content.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <Button type={buttonType} />
        </>
    );
}

function Button({ type }) {
    const [index, setIndex] = useState(0)
    
    let text = type === "submit" ? "Submit" : "Exit";
    function handleClick() {
        setIndex(index + 1)
    }
    return <button onClick={handleClick}>{text}</button>;
}



function App() {
    const listOfAnimals = ["Elephant", "Lion"];
    return (
        <div>
            <MakeTable
                name="Another table"
                content={listOfAnimals}
                buttonType="some"
            />
            <MakeTable
                name="Some table"
                content={listOfAnimals}
                buttonType="submit"
            />
        </div>
    );
}

function Person() {
    const [person, setPerson] = useState({ name: 'John', age: 100 });
  
    // BAD - Don't do this!
    // const handleIncreaseAge = () =>{
    //   // mutating the current state object
    //   person.age = person.age + 1;
    //   setPerson(person);
    // };
  
    // GOOD - Do this!
    const handleIncreaseAge = () =>{
      // copy the existing person object into a new object
      // while updating the age property
      setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
      setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
      
    };
    console.log(person)
    return (
      <>
        <h1>{person.name}</h1>
        <h2>{person.age}</h2>
        <button onClick={handleIncreaseAge}>Increase age</button>
      </>
    );
  }

  function CustomInput() {
    const [value, setValue] = useState('');
  
    return (
      <input
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
      />
    );
  }

  

  const initialItems = [
    { title: 'pretzels', id: 0 },
    { title: 'crispy seaweed', id: 1 },
    { title: 'granola bar', id: 2 },
  ];
  
  export default function Menu() {
    const [items, setItems] = useState(initialItems);
    const [selectedId, setSelectedId] = useState(0);
  
    const selectedItem = items.find(item =>
      item.id === selectedId
    );

    // this checks all items if the current item id is found the title is changed
    // BUT it's made NEW OBJECT! the object should not be MUTATED!
    function handleItemChange(id, e) {
      setItems(items.map(item => {
        if (item.id === id) {
          return {
            ...item,
            title: e.target.value,
          };
        } else {
          return item;
        }
      }));
    }
  
    return (
      <>
        <h2>What&apos;s your travel snack?</h2>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <input
                value={item.title}
                onChange={e => {
                  handleItemChange(item.id, e)
                }}
              />
              {' '}
              <button onClick={() => {
                setSelectedId(item.id);
              }}>Choose</button>
            </li>
          ))}
        </ul>
        <p>You picked {selectedItem.title}.</p>
      </>
    );
  }
  

export {App, Person, CustomInput, Menu}