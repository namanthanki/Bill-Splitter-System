import { useState } from "react";
const Group = () => {
    const [ inputList, setInputList ] = useState([{ groupMember: "" }]); 

    const handleInputChange = (e, idx) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[idx][name] = value;
        setInputList(list);
      };
    
      const handleRemoveClick = (idx) => {
        const list = [...inputList];
        list.splice(idx, 1);
        setInputList(list);
      };
    
      const handleAddClick = () => {
        setInputList([...inputList, { groupMember: "" }]);
      }; 

    return (
        <div className="group-container">
            <h1>Group</h1>
            <form>
            {
                inputList.map(
                    (value, idx) => {
                        return (
                            <div className="input-box">
                                <input 
                                  name="groupMember"
                                  placeholder="Enter Member Name"
                                  value={value.memberName}
                                  onChange={e => handleInputChange(e, idx)}
                                  type="text" 
                                />

                                <div className="btn-box">
                                    {
                                        inputList.length !== 1 && 
                                        <button
                                            className="btn"
                                            onClick={() => handleRemoveClick(idx)}
                                        >
                                            Remove
                                        </button>
                                    }
                                    { 
                                        inputList.length - 1 === idx && 
                                        <button 
                                            onClick={handleAddClick}
                                        >
                                            Add
                                        </button>
                                    }
                                </div>
                            </div>
                        )
                    }
                )
            }
            </form>
        </div>
    )
}

export default Group;