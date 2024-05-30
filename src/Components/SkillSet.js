import SectionHeaderTemplate from './SectionHeaderTemplate';

export default function SkillSet() {

    const skills = [
        "SpringBoot",
        "ReactJS",
        "RocketMQ",
        "Git"
    ];


    return (
        <div>
            <SectionHeaderTemplate sectionHeaderName="SKILLS"/>
            
            <ul>
                {
                    skills.map((skill, index) => (
                        <li key={index} style={{ marginBottom:"5px"}}>
                            {skill}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};