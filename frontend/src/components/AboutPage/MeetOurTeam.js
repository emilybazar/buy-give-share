// AUTHOR:  Emily Bazar
// PROGRAM: MeetOurTeam.js
// DATE:    9 August 2024
// PURPOSE: This component renders the "Meet Our Team" section of the "About Us" page for the Buy Give Share website.
//          It introduces the key members of the team, displaying their photos and showing a description in a box when hovered.
// INPUT:   n/a
// PROCESS: Uses React to build the layout and styling for the team member section. The descriptions are hidden in a box below the image and appear when the user hovers over a photo.
// OUTPUT:  The rendered output is a section where the team members' photos are initially displayed, and the description box appears on hover.

import React from 'react';
import './MeetOurTeam.css';
import EmilyBazar from '../../assets/team/EmilyBazar.png';
import IvanLo from '../../assets/team/IvanLo.png';
import JamesWang from '../../assets/team/JamesWang.png';
import TimEconomides from '../../assets/team/TimEconomides.png';
import JosiahYu from '../../assets/team/JosiahYu.png';

const MeetOurTeam = () => {
    const teamMembers = [
        {
            name: 'James Wang',
            role: 'Co-Founder',
            description: `James is the visionary behind Buy, Give, Share. As an advocate for knowing that companies can optimally grow through the act of giving back to society, James believes that this area should be taken further beyond its current state.`,
            imgSrc: JamesWang,
        },
        {
            name: 'Ivan Lo',
            role: 'Co-Founder',
            description: `Ivan comes to Buy Give Share as a strategic expert in non-profits, web design, graphic design, and brand marketing. He is a Chicago-based humanitarian photographer who has worked with dozens of different humanitarian organizations primarily throughout the developing world since 2005.`,
            imgSrc: IvanLo,
        },
        {
            name: 'Tim Economides',
            role: 'Senior Advisor',
            description: `Tim comes to Buy Give Share along a journey that has taken him from pairing professional volunteers with nonprofit humanitarian organizations to high-tech engineering to building technology infrastructure for cutting edge startups.`,
            imgSrc: TimEconomides,
        },
        {
            name: 'Josiah Yu',
            role: 'Creative Director',
            description: `Josiah comes to Buy Give Share as an LA-based film director and lifelong creative. He has worked on various films, commercials, and music videos since 2013, with clients such as Ring (Amazon) and the Center for Japanese Mental Health (CJMH).`,
            imgSrc: JosiahYu,
        },
        {
            name: 'Emily Bazar',
            role: 'Chief Software Engineer',
            description: `Emily comes to Buy Give Share as the Chief Software Engineer, marking the start of her career in software development. She holds a B.S. in Biology from the University of Washington and is currently pursuing her M.S. in Computer Science at Seattle University.`,
            imgSrc: EmilyBazar,
        },
    ];

    return (
        <div className="meet-our-team">
            <h2>Meet Our Team</h2>
            <div className="team-members-grid">
                {teamMembers.map((member, index) => (
                    <div key={index} className="team-member">
                        <img src={member.imgSrc} alt={member.name} />
                        <div className="description-box">
                            <h3>{member.name}</h3>
                            <p className="role">{member.role}</p>
                            <p>{member.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MeetOurTeam;
