import React, {FC, useState} from 'react';
import './App.css';
import Select from '../select/Select';
import {IAnimal} from '../../models';
import AnimalDetails from '../animal-details/AnimalDetails';

const data = require('../../data/data.json');

const App: FC = () => {
    const names = data.map((item: IAnimal) => item.name)
    const [activeAnimal, setActiveAnimal] = useState<IAnimal | null>(null)
    const setActiveAnimalByName = (name: string) => {
        setActiveAnimal(data.filter((item: IAnimal) => item.name === name)[0])
    }
    return (
        <div className="App">
            <Select names={names}
                    setActiveAnimal={setActiveAnimalByName}
                    activeAnimalName={activeAnimal?.name}/>
            <AnimalDetails animal={activeAnimal}/>
        </div>
    );
}

export default App;
