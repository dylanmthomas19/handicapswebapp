import React from 'react';
import metris1 from '../../assets/images/Metris-2016-a.jpg'
import metris2 from '../../assets/images/Metris-2016-b.jpg'
import metris3 from '../../assets/images/Metris-2016-c.jpg'

const Gallery = () => (
    <div>
        <h3>Van Gallery</h3>
        <p id="galleryP">
            The Superarm Lift System is one of the most innovative lift systems that you will find today. While other lift systems rely on ramps and platforms to help people load 
            wheelchairs into vans, you won’t need to worry about using them when you have one of the Superarm systems from Handicaps Inc. You can utilize wheelchair and handicapped vans 
            more easily than ever before with a Superarm lift.
            <br />
            <br />
            Handicaps Inc. specializes in creating a range of different products that allow those with mobility issues to go about their lives normally. The Superarm is a great example 
            of this as it gives people the chance to place their mobility devices into wheelchair and handicapped vans with very little effort. They can then transport wheelchairs and 
            more around with them conveniently.
            <br />
            <br />
            At Handicaps Inc., we are a family owned and operated business that has been providing people with the mobility solutions they need since 1959. We use our 50 years of 
            experience to continue to push the envelope and create new equipment for those who need it most. It will completely change the way you use your wheelchair and give you back 
            much of your freedom.
            <br />
            <br />
            To inquire about the Superarm Lift System that Handicaps Inc. manufactures, give Handicaps Inc. a call at 303-781-2062 today.
    
        </p>
        <img className="metrisThumb" id="metThumb1" src={metris1} alt="2000E Mercedes Metris 2016" />
        <img className="metrisThumb" id="metThumb2" src={metris2} alt="2000E Mercedes Metris 2016" />
        <img className="metrisThumb" id="metThumb3" src={metris3} alt="2000E Mercedes Metris 2016" />
    </div>
)

export default Gallery;