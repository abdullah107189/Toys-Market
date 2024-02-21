import React from 'react';

const ToysTableRow = ({ toyData, index }) => {
    const { _id, photo, toy_Name, user_email, user_name, category, price, reating, quantity, description } = toyData;

    // ----------------TODO :------------------
    const handleView = (id) => {
        console.log(id)
    }
    return (
        <tr>
            <th>
                {index + 1}
            </th>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-24 h-24">
                        <img className='' src={photo} alt={toy_Name} />
                    </div>
                </div>
            </td>
            <td>
                <p>{toy_Name}</p>
            </td>
            <td>
                <p>{user_name}</p>
            </td>
            <td>
                <p>{category}</p>
            </td>
            <td>
                <p>$ {price}</p>
            </td>
            <td>
                <p>{quantity}</p>
            </td>
            <td>
                <button onClick={() => handleView(_id)} className='font-bold btn'>View</button>
            </td>
        </tr>
    );
};

export default ToysTableRow;