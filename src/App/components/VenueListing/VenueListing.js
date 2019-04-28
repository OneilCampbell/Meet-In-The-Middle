import React from 'react';
import "./style.css";
import LabelTag from "../LabelTag/LabelTag";
import Map from "../Map/Map"


const VenueListing = (props) => {
    const allTags = props.venue.description_tags.map( tag => <LabelTag content={tag} />)
    return(
        <div className="results-page">
            <div className="venue-listing">
                <div className="venue">
                    <div className={props.venue.name} />
                    <div className="venue-info">
                        <p className="venue-name">{props.venue.description}</p>
                    </div>
                </div>
                <p className="venue-tag-intro">This Venue meets your groups needs with:</p>
                <div className="venue-tags">
                    {allTags}
                </div>
                <p className="venue-zip">{props.venue.zip_code == 10010 ? 2.3 : 5.7} miles from you</p>
            </div>
        </div>
    )
}

export default VenueListing;