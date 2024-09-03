// AUTHOR:  Emily Bazar
// PROGRAM: MeetOurTeam.js
// DATE:    9 August 2024
// PURPOSE: This component renders the "Meet Our Team" section of the "About Us" page for the Buy Give Share website.
//          It introduces the key members of the team, including their roles and bios.
// INPUT:   n/a
// PROCESS: Uses React to build the layout and styling for the team member section.
// OUTPUT:  The rendered output is a section that displays information about the team members within the "About Us" page.

import React from 'react';
import './MeetOurTeam.css';
import EmilyBazar from '../../assets/team/EmilyBazar.png';
import IvanLo from '../../assets/team/IvanLo.png';
import JamesWang from '../../assets/team/JamesWang.png';
import TimEconomides from '../../assets/team/TimEconomides.png';
import JosiahYu from '../../assets/team/JosiahYu.png';

const MeetOurTeam = () => {
    return (
        <div className="meet-our-team">
            <h2>Meet Our Team</h2>

            <div className="team-member">
                <img src={JamesWang} alt="James Wang" />
                <div>
                    <h3>James Wang</h3>
                    <p>Co-Founder</p>
                    <p>
                        James is the visionary behind Buy, Give, Share. As an advocate for knowing that companies can optimally grow
                        through the act of giving back to society, James believes that this area should be taken further beyond its current state.
                    </p>
                    <p>
                        His vision comes from various key gaps he found when helping non-profit organizations while working as a leader in pharmacy.
                        James comes from a strong corporate background in pharmacy from leading several pharmacies in various markets to leading large
                        centralized regional teams. James has also operationally designed many key pharmacy programs that have been praised to help
                        optimize and modernize the industry. James has a BS from the University of Illinois at Urbana-Champaign, a PharmD from Midwestern
                        University, and an MBA from Kelley School of Business.
                    </p>
                    <p>
                        In his spare time for fun, you can find James investing in companies, helping others find their dream home with his real estate license,
                        running in races, and scuba diving in the most remote areas of the world.
                    </p>
                </div>
            </div>

            <div className="team-member">
                <img src={IvanLo} alt="Ivan Lo" />
                <div>
                    <h3>Ivan Lo</h3>
                    <p>Co-Founder</p>
                    <p>
                        Ivan comes to Buy Give Share as a strategic expert in non-profits, web design, graphic design, and brand marketing. Ivan is a Chicago-based
                        humanitarian photographer who has worked with dozens of different humanitarian organizations primarily throughout the developing world since 2005.
                        He also co-founded and sat as a board member for a non-profit designed to help professionals volunteer their services to fill other organizations' specific needs.
                    </p>
                    <p>
                        In addition to photography, Ivan is a freelance graphic designer, branding consultant, and has served as creative director for various startups.
                        Ivan graduated from the University of Illinois at Chicago with a BFA in photography, film, and electronic media. In his spare time, he is a die-hard motorsports
                        fan, collects vintage cameras, and runs an online museum for his collection.
                    </p>
                </div>
            </div>

            <div className="team-member">
                <img src={TimEconomides} alt="Tim Economides" />
                <div>
                    <h3>Tim Economides</h3>
                    <p>Senior Advisor</p>
                    <p>
                        Tim comes to Buy Give Share along a journey that has taken him from pairing professional volunteers with nonprofit humanitarian organizations to high-tech engineering
                        to building technology infrastructure for cutting edge startups. Tim is drawn to efforts that draw humans to build community and walk with each other.
                    </p>
                    <p>
                        Tim holds a BS from the University of Illinois at Chicago and is currently getting his MBA from Gies School of Business. In his spare time, you can find him tinkering
                        with broken engines in his shed or hiking a trail in the mountains with his family.
                    </p>
                </div>
            </div>

            <div className="team-member">
                <img src={JosiahYu} alt="Josiah Yu" />
                <div>
                    <h3>Josiah Yu</h3>
                    <p>Creative Director</p>
                    <p>
                        Josiah comes to Buy Give Share as an LA-based film director and lifelong creative. He has worked on various films, commercials and music videos since 2013,
                        with clients such as Ring (Amazon) and the Center for Japanese Mental Health (CJMH). In 2015, he co-founded his production company, Do Yu Productions,
                        and currently serves as its head director and CEO.
                    </p>
                    <p>
                        He holds a BA in Theatre, Film and Digital Production from the University of California, Riverside. In addition to directing and running his production team,
                        Josiah is a freelance editor and producer. In his spare time, he likes to watch movies, write, take long inspiring walks and create new ideas in the realm
                        of sci-fi and fantasy projects.
                    </p>
                </div>
            </div>

            <div className="team-member">
                <img src={EmilyBazar} alt="Emily Bazar" />
                <div>
                    <h3>Emily Bazar</h3>
                    <p>Lead Software Engineer</p>
                    <p>
                        Emily comes to Buy Give Share as the Lead Software Engineer, marking the start of her career in software development. She holds a B.S. in Biology from the University of
                        Washington and is currently pursuing her M.S. in Computer Science at Seattle University.
                    </p>
                    <p>
                        In addition to her role at Buy Give Share, Emily works as a pharmacy technician, demonstrating a strong commitment to both healthcare and technology.
                        Her goal as a software engineer is to create technology to better human lives. Based in the Pacific Northwest, she enjoys spending time with her dogs
                        and attending concerts in her free time.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MeetOurTeam;
