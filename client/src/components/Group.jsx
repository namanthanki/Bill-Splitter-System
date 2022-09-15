import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Group = () => {
    const [ inputList, setInputList ] = useState([{ groupMember: "" }]); 
    const [ groupMembers, setGroupMembers ] = useState([""]);

    const navigate = useNavigate();

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
    
      const handleAddClick = (e) => {
        setInputList([...inputList, { groupMember: "" }]);
        setGroupMembers([...groupMembers], [e.target.value] );
      }; 

      const submitHandler = async (e) => {
        e.preventDefault();
        console.log(groupMembers);
        const request = await fetch(`http://localhost:7803/api/group/create`, {
            method: "POST",
            headers: {
                'x-access-token': localStorage.getItem("token"),
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(
                {
                    groupMembers
                }
            )
        });

        const data = await request.json();
        if(data.status === "ok") {
            alert("Created Group Successfully!");
        } else {
            alert("Failed to Create Group!");
        }
      }

    return (
        <div className="group-container">
            <h1>Group</h1>
            <form method="POST" onSubmit={submitHandler}>
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
                <input type="submit" value="Create Group" />
            </form>
        </div>
    )
}

export default Group;