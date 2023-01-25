import React from 'react';
import Main from '../components/Main';
import Row from '../components/Row';
import requests from '../Request';
const Home = () => {
    return (
        <div>
            <Main/>
            <Row rowId='1' fetchURL={requests.requestUpcoming} title='UpComing'/>
            <Row rowId='2' fetchURL={requests.requestPopular} title='Popular'/>
            <Row rowId='3' fetchURL={requests.requestTrending} title='Trending'/>
            <Row rowId='4' fetchURL={requests.requestUpcoming} title='Top Rated'/>
            <Row rowId='5' fetchURL={requests.requestHorror} title='Horror'/>
        </div>
    );
}

export default Home;
