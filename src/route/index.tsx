import { Routes, Route } from "react-router-dom";
import PageRender from "./PageRender";
const index = () => {
    return (
        <Routes>
            <Route path="/:page/:id" element={<PageRender />} />
            <Route path="/:page" element={<PageRender />} />
            <Route path="/" element={<PageRender />} />
        </Routes>)
}

export default index