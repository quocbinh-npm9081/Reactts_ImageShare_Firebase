import React from 'react'

interface IProps {
    errors: string[]
}

const Error: React.FC<IProps> = ({ errors }) => {
    return (
        <ul>
            {
                errors.map((error, index) => (
                    <li key={index}>
                        {
                            error
                        }
                    </li>
                ))
            }
        </ul>
    )
}

export default Error