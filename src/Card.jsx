import React, { Component } from 'react';

export default class Card extends Component {
    render() {
        const profile = this.props;
        return (
            <div className='text-md mr-14 mt-8 flex'>
                <img className="w-[120px] ml-[780px] bg-green-500" src={profile.avatar_url} />
                <div>
                    <div className="px-4 font-bold">{profile.name}</div>
                    <div className="px-4">{profile.company}</div>
                </div>
            </div>
        )
    }
}
