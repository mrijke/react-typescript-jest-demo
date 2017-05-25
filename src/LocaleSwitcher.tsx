import React from "react";
import { translate, InjectedTranslateProps } from "react-i18next";

const languages = [{
    id: 'en',
    name: 'English'
}, {
    id: 'nl',
    name: 'Netherlands',
}, {
    id: 'it',
    name: 'Italian',
}, {
    id: 'de',
    name: 'Deutsch',
}];

class LocaleSwitcher extends React.Component<{} & InjectedTranslateProps, {}> {

    public render() {
        console.log(languages);
        return (
            <div>
                <select>
                    <option>{this.props.t!("Select language")}</option>
                    {languages.map((lang) => {
                        return <option key={lang.id} value={lang.id}>{lang.name}</option>
                    })}
                </select>
            </div>
        )
    }
}

export default translate()(LocaleSwitcher);