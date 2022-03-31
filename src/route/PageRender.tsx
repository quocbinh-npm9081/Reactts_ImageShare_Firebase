import { useParams } from 'react-router-dom';
import React from 'react';
const generatePage = (name: string) => {
    const page = () => require(`../pages/${name}`).default
    try {
        //  console.log(name);
        return React.createElement(page())
    } catch (error) {
        return <h2>Not Found</h2>
    }
}


const PageRender = () => {
    const { page, id }: any = useParams();
    let name = '';
    if (page !== undefined) {
        name = id ? `${page}/${id}` : `${page}`
    } else {
        name = 'home'
    }
    // console.log(name)
    return (
        generatePage(name)
    )
}

export default PageRender