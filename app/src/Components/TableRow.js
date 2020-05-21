import React, { useState, useEffect } from 'react'
import UseBaseContext from './../ContextApi/UseBaseContext'
import { updateApi, hideApi } from '../Utility/MockServerResponse'

export default function TableRow(props) {
    const { setData, getData } = UseBaseContext();
    const [list, setList] = useState([]);

    const upvote = (rowData) => {
        updateApi(rowData.objectID, rowData).then(()=>{
            setData(list, 'mainData');  
        })
    }

    const onHide = (id)=>{
        hideApi(id).then(()=>{
            setList(list.filter((inst)=>inst.objectID != id), 'mainData');  
        });
    }

    useEffect(() => {
        setList(props.data); 
    }, [props.data]);



    return (
        <>
            {
                list.map((instance) => (
                    <tr key={instance.created_at}>
                        <td>{instance.num_comments}</td>
                        <td>{instance.points}</td>
                        <td>
                            <a className="cursor-pointer" onClick={() => upvote(instance)}>
                                ^
                            </a>
                        </td>
                        <td className="space-children">
                            <span><b>{instance.title}</b></span>
                            <span>(<a target='_blank' href={instance.url}>{instance.url}</a>)</span>
                            <span>by <b>{instance.author}</b></span>
                            <span>{instance.created_at}</span>
                            <span className="cursor-pointer">
                                <a onClick={()=>onHide(instance.objectID)}>
                                    [ <b>hide</b> ]
                                </a>
                            </span>
                        </td>
                    </tr>
                ))
            }

        </>
    );
}