import React, { useContext } from 'react';
import { PageContext } from './PageContext';
import Search from './Search';
import Saved from './Saved';


const PageBody = () => {
    const [page, setPage] = useContext(PageContext);

    if(page==="search"){
        return (
            <Search />
        );
    } else if (page==="saved"){
        return (
            <Saved />
        );
    }
};

export default PageBody;