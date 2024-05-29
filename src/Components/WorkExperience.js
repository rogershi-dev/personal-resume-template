import SectionHeaderTemplate from './SectionHeaderTemplate';


export default function WorkExperience() {
    return (
        <div>
            <SectionHeaderTemplate sectionHeaderName="EXPERIENCE"/>

            {/* Specify the company information */}
            <div style={{ 
                marginTop:"10px", 
                marginBottom:"6px",  
                display:"flex", 
                position:"relative" 
                }}
            >
                <div style={{fontWeight:"bold"}}>
                    Linwu Southern Mining Company
                </div>
                <div style={{ position:"absolute", right:"0px"}}>
                    Chenzhou, Hunan
                </div>
            </div>

            {/* Specify my role in the company */}
            <div style={{ display:"flex", position:"relative" }}>
                <div style={{ color:"#7d7d7d" }}>
                    Technical Support Engineer
                </div>

                <div style={{ 
                    color:"#696969" ,
                    fontWeight:"bold",
                    position:"absolute",
                    right:"0px" 
                    }}
                >
                    Mar 2022 - Feb 2024
                </div>
            </div>

        </div>
    );
};