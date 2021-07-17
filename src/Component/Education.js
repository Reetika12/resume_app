import React from 'react'

function Education() {
    return (
        <div className="card">
            <div className="card-content">
                <strong>Education</strong>
                <table className="striped">
                    <thead>
                        <tr>
                            <th>certificate</th>
                            <th>Date</th>
                            <th>Percentage</th>
                            <th>Institute</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>10th</td>
                            <td>2009</td>
                            <td>82%</td>
                            <td>Dav</td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <td>12th</td>
                            <td>2011</td>
                            <td>75%</td>
                            <td>guru nanak higher sc</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>btech</td>
                            <td>2016</td>
                            <td>73%</td>
                            <td>Amrapali institute</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>mtech</td>
                            <td>2019</td>
                            <td>86%</td>
                            <td>IIT(BHU)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Education
