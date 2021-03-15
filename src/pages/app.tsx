import React from 'react';

import { MegaButton } from 'components/button/button';
import * as style from './app.module.scss';

export class App extends React.PureComponent<any> {
    render() {
        return (
            <div className={style.wrapper}>
                <input value="Иванов" />
                <input value="Михаил" />
                <input value="Петрович" />
                <input value="20.02.1988" />
                {/* нужно написать компонент выбора "мужской" или "женский" */}
                &quot;пол&quot;: мужской\женский
                <MegaButton />
            </div>
        );
    }
}
