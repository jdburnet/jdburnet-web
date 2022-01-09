import React from 'react';

const listMaker = (items) => items.map((item) => <li key={item}>{item}</li>);

export default listMaker;
