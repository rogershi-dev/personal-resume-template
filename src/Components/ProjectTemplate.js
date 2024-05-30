

export default function ProjectTemplate({ title, responsibilities, utilized }) {
    return (
        <div>
            {/* Specify the project name */}
            <div style={{ display:"flex",marginTop:"10px" }}>
                <div style={{ fontWeight:"bold"}}>
                    {title}
                </div>
            </div>

            {/* Specify list of responsibilities in the project */}
            <div style={{marginTop:"15px"}}>
                <ul>
                    {
                        responsibilities.map((responsibility, index) => (
                            <li key={index} style={{marginBottom:"5px"}}>
                                {responsibility}
                            </li>
                        ))
                    }
                </ul>
            </div>

            {/* Specify main tech stack involved */}
            <div style={{ display:"flex",marginTop:"15px" }}>
                <div style={{ fontWeight:"bold",marginLeft:"26px"}}>
                    Utilized:
                </div>
                <div style={{ marginLeft:"5px" }}>
                    {utilized}
                </div>
            </div>
        </div>
    );
};