import React, {FC} from 'react';
import {IAnimal} from '../../models';
import animalDetailsStyles from './AnimalDetails.module.css'

interface IAnimalDetails {
    animal: IAnimal | null
}

const AnimalDetails: FC<IAnimalDetails> = ({animal}) => {
    let avatarPath = ''
    if (animal?.type === 'cat') {
        avatarPath = 'https://yt3.ggpht.com/a/AATXAJxrqonEaPIg_ODQnc14MUpe_4lS_O9JYn1MB-qq=s900-c-k-c0xffffffff-no-rj-mo'
    } else {
        avatarPath = 'https://yt3.ggpht.com/a/AATXAJz2bRaN3BU6MuqLpaGDIujlABZpcRG463dcqQ=s900-c-k-c0xffffffff-no-rj-mo'
    }
    const features = animal?.features.map(item => (<span className={animalDetailsStyles.description_value}
                                                         key={item}>
                                                                {item}
                                                            </span>))
    return (
        <div className={animalDetailsStyles.wrapper}>
            {!animal && (
                <p className={animalDetailsStyles.empty}>Пока вы никого не выбрали</p>
            )}
            {animal && (
                <>
                    <img src={avatarPath} alt="avatar"/>
                    <h2 className={animalDetailsStyles.title}>{animal.name}</h2>
                    <p className={animalDetailsStyles.description_title}>
                        Возраст:
                        <span className={animalDetailsStyles.description_value}>
                            {animal.age}
                        </span>
                    </p>
                    <p className={animalDetailsStyles.description_title}>
                        Пол:
                        <span className={animalDetailsStyles.description_value}>
                           {animal.gender === 'female' ? 'Девочка' : 'Мальчик'}
                        </span>
                    </p>
                    <p className={animalDetailsStyles.description_title}>
                        Породистая:
                        <span className={animalDetailsStyles.description_value}>
                            {animal.breed ? 'Да' : 'Нет'}
                        </span>
                    </p>
                    <p className={animalDetailsStyles.description_title}>
                        Особые приметы: {features}
                    </p>
                </>
            )}
        </div>
    );
};

export default AnimalDetails;